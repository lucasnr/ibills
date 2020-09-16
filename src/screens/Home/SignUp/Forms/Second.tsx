import React, { useContext } from 'react';

import Input from '~/components/Input';
import Select from '~/components/Select';
import { Title } from '~/screens/Home/styles';
import Row, { RowCol } from '~/components/Row';

import { Context } from '~/screens/Home/SignUp/context';

const SecondForm = () => {
	const {
		data: { name, birthdate, gender, nationality, cpf, tel, cep, goal },
		setData,
	} = useContext(Context);

	return (
		<React.Fragment>
			<Title>
				Muito bem!{'\n'}Agora precisamos de algumas informações suas...
			</Title>

			<Row cols desktopOnly>
				<RowCol desktopOnly>
					<Input
						placeholder="Nome"
						autoCompleteType="name"
						style={{ marginBottom: 10 }}
						value={name}
						onChangeText={(name) => setData((prev) => ({ ...prev, name }))}
					/>

					<Input
						placeholder="Aniversário"
						options={{
							format: 'DD/MM/YYYY',
						}}
						maskType="datetime"
						style={{ marginBottom: 10 }}
						value={birthdate}
						onChangeText={(birthdate) =>
							setData((prev) => ({ ...prev, birthdate }))
						}
					/>

					<Select
						placeholder="Sexo"
						style={{ marginBottom: 10 }}
						value={gender}
						onChangeText={(gender) => setData((prev) => ({ ...prev, gender }))}
						options={['Masculino', 'Feminino', 'Outro']}
					/>

					<Input
						placeholder="Nacionalidade"
						style={{ marginBottom: 10 }}
						value={nationality}
						onChangeText={(nationality) =>
							setData((prev) => ({ ...prev, nationality }))
						}
					/>
				</RowCol>

				<RowCol desktopOnly>
					<Input
						placeholder="CPF"
						style={{ marginBottom: 10 }}
						maskType={'cpf'}
						value={cpf}
						onChangeText={(cpf) => setData((prev) => ({ ...prev, cpf }))}
					/>
					<Input
						placeholder="Telefone"
						style={{ marginBottom: 10 }}
						maskType="cel-phone"
						keyboardType="phone-pad"
						autoCompleteType="tel"
						value={tel}
						onChangeText={(tel) => setData((prev) => ({ ...prev, tel }))}
					/>
					<Input
						placeholder="CEP"
						maskType="custom"
						options={{
							mask: '99999-999',
						}}
						keyboardType="number-pad"
						style={{ marginBottom: 10 }}
						value={cep}
						onChangeText={(cep) => setData((prev) => ({ ...prev, cep }))}
					/>
					<Select
						placeholder="Objetivo Financeiro"
						style={{ marginBottom: 16 }}
						value={goal}
						onChangeText={(goal) => setData((prev) => ({ ...prev, goal }))}
						options={['Crescimento Pessoal', 'Crescimento Empresarial']}
					/>
				</RowCol>
			</Row>
		</React.Fragment>
	);
};

export default SecondForm;
