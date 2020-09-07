import React, { useRef, useEffect, useCallback, useState } from 'react';
import { Animated, Dimensions, Keyboard } from 'react-native';

import { Container, Link, LinkContainer, BorderBottom } from './styles';

const { width } = Dimensions.get('window');

interface Props {
	active: string;
	setActive(value: string): void;
}

const Header: React.FC<Props> = ({ setActive, active }) => {
	const value = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.spring(value, {
			toValue: active === 'login' ? 0 : width / 2,
			useNativeDriver: false,
		}).start();
	}, [active]);

	const linkCallback = useCallback((target: string) => {
		Keyboard.dismiss();
		setActive(target);
	}, []);

	return (
		<Container style={{ elevation: 4 }}>
			<LinkContainer onPress={() => linkCallback('login')}>
				<Link active={active === 'login'}>Login</Link>
			</LinkContainer>
			<LinkContainer onPress={() => linkCallback('signup')}>
				<Link active={active === 'signup'}>Cadastro</Link>
			</LinkContainer>

			<Animated.View
				style={{
					alignItems: 'center',
					bottom: 0,
					justifyContent: 'center',
					left: value,
					position: 'absolute',
					width: '50%',
				}}
			>
				<BorderBottom />
			</Animated.View>
		</Container>
	);
};

export default Header;
