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

