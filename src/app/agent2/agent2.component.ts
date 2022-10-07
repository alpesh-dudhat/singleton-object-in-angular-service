import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-agent2',
  templateUrl: './agent2.component.html',
  styleUrls: ['./agent2.component.css'],
})
export class Agent2Component implements OnInit {
  ticket: number[];

  constructor(private booking: BookingService) {
    this.ticket = this.booking.getTicket();
  }

  ngOnInit(): void {
    this.ticket = this.booking.getTicket();
    // console.log(this.ticket1);
  }

  book(data) {
    this.booking.bookticket(data);
    this.ticket = this.booking.getTicket();
  }
}
