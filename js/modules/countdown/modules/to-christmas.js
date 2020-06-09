class CountdownToChristmas {
    constructor() {
    }

    get _dateNow() {
        return new Date();
    }

    get _yearNow() {
        return this._dateNow.getFullYear();
    }
    get _christmasDate() {
        return new Date(`24 december ${this._yearNow} 23:59:59 gmt-0300`);
    }

    get _timeStampDiff() {
        return this._christmasDate.getTime() - this._dateNow.getTime();
    }

    get daysToChristmas() {
        return Math.floor(this._timeStampDiff / ( 24 * 60 * 60 * 1000 ))
    }

    get hoursToChristmas() {
        return Math.floor(this._timeStampDiff / ( 60 * 60 * 1000 ))
    }

    get minutesToChristmas() {
        return Math.floor(this._timeStampDiff / ( 60 * 1000 ))
    }

    get secondsToChristmas() {
        return Math.floor(this._timeStampDiff / 1000)
    }

    get countdown() {
        const days = this.daysToChristmas;
        const hours = this.hoursToChristmas % 24;
        const minutes = this.minutesToChristmas % 60;
        const seconds = this.secondsToChristmas % 60
        return {
            days,
            hours,
            minutes,
            seconds
        }
    }
}


export default function updateCountdown() {
    const spanDays    = document.querySelector('[data-countdown="days"]')
    const spanHours   = document.querySelector('[data-countdown="hours"]')
    const spanMinutes = document.querySelector('[data-countdown="minutes"]')
    const spanSeconds = document.querySelector('[data-countdown="seconds"]')

    setInterval(() => {
        const countdown = new CountdownToChristmas().countdown;

        spanDays.innerText = countdown.days
        spanHours.innerText = countdown.hours
        spanMinutes.innerText = countdown.minutes
        spanSeconds.innerText = countdown.seconds

    }, 1000)
}
