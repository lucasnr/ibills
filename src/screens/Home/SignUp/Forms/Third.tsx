import React, { useContext } from 'react';

import Row, { RowCol } from '~/components/Row';
import Select from '~/components/Select';
import { Title } from '~/screens/Home/styles';

import { Context } from '~/screens/Home/SignUp/context';

const ThirdForm = () => {
	const {
		data: { goal, schooling, profession, jobRelation, income },
		setData,
	} = useContext(Context);

	return (
		<React.Fragment>
			<Title>
				Que legal, vamos ajudar você com {goal}!{'\n'}
				Para isso, precisamos que nos forneça algumas informações profissionais
				suas, tá?
			</Title>

			<Row cols desktopOnly>
				<RowCol desktopOnly>
					<Select
						placeholder="Escolaridade"
						style={{ marginBottom: 10 }}
						value={schooling}
						onChangeText={(schooling) =>
							setData((prev) => ({ ...prev, schooling }))
						}
						options={[
							'Nivel Médio Incompleto',
							'Nivel Médio Completo',
							'Nivel Superior Incompleto',
							'Nivel Superior Completo',
						]}
					/>
					<Select
						placeholder="Profissão"
						style={{ marginBottom: 10 }}
						value={profession}
						onChangeText={(profession) =>
							setData((prev) => ({ ...prev, profession }))
						}
						options={['Administrador', 'Advogado', 'Engenheiro', 'Médico']}
					/>
				</RowCol>

				<RowCol desktopOnly>
					<Select
						placeholder="Relação de Emprego"
						style={{ marginBottom: 10 }}
						value={jobRelation}
						onChangeText={(jobRelation) =>
							setData((prev) => ({ ...prev, jobRelation }))
						}
						options={['Estágio', 'CLT', 'PJ']}
					/>
					<Select
						placeholder="Faixa de Renda Mensal"
						style={{ marginBottom: 16 }}
						value={income}
						onChangeText={(income) => setData((prev) => ({ ...prev, income }))}
						options={[
							'Menos que 1 salário mínimo',
							'Entre 1 e 3 salários mínimos',
							'Mais que 3 salários mínimos',
						]}
					/>
				</RowCol>
			</Row>
		</React.Fragment>
	);
};

export default ThirdForm;
