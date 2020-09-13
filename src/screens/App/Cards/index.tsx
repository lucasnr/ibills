import React from 'react';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import Container from '~/components/AppScreenContainer';
import ScrollContainer from '~/components/ScrollContainer';
import {
	Card,
	CardContainer,
	CardIcon,
	CardText,
	CardButton,
	CardTitle,
	CardLabel,
} from '~/components/Card';
import Subtitle from '~/components/Subtitle';
import Input from '~/components/Input';
import Select from '~/components/Select';
import Row, { RowCol } from '~/components/Row';

import {
	BankRow,
	Status,
	StatusDate,
	Text,
	Value,
	ProgressBar,
	Progress,
	ProgressLabel,
} from './styles';

import bradesco from '~/assets/img/logo-bradesco.png';
import itau from '~/assets/img/logo-itau.png';
import visa from '~/assets/img/logo-visa.png';
import cash from '~/assets/img/cash.png';
import save from '~/assets/img/save-icon.png';
import currency from '~/assets/img/currency-icon.png';
import cashSymbol from '~/assets/img/cash-symbol-icon.png';
import moneyBag from '~/assets/img/moneybag-icon.png';

const Cards: React.FC = () => {
	return (
		<Container>
			<ScrollContainer>
				<CardContainer>
					<Subtitle text="Limite Total" />
					<Card row>
						<CardIcon source={bradesco} />
						<CardText>R$14.000,00</CardText>
					</Card>
				</CardContainer>

				<CardContainer>
					<Subtitle text="Melhor Data para Compras" />
					<Card row>
						<CardIcon source={bradesco} />
						<CardText>Todo dia 02</CardText>
					</Card>
				</CardContainer>

				<CardContainer>
					<Subtitle text="Limite Total" />
					<Card row>
						<CardIcon source={itau} />
						<CardText>R$14.000,00</CardText>
					</Card>
				</CardContainer>

				<CardContainer>
					<Subtitle text="Melhor Data para Compras" />
					<Card row>
						<CardIcon source={itau} />
						<CardText>Todo dia 02</CardText>
					</Card>
				</CardContainer>
			</ScrollContainer>

			<ScrollContainer>
				<CardContainer>
					<Card style={{ minWidth: 300 }}>
						<Row>
							<CardIcon source={visa} size={24} />
							<CardTitle>Banco Bradesco</CardTitle>
						</Row>

						<BankRow>
							<Status>Fatura Aberta</Status>
							<StatusDate>Fecha em 01/09/2020</StatusDate>
						</BankRow>

						<BankRow>
							<CardIcon source={cashSymbol} />
							<Text>Valor Gasto</Text>
							<Value>R$ 2.300,00</Value>
						</BankRow>

						<BankRow>
							<CardIcon source={moneyBag} />
							<Text>Limite Disponível</Text>
							<Value>R$ 11.700,00</Value>
						</BankRow>

						<ProgressBar>
							<Progress progress={16.42} />
						</ProgressBar>
						<ProgressLabel>16,42%</ProgressLabel>

						<TouchableOpacity>
							<Row>
								<Text>Ver Fatura Detalhada</Text>
								<Icon name="arrow-right" color="#be63f9" size={16} />
							</Row>
						</TouchableOpacity>

						<CardButton iconSource={currency} text="Adicionar Despesas" />
					</Card>
				</CardContainer>

				<CardContainer>
					<Card style={{ minWidth: 300 }}>
						<Row>
							<CardIcon source={visa} size={24} />
							<CardTitle>Banco Itau</CardTitle>
						</Row>

						<BankRow>
							<Status>Fatura Aberta</Status>
							<StatusDate>Fecha em 01/09/2020</StatusDate>
						</BankRow>

						<BankRow>
							<CardIcon source={cashSymbol} />
							<Text>Valor Gasto</Text>
							<Value>R$ 2.300,00</Value>
						</BankRow>

						<BankRow>
							<CardIcon source={moneyBag} />
							<Text>Limite Disponível</Text>
							<Value>R$ 11.700,00</Value>
						</BankRow>

						<ProgressBar>
							<Progress progress={44.5} />
						</ProgressBar>
						<ProgressLabel>44,50%</ProgressLabel>

						<TouchableOpacity>
							<Row>
								<Text>Ver Fatura Detalhada</Text>
								<Icon name="arrow-right" color="#be63f9" size={16} />
							</Row>
						</TouchableOpacity>

						<CardButton iconSource={currency} text="Adicionar Despesas" />
					</Card>
				</CardContainer>
			</ScrollContainer>

			<Card style={{ width: '100%' }}>
				<CardTitle>Adicionar Novo Cartão</CardTitle>

				<Row cols>
					<RowCol>
						<CardLabel>Limite</CardLabel>
						<Input />
					</RowCol>

					<RowCol>
						<CardLabel>Vencimento da Fatura</CardLabel>
						<Input />
					</RowCol>
				</Row>

				<Row cols>
					<RowCol>
						<CardLabel>Emissora do Cartão</CardLabel>
						<Select options={['Visa', 'Mastercard']} />
					</RowCol>

					<RowCol>
						<CardLabel>Fechamento da Fatura</CardLabel>
						<Input />
					</RowCol>
				</Row>

				<Row cols>
					<RowCol>
						<CardLabel>Descrição do Cartão</CardLabel>
						<Input />
					</RowCol>

					<RowCol>
						<CardLabel>Debitar Lançamentos</CardLabel>
						<Select options={['Carteira']} />
					</RowCol>
				</Row>

				<Row style={{ marginTop: 20 }}>
					<CardIcon source={cash} size={36} />
					<CardButton
						iconSource={save}
						text="Salvar e adicionar"
						style={{ marginTop: 0, marginLeft: 'auto' }}
					/>
				</Row>
			</Card>
		</Container>
	);
};

export default Cards;
