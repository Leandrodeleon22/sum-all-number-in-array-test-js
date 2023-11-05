function sumItems(array) {
  // Sum all the numbers in the array
  let total = 0
  array.forEach((el)=>{
    if(Array.isArray(el)){
     total += sumItems(el)
      
    }else {
      // console.log(el)
      total += el
    }
  })
return total
}

module.exports = sumItems;