import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { heroList } from '../data/fakeData';

@Injectable()
export class InMemoryService implements InMemoryDbService {
    createDb() {
        let heroes = heroList;
        return { heroes };
    }
}
