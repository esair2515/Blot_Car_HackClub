/*
@title: My Car
*/

// Dimensions of Frame
const width = 200;
const height = 100;
setDocDimensions(width, height);

// Cirlce
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

// The Polygon
function fillPolygon(points, color) {
  const shape = [points];
  drawLines(shape, { fill: color });
}

// Circle
function fillCircle(centerX, centerY, radius, color) {
  const circlePoints = createCircle(centerX, centerY, radius);
  fillPolygon(circlePoints, color);
}

// Window "Stretching it :)"
function createStretchedWindow() {
  return [
    [30, 38], [70, 38], [60, 31], [40, 31] // Stretched window
  ].map(([x, y]) => [x, height - y]);
}

// Body
const carBody = [
  [20, 40], [30, 30], [70, 30], [80, 40], // top
  [120, 40], [130, 50], [20, 50], // bottom
  [20, 40]
].map(([x, y]) => [x, height - y]);

// Window again
const frontWindow = createStretchedWindow();

// Draw the car!
function drawCar() {
  // Draw car body
  fillPolygon(carBody, 'brown');
  
  // Draw front window
  fillPolygon(frontWindow, 'lightblue');
  
  // Draw wheels
  fillCircle(40, 50, 12, 'black'); // Front wheel
  fillCircle(108, 50, 12, 'black'); // Rear wheel
  
  // Draw yellow lights
  fillCircle(122, 45, 1.5, 'yellow'); // Moved back top light
  fillCircle(124, 48, 1.5, 'yellow'); // Bottom light
}

// Run the drawing function
drawCar();
