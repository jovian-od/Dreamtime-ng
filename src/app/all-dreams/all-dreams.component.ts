import { Component, OnInit } from '@angular/core';
import { Dream } from '../dream';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-dreams',
  template: `
  <ul>
  <li *ngFor="let dream of dreams?.reverse() ; let i = index" [attr.data-index]="i" class="dreamli">
    <a href="./dream/{{dream._id}}">
      <h3>{{ dream.description }}</h3>
    </a>
    <p>Dreamer: <a href="/user/{{dream.username}}">{{dream.username}}</a> </p>
    <pre>Dreamed in: {{dream.Created_date | date:'longDate'}},
    {{dream.Created_date | date:'shortTime'}}  for {{dream.durationInHours}} hours</pre>
      <b>Tags: </b>
    <b *ngFor="let tag of dream.tags">
      <a href="/tags/{{tag}}">{{tag}}</a>,
    </b>
  </li>
</ul>
  `,
  styleUrls: ['./all-dreams.component.css']
})
export class AllDreamsComponent implements OnInit {
  dreams: Dream[] = [];
  httpClient: HttpClient;
  dreamUrl = 'http://188.166.124.251:3000/dreams';
  state_loading = true;

  getDreams() {
    return this.http.get(this.dreamUrl);
  }

  constructor(private http: HttpClient) {
    /*let dream1 = { id: 1, description: 'Odd Dream', username: 'Woke AF', tags: ['test', 'nope'], Created_date: null, durationInHours: 2 };
    let dream2 = { id: 1, description: 'Odd Dream', username: 'Woke AF', tags: ['test', 'nope'], Created_date: null, durationInHours: 2 };
    this.dreams.push(dream1);
    this.dreams.push(dream2);*/

  }
  ngOnInit() {
    console.log('Dreams:' + this.dreams.length);
    this.getDreams()
      .subscribe((data: Dream[]) => this.dreams = data);
  }
}
