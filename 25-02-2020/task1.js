// To convert country name into capital letters using map function

const countryname=dummy.map((item)=>{
    return(item.name).toUpperCase()})
console.log(countryname)

// To print capital of country length 5 and less than 5 using filter

const caplen=dummy.filter((item)=>{
    return(item.capital).length<=5})
console.log(caplen)

// To find the specific country name using find

const finditem=dummy.find((item)=>{
    return item.name==='India'})
console.log(finditem)

// To sum the all no's in array using reduce

var sum=[1,2,3,4,5,6,7,8,9,10]
var sum =sum.reduce(function(accumulator,currentvalue,index){
    return accumulator+currentvalue;
});
console.log(sum)

// To print odd numbers

var a=[1,2,3,4,5,6,7,8,9,10]
var sum=a.reduce(function(accumulator,currentvalue,index){
    if(currentvalue%2!=0){
        return accumulator+currentvalue;}
    return accumulator
});
console.log(sum)
