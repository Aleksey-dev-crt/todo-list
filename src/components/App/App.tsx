import { useState } from 'react';
import { Box } from '@mui/material';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';
import ControlPanel from '../ControlPanel/ControlPanel';
import { TTodos } from '../../types';

function App() {
	const [expanded, setExpanded] = useState(true);
	const [todos, setTodos] = useState([] as TTodos[]);

	return (
		<Box
			sx={{
				width: '700px',
				margin: '10% auto 0',
				border: '1px rgba(0, 0, 0, 0.12) solid',
				boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
			}}>
			<TodoInput
				setTodos={setTodos}
				setExpanded={setExpanded}
				expanded={expanded}
			/>
			<TodoList todos={todos} setTodos={setTodos} expanded={expanded} />
			<ControlPanel todos={todos} setTodos={setTodos} />
		</Box>
	);
}

export default App;

