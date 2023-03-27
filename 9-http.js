const http = require('http');

http.createServer( (req, res) => {
  console.log('Request Received');

  console.log(req); //req object
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;

  let myPage = 'About Page';

  console.log(req.method);

  switch (req.url) {
    case "/":
      // execute a db query
      // keep the data in variable and patch it up in h1...
      res.end(
        `<!DOCTYPE html>
          <html lang="en">
          <head>
            <title>Home Page</title>
          </head>
          <body>
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </nav>
            <h1>Welcome to Home Page</h1>
          </body>
        </html>
        `
      );
      break;

    case "/about":
      res.end(
        `<!DOCTYPE html>
          <html lang="en">
          <head>
            <title>About Page</title>
          </head>
          <body>
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </nav>
            <h1>Welcome to ${myPage} Page</h1>
          </body>
        </html>
        `
      );
      break;

    case "/contact":
      res.end(
        `<!DOCTYPE html>
          <html lang="en">
          <head>
            <title>Contact Page</title>
          </head>
          <body>
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </nav>
            <h1>Welcome to Contact Page</h1>
          </body>
        </html>
        `
      );
      break;

    default:
      res.statusCode = 404;
      res.end(
        `<!DOCTYPE html>
          <html lang="en">
          <head>
            <title>404 - Page Not Found</title>
          </head>
          <body>
            <h1>404 - Page Not Found</h1>
          </body>
        </html>
      `
      );
  }

})
.listen(3001, () => {
  console.log(`Server is started on PORT: 3001. Open the URL http://localhost:3001`);
});