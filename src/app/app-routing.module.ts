import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsyncPipesComponent } from './async-pipes/async-pipes.component';
import { HomeComponent } from './home/home.component';

import { StatefulPipesComponent } from './stateful-pipes/stateful-pipes.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'custom',
    component: CustomPipesComponent
  },
  {
    path: 'stateful',
    component: StatefulPipesComponent
  },
  {
  path: 'async',
  component: AsyncPipesComponent
},
{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
