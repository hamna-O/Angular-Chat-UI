import { Component, OnInit } from '@angular/core';
import { list_item } from 'src/app/mocks/list';

@Component({
  selector: 'kit-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list = list_item;
  constructor() { }

  ngOnInit() {
  }

  onItemView(val: string): any {
    console.log(val)
  }

}
