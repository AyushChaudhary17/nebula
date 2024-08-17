import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-signup-login',
  templateUrl: './signup-login.component.html',
  styleUrls: ['./signup-login.component.css']
})
export class SignupLoginComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef) {}

  isLoginVisible:boolean=true;
  // @Input() isLoginClicked:boolean = false;
  // @Input() isLoginVisible: boolean = false;
  register: boolean = false;

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['loginClick']) {
  //     if (this.loginClick) {
  //       this.showLogin();
  //     } else {
  //       this.hideLogin();
  //     }
  //   }
  // }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isLoginVisible']) {
      this.handleLoginClick(changes['isLoginVisible'].currentValue);
      this.cdr.detectChanges(); // Trigger change detection
    }
  }

  handleLoginClick(isLoginVisible: boolean) {
    if (isLoginVisible) {
      // Logic to show login form
      this.isLoginVisible= true;
    } else {
      // Logic to hide login form
      this.isLoginVisible= false;
    }
  }
  
  loginToRegister(){
    this.isLoginVisible=false;
    this.register=true;
  }

  registerToLogin(){
    this.register=false;
    this.isLoginVisible=true;
  }

  loginCrox(){
    this.isLoginVisible=false
  }

  registerCrox(){
    this.register=false;
  }

  private showLogin() {
    this.register = false;
    // Add any other logic needed when showing the login form
  }

  private hideLogin() {
    this.register = false;
    // Add any other logic needed when hiding the login form
  }

  ngOnInit(): void {
  }

}
