import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { formatDate, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { UserService } from '../login/services/user.service';

registerLocaleData(localePt);

@Component({
  selector: 'app-student-area',
  templateUrl: './student-area.component.html',
  styleUrls: ['./student-area.component.css'],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class StudentAreaComponent implements OnInit {
  day = formatDate(new Date(), 'd', 'pt-BR');
  month = formatDate(new Date(), 'MMMM', 'pt-BR');
  dayWeek = formatDate(new Date(), 'EEEE', 'pt-BR');
  userName = this.userService.getUser();

  loading = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    console.log(this.day)
    console.log(this.month)
    console.log(this.dayWeek)
  }


}
