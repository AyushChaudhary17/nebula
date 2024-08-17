import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.css']
})
export class UserHistoryComponent implements OnInit {
  userHistory: { action: string, timestamp: string }[] = [];

  // Dummy data to simulate user history
  ngOnInit() {
    this.userHistory = [
      { action: 'Logged in', timestamp: '10:00 AM' },
      { action: 'Viewed profile', timestamp: '10:05 AM' },
      { action: 'Sent a message', timestamp: '10:10 AM' },
    ];
  }
}
