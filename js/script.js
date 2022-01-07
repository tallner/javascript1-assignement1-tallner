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
const div1Color = ['black','white','black','white',fontcolor,'white','black','white','black','white'];
const div1TextColor = ['white','black','white','black','white','black','white','black','white','black'];

const div2Color = ['white',fontcolor,'white','black','white','black','white','black','white','black'];
const div2TextColor = ['black','white','black','white','black','white','black','white','black','white'];

const div3Color = ['black','white','black','white','black',fontcolor,'black','white','black','white'];
const div3TextColor = ['white','black','white','black','white','black','black','black','white','black'];


//outer div with black border
const outerDiv = document.createElement('div');
outerDiv.style.border = `solid black 1px`;
outerDiv.style.display = 'flex';
outerDiv.style.flexFlow ='row nowrap';
outerDiv.style.justifyContent = 'center';
outerDiv.style.margin = '0px';
outerDiv.style.padding = '0px';
//    align-items: flex-start;

document.body.append(outerDiv);
for(let i=1;i<=outerIteration;i++){

    //common style inner divs
    const innerDiv = document.createElement('div');
    innerDiv.style.border = `solid ${fontcolor} 20px`;
    innerDiv.style.margin = '50px';
    innerDiv.style.width = '50px';
    innerDiv.style.padding = '0px';
    
    outerDiv.append(innerDiv);

    //add numbers to inner divs and adjust text align
    for(let j=0;j<=innerIteration;j++){
        const p = document.createElement('p');
        p.style.margin = '0px';
        p.style.padding = '0px';
        if (i===1) {
            p.innerText = j;
            p.style.backgroundColor = div1Color[j];
            p.style.color = div1TextColor[j];
            innerDiv.style.textAlign = 'left';
        }
        else if (i===2) {
            p.innerText = innerIteration-j;
            p.style.backgroundColor = div2Color[j];
            p.style.color = div2TextColor[j];
            innerDiv.style.textAlign = 'center';
        }
        else if (i===3) {
            p.innerText = numbers[j];
            p.style.backgroundColor = div3Color[j];
            p.style.color = div3TextColor[j];
            innerDiv.style.textAlign = 'right';
        }

        
        innerDiv.appendChild(p);
    }
}