import React from 'react';
import PropTypes from 'prop-types';

export const TransactionTable = (props) => {
    const {transactions} = props;
    return (
        <table>
            <caption>Transactions</caption>
            <thead>
                <th>
                    <td>Date</td>
                    <td>Operation type</td>
                    <td>Amount</td>
                </th>
            </thead>
            <tbody>{transactions.map(({id, date, operationType, amount}) => 
                <tr key={id}>
                    <td>{date}</td>
                    <td>{operationType}</td>
                    <td>{amount}</td>
                </tr>)}
            </tbody>
        </table>
    )
}

TransactionTable.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            date: PropTypes.string,
            operationType: PropTypes.string,
            amount: PropTypes.number,
        }).isRequired
    )
}

export default TransactionTable;
