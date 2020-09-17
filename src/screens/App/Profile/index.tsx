import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import Container from '~/components/AppScreenContainer';
import ScrollContainer from '~/components/ScrollContainer';
import Row, { RowCol } from '~/components/Row';
import Input from '~/components/Input';
import Select from '~/components/Select';
import {
	CardContainer,
	CardButton,
	CardLabel,
	CardTitle,
} from '~/components/Card';

import FormsContainer from './FormsContainer';
import {
	Avatar,
	AvatarButton,
	AvatarButtonText,
	Name,
	Form,
	ProfileIllustration,
} from './styles';

import { isDesktop } from '~/utils/consts';

import user from '~/assets/img/user.png';
import edit from '~/assets/img/edit-icon.png';

const Profile: React.FC = () => {
	return (
		<Container>
			<Row desktopOnly style={{ alignItems: 'flex-start' }}>
				<View>
					<Row>
						<Avatar source={user} />
						{!isDesktop && (
							<AvatarButton>
								<Row>
									<Icon name="paperclip" size={16} color="#26C6DA" />
									<AvatarButtonText>Trocar Imagem</AvatarButtonText>
								</Row>
							</AvatarButton>
						)}
					</Row>

					<Name>Marcos P.</Name>
				</View>

				<ScrollContainer mobileOnly>
					<FormsContainer>
						<CardContainer>
							<Form>
								<CardTitle>Informações Gerais</CardTitle>

								<Row cols desktopOnly>
									<RowCol desktopOnly>
										<CardLabel>Nome Completo</CardLabel>
										<Input
											autoCompleteType="name"
											textContentType="name"
											placeholder="Nome Completo"
										/>
									</RowCol>

									<RowCol desktopOnly>
										<CardLabel>Sexo</CardLabel>
										<Select
											placeholder="Sexo"
											options={['Masculino', 'Feminino', 'Outro']}
										/>
									</RowCol>
								</Row>

								<Row cols desktopOnly>
									<RowCol desktopOnly>
										<CardLabel>Data de Nascimento</CardLabel>
										<Input
											options={{
												format: 'DD/MM/YYYY',
											}}
											maskType="datetime"
											placeholder="Data de Nascimento"
										/>
									</RowCol>

									<RowCol desktopOnly>
										<CardLabel>Telefone</CardLabel>
										<Input
											maskType="cel-phone"
											keyboardType="phone-pad"
											autoCompleteType="tel"
											placeholder="Telefone"
										/>
									</RowCol>
								</Row>

								<Row cols desktopOnly>
									<RowCol desktopOnly>
										<CardLabel>Nacionalidade</CardLabel>
										<Select
											placeholder="Nacionalidade"
											options={['Brasileiro', 'Estrangeiro', 'Naturalizado']}
										/>
									</RowCol>

									<RowCol desktopOnly>
										<CardLabel>CPF</CardLabel>
										<Input maskType={'cpf'} placeholder="CPF" />
									</RowCol>
								</Row>

								<Row cols desktopOnly>
									<RowCol desktopOnly>
										<CardLabel>CEP</CardLabel>
										<Input
											maskType="custom"
											options={{
												mask: '99999-999',
											}}
											keyboardType="number-pad"
											placeholder="CEP"
										/>
									</RowCol>
									<RowCol desktopOnly>
										<CardLabel>Objetivo Financeiro</CardLabel>
										<Select
											options={['Objetivo 1', 'Objetivo 2']}
											placeholder="Objetivo Financeiro"
										/>
									</RowCol>
								</Row>

								<CardButton iconSource={edit} text="Editar Dados" />
							</Form>
						</CardContainer>

						<CardContainer>
							<Form>
								<CardTitle>Informações Financeiras</CardTitle>

								<Row cols desktopOnly>
									<RowCol desktopOnly>
										<CardLabel>Qual seu tipo de moradia?</CardLabel>
										<Select
											placeholder="Tipo de moradia"
											options={['Casa Própria', 'Apartamento', 'Casa Alugada']}
										/>
									</RowCol>

									<RowCol desktopOnly>
										<CardLabel>
											Quantos cartões de crédito você possui?
										</CardLabel>
										<Input
											maskType="only-numbers"
											keyboardType="number-pad"
											placeholder="Número de cartões de crédito"
										/>
									</RowCol>
								</Row>

								<Row cols desktopOnly>
									<RowCol desktopOnly>
										<CardLabel>Qual tipo de veículo?</CardLabel>
										<Input placeholder="Tipo de veiculo" />
									</RowCol>
									<RowCol desktopOnly>
										<CardLabel>Quantas pessoas moram com você?</CardLabel>
										<Input
											maskType="only-numbers"
											keyboardType="number-pad"
											placeholder="Quantidade de pessoas"
										/>
									</RowCol>
								</Row>

								<Row cols desktopOnly style={{ marginBottom: 'auto' }}>
									<RowCol desktopOnly style={{ maxWidth: '50%' }}>
										<CardLabel>Possui veículo próprio?</CardLabel>
										<Select
											placeholder="Possui veiculo?"
											options={['Sim', 'Não']}
										/>
									</RowCol>
								</Row>

								<CardButton iconSource={edit} text="Editar Dados" />
							</Form>
						</CardContainer>

						<CardContainer>
							<Form>
								<CardTitle>Informações Profissionais</CardTitle>

								<Row cols desktopOnly>
									<RowCol desktopOnly>
										<CardLabel>Escolaridade</CardLabel>
										<Select
											placeholder="Escolaridade"
											options={[
												'Nivel Médio Incompleto',
												'Nivel Médio Completo',
												'Nivel Superior Incompleto',
												'Nivel Superior Completo',
											]}
										/>
									</RowCol>

									<RowCol desktopOnly>
										<CardLabel>Profissão</CardLabel>
										<Select
											placeholder="Profissão"
											options={[
												'Administrador',
												'Advogado',
												'Engenheiro',
												'Médico',
											]}
										/>
									</RowCol>
								</Row>

								<Row cols desktopOnly>
									<RowCol desktopOnly>
										<CardLabel>Relação de Emprego</CardLabel>
										<Select
											placeholder="Relação de Emprego"
											options={['Estágio', 'CLT', 'PJ']}
										/>
									</RowCol>

									<RowCol desktopOnly>
										<CardLabel>Faixa de Renda Mensal</CardLabel>
										<Select
											placeholder="Faixa de Renda Mensal"
											options={[
												'Menos que 1 salário mínimo',
												'Entre 1 e 3 salários mínimos',
												'Mais que 3 salários mínimos',
											]}
										/>
									</RowCol>
								</Row>

								<CardButton iconSource={edit} text="Editar Dados" />
							</Form>
						</CardContainer>

						{isDesktop && <ProfileIllustration />}
					</FormsContainer>
				</ScrollContainer>
			</Row>
		</Container>
	);
};

export default Profile;
