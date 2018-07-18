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

        if (this.navParams.get('lista')) {
            this.lista = this.navParams.get('lista');
        } else {
            this.lista = new Lista(title);             
            this.deseosService.agregarLista(this.lista);
        }
     }

    ngOnInit(): void {}

    guardarItem() {
        if (this.nombreItem.length === 0) {
           return;
        }
        const nuevoItem = new ListaItem(this.nombreItem);
        this.lista.item.push(nuevoItem);
        this.deseosService.guardarStorage();
        this.nombreItem = '';
    }

    checkItem(item: ListaItem) {
        item.completado = !item.completado;

        const pendientes = this.lista.item.filter( itemData => {
            return !itemData.completado;
        }).length;

        if (pendientes === 0) {
            this.lista.terminada = true;
            this.lista.finalizEn = new Date();
        } else {
            this.lista.terminada = false;
            this.lista.finalizEn = null;
        }

        this.deseosService.guardarStorage();
    }

    eliminarItem(idx: number) {
        this.lista.item.splice(idx, 1);
        this.deseosService.guardarStorage();
    }
}