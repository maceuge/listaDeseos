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

    listas: Lista[] = [];
    
    constructor(public deseosService: DeseosService,
                private navCtrl: NavController,
                private alertCtrl: AlertController,
                private toastCtrl: ToastController) {

        this.listas = this.deseosService.getListas();
     }

    ngOnInit(): void { }


    editarNomLista(titulo: string) {
      //console.log(titulo);
      
      const prompt = this.alertCtrl.create({
        title: 'Editar Tarea',
        message: "Escriba el nuevo nombre de la tarea que quiere editar",
        inputs: [
          {
            name: 'titulo',
            placeholder: 'Nuevo Nombre de la Tarea',
            value: titulo
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
              
              let oldTitle = this.listas.filter( listData => {
            
                if (listData.titulo == data.titulo) {
                   listData.titulo = data.titulo;
                   console.log(listData);
                   this.deseosService.guardarStorage();                 
                }
              });
              
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

    presentToast() {
      const toast = this.toastCtrl.create({
        message: 'La lista se elimino con exito!',
        duration: 4500
      });
      toast.present();
    }
    

}
