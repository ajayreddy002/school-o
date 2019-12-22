import { Component, OnInit } from '@angular/core';
import { ILoginModel } from '../_models/login.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConstants } from '../app.constants';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmited: boolean;
  isNotValid: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private authService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      user_name: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
  }
  submitLogin = () => {
    if (this.loginForm.invalid) {
      this.isSubmited = true;
    } else {
      this.isSubmited = false;
      console.log(this.loginForm.value)
      const formModel = this.loginForm.value
      this.httpClient.post<any>('http://52.66.30.201:3000/api/v1/signin', formModel)
        .subscribe(
          data => {
            if(data.result.role_id === 5){
              localStorage.setItem('userData', JSON.stringify(data.result));
              this.authService.login(data.result);
              this.isNotValid = false;
            } else {
              this.isNotValid = true;
            }
          }, e => {
            console.log(e)
          }
        )
    }
  }
}
