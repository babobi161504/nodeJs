function handleHome(request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Welcome to the Home Page');
}

function handleAbout(request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('This is the About Page');
}

function handleNotFound(request, response) {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/plain');
    response.end('404 Not Found');
}

module.exports = {
    handleHome,
    handleAbout,
    handleNotFound,
};
