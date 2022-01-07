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
const fontcolor = 'hsl(230, 75%, 75%)';
for(let i=1;i<=maxIteration;i++){
    const h3 = document.createElement('h3');
    const hue = minHue + (i*((maxHue-minHue)/maxIteration));
    
    h3.innerText = `Rad ${i}`;

    h3.style.fontSize = `${i*10}px`;
    h3.style.textAlign = 'center';
    h3.style.backgroundColor = `hsl(${hue}, 75%, 75%)`;
    h3.style.color = fontcolor;
    
    document.body.append(h3);
}



//create the number divs
const outerIteration = 3;
const innerIteration = 9;
const numbers = ['ett','två','tre','fyra','fem','sex','sju','åtta','nio','tio'];

//outer div with black border
const outerDiv = document.createElement('div');
outerDiv.style.border = `solid black 1px`;
outerDiv.style.display = 'flex';
outerDiv.style.flexFlow ='row nowrap';
outerDiv.style.justifyContent = 'center';
//    align-items: flex-start;

document.body.append(outerDiv);
for(let i=1;i<=outerIteration;i++){

    //common style inner divs
    const innerDiv = document.createElement('div');
    innerDiv.style.border = `solid ${fontcolor} 20px`;
    innerDiv.style.margin = '50px';
    innerDiv.style.width = '50px';
    innerDiv.style.padding = '20px';
    
    outerDiv.append(innerDiv);

    //add numbers to inner divs and adjust text align
    for(let j=0;j<=innerIteration;j++){
        const p = document.createElement('p');
        if (i===1) {
            p.innerText = j;
            innerDiv.style.textAlign = 'left';
        }
        else if (i===2) {
            p.innerText = innerIteration-j;
            innerDiv.style.textAlign = 'center';
        }
        else if (i===3) {
            p.innerText = numbers[j];
            innerDiv.style.textAlign = 'right';
        }
        
        innerDiv.appendChild(p);
    }
}