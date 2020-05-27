export default function initWorkTime() {
    const workTime = document.querySelector('[data-weekdays]')
    const workWeekDays = workTime.dataset.weekdays.split(',').map(Number);
    const workHours = workTime.dataset.hours.split(',').map(Number)

    const dateNow = new Date();
    const weekDayNow = dateNow.getDay();
    const hourNow = dateNow.getHours();

    const isWorkWeekDay = workWeekDays.indexOf(weekDayNow) !== - 1;

    const isWorkHour = (hourNow >= workHours[0] && hourNow < workHours[1]);

    if(isWorkWeekDay && isWorkHour) {
        workTime.classList.add('open')
    }
}
