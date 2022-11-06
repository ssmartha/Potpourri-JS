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

  this.pop = function () {
        let deletedElement = this[this.length-1];
        delete this[this.length-1];
        this.length--;
        return deletedElement;
  };

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

  this.reduce = function (callback) {
    let sum = 0;
    for (let index = 0; index < this.length; index++){
      sum += callback(0,this[index])
    }
    return sum
  }

  this.findIndex = function (callback) {
    for (let index = 0; index < this.length; index++){
      if (callback(this[index])) return index;
    }
    return (-1)
  }

  this.indexOf = function (element) {
    for (let index = 0; index < this.length; index++){
      if (this[index]==element) return index
    }
    return (-1)
  }

  this.filter = function (callback) {
    let filterArray=[]
    for (let index = 0; index < this.length; index++){
      if (callback(this[index])) filterArray.push(this[index]);
    }
    return filterArray
  }

  this.shift = function () {
    let cloneElement = Array.from(this);
    let firstElement = cloneElement[0];
    delete firstElement;

    for (let pos = 0; pos <= this.length; pos++){
      this[pos] = cloneElement[pos + 1];
      if (this[pos]==undefined) delete this[pos]
    }
  }

  this.unshift = function (...elements) {
    let cloneElement = Array.from(this);

    for (let pos = 0; pos < this.length; pos++){
      this[pos+elements.length] = cloneElement[pos];
    }

    for (let pos = 0; pos < elements.length; pos++){
      this[pos] = elements[pos];
      this.length++;
    }

    console.log(this);
    return elements[elements.length-1];
  }

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
    };


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
    };


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

    this.find = function(callback){
       let object = -1
      this.forEach(function(element) {
        if (callback(element)){

         object = element

        }
      })

      return object
    }
  }


instructors = new FakeArray("Diego", "Andre", "Paulo")
// instructorsAge = new FakeArray(20, 25, 30)
const isBelowThreshold = (currentValue) => typeof currentValue === "string";
const findTest = (currentValue) => typeof currentValue === "string";
instructors = new FakeArray("Diego", "Andre", "Paulo")
instructors2 = new FakeArray("Peter", "SebasTerle", "Catodiux")
//this = {
//   0: "Diego",
//   1: "Andre",
//   2: "Paulo"
//   length: 3  <-- this.length
// }






