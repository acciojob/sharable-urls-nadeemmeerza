// your code here

let submit = document.getElementById("form");

// document.getElementById("url").innerHTML = "name="+name+"&year="+year;
submit.addEventListener('submit', (e)=>{
	e.preventDefault();
	let name = document.getElementById("name").value;
    let year = document.getElementById("year").value;
    document.getElementById("url").innerText="https://localhost:8080/"+"name="+name+"&year="+year;
	
})