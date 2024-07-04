import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import * as S from './style'
import { priceFormat } from '../../utils/formatter'
import { useSummary } from '../../hooks/useSummary'

const Summary = () => {
  const summary = useSummary()

  return (
    <S.SummaryContainer>
      <S.SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{priceFormat.format(summary.income)}</strong>
      </S.SummaryCard>
      <S.SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>{priceFormat.format(summary.outcome)}</strong>
      </S.SummaryCard>
      <S.SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>{priceFormat.format(summary.total)}</strong>
      </S.SummaryCard>
    </S.SummaryContainer>
  )
}

export default Summary
