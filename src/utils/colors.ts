const colors = {
	home: '#147AD6',
	education: '#F945AB',
	others: '#2FDF84',
	credit: '#F99645',
	food: '#79D2DE',
};

export default colors;

export const getByKey = (
	key: 'home' | 'education' | 'others' | 'credit' | 'food'
) => {
	return colors[key];
};
