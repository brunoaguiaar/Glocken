import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components Imports */
import { HomeComponent } from './home/home.component';
import { AdminCreateComponent } from './admin/admin-create/admin-create.component';
import { AdminEditComponent } from './admin/admin-edit/admin-edit.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'admin-create', component: AdminCreateComponent
  },
  {
    path: 'admin-edit', component: AdminEditComponent
  },
  {
    path: 'user', component: UserComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
