/* eslint-disable @typescript-eslint/no-redeclare */

export type PathogenTestResultType =
  | 'INDETERMINATE'
  | 'PENDING'
  | 'NEGATIVE'
  | 'POSITIVE'
  | 'NOT_DONE';

export const PathogenTestResultType = {
  INDETERMINATE: 'INDETERMINATE' as PathogenTestResultType,
  PENDING: 'PENDING' as PathogenTestResultType,
  NEGATIVE: 'NEGATIVE' as PathogenTestResultType,
  POSITIVE: 'POSITIVE' as PathogenTestResultType,
  NOTDONE: 'NOT_DONE' as PathogenTestResultType,
};
