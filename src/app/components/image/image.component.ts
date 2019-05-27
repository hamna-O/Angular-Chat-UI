import { Component, OnInit } from '@angular/core';
import { img_data } from 'src/app/mocks/images';

@Component({
  selector: 'kit-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  imageUrl = img_data;
  constructor() { }

  ngOnInit() {
  }

}
