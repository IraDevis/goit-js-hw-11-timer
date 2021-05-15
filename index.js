const refs = {
  daysCount: document.querySelector('.value[data-value="days"]'),
  hoursCount: document.querySelector('.value[data-value="hours"]'),
  minsCount: document.querySelector('.value[data-value="mins"]'),
  secsCount: document.querySelector('.value[data-value="secs"]'),
}

class CountdownTimer {
  timeComponents = { days: 0, hours: 0, mins: 0, secs: 0 };

  constructor({targetDate}) {
    this.targetDate = targetDate;
  }

  count() {
    const startTime = this.targetDate;
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;
      this.getTimeComponents(deltaTime);
      this.updCounter() 
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

  updCounter() {
    refs.daysCount.textContent = this.timeComponents.days;
    refs.hoursCount.textContent = this.timeComponents.hours;
    refs.minsCount.textContent = this.timeComponents.mins;
    refs.secsCount.textContent = this.timeComponents.secs;
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jun 01, 2021'),
});

timer.count()