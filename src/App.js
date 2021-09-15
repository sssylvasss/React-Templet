import React from 'react';
import styled from 'styled-components';

import { Table } from './components/Table.js';

export const App = () => {
	return (
		<Main>
			<Table />
		</Main>
	);
};

const Main = styled.div`
	max-width: 2000px;
	border: 25px solid #ebebeb;
	@media (max-width: 550px) {
		border: none;
		margin: 5px;
	}
`;
