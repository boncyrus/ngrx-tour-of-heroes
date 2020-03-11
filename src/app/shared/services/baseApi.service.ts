import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

export abstract class BaseApiService<T extends object> {
  constructor(protected httpClient: HttpClient) {}
  abstract getAll(): Observable<Array<T>>;
}
