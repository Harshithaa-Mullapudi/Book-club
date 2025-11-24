import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
    <footer class="bg-light text-center py-3 mt-5 fixed bottom">
      <div class="container small text-muted">Book Club Portal</div>
    </footer>
  `
})
export class AppComponent {}
