import { ListaItem } from './lista-items.model';

export class Lista {


    id: number;
    titulo: string;
    creadaEn: Date;
    finalizEn: Date;
    terminada: boolean;
    item: ListaItem[];

    constructor ( titulo:string ) {
        this.titulo = titulo;
        this.terminada = false;
        this.creadaEn = new Date();
        this.item = [];
        this.id = new Date().getTime();

    }

}