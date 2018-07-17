import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { PendienteComponent } from '../pendientes/pendientes.component';
import { TerminadosComponent } from '../terminados/terminados.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PendienteComponent;
  tab3Root = TerminadosComponent;
  tab4Root = ContactPage;

  constructor() {

  }
}
