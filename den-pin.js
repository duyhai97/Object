    class Batery {
    constructor(energy) {
        this.energy = energy;
    }
    setEnergy(energy){
        this.energy = energy;
    }
    getEnergy(){
        return this.energy;
    }
    decreaseEnergy(){
        if(this.energy > 0){
            this.energy--;
        }
    }
    }

  class FlashLamp {
    constructor(battery, status) {
        this.battery = battery;
        this.status = status;
    }
    setBattery(){
        this.battery = batery;
    }
      getBatteryInfo(){
        return this.battery.getEnergy()
      }
      Light(){
        if(this.status){
            alert("lighting");
        }
        else {
            alert("Not lighting");
        }
      }
      TurnOn(){
        this.status = true;
      }
      TurnOff(){
        this.status = false;
      }
  }

  let batery = new Batery();
    batery.setEnergy(10);
let flashLamp  = new FlashLamp();
    flashLamp .setBattery(batery);
document.write("Battery info: " + flashLamp.getBatteryInfo() + "<br/>")
    flashLamp .Light();

document.write("Turn on <br>");
    flashLamp .TurnOn();
    flashLamp .Light();
document.write("Battery info: " + flashLamp .getBatteryInfo() + "<br/>");

    flashLamp.battery.decreaseEnergy();
    document.write("Battery khi giam: " + flashLamp .getBatteryInfo() + "<br/>");

document.write("Turn off <br/>")
    flashLamp .TurnOff();
    flashLamp .Light();

