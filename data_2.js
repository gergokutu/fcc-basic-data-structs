let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

foods['bananas'] = 13;
foods['grapes'] = 35;
foods.strawberries = 27;
console.log('foods object:', foods);

// Nested object
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

userActivity.data.online = 45;
console.log('userActivity object:', userActivity);

// Access properties with bracket notation
{
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };

  function checkInventory(scannedItem) {
    return foods[scannedItem];
  };
  console.log('Apples should be 25 >', checkInventory("apples"));
}

// Remove object props > delete keyword
{
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };

  const foodsToRemove = ['oranges', 'plums', 'strawberries'];
  foodsToRemove.map(item => delete foods[item]);
  console.log('Just apples, bananas and grapes >', foods);
}