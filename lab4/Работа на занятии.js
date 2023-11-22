// задача 1
function bubbleSort(array) {
    for (let j = array.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                }
            }
        }  

    return array;
}

// задача 2
function countDuplicates(array) {
  let count = {};
  
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    
    if (count[num]) {
      count[num]++;
    } else {
      
      count[num] = 1;
    }
  }
  
  let duplicates = {};
  
  for (let num in count) {
    if (count[num] > 1) {
      duplicates[num] = count[num];
    }
  }
  
  return duplicates;
}


// задача 3
function elmentOfMatrix(matrix) {
    var maxElementOfMin = 0;
    
    for (let row = 0; row < matrix.length; row++) {
      var minElement = 10 ** 9;
      
      for (let col = 0; col < matrix[row].length; col++) {
        matrix[row][col] < minElement ? minElement = matrix[row][col] : minElement;
      }
      
      minElement > maxElementOfMin ? maxElementOfMin = minElement : maxElementOfMin;
    }
    
    return maxElementOfMin;
}


// задача 4
var vectorA = {
    x: 4, 
    y: 7, 
    z: 5,

    sum: function(vectorB) {
        return [this.x + vectorB.x, this.y + vectorB.y, this.z + vectorB.z];
    }, 

    difference: function(vectorB) {
        return [this.x - vectorB.x, this.y - vectorB.y, this.z - vectorB.z];
    },

    multiplication: function(vectorB) {
        return [this.x * vectorB.x, this.y * vectorB.y, this.z * vectorB.z];
    },

    scalarMultiplication: function(scalar) {
        return [this.x * scalar, this.y * scalar, this.z * scalar];
    },

    vectorLength: function() {
        return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
    },

    scalarMultiplicationVector: function(vectorB) {
        return this.x * vectorB.x + this.y * vectorB.y + this.z * vectorB.z;
    },
};
  
var vectorB = {
    x: 5, 
    y: 4, 
    z: 2,

    sum: function(x, y, z) {
        return [this.x + vectorB.x, this.y + vectorB.y, this.z + vectorB.z]; 
    },

    difference: function(vectorB) {
        return [this.x - vectorB.x, this.y - vectorB.y, this.z - vectorB.z];
    },

    multiplication: function(vectorB) {
        return [this.x * vectorB.x, this.y * vectorB.y, this.z * vectorB.z];
    },

    scalarMultiplication: function(scalar) {
        return [this.x * scalar, this.y * scalar, this.z * scalar];
    },

    vectorLength: function() {
        return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
    },

    scalarMultiplicationVector: function(vectorB) {
        return this.x * vectorB.x + this.y * vectorB.y + this.z * vectorB.z;
    },
};
  

// задача 5
function shiftElementsOfArray(array, k) {
    var dictIndex = new Map();
    
    for (let i = 0; i < array.length; i++) {
      if (i - k >= 0) {
        dictIndex.set(array[i], i - k);
      }
      else {
        if ((i - k) % array.length === -0) {
          dictIndex.set(array[i], -(i - k) % array.length);
        }
        else {
          dictIndex.set(array[i], array.length + (i - k) % array.length);
        }
      }
    }
    
    var sortedArray = Array();
    
    for (let [key, value] of dictIndex) {
      sortedArray[value] = key;
    }
    
    return sortedArray;
  }