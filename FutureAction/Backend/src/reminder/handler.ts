
import * as Mailgun from 'mailgun-js';
import { readFileSync } from 'fs';

import { ICallback, IEventPayload, HTTPStatusCodes } from '../lambdaTypes';

import { isObjectEmpty, objectOnlyContainsKeys } from '../utilities';
import { dynamoDBPutPromise } from '../dynamoDBUtilities';

declare const process: {
  env: {
    tableName: string,
    mailgunAPIKey: string,
    mailgunDomain: string,
  }
};

const mailgun = Mailgun({
  apiKey: process.env.mailgunAPIKey,
  domain: process.env.mailgunDomain,
});

export const reminder = async (event: IEventPayload, context, callback: ICallback) => {  
  const subcategories = [
    'Airquality',
    'Beef',
    'Bike',
    'Birds',
    'Energyaudit',
    'Foodwaste',
    'Hike',
    'Kayaking',
    'Nativeplants',
    'Parking',
    'Plastics',
    'Renewable',
    'Reuse',
    'Soil',
    'Tree',
  ];

  let body;
  try {
    body = JSON.parse(event.body);
  } catch (e) {
    console.log(e);

    callback(null, {
      statusCode: HTTPStatusCodes.BadRequest,
      body: "JSON is not valid.",
    });
    return;
  }

  if (isObjectEmpty(body) ||
    objectOnlyContainsKeys(body, ["email", "subcategory"]) === false) {
    const dataFormat = {
      email: 'email',
      subcategory: 'MinorPledgeCategory',
    };

    callback(null, {
      statusCode: HTTPStatusCodes.BadRequest,
      body: "Please send data in the format: " + JSON.stringify(dataFormat),
    });
    return;
  } else if (!subcategories.includes(body.subcategory)) {
    callback(null, {
      statusCode: HTTPStatusCodes.BadRequest,
      body: "Please make sure the subcategory is correct.",
    });
    return;
  }

  try {
    const signed_up_date = (new Date).toLocaleDateString('en-US', { timeZone: "America/New_York" });

    const emailItem = {
      signed_up_date,
      ...body,
    }

    const putParams = {
      TableName: process.env.tableName,
      Item: emailItem,
    };

    await dynamoDBPutPromise(putParams);

    // Find more dynamic way to find the emails
    const functionName = context.functionName.split('-').pop();
    const html = readFileSync(`./src/${functionName}/emails/confirm${body.subcategory}.html`, 'utf8');
  
    const from = `We Are Nature <WeAreNaturePGH@${process.env.mailgunDomain}>`;

    const emailData = {
      from,
      to: body.email,
      subject: "Hooray! Here’s your pledge information.",
      html,
    };
  
    mailgun.messages().send(emailData, function (e) {
      if (e) {
        console.log(e);
      }

      callback(null, {
        statusCode: HTTPStatusCodes.OK,
      });
    });
  } catch (e) {
    console.log(e);

    callback(null, {
      statusCode: HTTPStatusCodes.InternalServerError,
      body: "Server Error. Check server error logs.",
    });
  }
}
