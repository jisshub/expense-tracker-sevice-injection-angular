import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'expense-tracker-app';

  expenseList: {description: string, date: string, amount: string}[] = [];

  onFetchExpense(accessData: {description: string, date: string, amount: string} ){
      this.expenseList.push({
        description: accessData.description,
        date: accessData.date,
        amount: accessData.amount
      })
    console.log(this.expenseList);    
  }
  
}
