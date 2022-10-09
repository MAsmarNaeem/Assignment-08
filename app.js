////Write a ts program to read and print elements of array.
// alert(`enter 5 numbers`)
// var a:any[]=[]
// for(let i=0;i<5;i++)
// {
//     a[i]=prompt("enter a number")
// }
// document.write(`element in the array are :`)
// for(let j=0;j<5;j++)
// {
//     document.write(` ${a[j]}`)
//     document.write("<br>")
// }
////-------------------&&&&&&&&&&&&&&&&&&-------------------------
//// Write a ts program to print all negative elements in an array.
// var a:any[]=[2,-3,4,-5,6]
// var b:any[]=[]
// for(let i=0;i<a.length;i++)
// {
//     if (a[i]>0) {
//         b[i]=a[i]
//     }
// }
// var c:any=b.join('')
// var d:any=c.split('')
// console.log(d)
////--------------------&&&&&&&&&&&&&&&&&&&&&&_------------------------------
//// Write a ts program to find sum of all array elements.
// var a:any=[2,3,4]
// //var b:number=Number(a)
// var sum:any=0
// for(let i=0;i<a.length;i++)
// {
//      sum=sum+a[i]
// }
// console.log(sum)
////--------------------$$$$$$$$$$$$$$$$$$$$------------------------
////Write a ts program to find maximum and minimum element in an array.
// var a:any=[2,3,4,5]
// // var c:any=a.join('')
// var b:any=Math.min(...a)
// console.log(b)
// var a:any=[2,3,4,5]
// var b:any=Math.max(...a)
// console.log(b)
////------------------$$$$$$$$$$$$$$$$$$$$$$$$-----------------------
//// Write a ts program to find second largest element in an array.
// var a:any=[2,9,4,0,12,1]
// a[0]=2
// var b:any
// // var b[]:any=[]
// for(let i=0;i<a.length;i++)
// {
//    if(a[i]>a[0])
//    {
//    b=a[i]
//    }
// //    if(a[i]>b)
// //    {
// //     c[i]=a[i]
// //    }
// }
// console.log(b)
// // var c:any
// // for(let i=0;i<a.length;i++)
// // {
// //     if(a[i]<b)
// //     {
// //     c=a[i]
// //     }
// // }
// // console.log(c)
// var c:any[]=[]
// for(let i=0;i<a.length;i++)
// {
//     if(a[i]<b)
//     {
//    c[i]=a[i]
//     }
// }
//  var d:any=c.join('')
//  var e:any=d.split('')
//  var f:any=Math.max(...e)
//  console.log(f)
// var a:any=[12,6,89]
// var b:any=a.sort(function(a,b){return a-b})
// var c:any=b.length-1
// console.log(c)
////---------------------------&&&&&&&&&&&&&&&&&&&&&-------------------------
//// Write a ts program to count total number of even and odd elements in an array.
// var a:any=0
// var b:any=0
// var c:any[]=[2,3,4,5,6]
// for(let i=0;i<c.length;i++)
// {
//     if(c[i]%2==0)
//     {
//         a++
//     }
//     if(c[i]%2!=0)
//     {
//         b++
//     }
// }
// console.log(a)
// console.log(b)
/////--------------------&&&&&&&&&&&&&&&&&&&_---------------------------
////Write a ts program to count total number of negative elements in an array
// var a:any=[2,-4,5,6,-7,-4]
// var b:any=0
// for(let i=0;i<a.length;i++)
// {
//     if(a[i]<0)
//     {
//  b++
//     }
// }
// console.log(b)
/////-------------------------$$$$$$$$$$$$$$_-----------------------
//// Write a ts program to copy all elements from an array to another array.
// var a:any[]=[2,3,4,5,6]
// var b:any[]=a.slice()
// console.log(b)
////-----------------------%%%%%%%%%%%%%%%%%%%%%%%%_-----------------------
///// Write a ts program to insert an element in an array.
// var a:any=[2,3,6,4,3,8]
// var c:any=a.push(2)
// console.log(a)
/////Write a ts program to delete an element from an array at specified position.
// var a:any=[2,3,4,5]
// var b:any=a.splice(2,1)
// console.log(a)
/////-------------------------$$$$$$$$$$$$$$$$$$$$$$$$$$$_-----------------------
//// Write a ts program to count frequency of each element in an array.
// var a:any=["h","o","h"]
// var b:any=a
// b.forEach(element => {
//     b[element]=b[element]?b[element]+1:1
// });
// console.log(b)
////--------------------%&&&&&&&&&&&&&&&&&&&&&_-----------------------
//// Write a ts program to print all unique elements in the array
// var a:any=[2,3,4,5,5,6,7,2]
// var b:any=[new Set(a)]
// console.log(b)
/////--------------------%%%%%%%%%%%%%%%%%%%5-----------------------
////Write a ts program to count total number of duplicate elements in an array.
// function find(str:any) {
//     var map:any=[]
//     var b:any=0
//     str.split("").forEach(element=>
//         {
//             map[element]=map[element]?map[element]+1:1
//             console.log(map)
//         });
//         var max=1
//         var b:any=0
//        for(let k in map)
//        {
//         if (map[k]>=max) {
//             b++
//         }
//        }
//        console.log(b)
//     }
// find("aasssmm");
////---------------------$$$$$$$$$$$$$$$$$$$$$$$$$$--------------------------------
///// Write a ts program to delete all duplicate elements from an array.
// var a:any=[2,3,40,40,5,2,3]
// var b:any=new Set(a)
// console.log(b)
/////---------------------$$$$$$$$$$$$$$$$$$$_-------------------
//// Write a ts program to merge two array to third array.
// var a:any=[2]
// var b:any=[1,2,3,4]
// var c:any=[10,11,12]
// var final:any=a.concat(b,c)
// console.log(final)
/////---------------------$$$$$$$$$$$$$$$$$$$$$$_------------------------
///// Write a ts program to find reverse of an array.
// var a:any=[2,3,4,5]
// var b:any=a.reverse()
// console.log(b)
////--------------------------$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
////Write a ts program to put even and odd elements of array in two separate array.
// var a:any=[2,3,4,5,6,6]
// var b:any=[]
// var c:any=[]
// for(let i=0;i<a.length;i++)
// {
//     if (a[i]%2==0) {
//         b[i]=a[i]
//     }
//     if(a[i]%2!=0)
//     {
//         c[i]=a[i]
//     }
// }
// b=b.join('')
// b=b.split('')
// c=c.join('')
// c=c.split('')
// console.log("array with even element",b)
// console.log("array with odd elements",c)
////--------------------$$$$$$$$$$$$$$$$$$$$$$$$$_------------------
////Write a ts program to search an element in an array.
// var a:any=[2,3,4];
// var b:any=a.indexOf(2)
// console.log(b)
////--------------------$$$$$$$$$$$$$$$$$$$$$$_--------------------------
////. Write a ts program to sort array elements in ascending or descending order.
// var a:any=[4,5,3,2,4]
// var b:any[]=a.sort((a,b)=>a-b)
// console.log(b)
// var a:any=[4,5,3,2,4]
// var b:any[]=a.sort((a,b)=>b-a)
// console.log(b)
////----------------------$$$$$$$$$$$$$$$$$$$$$$$$--------------------
//// Write a ts program to sort even and odd elements of array separately.
// var a:any=[2,3]
// var c:any=[]
// for(let i=0;i<a.length;i++)
// {
//     for(let j=i+1;j>0;j--)
//     {
//         if(a[i]>a[j])
//         {
//             c[i]=a[i]
//             a[i]=a[j]
//             a[j]=c[i]
//         }
//     }
// }
// console.log(c)
/////-------------------$$$$$$$$$$$$$$$$$$_---------------------------
///Write a ts program to left rotate an array.
var arr = [2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
}
