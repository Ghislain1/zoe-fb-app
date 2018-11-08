import { KeyValuePair } from './vehicle';


export interface Model {
  id: number;
  make: KeyValuePair;
  isRegistered: boolean;
  imageUrl: string;
  class: string;
  lastUpdate: string;
  name: string;
  predecessor: string;
  pYear: string;

}

export interface SaveModel {
  id: number;

  makeId: number;



  imageUrl: string;
  class: string;
  lastUpdate: string;
  name: string;
  predecessor: string;
  pYear: string;

}
