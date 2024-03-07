const width =500;
const height=500;
const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.setAttribute('width', width);
svg.setAttribute('height', height);
document.body.appendChild(svg);


const pattern = document.createElementNS('http://www.w3.org/2000/svg','pattern');
pattern.setAttribute('id','pattern1')
pattern.setAttribute('width','10')
pattern.setAttribute('height','5')
pattern.setAttribute('patternUnits','userSpaceOnUse')
svg.appendChild(pattern)

const pattern2 = document.createElementNS('http://www.w3.org/2000/svg','pattern');
pattern2.setAttribute('id','pattern2')
pattern2.setAttribute('width','10')
pattern2.setAttribute('height','10')
pattern2.setAttribute('patternUnits','userSpaceOnUse')
svg.appendChild(pattern2)


const rectx = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

rectx.setAttribute('width', 5);
rectx.setAttribute('height', 5);
rectx.setAttribute('fill', 'black');
pattern.appendChild(rectx);


const rectxp21 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

rectxp21.setAttribute('width', 8);
rectxp21.setAttribute('height', 8);
rectxp21.setAttribute('fill', 'red');
pattern2.appendChild(rectxp21);


const rectxp22 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

rectxp22.setAttribute('width', 4);
rectxp22.setAttribute('height', 4);
rectxp22.setAttribute('fill', 'blue');
pattern2.appendChild(rectxp22);

const clipPath = document.createElementNS('http://www.w3.org/2000/svg','clipPath')
clipPath.setAttribute('id','clipPath1')
svg.appendChild(clipPath)


const circle_clipPath = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
circle_clipPath.setAttribute('cx', 156);
circle_clipPath.setAttribute('cy', 172);
circle_clipPath.setAttribute('r', 150);
clipPath.appendChild(circle_clipPath)

const circle_y = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
circle_y.setAttribute('cx', 56);
circle_y.setAttribute('cy', 172);
circle_y.setAttribute('r', 150);
circle_y.setAttribute('fill', 'url(#pattern1)');
circle_y.setAttribute('stroke', 'url(#pattern2)');
circle_y.setAttribute('stroke-width', 20);
circle_y.setAttribute('clip-path','url(#clipPath1)')
svg.appendChild(circle_y);

