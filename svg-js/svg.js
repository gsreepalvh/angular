console.log('Hello!');
/*
However, SVG elements cannot be dynamically created using createElement in the same way as HTML elements.

https://webhint.io/docs/user-guide/hints/hint-create-element-svg/#:~:text=However%2C%20SVG%20elements%20cannot%20be,instead%20of%20an%20SVG%20element.
*/

const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.setAttribute('width', '960');
svg.setAttribute('height', '500');
document.body.appendChild(svg);
const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
rect.setAttribute('width', '100');
rect.setAttribute('height', '100');
svg.appendChild(rect);
