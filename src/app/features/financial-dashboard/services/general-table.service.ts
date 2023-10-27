import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IBorrower} from "../models/borrower.model";

@Injectable()
export class GeneralTableService {
  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IBorrower[]> {
    const url = 'https://raw.githubusercontent.com/LightOfTheSun/front-end-coding-task-db/master/db.json'
    return this.httpClient.get<IBorrower[]>(url)
  }
}
