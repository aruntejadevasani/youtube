import React from 'react';

const VideoCard = ({ info }) => {
	const { snippet, statistics } = info;
	const { channelTitle, title, thumbnails } = snippet;

	return (
		<div className="p-2 m-2 w-72 shadow-lg">
			<img
				className="rounded-lg"
				alt="thumbnail"
				src={thumbnails.medium.url}
			/>
			<ul>
				<li className="font-bold py-2">{title}</li>
				<li>{channelTitle}</li>
				<li>{statistics.viewCount} Views</li>
			</ul>
		</div>
	);
};

export const AddVideoCard = ({ info }) => {
	return (
		<div className="p-1 border border-red-300">
			<VideoCard info={info} />
		</div>
	);
};

export default VideoCard;
