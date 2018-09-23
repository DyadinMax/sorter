class Sorter {

  constructor() {
    this.array = [];
    this.compareFunction = undefined;
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    var temp = [];
    for (let i = 0; i < indices.length; i++){
      temp.push(this.array[indices[i]])
    }

    if (this.compareFunction){
      temp.sort(this.compareFunction)
    } else {
      temp.sort(compareNum);
    }

    indices.sort(compareNum);

    for (let i = 0; i < indices.length; i++){
      this.array[indices[i]] = temp[i];
    }
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
   
}

function compareNum(a, b){
  return a - b;
}

module.exports = Sorter;
