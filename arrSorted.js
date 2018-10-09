
function compare(field, order) {
  var len = arguments.length;
  if(len === 0) {
      return (a, b) => (a < b && -1) || (a > b && 1) || 0;
  }
  if(len === 1) {
      switch(typeof field) {
          case 'number':
              return field < 0 ?
                  ((a, b) => (a < b && 1) || (a > b && -1) || 0) :
                  ((a, b) => (a < b && -1) || (a > b && 1) || 0);
          case 'string':
              return (a, b) => (a[field] < b[field] && -1) || (a[field] > b[field] && 1) || 0;
      }
  }
  if(len === 2 && typeof order === 'number') {
      return order < 0 ?
          ((a, b) => (a[field] < b[field] && 1) || (a[field] > b[field] && -1) || 0) :
          ((a, b) => (a[field] < b[field] && -1) || (a[field] > b[field] && 1) || 0);
  }
  var fields, orders;
  if(typeof field === 'object') {
      fields = Object.getOwnPropertyNames(field);
      orders = fields.map(key => field[key]);
      len = fields.length;
  } else {
      fields = new Array(len);
      orders = new Array(len);
      for(let i = len; i--;) {
          fields[i] = arguments[i];
          orders[i] = 1;
      }
  }
  return (a, b) => {
      for(let i = 0; i < len; i++) {
          if(a[fields[i]] < b[fields[i]]) return orders[i];
          if(a[fields[i]] > b[fields[i]]) return -orders[i];
      }
      return 0;
  };
}





let products = [
  [11, 2, 8, 2],
  [8, 4, 2, 0],
  [9, 4, 1, 1],
  [3, 2, 8, 1],
  [15, 4, 0, 1],
  [15, 8, 0, 1],
  [15, 2, 5, 1],
  [15, 4, 0, 2],
  [15, 4, 0, 3],
  [15, 2, 6, 1],
  [15, 2, 6, 3],
  [15, 2, 6, 7],
  [15, 4, 0, 3],
  [15, 10, 6, 1],
  [15, 10, 6, 7],
  [15, 10, 6, 2]
];



console.log(products.sort(compare(1,2,3)))







