import { Component } from '@angular/core';
import { MyBio } from './models/MyBio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Manh Hung Dao';
  myBio: MyBio = { name: 'Manh Hung Dao (Mike)', studentID: '991557299', imageLocation: '../assets/images/vietnam.png', status: 'Junior'};
}
