import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Agent2Component } from './agent2/agent2.component';
import { Agent1Component } from './agent1/agent1.component';
import { BookingService } from './services/booking.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  providers: [BookingService],
  declarations: [
    AppComponent,
    HelloComponent,
    Agent1Component,
    Agent2Component,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
