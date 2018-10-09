


let res = 'пример НОВОГО хэштега';




  String.prototype.getHashTag = function() {

    if(this.length >= 100 ||this.length <= 0 ) {
      return false
    }

    let arr = this.toLocaleLowerCase().split(""),
        reg = /[\s\@\!\"\:\;\'\`\~\$\#\%\^\&\*\(\)\-\_\=\+\\\.\,\>\<]/;

    arr[0] = arr[0].toUpperCase();
      for(let i = 0;i < arr.length;i++) {
        if(reg.test(arr[i])) {
          arr[i+1] = arr[i+1].toUpperCase();
        }

    }
    arr = arr.join('').split(reg);
    arr.unshift("#")
    return arr.join('');

  }



console.log(res.getHashTag());