import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuscribetePageRoutingModule } from './suscribete-routing.module';

import { SuscribetePage } from './suscribete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuscribetePageRoutingModule
  ],
  declarations: [SuscribetePage]
})
export class SuscribetePageModule {}
