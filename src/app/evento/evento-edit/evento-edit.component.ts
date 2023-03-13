import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-evento-edit',
  templateUrl: './evento-edit.component.html',
  styleUrls: ['./evento-edit.component.css']
})
export class EventoEditComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: ActivatedRoute,
    private routerPath: Router,

  ) { }

  ngOnInit() {

  }

 

  editEvento() {
    this.routerPath.navigate([`/eventos`])
  }

  cancelEdit() {
    this.routerPath.navigate([`/eventos`])
  }



}
