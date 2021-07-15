import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KronometrePage } from './kronometre.page';

const routes: Routes = [
  {
    path: '',
    component: KronometrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KronometrePageRoutingModule {}
