import React, { useState } from 'react';
import style from './SelectOptionUsingUlLi.module.css';
function SelectOptionUsingUlLi({ list }) {
	const [show, setShow] = useState(false);
	const [value, setValue] = useState(null);
	console.log(value);
	return (
		<div className={style.wrap}>
			<button className={style.selectButton} onClick={() => setShow((e) => !e)}>
				<span style={{ flexGrow: 1 }}>{value ? value : 'Select'}</span>
				{show ? (
					<span style={{ marginTop: '5px' }}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
							width={20}
							height={20}
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M4.5 15.75l7.5-7.5 7.5 7.5"
							/>
						</svg>
					</span>
				) : (
					<span style={{ marginTop: '5px' }}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
							width={20}
							height={20}
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M19.5 8.25l-7.5 7.5-7.5-7.5"
							/>
						</svg>
					</span>
				)}
			</button>
			{show && (
				<ul className={style.ul_wrap_box}>
					{list?.map((e, i) => (
						<li key={i}>
							<div
								className={
									value === `main-${e.value}`
										? `${style.active} ${style.inputWrap}`
										: style.inputWrap
								}
							>
								<input
									className={style.hidden}
									type="radio"
									name="location"
									value={`main-${e.value}`}
									id={`select-${i}`}
									onChange={(e) => {
										setValue(e.target.value);
										setShow(false);
									}}
								/>
								<label className={style.label} htmlFor={`select-${i}`}>
									{e.value}
								</label>
							</div>

							{e.sub && (
								<ul className={style.subElements}>
									{e.sub?.map((sub, j) => (
										<li
											className={
												value === `main-${e.value} sub-${sub.value}`
													? style.active
													: ' '
											}
											key={j}
										>
											<input
												className={style.hidden}
												type="radio"
												name="location"
												value={`main-${e.value} sub-${sub.value}`}
												id={`sub-select-${i}-${j}`}
												onChange={(e) => {
													setValue(e.target.value);
													setShow(false);
												}}
											/>
											<label htmlFor={`sub-select-${i}-${j}`}>
												{sub.value}
											</label>
										</li>
									))}
								</ul>
							)}
						</li>
					))}
				</ul>
			)}
			<div>
				<pre>
					{JSON.stringify(
						[
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
						],
						null,
						2
					)}
				</pre>
			</div>
		</div>
	);
}

export default SelectOptionUsingUlLi;
