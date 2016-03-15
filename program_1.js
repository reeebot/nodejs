var total = 0;
for (count=2 ; count<process.argv.length ; count++){
   total += +process.argv[count];
}
console.log(total)
