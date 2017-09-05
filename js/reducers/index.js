import { combineReducers } from 'redux';
import items from './items';
import board from './board';

export  default combineReducers(
    {
        items,
        board
    }
)