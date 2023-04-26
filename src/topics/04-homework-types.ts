/*
    ===== Código de TypeScript =====
*/
interface SuperHero{
    name: String;
    age: number;
    address: Address;
    showAddress:()=>void;
}
// Cuando hay un obj es mejor separarlo, hacerlo una nueva interfaz
// f2: para cambiar en todos la propiedad del interface
interface Address{
    streeth: String,
    country: String,
    city: String
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        streeth: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.ciudad + ', ' + this.address.pais;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};