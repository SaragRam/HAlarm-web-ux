import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.css']
})
export class LoginComponent implements OnInit {



  constructor(
    private router: Router
  ) { }



  ngOnInit() {
  }

  onLogIn() {

    this.router.navigate([`/eventos`])

  }

}
