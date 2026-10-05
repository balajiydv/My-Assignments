let x = 10;
//let y = 30;
function testScope() {

    if(x === 10){
    let x = 20;
    
    }
  console.log("Inside function:", x);
}

testScope();
console.log("Outside function:", x);