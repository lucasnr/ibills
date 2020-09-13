import React, { useCallback, useState, useEffect } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FirstForm from './Forms/First';
import SecondForm from './Forms/Second';
import ThirdForm from './Forms/Third';
import LastForm from './Forms/Last';
import Provider from './context';

import Button from '~/components/Button';
import {
	Separator,
	SeparatorLine,
	SeparatorText,
	SocialMedia,
	SocialMediaItem,
} from '../styles';

import google from '~/assets/img/google.png';
import facebook from '~/assets/img/facebook.png';
import apple from '~/assets/img/apple.png';

const forms = [<FirstForm />, <SecondForm />, <ThirdForm />, <LastForm />];

interface Props {
	active: string;
	setActive(value: string): void;
}

const SignUp: React.FC<Props> = ({ active, setActive }) => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		if (active !== 'SignUp-Next') setIndex(0);
	}, [active]);

	const navigation = useNavigation();
	const next = useCallback(() => {
		setActive('SignUp-Next');
		if (index < 3) setIndex((prev) => prev + 1);
		else
			navigation.reset({
				routes: [{ name: 'App' }],
			});
	}, [setActive, index, navigation]);

	return (
		<Provider>
			{forms[index]}

			<Button
				text={
					index === 0 ? 'Criar conta' : index === 3 ? 'Finalizar' : 'Continuar'
				}
				onPress={next}
			/>

			{index === 0 && (
				<>
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
			)}
		</Provider>
	);
};

export default SignUp;
