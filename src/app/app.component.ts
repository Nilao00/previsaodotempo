import { Component } from '@angular/core';
import {PrevisaoserviceService} from './previsaoservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  idestado:any;
  resultTemp:any;
  title = 'previsaodotempo';
  changeShow:boolean = false;
  selectChange:any;
  idsaopaulo:any = '3477';
  idrio:any = '5959';
  idcuritiba:any = '6731';
  load:boolean;

  constructor(private service:PrevisaoserviceService){
    this.selectChange = this.changeShow;
  
  }

  //Pegar os dados de tempo vindo do service
  GetApiDados(){
    this.load = true;
    if(this.idestado == '3477' ){
      this.idestado = this.idsaopaulo;
      this.selectChange = this.changeShow;
      
    }else if(this.idestado == '5959'){
      this.idestado = this.idrio;
      this.selectChange = this.changeShow;
     
    }else if(this.idestado == '6731'){
      this.idestado = this.idcuritiba;
      this.selectChange = this.changeShow;
  
     
    }else if(this.selectChange != undefined){
      this.load = false;
    }
    this.service.GetApiDadosTempo(this.idestado).subscribe(
     data=>
     {
       this.resultTemp = Array.of(data['data']);
       console.log(this.resultTemp);
       this.load = false;
     }
     ,
     erro=>console.log(erro)
    );
  }
 //funcao para mostrar o card
  ShowCard(event){
    this.idestado = event;
    this.changeShow = true;
    this.GetApiDados();
  }
}
