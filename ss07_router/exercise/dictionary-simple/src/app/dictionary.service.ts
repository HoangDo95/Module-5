import {Injectable} from '@angular/core';
import {IWord} from "./i-word";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  wordList: IWord[] = [];

  constructor() {
    this.wordList.push({
      word: 'hello',
      mean: 'xin chào'
    })
    this.wordList.push({
      word: 'good bye',
      mean: 'đi luôn'
    })
    this.wordList.push({
      word: 'dog',
      mean: 'mèo'
    })
  }

  public getAll() {
    return this.wordList;
  }

  findByWord(word: string) {
    for (const w of this.wordList) {
      if (w.word == word) {
        return w;
      }
    }
  }
}
