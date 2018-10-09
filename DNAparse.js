
let dnk = "ATTGC";


    function DNKparse(str) {
      let result = str.split("").map(item => {
        if(item === 'A') return "T";
        else if(item === "C") return "G";
        else if(item === "T") return 'A';
        else if(item === "G") return 'C';
        return item;
    })
    
      return  result.join("")
}

console.log(typeof DNKparse("GTAT"));