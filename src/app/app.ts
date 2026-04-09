import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class AppComponent implements OnInit {
  title = 'Foxglove Tome';

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getTest().subscribe(data => {
      console.log('API Response:', data);
    })
  }
}
