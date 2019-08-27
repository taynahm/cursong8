import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string;
  constructor(private httpClient: HttpClient) {
    this.url = `${environment.api_url}users`;
  }

  public getAll() {
    return this.httpClient.get(this.url);
  }
}
