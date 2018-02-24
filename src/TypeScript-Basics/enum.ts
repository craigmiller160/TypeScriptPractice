//Values of Enums are implicitly ordinals unless set otherwise
enum DaysOfTheWeek {
    SUN,
    MON = 100, //Everything after this is based on this one, but incremented
    TUES,
    WED,
    THURS,
    FRI,
    SAT
}

let day: DaysOfTheWeek = DaysOfTheWeek.MON;
console.log(day);
console.log(DaysOfTheWeek.FRI);

if(day === DaysOfTheWeek.MON){
    console.log('Go to work');
}