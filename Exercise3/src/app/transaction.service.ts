import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Data } from '../../data/transactions.json';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  getTransactions(): Observable<any[]> {
    return of(Data);
  }

  getTransactionById(id: string): Observable<any> {
    const transaction = Data.find((t) => t.id === id);
    return of(transaction);
  }
}
