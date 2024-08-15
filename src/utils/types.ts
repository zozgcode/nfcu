// src/utils/types.ts
export interface Account {
  account_id: string;
  holder: {
    firstName?: string;
    lastName?: string;
    mobileNumber?: string;
    nickName?: string;
    gender?: string;
    email?: string;
    jointNames: string;
    username: string;
    password: string;
  };
  bank_details: {
    bank_name?: string;
    branch?: string;
    account_number?: string;
    routing_number?: string;
    swift_code?: string;
    account_type: string;
    balance_usd: number;
  };
  transaction_mgs_code: {
    transaction_text_msg?: string;
    transaction_code?: string;
    wireDate: boolean;
  };
  transaction_history: Transaction[];
}

export interface Transaction {
  transaction_id: string;
  dateTime: string;
  // time: string;
  description: string;
  status: string;
  amount_usd: number;
  account_no: string;
}