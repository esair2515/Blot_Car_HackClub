// My Car Code

const width = 200;
const height = 100;

setDocDimensions(width, height);

// store final lines here
const finalLines = [];

// the circles
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

// the body of the car
const carBody = [
  [10, 40], [30, 20], [70, 20], [90, 40], // top
  [150, 40], [160, 50], [10, 50], // bottom
  [10, 40]
].map(([x, y]) => [x, height - y]); 

// front window
const frontWindow = [
  [30, 20], [40, 30], [50, 30], [60, 20]
].map(([x, y]) => [x, height - y]);  

// back window
const backWindow = [
  [70, 20], [80, 30], [90, 30], [90, 40]
].map(([x, y]) => [x, height - y]); 

// wheels
const frontWheel = createCircle(40, 50, 10);
const backWheel = createCircle(120, 50, 10); 

// put together
finalLines.push(carBody, frontWindow, backWindow, frontWheel, backWheel);

// run
drawLines(finalLines);
