import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, PatternValidator } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import * as _moment from 'moment';
import { defaultFormat as _rollupMoment } from 'moment';

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
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.css'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class AdminCreateComponent implements OnInit {

  //Variables

  //Form Related
  userForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    cpf: new FormControl('', [Validators.required]),
    rg: new FormControl('', [Validators.required]),
    birthday: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    emergencyPhone: new FormControl('', [Validators.required]),
    job: new FormControl('', [Validators.required]),
    contract: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required])
  });

  //Form Related
  filterControl = new FormControl('');
  minDate = new Date(1900, 0, 1);
  maxDate = new Date(new Date().setDate(new Date().getDate()))

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

  constructor(private datePipe: DatePipe, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  //Form Related
  onSubmit() {
    //Date Sanitize 
    console.log(this.userForm.value);
  }

  onClear() {
  }

}
