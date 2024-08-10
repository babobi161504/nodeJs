const controller = require('../controllers/controller');

function handleRouting(request, response) {
    const { url, method } = request;

    if (method === 'GET') {
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
        response.statusCode = 405;
        response.setHeader('Content-Type', 'text/plain');
        response.end('Method Not Allowed');
    }
}

module.exports = {
    handleRouting,
};
