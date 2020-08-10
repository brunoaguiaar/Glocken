import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, PatternValidator } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  //Variables

  //Form Related
  userCreation = new FormGroup({
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
    contract: new FormControl('', [Validators.required])
  });

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


  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
  }

  onSubmit() {
    //Date Sanitize
    let birthdate = this.userCreation.get('birthday').value
    birthdate = this.datePipe.transform(birthdate, 'dd-MM-yyyy');
    this.userCreation.controls['birthday'].setValue(birthdate);

    console.log(this.userCreation.value);
  }

  onClear() {
    if (confirm('sera q erass????')) {
      this.userCreation.reset();
    }
  }

}
