import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';


import { AppComponent } from './app.component';
import { AllDreamsComponent } from './all-dreams/all-dreams.component';
import { DreamformComponent } from './dreamform/dreamform.component';
import { CalviewComponent } from './calview/calview.component';
import { SingledreamComponent } from './singledream/singledream.component';
import { TagviewComponent } from './tagview/tagview.component';
import { StatsComponent } from './stats/stats.component';

const appRoutes: Routes = [
  { path: 'dreams', component: AllDreamsComponent },
  { path: 'dream/:id', component: SingledreamComponent },
  { path: 'tags/:id', component: TagviewComponent },
  { path: 'user/:id', component: StatsComponent },


  { path: 'post', component: DreamformComponent },
  { path: 'calendar', component: CalviewComponent },


  {
    path: '',
    redirectTo: '/dreams',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    AllDreamsComponent,
    DreamformComponent,
    CalviewComponent,
    SingledreamComponent,
    TagviewComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule, CalendarModule.forRoot()


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
