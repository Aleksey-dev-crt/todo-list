export type TTodos = {
	id: string;
	done: boolean;
	text: string;
	visibility: boolean;
};

export type TTodoList = {
	todos: TTodos[];
	setTodos: (arg: TTodos[] | ((prev: TTodos[]) => TTodos[])) => void;
	expanded: boolean;
};

export type TControlPanel = {
	todos: TTodos[];
	setTodos: (arg: TTodos[] | ((prev: TTodos[]) => TTodos[])) => void;
};

export type TTodoInput = {
	setTodos: (arg: TTodos[] | ((prev: TTodos[]) => TTodos[])) => void;
	setExpanded: (arg: boolean) => void;
	expanded: boolean;
};
