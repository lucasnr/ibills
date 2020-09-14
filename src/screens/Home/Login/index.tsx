import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import Input from '~/components/Input';
import Button from '~/components/Button';
import {
	Title,
	Separator,
	SeparatorLine,
	SeparatorText,
	SocialMedia,
	SocialMediaItem,
	SocialMediaIcon,
} from '../styles';
import { ForgotPasswordContainer, ForgotPassword } from './styles';

import google from '~/assets/img/google.png';
import facebook from '~/assets/img/facebook.png';
import apple from '~/assets/img/apple.png';

const Login: React.FC = () => {
	const navigation = useNavigation();
	const login = useCallback(() => {
		navigation.reset({
			routes: [{ name: 'App' }],
		});
	}, [navigation]);

	return (
		<>
			<Title>Seja bem-vindo de volta!</Title>
			<Input
				placeholder="E-mail"
				autoCapitalize="none"
				autoCompleteType="email"
				textContentType="emailAddress"
				keyboardType="email-address"
				style={{ marginBottom: 10 }}
			/>
			<Input
				placeholder="Senha"
				secureTextEntry={true}
				style={{ marginBottom: 16 }}
			/>

			<Button text="Login" onPress={login} />

			<ForgotPasswordContainer>
				<ForgotPassword>Esqueceu sua senha?</ForgotPassword>
			</ForgotPasswordContainer>

			<Separator>
				<SeparatorLine />
				<SeparatorText>Ou</SeparatorText>
				<SeparatorLine />
			</Separator>

			<SocialMedia>
				<SocialMediaItem>
					<SocialMediaIcon source={google} />
				</SocialMediaItem>

				<SocialMediaItem>
					<SocialMediaIcon source={facebook} />
				</SocialMediaItem>

				<SocialMediaItem>
					<SocialMediaIcon source={apple} />
				</SocialMediaItem>
			</SocialMedia>
		</>
	);
};

export default Login;
