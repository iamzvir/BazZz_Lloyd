function colorizer(item, color, colorCode) {
  const colorizedItem = `The ${item} is ${color}. The code is the color is ${colorCode}.`;
  return colorizedItem;
}

const message = colorizer('desk', 'red', 99);
console.log(`We have the following message: ${message}`);
