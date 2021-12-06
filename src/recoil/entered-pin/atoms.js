import { atom } from 'recoil';
import { localStorageEffect } from '../helpers';

export const PERSIST_KEY = 'persist:entered-pin';

const initialState = '';

export const enteredPinAtom = atom({
  key: 'enteredPinState',
  default: initialState,
  effects_UNSTABLE: [localStorageEffect(PERSIST_KEY)],
});
