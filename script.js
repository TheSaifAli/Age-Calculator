const btnEl = document.getElementById("btn");
    const dateEl = document.getElementById("inputdate");
    const resultEl = document.getElementById("result");
    

function calculateAge(){
    const birthdate = dateEl.value;
    if(birthdate === "")
    {
        alert("Please Enter Your Date of Birth");
    }
    resultEl.innerText = `You are ${getAge(birthdate)} years old.`;
}
function getAge(birthdate)
{
    const currentdate = new Date();
    const brthdate = new Date(birthdate);
    let age = currentdate.getFullYear() - brthdate.getFullYear();
    
    return age;
}

btnEl.addEventListener("click",calculateAge);
