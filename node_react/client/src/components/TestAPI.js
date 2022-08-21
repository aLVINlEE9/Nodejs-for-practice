import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";

const TestAPI = () => {
	const [datas, setDatas] = useState("");
	const callApi = async () => {
		axios.get("/testAPI").then((res) => setDatas(`${res.data.result}`));
	};

	useEffect(() => {
		callApi();
	}, []);

	return (
		<div>
			{datas}
		</div>
	);
};
  
export default TestAPI;
