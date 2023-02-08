let Name = prompt("Enter your name please: ");

let Gender = prompt("Enter your gender please: male/female");

let Age = prompt("Enter your age please: ")

if (Age <= 0) {
    alert("Age is less than or equal to zero.");
    while (Age <= 0) {
       Age = prompt("Please enter your age again: ")
        if (Age <= 0){
            continue
        }else{
            break
        }
    }
}

if (Gender == "male") {
    Name = "Mr " + Name;
}
else if (Gender == "female") {
    Name = "Ms " + Name;
}
else {
    Name = Name;
}


let text;
if (confirm("confirm if you wants to skip the welcoming message.") == true) {
    text = ""
} else {
    alert("Welcome " + Name)
}

alert("Please answer the 3 following questions " + Name + ".");

let Pet_Question = prompt("Do you have a pet ? yes/no");
let Amman_Question = prompt("Do you live in Amman ? yes/no");
let winter_Question = prompt("Do you like Winter ? yes/no");


const Answer_Array = [];

function Array_Fun(Answer_Array){
    if (Pet_Question == "yes" || Pet_Question == "no"){
        Answer_Array.push(Pet_Question);
    }
    else{
        Answer_Array.push("invalid");
    }


    if (Amman_Question == "yes" || Amman_Question == "no"){
        Answer_Array.push(Amman_Question);
    }
    else{
        Answer_Array.push("invalid");
    }

    
    if (winter_Question == "yes" || winter_Question == "no"){
        Answer_Array.push(winter_Question);
    }
    else{
        Answer_Array.push("invalid");
    }

    return Answer_Array;
}

console.log(Array_Fun(Answer_Array));

