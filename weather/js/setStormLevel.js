const adjustRating= (value)=> {
	console.log(document.getElementById('storm_rate_input').value);
    document.getElementById("str_range").innerHTML = value;
}

// function adjustRating(rating) {
//     document.getElementById("ratingvalue").innerHTML = rating;
// }

function selectResponse() {
	const s = document.querySelector('#storm_rate_input');
	const sel = document.querySelector('#selectbrowser');
	s.style.display = "block";
	s.textContent = sel.value;
}