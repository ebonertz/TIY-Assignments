function pluralize( noun, number) {
    var count= (number + noun);

    if (number === 1) {
    console.log(number+" "+noun);
    }

    else {
    console.log(number+ " " + noun + "s");
}
}
pluralize("cow", 5);
pluralize("dog", 1);
