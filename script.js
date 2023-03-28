// your code here

document.getElementById("submit").addEventListener("click",(e)=>{
	let h3 = document.getElementById("url");
	h3.innerText = window.location.href;
})