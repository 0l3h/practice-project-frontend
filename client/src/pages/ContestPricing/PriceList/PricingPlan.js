import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PricingPlan.module.sass';

const pricingStyles = [
    {border: '8px solid #d1b760', color: '#d1b760'},
    {border: '8px solid #f0bd3e', color: '#f0bd3e'},
    {border: '8px solid #545454', color: '#545454'},
    {border: '8px solid #20e6d8', color: '#20e6d8'}
]

const buttonStyles = [
    {backgroundColor: '#d1b760'},
    {backgroundColor: '#f0bd3e'},
    {backgroundColor: '#545454'},
    {backgroundColor: '#20e6d8'}
]

function PricingPlan(props) {
    const {
        planName, 
        description, 
        price: {currency, amount}, 
        advantages, index,
    } = props;

    // Создать подробный список
    const createFeaturesSublist = ({tooltip, text}) => 
        <li className={`${styles.advantage} ${styles.featureSublist}`} data-tooltip={tooltip}>
            <i className={`fas fa-check ${styles.sublistItemIcon}`}/>
            {text}
        </li>

    // Создать список преимуществ плана
    const createFeaturesList = ({tooltip, text, featureSublist}) => {
        return <>
            {Array.isArray(featureSublist)?
                <>
                    <li className={styles.advantage} data-tooltip={tooltip}>
                        {text}
                    </li>
                    {featureSublist.map(createFeaturesSublist)}               
                </>
                :
                <li className={styles.advantage} data-tooltip={tooltip} >
                    {text}
                </li>
            }
        </>
    }

    return <>
        <article className={styles.planStyle} key={index}>
            {/* Название плана */}
            <section style={pricingStyles[index]} className={styles.plan}>
                <h3>{planName}</h3>
                <p className={styles.description}>{description}</p>
                <h3 className={styles.price}>{currency}{amount}</h3>
            </section>

            {/* Состав, преимущества плана */}
            <ul className={styles.advantagesList}>
                {advantages.map(createFeaturesList)}
            </ul>

            {/* Кнопка начать план */}
            <Link>
                <li style={buttonStyles[index]} className={styles.startButton}>
                    <i className='fas fa-check'/> Start
                </li>
            </Link> 
        </article>
    </>
}

export default PricingPlan;