import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';

import Container from '~/components/AppScreenContainer';
import ExpensesRevenueReports from '~/components/ExpensesRevenueReports';
import ScrollContainer from '~/components/ScrollContainer';
import {
	Table,
	TableRow,
	TableHead,
	TableHeadText,
	TableColumn,
	TableColumnText,
	TableIcon,
} from '~/components/Table';
import Row from '~/components/Row';
import { CardButton } from '~/components/Card';

import { Situation } from './styles';

import { formatMoney } from '~/utils/format';
import { isDesktop } from '~/utils/consts';

import edit from '~/assets/img/edit-alt-icon.png';
import trash from '~/assets/img/delete-icon.png';
import check from '~/assets/img/check-alt-icon.png';
import sort from '~/assets/img/sort-icon.png';
import currency from '~/assets/img/currency-icon.png';

interface Item {
	type: 'Despesa' | 'Receita';
	monthyear: string;
	datetime: string;
	description: string;
	category: string;
	account: string;
	value: number;
	danger: boolean;
}

const data: Item[] = [
	{
		type: 'Despesa',
		monthyear: '09/2020',
		datetime: '01/09/2020',
		description: 'Internet',
		category: 'Despesas de Casa',
		account: 'Bradesco',
		value: 250,
		danger: true,
	},
	{
		type: 'Despesa',
		monthyear: '08/2020',
		datetime: '28/08/2020',
		description: 'Curso de Inglês',
		category: 'Estudos',
		account: 'Bradesco',
		value: 344,
		danger: false,
	},
	{
		type: 'Receita',
		monthyear: '08/2020',
		datetime: '27/08/2020',
		description: 'Salário',
		category: 'Receita Principal',
		account: 'Bradesco',
		value: 7850,
		danger: false,
	},
	{
		type: 'Receita',
		monthyear: '08/2020',
		datetime: '27/08/2020',
		description: 'Salário',
		category: 'Receita Principal',
		account: 'Itaú',
		value: 7850,
		danger: true,
	},
];

const Expenses: React.FC = () => {
	const formattedData = useMemo(() => {
		return data.map((item) => ({
			...item,
			formattedValue: formatMoney(item.value),
		}));
	}, []);

	return (
		<Container>
			<ExpensesRevenueReports />

			<ScrollContainer
				style={{ marginBottom: 0 }}
				contentContainerStyle={
					isDesktop && {
						justifyContent: 'flex-end',
						maxWidth: 1368,
						width: '100%',
					}
				}
			>
				<CardButton
					iconSource={currency}
					text="Adicionar Despesa"
					style={{ marginRight: 10 }}
				/>
				<CardButton iconSource={currency} text="Adicionar Receita" />
			</ScrollContainer>

			<Table>
				<TableRow>
					<TableHead>
						<Row>
							<TableHeadText>Tipo</TableHeadText>
							<TouchableOpacity>
								<TableIcon source={sort} style={{ marginLeft: 8 }} />
							</TouchableOpacity>
						</Row>
					</TableHead>
					<TableHead>
						<Row>
							<TableHeadText>Mês/Ano</TableHeadText>
							<TouchableOpacity>
								<TableIcon source={sort} style={{ marginLeft: 8 }} />
							</TouchableOpacity>
						</Row>
					</TableHead>
					<TableHead>
						<Row>
							<TableHeadText>Situação</TableHeadText>
							<TouchableOpacity>
								<TableIcon source={sort} style={{ marginLeft: 8 }} />
							</TouchableOpacity>
						</Row>
					</TableHead>
					<TableHead width={120}>
						<Row>
							<TableHeadText>Data</TableHeadText>
							<TouchableOpacity>
								<TableIcon source={sort} style={{ marginLeft: 8 }} />
							</TouchableOpacity>
						</Row>
					</TableHead>
					<TableHead>
						<TableHeadText>Descrição</TableHeadText>
					</TableHead>
					<TableHead width={200}>
						<TableHeadText>Categoria</TableHeadText>
					</TableHead>
					<TableHead>
						<Row>
							<TableHeadText>Conta</TableHeadText>

							<TouchableOpacity>
								<TableIcon source={sort} style={{ marginLeft: 8 }} />
							</TouchableOpacity>
						</Row>
					</TableHead>
					<TableHead>
						<Row>
							<TableHeadText>Valor</TableHeadText>
							<TouchableOpacity>
								<TableIcon source={sort} style={{ marginLeft: 8 }} />
							</TouchableOpacity>
						</Row>
					</TableHead>
					<TableHead width={100}>
						<TableHeadText>Ações</TableHeadText>
					</TableHead>
				</TableRow>

				{formattedData.map((item, index) => (
					<TableRow key={index}>
						<TableColumn>
							<TableColumnText danger={item.danger}>
								{item.type}
							</TableColumnText>
						</TableColumn>
						<TableColumn>
							<TableColumnText danger={item.danger}>
								{item.monthyear}
							</TableColumnText>
						</TableColumn>
						<TableColumn>
							<Situation danger={item.danger}>
								{item.danger ? 'Em Atraso' : 'Em Dia'}
							</Situation>
						</TableColumn>
						<TableColumn width={120}>
							<TableColumnText danger={item.danger}>
								{item.datetime}
							</TableColumnText>
						</TableColumn>
						<TableColumn>
							<TableColumnText danger={item.danger}>
								{item.description}
							</TableColumnText>
						</TableColumn>
						<TableColumn width={200}>
							<TableColumnText danger={item.danger}>
								{item.category}
							</TableColumnText>
						</TableColumn>
						<TableColumn>
							<TableColumnText danger={item.danger}>
								{item.account}
							</TableColumnText>
						</TableColumn>
						<TableColumn>
							<TableColumnText danger={item.danger}>
								{item.formattedValue}
							</TableColumnText>
						</TableColumn>
						<TableColumn width={100}>
							<Row>
								<TableIcon source={edit} />
								<TableIcon source={trash} style={{ marginLeft: 8 }} />
								{item.danger && (
									<TableIcon source={check} style={{ marginLeft: 8 }} />
								)}
							</Row>
						</TableColumn>
					</TableRow>
				))}
			</Table>
		</Container>
	);
};

export default Expenses;
