import React from 'react';
import styled from 'styled-components';

export const GroupsTitles = () => {
	return (
		<Main>
			<TopLeftSection></TopLeftSection>
			<Wrapper>
				<GroupNr>Group 1</GroupNr>
			</Wrapper>
			<Wrapper>
				<GroupNr>Group 2</GroupNr>
			</Wrapper>
			<Wrapper>
				<GroupNr>Group 3</GroupNr>
			</Wrapper>
		</Main>
	);
};

const Main = styled.div`
	display: flex;
	flex-direction: column;
	width: 20%;
	background: #fff;
	@media (max-width: 550px) {
		width: 100%;
		flex-direction: row;
		justify-content: space-between;
		margin: 0;
	}
`;

const TopLeftSection = styled.div`
	height: 60px;
	border-bottom: 1px solid #ebebeb;
	@media (max-width: 550px) {
		width: 25%;
	}
`;

const GroupNr = styled.p`
	font-family: sans-serif;
	font-weight: 600;
	padding-left: 20px;
	color: #674343;
	height: 17px;
	@media (max-width: 550px) {
		padding: 0;
		font-size: 14px;
		width: 100%;
		text-align: center;
	}
`;

const Wrapper = styled.div`
	border-bottom: 1px solid #ebebeb;
	@media (max-width: 550px) {
		border: none;
		width: 25%;
	}
`;
