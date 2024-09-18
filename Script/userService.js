const user = {
	email: "",
	Age: "",
	bgColor: "",
	txtColor: "",
	birthDate: "",
	birthTime: "",
}

function showAge(newVal) {
	document.getElementById("sAge").innerHTML = newVal
}

function onSubmit(ev) {
	ev.preventDefault()

	const elEmail = document.querySelector('input[name="email"]').value
	if (!isValidEmail(elEmail)) {
		alert("Please enter a valid email")
		return
	}
	const elAge = document.getElementById("sAge").innerHTML
	const elBackGroundColor = document.querySelector('input[name="bgc"]').value
	document.body.style.backgroundColor = elBackGroundColor
	const elTextColor = document.querySelector('input[name="tc"]').value
	document.body.style.color = elTextColor
	const elBirthDate = document.querySelector('input[name="dob"]').value
	const elBirthTime = document.querySelector('input[name="bt"]').value

	Object.assign(user, {
		email: elEmail,
		Age: elAge,
		bgColor: elBackGroundColor,
		txtColor: elTextColor,
		birthDate: elBirthDate,
		birthTime: elBirthTime,
	})
  saveToStorage()
}

function saveToStorage() {
	localStorage.setItem("user", JSON.stringify(user))
}

function isValidEmail(email) {
	return email !== ""
}
