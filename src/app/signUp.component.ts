import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Http} from '@angular/http';

@Component({
  selector: 'app-register-page',
  templateUrl: './signUp.component.template.html',
})
export class SignUpComponent implements OnInit {
  inputUsername: string;
  inputPassword: string;
  inputFirstName: string;
  inputLastName: string;
  inputAge: number;
  inputGender: string;

  constructor(private router: Router, private http: Http) {

  }

  onSignUp(): void {

  }

  ngOnInit(): void {

  }
}
