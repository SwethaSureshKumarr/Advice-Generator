
async function advice(){
const response = await fetch('	https://api.adviceslip.com/advice')
.then((response) => response.json())
.then((data) => {
    console.log(data.slip.advice);
    document.getElementById("adviceId").innerHTML=data.slip.id;
    document.getElementById("adviceDescription").innerHTML=data.slip.advice;
});
}
