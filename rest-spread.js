const numbers = [4, 8, 9, 2, 5];

const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);

const findMin = (...nums) => Math.min(...nums);

const objA = {
    name: 'circle',
    diameter: 3
}

const objB = {
    color: 'blue'
}

const mergeObjects = ({...obj1}, {...obj2}) => ({...obj1, ...obj2});

const doubleAndReturnArgs = (arr, ...nums) => [...arr, ...nums.map(num => num * 2)];

// Slice and Dice

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
}

const extend = (array1, array2) => [...array1, ...array2];

const addKeyVal = (obj, key, val) => ({...obj, [key]: val});

const removeKey = (obj, key) => {
    ({[key]: undefined, ...obj} = obj);
    return obj;
}

const combine = (obj1, obj2) => ({...obj1, ...obj2});

const update = (obj, key, val) => ({...obj, [key]: val});