class Circle{
    constructor(_radius) {
        this.radius = _radius;
    }
    getArea(){
        return  Math.PI * this.radius * this.radius;
    }

}

let area = new Circle(2);
alert(area.getArea())
