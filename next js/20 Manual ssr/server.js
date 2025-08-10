const http = require("http");
const fs = require("fs");
const path = require("path");
const React = require("react");
const ReactDOMServer = require("react-dom/server");

const pizzas = [
  { name: "Focaccia", price: 6 },
  { name: "Pizza Margherita", price: 10 },
  { name: "Pizza Spinaci", price: 12 },
  { name: "Pizza Funghi", price: 12 },
  { name: "Pizza Prosciutto", price: 15 },
];

function Home() {
  return (
    <div>
      <h1>🍕 Fast React Pizza Co.</h1>
      <p>
        This page has been rendered with React on
        the server 🤯
      </p>
      <h2>Menu</h2>
      <ul>
        {pizzas.map((pizza) => (
          <MenuItem
            pizza={pizza}
            key={pizza.name}
          />
        ))}
      </ul>
    </div>
  );
}

function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <button
        onClick={() => setCount((c) => c + 1)}
      >
        +1
      </button>
      <span>{count}</span>
    </div>
  );
}

function MenuItem({ pizza }) {
  return (
    <li>
      <h4>
        {pizza.name} (${pizza.price})
      </h4>
      <Counter />
    </li>
  );
}

const htmlTemplate = fs.readFileSync(
  path.join(__dirname, "index.html"),
  "utf8"
);

// ✅ Move clientJS here so it's available globally
const clientJS = fs.readFileSync(
  path.join(__dirname, "client.js"),
  "utf8"
);

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const reactMarkup =
      ReactDOMServer.renderToString(
        React.createElement(Home)
      );
    const responseHtml = htmlTemplate.replace(
      "%%CONTENT%%",
      reactMarkup
    );

    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.end(responseHtml);
  } else if (req.url === "/client.js") {
    res.writeHead(200, {
      "Content-Type": "application/javascript",
    });
    res.end(clientJS);
  } else {
    res.writeHead(404, {
      "Content-Type": "text/plain",
    });
    res.end("404 Not Found");
  }
});

server.listen(8000, () => {
  console.log("Listening on port 8000...");
});
