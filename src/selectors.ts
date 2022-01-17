import { ReduxState } from './types'

export const getIsDropdownMenuVisible = (state: ReduxState) =>
  state.isDropdownMenuVisible

export const isCompanySelected = (state: ReduxState, props: { id: number }) =>
  state.selectedCompanyId === props.id

export const getSelectedCompanyId = (state: ReduxState) =>
  state.selectedCompanyId

export const getCompanies = (state: ReduxState) =>
  state.companies
