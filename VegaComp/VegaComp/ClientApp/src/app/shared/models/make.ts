

export interface SaveMake {
    id: number;
    name: string;
    isAfricaManufactured: boolean;
    models?: number[];
    touched: boolean;
    valid: boolean;

}

export interface Make {
    id: number;
    name: string;
    isAfricaManufactured: boolean;
    models?: number[];
    lastUpdate: string;

}


export interface SaveModel {
    id: number;
    name: string;
    makeId: number;
}



