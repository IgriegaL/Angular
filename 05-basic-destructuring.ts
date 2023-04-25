interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song:string;
    details:Details;
}
interface Details {
    author: string;
    year: number;
}

const audioPlayer : AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Moon Full Star",
    details: {
        author: "Coldplay",
        year: 2023
    }
} 


//const { song } = audioPlayer; // Traer solo song


// Renombrar la desesctructuración:
const { 
    song: anotherSong, 
    songDuration: duration,
    details
} = audioPlayer;
const {author} = details; 



console.log(anotherSong); // Llamo a another song
console.log(duration); // Llamo a another songDuration
console.log(author); // Llamo a another songDuration


//const dbz: string[] = ["Goku", "Vegeta", "Trunk"];
// const [p1,p2,trunks]: string[] = ["Goku", "Vegeta", "Trunk"];
// También se puede hacer esto, si no existe Goku ->  'Not found' :
const [ , ,trunks = 'Not found' ]: string[] = ["Goku", "Vegeta", "Trunk"];

console.log('PErsona 3: ', trunks) // Trunk
console.log('PErsona 2: ', Goku) // 'Not found'