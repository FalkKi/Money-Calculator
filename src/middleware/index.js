import * as actionTypes from "../store/actions/actionTypes";
import { getExpenseAmount, putData, getCurrency } from "../api";
import { setExpenseAmount } from "../store/actions/expensesActions";
import { apiEnd, apiError, apiStart } from "../store/actions/apiActions";
import { actualDate } from './../store/reducers/actualDate';
import { setCurrencyData } from './../store/actions/expensesActions';


const apiMiddleware = ({ getState, dispatch }) => next => action => {
    let stateCopy = { ...getState().expenses };
    next(action);
    switch (action.type) {
        case actionTypes.FETCH_EXPENSE_AMOUNT:
            dispatch(apiStart(action.type));
            getExpenseAmount()
                .then(res => {
                    if (res.status === 200) {
                        console.log(res)
                        dispatch(setExpenseAmount(
                            res.data.record
                        ));
                        return;
                    };
                    dispatch(apiError(action.type, res.data.message))
                })
                .finally(() =>
                    dispatch(apiEnd(action.type))
                );
            return;
        case actionTypes.POST_EXPENSE_AMOUNT:
            if (stateCopy[actualDate]) {
                stateCopy[actualDate].moneyAmount -= action.expense.value;
                stateCopy[actualDate].day = action.expense.day;
                stateCopy[actualDate].year = action.expense.year;
                stateCopy[actualDate].month = action.expense.month;
                stateCopy[actualDate].expense.push({
                    category: action.expense.category,
                    value: action.expense.value
                });
            } else {
                stateCopy[actualDate] = {
                    moneyAmount: action.expense.value,
                    day: action.expense.day,
                    year: action.expense.year,
                    month: action.expense.month,
                    expense: [{
                        category: action.expense.category,
                        value: action.expense.value
                    }],
                };
            };

            dispatch(apiStart(action.type));
            putData(stateCopy)
                .then(res => {
                    if (res.status !== 200) {
                        dispatch(apiError(action.type, res.data.status));
                    };
                })
                .finally(() =>
                    dispatch(apiEnd(action.type))
                );
            return;
        case actionTypes.POST_INCOME_AMOUNT:

            if (stateCopy[actualDate]) {
                stateCopy[actualDate].moneyAmount += action.income.value;
                stateCopy[actualDate].day = action.income.day;
                stateCopy[actualDate].year = action.income.year;
                stateCopy[actualDate].month = action.income.month;
                stateCopy[actualDate].income.push({
                    category: action.income.category,
                    value: action.income.value
                });
            } else {
                stateCopy[actualDate] = {
                    moneyAmount: action.income.value,
                    day: action.income.day,
                    year: action.income.year,
                    month: action.income.month,
                    income: [{
                        category: action.income.category,
                        value: action.income.value
                    }],
                };

            }
            dispatch(apiStart(action.type));
            putData(stateCopy)
                .then(res => {
                    if (res.status !== 200) {
                        dispatch(apiError(action.type, res.data.status));
                    };
                })
                .finally(() => dispatch(apiEnd(action.type))
                );
            return;
        case actionTypes.FETCH_CURRENCY_DATA:
            dispatch(apiStart(action.type));
            getCurrency().then(res => {
                if (res.status === 200) {
                    dispatch(setCurrencyData(res.data))
                };
                if (res.status !== 200) {
                    dispatch(apiError(action.type, res.data.status));
                };
            }).finally(() =>
                dispatch(apiEnd(action.type))
            );
            return;
        default:
            return;
    };
};

export default apiMiddleware;;