import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DreamLite } from '../dream-lite';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tagview',
  templateUrl: './tagview.component.html',
  styleUrls: ['./tagview.component.css']
})
export class TagviewComponent implements OnInit {
  dreams: DreamLite[] = [];
  public tag: string = '';
  httpClient: HttpClient;
  dreamUrl = 'http://188.166.124.251:3000/dreams/search/';


  constructor(private router: Router, private http: HttpClient) {
    this.tag = this.router.url;
    console.log(this.router.url);
    let a = this.tag.split('/');
    console.log('Last part:' + a[2]);
    this.tag = a[2];
  }
  getDreams() {
    return this.http.get(this.dreamUrl + this.tag);
  }
  ngOnInit() {
    console.log('Tag search:' + this.dreamUrl + this.tag);
    this.getDreams()
      .subscribe((data: DreamLite[]) => this.dreams = data);
    console.log('Dream:' + this.dreams);

  }

}
