// Create nested element
// const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, React.createElement("h1", { id: "h1tag" }, "I am h1 tag")));

// How to add sibling - third argument would be an array
let start = Date.now();

const createChildElement = (type, num) => {
  let htmlArray = [];
  for (let i = 1; i <= num; i++) {
    if (type === "div") {
      let createDiv = React.createElement(
        `div`,
        { className: `div_${i}tag` },
        `I am div${i} tag`
      );
      htmlArray.push(createDiv);
    } else if (type === "h1") {
      let createH1 = React.createElement(
        `h1`,
        { className: `h${i}tag` },
        `I am h1 tag`
      );
      htmlArray.push(createH1);
    }
  }
  return htmlArray
};

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, createChildElement("div", 5)),
  React.createElement("div", { id: "child2" }, createChildElement("h1", 9)),
]);

// const heading = React.createElement("h1", { id: "heading" }, "Hello world from react!");
// React.createElemet is a object not a html tag
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root)
root.render(parent);
let timeTaken = Date.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");
