import React from 'react';
import styles from './FAQsArticle.module.sass';
import CONSTANTS from './../../../constants';

function FAQsArticle() {
    return (
      <>
        <div className={styles.headerArticle}>
          I have other questions! How can I get in touch with Squadhelp?
        </div>
        <div className={styles.article}>
          Check out our {' '}
          <span className={styles.orangeSpan}>FAQs</span> or send us a {' '}  
          <span className={styles.orangeSpan}>message</span>. 
          For assistance with launching a contest, you can also call us at 
          {CONSTANTS.CONTACTS.PHONE_NUMBER} or schedule a {' '}
          <span className={styles.orangeSpan}>Branding Consultation</span>.
        </div>
      </>
    )
}

export default FAQsArticle;