

class myDate{
    constructor(_day, _month, _year) {
        this.day = _day;
        this.month = _month;
        this.year = _year;
    }
    getDay(){
        return this.day;
    }
    getMonth(){
        return this.month;
    }
    getYear(){
        return this.year;
    }


}

let date = new myDate(2,2,2012);

let day1 = date.getDay();
let month1 =date.getMonth();
let year1 = date.getYear();
alert(day1 + "/" + month1 + "/" + year1);

day1 =  date.day = 23;
month1 = date.month = 12;
year1 = date.year = 2011;
alert(day1 + "/" + month1 + "/" + year1);

