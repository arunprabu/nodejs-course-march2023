exports.aboutRoute = (req, res) => {
  console.log("handling get on " + req.url);
  res.status(200).send(`<!DOCTYPE html>
      <html lang="en">
      <head>
        <title>About Page!</title>
      </head>
      <body>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <h1>Welcome to About Page!!!!</h1>
      </body>
    </html>
    `);
}