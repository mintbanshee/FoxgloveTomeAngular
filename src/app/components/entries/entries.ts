// src/app/components/entries/entries.ts

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntriesService } from '../../services/entries/entries.service';

@Component({
  selector: 'app-entries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './entries.html',
  styleUrl: './entries.css',
})
export class EntriesComponent implements OnInit {
  entries: any[] = [];

  constructor (
    private entriesService: EntriesService, 
    private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.entriesService.getEntries().subscribe(data => {
      this.entries = data;
      // force view update after data is loaded
      this.cdr.detectChanges();
    });
  }
  
  getMoodIcon(category: string): string {
    switch (category) {
      case 'Prickly':
        return '/images/Prickly.png';
      case 'Wilted':
        return '/images/Wilted.png';
      case 'Rooted':
        return '/images/Rooted.png';
      case 'Blooming':
        return '/images/Blooming.png';
      default:
        return '';
    }
  }
}
