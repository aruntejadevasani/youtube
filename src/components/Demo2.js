import React, { useEffect, useRef, useState } from 'react';

const Demo2 = () => {
	const [y, setY] = useState(1);
	let x = 10;
	const ref = useRef(0);

	const i = useRef(null);
	useEffect(() => {
		i.current = setInterval(() => {
			// console.log('Interval..' + Math.random());
		}, 1000);
		return () => clearInterval(i.current);
	}, []);

	return (
		<div className="m-4 p-2 bg-slate-100 border border-black w-96 h-96">
			<div>
				<button
					className="bg-green-200 p-2 m-4 "
					onClick={() => {
						x = x++;
					}}
				>
					Increase x
				</button>
				<span className="font-bold text-xl">Let = {x}</span>
			</div>
			<div>
				<button
					className="bg-green-200 p-2 m-4 "
					onClick={() => {
						setY(y + 1);
					}}
				>
					Increase y
				</button>
				<span className="font-bold text-xl">State = {y}</span>
			</div>
			<div>
				<button
					className="bg-green-200 p-2 m-4 "
					onClick={() => {
						ref.current = ref.current + 1;
					}}
				>
					Increase ref
				</button>
				<span className="font-bold text-xl">Ref = {ref.current}</span>
			</div>
			<button
				className="p-2 m-2 bg-red-950 text-white font-bold rounded-lg"
				onClick={() => {
					clearInterval(i.current);
				}}
			>
				Stop Interval
			</button>
		</div>
	);
};

export default Demo2;
