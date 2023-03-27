const express = require('express'); // importing expressjs 
const { aboutRoute } = require('./about');
const port = 3001;

// Let's Create an Express application. 
const app = express();

app.get('/', (req, res) => {
  console.log('handling get on ' + req.url);
  res.status(200).send(`<!DOCTYPE html>
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
    `);
});

// TODO: Serve external html file for the following URL
app.get("/about", aboutRoute);

// TODO: Serve external html file for the following URL
app.get("/contact", (req, res) => {
  console.log("handling get on " + req.url);
  res.status(200).send(`<!DOCTYPE html>
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
    `);
});

app.get('/users', (req, res) => { 
  // sending JSON data
  const userList = [
    {
      id: 1,
      name: "Steve",
      phone: "2343536758",
      email: "s@t.com",
    },
    {
      id: 2,
      name: "Virat",
      phone: "87967545",
      email: "a@b.com",
    }
  ];

  res.status(200).json(userList);
});

app.listen(port, () => {
  console.log(`Example SSR App is listening on port ${port}. 
  Open localhost:${port} from browser`);
});