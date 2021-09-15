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
	margin: 0;
	border-bottom: 1px solid #ebebeb;
	@media (max-width: 550px) {
		flex-direction: column;
		width: 75%;
		border: none;
		height: 100%;
	}
`;

const DataTitle = styled.p`
	font-family: sans-serif;
	font-weight: 200;
	font-size: 12px;
	width: 20%;
	text-align: center;
	color: #674343;
  margin: 0;
	@media (max-width: 550px) {
    display: flex;
    align-items: center;
		font-weight: 300;
		height: 49px;
    width: 100%;
    margin-right: 5px;
    text-align: left;
    border-bottom: 1px solid #ebebeb;
`;
