import React, { useState, useEffect, useRef } from 'react';
import { Animated, ViewStyle, StyleProp } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Header from '~/components/Header';
import { Container, Main, Rocket, Finance } from './styles';

import Login from './Login';
import SignUp from './SignUp';

const Home: React.FC = () => {
	const [active, setActive] = useState('Login');
	const opacity = useRef(new Animated.Value(1)).current;

	useEffect(() => {
		Animated.timing(opacity, {
			toValue: active === 'Login' ? 1 : 0,
			duration: 300,
			useNativeDriver: false,
		}).start();
	}, [active]);

	return (
		<Container keyboardShouldPersistTaps="always">
			<Header active={active} setActive={setActive} />
			<Main>
				<AnimatedContainer
					style={{
						zIndex: active === 'Login' ? 5 : -5,
						opacity,
						transform: [
							{
								translateY: opacity.interpolate({
									inputRange: [0, 1],
									outputRange: [-20, 0],
								}),
							},
						],
					}}
				>
					<Login />
				</AnimatedContainer>

				<AnimatedContainer
					style={{
						zIndex: active !== 'Login' ? 5 : -5,
						opacity: opacity.interpolate({
							inputRange: [0, 1],
							outputRange: [1, 0],
						}),
						transform: [
							{
								translateY: opacity.interpolate({
									inputRange: [0, 1],
									outputRange: [-20, 0],
								}),
							},
						],
					}}
				>
					<SignUp active={active} setActive={setActive} />
				</AnimatedContainer>
			</Main>

			<Rocket />
			<Finance style={{ resizeMode: 'contain' }} />

			<StatusBar backgroundColor="#fff" translucent={false} style="dark" />
		</Container>
	);
};

const AnimatedContainer: React.FC<{
	style: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
}> = ({ style, children }) => {
	return (
		<Animated.View
			style={{
				flexDirection: 'column',
				height: '100%',
				justifyContent: 'center',
				position: 'absolute',
				paddingVertical: 24,
				paddingHorizontal: 44,
				width: '100%',
				...style,
			}}
		>
			{children}
		</Animated.View>
	);
};

export default Home;
