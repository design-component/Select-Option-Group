import React from 'react';

function One({ list }) {
	return (
		<div>
			<select>
				{list.map((e) => (
					<option key={e.id} value="volvo">
						{e.value}
					</option>
				))}
				{/* <optgroup label="Swedish Cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
    </optgroup>
    <optgroup label="German Cars">
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
    </optgroup> */}
			</select>
			<select>
				{list.map((e) => (
					<optgroup key={e.id} label="group">
						<option value="volvo">{e.value}</option>
						{e.sub?.map((j) => (
							<option key={j.id} value="saab">
								---{j.value}
							</option>
						))}
					</optgroup>
				))}
			</select>
		</div>
	);
}

export default One;
