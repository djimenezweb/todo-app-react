import { useState } from 'react';

/* const allTasks = []

const setAllTasks = value =>{
	allTasks = value
} */

/* const useState = (initialState)=>{
	const setInitialState = value =>{
		initialState = value
	}
	return [initialState, setInitialState];
} */

const Form = () => {
	const [allTasks, setAllTasks] = useState([]);
	console.log(allTasks);

	return (
		<>
			<form onSubmit={e => handleSubmit(e, allTasks, setAllTasks)}>
				<label></label>
				<input type='text' name='task' placeholder='Create a new todo...' />
			</form>
			{allTasks.map(task => {
				return (
					<div key={task.id}>
						<input
							onChange={() => updateCheck(task.id, allTasks, setAllTasks)}
							type='checkbox'
							id={task.id}
						/>
						<label htmlFor={task.id}>{task.task}</label>
						<img src='assets/images/icon-cross.svg' />
					</div>
				);
			})}
		</>
	);
};

const updateCheck = (id, allTasks, setAllTasks) => {
	const newTasks = allTasks.map(item =>
		item.id === id ? (item.checked = !item.checked) : item
	);
	setAllTasks(newTasks);
};

const handleSubmit = (e, allTasks, setAllTasks) => {
	e.preventDefault();
	const newObject = {};
	const timeStamp = Date.now();
	newObject.id = timeStamp;
	newObject.task = e.target.task.value;
	newObject.checked = false;
	setAllTasks([...allTasks, newObject]);
};

export default Form;
