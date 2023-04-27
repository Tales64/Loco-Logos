class Shape {
    constructor(){
        this.color=''
    }
    setColor(color){
        this.color=(color);
    }
}
// Create what the shapes will look like when finished then add colors 
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />;`
        }
 
    }
// Square parameters    
class Square extends Shape {
        render() {
            return`<rect x="70" y="20" width="160" height="160" fill="${this.color}"/>;`
        }
    }
// Triangle parameters
    class Triangle extends Shape {
        render() {
            return`<polygon points="70 20, 230 20, 150 180" fill="${this.color}"/>;`
        }
    }

    module.exports = {Circle, Square, Triangle};