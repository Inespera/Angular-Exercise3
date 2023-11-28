import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from './transaction.service';


@Component({
  selector: 'app-root',
  templateUrl: './detail.component.html',
  styleUrls: ['./app.component.css'],
})
export class DetailComponent implements OnInit {
  transaction: any;

  constructor(
    private route: ActivatedRoute,
    private transactionService: TransactionService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id !== null) {
      this.transactionService.getTransactionById(id).subscribe((data) => {
        this.transaction = data;
      });
    }
  }
}
