import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../Redux/usarSlice";

function Form() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const dispatch = useDispatch();
	const sumForm = (e) => {
		e.preventDefault();
		dispatch(addUser({ name, email }));
	};
	useEffect(() => {
		console.log(name + "|" + email);
	});

	return (
		<div>
			<form onSubmit={sumForm}>
				<div>
					<input
						type='text'
						placeholder='Neme'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div>
					<input
						type='email'
						placeholder='Emell'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<button type='submit' placeholder='submit'>
						submit
					</button>
				</div>
			</form>
		</div>
	);
}

export default Form;
