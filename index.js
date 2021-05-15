// const refs = {
//   daysCount: document.querySelector('.value[data-value="days"]'),
//   hoursCount: document.querySelector('.value[data-value="hours"]'),
//   minsCount: document.querySelector('.value[data-value="mins"]'),
//   secsCount: document.querySelector('.value[data-value="secs"]'),
// }

class CountdownTimer {
  
  refs = {};
  timeComponents = { days: 0, hours: 0, mins: 0, secs: 0 };

  constructor({ selector, targetDate }) {
    this.refs.dd = document.querySelector(`${selector} .value[data-value="days"]`);
    this.refs.hh = document.querySelector(`${selector} .value[data-value="hours"]`);
    this.refs.mm = document.querySelector(`${selector} .value[data-value="mins"]`);
    this.refs.ss = document.querySelector(`${selector} .value[data-value="secs"]`);
    this.targetDate = targetDate;
  }

  start() {
    const startTime = this.targetDate;
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;
      const countdownTime = this.getTimeComponents(deltaTime);
      this.updTextContent() 
    }, 1000)
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  getTimeComponents(time) {
    this.timeComponents.days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    this.timeComponents.hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    this.timeComponents.mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    this.timeComponents.secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

  }

  updTextContent() {
    this.refs.dd.textContent = this.timeComponents.days;
    this.refs.hh.textContent = this.timeComponents.hours;
    this.refs.mm.textContent = this.timeComponents.mins;
    this.refs.ss.textContent = this.timeComponents.secs;
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jun 01, 2021'),
});

timer.start()