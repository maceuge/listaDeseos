import { Component, OnInit } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { NavParams } from 'ionic-angular';
import { ListaItem } from '../../models';

@Component({
    selector: 'app-agregar',
    templateUrl: './agregar.component.html',
    styleUrls: ['']
})
export class AgregarComponent implements OnInit {

    lista: Lista;
    nombreItem: string = '';
    
    constructor(public deseosService: DeseosService,
                private navParams: NavParams) {

        let title = this.navParams.get('titulo');
        this.lista = new Lista(title);             
    
     }

    ngOnInit(): void {}

    guardarItem() {
       if (this.nombreItem.length === 0) {
           return;
       }
       const nuevoItem = new ListaItem(this.nombreItem);
       this.lista.item.push(nuevoItem);
       this.nombreItem = '';
    }

    checkItem(item: ListaItem) {
        item.completado = !item.completado;
    }

    eliminarItem(idx: number) {
        this.lista.item.splice(idx, 1);
    }
}