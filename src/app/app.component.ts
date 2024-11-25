import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  template: `
    <nav>
      <a routerLink ="/">TodoApp</a>
    </nav>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'todoApp';
}
