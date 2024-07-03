import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from './angular-material/material/material.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'DAWII_CL3_KAPUSTIN_PEREZ_KEVIN_JOEL';
  showWelcomeMessage = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe((event: any) => {
      if (event.url) {
        this.showWelcomeMessage = event.url === '/';
      }
    });
  }

  goToPregunta02() {
    this.router.navigate(['/pregunta02']);
  }

  goToPregunta03() {
    this.router.navigate(['/pregunta03']);
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}