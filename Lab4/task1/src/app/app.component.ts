import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header>
      <h1>Angular Tutorial Tasks</h1>
      <nav>
        <a routerLink="/task1" routerLinkActive="active">Task 1</a>
        <a routerLink="/task2" routerLinkActive="active">Task 2</a>
        <a routerLink="/task3" routerLinkActive="active">Task 3</a>
      </nav>
    </header>

    <main>
      <router-outlet />
    </main>

    <footer>
      <p>Lab 4 - Task 1 Analysis & Refactoring</p>
    </footer>
  `,
  styles: [
    `
      header {
        background-color: #333;
        color: white;
        padding: 1rem;
        text-align: center;
      }
      nav {
        margin-top: 1rem;
        display: flex;
        justify-content: center;
        gap: 1rem;
      }
      nav a {
        color: #ccc;
        text-decoration: none;
        font-weight: bold;
        padding: 0.5rem 1rem;
        border-radius: 4px;
      }
      nav a:hover {
        color: white;
        background-color: #444;
      }
      nav a.active {
        color: white;
        background-color: #555;
        border-bottom: 2px solid #a2f;
      }
      main {
        padding: 2rem;
        max-width: 800px;
        margin: 0 auto;
      }
      footer {
        text-align: center;
        padding: 1rem;
        border-top: 1px solid #ddd;
        margin-top: 2rem;
        color: #666;
      }
    `,
  ],
})
export class AppComponent {
  title = 'task1';
}
