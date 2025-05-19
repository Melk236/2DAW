// src/app/app.config.ts
import { provideRouter }       from '@angular/router';
import { provideAnimations }   from '@angular/platform-browser/animations';
import { provideHttpClient }   from '@angular/common/http';
import { routes }              from './app.routes';

export const appConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),      // ← Lo agregas aquí
    // …otros providers globales
  ]
};

