function FakeArray(...elements) {
    this.length = 0;
  
    for (const pos in elements) {
      this[pos] = elements[pos];
      this.length++;
    }
  
    this.push = function (newElement) {
      this[this.length] = newElement;
      this.length++;
      return newElement;
    };
    
    this.reduce = function (callback) {
      let sum = 0;
      for (let index = 0; index < this.length; index++){
        sum += callback(0,this[index])
      }
      return sum
    }
  
    this.forEach = function (callback) {
      for (let index = 0; index < this.length; index++) {
        callback(this[index], index);
      }
    };
  
    this.map = function (callback) {
      const mapped = new FakeArray();
  
      for (let index = 0; index < this.length; index++) {
        mapped.push(callback(this[index], index));
      }
  
      return mapped;
    };

   this.join = function (param){
    if(param === undefined){
      param = ","
    } 
    let word = "";
    for (let index = 0; index < this.length; index++) {
      if (word === "") {
        word += this[index]
        } else {
        word += param + this[index] 
        }
      
    }
    return word
    }

  }
  
   let instructors = new FakeArray("Diego", "Andre", "Paulo")
  //this = {
  //   0: "Diego",
  //   1: "Andre",
  //   2: "Paulo"
  //   length: 3  <-- this.length
  // }
  
  let arr = ["Diego", "Andre", "Paulo"]
