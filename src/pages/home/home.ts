import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('lineCanvas') lineCanvas;
 
    barChart: any[] = [];
    doughnutChart: any;
    lineChart: any;

    lista: Lista[];
    cantListas: number;

  constructor(public navCtrl: NavController,
              public listaService: DeseosService) {

     // this.cantListas = this.listaService.getListas().length;  
     // console.log(this.cantListas);       
  }

  ngOnInit () {
    this.cantListas = this.listaService.getListas().length;  

    //let charData = this.barChart;
    console.log(this.barCanvas.nativeElement);
    
  }

  ionViewDidLoad() {
 
    this.barChart = new Chart(this.barCanvas.nativeElement, {

        type: 'bar',
        data: {
            labels: ["En", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
            datasets: [{
                label: 'N° Tareas',
                //data: [this.cantListas, 13, 11, 4, 8, 9, 20, 4, 3, 1, 7, 6],
                data: [
                  {x:'En', y: this.cantListas}, 
                  {x:'Feb', y:10},
                  {x:'Mar', y:10},
                  {x:'Abr', y:10},
                  {x:'May', y:10},
                  {x:'Jun', y:10},
                  {x:'Jul', y:10},
                  {x:'Ago', y:10},
                  {x:'Sep', y:10},
                  {x:'Oct', y:10},
                  {x:'Nov', y:10},
                  {x:'Dic', y:10}
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }

    }); // fin de bar chart

    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
 
      type: 'doughnut',
      data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]
      }

  }); // fin de donut

  this.lineChart = new Chart(this.lineCanvas.nativeElement, {

      type: 'line',
      data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [
              {
                  label: "My First dataset",
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: "rgba(75,192,192,0.4)",
                  borderColor: "rgba(75,192,192,1)",
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: "rgba(75,192,192,1)",
                  pointBackgroundColor: "#fff",
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgba(75,192,192,1)",
                  pointHoverBorderColor: "rgba(220,220,220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: [65, 59, 80, 81, 56, 55, 40],
                  spanGaps: false,
              }
          ]
      }

  }); // fin de line




  } // fin de la funcion 

}
