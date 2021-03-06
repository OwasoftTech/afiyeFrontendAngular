import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Subject, Observable } from 'rxjs';

const KEY_PREFIX = environment.localStoragePrefix;

@Injectable()
export class LocalStorage {
    public localStorage: any;
    private storageSub = new Subject<{ key: string, value: any }>();

    constructor() {
        if (!localStorage) {
            throw new Error('Current browser does not support Local Storage');
        }
        this.localStorage = localStorage;
        // this.start();
        console.log("start local storage");
    }
    private generateStorageKey(key: string): string {
        return `${KEY_PREFIX}_${key}`;
    }

    public set(key: string, value: string): void {
        let storageKey = this.generateStorageKey(key);
        this.localStorage[storageKey] = value;
    }

    public get(key: string): string {
        let storageKey = this.generateStorageKey(key);
        return this.localStorage[storageKey] || false;
    }

    public setObject(key: string, value: any): void {
        let storageKey = this.generateStorageKey(key);
        this.localStorage[storageKey] = JSON.stringify(value);
    }

    public getObject(key: string): any {
        let storageKey = this.generateStorageKey(key);
        return JSON.parse(this.localStorage[storageKey] || '{}');
    }

    public remove(key: string): any {
        let storageKey = this.generateStorageKey(key);
        this.localStorage.removeItem(storageKey);
    }

}
