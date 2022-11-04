import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { Cat } from "./cats.interface";

@Injectable()
export class CatsService {
    private apiUrl = environment.apiUrl;
    constructor(private httpClient: HttpClient) {}
  
    findAll(): Observable<Cat> {
        const requestUrl = `${this.apiUrl}/cats`;
        return this.httpClient.get<Cat>(requestUrl);
    }
  }