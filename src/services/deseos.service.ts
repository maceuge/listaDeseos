import { Injectable } from '@angular/core';
import { Lista } from '../models';

@Injectable()

export class DeseosService {

    lista: Lista[] = [];
    
    constructor () {

        const lista1 = new Lista('Juntar Gemas del Inifinity');
        const lista2 = new Lista('Heroes a Vencer');

        this.lista.push(lista1, lista2);

        //console.log(this.lista);

    }

    getListas() {
        return this.lista;
    }
}