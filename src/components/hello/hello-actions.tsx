
import HelloConstants from './constants';
import { Action } from 'redux';

export interface IncrementEnthusiasmAction extends Action {
}

export interface DecrementEnthusiasmAction extends Action {
}

export function incrementEnthusiasm(): IncrementEnthusiasmAction {
    return {
        type: HelloConstants.INCREMENT_ENTHUSIASM
    };
}

export function decrementEnthusiasm(): DecrementEnthusiasmAction {
    return {
        type: HelloConstants.DECREMENT_ENTHUSIASM
    };
}

export type EnthusiasmActions = IncrementEnthusiasmAction | DecrementEnthusiasmAction;
