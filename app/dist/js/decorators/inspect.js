export function inspect(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`--- Método ${propertyKey}`);
        console.log(`------ parâmetros: ${JSON.stringify(args)}`);
        const returnMethod = originalMethod.apply(this, args);
        console.log(`------ retorno: ${JSON.stringify(returnMethod)}`);
        return returnMethod;
    };
    return descriptor;
}
//# sourceMappingURL=inspect.js.map