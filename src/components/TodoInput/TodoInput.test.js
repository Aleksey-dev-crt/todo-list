import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App/App';

describe('TodoInput', () => {
	const testTodoInput = (testCase) => {
		it('Инпут корректно добавляет задачи', () => {
			render(<App />);
			const input = screen.getByPlaceholderText('What needs to be done?');
			testCase.forEach((text) => {
				fireEvent.change(input, { target: { value: text } });
				fireEvent.keyUp(input, { key: 'Enter' });
			});

			const elements = screen.getAllByRole('paragraph');

			expect(elements.every((el, i) => el.textContent === `test text${i + 1}`)).toBe(true);
		});
	};

	const testCase = ['test text1', 'test text2', 'test text3', 'test text4'];

	testTodoInput(testCase); //инпут корректно добавляет задачи
});

