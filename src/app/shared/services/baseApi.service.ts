import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export abstract class BaseApiService<T extends object> {
    constructor(protected httpClient: HttpClient) {}
    abstract getAll(): Observable<Array<T>>;
    abstract getById(id: number): Observable<T>;
    abstract update(entity: T): Observable<T>;
}
