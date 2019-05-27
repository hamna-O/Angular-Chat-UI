import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './core/material.module';
import { ChatUiComponent } from './components/chat-ui/chat-ui.component';
import { TextComponent } from './components/text/text.component';
import { SuggestionChipComponent } from './components/suggestion-chip/suggestion-chip.component';
import { ImageComponent } from './components/image/image.component';
import { ListComponent } from './components/list/list.component';
import { GenericComponent } from './components/generic/generic.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatUiComponent,
    TextComponent,
    SuggestionChipComponent,
    ImageComponent,
    ListComponent,
    GenericComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
