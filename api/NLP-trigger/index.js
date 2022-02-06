const axios = require('axios');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    var url  = "https://sl4-nlp-api.cognitiveservices.azure.com/text/analytics/v3.2-preview.1/sentiment?opinionMining=true"
    var config = {
        headers: {
            "Ocp-Apim-Subscription-Key": "f128e118a9ff4cb0a62e39a095c1cbfd"
        }
    };

    var body = {
        documents: [{
            id: 1,
            text: req.body.text
        }]
    };

    const responseMessage = await axios.post(url,body,config);
    context.log(responseMessage.data.documents[0].sentiment.toUpperCase());
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage.data.documents[0].sentiment.toUpperCase()
    };
}