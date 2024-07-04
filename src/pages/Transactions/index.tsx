import Header from '../../components/Header'
import Summary from '../../components/Summary'
import SearchForm from './components/SearchForm'
import * as S from './styles'
import { TransactionsContext } from '../../Contexts/TransactionsContexts'
import { dateFormatter, priceFormat } from '../../utils/formatter'
import { useContextSelector } from 'use-context-selector'

const Transactions = () => {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  return (
    <div>
      <Header />
      <Summary />

      <S.TransactionsContainer>
        <SearchForm />

        <S.TransactionsTable>
          <tbody>
            {transactions.map((transactions) => {
              return (
                <tr key={transactions.id}>
                  <td width="50%">{transactions.describe}</td>
                  <td>
                    <S.PriceHighLight variant={transactions.type}>
                      {transactions.type === 'outcome' && '- '}
                      {priceFormat.format(transactions.price)}
                    </S.PriceHighLight>
                  </td>

                  <td>{transactions.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transactions.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </S.TransactionsTable>
      </S.TransactionsContainer>
    </div>
  )
}

export default Transactions
