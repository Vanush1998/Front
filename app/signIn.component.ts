import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HashService} from './hashService.service';
import {Http, RequestOptions, RequestOptionsArgs} from '@angular/http';
import {URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {ActiveUserService} from './activeUser.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './signIn.component.template.html',
})
export class SignInComponent implements OnInit {
  inputUsername: string;
  inputPassword: string;

  constructor(private hash: HashService, private http: Http, private router: Router, private activeUserService: ActiveUserService) {

  }

  ngOnInit(): void {

  }

  onSignIn(): void {
    const router = this.router;
    const params = new URLSearchParams();
    params.append('type', 'signIn');
    const options = new RequestOptions({
      search: params
    });
    this.http.post('http://localhost:8080/MyServlet', JSON.stringify({
      username: this.inputUsername,
      password: this.hash.hash(this.inputPassword)
    }), options)
      .toPromise()
      .then((response: any) => {
        this.activeUserService.set(JSON.parse(response._body));
        router.navigate(['/UserPage']);
      }).catch(reason => {
      console.log(reason.toString());
    });
  }

  onSignUp(): void {
    this.router.navigate(['/SignUpPage']);
  }
}
