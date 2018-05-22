import { Component, OnInit } from '@angular/core';
import { DreamPost } from '../dream-post';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};
@Component({
  selector: 'app-dreamform',
  templateUrl: './dreamform.component.html',
  styleUrls: ['./dreamform.component.css']
})



export class DreamformComponent implements OnInit {
  httpClient: HttpClient;
  dreamUrl = 'http://188.166.124.251:3000/dreams';
  dreamDescription = 'Describe your dream';
  dreamUsername = '';
  dreamDuration = 1;
  dreamTags = '';
  errormessage = ''
  constructor(private http: HttpClient) {
  }
  onSubmit() {

    console.log('Descr: ' + this.dreamDescription);
    console.log('Name: ' + this.dreamUsername);
    console.log('Dur. : ' + this.dreamDuration);
    console.log('Tags: ' + this.dreamTags);

    let tags = this.dreamTags.split(',');

    let dreamTest = {
      description: this.dreamDescription,
      username: this.dreamUsername,
      tags: tags,
      durationInHours: this.dreamDuration
    };
    if (this.dreamDescription.length > 3 && this.dreamUsername.length > 3 && this.dreamDuration > 0) {
      this.addDream(dreamTest);
    } else {
      this.errormessage = 'Please input your dream!'
    }
  }

  ngOnInit() {
  }

  addDream(dream: DreamPost) {
    this.http.post<DreamPost>(this.dreamUrl, dream, httpOptions).subscribe((data: DreamPost) => this.reload(data));

  }
  reload(data) {
    console.log(data);
    window.location.href = '..';
  }

}

