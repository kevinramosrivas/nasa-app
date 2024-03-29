import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsteroidsPageComponent } from './pages/asteroidsPage/asteroidsPage.component';
import { InfoMeteoritComponent } from './pages/info-meteorit/info-meteorit.component';

const routes: Routes = [
  {
    path: '',
    component: AsteroidsPageComponent
  },
  {
    path: 'info-meteorit/:id',
    component: InfoMeteoritComponent

  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsteroidsRoutingModule { }
