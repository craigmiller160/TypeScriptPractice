//Values of Enums are implicitly ordinals unless set otherwise
var DaysOfTheWeek;
(function (DaysOfTheWeek) {
    DaysOfTheWeek[DaysOfTheWeek["SUN"] = 0] = "SUN";
    DaysOfTheWeek[DaysOfTheWeek["MON"] = 100] = "MON";
    DaysOfTheWeek[DaysOfTheWeek["TUES"] = 101] = "TUES";
    DaysOfTheWeek[DaysOfTheWeek["WED"] = 102] = "WED";
    DaysOfTheWeek[DaysOfTheWeek["THURS"] = 103] = "THURS";
    DaysOfTheWeek[DaysOfTheWeek["FRI"] = 104] = "FRI";
    DaysOfTheWeek[DaysOfTheWeek["SAT"] = 105] = "SAT";
})(DaysOfTheWeek || (DaysOfTheWeek = {}));
var day = DaysOfTheWeek.MON;
console.log(day);
console.log(DaysOfTheWeek.FRI);
if (day === DaysOfTheWeek.MON) {
    console.log('Go to work');
}
