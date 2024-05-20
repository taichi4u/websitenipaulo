const main = document.querySelector('.main');
const cancel = document.querySelector('.cancel');
const msg = document.querySelector('#msg');

while (true) {
    let n = prompt("Enter your name");

    if (n === null || n.length === 0) {
        main.style.display = "none";
        cancel.style.display = "flex";
        msg.innerHTML = "Thank You!!!";
        break; 
    }

    if (n.length > 0) {
        alert("What if gusto kita");
        alert("What if hindi to biro");
        alert(`What if ako nalang kase ${n}`); 
        main.style.display = 'block';
        
        break;
    }
}
