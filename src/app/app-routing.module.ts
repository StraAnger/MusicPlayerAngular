import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [
  {path:'', component: MainPageComponent},
  {path:'profile',component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
