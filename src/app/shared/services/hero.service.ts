import { Hero } from '@shared/models/hero';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseApiService } from './baseApi.service';
import { map } from 'rxjs/operators';
import { heroList } from '../data/fakeData';

@Injectable()
export class HeroService extends BaseApiService<Hero> {
    constructor(protected httpClient: HttpClient) {
        super(httpClient);
    }

    getAll(): Observable<Array<Hero>> {
        return this.httpClient.get<Array<Hero>>('heroes');
    }

    getTopHeroes(): Observable<Array<Hero>> {
        return this.httpClient.get<Array<Hero>>('heroes').pipe(map((data) => data.slice(0, 4)));
    }

    getById(id: number): Observable<Hero> {
        return this.httpClient.get<Hero>(`heroes/${id}`);
    }

    update(id: number, entity: Hero): Observable<any> {
        return this.httpClient.put<Hero>(`heroes/${id}`, entity);
    }

    create(entity: Hero): Observable<any> {
        return this.httpClient.post<Hero>(`heroes`, entity);
    }
}
