import React, { useContext } from 'react';

import Input from '~/components/Input';
import Select from '~/components/Select';
import { Title } from '~/screens/Home/styles';

import { Context } from '~/screens/Home/SignUp/context';

const LastForm = () => {
	const {
		data: { housing, people, creditCard, hasVehicle, vehicle },
		setData,
	} = useContext(Context);

	return (
		<React.Fragment>
			<Title>E por último,{'\n'}suas informações financeiras!</Title>

			<Select
				placeholder="Qual seu tipo de moradia"
				style={{ marginBottom: 10 }}
				value={housing}
				onChangeText={(housing) => setData((prev) => ({ ...prev, housing }))}
				options={['Casa', 'Apartamento', 'Vila']}
			/>
			<Input
				placeholder="Quantas pessoas moram com você?"
				maskType="only-numbers"
				keyboardType="number-pad"
				style={{ marginBottom: 10 }}
				value={people}
				onChangeText={(people) => setData((prev) => ({ ...prev, people }))}
			/>
			<Input
				placeholder="Quantas cartões de crédito possui?"
				maskType="only-numbers"
				keyboardType="number-pad"
				style={{ marginBottom: 10 }}
				value={creditCard}
				onChangeText={(creditCard) =>
					setData((prev) => ({ ...prev, creditCard }))
				}
			/>
			<Select
				placeholder="Possui veiculo próprio?"
				style={{ marginBottom: 10 }}
				value={hasVehicle}
				onChangeText={(hasVehicle) =>
					setData((prev) => ({ ...prev, hasVehicle }))
				}
				options={['Sim', 'Não']}
			/>
			<Input
				placeholder="Qual tipo de veículo?"
				style={{ marginBottom: 16 }}
				value={vehicle}
				onChangeText={(vehicle) => setData((prev) => ({ ...prev, vehicle }))}
			/>
		</React.Fragment>
	);
};

export default LastForm;
