const inquirer = require('inquirer');
const fs = require('fs');
const  {Circle, Square, Triangle} = require ('./lib/shapes.js');

const questions = [
    {
        type: "input",
        name: "text",
        message: "Text: Enter up to (3) Characters:",
    },
    {
        type: "input",
        name: "textColor",
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
        name: "shapeColor",
        message: "Shape Color: Enter a color keyword (OR a hexadecimal number):",
    },
];

inquirer.prompt(questions).then(answers => {
    const { text, textColor, shape, shapeColor } = answers;
    const logo = createLogo(text, textColor, shape, shapeColor);
    fs.writeFile('./sampleLogo.svg', logo, err => {
      if (err) {
        console.log('Error writing file:', err);
      } else {
        console.log('Generated sampleLogo.svg!');
      }
    });
  });

function createLogo(text, textColor, shape, shapeColor) {
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
    shapeImage.setColor(shapeColor)
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="70" y="20" width="160" height="160" fill="black"/>
      ${shapeImage.render()}
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="70">${text}</text>
    </svg>`;
  }