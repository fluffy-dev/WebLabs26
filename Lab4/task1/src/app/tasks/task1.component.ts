import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgOptimizedImage, FormsModule],
  template: `
    <div class="user-profile">
      <p>Username: {{ username }}</p>
      <p>Preferred Framework:</p>
      <ul>
        <li>
          Static Image:
          <img
            ngSrc="/assets/logo.svg"
            alt="Angular logo"
            width="32"
            height="32"
            priority
          />
        </li>
        <li>
          Dynamic Image:
          <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" />
        </li>
      </ul>

      <p>{{ username }}'s favorite framework: {{ favoriteFramework }}</p>
      <label for="framework">
        Favorite Framework:
        <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
      </label>
    </div>
  `,
  styles: [
    `
      .user-profile {
        border: 1px solid #ccc;
        padding: 1rem;
        border-radius: 4px;
        margin-bottom: 1rem;
      }
    `,
  ],
})
export class UserComponent {
  logoUrl = '/assets/logo.svg';
  logoAlt = 'Angular logo';
  username = 'youngTech';
  favoriteFramework = '';
}

@Component({
  selector: 'app-task1',
  standalone: true,
  imports: [UserComponent],
  template: `
    <section>
      <h2>Task 1: Components, Images & Forms</h2>
      <p>
        This task demonstrates component composition, image optimization, and
        template-driven forms.
      </p>
      <app-user />
    </section>
  `,
})
export class Task1Component {}
