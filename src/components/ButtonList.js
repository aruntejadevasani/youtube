import React from 'react';
import Button from './Button';

const list = [
	'All',
	'Gaming',
	'Sports',
	'Songs',
	'Live',
	'Cooking',
	'APIs',
	'Podcasts',
	'Albums',
	'Trips',
	'New',
	'Watched',
];

const ButtonList = () => {
	return (
		<div className="flex">
			{list.map((item, index) => (
				<Button key={index} name={item} />
			))}
		</div>
	);
};

export default ButtonList;
