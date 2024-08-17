import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title:string = "Nebula";

  isLoginVisible: boolean = false;

  onLoginClicked() {
    this.isLoginVisible = !this.isLoginVisible; // Toggle the visibility of the login component
  }
  
  ngOnInit(): void {}
}
