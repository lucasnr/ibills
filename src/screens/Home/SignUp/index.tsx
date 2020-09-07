import React from 'react';
import { Image } from 'react-native';

import Input from '~/components/Input';
import Button from '~/components/Button';
import {
	Title,
	Separator,
	SeparatorLine,
	SeparatorText,
	SocialMedia,
	SocialMediaItem,
} from '../styles';

import google from '~/assets/img/google.png';
import facebook from '~/assets/img/facebook.png';
import apple from '~/assets/img/apple.png';

const SignUp: React.FC = () => {
	return (
		<>
			<Title>Seja bem vindo!{'\n'}Vamos fazer seu cadastro?</Title>

			<Input
				placeholder="Nome"
				autoCompleteType="name"
				style={{ marginBottom: 10 }}
			/>
			<Input
				placeholder="E-mail"
				autoCompleteType="email"
				keyboardType="email-address"
				textContentType="emailAddress"
				style={{ marginBottom: 10 }}
			/>
			<Input
				placeholder="Senha"
				secureTextEntry={true}
				style={{ marginBottom: 16 }}
			/>

			<Button text="Criar conta" onPress={() => {}} />

			<Separator>
				<SeparatorLine />
				<SeparatorText>Ou</SeparatorText>
				<SeparatorLine />
			</Separator>

			<SocialMedia>
				<SocialMediaItem>
					<Image source={google} />
				</SocialMediaItem>

				<SocialMediaItem>
					<Image source={facebook} />
				</SocialMediaItem>

				<SocialMediaItem>
					<Image source={apple} />
				</SocialMediaItem>
			</SocialMedia>
		</>
	);
};

export default SignUp;
