import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './ContestPricing.module.sass';
import PricingList from './PriceList'

function ContestPricing() {
    return (
        <>
            <Header/>
            <article className={styles.pricingContainer}>
                <PricingList priceListStyle={styles.priceList} pricingPlanStyle={styles.pricingPlanStyle}/>
            </article>
            <Footer/>
        </>
    )
}

export default ContestPricing;