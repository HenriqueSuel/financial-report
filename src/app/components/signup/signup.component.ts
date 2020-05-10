import { Component, OnInit } from '@angular/core';
import { NgxMaskModule, IConfig } from 'ngx-mask' 

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

  onSubmit(form) {
    console.log(form)
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
