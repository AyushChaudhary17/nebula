import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NavbarComponent } from './navbar/navbar.component';
import { MainIntroComponent } from './main-intro/main-intro.component';
import { ContactComponent } from './contact/contact.component';
import { MyteamComponent } from './myteam/myteam.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { PriceComponent } from './price/price.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { HttpClientModule } from '@angular/common/http';
import { ChatSectionComponent } from './chat-section/chat-section.component';
import { UserHistoryComponent } from './user-history/user-history.component';
import { HomeComponent } from './home/home.component';
import { SignupLoginComponent } from './signup-login/signup-login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponentComponent } from './home-component/home-component.component';  // Import HttpClientModule



// import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MainIntroComponent,
    ContactComponent,
    MyteamComponent,
    PriceComponent,
    FooterComponent,
    ChatSectionComponent,
    UserHistoryComponent,
    HomeComponent,
    SignupLoginComponent,
    NavbarComponent,
    HomeComponentComponent
    // LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
