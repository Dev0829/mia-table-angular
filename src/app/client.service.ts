import { MiaBaseCrudHttpService, MiaPagination, MiaQuery } from '@agencycoda/mia-core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends MiaBaseCrudHttpService<any> {

  constructor(
    protected http: HttpClient
  ) { 
    super(http);
    this.basePathUrl = 'https://agency-coda.uc.r.appspot.com/client';
  }

  listOb(query: MiaQuery): Observable<MiaPagination<any>> {
    let params: any = query.toParams();
    console.log(query);
    return this.postOb(this.basePathUrl + '/list', params);
  }
}   