
// Tratar siempre de no usar any
/*
whatsMyType<T> -> Función genérica
se amolda a los argumentos que le pasamos con la <T>
*/
export function whatsMyType<T>(argument: T): T {
    return argument;
}

// Podemos obligar cuando invocamos aque sea de untipo con <tipo>
let amIString = whatsMyType<string>('Hola Mundo');
let amINumber = whatsMyType<number>(100);
let amIArray = whatsMyType<number[]>([1,2,3,4,5]);

