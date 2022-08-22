import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";

const Wrapper = styled.div`
	padding: 16px;
	width: calc(100% - 32px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Container = styled.div`
	widthL 100%;
	max-width: 720;

	% > * {
		:not(:last-child) {
			margin-bottom: 16px;
		}
	}
`;

function MainPage(props) {
	const {} = props;

	const navigate = useNavigate();

	return (
		<Wrapper>
			<Container>
				<Button 
					title="로그인 하기"
					onClick={() => {
						navigate("/login");
					}}
				/>
			</Container>
		</Wrapper>
	);
}

export default MainPage;