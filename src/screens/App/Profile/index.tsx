import React from 'react';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import Container from '~/components/AppScreenContainer';
import ScrollContainer from '~/components/ScrollContainer';
import Row from '~/components/Row';
import Input from '~/components/Input';
import Select from '~/components/Select';

import FormButton from './FormButton';
import {
	Avatar,
	AvatarButton,
	AvatarButtonText,
	Name,
	Form,
	Title,
	Label,
} from './styles';

import user from '~/assets/img/user.png';

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
					<Title>Informações Gerais</Title>

					<Label>Nome Completo</Label>
					<Input
						autoCompleteType="name"
						textContentType="name"
						placeholder="Nome Completo"
					/>

					<Label>Sexo</Label>
					<Select
						placeholder="Sexo"
						options={['Masculino', 'Feminino', 'Outro']}
					/>

					<Label>Data de Nascimento</Label>
					<Input
						options={{
							format: 'DD/MM/YYYY',
						}}
						maskType="datetime"
						placeholder="Data de Nascimento"
					/>

					<Label>Telefone</Label>
					<Input
						maskType="cel-phone"
						keyboardType="phone-pad"
						autoCompleteType="tel"
						placeholder="Telefone"
					/>

					<Label>Nacionalidade</Label>
					<Select
						placeholder="Nacionalidade"
						options={['Brasileiro', 'Estrangeiro', 'Naturalizado']}
					/>

					<Label>CPF</Label>
					<Input maskType={'cpf'} placeholder="CPF" />

					<Label>CEP</Label>
					<Input
						maskType="custom"
						options={{
							mask: '99999-999',
						}}
						keyboardType="number-pad"
						placeholder="CEP"
					/>

					<FormButton text="Editar Dados" />
				</Form>

				<Form>
					<Title>Informações Financeiras</Title>

					<Label>Qual seu tipo de moradia?</Label>
					<Select
						placeholder="Tipo de moradia"
						options={['Casa Própria', 'Apartamento', 'Casa Alugada']}
					/>

					<Label>Quantos cartões de crédito você possui?</Label>
					<Input
						maskType="only-numbers"
						keyboardType="number-pad"
						placeholder="Número de cartões de crédito"
					/>

					<Label>Qual tipo de veículo?</Label>
					<Input placeholder="Tipo de veiculo" />

					<Label>Quantas pessoas moram com você?</Label>
					<Input
						maskType="only-numbers"
						keyboardType="number-pad"
						placeholder="Quantidade de pessoas"
					/>

					<Label>Possui veículo próprio?</Label>
					<Select placeholder="Possui veiculo?" options={['Sim', 'Não']} />

					<FormButton text="Editar Dados" />
				</Form>

				<Form>
					<Title>Informações Profissionais</Title>

					<Label>Escolaridade</Label>
					<Select
						placeholder="Escolaridade"
						options={[
							'Nivel Médio Incompleto',
							'Nivel Médio Completo',
							'Nivel Superior Incompleto',
							'Nivel Superior Completo',
						]}
					/>

					<Label>Profissão</Label>
					<Select
						placeholder="Profissão"
						options={['Administrador', 'Advogado', 'Engenheiro', 'Médico']}
					/>

					<Label>Relação de Emprego</Label>
					<Select
						placeholder="Relação de Emprego"
						options={['Estágio', 'CLT', 'PJ']}
					/>

					<Label>Faixa de Renda Mensal</Label>
					<Select
						placeholder="Faixa de Renda Mensal"
						options={[
							'Menos que 1 salário mínimo',
							'Entre 1 e 3 salários mínimos',
							'Mais que 3 salários mínimos',
						]}
					/>

					<FormButton text="Editar Dados" />
				</Form>
			</ScrollContainer>
		</Container>
	);
};

export default Profile;
