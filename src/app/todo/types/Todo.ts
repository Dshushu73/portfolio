export interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

export type FilterType = 'All' | 'Active' | 'Completed'

export type Theme = 'light' | 'dark';