import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import { DipendentiList } from './components/dipendenti-list/dipendenti-list';
import { DipartimentiList } from './components/dipartimenti-list/dipartimenti-list';

export const routes: Routes = [
  { path: 'dipendenti', component: DipendentiList },
  { path: 'dipartimenti', component: DipartimentiList },
  { path: '', pathMatch: 'full', component: Home },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];
