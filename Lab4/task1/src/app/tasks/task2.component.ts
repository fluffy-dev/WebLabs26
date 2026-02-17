import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  styles: `
    .btn {
      padding: 5px;
      cursor: pointer;
    }
  `,
  template: `
    <div class="child-component">
      <p>Child Component (Signal Input): {{ name() }}</p>
      <button class="btn" (click)="addItem()">Add Item via Output</button>
    </div>
  `,
})
export class ChildComponent {
  readonly name = input<string>('Default Name');
  readonly addItemEvent = output<string>();

  addItem() {
    this.addItemEvent.emit('🐢');
  }
}

@Component({
  selector: 'app-comments',
  standalone: true,
  template: `
    <div class="comments-section">
      <h3>Comments (Loaded via &#64;defer)</h3>
      <ul>
        <li>Comment 1: Great post!</li>
        <li>Comment 2: Very informative.</li>
        <li>Comment 3: I love Angular!</li>
      </ul>
    </div>
  `,
  styles: [
    `
      .comments-section {
        background-color: #f0f0f0;
        padding: 10px;
        border-radius: 5px;
      }
    `,
  ],
})
export class CommentsComponent {}

@Component({
  selector: 'app-task2',
  standalone: true,
  imports: [CommonModule, ChildComponent, CommentsComponent],
  template: `
    <section>
      <h2>Task 2: Control Flow, Signals & Defer</h2>

      <h3>Control Flow (&#64;if, &#64;for)</h3>
      @if (isServerRunning) {
        <p class="status-ok">✅ Yes, the server is running</p>
      } @else {
        <p class="status-error">❌ No, the server is not running</p>
      }

      <button (click)="toggleServer()">Toggle Server Status</button>

      <h4>Users List:</h4>
      <ul>
        @for (user of users; track user.id) {
          <li>{{ user.name }} (ID: {{ user.id }})</li>
        } @empty {
          <li>No users found.</li>
        }
      </ul>

      <h3>Event Handling</h3>
      <div class="secret-area" (mouseover)="showSecretMessage()">
        Hover over me: {{ message }}
      </div>

      <h3>Signals (Input/Output)</h3>
      <app-child
        [name]="'Angular Guru'"
        (addItemEvent)="handleAddItem($event)"
      />
      <p>Items added from child: {{ items.join(', ') }}</p>

      <h3>Deferrable Views</h3>
      <p>Scroll down or click the button to load comments.</p>

      @defer (on interaction(loadCommentsBtn)) {
        <app-comments />
      } @placeholder {
        <button #loadCommentsBtn>Load Comments</button>
      } @loading {
        <p>Loading comments...</p>
      }
    </section>
  `,
  styles: [
    `
      .status-ok {
        color: green;
        font-weight: bold;
      }
      .status-error {
        color: red;
        font-weight: bold;
      }
      .secret-area {
        border: 1px dashed #333;
        padding: 10px;
        margin: 10px 0;
        background-color: #eef;
        cursor: help;
      }
      .child-component {
        border: 1px solid #999;
        padding: 10px;
        margin: 10px 0;
      }
    `,
  ],
})
export class Task2Component {
  isServerRunning = true;
  users = [
    { id: 0, name: 'Sarah' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Jessica' },
    { id: 4, name: 'Poornima' },
  ];
  message = '';
  items: string[] = [];

  toggleServer() {
    this.isServerRunning = !this.isServerRunning;
  }

  showSecretMessage() {
    this.message = 'Way to go 🚀';
  }

  handleAddItem(item: string) {
    this.items.push(item);
  }
}
