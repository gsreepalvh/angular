console.log('Hello!');
/*
However, SVG elements cannot be dynamically created using createElement in the same way as HTML elements.

https://webhint.io/docs/user-guide/hints/hint-create-element-svg/#:~:text=However%2C%20SVG%20elements%20cannot%20be,instead%20of%20an%20SVG%20element.
*/

const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
const width = window.innerWidth;
const height = window.innerHeight;
const n = 100;
svg.setAttribute('width', width);
svg.setAttribute('height', height);
document.body.appendChild(svg);

const mask = document.createElementNS('http://www.w3.org/2000/svg', 'mask');
mask.setAttribute('id', 'mask-circle');
svg.appendChild(mask);

const mask2 = document.createElementNS('http://www.w3.org/2000/svg', 'mask');
mask2.setAttribute('id', 'mask-circle-2');
svg.appendChild(mask2);

const maskRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

    maskRect.setAttribute('width', width);
    maskRect.setAttribute('height', height);
    maskRect.setAttribute('fill', 'black');
    mask.appendChild(maskRect);
    
    const maskRect2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    
        maskRect2.setAttribute('width', width);
        maskRect2.setAttribute('height', height);
        maskRect2.setAttribute('fill', 'white');
        mask2.appendChild(maskRect2);

const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
circle.setAttribute('cx', width/2);
circle.setAttribute('cy', height/2);
circle.setAttribute('r', 200);
circle.setAttribute('fill', 'white');
mask.appendChild(circle);

const circle2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
circle2.setAttribute('cx', width/2);
circle2.setAttribute('cy', height/2);
circle2.setAttribute('r', 200);
circle2.setAttribute('fill', 'black');
mask2.appendChild(circle2);

for(let i=0;i<n;i++){

    const recty = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    recty.setAttribute('y', i*20);
    recty.setAttribute('width', width);
    recty.setAttribute('height', '10');
    
    recty.setAttribute('mask','url(#mask-circle)');
    svg.appendChild(recty);
    
}
// rabbit hole
for(let i=0;i<n;i++){

    const rectx = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rectx.setAttribute('x', i*20);
    rectx.setAttribute('width', 10);
    rectx.setAttribute('height', height);
    rectx.setAttribute('mask','url(#mask-circle-2)');
    svg.appendChild(rectx);


    
    
}