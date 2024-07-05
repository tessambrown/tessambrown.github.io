document.addEventListener('DOMContentLoaded', () => {
    // display random letters on each button
    // button 2 -> A, B, C
    const button2 = document.getElementById("2");

    function getRandomLetter2() {
        const letters = ['A', 'B', 'C'];
        const randomIndex = Math.floor(Math.random() * letters.length);
        return letters[randomIndex];
    }

    button2.textContent = getRandomLetter2();

    
    // button 3 -> D, E, F
    const button3 = document.getElementById("3");

    function getRandomLetter3() {
        const letters = ['D', 'E', 'F'];
        const randomIndex = Math.floor(Math.random() * letters.length);
        return letters[randomIndex];
    }

    button3.textContent = getRandomLetter3();

    // button 4 -> G, H, I
    const button4 = document.getElementById("4");

    function getRandomLetter4() {
        const letters = ['G', 'H', 'I'];
        const randomIndex = Math.floor(Math.random() * letters.length);
        return letters[randomIndex];
    }

    button4.textContent = getRandomLetter4();

    // button 5 -> J, K, L
    const button5 = document.getElementById("5");

    function getRandomLetter5() {
        const letters = ['J', 'K', 'L'];
        const randomIndex = Math.floor(Math.random() * letters.length);
        return letters[randomIndex];
    }

    button5.textContent = getRandomLetter5();

    // button 6 -> M, N, O
    const button6 = document.getElementById("6");

    function getRandomLetter6() {
        const letters = ['M', 'N', 'O'];
        const randomIndex = Math.floor(Math.random() * letters.length);
        return letters[randomIndex];
    }

    button6.textContent = getRandomLetter6();

    // button 7 -> P, Q, R, S
    const button7 = document.getElementById("7");

    function getRandomLetter7() {
        const letters = ['P', 'Q', 'R', 'S'];
        const randomIndex = Math.floor(Math.random() * letters.length);
        return letters[randomIndex];
    }

    button7.textContent = getRandomLetter7();

    // button 8 -> T, U, V
    const button8 = document.getElementById("8");

    function getRandomLetter8() {
        const letters = ['T', 'U', 'V'];
        const randomIndex = Math.floor(Math.random() * letters.length);
        return letters[randomIndex];
    }

    button8.textContent = getRandomLetter8();

    // button 9 -> W, X, Y, Z
    const button9 = document.getElementById("9");

    function getRandomLetter9() {
        const letters = ['W', 'X', 'Y', 'Z'];
        const randomIndex = Math.floor(Math.random() * letters.length);
        return letters[randomIndex];
    }

    button9.textContent = getRandomLetter9();
},
// function to add clicked button's value to the input text


function addToInput(value) {
    const numberTextDiv = document.getElementById('number-text');
    let currentText = numberTextDiv.textContent;

    if (currentText.length < 10) {
        numberTextDiv.textContent = currentText + value;
    }
}
)