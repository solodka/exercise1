function example() {
    "use strict";
    return true;
}

let 
    money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let expensesSum = 0;
for (let i = 0; i < 2; i++){
    let costName = prompt("Введите обязательную статью расходов в месяце", ""),
        costSum = prompt("Во сколько обойдется?","");
        appData.expenses[costName] = +costSum;
        expensesSum += +costSum;
        console.log(expensesSum);
}


let budgetForDay = (money - expensesSum)/30;
alert(budgetForDay.toFixed(2));