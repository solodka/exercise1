function example() {
    "use strict";
    return true;
}

let money, time;
//money = prompt("Ваш бюджет на месяц?");
//time = prompt("Введите дату в формате YYYY-MM-DD");
money = "3200";
time = "2020-01-13";

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
let costName = "travel"; 
//prompt("Введите обязательную статью расходов в этом месяце");
let costSum = "900"; //prompt("Во сколько обойдется?");
appData.expenses = {costName: +costSum};

let budgetForDay = (money - appData.expenses.costName)/30;
alert(budgetForDay.toFixed(2));