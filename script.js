const btnEl = document.getElementById("btn");
    const dateEl = document.getElementById("inputdate");
    const resultEl = document.getElementById("result");
    

function calculateAge(){
    const birthdate = dateEl.value;
    if(birthdate === "")
    {
        alert("Please Enter Your Date of Birth");
    }
let age = getAge(birthdate);
    resultEl.innerHTML = `You are ${age} years old.`;
}
function getAge(birthdate)
{
    const currentdate = new Date();
    const brthdate = new Date(birthdate);
    let age = currentdate.getFullYear() - brthdate.getFullYear();
    
    return age;
}

btnEl.addEventListener("click",calculateAge);
