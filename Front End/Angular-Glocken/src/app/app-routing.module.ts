import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components Imports */
import { HomeComponent } from './home/home.component';
import { AdminCreateComponent } from './admin/admin-create/admin-create.component';
import { AdminEditComponent } from './admin/admin-edit/admin-edit.component';
import { UserComponent } from './user/user.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { StudentAreaComponent } from './student-area/student-area.component';
import { AuthGuard } from './login/helpers/auth.guard';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'admin-create', component: AdminCreateComponent, canActivate: [AuthGuard]
  },
  {
    path: 'admin-edit', component: AdminEditComponent, canActivate: [AuthGuard]
  },
  {
    path: 'user', component: UserComponent, canActivate: [AuthGuard]
  },
  {
    path: 'student-area', component: StudentAreaComponent, canActivate: [AuthGuard]
  },

  {
    path: 'help', component: HelpComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
