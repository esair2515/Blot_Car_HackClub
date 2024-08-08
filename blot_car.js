/*
@title: My Car on a Road with the Sun
*/

// Dimensions
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

// the circle
function fillCircle(centerX, centerY, radius, color) {
  const circlePoints = createCircle(centerX, centerY, radius);
  fillPolygon(circlePoints, color);
}

// the sun
function drawSun(centerX, centerY, radius) {
  // Draw the sun body
  fillCircle(centerX, centerY, radius, 'yellow');
  
  // rays but it doest work much
  const numRays = 12;
  const rayLength = radius * 1.5;
  const angleStep = (2 * Math.PI) / numRays;
  
  for (let i = 0; i < numRays; i++) {
    const angle = i * angleStep;
    const rayX = centerX + (radius + rayLength) * Math.cos(angle);
    const rayY = centerY - (radius + rayLength) * Math.sin(angle);
    drawLines([
      [centerX, centerY], [rayX, rayY]
    ], { fill: 'yellow' });
  }
}

// the window :) very stretched
function createStretchedWindow() {
  return [
    [30, 38], [70, 38], [60, 31], [40, 31] // Stretched window
  ].map(([x, y]) => [x, height - y]);
}

// body of the car
const carBody = [
  [20, 40], [30, 30], [70, 30], [80, 40], // top
  [120, 40], [130, 50], [20, 50], // bottom
  [20, 40]
].map(([x, y]) => [x, height - y]);

// window stuff
const frontWindow = createStretchedWindow();

// Draw the car
function drawCar() {
  // Draw the background
  drawLines([
    [[0, 0], [width, 0], [width, height / 2], [0, height / 2]]
  ], { fill: 'grey' }); // Top half

  drawLines([
    [[0, height / 2], [width, height / 2], [width, height], [0, height]]
  ], { fill: 'skyblue' }); // Bottom half

  // the road dashes
  for (let i = 10; i < width; i += 20) {
    drawLines([
      [[i, height / 2 - 10], [i + 10, height / 2 - 10]]
    ], { fill: 'yellow' });
  }

  // Draws the car body
  fillPolygon(carBody, 'brown');
  
  // Draws the front window
  fillPolygon(frontWindow, 'lightblue');
  
  // Draws the wheels
  fillCircle(40, 50, 12, 'black'); // Front wheel
  fillCircle(108, 50, 12, 'black'); // Rear wheel
  
  // Draws the white dots
  fillCircle(40, 50, 5, 'white'); // Front wheel dot
  fillCircle(108, 50, 5, 'white'); // Rear wheel dot
  
  // Draws the yellow lights
  fillCircle(122, 45, 1.5, 'yellow'); // Moved back top light
  fillCircle(124, 48, 1.5, 'yellow'); // Bottom light

  // Draws the sun
  drawSun(20, 20, 10);
}

// Run it!
drawCar();
