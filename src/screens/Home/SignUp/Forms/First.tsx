import React, { useContext } from 'react';

import Input from '~/components/Input';
import { Title } from '~/screens/Home/styles';

import { Context } from '~/screens/Home/SignUp/context';

const FirstForm = () => {
	const {
		data: { name, email, password },
		setData,
	} = useContext(Context);

	return (
		<React.Fragment>
			<Title>Seja bem vindo!{'\n'}Vamos fazer seu cadastro?</Title>

			<Input
				placeholder="Nome"
				autoCompleteType="name"
				style={{ marginBottom: 10 }}
				value={name}
				onChangeText={(name) => setData((prev) => ({ ...prev, name }))}
			/>
			<Input
				placeholder="E-mail"
				autoCapitalize="none"
				autoCompleteType="email"
				keyboardType="email-address"
				textContentType="emailAddress"
				style={{ marginBottom: 10 }}
				value={email}
				onChangeText={(email) => setData((prev) => ({ ...prev, email }))}
			/>
			<Input
				placeholder="Senha"
				secureTextEntry={true}
				style={{ marginBottom: 16 }}
				value={password}
				onChangeText={(password) => setData((prev) => ({ ...prev, password }))}
			/>
		</React.Fragment>
	);
};

export default FirstForm;
