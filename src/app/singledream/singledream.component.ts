import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dream } from '../dream';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token',
    'Cache-Control': 'no-cache',

  })
};
@Component({
  selector: 'app-singledream',
  template: `
  <div>  <p class="button" (click)="deleteDream($event)">Delete this dream</p>

  <h3>{{dream.description}}</h3>
  <p>Dreamer: {{dream.username}}</p>
  <pre>Dreamed in: {{dream.Created_date | date:'longDate'}},
  {{dream.Created_date | date:'shortTime'}}  for {{dream.durationInHours}} hours</pre>
  <i *ngFor="let tag of dream.tags">
  <a href="/tags/{{tag}}">{{tag}}</a>,
  </i>
  <h4 id="messagetext">{{message}}</h4>
  </div>
  
  `,
  styleUrls: ['./singledream.component.css']
})
export class SingledreamComponent implements OnInit {
  dream: Dream;
  message = '';
  public href: string = '';
  httpClient: HttpClient;
  dreamUrl = 'http://188.166.124.251:3000/dreams/';

  getDreams() {
    return this.http.get(this.dreamUrl + this.href);
  }
  deleteReturner() {
    return this.http.delete(this.dreamUrl + this.href);

  }
  deleteDream(event) {
    console.log('deleting:' + this.dreamUrl + this.href);
    this.deleteReturner()
      .subscribe((data: any) => this.message = data.message);

  }


  constructor(private router: Router, private http: HttpClient) {
    this.href = this.router.url;
    console.log(this.router.url);
    let a = this.href.split('/');
    console.log('Last part:' + a[2]);
    this.href = a[2];
  }

  ngOnInit() {
    console.log('Dream:' + this.dreamUrl + this.href);
    this.getDreams()
      .subscribe((data: Dream) => this.dream = data);
    console.log('Dream:' + this.dream);

  }


}
