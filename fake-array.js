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
      // console.log(this[index])
      // console.log(callback(this[index]))
      if (callback(this[index])) filterArray.push(this[index]);
    }
    return filterArray
  }

  this.shift = function () {
    const cloneElement = structuredClone(elements);
    // sacarlo & eliminarlo
    const deleted = delete cloneElement[0]
    console.log(deleted)
    return cloneElement
  }
}

instructors = new FakeArray("Diego", "Andre", "Paulo")
// instructorsAge = new FakeArray(20, 25, 30)

//this = {
//   0: "Diego",
//   1: "Andre",
//   2: "Paulo"
//   length: 3  <-- this.length
// }
