const demobObj = [{
    name: 'sadaf',
    age: 26,
    city: 'Dhaka'
}, {
    name: 'Mumin',
    age: 29,
    city: 'Kustia'
}, {
    name: 'Kamrul',
    age: 25,
    city: 'Madaripur'
}, {
    name: 'Suraiya',
    age: 22,
    city: 'Naogaon'
}]


 const addFunction = (inputArray) => {
    //  let filterObj = inputArray.map((element, index) => ({
    //      ...element,
    //      count: index+1
    //  }));
     let filterObj = [];
     for (i = 0; i < inputArray.length; i++) {
        const count = i+1;
        // console.log(i)
         filterObj.push({...inputArray[i], count: count});  
     }
     return filterObj;
 }
console.log(demobObj);
 console.log(addFunction(demobObj));