import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-chat-section',
  templateUrl: './chat-section.component.html',
  styleUrls: ['./chat-section.component.css']
})
export class ChatSectionComponent {
  @ViewChild('chatWindow') private chatWindow!: ElementRef;

  messages = [
    { sender: 'Chatbot', text: 'Hello! How can I assist you today?', timestamp: this.getCurrentTime() },
    { sender: 'User', text: 'Can you tell me about Angular?', timestamp: this.getCurrentTime() }
  ];

  // to connect with navbar......
  constructor(
    private route:ActivatedRoute
  ){}

  goBack(){
    window.history.back();
  }

  newMessage = '';

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({
        sender: 'User',
        text: this.newMessage,
        timestamp: this.getCurrentTime()
      });
      this.newMessage = '';
      this.scrollToBottom();

      setTimeout(() => {
        this.messages.push({
          sender: 'Chatbot',
          text: 'Sure! Angular is a platform for building mobile and desktop web applications.',
          timestamp: this.getCurrentTime()
        });
        this.scrollToBottom();
      }, 1000);
    }
  }

  scrollToBottom(): void {
    try {
      this.chatWindow.nativeElement.scrollTop = this.chatWindow.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Error scrolling to bottom:', err);
    }
  }

  getCurrentTime(): string {
    return new Date().toLocaleTimeString();
  }
}
