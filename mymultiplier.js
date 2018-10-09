function sumAll(arr) {
    let newarr = [];
    let low
    let hie
      if(arr[0] < arr[1]) {
        low = arr[0];
        hie = arr[1];
      } else {low = arr[1];hie = arr[0]};
    let count  = hie - low;      
    for(let i = 0;i < count;i++){
        if(low < hie) {
            newarr.push([low++,hie--])
        }
      
      }
      newarr = newarr.map(elem => elem.reduce((sum,num) => sum + num));
      return newarr.reduce((sum,num) => sum + num);
  }
  
  console.log(sumAll([10, 5]))