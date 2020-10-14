import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class UsersService {
  private static API_URL = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) {}

  public getUsers() {
    return this.http.get(UsersService.API_URL);
  }
}
