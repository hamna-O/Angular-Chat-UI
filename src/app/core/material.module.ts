
import { NgModule } from '@angular/core';
import {MatCardModule, MatChipsModule, MatListModule} from '@angular/material';
@NgModule({
  imports: [
    MatCardModule,
    MatChipsModule,
    MatListModule
  ],
  exports: [
    MatCardModule,
    MatChipsModule,
    MatListModule
  ]
})
export class MaterialModule { }
