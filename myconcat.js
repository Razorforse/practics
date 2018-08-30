Array.prototype.myconcat = function(...args) {
    // Add your code below this line
    let newarr = this.slice();
  
    for(let i = 0;i < args.length;i++) {
      if(args[i].length > 1) {
        
        let obj = args[i];
        for(let i = 0;i < obj.length;i++) {
          console.log(obj);
          newarr.push(obj[i]);
  
        }
     continue 
      }
      newarr.push(args[i])
    }
    
    return newarr
    // Add your code above this line
  }
  var first = [1, 2, 3];
  var second = [4, 5];
  console.log(first.myconcat(second,1,2,3,4,5,6));