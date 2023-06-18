import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { v4 } from 'uuid';
import { Box, Input, InputAdornment, styled } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { TTodoInput, TTodos } from '../../types';

interface ExpandMoreProps extends IconButtonProps {
	expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}));

function TodoInput({ setTodos, setExpanded, expanded }: TTodoInput) {
	const [inputValue, setInputValue] = useState('');

	const ExpandClickHandler = () => {
		setExpanded(!expanded);
	};

	const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const enterInputHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' && inputValue) {
			setTodos((prev: TTodos[]) => [
				...prev,
				{ id: v4(), done: false, text: inputValue, visibility: true },
			]);
			setInputValue('');
		}
	};

	return (
		<Box sx={{ display: 'flex', alignItems: 'center' }}>
			<Input
				onChange={inputHandler}
				onKeyUp={enterInputHandler}
				value={inputValue}
				sx={{ width: '100%', padding: '13px' }}
				id='input-with-icon-adornment'
				placeholder='What needs to be done?'
				startAdornment={
					<InputAdornment position='start'>
						<ExpandMore
							expand={expanded}
							onClick={ExpandClickHandler}
							aria-expanded={expanded}
							aria-label='show more'>
							<ExpandMoreIcon />
						</ExpandMore>
					</InputAdornment>
				}
			/>
		</Box>
	);
}

export default TodoInput;

