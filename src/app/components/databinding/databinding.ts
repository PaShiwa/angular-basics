import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.html',
})
export class Databinding {
  firstName: string = 'Pawan';
  angularVersion: string = 'Version 20';
  currentDate: Date = new Date();
  selectedCountry: string = '';

  showWelcomeAlert() {
    alert('Welcome to angular 18!');
  }

  showMessage(message: string) {
    alert(message);
  }
}
