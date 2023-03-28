// your code here

let submit = document.getElementById("button");

submit.addEventListener("click", (e)=>{
	let h3 = document.getElementById("url");
	h3.innerHTML = "hi";
	// console.log(window.location.href);
	h3.innerHTML = window.location.href;
})