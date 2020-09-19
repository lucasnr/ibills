import React, { useState, useCallback } from 'react';
import { View } from 'react-native';

import Container from '~/components/AppScreenContainer';
import Subtitle from '~/components/Subtitle';
import Row from '~/components/Row';
import { Card, CardContainer, CardButton } from '~/components/Card';
import {
	Table,
	TableRow,
	TableHead,
	TableHeadText,
	TableColumn,
	TableColumnText,
	TableIcon,
} from '~/components/Table';

import {
	Header,
	Description,
	Timestamp,
	ImageIcon,
	CardButtonAlt,
	CardButtonAltText,
	SignatureIllustration,
} from './styles';

import { isDesktop } from '~/utils/consts';

import glasshour from '~/assets/img/glasshour-icon.png';
import reload from '~/assets/img/reload-icon.png';
import check from '~/assets/img/check-icon.png';
import clock from '~/assets/img/clock-icon.png';
import close from '~/assets/img/window-close.png';

const Signature: React.FC = () => {
	const [valid, setValid] = useState(false);
	const onPress = useCallback(() => {
		setValid((prev) => !prev);
	}, []);

	return (
		<Container>
			<Row desktopOnly style={{ alignItems: 'flex-start' }}>
				<CardContainer>
					<Subtitle text={valid ? 'Assinatura Ativa' : 'Assinatura Inativa'} />
					<Card style={{ minWidth: 205 }}>
						<Header>
							<ImageIcon size={22} source={glasshour} />
							<View>
								{valid ? (
									<>
										<Description>Sua assinatura expira em</Description>
										<Timestamp>29 de setembro de 2020.</Timestamp>
									</>
								) : (
									<>
										<Description>Sua assinatura expirou em</Description>
										<Timestamp>08 de agosto de 2020.</Timestamp>
									</>
								)}
							</View>
						</Header>

						{valid ? (
							<CardButton
								iconSource={close}
								text="Cancelar Assinatura"
								style={{ marginTop: 0, width: '100%' }}
								onPress={onPress}
							/>
						) : (
							<CardButtonAlt activeOpacity={0.7} onPress={onPress}>
								<ImageIcon size={12} source={reload} />
								<CardButtonAltText>Renovar Assinatura</CardButtonAltText>
							</CardButtonAlt>
						)}
					</Card>
				</CardContainer>

				<Table style={isDesktop && { marginTop: 0 }}>
					<TableRow>
						<TableHead>
							<TableHeadText>Id</TableHeadText>
						</TableHead>
						<TableHead>
							<TableHeadText>Data</TableHeadText>
						</TableHead>
						<TableHead>
							<TableHeadText>Status</TableHeadText>
						</TableHead>
						<TableHead>
							<TableHeadText>Valor</TableHeadText>
						</TableHead>
						<TableHead>
							<TableHeadText>Plano</TableHeadText>
						</TableHead>
						<TableHead width={200}>
							<TableHeadText>Forma de Pagamento</TableHeadText>
						</TableHead>
					</TableRow>

					<TableRow>
						<TableColumn>
							<TableColumnText>227079617</TableColumnText>
						</TableColumn>
						<TableColumn>
							<TableColumnText>12/08/2020</TableColumnText>
						</TableColumn>
						<TableColumn>
							<TableIcon source={check} />
						</TableColumn>
						<TableColumn>
							<TableColumnText>R$ 14,90</TableColumnText>
						</TableColumn>
						<TableColumn></TableColumn>
						<TableColumn width={200}>
							<TableColumnText>Cartão de Crédito</TableColumnText>
						</TableColumn>
					</TableRow>

					<TableRow>
						<TableColumn>
							<TableColumnText>227079617</TableColumnText>
						</TableColumn>
						<TableColumn>
							<TableColumnText>12/08/2020</TableColumnText>
						</TableColumn>
						<TableColumn>
							<TableIcon source={check} />
						</TableColumn>
						<TableColumn>
							<TableColumnText>R$ 14,90</TableColumnText>
						</TableColumn>
						<TableColumn></TableColumn>
						<TableColumn width={200}>
							<TableColumnText>Cartão de Crédito</TableColumnText>
						</TableColumn>
					</TableRow>

					<TableRow>
						<TableColumn>
							<TableColumnText>227079617</TableColumnText>
						</TableColumn>
						<TableColumn>
							<TableColumnText>12/08/2020</TableColumnText>
						</TableColumn>
						<TableColumn>
							<TableIcon source={clock} />
						</TableColumn>
						<TableColumn>
							<TableColumnText>R$ 14,90</TableColumnText>
						</TableColumn>
						<TableColumn></TableColumn>
						<TableColumn width={200}>
							<TableColumnText>Boleto</TableColumnText>
						</TableColumn>
					</TableRow>
				</Table>
			</Row>

			{isDesktop && <SignatureIllustration />}
		</Container>
	);
};

export default Signature;
