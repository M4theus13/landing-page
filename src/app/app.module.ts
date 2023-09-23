import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageOneComponent } from './components/pages/page-one/page-one.component';
import { PageTwoComponent } from './components/pages/page-two/page-two.component';
import { PageThreeComponent } from './components/pages/page-three/page-three.component';
import { PageFourComponent } from './components/pages/page-four/page-four.component';
import { PageFiveComponent } from './components/pages/page-five/page-five.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    PageFourComponent,
    PageFiveComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
