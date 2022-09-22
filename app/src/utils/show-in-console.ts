import { ShowableInConsole } from "./showable-in-console.js";


export function ShowInConsole(...objects: ShowableInConsole[]) {
    for (let object of objects) {
        console.log(object.toString());
    }
}