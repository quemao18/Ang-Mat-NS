import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.tns.html',
  styleUrls: ['./home.component.tns.scss']
})
export class HomeComponentTns implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}

}
