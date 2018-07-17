import { Component, OnInit } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';

@Component({
    selector: 'app-terminados',
    templateUrl: './terminados.component.html',
    styleUrls: ['']
})
export class TerminadosComponent implements OnInit {
    
    listas: Lista[] = [];
    
    constructor(public deseosService: DeseosService) {

        this.listas = this.deseosService.getListas();

     }

    ngOnInit(): void { }

    listaSelected (item: Lista) {
        console.log(item);
    }
}
