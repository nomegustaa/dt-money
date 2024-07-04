import { useMemo } from 'react'
import { TransactionsContext } from '../Contexts/TransactionsContexts'
import { useContextSelector } from 'use-context-selector'

export const useSummary = () => {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const summary = useMemo(() => {
    return transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === 'income') {
          acc.income += transaction.price
          acc.total += transaction.price
        } else {
          acc.outcome += transaction.price
          acc.total -= transaction.price
        }

        return acc
      },
      {
        outcome: 0,
        income: 0,
        total: 0,
      },
    )
  }, [transactions])
  return summary
}
