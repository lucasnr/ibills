import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import {
	Container,
	Transaction,
	BulletContainer,
	Bullet,
	Timestamp,
	Name,
	Type,
	Value,
} from './styles';

import { getByKey } from '~/utils/colors';

interface ITransaction {
	timestamp: string;
	name: string;
	type: string;
	value: string;
	income: boolean;
	label: 'home' | 'education' | 'others' | 'credit' | 'food';
}

const transactions: ITransaction[] = [
	{
		timestamp: 'Hoje',
		name: 'Lojas Americanas',
		type: 'Débito',
		value: 'R$ 30,00',
		income: false,
		label: 'others',
	},
	{
		timestamp: 'Hoje',
		name: 'Supermercado Estrela',
		type: 'Débito',
		value: 'R$ 450,00',
		income: false,
		label: 'food',
	},
	{
		timestamp: '26.08',
		name: 'Farmácia Panvel',
		type: 'Crédito',
		value: 'R$ 87,50',
		income: false,
		label: 'others',
	},
	{
		timestamp: '26.08',
		name: 'Colégio Educacional P',
		type: 'Boleto',
		value: 'R$ 1.050,00',
		income: false,
		label: 'education',
	},
	{
		timestamp: '26.08',
		name: 'CCAA',
		type: 'Boleto',
		value: 'R$ 1.050,00',
		income: false,
		label: 'education',
	},
	{
		timestamp: '24.08',
		name: 'Luiza Pereira Gomes',
		type: 'Transferência',
		value: 'R$ 3.000,00',
		income: true,
		label: 'home',
	},
	{
		timestamp: '24.08',
		name: 'Lojas Americanas',
		type: 'Salário',
		value: 'R$ 9.000,00',
		income: true,
		label: 'others',
	},
];

const Transactions: React.FC = () => {
	const { text, colors } = useContext(ThemeContext);

	return (
		<Container horizontal={true} showsHorizontalScrollIndicator={false}>
			{transactions.map((item, index) => (
				<Transaction key={index}>
					<BulletContainer>
						<Bullet color={getByKey(item.label)} />
					</BulletContainer>
					<Timestamp>{item.timestamp}</Timestamp>
					<Name>{item.name}</Name>
					<Type>{item.type}</Type>
					<Value color={item.income ? text.alternative : colors.primary}>
						{item.income ? '+ ' : '- '}
						{item.value}
					</Value>
					<Icon name="chevron-down" color={text.primary} size={20} />
				</Transaction>
			))}
		</Container>
	);
};

export default Transactions;
