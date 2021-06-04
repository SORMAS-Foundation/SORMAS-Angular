/* eslint-disable @typescript-eslint/no-redeclare */

export type SimpleTestResultType = 'POSITIVE' | 'NEGATIVE' | 'INDETERMINATE';

export const SimpleTestResultType = {
  POSITIVE: 'POSITIVE' as SimpleTestResultType,
  NEGATIVE: 'NEGATIVE' as SimpleTestResultType,
  INDETERMINATE: 'INDETERMINATE' as SimpleTestResultType,
};
