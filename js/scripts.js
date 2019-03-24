function track() {
    var triangles=["equilateral","isosceles", "scalene"]
    var length1 = parseInt(document.getElementById("length1").value);
    var length2 = parseInt(document.getElementById("length2").value);
    var length3 = parseInt(document.getElementById("length3").value);
    if (length1 + length2 > length3 && length1 + length3 > length2 && length3 + length2 > length1) {
        if (length1 === length2 && length2 === length3) {
          alert("It is an equilateral triangle");
        }
    
        else if (length1 === length2 || length1 === length3 || length2 === length3) {
          alert("It is an isosceles triangle");
        }