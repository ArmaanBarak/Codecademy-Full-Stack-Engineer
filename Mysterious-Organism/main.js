/*
Context: You’re part of a research team that has found a new mysterious organism 
at the bottom of the ocean near hydrothermal vents. Your team names the organism, 
Pila aequor (P. aequor), and finds that it is only comprised of 15 DNA bases. 
The small DNA samples and frequency at which it mutates due to the hydrothermal 
vents make P. aequor an interesting specimen to study. However, P. aequor cannot 
survive above sea level and locating P. aequor in the deep sea is difficult and 
expensive. Your job is to create objects that simulate the DNA of P. aequor for
your research team to study.
*/

// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase());
    }
    return newStrand;
};


// Project starts here

// returns an object that contains properties specimenNum and dna which correspond to parameters provided
const pAequorFactory = (number, arrayOfDNA) => {
    return {

        // Task 1
        specimenNum: number,
        dna: arrayOfDNA,

        // Task 2
        mutate () {
            let randBase = returnRandBase();
            let index = Math.floor(Math.random() * 15);
            while (randBase === this.dna[index]) {
                index = Math.floor(Math.random() * 15);
            };
            this.dna[index] = randBase;

            return this.dna;
        },

        // Task 3
        compareDNA (pAequor) {

            let count = 0;

            for (let idx in this.dna) {
                if (pAequor.dna[idx] === this.dna[idx]) {
                    count += 1;
                }
            };

            let percentMatch = (count / pAequor.dna.length) * 100;
            console.log(`specimen #${pAequor.specimenNum} and specimen #${this.specimenNum} have ${percentMatch.toFixed(2)}% DNA in common.`);
        },

        // Task 4
        willLikelySurvive () {

            const cOrG = this.dna.filter(el => el === "C" || el === "G");

            return cOrG.length / this.dna.length >= .6;

        }
    };
};


// Task 5
const pAequorArray = [];

let specimenCount = 1;

while (pAequorArray.length !== 30) {
    
    obj = pAequorFactory(specimenCount, mockUpStrand());

    if (obj.willLikelySurvive()) {
        pAequorArray.push(obj);;
    }
    specimenCount += 1;
    
}

// console.log(pAequorArray.length); // should print 30

// Project Extension

for (let object of pAequorArray) {

    object.complementStrand = function () {

        let complementDNA = [];

        this.dna.forEach(ele => {
            
            switch (ele) {
                case 'A':
                    complementDNA.push('T');
                    break;
                case 'T':
                    complementDNA.push('A');
                    break;
                case 'C':
                    complementDNA.push('G');
                    break;
                case 'G':
                    complementDNA.push('C');
                    break;
                default:
                    complementDNA.push(' ');
                    break;
            };
        });

        console.log('Real DNA: ' + this.dna.join(' '));
        console.log('Complement DNA: ' + complementDNA.join(' '));
    }
};


/* // should print complement DNA's of every object
for (let obj of pAequorArray) {
    obj.complementStrand();
}
*/
