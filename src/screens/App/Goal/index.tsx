import React from 'react';

import Container from '~/components/AppScreenContainer';
import ScrollContainer from '~/components/ScrollContainer';
import Subtitle from '~/components/Subtitle';
import GoalPercentage from '~/components/DashboardReports/GoalPercentage';
import Row, { RowCol } from '~/components/Row';
import {
	Card,
	CardContainer,
	CardTitle,
	CardLabel,
	CardIcon,
	CardButton,
} from '~/components/Card';
import {
	Table,
	TableRow,
	TableHead,
	TableHeadText,
	TableColumn,
	TableColumnText,
	TableIcon,
} from '~/components/Table';
import Select from '~/components/Select';
import Input from '~/components/Input';
import { GoalsContainer, GoalForm } from './WebComponents';
import { Legend, LegendText } from './styles';

import { isDesktop } from '~/utils/consts';

import target from '~/assets/img/target-icon.png';
import save from '~/assets/img/save-icon.png';
import pause from '~/assets/img/actions/pause-icon.png';
import edit from '~/assets/img/actions/edit-icon.png';
import trash from '~/assets/img/actions/delete-icon.png';
import check from '~/assets/img/actions/check-icon.png';
import search from '~/assets/img/actions/search-icon.png';
import coins from '~/assets/img/coins-icon.png';
import moneyBag from '~/assets/img/moneybag-alt-icon.png';
import calendar from '~/assets/img/calendar-icon.png';
import editBtn from '~/assets/img/edit-icon.png';
import trashBtn from '~/assets/img/trash-icon.png';

const Goal: React.FC = () => {
	return (
		<Container
			style={
				isDesktop && {
					flexDirection: 'row',
					flexWrap: 'wrap',
				}
			}
		>
			<GoalsContainer>
				<ScrollContainer>
					<CardContainer>
						<Subtitle text="Porcentual do Objetivo: Quitar Dívidas" />
						<Card>
							<Row>
								<GoalPercentage percentage={58} />

								<Legend>
									<Row>
										<CardIcon source={coins} />
										<LegendText danger>Valor Atual: R$8.700,00</LegendText>
									</Row>
									<Row>
										<CardIcon source={moneyBag} />
										<LegendText>Valor Final: R$15.000,00</LegendText>
									</Row>
									<Row>
										<CardIcon source={calendar} />
										<LegendText>Data: 10/10/2020</LegendText>
									</Row>
								</Legend>
							</Row>

							<Row style={{ justifyContent: 'flex-end' }}>
								<CardButton
									iconSource={editBtn}
									text="Editar"
									style={{ marginRight: 8 }}
								/>
								<CardButton iconSource={trashBtn} text="Excluir" />
							</Row>
						</Card>
					</CardContainer>

					<CardContainer>
						<Subtitle text="Porcentual do Objetivo: Festa de Casamento" />
						<Card>
							<Row>
								<GoalPercentage
									percentage={25}
									color="#BE63F9"
									background="#f4e3ff"
								/>

								<Legend>
									<Row>
										<CardIcon source={coins} />
										<LegendText danger>Valor Atual: R$10.500,00</LegendText>
									</Row>
									<Row>
										<CardIcon source={moneyBag} />
										<LegendText>Valor Final: R$42.000,00</LegendText>
									</Row>
									<Row>
										<CardIcon source={calendar} />
										<LegendText>Data: 07/07/2022</LegendText>
									</Row>
								</Legend>
							</Row>

							<Row style={{ justifyContent: 'flex-end' }}>
								<CardButton
									iconSource={editBtn}
									text="Editar"
									style={{ marginRight: 8 }}
								/>
								<CardButton iconSource={trashBtn} text="Excluir" />
							</Row>
						</Card>
					</CardContainer>

					<CardContainer>
						<Subtitle text="Porcentual do Objetivo: Quitar Dívidas" />
						<Card>
							<Row>
								<GoalPercentage percentage={58} />

								<Legend>
									<Row>
										<CardIcon source={coins} />
										<LegendText danger>Valor Atual: R$8.700,00</LegendText>
									</Row>
									<Row>
										<CardIcon source={moneyBag} />
										<LegendText>Valor Final: R$15.000,00</LegendText>
									</Row>
									<Row>
										<CardIcon source={calendar} />
										<LegendText>Data: 10/10/2020</LegendText>
									</Row>
								</Legend>
							</Row>

							<Row style={{ justifyContent: 'flex-end' }}>
								<CardButton
									iconSource={editBtn}
									text="Editar"
									style={{ marginRight: 8 }}
								/>
								<CardButton iconSource={trashBtn} text="Excluir" />
							</Row>
						</Card>
					</CardContainer>
				</ScrollContainer>
			</GoalsContainer>

			<Table>
				<TableRow>
					<TableHead width={200}>
						<TableHeadText>Objetivo</TableHeadText>
					</TableHead>
					<TableHead width={420}>
						<TableHeadText>Descrição</TableHeadText>
					</TableHead>
					<TableHead>
						<TableHeadText>Valor</TableHeadText>
					</TableHead>
					<TableHead>
						<TableHeadText>Data</TableHeadText>
					</TableHead>
					<TableHead>
						<TableHeadText>Ações</TableHeadText>
					</TableHead>
				</TableRow>

				<TableRow>
					<TableColumn width={200}>
						<TableColumnText>Quitar Dívidas</TableColumnText>
					</TableColumn>
					<TableColumn width={420}>
						<TableColumnText>
							Empréstimo com o banco Lorem Ipsum
						</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>R$ 15.000,00</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>10/2020</TableColumnText>
					</TableColumn>
					<TableColumn>
						<Row>
							<TableIcon source={pause} />
							<TableIcon source={edit} style={{ marginLeft: 5 }} />
							<TableIcon source={trash} style={{ marginLeft: 5 }} />
							<TableIcon source={check} style={{ marginLeft: 5 }} />
							<TableIcon source={search} style={{ marginLeft: 5 }} />
						</Row>
					</TableColumn>
				</TableRow>

				<TableRow>
					<TableColumn width={200}>
						<TableColumnText>Festa de Casamento</TableColumnText>
					</TableColumn>
					<TableColumn width={420}>
						<TableColumnText>-</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>R$ 42.000,00</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>07/2022</TableColumnText>
					</TableColumn>
					<TableColumn>
						<Row>
							<TableIcon source={pause} />
							<TableIcon source={edit} style={{ marginLeft: 5 }} />
							<TableIcon source={trash} style={{ marginLeft: 5 }} />
							<TableIcon source={check} style={{ marginLeft: 5 }} />
							<TableIcon source={search} style={{ marginLeft: 5 }} />
						</Row>
					</TableColumn>
				</TableRow>

				<TableRow>
					<TableColumn width={200}>
						<TableColumnText>Lua de Mel</TableColumnText>
					</TableColumn>
					<TableColumn width={420}>
						<TableColumnText>Viagem</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>R$ 27.000,00</TableColumnText>
					</TableColumn>
					<TableColumn>
						<TableColumnText>07/2022</TableColumnText>
					</TableColumn>
					<TableColumn>
						<Row>
							<TableIcon source={pause} />
							<TableIcon source={edit} style={{ marginLeft: 5 }} />
							<TableIcon source={trash} style={{ marginLeft: 5 }} />
							<TableIcon source={check} style={{ marginLeft: 5 }} />
							<TableIcon source={search} style={{ marginLeft: 5 }} />
						</Row>
					</TableColumn>
				</TableRow>
			</Table>

			<GoalForm>
				<Card style={{ width: '100%', marginTop: 20 }}>
					<CardTitle>Adicionar Novo Objetivo</CardTitle>
					<Row cols>
						<RowCol>
							<CardLabel>Qual seu objetivo?</CardLabel>
							<Select options={['Objetivo 1', 'Objetivo 2']} />
						</RowCol>

						<RowCol>
							<CardLabel>Descrição do Objetivo</CardLabel>
							<Input />
						</RowCol>
					</Row>

					<Row cols>
						<RowCol>
							<CardLabel>Valor Final</CardLabel>
							<Input />
						</RowCol>

						<RowCol>
							<CardLabel>Data</CardLabel>
							<Input
								options={{
									format: 'DD/MM/YYYY',
								}}
								maskType="datetime"
							/>
						</RowCol>
					</Row>

					<Row style={{ marginTop: 20, justifyContent: 'space-between' }}>
						<CardIcon source={target} size={36} />
						<CardButton
							style={{ marginTop: 0 }}
							iconSource={save}
							text="Salvar e adicionar"
						/>
					</Row>
				</Card>
			</GoalForm>
		</Container>
	);
};

export default Goal;
