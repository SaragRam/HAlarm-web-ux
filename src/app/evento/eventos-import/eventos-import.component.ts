import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-eventos-import',
  templateUrl: './eventos-import.component.html',
  styleUrls: ['./eventos-import.component.css']
})
export class EventosImportComponent implements OnInit {



  constructor(
    private formBuilder: FormBuilder,
    private router: ActivatedRoute,
    private routerPath: Router,

  ) { }

  ngOnInit() {

  }

 

  importEventos() {
    this.routerPath.navigate([`/eventos`])
  }

  cancelImport() {
    this.routerPath.navigate([`/eventos`])
  }



}
