import { Component, OnInit } from '@angular/core';
import { chips } from 'src/app/mocks/chips';

@Component({
  selector: 'app-chat-ui',
  templateUrl: './chat-ui.component.html',
  styleUrls: ['./chat-ui.component.scss']
})
export class ChatUiComponent implements OnInit {

  messageCase = 4;

  chips = chips;

  constructor() { }

  ngOnInit() {
  }

}
