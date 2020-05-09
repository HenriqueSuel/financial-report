import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user: any = {
    name: null,
    surname: null,
    cpf: null,
    pass: null
  }

  nullName: boolean = false
  nullSurname: boolean = false
  nullCpf: boolean = false
  nullPassword: boolean = false

  onSubmit(form) {
    console.log(form)
  }

  onClickSubmit() {
    switch(this.user){
      case this.user.name === null:
        this.nullName = true 
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
