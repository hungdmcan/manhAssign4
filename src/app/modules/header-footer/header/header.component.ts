import { MyBio } from './../../../models/MyBio';
import { Component, OnInit, Input } from '@angular/core';


// tslint:disable-next-line: no-unused-expression


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() author: MyBio;
  constructor() { }

  ngOnInit(): void {
  }

}
