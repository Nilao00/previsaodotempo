import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PrevisaoserviceService {

  constructor(public http:HttpClient) { }

GetApiDadosTempo(idestado)
{
  const headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
  return this.http.get("http://apiadvisor.climatempo.com.br/api/v1/weather/locale/"+idestado+"/current?token=2d5a8279c44e94cc35d8a9dbae76b29e",{responseType:'json',headers:headers});
}

}
