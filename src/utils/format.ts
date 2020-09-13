const moneyFormatter = new Intl.NumberFormat('pt-BR', {
	currency: 'BRL',
	style: 'currency',
});

export const formatMoney = (value: number) => {
	return moneyFormatter.format(value);
};
