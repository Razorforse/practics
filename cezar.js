

String.prototype.cezar = function(shift) {

    let result = [];
  
    for(let i = 0;i < this.length;i++) {
        result.push(String.fromCharCode(this.charCodeAt(i) + shift))
    }
  
    return result.join('')
  
  }
  
        
  console.log('абс'.cezar(3))