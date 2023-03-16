import React, { useState } from 'react';
import style from './SelectOptionUsingUlLi.module.css';
function SelectOptionUsingUlLi({ list }) {
	const [show, setShow] = useState(false);
	const [value, setValue] = useState(null);
	console.log(value);
	return (
		<div className={style.wrap}>
			<button className={style.selectButton} onClick={() => setShow((e) => !e)}>
				<span>{value ? value : 'Select'}</span>
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
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse id
				exercitationem, impedit earum deserunt illum officiis ullam. Odit
				quibusdam architecto perspiciatis inventore molestias atque praesentium
				eveniet officia sequi maxime. Saepe, dolorum consequatur? Ipsa enim
				nesciunt commodi iure repellendus nisi impedit error nulla dolores esse
				totam dolor sapiente in, saepe porro deleniti. Officia eligendi eos
				laudantium quidem recusandae reprehenderit dolorem repellat veniam in!
				Eos dolore, ab repellat corporis eligendi fugit, illo minima tempora
				obcaecati enim placeat labore. Quasi asperiores accusantium, quia
				placeat temporibus debitis exercitationem necessitatibus quam accusamus
				provident quaerat, magnam, maxime cumque consectetur nobis consequuntur
				aspernatur harum possimus veritatis reprehenderit?
			</div>
		</div>
	);
}

export default SelectOptionUsingUlLi;
