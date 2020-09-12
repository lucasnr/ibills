import React from 'react';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import Container from '~/components/AppScreenContainer';
import ScrollContainer from '~/components/ScrollContainer';
import Row from '~/components/Row';
import Input from '~/components/Input';
import Select from '~/components/Select';
import { CardButton, CardLabel, CardTitle } from '~/components/Card';

import { Avatar, AvatarButton, AvatarButtonText, Name, Form } from './styles';

import user from '~/assets/img/user.png';
import edit from '~/assets/img/edit-icon.png';

const Profile: React.FC = () => {
	return (
		<Container>
			<Row>
				<Avatar source={user} />
				<AvatarButton>
					<Row>
						<Icon name="paperclip" size={16} color="#26C6DA" />
						<AvatarButtonText>Trocar Imagem</AvatarButtonText>
					</Row>
				</AvatarButton>
			</Row>

			<Name>Marcos P.</Name>

			<ScrollContainer>
				<Form>
					<CardTitle>Informações Gerais</CardTitle>

					<CardLabel>Nome Completo</CardLabel>
					<Input
						autoCompleteType="name"
						textContentType="name"
						placeholder="Nome Completo"
					/>

					<CardLabel>Sexo</CardLabel>
					<Select
						placeholder="Sexo"
						options={['Masculino', 'Feminino', 'Outro']}
					/>

					<CardLabel>Data de Nascimento</CardLabel>
					<Input
						options={{
							format: 'DD/MM/YYYY',
						}}
						maskType="datetime"
						placeholder="Data de Nascimento"
					/>

					<CardLabel>Telefone</CardLabel>
					<Input
						maskType="cel-phone"
						keyboardType="phone-pad"
						autoCompleteType="tel"
						placeholder="Telefone"
					/>

					<CardLabel>Nacionalidade</CardLabel>
					<Select
						placeholder="Nacionalidade"
						options={['Brasileiro', 'Estrangeiro', 'Naturalizado']}
					/>

					<CardLabel>CPF</CardLabel>
					<Input maskType={'cpf'} placeholder="CPF" />

					<CardLabel>CEP</CardLabel>
					<Input
						maskType="custom"
						options={{
							mask: '99999-999',
						}}
						keyboardType="number-pad"
						placeholder="CEP"
					/>

					<CardButton iconSource={edit} text="Editar Dados" />
				</Form>

				<Form>
					<CardTitle>Informações Financeiras</CardTitle>

					<CardLabel>Qual seu tipo de moradia?</CardLabel>
					<Select
						placeholder="Tipo de moradia"
						options={['Casa Própria', 'Apartamento', 'Casa Alugada']}
					/>

					<CardLabel>Quantos cartões de crédito você possui?</CardLabel>
					<Input
						maskType="only-numbers"
						keyboardType="number-pad"
						placeholder="Número de cartões de crédito"
					/>

					<CardLabel>Qual tipo de veículo?</CardLabel>
					<Input placeholder="Tipo de veiculo" />

					<CardLabel>Quantas pessoas moram com você?</CardLabel>
					<Input
						maskType="only-numbers"
						keyboardType="number-pad"
						placeholder="Quantidade de pessoas"
					/>

					<CardLabel>Possui veículo próprio?</CardLabel>
					<Select placeholder="Possui veiculo?" options={['Sim', 'Não']} />

					<CardButton iconSource={edit} text="Editar Dados" />
				</Form>

				<Form>
					<CardTitle>Informações Profissionais</CardTitle>

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

					<CardLabel>Profissão</CardLabel>
					<Select
						placeholder="Profissão"
						options={['Administrador', 'Advogado', 'Engenheiro', 'Médico']}
					/>

					<CardLabel>Relação de Emprego</CardLabel>
					<Select
						placeholder="Relação de Emprego"
						options={['Estágio', 'CLT', 'PJ']}
					/>

					<CardLabel>Faixa de Renda Mensal</CardLabel>
					<Select
						placeholder="Faixa de Renda Mensal"
						options={[
							'Menos que 1 salário mínimo',
							'Entre 1 e 3 salários mínimos',
							'Mais que 3 salários mínimos',
						]}
					/>

					<CardButton iconSource={edit} text="Editar Dados" />
				</Form>
			</ScrollContainer>
		</Container>
	);
};

export default Profile;
