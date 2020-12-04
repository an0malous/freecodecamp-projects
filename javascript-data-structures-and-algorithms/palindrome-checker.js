function palindrome(str) {
	const re = /[a-z0-9]/;

	const newStr = str
		.toLowerCase()
		.split('')
		.filter((i) => i.match(re))
		.map((i, index, array) => {
			if (i === array[array.length - (index + 1)]) {
				return i;
			}
		});

	if (newStr.includes(undefined)) {
		return false;
	}

	return true;
};
