import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordBankService {

  constructor() { }

  public getWord(): string {
    return "SNEAK";
  }
}
