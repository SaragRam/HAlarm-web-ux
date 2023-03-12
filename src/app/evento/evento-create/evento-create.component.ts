import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-evento-create',
  templateUrl: './evento-create.component.html',
  styleUrls: ['./evento-create.component.css']
})
export class EventoCreateComponent implements OnInit {



  constructor(
    private formBuilder: FormBuilder,
    private router: ActivatedRoute,
    private routerPath: Router,

  ) { }

  ngOnInit() {

  }

 

  createEvento() {
    this.routerPath.navigate([`/eventos`])
  }

  cancelCreate() {
    this.routerPath.navigate([`/eventos`])
  }



}
