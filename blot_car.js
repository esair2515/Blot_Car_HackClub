/*
@title: My Car
*/

// Document dimensions
const width = 200;
const height = 100;
setDocDimensions(width, height);

// Circle
function createCircle(centerX, centerY, radius, numSegments = 20) {
  const circle = [];
  const angleStep = (2 * Math.PI) / numSegments;
  for (let i = 0; i < numSegments; i++) {
    const angle = i * angleStep;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    circle.push([x, height - y]);
  }
  circle.push(circle[0]);
  return circle;
}

// Polygon
function fillPolygon(points, color) {
  const shape = [points];
  drawLines(shape, { fill: color });
}

// Circle
function fillCircle(centerX, centerY, radius, color) {
  const circlePoints = createCircle(centerX, centerY, radius);
  fillPolygon(circlePoints, color);
}

// window lol funny name:)
function createStretchedWindow() {
  return [
    [30, 38], [70, 38], [60, 31], [40, 31] // Stretched window
  ].map(([x, y]) => [x, height - y]);
}

// body
const carBody = [
  [20, 40], [30, 30], [70, 30], [80, 40], // top
  [120, 40], [130, 50], [20, 50], // bottom
  [20, 40]
].map(([x, y]) => [x, height - y]);

// frontwindow
const frontWindow = createStretchedWindow();

// draw car
function drawCar() {
  // draw background
  drawLines([
    [[0, 0], [width, 0], [width, height / 2], [0, height / 2]]
  ], { fill: 'grey' }); // Top half
  
  drawLines([
    [[0, height / 2], [width, height / 2], [width, height], [0, height]]
  ], { fill: 'skyblue' }); // Bottom half

  // draw the car body
  fillPolygon(carBody, 'brown');
  
  // draw the front window
  fillPolygon(frontWindow, 'lightblue');
  
  // draw the wheels
  fillCircle(40, 50, 12, 'black'); // Front wheel
  fillCircle(108, 50, 12, 'black'); // Rear wheel
  
  // draw white dots
  fillCircle(40, 50, 5, 'white'); // Front wheel dot
  fillCircle(108, 50, 5, 'white'); // Rear wheel dot
  
  // draw the yellow lights
  fillCircle(122, 45, 1.5, 'yellow'); // Moved back top light
  fillCircle(124, 48, 1.5, 'yellow'); // Bottom light
}

// Run
drawCar();
