function minDigit(j) {  
    var min_digit = 10 ** 9;
    
    for (var i = 0; i < j.toString().length; i++) {
      if (min_digit > j.toString()[i]) {
        min_digit = j.toString()[i];
      }
    }
  
    return min_digit;
  }
  console.log(minDigit(34567289));