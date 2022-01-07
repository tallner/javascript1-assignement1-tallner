//Flexbox


//dagens tester
/** * /
for (let index = 0; index <= 10; index++) {
    const h1 = document.createElement('h3');

    h1.innerText = index;

    h1.append;

    document.body.append(h1);

    if (index < 6){
        h1.style.backgroundColor='blue';
    } else if (index===7){
        h1.style.backgroundColor='red';
    } else {
        h1.style.backgroundColor='grey';
    }

    if (index%2) {
        h1.style.backgroundColor='pink';
    }
}

/** /
const maxIteration = 50;
const minHue = 180;
const maxHue = 300;
for(let i=0;i<=maxIteration;i++){
    const h3 = document.createElement('h3');
    const hue = minHue + (i*((maxHue-minHue)/maxIteration));
    const texten = hue;

    h3.innerText = `Hue: ${texten}`;
    h3.style.backgroundColor = `hsl(${hue}, 75%, 75%)`;
    
    document.body.append(h3);
}
/** */
const maxIteration = 5;
const minHue = 150;
const maxHue = 200;
for(let i=1;i<=maxIteration;i++){
    const h3 = document.createElement('h3');
    const hue = minHue + (i*((maxHue-minHue)/maxIteration));
    
    h3.innerText = `Rad ${i}`;
    h3.style.fontSize = `${i*10}px`;
    h3.style.textAlign = 'center';

    h3.style.backgroundColor = `hsl(${hue}, 75%, 75%)`;
    
    document.body.append(h3);
}


