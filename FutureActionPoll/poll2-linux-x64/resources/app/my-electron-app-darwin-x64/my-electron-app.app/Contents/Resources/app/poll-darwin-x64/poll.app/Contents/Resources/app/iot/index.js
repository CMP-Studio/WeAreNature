'use strict';

const awsIot = require('aws-iot-device-sdk');

let client;
global.IoT = { 
    create: (topic, iotEndpoint, region, accessKey, secretKey, onConnect, onMessage, onClose) => {
        client = awsIot.device({
            region: region,
            protocol: 'wss',
            accessKeyId: accessKey,
            secretKey: secretKey,
            port: 443,
            host: iotEndpoint
        });

        client.on('connect', () => {
            client.subscribe(topic);
            onConnect();
        });
        client.on('message', onMessage);            
        client.on('close', onClose);     
    },
}; 
