import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	user = {
		username: '',
		password: ''
	};

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  login() {
  	this._router.navigate(['home']);
  }
}
