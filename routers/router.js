const controller = require('../controllers/controller');
const httpStatusCodes = require('../controllers/httpStatusCodes');
const {  GET } = require('./method');


function handleMethodNotAllowed(response) {
    response.statusCode = httpStatusCodes.METHOD_NOT_ALLOWED
    response.setHeader('Content-Type', 'text/plain');
    response.end('Method Not Allowed');
}


function handleRouting(request, response) {
    const { url, method } = request;

    if (method === GET) {
        switch (url) {
            case '/':
                controller.handleHome(request, response);
                break;
            case '/about':
                controller.handleAbout(request, response);
                break;
            default:
                controller.handleNotFound(request, response);
                break;
        }
    } else {
        handleMethodNotAllowed(response)
    }
}

module.exports = {
    handleRouting,
};
