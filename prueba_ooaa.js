function reverseSentence(sentence) {
    // Reverse the sentence
    let reversedSentence = sentence.split('').reverse().join('');

    // Capitalize the first letter
    reversedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);

    return reversedSentence;
}

// Example usage
const inputSentence = "hello world";
const reversedSentence = reverseSentence(inputSentence);
console.log(reversedSentence); // Output: Dlrow Olleh