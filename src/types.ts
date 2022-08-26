export interface Transaction {
        description: string;
        amount: number;
        id: number;
        date: Date;
}
export interface Transactions {
    income: Transaction[];
    outcome: Transaction[];
}

export const placeholderTransactions:Transactions = {
    income: [
        {
            description: 'side hustle',
            amount: 60,
            id: 2,
            date: new Date()
        },
        {
            description: 'salary',
            amount: 300,
            id: 3,
            date: new Date()
        },
    ],
    outcome: [
        {
            description: 'spotify',
            amount: -40,
            id: 0,
            date: new Date()
        },
        {
            description: 'students loan',
            amount: -60,
            id: 1,
            date: new Date()
        },
    ]
}
