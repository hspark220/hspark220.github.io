
const odinRecipe = document.querySelector('.odin-recipe');
const rps = document.querySelector('.rps');
const etchSketch = document.querySelector('.etch-a-sketch');
const calculator = document.querySelector('.calculator');

const textOR = document.createElement('p');
const imageOR = document.createElement('img');

const textRPS = document.createElement('p');
const imageRPS = document.createElement('img');

const textES = document.createElement('p');
const imageES = document.createElement('img');

const textC = document.createElement('p');
const imageC = document.createElement('img');

odinRecipe.appendChild(imageOR);
rps.appendChild(imageRPS);
etchSketch.appendChild(imageES);
calculator.appendChild(imageC);

imageOR.src = './resources/images/odin-recipe.png';
imageRPS.src = './resources/images/rps.png';
imageES.src = './resources/images/etchsketch.png';
imageC.src = './resources/images/calculator.png';

odinRecipe.addEventListener('mouseover', () => {
    imageOR.remove();
    textOR.textContent = 'odin recipe';
    odinRecipe.appendChild(textOR);
});
odinRecipe.addEventListener('mouseleave', () => {
    textOR.remove();
    imageOR.src = "./resources/images/odin-recipe.png";
    odinRecipe.appendChild(imageOR);
});

rps.addEventListener('mouseover', () => {
    imageRPS.remove();
    textRPS.textContent = 'rock paper scissor';
    rps.appendChild(textRPS);
});
rps.addEventListener('mouseleave', () => {
    textRPS.remove();
    imageRPS.src = './resources/images/rps.png';
    rps.appendChild(imageRPS);
});

etchSketch.addEventListener('mouseover', () => {
    imageES.remove();
    textES.textContent = 'Etch-a-Sketch';
    etchSketch.appendChild(textES);
});
etchSketch.addEventListener('mouseleave', () => {
    textES.remove();
    imageES.src = './resources/images/etchsketch.png';
    etchSketch.appendChild(imageES);
});

calculator.addEventListener('mouseover', () => {
    imageC.remove();
    textC.textContent = 'calculator';
    calculator.appendChild(textC);
});
calculator.addEventListener('mouseleave', () => {
    textC.remove();
    imageC.src = './resources/images/calculator.png';
    calculator.appendChild(imageC);
});