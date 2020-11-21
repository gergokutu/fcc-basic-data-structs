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

// Check if an Object has a Property
// 1. Obj.hasOwnProperty('propName') > boolean
// 2. 'propName' in Obj > boolean
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  const keysToCheck = ['Alan', 'Jeff', 'Sarah', 'Ryan'];
  for (let i = 0; i < keysToCheck.length; i++) {
    // if (!users.hasOwnProperty(keysToCheck[i])) return false;
    if (keysToCheck[i] in users === false) return false;
  }
  return true;
};
console.log('Should be true >', isEveryoneHere(users));

// Iterate over object properties > for...in
{
  const countOnline = usersObj => {
    console.log(usersObj)
    let numOfOnlineUsers = 0;
    for (let user in usersObj) {
      // Use bracket notation > dynamic prop names!!!
      if (usersObj[user].online) numOfOnlineUsers++;
    }
    return numOfOnlineUsers;
  };

  const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  };

  console.log('Should be 1 >', countOnline(users));
}

// Generate an array of all object keys
{
  let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };

  function getArrayOfUsers(obj) {
    return Object.keys(obj);
  };

  console.log('Should be [ "Alan", "Jeff", "Sarah", "Ryan" ] >',
    getArrayOfUsers(users)
  );
}