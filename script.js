const btnEl = document.getElementById("btn");
    const dateEl = document.getElementById("inputdate");
    const resultEl = document.getElementById("result");
    

function calculateAge(){
    const birthdatevalue = dateEl.value;
    if(birthdatevalue === "")
    {
        alert("Please Enter Your Date of Birth");
    }
    const currentdate = new Date();
    const birthdate = new Date(birthdatevalue);
    
    let year = currentdate.getFullYear() - birthdate.getFullYear();
    
    let month = currentdate.getMonth()- birthdate.getMonth();
    
    let day = currentdate.getDay() - birthdate.getDay();
    if( month<0 || (month === 0 && currentdate.getDate() < birthdate.getDate()) )
    {
        year--;
    }
    
    let age = `You Are ${year} ${(year>1)?"years":"year"}, ${month} ${(month>1)?"months":"month"} , ${day} ${(day>1)?"days":"day"} old`;
    
    resultEl.innerHTML=age;
    
}


btnEl.addEventListener("click",calculateAge);
