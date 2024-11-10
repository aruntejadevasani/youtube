import React, { useMemo, useState } from 'react';
import { findNthPrime } from '../utils/helper';

const Demo = () => {
	const [text, setText] = useState(0);
	const [isDarkTheme, setIsDarkTheme] = useState(true);

	const nthPrime = useMemo(() => findNthPrime(text), [text]);

	return (
		<div
			className={
				'm-4 p-2 w-96 h-96 border border-black px-2 ' +
				(isDarkTheme && 'bg-gray-700 text-white')
			}
		>
			<div>
				<button
					className="m-10 p-2 bg-green-200"
					onClick={() => setIsDarkTheme(!isDarkTheme)}
				>
					Toggle Theme
				</button>
			</div>
			<div>
				<input
					className="w-72 border border-black"
					type="number"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
			</div>
			<div className="m-2 font-bold">nth Prime Number is: {nthPrime}</div>
		</div>
	);
};

export default Demo;
