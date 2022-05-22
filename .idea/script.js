function hello() {
    console.log("Hello!");
    const tablica = [];
    tablica. push(1);
    console.log(tablica);
}

const dog = {
  name: 'Azor',
  age: 6,
  friends: ['Burek', 'Reksio'],

    bark: function ()   {
      console.log("WOOF!");
      return ':)';
    }
};

function findMin(array)   {
    let tmpMin = array[0];
    for(let i = 1; i < array.length; i++)   {
        if(tmpMin > array[i])   {
            tmpMin = array[i];
        }
    }
    return tmpMin;
}

function findMax(array)   {
    let tmpMax = array[0];
    for(let i = 1; i < array.length; i++)   {
        if(tmpMax < array[i])   {
            tmpMax = array[i];
        }
    }
    return tmpMax;
}