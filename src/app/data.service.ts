import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
providedIn: 'root'
})
export class DataService {

constructor(private http: HttpClient) { }

getsummary(): Promise<any> {
return this.http.get(`${environment.BASE_URL}latest`).toPromise();
}

getreg(): Promise<any> {
return this.http.get(`${environment.BASE_URL}latest`).toPromise();
}
}
