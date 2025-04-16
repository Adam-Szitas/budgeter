import { Component } from '@angular/core';

import { LoginComponent } from './skeleton/login/login.component';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [LoginComponent, RouterModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Budgeter';
}
