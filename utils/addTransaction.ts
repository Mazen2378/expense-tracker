export const AddTransaction = (transactions:any,setTransactions:any,input:{description:string;amount:string;category:string;}) => {
        if (input.description.trim() === '') return
        const date = new Date()
        const variant = Number(input.amount) > 0 ? transactions.income : transactions.outcome;
        const newTransaction = {
            description: input.description,
            amount: Number(input.amount),
            id: variant.length > 0 ? variant[0].id + 1 : 0,
            date,
          category: input.category 
        }
        if (newTransaction.amount > 0) {
            localStorage.setItem("transactions", JSON.stringify({ outcome: transactions.outcome, income: [newTransaction, ...transactions.income] }))
            setTransactions({ outcome: transactions.outcome, income: [newTransaction, ...transactions.income] })
        } else {
            localStorage.setItem("transactions", JSON.stringify({ income: transactions.income, outcome: [newTransaction, ...transactions.outcome] }))
            setTransactions({ income: transactions.income, outcome: [newTransaction, ...transactions.outcome] })
        }

}
