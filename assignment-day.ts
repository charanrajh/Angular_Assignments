function getDayByNumberOrDate<T>(arg:T):string {
    enum Weekdays {
        "Monday" = 1,
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    }
    let num;
    if(arg instanceof Date)
        num = arg.getDay()==0?7:arg.getDay();
    else
        num = arg
    let day = eval("Weekdays["+num+"]");

    return day;
}

console.log(getDayByNumberOrDate(2));
console.log(getDayByNumberOrDate(new Date("2020-10-16")));
