export interface StoreAction<T, P = undefined> {
    type: T;
    payload?: P;
}
