// CORE
import { Component, OnInit } from '@angular/core';
// IONIC
import { MenuController } from '@ionic/angular';

// tslint:disable: no-floating-promises

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {

  public version = '1.1.0';
  constructor(private menu: MenuController) { }

  ngOnInit() { }

}
