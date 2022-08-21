import React from 'react';
import { Link } from 'react-router-dom';

const Main = (props) => {
	return (
		<>
			<h3>안녕하세요. 메인페이지 입니다.</h3>
			<ul>
				<Link to="/testAPI"><li>testAPI</li></Link>
				<Link to="/testWs"><li>testWs</li></Link>
			</ul>
		</>
	);
};

export default Main;
