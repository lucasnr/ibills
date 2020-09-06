import React, { useRef, useEffect } from 'react';
import { Animated, Dimensions } from 'react-native';

import { Container, Link, BorderBottom } from './styles';

interface Props {
	active?: number;
}

const { width } = Dimensions.get('window');

const Header: React.FC<Props> = ({ active = 0 }) => {
	const value = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.timing(value, {
			toValue: active === 0 ? 0 : width / 2,
			duration: 300,
			useNativeDriver: false,
		}).start();
	}, [active]);

	return (
		<Container style={{ elevation: 4 }}>
			<Link active={active === 0}>Login</Link>
			<Link active={active === 1}>Cadastro</Link>

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
