import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsteroidsPageComponent } from './pages/asteroidsPage/asteroidsPage.component';

const routes: Routes = [
  {
    path: '',
    component: AsteroidsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsteroidsRoutingModule { }
