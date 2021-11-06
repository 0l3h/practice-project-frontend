import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getTransactionsAction } from '../../actions/actionCreator';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import styles from './TransactionPage.module.sass';
import TransactionTable from './TransactionTable';

function TransactionPage(props) {
    const { isFetching, error, transactions, getTransactions } = props;

    useEffect(() => {
        getTransactions();
    }, [])

    return (
        <>
            <Header/>
            {isFetching && <div>Loading</div>}
            {error && <div>ERROR</div>}
            {!(isFetching && error) && 
                <div className={styles.transactionTableContainer}>
                    <TransactionTable transactions={transactions}/>
                </div>
            }
            <Footer/>
        </>
    )
}

const mapStateToProps = state => state.transactions;
const mapDispatchToProps = dispatch => ({
    getTransactions: () => dispatch(getTransactionsAction())
}); 

export default connect(mapStateToProps, mapDispatchToProps)(TransactionPage);