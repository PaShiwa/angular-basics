import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives',
  imports: [CommonModule],
  templateUrl: './directives.html',
})
export class Directives {
  currentDirective: string = 'Component';

  changeDirective(directiveType: string) {
    this.currentDirective = directiveType;
  }
}
