import style from './SelectLine.module.css';

function SelectLine() {
	return (
		<div class={style.NestedSelect}>
			<label>
				<input type="radio" name="MySelectInputName" />
				<span>Fruit</span>
			</label>
			<div>
				<label>
					<input type="radio" name="MySelectInputName" />
					<span>Apple</span>
				</label>
				<label>
					<input type="radio" name="MySelectInputName" />
					<span>Banana</span>
				</label>
				<label>
					<input type="radio" name="MySelectInputName" />
					<span>Orange</span>
				</label>
			</div>

			<label>
				<input type="radio" name="MySelectInputName" />
				<span>Drink</span>
			</label>
			<div>
				<label>
					<input type="radio" name="MySelectInputName" />
					<span>Water</span>
				</label>

				<label>
					<input type="radio" name="MySelectInputName" />
					<span>Soft</span>
				</label>
				<div>
					<label>
						<input type="radio" name="MySelectInputName" />
						<span>Cola</span>
					</label>
					<label>
						<input type="radio" name="MySelectInputName" />
						<span>Soda</span>
					</label>
					<label>
						<input type="radio" name="MySelectInputName" />
						<span>Lemonade</span>
					</label>
					<div>
						<label>
							<input type="radio" name="MySelectInputName" />
							<span>Cola</span>
						</label>
						<label>
							<input type="radio" name="MySelectInputName" />
							<span>Soda</span>
						</label>
						<label>
							<input type="radio" name="MySelectInputName" />
							<span>Lemonade</span>
						</label>
					</div>
				</div>

				<label>
					<input type="radio" name="MySelectInputName" />
					<span>Hard</span>
				</label>
				<div>
					<label>
						<input type="radio" name="MySelectInputName" />
						<span>Bear</span>
					</label>
					<label>
						<input type="radio" name="MySelectInputName" />
						<span>Whisky</span>
					</label>
					<label>
						<input type="radio" name="MySelectInputName" />
						<span>Vodka</span>
					</label>
					<label>
						<input type="radio" name="MySelectInputName" />
						<span>Gin</span>
					</label>
				</div>
			</div>
		</div>
	);
}

export default SelectLine;
