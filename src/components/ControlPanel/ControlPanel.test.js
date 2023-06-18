import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App/App';

describe('buttonActive', () => {
	const testButtonActive = (testCase) => {
		it('Кнопка оставляет только не выполненные задачи', () => {
			render(<App />);
			const buttonActive = screen.getByText('Active');
			const input = screen.getByPlaceholderText('What needs to be done?');
			testCase.forEach((text) => {
				fireEvent.change(input, { target: { value: text } });
				fireEvent.keyUp(input, { key: 'Enter' });
			});

			const elementsBefore = screen.getAllByRole('checkbox');
			elementsBefore.forEach((el, i) => {
				return i % 2 && fireEvent.click(el);
			});

			fireEvent.click(buttonActive);
			const elementsAfter = screen.getAllByRole('checkbox');

			expect(elementsAfter.every((el) => el.checked === false)).toBe(true);
		});
	};

	const testButtonCompleted = (testCase) => {
		it('Кнопка оставляет только выполненные задачи', () => {
			render(<App />);
			const buttonCompleted = screen.getByText('Completed');
			const input = screen.getByPlaceholderText('What needs to be done?');
			testCase.forEach((text) => {
				fireEvent.change(input, { target: { value: text } });
				fireEvent.keyUp(input, { key: 'Enter' });
			});

			const elementsBefore = screen.getAllByRole('checkbox');
			elementsBefore.forEach((el, i) => {
				return i % 2 && fireEvent.click(el);
			});

			fireEvent.click(buttonCompleted);
			const elementsAfter = screen.getAllByRole('checkbox');

			expect(elementsAfter.every((el) => el.checked === true)).toBe(true);
		});
	};

	const testButtonClearCompleted = (testCase) => {
		it('Кнопка удаляет выполненные задачи', () => {
			render(<App />);
			const buttonClearCompleted = screen.getByText('Clear completed');
			const input = screen.getByPlaceholderText('What needs to be done?');
			testCase.forEach((text) => {
				fireEvent.change(input, { target: { value: text } });
				fireEvent.keyUp(input, { key: 'Enter' });
			});

			const elementsBefore = screen.getAllByRole('checkbox');
			elementsBefore.forEach((el, i) => {
				return i % 2 && fireEvent.click(el);
			});
			const elementsChecked = elementsBefore.filter((el) => el.checked);

			fireEvent.click(buttonClearCompleted);
			const elementsAfter = screen.getAllByRole('checkbox');

			expect(
				elementsAfter.length === elementsBefore.length - elementsChecked.length
			).toBe(true);
		});
	};

	const testCase = ['test text1', 'test text2', 'test text3', 'test text4'];

	testButtonActive(testCase); //остаются только не выполненные задачи
	testButtonCompleted(testCase); //остаются только выполненные задачи
	testButtonClearCompleted(testCase); //кнопка удаляет выполненные задачи
});

