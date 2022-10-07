import { Injectable } from '@angular/core';

@Injectable()
export class BookingService {
  ticket: number[] = [1];
  constructor() {}

  bookticket(val) {
    this.ticket.push(val);
    console.log('bookticket val', val);
  }

  getTicket() {
    console.log('getTicket', this.ticket);
    return this.ticket;
  }
}
