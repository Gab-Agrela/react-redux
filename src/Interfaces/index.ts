interface EmailAction {
  type: 'SAVE_EMAIL';
  payload: string;
}

interface UserProps {
  email: string;
  password: string;
}

interface WalletFormProps {
  value: string;
  description: string;
  method: 'Dinheiro' | 'Cartão de Crédito' | 'Cartão de débito';
  tag: 'Alimentação' | 'Lazer' | 'Trabalho' | 'Transporte' | 'Saúde';
}

export type { EmailAction, UserProps, WalletFormProps };