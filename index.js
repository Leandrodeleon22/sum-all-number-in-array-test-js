function sumItems(array) {
  // Sum all the numbers in the array
  const flatArray = array.flat(Infinity)
  let total = 0
  flatArray.forEach((el)=>{
   
    total += el
  })
return total
}
sumItems([1, 3, 3, 5, 5])
module.exports = sumItems;