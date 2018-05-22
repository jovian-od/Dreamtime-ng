import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { Dream } from '../dream';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit, DoCheck {

  dreams: Dream[] = [];
  hasStats = false;
  mean = 'Not enough data for a mean';
  total = 'Not enough data for a total';
  min = 12;
  max = 0;
  public term: string = '';
  httpClient: HttpClient;
  dreamUrl = 'http://188.166.124.251:3000/dreams/user/';


  constructor(private router: Router, private http: HttpClient) {
    this.term = this.router.url;
    console.log(this.router.url);
    let a = this.term.split('/');
    console.log('Last part:' + a[2]);
    this.term = a[2];
  }
  getDreams() {
    return this.http.get(this.dreamUrl + this.term);
  }

  ngOnInit() {
    console.log('User search:' + this.dreamUrl + this.term);
    this.getDreams()
      .subscribe((data: Dream[]) => this.dreams = data);
    console.log('Dream:' + this.dreams);

  }
  ngDoCheck() {
    if (this.dreams.length > 2 && !this.hasStats) {
      let a = 0;
      for (let dream of this.dreams) {
        console.log('d' + dream)
        a = a + dream.durationInHours;

        if (dream.durationInHours > this.max) {
          this.max = dream.durationInHours;
        }
        if (dream.durationInHours < this.min) {
          this.min = dream.durationInHours;
        }
      }
      this.total = 'Total sleep time logged is ' + a + ' hours.';
      this.mean = 'Mean sleep time is ' + (a / this.dreams.length) + ' hours.';
      this.hasStats = true;
    }
  }

}
