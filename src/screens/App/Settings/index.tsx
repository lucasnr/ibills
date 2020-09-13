import React from 'react';
import { View } from 'react-native';

import Container from '~/components/AppScreenContainer';
import ScrollContainer from '~/components/ScrollContainer';
import Checkbox from '~/components/Checkbox';
import { CardContainer } from '~/components/Card';

import {
	Form,
	FormTitle,
	CheckboxRow,
	CheckboxSectionSubtitle,
	CheckboxLabel,
} from './styles';

const Settings: React.FC = () => {
	return (
		<Container>
			<ScrollContainer style={{ marginBottom: 0 }}>
				<CardContainer>
					<Form>
						<FormTitle>Configurações da Dashboard</FormTitle>

						<CheckboxSectionSubtitle>Cards da Direita</CheckboxSectionSubtitle>

						<CheckboxRow>
							<Checkbox />
							<CheckboxLabel>
								Lorem ipsum dolor sit amet, consetetur sadipscing
							</CheckboxLabel>
						</CheckboxRow>

						<CheckboxRow>
							<Checkbox value={true} />
							<CheckboxLabel>
								Lorem ipsum dolor sit amet, consetetur sadipscing
							</CheckboxLabel>
						</CheckboxRow>

						<CheckboxRow>
							<Checkbox />
							<CheckboxLabel>
								Lorem ipsum dolor sit amet, consetetur sadipscing
							</CheckboxLabel>
						</CheckboxRow>

						<CheckboxRow>
							<Checkbox value={true} />
							<CheckboxLabel>
								Lorem ipsum dolor sit amet, consetetur sadipscing
							</CheckboxLabel>
						</CheckboxRow>

						<CheckboxRow>
							<Checkbox />
							<CheckboxLabel>
								Lorem ipsum dolor sit amet, consetetur sadipscing
							</CheckboxLabel>
						</CheckboxRow>

						<CheckboxRow>
							<Checkbox />
							<CheckboxLabel>
								Lorem ipsum dolor sit amet, consetetur sadipscing
							</CheckboxLabel>
						</CheckboxRow>

						<CheckboxRow>
							<Checkbox value={true} />
							<CheckboxLabel>
								Lorem ipsum dolor sit amet, consetetur sadipscing
							</CheckboxLabel>
						</CheckboxRow>

						<CheckboxSectionSubtitle style={{ marginTop: 20 }}>
							Cards da Esquerda
						</CheckboxSectionSubtitle>

						<CheckboxRow>
							<Checkbox />
							<CheckboxLabel>
								Lorem ipsum dolor sit amet, consetetur sadipscing
							</CheckboxLabel>
						</CheckboxRow>

						<CheckboxRow>
							<Checkbox value={true} />
							<CheckboxLabel>
								Lorem ipsum dolor sit amet, consetetur sadipscing
							</CheckboxLabel>
						</CheckboxRow>

						<CheckboxRow>
							<Checkbox />
							<CheckboxLabel>
								Lorem ipsum dolor sit amet, consetetur sadipscing
							</CheckboxLabel>
						</CheckboxRow>

						<CheckboxRow>
							<Checkbox value={true} />
							<CheckboxLabel>
								Lorem ipsum dolor sit amet, consetetur sadipscing
							</CheckboxLabel>
						</CheckboxRow>

						<CheckboxRow>
							<Checkbox />
							<CheckboxLabel>
								Lorem ipsum dolor sit amet, consetetur sadipscing
							</CheckboxLabel>
						</CheckboxRow>

						<CheckboxRow>
							<Checkbox />
							<CheckboxLabel>
								Lorem ipsum dolor sit amet, consetetur sadipscing
							</CheckboxLabel>
						</CheckboxRow>

						<CheckboxRow>
							<Checkbox value={true} />
							<CheckboxLabel>
								Lorem ipsum dolor sit amet, consetetur sadipscing
							</CheckboxLabel>
						</CheckboxRow>
					</Form>
				</CardContainer>

				<View>
					<CardContainer style={{ marginBottom: 20 }}>
						<Form>
							<FormTitle>Configurações de Assinatura</FormTitle>

							<CheckboxRow>
								<Checkbox />
								<CheckboxLabel>
									Lorem ipsum dolor sit amet, consetetur sadipscing
								</CheckboxLabel>
							</CheckboxRow>

							<CheckboxRow>
								<Checkbox value={true} />
								<CheckboxLabel>
									Lorem ipsum dolor sit amet, consetetur sadipscing
								</CheckboxLabel>
							</CheckboxRow>

							<CheckboxRow>
								<Checkbox />
								<CheckboxLabel>
									Lorem ipsum dolor sit amet, consetetur sadipscing
								</CheckboxLabel>
							</CheckboxRow>

							<CheckboxRow>
								<Checkbox value={true} />
								<CheckboxLabel>
									Lorem ipsum dolor sit amet, consetetur sadipscing
								</CheckboxLabel>
							</CheckboxRow>

							<CheckboxRow>
								<Checkbox />
								<CheckboxLabel>
									Lorem ipsum dolor sit amet, consetetur sadipscing
								</CheckboxLabel>
							</CheckboxRow>

							<CheckboxRow>
								<Checkbox />
								<CheckboxLabel>
									Lorem ipsum dolor sit amet, consetetur sadipscing
								</CheckboxLabel>
							</CheckboxRow>

							<CheckboxRow>
								<Checkbox value={true} />
								<CheckboxLabel>
									Lorem ipsum dolor sit amet, consetetur sadipscing
								</CheckboxLabel>
							</CheckboxRow>
						</Form>
					</CardContainer>

					<CardContainer>
						<Form>
							<FormTitle>Configurações de Privacidade</FormTitle>

							<CheckboxRow>
								<Checkbox />
								<CheckboxLabel>
									Lorem ipsum dolor sit amet, consetetur sadipscing
								</CheckboxLabel>
							</CheckboxRow>

							<CheckboxRow>
								<Checkbox value={true} />
								<CheckboxLabel>
									Lorem ipsum dolor sit amet, consetetur sadipscing
								</CheckboxLabel>
							</CheckboxRow>

							<CheckboxRow>
								<Checkbox />
								<CheckboxLabel>
									Lorem ipsum dolor sit amet, consetetur sadipscing
								</CheckboxLabel>
							</CheckboxRow>

							<CheckboxRow>
								<Checkbox value={true} />
								<CheckboxLabel>
									Lorem ipsum dolor sit amet, consetetur sadipscing
								</CheckboxLabel>
							</CheckboxRow>

							<CheckboxRow>
								<Checkbox />
								<CheckboxLabel>
									Lorem ipsum dolor sit amet, consetetur sadipscing
								</CheckboxLabel>
							</CheckboxRow>

							<CheckboxRow>
								<Checkbox />
								<CheckboxLabel>
									Lorem ipsum dolor sit amet, consetetur sadipscing
								</CheckboxLabel>
							</CheckboxRow>

							<CheckboxRow>
								<Checkbox value={true} />
								<CheckboxLabel>
									Lorem ipsum dolor sit amet, consetetur sadipscing
								</CheckboxLabel>
							</CheckboxRow>
						</Form>
					</CardContainer>
				</View>

				<CardContainer>
					<Form>
						<FormTitle>Configurações de Relatorios</FormTitle>

						<CheckboxRow>
							<Checkbox />
							<CheckboxLabel>
								Lorem ipsum dolor sit amet, consetetur sadipscing
							</CheckboxLabel>
						</CheckboxRow>

						<CheckboxRow>
							<Checkbox value={true} />
							<CheckboxLabel>
								Lorem ipsum dolor sit amet, consetetur sadipscing
							</CheckboxLabel>
						</CheckboxRow>

						<CheckboxRow>
							<Checkbox />
							<CheckboxLabel>
								Lorem ipsum dolor sit amet, consetetur sadipscing
							</CheckboxLabel>
						</CheckboxRow>

						<CheckboxRow>
							<Checkbox value={true} />
							<CheckboxLabel>
								Lorem ipsum dolor sit amet, consetetur sadipscing
							</CheckboxLabel>
						</CheckboxRow>

						<CheckboxRow>
							<Checkbox />
							<CheckboxLabel>
								Lorem ipsum dolor sit amet, consetetur sadipscing
							</CheckboxLabel>
						</CheckboxRow>

						<CheckboxRow>
							<Checkbox />
							<CheckboxLabel>
								Lorem ipsum dolor sit amet, consetetur sadipscing
							</CheckboxLabel>
						</CheckboxRow>

						<CheckboxRow>
							<Checkbox value={true} />
							<CheckboxLabel>
								Lorem ipsum dolor sit amet, consetetur sadipscing
							</CheckboxLabel>
						</CheckboxRow>
					</Form>
				</CardContainer>
			</ScrollContainer>
		</Container>
	);
};

export default Settings;
