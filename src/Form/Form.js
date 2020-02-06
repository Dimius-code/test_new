import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';


	const Form =({
		onDelete
	})=>{
		return(
			<React.Fragment>
				<fieldset>
				<legend>Personal information:</legend>
				<Input
						type="text"
						name="name"
						placeholder="Name"

				/>
				<Input
						type="email"
						name="email"
						placeholder="Email"
				/>
				<Button 
						title="Delete"
						onClick={onDelete}
				/>
				</fieldset>
			</React.Fragment>
				
		);
	}

	


export default Form;