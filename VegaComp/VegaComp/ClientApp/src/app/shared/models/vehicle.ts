export interface KeyValuePair {
    id: number;
    name: string;
}

export interface Contact {
    name: string;
    phone: string;
    email: string;
}

export interface Vehicle {
    id: number;
    model: KeyValuePair;
    make: KeyValuePair;
    isRegistered: boolean;
    features: KeyValuePair[];
    contact: Contact;
    lastUpdate: string;
}

export interface SaveVehicle {
    id: number;
    modelId: number;
    makeId: number;
    isRegistered: boolean;
    features: number[];
    contact: Contact;
}

export interface SaveMake {
    id: number;
    name: string;
    isAfricaManufactured: boolean;
    models?: number[];

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



