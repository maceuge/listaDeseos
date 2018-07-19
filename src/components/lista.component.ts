import { Component, Input } from '@angular/core';
import { DeseosService } from '../services/deseos.service';
import { AlertController, NavController, ToastController, ItemSliding } from 'ionic-angular';
import { AgregarComponent } from '../pages/agregar/agregar.component';
import { Lista } from '../models/lista.model';

@Component({
    selector: 'app-listas',
    templateUrl: './lista.component.html',
    styleUrls: ['']
})

export class ListaComponent {

    @Input() terminada: boolean = false;
    listas: Lista[] = [];

    constructor(public deseosService: DeseosService,
                private alertCtrl: AlertController,
                private navCtrl: NavController,
                private toastCtrl: ToastController) {

        this.listas = this.deseosService.getListas();            

    }

    editarNomLista(lista: Lista, slideItem: ItemSliding) {
        
        const prompt = this.alertCtrl.create({
          title: 'Editar Tarea',
          message: "Escriba el nuevo nombre de la tarea que quiere editar",
          inputs: [
            {
              name: 'titulo',
              placeholder: 'Nuevo Nombre de la Tarea',
              value: lista.titulo
            },
          ],
          buttons: [
            {
              text: 'Cancelar',
            },
            {
              text: 'Guardar',
              handler: data => {  
                if (data.titulo.lenght === 0) {
                    return;
                }  
                
                lista.titulo = data.titulo;
                this.deseosService.guardarStorage();
                slideItem.close();
              }
            }
          ]
        });
        prompt.present();
      }
  
      listaSelected (lista: Lista) {
        this.navCtrl.push(AgregarComponent, {
          titulo: lista.titulo,
          lista: lista
        });
      }
  
     
      eliminarLista(idx: number) {
        //this.deseosService.eliminarStorage(lista);
          this.listas.splice(idx, 1);
          this.deseosService.guardarStorage();
          this.presentToast();
      }

      presentToast() {
        const toast = this.toastCtrl.create({
          message: 'La lista se elimino con exito!',
          duration: 4500
        });
        toast.present();
      }
}
