interface LogDateTime {
    printDateTime(): void;
}

class LogCurrentDateTime implements LogDateTime {
    printDateTime(): void {
        let date = new Date();
        console.log("Time: "+date.toLocaleTimeString());
        console.log("Date (MM/DD/YYYY): "+date.toLocaleDateString());
    }
}
var obj = new LogCurrentDateTime();
obj.printDateTime();