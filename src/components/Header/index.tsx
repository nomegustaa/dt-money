import * as S from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import Logo from '../../assets/logo.svg'
import NewTransactionsModal from '../NewTransactionsModal'

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <img src={Logo} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <S.NewTransactionButton>Nova transação</S.NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionsModal />
        </Dialog.Root>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}

export default Header
