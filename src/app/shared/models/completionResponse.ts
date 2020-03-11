export enum CompletionState {
	Success,
	Failure,
	Warning
}

export interface CompletionResponse<T> {
	data?: T;
	state: CompletionState;
	message?: any;
}
