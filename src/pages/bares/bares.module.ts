import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BaresPage } from './bares';

@NgModule({
  declarations: [
    BaresPage,
  ],
  imports: [
    IonicPageModule.forChild(BaresPage),
  ],
})
export class BaresPageModule {}
