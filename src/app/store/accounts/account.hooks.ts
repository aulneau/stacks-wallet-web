import { useAtom } from 'jotai';
import { useAtomValue, useUpdateAtom } from 'jotai/utils';
import { transactionNetworkVersionState } from '@app/store/transactions';
import {
  accountsWithAddressState,
  currentAccountAvailableAnchoredStxBalanceState,
  currentAccountBalancesUnanchoredState,
  currentAccountConfirmedTransactionsState,
  currentAccountIndexState,
  currentAccountInfoState,
  currentAccountMempoolTransactionsState,
  currentAccountState,
  currentAccountStxAddressState,
  hasSwitchedAccountsState,
  refreshAccountDataState,
  transactionAccountIndexState,
} from '@app/store/accounts';

export function useCurrentAccountAvailableStxBalance() {
  return useAtomValue(currentAccountAvailableAnchoredStxBalanceState);
}

export function useAccountConfirmedTransactions() {
  return useAtomValue(currentAccountConfirmedTransactionsState);
}

export function useSetMempoolTransactions() {
  return useUpdateAtom(currentAccountMempoolTransactionsState);
}

export function useAccounts() {
  return useAtomValue(accountsWithAddressState);
}

export function useCurrentAccountStxAddressState() {
  return useAtomValue(currentAccountStxAddressState);
}

export function useCurrentAccountInfo() {
  return useAtomValue(currentAccountInfoState);
}

export function useCurrentAccount() {
  return useAtomValue(currentAccountState);
}

export function useCurrentAccountIndex() {
  return useAtomValue(currentAccountIndexState);
}

export function useTransactionAccountIndex() {
  return useAtomValue(transactionAccountIndexState);
}

export function useTransactionNetworkVersion() {
  return useAtomValue(transactionNetworkVersionState);
}

export function useHasSwitchedAccounts() {
  return useAtom(hasSwitchedAccountsState);
}

export function useRefreshAccountData() {
  return useUpdateAtom(refreshAccountDataState);
}

export function useSetAccountBalancesUnanchoredState() {
  return useUpdateAtom(currentAccountBalancesUnanchoredState);
}

export function useSetAccountInfo() {
  return useUpdateAtom(currentAccountInfoState);
}
