import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CommentList from "../list/CommentList"
import TextInput from "../ui/TextInput";
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
	width: 100%;
	max-width: 720px;

	& > * {
		:not(:last-child) {
			margin-bottom: 16px;
		}
	}
`;

const PostContainer = styled.div`
	padding: 8px 16px;
	border: 1px solid grey;
	border-radius: 8px;
`;

const TitleText = styled.p`
	font-size: 28px;
	font-weight: 500;
`;

const ContentText = styled.p`
	font-size: 20px;
	line-height: 32px;
	white-space: pre-wrap;
`;

const CommentLable = styled.p`
	font-size: 16px;
	font-weight: 500;
`;



function LoginPage(props) {
	const navigate = useNavigate();

	const [nickName, setNickName] = useState("");

	const allUserData = [];
	let MY_USER_ID = "";
	const connection = () => {
		const ws = new WebSocket('ws://localhost:8080/ws');
		const sendMyName = (sendingUserName) => {
			let data = {"code": "connect_name", "name": sendingUserName, "user_id": MY_USER_ID};
			ws.send(JSON.stringify(data));
		}
		ws.onmessage = (event) => {
			let message = JSON.parse(event.data);
			switch (message.code) {
				case "my_user_id" :
					MY_USER_ID = message.msg;
					sendMyName(nickName);
					alert("안녕하세요 " + nickName + " 님");
					break ;
				case "all_users" :
					let ALL_WS = JSON.parse(message.msg);
					ALL_WS.forEach((element, index) => {
						allUserData.push(element.user_name);
						props.updateUserData(allUserData);
					});
					break;
				default :
			}
		}
	};

	

	return (
		<Wrapper>
			<Container>
				<Button 
					title="뒤로 가기"
					onClick={() => {
						navigate("/");
					}}
				/>

				<CommentLable>닉네임을 입력하세요!</CommentLable>

				<TextInput 
					height={10}
					value={nickName}
					onChange={(event) => {
						setNickName(event.target.value);
					}}
				/>
				<Button 
					title="입장"
					onClick={() => {
						connection();
						navigate("/chat");
					}}
				/>
			</Container>
		</Wrapper>
	);
}

export default LoginPage;