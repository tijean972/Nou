import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAnnoncesPage } from './add-annonces';

@NgModule({
  declarations: [
    AddAnnoncesPage,
  ],
  imports: [
    IonicPageModule.forChild(AddAnnoncesPage),
  ],
})
export class AddAnnoncesPageModule {}
