import React from 'react';
import styled from 'styled-components';

export const TitleContainer = () => {
	return (
		<>
			<Wrapper>
				<DataTitle>Total</DataTitle>
				<DataTitle>eNPS</DataTitle>
				<DataTitle>Leadership</DataTitle>
				<DataTitle>Job Satisfaction</DataTitle>
				<DataTitle>Miningfullness</DataTitle>
			</Wrapper>
		</>
	);
};

const Wrapper = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: 60px;
	border-bottom: 1px solid #ebebeb;
`;

const DataTitle = styled.p`
	font-family: Poppins, sans-serif;
	font-weight: 300;
	font-size: 12px;
	width: 20%;
	text-align: center;
	color: #674343;
	@media (max-width: 375px) {
		font-weight: 300;
		font-size: 10px;
	}
`;
