import { Injectable } from '@angular/core';
import { Lista } from '../models';

@Injectable()

export class DeseosService {

    lista: Lista[] = [];
    
    constructor () {
        this.cargarStorage();
        //const lista1 = new Lista('Juntar Gemas del Inifinity');
        //const lista2 = new Lista('Heroes a Vencer');
        //this.lista.push(lista1);
        //console.log(this.lista);

    }

    getListas() {
        return this.lista;
    }

    agregarLista (lista: Lista) {
        this.lista.push(lista);
        this.guardarStorage();
    }

    guardarStorage () {
        localStorage.setItem('data', JSON.stringify(this.lista));
    }

    // no funciona
    /*eliminarStorage(lista: Lista) {
        this.lista = this.lista.filter( listData => {
            return listData.id !== lista.id
        });
        console.log(this.lista);
        this.guardarStorage();
    }*/

    cargarStorage () {
        if (localStorage.getItem('data')) {
            this.lista = JSON.parse(localStorage.getItem('data'));
        } else {
            this.lista = [];
        }
    }
}