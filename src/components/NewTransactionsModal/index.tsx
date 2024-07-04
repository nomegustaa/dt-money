import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as z from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionsContext } from '../../Contexts/TransactionsContexts'
import { useContextSelector } from 'use-context-selector'

const newTransactionFormSchema = z.object({
  describe: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type newTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

const NewTransactionsModal = () => {
  const createTransactions = useContextSelector(
    TransactionsContext,
    (content) => {
      return content.createTransactions
    },
  )
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<newTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'income',
    },
  })

  const handleCreatNewTransactions = async (data: newTransactionFormInputs) => {
    const { category, describe, price, type } = data

    await createTransactions({ category, describe, price, type })

    reset()
  }

  return (
    <Dialog.Portal>
      <S.Overley />
      <S.Content>
        <S.CloseButton>
          <X size={24} />
        </S.CloseButton>
        <Dialog.Title>Nova transação</Dialog.Title>

        <form onSubmit={handleSubmit(handleCreatNewTransactions)}>
          <input
            {...register('describe')}
            type="text"
            placeholder="Descrição"
            required
          />
          <input
            {...register('price', { valueAsNumber: true })}
            type="number"
            placeholder="Preço"
            required
          />
          <input
            {...register('category')}
            type="text"
            placeholder="Categoria"
            required
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <S.TractionsType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <S.TractionsTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </S.TractionsTypeButton>
                  <S.TractionsTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Saída
                  </S.TractionsTypeButton>
                </S.TractionsType>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </S.Content>
    </Dialog.Portal>
  )
}

export default NewTransactionsModal
