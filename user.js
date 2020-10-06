const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};


export function orderByProps(obj, arr) {
  const arrObj = Object.entries(obj);
  let array = [];

  for (const [key, value] of arrObj) {
    array.push({ key, value });
  }
  
  return array.sort((a, b) => {
    if (arr.includes(a.key) && !arr.includes(b.key)) {
      return -1;
    }
    if (arr.includes(b.key) && !arr.includes(a.key)) {
      return 1;
    }
    if (arr.includes(a.key) && arr.includes(b.key)) {
      return arr.indexOf(a.key) - arr.indexOf(b.key);
    }
    if (a.key < b.key) {
      return -1;
    }
    return 1;
  });
}

orderByProps(obj, ["name", "level"]);