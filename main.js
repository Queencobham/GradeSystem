function Grade(id) {
	let grade = document.getElementById(id).value
	let result = document.getElementById('output-' + id)

    if (!grade.trim().length){
			result.innerHTML =''
	}else if (grade >= 80 && grade <= 100) {
		result.innerHTML = 'A'
	} else if (grade >= 70 && grade < 80) {
		result.innerHTML = 'B'
	} else if (grade >= 60 && grade < 70) {
		result.innerHTML = 'C'
	} else if (grade >= 50 && grade < 60) {
		result.innerHTML = 'D'
	} else if (grade < 60) {
		result.innerHTML = 'F'
	} else {
		alert('please enter mark in range of 100')
		   result.innerHTML = ''
	}
}

function total(){
	let maths = document.getElementById('mathematics').value
	let eng = document.getElementById('english').value
	let comSci = document.getElementById('computer-science').value
	let phy = document.getElementById('physics').value
	let bio = document.getElementById('biology').value
	let chem = document.getElementById('chemistry').value
	let result = ""

   let total= parseFloat(maths) + parseFloat(eng) + parseFloat(comSci) + parseFloat(phy) + parseFloat(bio) + parseFloat(chem) ;
			
			let average=total/6;
			let n = average.toFixed(1);
			document.getElementById("border-box").innerHTML="Your total is " + total + " and average is " + n;


			if(average>=60){
		
			document.getElementById("border-box1").innerHTML="congratulations " + result + "you passed";
			}
			else{
				document.getElementById("border-box1").innerHTML="sorry " + result + "you failed";

	   
			}
	
}


