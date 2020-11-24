import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from "./sign-up/sign-up.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { GifsComponent } from './gifs/gifs.component';

const routes: Routes = [
  { path:'signup', component: SignUpComponent },
  { path:'login', component: LoginComponent },
  { path:'home', component: HomeComponent },
  { path:'search', component: SearchComponent },
  { path:'gifs', component: GifsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  SignUpComponent,
  LoginComponent,
  HomeComponent,
  SearchComponent,
  GifsComponent
];
