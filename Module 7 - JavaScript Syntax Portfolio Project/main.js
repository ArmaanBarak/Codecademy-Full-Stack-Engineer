// Project begins here:

// Variable storing different propr to print
const fortunes = [
    'A beautiful, smart, and loving person will be coming into your life.',
    'A dubious friend may be an enemy in camouflage.',
    'A fresh start will put you on your way.',
    'All the effort you are making will ultimately pay off.',
    'Be careful or you could fall for some tricks today.',
    'Bide your time, for success is near.',
    'Curiosity kills boredom. Nothing can kill curiosity.',
    'Determination is what you need now.',
    'Don’t let the past and useless detail choke your existence.',
    'Don’t let friends impose on you, work calmly and silently.',
    'Do you know that the busiest person has the largest amount of time?',
    'Fearless courage is the foundation of victory.',
    'Everywhere you choose to go, friendly faces will greet you.',
    'Hard words break no bones, fine words butter no parsnip',
    'Living with a commitment to excellence shall take you far.',
    'Keep your face to the sunshine and you will never see shadows.',
    'Miles are covered one step at a time.',
    'Pick battles big enough to matter, small enough to win.',
    'Others can help you now.',
    'Take the high road.',
    'Staying close to home is going to be best for your morale today',
    'Your work interests can capture the highest status or prestige.',
    'Your life will get more and more exciting.',
    'When more become too much. It’s same as being not enough.'
];

const advices = [
    'go out and play.',
    'stay home.',
    'hit a party tonight.',
    'trust no one.',
    'be antisocial for sometime.',
    'nothing to tell.',
    'start something new.',
    'read a book.',
    'stay out of fights right now.',
    'keep distance.',
    'better hang out with a friend.',
    'complete your work fast.',
    'do what comes in your brain.'
];

const nonsenseJokes = [
    'What do spys eat instead of mcdonalds?\n\nspydonalds',
    'How many ears does Spock have?\n\nThree. The left ear, the right ear, and the final front-ear!',
    'What do you call a can opener that doesn’t work?\n\nA can’t opener!',
    'Want to hear a joke about a piece of paper?\n\nNever mind… it’s tearable.',
    'Why shouldn’t you write with a broken pencil?\n\nBecause it’s pointless!',
    'What did the buffalo say when his son left?\n\nBison!',
    'Did you hear about the two thieves who stole a calendar?\n\nThey each got six months.',
    'What do you call a factory that sells passable products?\n\nA satisfactory!',
    'How do you make a tissue dance?\n\nYou put a little boogie in it.',
    'Why did the coffee file a police report?\n\nIt got mugged.',
    'What did the fried rice say to the shrimp?\n\nDon’t wok away from me!',
    'Why do cow-milking stools only have three legs?\n\n‘Cause the cow’s got the udder!',
    'How do you find Will Smith in the snow?\n\nFollow the fresh prints.'
];

const puns = [
    'If something is unlockable, it cannot be locked.\nAlso, if something is unlockable, it cannot be unlocked.',
    'Therapist: Your wife says you never buy her flowers is that true?\nHim: To be honest, I never knew she sold flowers.',
    'Dad (having a heart attack): Son, call me an ambulance...\nSon *Actually calls ambulance*\nDad *Dies of disappointment*\n',
    'Teacher: use dandelion in a sentence\nJamaican: de cheetah is faster dandelion.',
    'Teacher(with anger): Why do I hear people talking?\nMe: Because you have ears.',
    'If you\'re chased by a serial killer you\'re both running for your life.',
    'Teacher: Can anyone give an example of things that are useless?\nMe *raises hand*\nTeacher: Very good. Any other examples?',
    'Suicide is self defence because you\'re killing the person who is trying to kill you.',
    'The youngest picture of you is the oldest picture of you and the oldest picture of you is the youngest picture of you',
    'To spell panda you just need P and A.',
    'Son: Dad, what does gay mean?\nDad (smiling): It means happy, son.\nSon: Oh, are you gay then?\nDad: No, son. I have a wife.',
    'Her: I bet he\'s thinking about other women.\nHim: If I wait for the waiter, Am I a waiter?',
    'Her: I bet he\'s thinking about other women.\nHim: Most of my presents last year came from amazon. Santa must live in Brazil.',
    'Her: I bet he\'s thinking about other women.\nHim: When I wake up, it\'s gonna be an eye-opening experience.'
];

const dadSaysJokes = [
    'I ate a kids meal at McDonald\'s today. His mom got really angry.',
    'An old lady walked into the bank and asked me if I could help her check her balance.\nI pushed her over.',
    'Don\'t throw sodium chloride at people.\n That\'s a salt.',
    'What do you call a sick eagel? Illegal.',
    'What happens if you don\'t pay your exorcist? You get repossessed.',
    'My massage therapist got fired. I guess she rubbed too many people the wrong way.',
    'What\'s the definition of a will? Come on guys, it\'s a dead giveaway.',
    'Me at an Italian\'s funeral: It\'s such a shame he.... Pasta way.\nPriest: Please leave.',
    'Me: I\'d like to return this vacuum cleaner.\nEmployee: Why?\nMe: It sucks.\nEmployee *nuts*',
    '*Dad with my Comp Sci Professor talking about me*\nDad: I\'m sorry by our dog ate his homework.\nComp Sci Professor: Your dog ate his CODING assignment\nDad: Yeah It took him a couple of bytes.',
    'Killing 31,646 people would save the same amount of oxygen as planting 20 million Trees'
];


// to store all the values to be printed
const displayProp = [];

// function to shuffle arrays
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

// Shuffling all the arrays
shuffleArray(fortunes);
shuffleArray(advices);
shuffleArray(nonsenseJokes);
shuffleArray(puns);
shuffleArray(dadSaysJokes);

// assembling all arrays into one object
obj = {
    fortune: fortunes,
    advice: advices,
    nonsenseJoke: nonsenseJokes,
    pun: puns,
    dadSaysJoke: dadSaysJokes
};

// function to generate random number
function generateRandomNumber (num) {
    return Math.floor(Math.random() * num);
};

// adding prop to displayProp
for (let prop in obj) {

    let randomIdx = generateRandomNumber(obj[prop].length);

    switch (prop) {
        case 'fortune':
            displayProp.push('\nYour fortune cookie says: ' + obj[prop][randomIdx]);
            break;
        case 'advice':
            displayProp.push('\nToday\'s advice for you: ' + obj[prop][randomIdx]);
            break;
        case 'nonsenseJoke':
            displayProp.push('\nToday\'s nonsensical joke: \n' + obj[prop][randomIdx]);
            break;
        case 'pun':
            displayProp.push('\nToday\'s pun: \n' + obj[prop][randomIdx]);
            break;
        case 'dadSaysJoke':
            displayProp.push('\nToday\'s Dad Joke: \n' + obj[prop][randomIdx]);
            break;
        default:
            displayProp.push('Nothing to show today');
            break;
    };
};


displayProp.forEach(ele => {
    console.log(ele);
});