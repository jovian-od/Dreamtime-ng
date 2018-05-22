import { Component, OnInit, OnChanges, AfterViewInit, DoCheck } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Dream } from '../dream';

export interface EventAction {
  label: string;
  cssClass?: string;
  onClick({ event }: {
    event: CalendarEvent;
  }): any;
}

export interface EventColor {
  primary: string;
  secondary: string;
}
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Component({
  selector: 'app-calview',
  templateUrl: './calview.component.html',
  styleUrls: ['./calview.component.css']
})
export class CalviewComponent implements OnInit, DoCheck {
  viewDate: Date = new Date();

  events: CalendarEvent[] = [];
  colors: EventColor[] = [
    {
      primary: '#FF7736',
      secondary: '#FFB18B',
    },
    {
      primary: '#331122',
      secondary: '#1100ff'
    }
  ];



  dreams: Dream[] = [];
  view: string = 'month';

  httpClient: HttpClient;
  dreamUrl = 'http://188.166.124.251:3000/dreams';

  getDreams() {
    return this.http.get(this.dreamUrl);
  }
  weekView({ event }: { event: CalendarEvent }): void {
    console.log("to weeks");
    this.view = 'week';
  }
  monthView({ event }: { event: CalendarEvent }): void {
    console.log("to months");
    this.view = 'month';
  }

  constructor(private http: HttpClient) {


  }

  ngOnInit() {
    console.log('Dreams:' + this.dreams.length);
    this.getDreams()
      .subscribe((data: Dream[]) => this.addDreams(data));

  }
  ngDoCheck() {

    if (this.events.length < 1) {
      let dreamsA = [];

      for (const dream of this.dreams) {
        let start: Date = new Date(dream.Created_date);
        let stop = new Date(dream.Created_date);
        let fulltitle = dream.description + ', ' + dream.durationInHours + 'h. By:' + dream.username;
        let eventD = {
          start: start,
          end: stop,
          color: this.colors[0],
          title: fulltitle,
          meta: dream._id,
          id: dream._id

        };
        console.log(dream._id);
        dreamsA.push(eventD);
      }
      this.events = dreamsA;
    }
  }
  eventClicked({ event }: { event: CalendarEvent }): void {
    console.log('Event clicked', event);
    window.location.href = '/dream/' + event.meta;
  }


  addDreams(data) {
    this.dreams = data
    console.log("Dreams in calendar:")
    console.log(this.dreams);


  }

}
