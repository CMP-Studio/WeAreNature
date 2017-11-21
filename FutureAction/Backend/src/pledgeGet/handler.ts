
import { ICallback, IEventPayload, HTTPStatusCodes } from '../lambdaTypes';

import { objectWithoutKeys } from '../utilities';
import { getTotalPledges } from '../dynamoDBUtilities';

export const pledgeGet = async (event: IEventPayload, context, callback: ICallback) => {
  const tableName = process.env.tableName;
  const pledges = await getTotalPledges(tableName);

  if (pledges == null) {
    callback(null, {
      statusCode: HTTPStatusCodes.InternalServerError,
      body: "Server Error. Check server error logs.",
    });
    return;
  }

  const response = {
    iotProperties: {
      region: process.env.AWS_REGION,
      accessKey: process.env.awsIOTAccessKey,
      secretKey: process.env.awsIOTSecretKey,
      endpoint: process.env.awsIOTEndPoint,
      topic: process.env.awsIOTTopic,
    },
    currentVotes: objectWithoutKeys(pledges, ['type']),
  }

  callback(null, {
    statusCode: HTTPStatusCodes.OK,
    body: JSON.stringify(response),
  });
}
