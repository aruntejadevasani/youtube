import React from 'react';

const commentsData = [
	{
		name: 'Test Comment',
		text: 'Some comments added to the section',
		replies: [],
	},
	{
		name: 'Test Comment',
		text: 'Some comments added to the section',
		replies: [
			{
				name: 'Test Comment',
				text: 'Some comments added to the section',
				replies: [],
			},
			{
				name: 'Test Comment',
				text: 'Some comments added to the section',
				replies: [
					{
						name: 'Test Comment',
						text: 'Some comments added to the section',
						replies: [
							{
								name: 'Test Comment',
								text: 'Some comments added to the section',
								replies: [
									{
										name: 'Test Comment',
										text: 'Some comments added to the section',
										replies: [],
									},
								],
							},
							{
								name: 'Test Comment',
								text: 'Some comments added to the section',
								replies: [],
							},
							{
								name: 'Test Comment',
								text: 'Some comments added to the section',
								replies: [
									{
										name: 'Test Comment',
										text: 'Some comments added to the section',
										replies: [],
									},
								],
							},
							{
								name: 'Test Comment',
								text: 'Some comments added to the section',
								replies: [],
							},
						],
					},
					{
						name: 'Test Comment',
						text: 'Some comments added to the section',
						replies: [],
					},
				],
			},
			{
				name: 'Test Comment',
				text: 'Some comments added to the section',
				replies: [],
			},
		],
	},
	{
		name: 'Test Comment',
		text: 'Some comments added to the section',
		replies: [],
	},
];

const Comment = ({ data }) => {
	const { name, text, replies } = data;
	return (
		<div className="flex shadow-lg bg-gray-100 my-6 p-2 rounded-lg">
			<img
				className="w-12 h-12"
				alt="user"
				src="https://cdn-icons-png.freepik.com/256/1077/1077114.png?semt=ais_hybrid"
			/>
			<div className="px-3">
				<p className="font-bold">{name}</p>
				<p>{text}</p>
			</div>
		</div>
	);
};

const CommentsList = ({ comments }) => {
	return comments.map((comment, index) => (
		<div key={index}>
			<Comment data={comment} />
			<div className="pl-5 ml-5 border border-l-black">
				<CommentsList comments={comment.replies} />
			</div>
		</div>
	));
};

const CommentsContainer = () => {
	return (
		<div className="m-5 p-2">
			<h1 className="text-2xl font-bold">Comments:</h1>
			<CommentsList comments={commentsData} />
		</div>
	);
};

export default CommentsContainer;
