import React, { useRef, useEffect, useCallback, useState } from 'react';
import { Animated, Dimensions, Keyboard } from 'react-native';

import { Wrapper, Link, LinkContainer, BorderBottom } from './styles';

const { width } = Dimensions.get('window');

interface Props {
	active: string;
	setActive(value: string): void;
}

const Header: React.FC<Props> = ({ setActive, active }) => {
	const value = useRef(new Animated.Value(0)).current;
	const translateX = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		if (active === 'Login' || active === 'SignUp') {
			Animated.spring(value, {
				toValue: active === 'Login' ? 0 : width / 2,
				useNativeDriver: false,
			}).start();

			Animated.timing(translateX, {
				toValue: 0,
				useNativeDriver: true,
				duration: 300,
			}).start();
		} else
			Animated.timing(translateX, {
				toValue: width / -4,
				useNativeDriver: true,
				duration: 200,
			}).start();
	}, [active]);

	const linkCallback = useCallback((target: string) => {
		Keyboard.dismiss();
		setActive(target);
	}, []);

	return (
		<Wrapper style={{ elevation: 4 }}>
			<Animated.View
				style={{
					alignItems: 'center',
					flexDirection: 'row',
					height: '100%',
					position: 'relative',
					transform: [{ translateX }],
				}}
			>
				<Animated.View
					style={{
						width: '50%',
						opacity: translateX.interpolate({
							inputRange: [width / -4, 0],
							outputRange: [0, 1],
						}),
						transform: [
							{
								scale: translateX.interpolate({
									inputRange: [width / -4, 0],
									outputRange: [0, 1],
								}),
							},
						],
					}}
				>
					<LinkContainer
						style={{ width: '100%' }}
						onPress={() => linkCallback('Login')}
					>
						<Link active={active === 'Login'}>Login</Link>
					</LinkContainer>
				</Animated.View>

				<LinkContainer onPress={() => linkCallback('SignUp')}>
					<Link active={active !== 'Login'}>Cadastro</Link>
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
			</Animated.View>
		</Wrapper>
	);
};

export default Header;
