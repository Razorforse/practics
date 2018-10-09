

let Clock = function() {
  this.date = `${new Date().getHours()}.${new Date().getMinutes()}.${new Date().getSeconds()}`;

}

Clock.prototype.render = function() {
  
   this.tick = setInterval(() => {
    let date = `${new Date().getHours()}.${new Date().getMinutes()}.${new Date().getSeconds()}`;
    console.log(date)},this.frequency || 1000)
  
}

Clock.prototype.stop = function() {
  clearInterval(this.tick)
}

Clock.prototype.setFrequency = function(val) {
    this.frequency = val;
}

let myclock = new Clock;


myclock.setFrequency(100);

myclock.render();


/* для остановки */
myclock.stop()










