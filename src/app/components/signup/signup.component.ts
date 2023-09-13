import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  hide = true;
  user: any;
  loginForm!: FormGroup;

  constructor(private router: Router, private service: AuthService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    }, { updateOn: 'submit' });
  }

  userLogin() {
    if (this.loginForm.valid) {
      this.service.signup(this.loginForm.value).subscribe(res => {
        if (res != null) {
          this.user = res;
          localStorage.setItem('userId', this.user.id);
          this.router.navigate(['']);
        } else {
          console.log("not found");
          console.log(res);
        }
      });
    }
  }
  getErrorMessage1() {
    if (this.loginForm.get('username')!.hasError('required')) {
      return 'Username is required';
    }
    return '';
  }

  getErrorMessage2() {
    if (this.loginForm.get('password')!.hasError('required')) {
      return 'Password is required';
    }
    return '';
  }
  getErrorMessage3() {
    if (this.loginForm.get('email')!.hasError('required')) {
      return 'Email is required';
    }
    return '';
  }
}
