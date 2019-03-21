export default class Calculator {
  constructor(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

  getWeekday() {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let weekdayCode = null;
    let yearCode = this.getYearCode(this.year);
    let monthCode = this.getMonthCode(this.month);
    let centuryCode = this.getCenturyCode(this.year);
    let leapYearCode = this.getLeapYearCode(this.year);

    if(leapYearCode === 1 && (this.month === 1 || this.month === 2)){
      weekdayCode = (yearCode + monthCode + centuryCode + this.day - leapYearCode) % 7 - 1;
    } else {
      weekdayCode = (yearCode + monthCode + centuryCode + this.day - leapYearCode) % 7;
    }
    let output = weekday[weekdayCode];
    console.log(yearCode, monthCode, centuryCode, this.day, leapYearCode);
    return output;
  }

  getYearCode() {
    let yearCode = null;
    if(this.year >= 1700 && this.year <= 1799) { yearCode = ((this.year - 1700) + Math.floor((this.year - 1700) / 4)) % 7; }
    if(this.year >= 1800 && this.year <= 1899) { yearCode = ((this.year - 1800) + Math.floor((this.year - 1800) / 4)) % 7; }
    if(this.year >= 1900 && this.year <= 1999) { yearCode = ((this.year - 1900) + Math.floor((this.year - 1900) / 4)) % 7; }
    if(this.year >= 2000 && this.year <= 2099) { yearCode = ((this.year - 2000) + Math.floor((this.year - 2000) / 4)) % 7; }
    if(this.year >= 2100 && this.year <= 2199) { yearCode = ((this.year - 2100) + Math.floor((this.year - 2100) / 4)) % 7; }
    if(this.year >= 2200 && this.year <= 2299) { yearCode = ((this.year - 2200) + Math.floor((this.year - 2200) / 4)) % 7; }
    if(this.year >= 2300 && this.year <= 2399) { yearCode = ((this.year - 2300) + Math.floor((this.year - 2300) / 4)) % 7; }
    return yearCode;
  }

  getMonthCode() {
    let monthCode = null;
    if(this.month === 1 || this.month === 10){ monthCode = 0; }
    if(this.month === 5) { monthCode = 1; }
    if(this.month === 8) { monthCode = 2; }
    if(this.month === 2 || this.month === 3 || this.month === 11) { monthCode = 3; }
    if(this.month === 6) { monthCode = 4; }
    if(this.month === 9 || this.month === 12) { monthCode = 5; }
    if(this.month === 4 || this.month === 7) { monthCode = 6; }
    return monthCode;
  }

  getCenturyCode() {
    let centuryCode = null;
    if((this.year >= 1900 && this.year <= 1999) || (this.year >= 2300 && this.year <= 2399)) { centuryCode = 0; }
    if((this.year >= 1800 && this.year <= 1899) || (this.year >= 2200 && this.year <= 2299)) { centuryCode = 2; }
    if((this.year >= 1700 && this.year <= 1799) || (this.year >= 2100 && this.year <= 2199)) { centuryCode = 4; }
    if(this.year >= 2000 && this.year <= 2099) { centuryCode = 6; }
    return centuryCode;
  }

  getLeapYearCode() {
    let leapYearCode = 0;
    if(this.year % 4 === 0 && (this.year % 100 !== 0 && this.year % 400 === 0)) { leapYearCode = 1; }
    return leapYearCode;
  }
}
