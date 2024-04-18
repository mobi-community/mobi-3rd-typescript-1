export interface IncrementAction {
    type: "INCREMENT";
}

export interface DecrementAction {
    type: "DECREMENT";
}

export type Action = IncrementAction | DecrementAction;
