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
  