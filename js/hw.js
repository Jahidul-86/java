function textChange() {
   document.getElementById('btn').innerText = 'Clicked';
   document.getElementById('btn').style.color = '#2ecc71'
}
document.write('<br>')

// Odd/Even Number Checkup

let Number = 5

let remainder = (Number % 2)
if (remainder == 0)
{
    console .log (`${Number} is even`)
}else{
    console .log (`${Number} is odd`)
}


// Mathematical Operation with function

let x = 3.14;
let y = 5;
let z = 9;
let maximum;
let minimum;

//x = Math.round(x);
//x = Math.floor(x);
//x = Math.ceil(x);
//x = Math.pow(x, 2);
//x = Math.sqrt(x);
//x = Math.abs(x);
//maximum = Math.max(x, y, z);
// minimum = Math.min(x, y, z);
// x = Math.PI;
console.log(x);

// Biyer Condition Checkup
var number = 18;
if (number >=35 && number <=60){
 document.write ('vai r koto early biye ta kre pelen')
} else if (number >=28 && number <35) {
 document.write ("vai biye ki korben na?");
} else if (number >=22 && number <27) {
 document.write ("Biye kre pelen");
}
else if (number >=0 && number <21) {
 document.write ("tumi ekno leda :)");
}