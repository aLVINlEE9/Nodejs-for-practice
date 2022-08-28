import { useEffect, useState } from "react";
import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import axios from "axios";

export default function Feed({username}) {
	const [posts, setPosts] = useState([]);
	const [text, setText] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const res = username
			? await axios.get("/posts/profile/" + username)
			: await axios.get("posts/timeline/6304e72e444458445c17b2b8")
			setPosts(res.data)
		}
		fetchPosts()
	}, [username]);

	return (
	<div className="feed">
		<div className="feedWrapper">
			<Share />
			{posts.map((p) => (
				<Post key={p._id} post={p} />
			))}
		</div>
	</div>
  )
}
 