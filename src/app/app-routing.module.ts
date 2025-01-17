import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HcomponentComponent} from './hcomponent/hcomponent.component'
import { ProductComponent } from './product/product.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';


const routes: Routes = [
  {path: '', component : HcomponentComponent},
  {path: 'client', component : ProductComponent},
  {path: 'client/car/list', component : HelloWorldComponent},
  {path: 'client/car/update', component : ProductComponent},
  {path: 'client/car/add', component : ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
