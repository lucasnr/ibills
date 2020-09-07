import React, {
	useState,
	createContext,
	Dispatch,
	SetStateAction,
} from 'react';

interface SignUpData {
	name: string;
	email: string;
	password: string;
	birthdate: string;
	gender: string;
	nationality: string;
	cpf: string;
	tel: string;
	cep: string;
	goal: string;
	schooling: string;
	profession: string;
	jobRelation: string;
	income: string;
	housing: string;
	people: string;
	creditCard: string;
	hasVehicle: string;
	vehicle: string;
}

const defaultSignUpData: SignUpData = {
	name: '',
	email: '',
	password: '',
	birthdate: '',
	gender: '',
	nationality: '',
	cpf: '',
	tel: '',
	cep: '',
	goal: '',
	schooling: '',
	profession: '',
	jobRelation: '',
	income: '',
	housing: '',
	people: '',
	creditCard: '',
	hasVehicle: '',
	vehicle: '',
};

export const Context = createContext<{
	data: SignUpData;
	setData: Dispatch<SetStateAction<SignUpData>>;
}>({
	data: defaultSignUpData,
	setData: () => {},
});

const Provider: React.FC = ({ children }) => {
	const [data, setData] = useState<SignUpData>(defaultSignUpData);

	return (
		<Context.Provider value={{ data, setData }}>{children}</Context.Provider>
	);
};

export default Provider;
