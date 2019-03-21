import Calculator from './../src/calculator.js';

describe ('Calculator', function() {
  //before refactor
  it('should output the day of the week selected', function() {
    let day = 2;
    let month = 4;
    let year = 1733;
    let date = new Calculator(day, month, year);
    expect(date.getWeekday()).toEqual("Thursday");
  });
  //refactored
  it('should output the day of the selected, refactored test', function() {
    expect(new Calculator(2, 4, 1733).getWeekday()).toEqual("Thursday");
  });
  //refactored
  it('should output the selected year', function(){
    expect(new Calculator(18, 10, 1981).getYearCode()).toEqual(3);
  });
  //before refactor
  it('should output the month selected', function() {
    let day = 2;
    let month = 5;
    let year = 1888;
    let selectedMonth = new Calculator(day, month, year);
    expect(selectedMonth.getMonthCode()).toEqual(1);
  });

  //after refactor with different day and year
  it('should output the month selected', function() {
    expect(new Calculator(0, 5, 0).getMonthCode()).toEqual(1);
  });

  //before refactor
  it('should output the year selected', function() {
    let day= 9;
    let month = 8;
    let year = 1888;
    let selectedCode = new Calculator(day, month, year);
    expect(selectedCode.getCenturyCode()).toEqual(2);
  });

  //after refactorit
  it('should ouput the year selected', function() {
    expect(new Calculator(9,8,1888).getCenturyCode()).toEqual(2);
  });

  //before refactor
  it('should output the leap year', function() {
    let day = 9;
    let month = 8;
    let year = 1777;
    let selectedLeapYear = new Calculator(day, month, year);
    expect(selectedLeapYear.getLeapYearCode()).toEqual(0);
  });

  it('should ouput the leap year', function(){
    expect(new Calculator(9,8,1777).getLeapYearCode()).toEqual(0);
  });
});
