import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private routerPath: Router,
  ) { }

  ngOnInit(): void { }

  goTo(menu: string) {

    if (menu === "eventos") {
      this.routerPath.navigate([`/eventos`])
    }
    else if (menu === "crearEvento") {
      this.routerPath.navigate([`/crear-evento`])
    }
    else {
      this.routerPath.navigate([`/importar-eventos`])
    }
  }

}
