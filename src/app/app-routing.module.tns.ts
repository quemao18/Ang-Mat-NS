import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { HomeModule } from './home/home.module';
import { AutoGeneratedModule } from './auto-generated/auto-generated.module';

// export const routes: Routes = [
// {
//     path: '',
//     redirectTo: '/home',
//     pathMatch: 'full',
//   },
//   {
//       path: 'home',
//       component: HomeComponent,
//   },
// ];

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", loadChildren: () => HomeModule },
  { path: "browse", loadChildren: () => AutoGeneratedModule }
  // { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
];


@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
