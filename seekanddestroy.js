function destroyer(arr,...args) {

for(let i = 0;i < args.length;i++){
 arr = arr.filter(num => num != args[i]);
}
  return arr;
}

console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));