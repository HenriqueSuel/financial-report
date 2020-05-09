import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formUserRegister: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.newFormUser();
  }

  private newFormUser() {
    const passwordRegex = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z])(?=.*[!"#$%&'()*+,-./{}|~€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿:;<>=.?@[\]\\^_`~]).{6,12}$/
    this.formUserRegister = this.fb.group({
      email: ['', Validators.compose([Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.pattern(passwordRegex)])],
    });
  }

  public submitForm() {
  }

}
