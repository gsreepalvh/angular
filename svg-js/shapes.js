const width =500;
const height=500;
const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.setAttribute('width', width);
svg.setAttribute('height', height);
document.body.appendChild(svg);


const line = document.createElementNS('http://www.w3.org/2000/svg','line')
line.setAttribute('x1',100)
line.setAttribute('y1',100)
line.setAttribute('x2',490)
line.setAttribute('y2',200)
line.setAttribute('stroke','blue')
line.setAttribute('stroke-width',3)
line.setAttribute('fill',1)
svg.appendChild(line)



const ellipse = document.createElementNS('http://www.w3.org/2000/svg','ellipse')
ellipse.setAttribute('cx',100)
ellipse.setAttribute('cy',100)
ellipse.setAttribute('rx',20)
ellipse.setAttribute('ry',40)
ellipse.setAttribute('stroke','blue')
ellipse.setAttribute('stroke-width',3)
ellipse.setAttribute('fill','green')
svg.appendChild(ellipse)



const text = document.createElementNS('http://www.w3.org/2000/svg','text')
text.setAttribute('x',100)
text.setAttribute('y',100)
text.innerHTML ="Welcom to SVG"
svg.appendChild(text)

const polyline = document.createElementNS('http://www.w3.org/2000/svg','polyline')
polyline.setAttribute('points','20,20 40,40 120,400 300,600')
polyline.setAttribute('fill','none')
polyline.setAttribute('stroke','brown')
svg.appendChild(polyline)

const polygon = document.createElementNS('http://www.w3.org/2000/svg','polygon')
polygon.setAttribute('points','200,200 200,400 240,400 300,400')
polygon.setAttribute('fill','none')
polygon.setAttribute('stroke','brown')
svg.appendChild(polygon)

/*
M - Move to x,y(absolute)
m - Move to x,y =>last x + x, last y +y (relative)
L - Line to x,y (absolute)
l - Line to x,y => last x + x, last y +y (relative)
V - vertical line x,y
v -
H - Horizontal line x,y
C - Curve cx1,cy1 cx2,cy2 ex,ey
S
Q
T
Z
*/

const path = document.createElementNS('http://www.w3.org/2000/svg','path')
//path.setAttribute('d','M400,400 L10,40 L90,40 M100,120 L39,299')
path.setAttribute('d','M400,400 L10,40 C90,40 100,120 39,299')
path.setAttribute('fill','none')
path.setAttribute('stroke','black')
svg.appendChild(path)

