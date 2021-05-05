import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
  <div style="background-image: url('https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico?v=ec617d715196'); height: 36px; width: 38px;"></div>
    <a href="#" class="navbar-brand"> Device Home</a>
    <div class="navbar-nav mr-auto">
      <li class="nav-item">
        <a routerLink="devices" class="nav-link">List</a>
      </li>
      <li class="nav-item">
        <a routerLink="add" class="nav-link">Add</a>
      </li>
      <li class="nav-item">
        <app-authentication-button></app-authentication-button>
      </li>
    </div>
  </nav>

  <div class="container mt-3">
    <router-outlet></router-outlet>
  </div>
</div>
  `,
  styleUrls: []
})
export class AppComponent {
  title = 'MY Devices';
}
