const data = [[ { name: 'John1' },{ name: 'Jane2' } ],
    [      { name: 'BobMelenedes' }    ] ];


  const names = data.flatMap(arr => arr.map(obj => obj.name));
  console.log(names); 
  // Output: ['John', 'Jane', 'Bob']