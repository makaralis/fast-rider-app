import { atom } from 'recoil';
import { localStorageEffect } from '../helpers';

export const PERSIST_KEY = 'persist:selected-ride';

const initialState = null;

export const selectedRideAtom = atom({
  key: 'selectedRideState',
  default: initialState,
  effects_UNSTABLE: [localStorageEffect(PERSIST_KEY)],
});
