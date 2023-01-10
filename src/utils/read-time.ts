const WPM = 200;

const readTime = (wordCount: number) => {
	const minutes = wordCount / WPM;
	const readTime = Math.ceil(minutes);
	return readTime;
};

export { readTime };
