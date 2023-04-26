export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Yehudi',
};
const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia','Elizabeth'],
};

const printChildren = (passenger: Passenger) => {
    //si es undefined el valor es 0
    // children! -> siempre recibirá un numero para hacer length
    //const howManychildren = passenger.children?.length || 0;
    const howManychildren = passenger.children!.length || 0;
    console.log(passenger.name,howManychildren);
}

printChildren(passenger2);

