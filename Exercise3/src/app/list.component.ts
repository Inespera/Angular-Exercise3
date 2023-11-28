import { Component, OnInit } from '@angular/core';
import { TransactionService } from './transaction.service';
// import { Data } from '../../data/transactions.json';

@Component({
  selector: 'app-root',
  templateUrl: './list.component.html',
  styleUrls: ['./app.component.css']
})
export class ListComponent implements OnInit {
  transactions: any[] = [];

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe((data) => {
      this.transactions = data;
    });
  }
  title = 'Exercise3';
}

