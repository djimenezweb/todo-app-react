const Form = () => {
	return (
		<>
			<form onSubmit={e => handleSubmit(e)}>
				<label></label>
				<input type='text' name='task' placeholder='Create a new todo...' />
			</form>
		</>
	);
};

const handleSubmit = e => {
	e.preventDefault();
	console.log(e.target.task.value);
};

export default Form;
