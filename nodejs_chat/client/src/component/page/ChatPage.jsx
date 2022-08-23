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

const UserContainer = styled.div`
	padding: 8px 16px;
	border: 1px solid grey;
	border-radius: 8px;
	float: right;
`;

const MessageContainer = styled.div`
	padding: 8px 16px;
	border: 1px solid grey;
	border-radius: 8px;
	float: left;	
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

function PostViewPage(props) {
	const { fMsgChatMessage, fMsgAllUsers, fSendMessage } = props;
	const navigate = useNavigate();
	const { postId } = useParams();

	const [chatMessage, setChatMessage] = useState([]);
	const [allUserData, setAllUsersData] = useState([]);
	const [comment, setComment] = useState("");


	setChatMessage(fMsgChatMessage(chatMessage));
	setAllUsersData(fMsgAllUsers(allUserData));

	// setAllUsersData(props.allUserData);
	return (
		<Wrapper>
			<Container>
				<Button 
					title="뒤로 가기"
					onClick={() => {
						navigate("/");
					}}
				/>
				<UserContainer>
					# 실시간 접속자
					{allUserData.map((userName, index) => {
					return (
						<ContentText
							key = {index}
						>
							{userName}
						</ContentText>
						);
					})}
				</UserContainer>

				<MessageContainer>
					{chatMessage.map((message, index) => {
						return (
							<ContentText
								key = {index}
							>
								{message}
							</ContentText>
						);
					})}
				</MessageContainer>

				<CommentLable>댓글</CommentLable>
				{/* <CommentList comments={post.comments} /> */}

				<TextInput 
					height={40}
					value={comment}
					onChange={(event) => {
						setComment(event.target.value);
					}}
				/>
				<Button 
					title="댓글 작성하기"
					onClick={() => {
						fSendMessage(comment);
					}}
				/>
			</Container>
		</Wrapper>
	);
}

export default PostViewPage;