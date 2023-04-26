
// Clase: molde de instacias
/*export class Person {
    public name: string;
    public address: string;

    constructor( name: string, address: string ){
        this.name = name;
        this.address = address;
    };

} */
 // Más común encontrar así, forma corta de definir clases en TS
export class Person {
    constructor( 
        public name: string, 
        public address: string 
        ){}
}

export class Hero extends Person{
    
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
    ) {
        super( realName, 'New York')
    }
        
}

const ironMan = new Hero('Iron man',45,'Tony');

console.log(ironMan)

export {}