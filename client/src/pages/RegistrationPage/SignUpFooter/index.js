import React from 'react';
import styles from './SignUpFooter.module.sass';
import FAQsArticle from './../FAQsArticle';
import info from './Info.json';

function SignUpFooter() {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.articlesMainContainer}>
                    {/* First column */}
                    <div className={styles.columnContainer}>
                        {info[0].map((article, index) => 
                        <div key={index}>
                            <div className={styles.headerArticle}>
                            {article.title}
                            </div>
                            <div className={styles.article}>
                            {article.content}
                            </div>
                        </div>
                        )}
                    </div>

                    {/* Second column */}
                    <div className={styles.columnContainer}> {
                        info[1].map((article, index) => 
                        <div key={index}>
                            <div className={styles.headerArticle}>
                                {article.title}
                            </div>
                            <div className={styles.article}>
                                {article.content}
                            </div>
                        </div>
                        )}
                    
                        <FAQsArticle/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUpFooter
