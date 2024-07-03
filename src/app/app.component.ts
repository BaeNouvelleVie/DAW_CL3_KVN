import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DAWII_CL3_KAPUSTIN_PEREZ_KEVIN_JOEL';

  constructor(private router: Router) {}

  goToPregunta02() {
    this.router.navigate(['/pregunta02']);
  }

  goToPregunta03() {
    this.router.navigate(['/pregunta03']);
  }
}
