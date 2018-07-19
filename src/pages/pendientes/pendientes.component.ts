import { Component, OnInit } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.component';

@Component({
    selector: 'app-pendientes',
    templateUrl: './pendientes.component.html',
    styleUrls: ['']
})
export class PendienteComponent implements OnInit {

    
    
    constructor(public deseosService: DeseosService,
                private navCtrl: NavController,
                private alertCtrl: AlertController) {

     }

    ngOnInit(): void { }


    agregarLista() {
        //this.navCtrl.push(AgregarComponent);
        
        const prompt = this.alertCtrl.create({
          title: 'Agregar Tarea',
          message: "Escriba el nombre de la tarea que quiere agregar",
          inputs: [
            {
              name: 'titulo',
              placeholder: 'Tarea'
            },
          ],
          buttons: [
            {
              text: 'Cancelar',
              handler: data => {
                console.log('Cancelar clicked');
              }
            },
            {
              text: 'Guardar',
              handler: data => {
                if (data.titulo.lenght === 0) {
                    return;
                }
                this.navCtrl.push(AgregarComponent, {
                    titulo: data.titulo
                });
              }
            }
          ]
        });
        prompt.present();
    }
    

}
