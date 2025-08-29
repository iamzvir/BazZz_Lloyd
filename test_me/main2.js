function city(misto, town, people) {
  const myCity = `eta ${misto} nahoditsa v ${town} c obschim kolichestvom ludey ${people} chelovek.`;
  return myCity;
}

const message = city('Olexandriya', 'Kirovogradskaya obl.', 80000);
console.log(`Seichas ya vam rasskagu gde ${message}`);
