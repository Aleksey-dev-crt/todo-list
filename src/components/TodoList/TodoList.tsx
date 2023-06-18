import { Fragment } from 'react';
import { Box, Checkbox, Collapse, Divider, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { TTodoList, TTodos } from '../../types';

function TodoList({ todos, setTodos, expanded }: TTodoList) {
	const checkboxHandler = (idx: number) => {
		setTodos((prev: TTodos[]) =>
			prev.map((el, i: number) => (idx === i ? { ...el, done: !el.done } : el))
		);
	};

	return (
		<Collapse in={expanded} timeout='auto' unmountOnExit>
			{todos.map(
				(todo: TTodos, idx: number) =>
					todo.visibility && (
						<Fragment key={todo.id}>
							<Box sx={{ display: 'flex', paddingRight: '5px' }}>
								<Checkbox
									onChange={() => checkboxHandler(idx)}
									checked={todo.done}
									icon={<RadioButtonUncheckedIcon />}
									color='success'
									checkedIcon={<CheckCircleOutlineIcon />}
								/>

								<Typography
									sx={{
										margin: '16px 0',
										textDecoration: todo.done ? 'line-through' : 'none',
										opacity: todo.done ? '0.5' : '1',
									}}
									paragraph>
									{todo.text}
								</Typography>
							</Box>
							<Divider />
						</Fragment>
					)
			)}
		</Collapse>
	);
}

export default TodoList;

