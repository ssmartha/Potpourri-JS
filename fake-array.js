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


    this.reverse = function (){
      let arr = []
      // console.log(`Array(${this.length})`)
      // console.log(this)
      for (let index = (this.length -1) ; index >= 0 ; index --){
        
       arr.push(this[index])
      }
      
      
      
      for (let index = 0 ; index < this.length ; index ++){
        this[index] = arr[index]
      }
      return this
    }
    
  }
  
   let instructors = new FakeArray("Diego", "Andre", "Paulo", "Martha", "Arnold", "Wences","Catode" )
  //this = {
  //   0: "Diego",
  //   1: "Andre",
  //   2: "Paulo"
  //   length: 3  <-- this.length
  // }
  
  // let arr = ["Diego", "Andre", "Paulo","Juan","Miguel","Pepe"]
 
  /* Voy a ir mandando cada elemento al final hasta que el ultimo elemento sea el primero
  */
