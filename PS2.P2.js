// Write a generator that is initialized with a sentence and that emits each word of the sentence in
// turn.
//     Use the generator to print the words, one per line, of the string “All I know is something like a
// bird within her sang”.

const one_word = words => words.replace(/ /g, "\n");
console.log(`One word at a time:\n${one_word("All I know is something like a bird within her sang")}`);