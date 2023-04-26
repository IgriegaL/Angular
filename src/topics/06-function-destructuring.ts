export interface Product {
    description : string;
    price : number;

}

const phone : Product = {
    description : 'Nokia a1',
    price : 2.045,
}
const tablet : Product = {
    description : 'Samsung a1',
    price : 3.045,
}

// cuando son muchos objetos para meter en la función se recomienda usar una interfaz
interface TaxCalculationOptions {
    tax: number;
    products: Product[];

}

//fucntion que retonar numero
// El desectructuring evita el propiedad.subpropiedad -> { subpropiedad }
export function taxCalculation( options : TaxCalculationOptions ): number[]{

    const { tax, products } = options;
    
    let total = 0;
    products.forEach( ({ price }) => 
        total += price) 
    return [total, total * tax];
}

const shoppingCart = [phone, tablet,]
const tax = 15;

const [total, totalTax] = taxCalculation({
    products: shoppingCart,
    tax: tax,
})


console.log('Total', total);
console.log('Tax', totalTax);