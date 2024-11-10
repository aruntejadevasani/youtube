import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
	const [liveMessage, setLiveMessage] = useState('');
	const dispatch = useDispatch();
	const chatMessages = useSelector((store) => store.chat.messages);
	useEffect(() => {
		const interval = setInterval(() => {
			dispatch(
				addMessage({
					name: generateRandomName(),
					message: makeRandomMessage(20),
				})
			);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
				<div>
					{chatMessages.map((chat, index) => (
						<ChatMessage
							key={index}
							name={chat.name}
							message={chat.message}
						/>
					))}
				</div>
			</div>
			<form
				className="w-full p-2 ml-2 border border-black rounded-lg mt-2"
				onSubmit={(e) => {
					e.preventDefault();
					dispatch(
						addMessage({ name: 'Test', message: liveMessage })
					);
					setLiveMessage('');
				}}
			>
				<input
					className="w-80 border border-black px-2"
					type="text"
					value={liveMessage}
					onChange={(e) => setLiveMessage(e.target.value)}
				/>
				<button className="px-2 mx-2 bg-green-400">Send</button>
			</form>
		</>
	);
};

export default LiveChat;
