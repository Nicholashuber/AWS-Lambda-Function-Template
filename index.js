var AWS = require('aws-sdk');

exports.handler = async function (event, context) {

    // Your logic here
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
