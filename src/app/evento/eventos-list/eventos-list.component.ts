import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos-list.component.html',
  styleUrls: ['./eventos-list.component.css']
})
export class EventosComponent implements OnInit {

  constructor(
    private router: ActivatedRoute,
    private routerPath: Router
  ) { }


  ngOnInit() {
  }

  editarEvento() {
    this.routerPath.navigate([`/editar-evento`])
  }


}
