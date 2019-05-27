import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kit-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  @Input() dialog: string;
  @Input() author: string; 
  constructor() { }

  ngOnInit() {
  }

}
