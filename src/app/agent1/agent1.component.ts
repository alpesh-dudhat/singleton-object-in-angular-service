import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';
@Component({
  selector: 'app-agent1',
  templateUrl: './agent1.component.html',
  styleUrls: ['./agent1.component.css'],
})
export class Agent1Component implements OnInit {
  ticket: number[];

  constructor(private booking: BookingService) {
    this.ticket = this.booking.getTicket();
    console.log('constructor', this.ticket);
  }

  ngOnInit(): void {
    // this.ticket1 = this.booking.getTicket();
    // console.log(this.ticket1);
  }

  book(data) {
    console.log('data', data);
    this.booking.bookticket(data);
    console.log('book data', data);
    console.log('bookticket1  this.ticket', this.ticket);
    this.ticket = this.booking.getTicket();
    console.log('bookticket2  this.ticket', this.ticket);
  }
}
