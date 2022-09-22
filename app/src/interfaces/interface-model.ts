import { ShowableInConsole } from "../utils/showable-in-console.js";
import { Comparable } from "./comparable.js";

export interface InterfaceModel<T> extends ShowableInConsole, Comparable<T> {
    
}