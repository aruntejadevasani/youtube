import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [suggestions, setSuggestions] = useState([]);
	const [showSuggestions, setShowSuggestions] = useState(false);
	const dispatch = useDispatch();
	const searchCache = useSelector((store) => store.search);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (searchCache[searchQuery]) {
				setSuggestions(searchCache[searchQuery]);
			} else {
				getSearchSuggestions();
			}
		}, 200);

		return () => {
			clearTimeout(timer);
		};
	}, [searchQuery]);

	const getSearchSuggestions = async () => {
		const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
		const json = await data.json();
		setSuggestions(json[1]);
		dispatch(cacheResults({ [searchQuery]: json[1] }));
	};

	const toggleMenuHandler = () => {
		dispatch(toggleMenu());
	};

	return (
		<div className="grid grid-flow-col p-5 m-2 shadow-lg">
			<div className="flex col-span-1">
				<img
					onClick={() => toggleMenuHandler()}
					className="h-8 cursor-pointer"
					alt="menu"
					src="https://cdn3.iconfinder.com/data/icons/minimal-website-ui-kit/100/ld_menu_closed-512.png"
				/>
				<a href="./">
					<img
						className="h-8 mx-2"
						alt="logo"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png"
					/>
				</a>
			</div>
			<div className="col-span-10 px-10">
				<div>
					<input
						type="text"
						className="px-5 border border-gray-400 p-2 w-1/2 rounded-l-full"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						onFocus={() => setShowSuggestions(true)}
						onBlur={() => setShowSuggestions(false)}
					/>
					<button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-200">
						🔍
					</button>
				</div>
				{showSuggestions && (
					<div className="absolute bg-white py-2 px-2 w-[36rem] shadow-lg rounded-lg border border-gray-200">
						<ul>
							{suggestions.map((s) => (
								<li
									key={s}
									className="py-2 px-3 shadow-sm hover:bg-gray-200"
								>
									🔍 {s}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
			<div className="col-span-1">
				<img
					className="h-8"
					alt="user"
					src="https://cdn-icons-png.freepik.com/256/1077/1077114.png?semt=ais_hybrid"
				/>
			</div>
		</div>
	);
};

export default Head;
