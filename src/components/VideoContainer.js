import React, { useEffect, useState } from 'react';
import { YOUTUBE_API } from '../utils/constants';
import VideoCard, { AddVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		if (videos.length === 0) {
			getVideos();
		}
	}, []);

	const getVideos = async () => {
		const data = await fetch(YOUTUBE_API);
		const json = await data.json();
		setVideos(json.items);
	};

	return videos.length === 0 ? null : (
		<div className="flex flex-wrap">
			<AddVideoCard info={videos[0]} />
			{videos.map((video) => (
				<Link key={video.id} to={'/watch?v=' + video.id}>
					<VideoCard info={video} />
				</Link>
			))}
		</div>
	);
};

export default VideoContainer;
