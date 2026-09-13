const editors = {
  html: `<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello StarXCoder</h1>
    <p>Edit HTML, CSS, and JavaScript, then click Run.</p>
    <button onclick="sayHello()">Click me</button>
  </body>
</html>`,
  css: `body {
  font-family: Arial, sans-serif;
  padding: 30px;
  color: #1b0431;
  background: #fff5d8;
}

h1 {
  color: #7a1bd1;
}

button {
  border: 0;
  border-radius: 6px;
  padding: 10px 16px;
  color: white;
  background: #ff9800;
}`,
  js: `function sayHello() {
  console.log("Button clicked!");
  alert("Hello from StarXCoder IDE");
}

console.log("JavaScript is running.");`
};

let activeEditor = "html";

const tabs = document.querySelectorAll(".tab");
const codeEditor = document.getElementById("code-editor");
const runButton = document.getElementById("run-button");
const clearButton = document.getElementById("clear-button");
const preview = document.getElementById("preview");
const output = document.getElementById("output");

function setActiveEditor(name) {
  editors[activeEditor] = codeEditor.value;
  activeEditor = name;
  codeEditor.value = editors[name];

  tabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.editor === name);
  });
}

function buildPreview() {
  editors[activeEditor] = codeEditor.value;

  const consoleBridge = `
    <script>
      (function () {
        const send = (type, values) => parent.postMessage({
          source: "starxcoder-preview",
          type,
          values: Array.from(values).map((value) => {
            if (typeof value === "object") {
              try { return JSON.stringify(value); } catch (error) { return String(value); }
            }
            return String(value);
          })
        }, "*");

        ["log", "warn", "error"].forEach((type) => {
          const original = console[type];
          console[type] = function () {
            send(type, arguments);
            original.apply(console, arguments);
          };
        });

        window.addEventListener("error", (event) => {
          send("error", [event.message + " at line " + event.lineno]);
        });
      })();
    <\/script>`;

  return `${editors.html}
<style>${editors.css}</style>
${consoleBridge}
<script>${editors.js}<\/script>`;
}

function runCode() {
  output.textContent = "";
  preview.srcdoc = buildPreview();
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => setActiveEditor(tab.dataset.editor));
});

runButton.addEventListener("click", runCode);

clearButton.addEventListener("click", () => {
  output.textContent = "";
});

window.addEventListener("message", (event) => {
  if (!event.data || event.data.source !== "starxcoder-preview") return;

  const prefix = event.data.type.toUpperCase();
  const text = event.data.values.join(" ");
  output.textContent += `[${prefix}] ${text}\n`;
});

setActiveEditor("html");
runCode();
