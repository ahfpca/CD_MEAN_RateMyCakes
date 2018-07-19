import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CakeService {

  constructor(private _http: HttpClient) { }

  getAll() {
    return this._http.get('/api/cakes');
  }

  getOne(id: string) {
    return this._http.get('/api/cakes/' + id);
  }

  create(cake: any) {
    return this._http.post('/api/cakes', cake);
  }

  update(cake: any) {
    return this._http.put('/api/cakes/' + cake._id, cake);
  }

  delete(id: string) {
    return this._http.delete('/api/cakes/' + id);
  }
}
