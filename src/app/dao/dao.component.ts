import { Car } from './../models/carInterface';
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
  mycourses = MYCOURSES;
  @Input() author: MyBio;
  @Input() carCatNew: Car[];
  @Input() carCatUsed: Car[];
  outArea: string;
  outArea1: string;
  catChoice: Car[];
  i = -1;
  outAreaStyle = `style=color: "powderblue"`;
  constructor() { }

  ngOnInit(): void {
    this.i = -1;
  }

  displayJSON(cat): void {
    switch (cat) {
    case 'New': this.catChoice = this.carCatNew; break;
    case 'Used': this.catChoice = this.carCatUsed; break;
    }
    this.outArea1 = `<h3> ${cat} Car List</h3>`;
    this.outArea = '';
    this.outArea += `<table ${this.outAreaStyle}><tr>
                    <th>Ord.</th><th>Make</th><th>Type</th><th>Engine</th><th>Cost</th><th>Color</th>
                    </tr>`;
    let count = 0;
    for (const cls of this.catChoice) {
      this.outArea += `<tr>
                      <td>${++count}</td>
                      <td><strong> ${cls.make} </strong></td>
                      <td> ${cls.type} </td>
                      <td> ${cls.engine} </td>
                      <td> ${cls.cost} </td>
                      <td> ${cls.color} </td>
                      </tr>`; }
    this.outArea += `</table>`;
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
  resetView(): void {
     this.i = -1;
  }



}

