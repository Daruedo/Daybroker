export function escape(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        let returnMethod = originalMethod.apply(this, args);
        if (typeof returnMethod === 'string') {
            // console.log(`@escape em ação na classe ${this.constructor.name} para o método ${propertyKey}`)
            returnMethod = returnMethod.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return returnMethod;
    }
    return descriptor;
}