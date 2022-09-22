export interface Comparable<T> {
    isDealEqual(object: T): boolean;
}