import React from 'react';
import { View } from 'react-native';

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
import Row from '~/components/Row';

import {
	Account,
	Description,
	Value,
	AccountRow,
	AccountFooter,
} from './styles';

import bank from '~/assets/img/bank-icon.png';
import cashSymbol from '~/assets/img/cash-symbol-icon.png';
import cashClock from '~/assets/img/cash-clock-icon.png';
import wallet from '~/assets/img/wallet-icon.png';
import walletAlt from '~/assets/img/wallet-alt-icon.png';
import save from '~/assets/img/save-icon.png';
import currency from '~/assets/img/currency-icon.png';
import cashEdit from '~/assets/img/cash-edit-icon.png';

const Accounts: React.FC = () => {
	return (
		<Container>
			<ScrollContainer>
				<CardContainer>
					<Subtitle text="Saldo Atual" />
					<Card row>
						<CardIcon source={cashSymbol} />
						<CardText>R$9.000,00</CardText>
					</Card>
				</CardContainer>

				<CardContainer>
					<Subtitle text="Saldo Previsto" />
					<Card row>
						<CardIcon source={cashClock} />
						<CardText>R$11.000,00</CardText>
					</Card>
				</CardContainer>

				<CardContainer>
					<Subtitle text="Carteira" />
					<Card row>
						<CardIcon source={wallet} />
						<CardText>R$4.000,00</CardText>
					</Card>
				</CardContainer>
			</ScrollContainer>

			<ScrollContainer>
				<View>
					<Account>
						<Row>
							<CardIcon source={bank} />
							<CardTitle>Banco Lorem Ipsum</CardTitle>
						</Row>

						<AccountRow>
							<CardIcon source={cashSymbol} />
							<Description>Saldo Atual</Description>
							<Value>R$7.500,00</Value>
						</AccountRow>

						<AccountRow>
							<CardIcon source={cashClock} />
							<Description>Saldo Previsto</Description>
							<Value>R$7.500,00</Value>
						</AccountRow>

						<AccountFooter>
							<CardButton
								iconSource={currency}
								text="Adicionar Despesa"
								style={{ marginRight: 10 }}
							/>
							<CardButton iconSource={cashEdit} text="Ajustar Saldo" />
						</AccountFooter>
					</Account>

					<Account>
						<Row>
							<CardIcon source={bank} />
							<CardTitle>Banco Lorem Ipsum</CardTitle>
						</Row>

						<AccountRow>
							<CardIcon source={cashSymbol} />
							<Description>Saldo Atual</Description>
							<Value>R$7.500,00</Value>
						</AccountRow>

						<AccountRow>
							<CardIcon source={cashClock} />
							<Description>Saldo Previsto</Description>
							<Value>R$7.500,00</Value>
						</AccountRow>

						<AccountFooter>
							<CardButton
								iconSource={currency}
								text="Adicionar Despesa"
								style={{ marginRight: 10 }}
							/>
							<CardButton iconSource={cashEdit} text="Ajustar Saldo" />
						</AccountFooter>
					</Account>
				</View>

				<Card style={{ width: 240, marginLeft: 20 }}>
					<CardTitle>Adicionar Nova Conta</CardTitle>

					<CardLabel>Instituição Financeira</CardLabel>
					<Input />

					<CardLabel>Saldo</CardLabel>
					<Input />

					<CardLabel>Tipo de Conta</CardLabel>
					<Input />

					<CardLabel>Descrição da Conta</CardLabel>
					<Input />

					<AccountRow>
						<CardIcon size={32} source={walletAlt} />
						<CardButton
							iconSource={save}
							text="Salvar e adicionar"
							style={{ marginTop: 0, marginLeft: 'auto' }}
						/>
					</AccountRow>
				</Card>
			</ScrollContainer>
		</Container>
	);
};

export default Accounts;
