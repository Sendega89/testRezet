
//console.log(filter(someArray))

 /*   let chunk = (array, size=3) => {
      const chunkedArr = [];
      let index = 0;
      while (index < array.length) {
        chunkedArr.push(array.slice(index, size + index));
        index += size;
      }
      return chunkedArr;
    }; 
 */
/////_________Task 1 ______________///////
let someArray = [1,3,5,4,5,7];

let examination = (someArray)=> {
      let result =[];
      for(let i=0;i<someArray.length-2;i++){
(someArray[i]>someArray[i+1] && someArray[i+1]<someArray[i+2])?result.push(1):result.push(0);     
} 
    return result  
}     
console.log(examination(someArray))

//////________Task 2 ____________//////
let testMatrixArray =[
      [1,2,3,2,7,9,9,6,3,9],
      [4,5,6,8,1,8,8,5,2,8],
      [7,8,9,4,5,7,7,4,1,7]
]
let matrix =(array)=>{
      let result = []
      let count =0;
      let cashArr=[]; 
      for(let m=0;m<array[0].length-2;m++){
      //______________________
for(let i=0;i<array.length;i++){
      for(let j=count;j<count+3;j++){    
     cashArr.push(array[i][j])        
}  
}
let set =new Set(cashArr);
  (set.size===9)?result.push(true):result.push(false) 
  
      cashArr = [];
      count++
}
return result
}
console.log(matrix(testMatrixArray));

/////__________Task 3 ____________////////

let stringSet = [
      ['Hello','world'],
      ['Brad','come','to','dinner','with','us'],
      ['He','loves','tacos']
]
let format = ['LEFT','RIGHT','LEFT']

let formating = (array,settings,maxLength)=> {
      let result=[];
      array.map(items => {
            result.push(`*${items.join(' ').split('  ')} `)
      })
for(let i = 0;i<=settings.length;i++){
switch (settings[i]){
      case 'LEFT': console.log('LEFT');
      let str= result[i].padEnd(16, "*")
      console.log(str)
       
      
      break
      case 'RIGHT': console.log('RIGHT')
      let str1= result[i].padStart(16, "*")
      console.log(str1)
      
     
      break
}
}
return result
}
console.log(formating(stringSet,format,16))