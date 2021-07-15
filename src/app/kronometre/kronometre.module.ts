import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KronometrePageRoutingModule } from './kronometre-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { KronometrePage } from './kronometre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KronometrePageRoutingModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      animation: false,
      responsive: true,
      renderOnClick: false,
      showUnits: false,
    }),
  ],

  declarations: [KronometrePage]
})
export class KronometrePageModule {}
