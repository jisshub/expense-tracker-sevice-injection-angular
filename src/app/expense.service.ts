export class ExpenseService{
    // create a method and give 3 parameters
    expenseList: Array<{description: string, date: string, amount: string}> = [];

    // push an object to the array
    addExpenses(description: string, date: string, amount: string){ 
        this.expenseList.push({
            description: description,
            date: date,
            amount: amount
        })
    }
}