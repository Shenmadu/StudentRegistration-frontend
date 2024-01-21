import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
// import { StudentRegistrationComponent } from './pages/student-registration/student-registration.component';
import { RegisterComponent } from './pages/register/register.component';
import { StudentlistComponent } from './pages/studentlist/studentlist.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"register",
    component:RegisterComponent

  },
  {
    path:"list",
    component:StudentlistComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
