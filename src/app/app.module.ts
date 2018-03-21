import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Graphics Module
import { ChartsModule } from 'ng2-charts';

// Components
import { AppComponent } from './app.component';
import { LineComponent } from './components/line/line.component';
import { BarComponent } from './components/bar/bar.component';
import { DonaComponent } from './components/dona/dona.component';
import { RadarComponent } from './components/radar/radar.component';


@NgModule({
  declarations: [
    AppComponent,
    LineComponent,
    BarComponent,
    DonaComponent,
    RadarComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
