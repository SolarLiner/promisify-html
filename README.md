# promisify-html

One-time binding to HTML events through promises.

## Install

```bash
npm install promisify-html
# OR
yarn add promisify-html
```

## Use

To bind to a window, document or element event:

```javascript
// Bind to the window click event, printing the event object to the console
window.on("click").then((ev) => console.log(ev));
// Bind to document load event, printing the event object to the console
document.on("load").then((ev) => console.log(ev));
// Bind to an form's submit event, printing the event object to the console
const form = document.createElement("form");
form.on("submit").then((ev) => console.log(ev));
```

Code uses the global `Promise` object, therefore you can use your favorite Promise library, as long as it implements the ES6 Promise constructor.
