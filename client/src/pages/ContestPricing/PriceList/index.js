import React from 'react';
import PricingPlan from './PricingPlan';
import pricingInfo from './info.json';

function PriceList(props) {
    const {priceListStyle, planStyle} = props;

    // Создать план
    const createPricingPlans = (plan, index) => 
        <PricingPlan {...plan} index={index} planStyle={planStyle}/>;

    return (
        <ul className={priceListStyle}>
            {pricingInfo.map(createPricingPlans)}
        </ul>
    )
}

export default PriceList;