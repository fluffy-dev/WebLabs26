import {
  Component,
  Injectable,
  Pipe,
  PipeTransform,
  inject,
} from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import {
  CommonModule,
  LowerCasePipe,
  DecimalPipe,
  DatePipe,
  CurrencyPipe,
} from '@angular/common';

// Service
@Injectable({
  providedIn: 'root',
})
export class CarService {
  cars = ['Sunflower GT', 'Flexus Sport', 'Sprout Mach One'];

  getCars(): string[] {
    return this.cars;
  }

  getCar(id: number) {
    return this.cars[id];
  }
}

// Custom Pipe
@Pipe({
  name: 'reverse',
  standalone: true,
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}

@Component({
  selector: 'app-task3',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReversePipe,
    LowerCasePipe,
    DecimalPipe,
    DatePipe,
    CurrencyPipe,
  ],
  template: `
    <section>
      <h2>Task 3: Reactive Forms, DI & Pipes</h2>

      <h3>Reactive Forms</h3>
      <form
        [formGroup]="profileForm"
        (ngSubmit)="handleSubmit()"
        class="profile-form"
      >
        <div class="form-group">
          <label>Name: </label>
          <input type="text" formControlName="name" />
          <span
            *ngIf="
              profileForm.get('name')?.invalid &&
              profileForm.get('name')?.touched
            "
            class="error"
          >
            Name is required
          </span>
        </div>

        <div class="form-group">
          <label>Email: </label>
          <input type="email" formControlName="email" />
          <span
            *ngIf="
              profileForm.get('email')?.invalid &&
              profileForm.get('email')?.touched
            "
            class="error"
          >
            Valid email is required
          </span>
        </div>

        <button type="submit" [disabled]="!profileForm.valid">Submit</button>
      </form>

      <div class="form-preview">
        <h4>Form Values:</h4>
        <p>Name: {{ profileForm.value.name }}</p>
        <p>Email: {{ profileForm.value.email }}</p>
      </div>

      <h3>Dependency Injection (CarService)</h3>
      <p>Car Listing via Service: {{ display }}</p>

      <h3>Pipes</h3>
      <ul>
        <li>Lowercase: {{ username | lowercase }}</li>
        <li>Number (3.2-2): {{ num | number: '3.2-2' }}</li>
        <li>Date (medium): {{ birthday | date: 'medium' }}</li>
        <li>Currency: {{ cost | currency }}</li>
        <li>Custom Reverse Pipe: {{ word | reverse }}</li>
      </ul>
    </section>
  `,
  styles: [
    `
      .profile-form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-width: 300px;
        margin-bottom: 20px;
      }
      .form-group {
        display: flex;
        flex-direction: column;
      }
      .error {
        color: red;
        font-size: 0.8em;
      }
      .form-preview {
        background-color: #f9f9f9;
        padding: 10px;
        border: 1px solid #ddd;
      }
    `,
  ],
})
export class Task3Component {
  // Reactive Forms
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  // Dependency Injection
  carService = inject(CarService);
  display = this.carService.getCars().join(' ⭐️ ');

  // Pipes Data
  username = 'yOunGTECh';
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
  word = 'You are a champion';

  handleSubmit() {
    alert(
      `Name: ${this.profileForm.value.name} | Email: ${this.profileForm.value.email}`,
    );
  }
}
