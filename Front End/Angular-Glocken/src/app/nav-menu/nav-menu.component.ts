import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../login/services/authentication.service';
import { User } from '../shared/models/user.model';

import { DialogComponent, DialogComponentModel } from './../shared/components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  currentUser: User;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    const message = `Você tem certeza que deseja sair?`;

    const dialogData = new DialogComponentModel('Confirmar Logout', message);

    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      disableClose: true,
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      const result = dialogResult;

      if (result == true) {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
      }
      else {
        console.log('Cancelado');
      }
    });
  }

  ngOnInit(): void {
  }

}
