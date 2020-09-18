import React from 'react';
import { View } from 'react-native';

import Container from '~/components/AppScreenContainer';
import ScrollContainer from '~/components/ScrollContainer';
import Checkbox from '~/components/Checkbox';
import Row, { RowCol } from '~/components/Row';
import { CardContainer } from '~/components/Card';

import MobileOnlyContainer from './MobileOnlyContainer';
import {
	Form,
	FormTitle,
	CheckboxRow,
	CheckboxSectionSubtitle,
	CheckboxLabel,
} from './styles';

import { isDesktop } from '~/utils/consts';

const Settings: React.FC = () => {
	return (
		<Container>
			<ScrollContainer
				style={{ marginBottom: 0 }}
				contentContainerStyle={
					isDesktop && { flexWrap: 'wrap', maxWidth: 1368 }
				}
			>
				<CardContainer>
					<Form>
						<FormTitle>Configurações da Dashboard</FormTitle>

						<Row cols desktopOnly>
							<RowCol desktopOnly>
								<CheckboxSectionSubtitle>
									Cards da Direita
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
							</RowCol>

							<RowCol desktopOnly>
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
							</RowCol>
						</Row>
					</Form>
				</CardContainer>

				<MobileOnlyContainer>
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
				</MobileOnlyContainer>

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
