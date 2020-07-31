import { MyBio } from './../models/MyBio';
import { MYCOURSES } from './../../assets/data/myCourses';
import { Component, OnInit, NgModule, Input } from '@angular/core';
// import { MatTabsModule} from '@angular/material/tabs';


@Component({
  selector: 'app-dao',
  templateUrl: './dao.component.html',
  styleUrls: ['./dao.component.css']
})
export class DaoComponent implements OnInit {
  @Input() mycourses = MYCOURSES;
  @Input() author: MyBio;
  i = -1;

  constructor() { }

  ngOnInit(): void {
  }
  onClickMe(i: number): void {
     this.i = i;
     console.log(i);

  }

  showHideText(index: number): string {
    if (index === this.i)
    {
      return 'block';
    }
      else
      {
        return 'none';
      }
  }
}

