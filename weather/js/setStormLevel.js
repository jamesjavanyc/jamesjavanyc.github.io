const adjustRating= ()=> {
    console.log(document.getElementById("str_range"));
    document.getElementById("str_range").innerHTML = document.getElementById('storm_rate_input').getAttribute('value');
}

function selectResponse() {
	const s = document.querySelector('#storm_rate_input');
	const sel = document.querySelector('#selectbrowser');
	s.style.display = "block";
	s.textContent = sel.value;
}