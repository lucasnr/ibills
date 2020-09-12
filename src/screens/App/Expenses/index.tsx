import React from 'react';

import Container from '~/components/AppScreenContainer';
import {
	Table,
	TableRow,
	TableHead,
	TableHeadText,
	TableColumn,
	TableColumnText,
	TableIcon,
} from '~/components/Table';

const Expenses: React.FC = () => {
	return (
		<Container>
			<Table>
				<TableRow>
					<TableHead>
						<TableHeadText>Tipo</TableHeadText>
					</TableHead>
					<TableHead>
						<TableHeadText>Mês/Ano</TableHeadText>
					</TableHead>
					<TableHead>
						<TableHeadText>Situação</TableHeadText>
					</TableHead>
					<TableHead>
						<TableHeadText>Data</TableHeadText>
					</TableHead>
					<TableHead>
						<TableHeadText>Descrição</TableHeadText>
					</TableHead>
					<TableHead width={200}>
						<TableHeadText>Categoria</TableHeadText>
					</TableHead>
					<TableHead>
						<TableHeadText>Conta</TableHeadText>
					</TableHead>
					<TableHead>
						<TableHeadText>Valor</TableHeadText>
					</TableHead>
					<TableHead>
						<TableHeadText>Ações</TableHeadText>
					</TableHead>
				</TableRow>

				<TableRow>
					<TableColumn>
						<TableColumnText>Despesa</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>09/2020</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>Em Atraso</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>01/09/2020</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>Internet</TableColumnText>
					</TableColumn>
					<TableColumn width={200}>
						<TableColumnText>Despesas de Casa</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>Bradesco</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>R$250,00</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>Cartão de Crédito</TableColumnText>
					</TableColumn>
				</TableRow>

				<TableRow>
					<TableColumn>
						<TableColumnText>Despesa</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>09/2020</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>Em Atraso</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>01/09/2020</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>Internet</TableColumnText>
					</TableColumn>
					<TableColumn width={200}>
						<TableColumnText>Despesas de Casa</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>Bradesco</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>R$250,00</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>Cartão de Crédito</TableColumnText>
					</TableColumn>
				</TableRow>

				<TableRow>
					<TableColumn>
						<TableColumnText>Despesa</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>09/2020</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>Em Atraso</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>01/09/2020</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>Internet</TableColumnText>
					</TableColumn>
					<TableColumn width={200}>
						<TableColumnText>Despesas de Casa</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>Bradesco</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>R$250,00</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>Cartão de Crédito</TableColumnText>
					</TableColumn>
				</TableRow>

				<TableRow>
					<TableColumn>
						<TableColumnText>Despesa</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>09/2020</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>Em Atraso</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>01/09/2020</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>Internet</TableColumnText>
					</TableColumn>
					<TableColumn width={200}>
						<TableColumnText>Despesas de Casa</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>Bradesco</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>R$250,00</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>Cartão de Crédito</TableColumnText>
					</TableColumn>
				</TableRow>

				<TableRow>
					<TableColumn>
						<TableColumnText>Despesa</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>09/2020</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>Em Atraso</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>01/09/2020</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>Internet</TableColumnText>
					</TableColumn>
					<TableColumn width={200}>
						<TableColumnText>Despesas de Casa</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>Bradesco</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>R$250,00</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>Cartão de Crédito</TableColumnText>
					</TableColumn>
				</TableRow>

				<TableRow>
					<TableColumn>
						<TableColumnText>Despesa</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>09/2020</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>Em Atraso</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>01/09/2020</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>Internet</TableColumnText>
					</TableColumn>
					<TableColumn width={200}>
						<TableColumnText>Despesas de Casa</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>Bradesco</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>R$250,00</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>Cartão de Crédito</TableColumnText>
					</TableColumn>
				</TableRow>

				<TableRow>
					<TableColumn>
						<TableColumnText>Despesa</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>09/2020</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>Em Atraso</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>01/09/2020</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>Internet</TableColumnText>
					</TableColumn>
					<TableColumn width={200}>
						<TableColumnText>Despesas de Casa</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>Bradesco</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>R$250,00</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>Cartão de Crédito</TableColumnText>
					</TableColumn>
				</TableRow>
			</Table>
		</Container>
	);
};

export default Expenses;
