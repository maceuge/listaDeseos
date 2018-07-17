import { Component, OnInit } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';

@Component({
    selector: 'app-agregar',
    templateUrl: './agregar.component.html',
    styleUrls: ['']
})
export class AgregarComponent implements OnInit {

    listas: Lista[] = [];
    
    constructor(public deseosService: DeseosService) {
       
     }

    ngOnInit(): void {}


}