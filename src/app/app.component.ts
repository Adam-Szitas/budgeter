import { Component } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Budgeter';

  constructor(private httpClient: HttpClient){}

  public testCall() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1').subscribe({
      next: console.log
    })
  }
}
