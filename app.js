'use strict';


let userName = prompt('please enter your name')

let gender = prompt ('Enter your gender (male / female)');

let gender1=''
if(gender=="male"){
   gender1="Mr"
}
else if(gender=="female"){
   gender1="Ms"
}
else{
   gender1=""
}



let age = prompt ('Enter your age');
if(age <= 0 ){
   alert (' the age less than it should be')
}


 let c1 = confirm("press ok if you want to see a message ")

if(c1){
   alert ('hello ' + gender1 + userName)
}


let arr1=[]
function vans(ans)
{

    if(ans == "" || ans == null)
    {
        arr1.push("invalid");
    }
    else
    {
        arr1.push(ans);
    }
}

function printAns(a)
{
    for(let i=0 ; i<3 ;i++)
    {
        console.log(a[i]);
    }
}


let q1=vans(prompt("do you like reading?answer with yes/no"));


let q2=vans(prompt("do you like music ?answer with yes/no"));

let q3=vans(prompt("do you like swimming?answer with yes/no"));
console.log(arr1)
printAns(arr1);







