//Remove all the whitespaces and then print the length of the remaining string.
const readline = require('readline');
const inp=readline.createInterface({input:process.stdin});
inp on("line",(data)=>{
  data=data.replace(/\s+/g,"");
  console.log(data.length);
});
