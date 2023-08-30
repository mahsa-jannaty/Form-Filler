export default function fillAllFormsWithFakeData() {
	const forms = document.querySelectorAll('form');
	forms.forEach(form => populateFormWithFakeData(form));
}

function populateFormWithFakeData(form) {
	// Text inputs
	const textInputs = form.querySelectorAll('input[type="text"]');
	textInputs.forEach(input => (input.value = generateRandomString(10)));

	// Textareas
	const textareas = form.querySelectorAll('textarea');
	textareas.forEach(textarea => (textarea.value = generateRandomString(10)));

	// Number inputs
	const numberInputs = form.querySelectorAll('input[type="number"]');
	numberInputs.forEach(input => (input.value = generateRandomNumber()));

	// File inputs
	const dataTransfer = new DataTransfer();
	const fileInputs = form.querySelectorAll('input[type="file"]');
	fileInputs.forEach(input => {
		dataTransfer.items.add(new File([], `fake-file-${generateRandomNumber()}.txt`));
		input.files = dataTransfer.files;
	});

	// Combo boxes (HTML 'select' elements)
	const comboBoxes = form.querySelectorAll('select');
	comboBoxes.forEach(comboBox => {
		const options = comboBox.querySelectorAll('option');
		const randomOptionIndex = generateRandomNumber(0, options.length - 1);
		options[randomOptionIndex].setAttribute('selected', '');
	});
}

function generateRandomString(length = 8) {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let result = '';

	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		result += characters.charAt(randomIndex);
	}

	return result;
}

function generateRandomNumber(min = 1, max = 99999) {
	const randomNumber = Math.floor(Math.random() * (max - min) + 1) + min;
	return randomNumber;
}
