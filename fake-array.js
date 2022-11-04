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
    
    this.pop = function () {
        let deletedElement = this[this.length-1];
        delete this[this.length-1];
        this.length--;
        return deletedElement;
      };
    
    this.concat = function (otherArray) {
        const concattedArray = new FakeArray()
        for (let index = 0; index < this.length; index++) {
            concattedArray.push(this[index]);
        }
        for (let index = 0; index < this.length; index++) {
            concattedArray.push(otherArray[index]);
        }
        return concattedArray;
      };

    this.some = function (callback) {
        let count = 0
        for (let index = 0; index < this.length; index++) {
            if (callback(this[index])) {
                count++;
            }   
        } 
        if (count > 0) {
            return true
        } else {
            return false
        }
      };
    
    this.every = function (callback) {
        let count = 0
        for (let index = 0; index < this.length; index++) {
            if (callback(this[index])) {
                count++;
            }   
        } 
        if (count === this.length) {
            return true
        } else {
            return false
        }
      };
   
  }
  
  const isBelowThreshold = (currentValue) => typeof currentValue === "string";
  instructors = new FakeArray("Diego", "Andre", "Paulo")
  instructors2 = new FakeArray("Peter", "SebasTerle", "Catodiux")
  
 

//   word += this[index]
//   word += separate + this[index]
//   if (word === "") {
//           word += this[index]
//           } else {
//           word += separate + this[index] 
//           }




//   this = {
//     0: "Diego",
//     1: "Andre",
//     2: "Paulo",
//     length: 3
//   }
 

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


    // this.includes = function(param){
    //   this.forEach(function(element)  {
    //     if (element === param ){

    //       return true
    //      } else {
    //       return false
    //      }
    //   });
       

    
    // }

    this.includes = function(param){
      let count = 0 
      this.forEach(function(element) {
        if (element === param ){

           count ++
         }
        
      });
       
      if (count > 0){
        return true
      } else{
        return false
      }
    
    }
    
  }
  
   let instructors = new FakeArray("Diego", "Andre", "Paulo", "Martha", "Arnold", "Wences","Catode","Juan","Pepe" )
  //this = {
  //   0: "Diego",
  //   1: "Andre",
  //   2: "Paulo"
  //   length: 3  <-- this.length
  // }
  
   let arr1 = ["Diego", "Andre", "Paulo","Juan","Miguel","Pepe"]
 
  /* Voy a ir mandando cada elemento al final hasta que el ultimo elemento sea el primero
  */
 
