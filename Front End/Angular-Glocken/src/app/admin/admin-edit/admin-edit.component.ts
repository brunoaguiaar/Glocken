import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, MinLengthValidator } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith, debounceTime, filter } from 'rxjs/operators';

import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import * as _moment from 'moment';
import { defaultFormat as _rollupMoment } from 'moment';

import { UserExamples, USER_LIST } from './../../shared/models/userExample.model';
import { isFakeMousedownFromScreenReader } from '@angular/cdk/a11y';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class AdminEditComponent implements OnInit {

  //Variables
  private userlist: UserExamples[] = [];

  //Form Related
  userForm: FormGroup;
  minDate = new Date(1900, 0, 1);
  maxDate = new Date(new Date().setDate(new Date().getDate()))

  //Form Related
  filterControl = new FormControl('');

  genderOptions = [
    { id: 1, name: 'Masculino' },
    { id: 2, name: 'Feminino' },
    { id: 3, name: 'Outro' },
  ];

  contractOptions = [
    { id: 1, name: 'Mensal' },
    { id: 2, name: 'Semestral' },
    { id: 3, name: 'Anual' },
  ];

  typeOptions = [
    { id: 1, name: 'Aluno' },
    { id: 2, name: 'Professor' }
  ]

  filteredUsers: Observable<string[]>;

  constructor(private datePipe: DatePipe, private dialog: MatDialog) {

  }

  ngOnInit(): void {

    this.userForm = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required]),
      rg: new FormControl('', [Validators.required]),
      birthday: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      emergencyPhone: new FormControl('', [Validators.required]),
      job: new FormControl('', [Validators.required]),
      contract: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required])
    });

    this.userlist = USER_LIST;
    this.filteredUsers = this.filterControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

  }

  private _filter(value: string): string[] {
    return this.userlist.map(user => user.fullName).filter(userList => userList.toLowerCase().includes(value.toLowerCase()));
  }

  //Form Related
  onSubmit() {
    /* Date Sanitize to send data to API */
    let birthdate = this.userForm.get('birthday').value
    birthdate = this.datePipe.transform(birthdate, 'dd/MM/yyyy');

    console.log(birthdate)
  }

  onClear() {
    this.filterControl.setValue('');
  }

  showForm(user) {
    //Need to find a better way to do this
    //Need to figure how to insert data for date/option

    const userValue = this.userlist.filter(x => x.fullName === user);

    let birthdate = userValue[0].birthday
    birthdate = this.datePipe.transform(birthdate, 'dd/MM/yyyy');

    this.userForm.setValue({
      fullName: userValue[0].fullName,
      address: userValue[0].address,
      gender: userValue[0].gender,
      cpf: userValue[0].cpf,
      rg: userValue[0].rg,
      birthday: new Date(birthdate),
      email: userValue[0].email,
      phone: userValue[0].phone,
      emergencyPhone: userValue[0].emergencyPhone,
      job: userValue[0].job,
      contract: userValue[0].contract,
      type: userValue[0].type
    })
  }

}
