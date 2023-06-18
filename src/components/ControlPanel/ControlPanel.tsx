import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { TControlPanel, TTodos } from '../../types';

const button = {
	minWidth: '25px',
	height: '25px',
	padding: '2px',
	color: '#161515a1',
	textTransform: 'lowercase',
};

function ControlPanel({ todos, setTodos }: TControlPanel) {
	const [activeButton, setAvtiveButton] = useState('All');

	const handleClearCompleted = () => {
		setTodos((prev: TTodos[]) => prev.filter((el) => !el.done));
	};

	const handleAll = () => {
		setAvtiveButton('All');
		setTodos((prev: TTodos[]) =>
			prev.map((el) => ({ ...el, visibility: true }))
		);
	};

	const handleActive = () => {
		setAvtiveButton('Active');
		setTodos((prev: TTodos[]) =>
			prev.map((el) =>
				el.done ? { ...el, visibility: false } : { ...el, visibility: true }
			)
		);
	};

	const handleCompleted = () => {
		setAvtiveButton('Completed');
		setTodos((prev: TTodos[]) =>
			prev.map((el) =>
				el.done ? { ...el, visibility: true } : { ...el, visibility: false }
			)
		);
	};

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				padding: '10px',
			}}>
			<Typography
				variant='caption'
				sx={{
					margin: '0',
					fontSize: '0.875rem',
					color: '#161515a1',
				}}>
				{`${todos.filter((el: TTodos) => !el.done).length} items left`}
			</Typography>

			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					gap: '10px',
					margin: 0,
				}}>
				<Button
					sx={button}
					onClick={handleAll}
					style={{
						border: activeButton === 'All' ? '1px solid #cc2d2678' : 'none',
					}}>
					All
				</Button>
				<Button
					sx={button}
					onClick={handleActive}
					style={{
						border: activeButton === 'Active' ? '1px solid #cc2d2678' : 'none',
					}}>
					Active
				</Button>
				<Button
					sx={button}
					onClick={handleCompleted}
					style={{
						border:
							activeButton === 'Completed' ? '1px solid #cc2d2678' : 'none',
					}}>
					Completed
				</Button>
			</Box>
			<Button sx={button} onClick={handleClearCompleted}>
				Clear completed
			</Button>
		</Box>
	);
}

export default ControlPanel;

