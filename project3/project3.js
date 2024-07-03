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

    // if the buttons get pushed fill in the phone number

    // const selectedButton1 = document.querySelector('#1');
    // selectedButton1.addEventListener('click', selected1);

    // const selectedButton2 = document.querySelector('#2');
    // selectedButton2.addEventListener('click', selected2);

    // const selectedButton3 = document.querySelector('#3');
    // selectedButton3.addEventListener('click', selected3);

    // const selectedButton4 = document.querySelector('#4');
    // selectedButton4.addEventListener('click', selected4);

    // const selectedButton5 = document.querySelector('#5');
    // selectedButton5.addEventListener('click', selected5);

    // const selectedButton6 = document.querySelector('#6');
    // selectedButton6.addEventListener('click', selected6);

    // const selectedButton7 = document.querySelector('#7');
    // selectedButton7.addEventListener('click', selected7);

    // const selectedButton8 = document.querySelector('#8');
    // selectedButton8.addEventListener('click', selected8);

    // const selectedButton9 = document.querySelector('#9');
    // selectedButton9.addEventListener('click', selected9);

    // const selectedButton0 = document.querySelector('#0');
    // selectedButton0.addEventListener('click', selected0);

});