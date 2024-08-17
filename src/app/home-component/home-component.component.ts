import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  constructor(private viewportScroller: ViewportScroller, private router: Router) {}
  title = 'Nebula';
  isAuthentication: boolean = true;
  clicked = false;

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
