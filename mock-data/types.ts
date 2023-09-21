export type Estate = 'house' | 'flat' | 'commercial' | 'other';

export interface Payment {
    id: number;
    sum: number;
    date: string;
}

export interface Utility {
    id: number;
    account: string;
    organization: string;
    service: string;
    readings: Reading[];
    payments: Payment[];
    imageUri: string | null;
}

export type Owner = {
    id: string;
    owner: string;
    estateType: string;
    email: string;
    address: string;
    paymentHistory: Utility[];
};

export interface Reading {
    id: number;
    reading: number;
    date: string;
}

export type PaymentInfo = {
    date: string;
    organization: string;
    service: string;
    sum: number;
};
