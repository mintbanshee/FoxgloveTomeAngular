// src/app/app.ts

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class AppComponent {
  title = signal('Foxglove Tome');
}





/**~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
!          Removed Snippets           !  
*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

** this was used to display the API response in the console to verify
        the connection status during initial setup 

      this.api.getTest().subscribe(data => {
        console.log('API Response:', data);
      })


*/ 