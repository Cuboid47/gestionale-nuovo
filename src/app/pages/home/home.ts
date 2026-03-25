import { Component } from '@angular/core';
import {Navbar} from '../../components/navbar/navbar';
import {CardInterface} from '../../interfaces/card.interface';
import {HomeCard} from '../../components/home-card/home-card';

@Component({
  selector: 'app-home',
  imports: [
    HomeCard
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true
})
export class Home {
  readonly cards: CardInterface[] = [
    {
      label: 'Dipendenti',
      subtitle: 'Gestisci i tuoi dipendenti, visualizza le loro informazioni e assegna loro progetti.',
      icon: 'pi pi-user',
      route: '/dipendenti'
    },
    {
      label: 'Dipartimenti',
      subtitle: 'Organizza i tuoi dipartimenti, visualizza le loro informazioni e gestisci i membri.',
      icon: 'pi pi-building',
      route: '/dipartimenti'
    },
    {
      label: 'Partners',
      subtitle: 'Gestisci i tuoi partners, visualizza le loro informazioni e le collaborazioni in corso.',
      icon: 'pi pi-dollar',
      route: '/aziende'
    },
    {
      label: 'Progetti',
      subtitle: 'Gestisci i tuoi progetti, visualizza le loro informazioni e assegna dipendenti e partners.',
      icon: 'pi pi-folder-open',
      route: '/progetti'
    }
  ];
}
