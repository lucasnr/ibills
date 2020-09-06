import React from 'react';
import { Image } from 'react-native';

import Header from '~/components/Header';
import Input from '~/components/Input';
import Button from '~/components/Button';
import {
	Container,
	Main,
	Title,
	ForgotPasswordContainer,
	ForgotPassword,
	Rocket,
	Finance,
	Separator,
	SeparatorLine,
	SeparatorText,
	SocialMedia,
	SocialMediaItem,
} from './styles';

import google from '~/assets/img/google.png';
import facebook from '~/assets/img/facebook.png';
import apple from '~/assets/img/apple.png';

const Home: React.FC = () => {
	return (
		<Container>
			<Header />
			<Main>
				<Title>Seja bem-vindo de volta!</Title>
				<Input
					placeholder="E-mail"
					keyboardType="email-address"
					autoCompleteType="email"
					textContentType="emailAddress"
					style={{ marginBottom: 10 }}
				/>
				<Input
					placeholder="Senha"
					secureTextEntry={true}
					style={{ marginBottom: 16 }}
				/>

				<Button text="Login" onPress={() => {}} />

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
						<Image source={google} />
					</SocialMediaItem>

					<SocialMediaItem>
						<Image source={facebook} />
					</SocialMediaItem>

					<SocialMediaItem>
						<Image source={apple} />
					</SocialMediaItem>
				</SocialMedia>
			</Main>

			<Rocket />
			<Finance style={{ resizeMode: 'contain' }} />
		</Container>
	);
};

export default Home;
