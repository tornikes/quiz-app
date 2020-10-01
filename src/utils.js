export function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

export function computeCorrects(answers) {
    return answers.reduce((total, [correct, ans]) => correct === ans ? total + 1 : total, 0);
}

export function shuffle(array) {
    var m = array.length, t, i;
    // While there remain elements to shuffle…
    while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}
