import React, {useReducer, useCallback, useEffect} from 'react';
import Table from './Table';

const initialState = {
    winner: '',
    trun: 'O',
    tableData: [ // 19x19
        ['','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','',''],
    ],
    recentCell: [-1, -1],
}

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';

const reducer = (state, action) => {
    switch(action.type) {
        case CLICK_CELL: {
            const tableData = [...state.tableData];
            tableData[action.row] = [...tableData[action.row]];
            tableData[action.row][action.cell] = stat.turn;
            return {
                ...state,
                tableData,
                recentCell: [action.row, action.cell],
            };
        }
        case CHANGE_TURN: {
            return{
                ...state,
                turn: state.turn === 'O' ? 'X' : 'O',
            }
        }
        default:{
            return state;
        }
    }
}

const Omok = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {tableData, turn, winner, recentCell} = state;

    const onClickTable = useCallback(()=>{
        dispatch({type: SET_WINNER, winner: 'O'});
    }, []);
    return(
        <>
        </>
    );
}

export default Omok;