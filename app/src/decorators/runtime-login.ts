export function runtimeLogin(inSeconds: boolean = false) {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value;
        descriptor.value = function(...args: any[]) {
            let divisor = 1;
            let unit = 'milisegundos';
            if (inSeconds) {
                divisor = 1000;
                unit = 'segundos';
            }
            const t1 = performance.now();
            const returnMethod = originalMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey},  tempo de execução: ${(t2 - t1)/divisor} ${unit}`)
            returnMethod
        }
        return descriptor;
    }
}