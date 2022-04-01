var characters = [
    { 'name': 'barney', 'age': 36 },
    { 'name': 'fred', 'age': 40 }
  ];
  
  const pluck = (objects, fieldName) => objects.map((obj) => obj[fieldName]) 
   
  console.log(pluck(characters, 'name')); // ['barney', 'fred']
