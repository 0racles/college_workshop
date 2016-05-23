function sumAll(array) {

    var sum = 0;

    for(var i = 0; i < array.length; i++){
        sum = sum + array[i];
    }

    alert(sum);
}

var addThis=[34, 21, 667, 12];

sumAll(addThis);


function isGreaterThan (x, y) {

  if (x < y ) {
    console.log(y + " is larger than " + x);
  }
  else if (x > y) {
    console.log(x + " is larger than " + y);
  }
  else {
    console.log("both numbers are equal");
  }

}

isGreaterThan(10, 20);
