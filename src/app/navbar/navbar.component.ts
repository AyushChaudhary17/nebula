import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private viewportScroller: ViewportScroller, private router: Router) {}
  title = 'Nebula';
  isAuthentication: boolean = true;
  clicked = false;
  
  // Define isClicked as an EventEmitter to emit boolean values
  
  @Output() loginClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  onLoginClick() {
    this.loginClicked.emit(true); // Emit true when login button is clicked
  }
  
  scrollToTeams() {
    // Use the service to scroll to the 'teams' anchor
    this.router.navigate(['/team']);
    this.viewportScroller.scrollToAnchor('teams');
  }

  scrollToHome() {
    this.viewportScroller.scrollToAnchor('home');
    this.router.navigate(['/home']);
  }

  scrollToPricing() {
    this.viewportScroller.scrollToAnchor('price');
    this.router.navigate(['/price']);
  }

  scrollToContact() {
    this.viewportScroller.scrollToAnchor('contact');
    this.router.navigate(['/contact']);
  }
  

  ngOnInit(): void {
  }

}
