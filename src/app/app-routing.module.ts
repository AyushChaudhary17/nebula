import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { NavbarComponent } from './navbar/navbar.component';
import { ChatSectionComponent } from './chat-section/chat-section.component';
import { HomeComponent } from './home/home.component';
import { SignupLoginComponent } from './signup-login/signup-login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component:HomeComponent},
  {path: 'team', component:HomeComponent},
  { path: 'price', component: HomeComponent},
  { path: 'contact', component: HomeComponent},
  { path: 'chat', component: ChatSectionComponent},
  { path: 'login', component:SignupLoginComponent}
  // { path: 'home', component: NavbarComponent },  // Your home or default component
  // { path: 'chat', component: ChatSectionComponent },        // Route for ChatComponent
  // add other routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
