import { Component, OnInit, Input, ViewChild, Output } from '@angular/core';
import { ChipData } from 'src/app/models/suggestion-chip';
import { ThemePalette } from '@angular/material';

@Component({
  selector: 'kit-suggestion-chip',
  templateUrl: './suggestion-chip.component.html',
  styleUrls: ['./suggestion-chip.component.scss']
})
export class SuggestionChipComponent implements OnInit {

  selectable = true;
  selectedChip: string;
  @Input() suggestion_chips: ChipData[];
  @Output() suggested_chip: string;
  constructor() { }

  ngOnInit() {
  }

  onChipChange(e: string) {
    console.log(e)
    this.selectedChip = e;
  }

}
