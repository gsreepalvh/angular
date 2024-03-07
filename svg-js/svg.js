console.log('Hello!');
/*
However, SVG elements cannot be dynamically created using createElement in the same way as HTML elements.

https://webhint.io/docs/user-guide/hints/hint-create-element-svg/#:~:text=However%2C%20SVG%20elements%20cannot%20be,instead%20of%20an%20SVG%20element.
*/


const width = window.innerWidth;
const height = window.innerHeight;

const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.setAttribute('width', width);
svg.setAttribute('height', height);
document.body.appendChild(svg);

const defs = document.createElementNS('http://www.w3.org/2000/svg','defs')
svg.appendChild(defs)

const group1=document.createElementNS('http://www.w3.org/2000/svg','g')
group1.setAttribute('id','design1')
defs.appendChild(group1)

const mask_circle_y = document.createElementNS('http://www.w3.org/2000/svg', 'mask');
mask_circle_y.setAttribute('id', 'mask-circle-y');
group1.appendChild(mask_circle_y);

const mask_circle_x = document.createElementNS('http://www.w3.org/2000/svg', 'mask');
mask_circle_x.setAttribute('id', 'mask-circle-x');
group1.appendChild(mask_circle_x);

const mask_rect_y = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

mask_rect_y.setAttribute('width', width);
mask_rect_y.setAttribute('height', height);
mask_rect_y.setAttribute('fill', 'black');
    mask_circle_y.appendChild(mask_rect_y);
    
    const mask_rect_x = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    
    mask_rect_x.setAttribute('width', width);
    mask_rect_x.setAttribute('height', height);
    mask_rect_x.setAttribute('fill', 'white');
    mask_circle_x.appendChild(mask_rect_x);

const circle_y = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
circle_y.setAttribute('cx', width/2);
circle_y.setAttribute('cy', height/2);
circle_y.setAttribute('r', 200);
circle_y.setAttribute('fill', 'white');
mask_circle_y.appendChild(circle_y);

const circle_x = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
circle_x.setAttribute('cx', width/2);
circle_x.setAttribute('cy', height/2);
circle_x.setAttribute('r', 200);
circle_x.setAttribute('fill', 'black');
mask_circle_x.appendChild(circle_x);

const n = 100;
for(let i=0;i<n;i++){

    const recty = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    recty.setAttribute('y', i*20);
    recty.setAttribute('width', width);
    recty.setAttribute('height', '10');
    
    recty.setAttribute('mask','url(#mask-circle-y)');
    group1.appendChild(recty);
    
}
// rabbit hole
for(let i=0;i<n;i++){

    const rectx = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rectx.setAttribute('x', i*20);
    rectx.setAttribute('width', 10);
    rectx.setAttribute('height', height);
    rectx.setAttribute('mask','url(#mask-circle-x)');
    group1.appendChild(rectx);


    
    
}

const use1=document.createElementNS('http://www.w3.org/2000/svg','use')
use1.setAttribute('href','#design1')
use1.setAttribute('x',10)
use1.setAttribute('y',10)
svg.appendChild(use1)

const symbol = document.createElementNS('http://www.w3.org/2000/svg','symbol') // same like defs but not contain multiple group, symbol has own ref id

