import { Routes } from '@angular/router';
import { EntriesComponent } from './components/entries/entries';

export const routes: Routes = [

  { path: '', redirectTo: 'entries', pathMatch: 'full' },
  { path: 'entries', component: EntriesComponent }

];
