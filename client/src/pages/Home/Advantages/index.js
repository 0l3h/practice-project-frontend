import React from 'react';
import styles from './Advantages.module.sass';
import CONSTANTS from '../../../constants';

function Advantages() {
    return (
        <>
        {/* Pricing */}
        <div className={styles.pricing}>

            {/* Advantages */}
            <div className={styles.advantagesSection}>

                <div className={styles.advantage}>
                    <span className={styles.icon}>
                    <i class='fas fa-angle-right'></i>
                    </span>
                    <div>
                        <h4>Pay a Fraction of cost vs hiring an agency</h4>
                        <p className={styles.pricingInfo}>
                            For as low as $299, our naming contests and marketplace allow you to get an amazing brand quickly and affordably.
                        </p>
                    </div>
                </div>

                <hr/>

                <div className={styles.advantage}>
                    <span className={styles.icon}>
                        <i class='fas fa-angle-right'></i>
                    </span>
                    <div>
                        <h4>Satisfaction Guarantee</h4>
                        <p className={styles.pricingInfo}>
                            Of course! We have policies in place to ensure that you are satisfied with your experience. 
                            <a className={styles.learnMoreLink} href='#'> Learn more</a>
                        </p>
                    </div>
                </div>
            </div>

            {/* Contacts info */}
            <div className={styles.contactsSection}>
                <h4>Questions?</h4>
                <p >Speak with a Squadhelp platform expert to learn more and get your questions answered.</p>
                <a className={styles.scheduleLink} href='#'>
                    Schedule Consultation
                </a>
                <a className={styles.phoneNumber} href={`tel: ${CONSTANTS.CONTACTS.PHONE_NUMBER}`}>
                    <i class="fas fa-phone-volume"></i>
                    {CONSTANTS.CONTACTS.PHONE_NUMBER}
                </a>
                Call us for assistance
            </div>
        </div>
        </>
    )
}

export default Advantages;