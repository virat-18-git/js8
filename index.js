// while loop:

// let subscribe=true;
// let days=50;
// while(subscribe&days>=0)
// {
//     console.log("able to access",days);
//     days--;
// }

// let recharge=true;
// let validity=45;
// while(recharge&validity>=0){
//     console.log("can make calls")
//     // console.log("can make calls",validity)
//     console.log(`remaining ${validity}days`)

//     validity--;
// }
// console.log("please make recharge")

// do while loop:
// let s=10;
// do{
//     s++;
//     console.log(s)
//     s++;
// }
// while(s<30)

// let subscribe=true;
// let episode=0;
// do{
//     console.log(`watch episode ${episode} for free`)
//     episode++;

// }
// while(subscribe&episode<=10)

// conditional statements
// 1.simple if

// let user="admin"
// if(user=="admin"){
//     console.log("can access the admin dashboard")
// }
// console.log("can access the entire dashboard")

// 2. if-else
// let user1="client"
// if(user1=="admin"){
//     console.log("can access the admin dashboard")
// }
// else{
//     console.log("u can't access the dashboard")
// }
// console.log("can access the entire dashboard")

// 3.nested-if:

//example 1 for nested if 
// let login = true;
// let user1 = "client";
// if (login) console.log("login can access");
// if (user1 == "client") {
//   console.log("can access the admin dashboard");
// } else {
//   console.log("u can't access the dashboard");
// }
// console.log("can access the entire dashboard");


// example 2 for nested if
let login = true;
let user1 = "client";
let gender="male"
if(login)
    {
     console.log("login successfull")
    
     if (gender=="male")
     {
      console.log("can access the admin dashboard as a male admin");
     
         if (user1 == "admin")
        {
         console.log("can access the admin dashboard as a male admin");
        } 
         else
         {
        console.log("u can access the dashboard as a female admin")
         }
         } else
        {
        console.log("u can't access the dashboard");
        }
    }
    else{
        console.log("can access the entire dashboard");
    }


// else-if ladder

let budget=7500;
if(budget>=10000){
    console.log("go by flight")
}
else if(budget<10000&& budget>=5000)
{
    console.log("go by bus")
}
else if(budget<5000&& budget>=2000)
    {
        console.log("go by train")
    }
else{
    console.log("practise programming")
}


// break and continue
for(i=0;i<=25;i++){
 
if(i==8){
break
}
console.log(i*2)
}

for(i=0;i<=15;i++){
  if(i==8)
  continue
 console.log(i)
  }


for(i=0;i<=10;i++)
{    j=i*2;
if(j==6){
    break;
}
console.log(i)
}

for(i=0;i<=10;i++)
    {    j=i*2;
    if(j==6){
        continue;
    }
    console.log(i)
    }


let arr=["sql","css","mongo","java","python","html","react","nodejs"]
for(i=0;i<=arr.length-1;i++){
    if(arr[i].length>=4)
console.log(`${arr[i]} - ${i}`)
}



 




