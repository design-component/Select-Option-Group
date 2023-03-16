import React from 'react';
import './App.css';
import SelectOptionUsingUlLi from './selectUL-LI/SelectOptionUsingUlLi';
import One from './one/one';
import SelectLine from './select-line/SelectLine';
function App() {
	const list = [
		{ id: 1, value: '1' },
		{ id: 2, value: '2' },
		{
			id: 3,
			value: '3',
			sub: [
				{ id: 31, value: '3.1' },
				{ id: 32, value: '3.2' },
			],
		},
		{ id: 4, value: '4' },
		{
			id: 5,
			value: '5',
			sub: [
				{ id: 51, value: '5.1' },
				{ id: 52, value: '5.2' },
			],
		},
	];
	return (
		<div>
			<h1>Using ul li tag for create sub multiple dropdown</h1>
			<SelectOptionUsingUlLi list={list} />
			<SelectLine />
			<One list={list} />
		</div>
	);
}

export default App;
