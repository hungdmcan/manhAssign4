import { MyBio } from './../../../models/MyBio';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() author: MyBio;
  date = new Date();
     year = this.date.getFullYear();
     months
        = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
     month = this.months[this.date.getMonth()];
     day = this.date.getDate();
  constructor() { }

  ngOnInit(): void {
  }

}
