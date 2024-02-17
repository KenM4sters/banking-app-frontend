export type User = {
    name: string,
    email: string,
    password: string,
    cardBalance: number
};

export type TransactionType = {
    debit: number,
    credit: number
}

export type Transaction = {
    netAmount: number,
    isDebit: boolean,
    finalBalance: number
    date: string,
}
