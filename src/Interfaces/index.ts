interface RootState {
  user: {
    email: string
  },
  wallet: {
    expenses: WalletFormProps[],
    editExpenseId: number,
  }
}

interface EmailAction {
  type: 'SAVE_EMAIL';
  payload: string;
}

interface WalletAction {
  type: string ,
  payload: WalletFormProps | number
}

interface UserProps {
  email: string;
  password: string;
}

interface WalletFormProps {
  id: number,
  value: string;
  description: string;
  method: 'Dinheiro' | 'Cartão de Crédito' | 'Cartão de débito';
  tag: 'Alimentação' | 'Lazer' | 'Trabalho' | 'Transporte' | 'Saúde';
}

export type { EmailAction, UserProps, WalletFormProps, WalletAction, RootState };