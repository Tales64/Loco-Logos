const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

const questions = [
    {
        type: "input",
        name: "text",
        message: "Text: Enter up to (3) Characters:",
    },
    {
        type: "input",
        name: "text-color",
        message: "Text Color: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "list",
        name: "shape",
        message: "Choose which shape you would like?",
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        type: "input",
        name: "shape-color",
        message: "Shape Color: Enter a color keyword (OR a hexadecimal number):",
    },
];

function generateLogo(text, textColor, shape, shapeColor) {
    let shapeImage;
    switch (shape) {
      case 'Circle':
        shapeImage = new Circle();
        break;
      case 'Square':
        shapeImage = new Square();
        break;
      case 'Triangle':
        shapeImage = new Triangle();
        break;
    }
    shapeImage.colorChoice(shapeColor)
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="70" y="20" width="160" height="160" fill="black"/>
      ${shapeImage.render()}
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${text-color}" font-size="70">${text}</text>
    </svg>`;
  }