export function showInConsole(...objects) {
    for (let object of objects) {
        console.log(object.toString());
    }
}
