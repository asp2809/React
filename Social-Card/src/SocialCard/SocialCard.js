import React, { Component } from 'react';

import cx from 'classnames';
import globalStyles from '../Assets/global-styles/bootstrap.min.module.css';
import styles from './SocialCard.module.css';

class SocialCard extends Component {
    render () {
        return (
            <div className={cx(globalStyles['row'],styles.SocialCard)}>
                <div className={globalStyles["col-sm-1.5"]}>
                    <img style={{ borderRadius: "50%", border: "1px solid black" }}src="https://img.icons8.com/color/48/000000/businessman.png" alt="Profile Pic"/>
                </div>
                <div className={cx(globalStyles.row, globalStyles["col-sm-11"])}>
                    <p className={cx(globalStyles['col-sm-11'])} style={{marginBottom: '0px'}}><span style={{fontWeight: '600'}}>The Practical Dev</span>&nbsp;<span style={{color: '#ccc'}}>@ThePracticalDev&nbsp;.&nbsp;Sep 10</span></p>
                    <div className={globalStyles['col-sm-1']} style={{marginBottom: '0px'}}><img width="16px" src="https://img.icons8.com/color/48/000000/expand-arrow.png" alt="DownArrow" /></div>
                    <p className={globalStyles['col-sm-12']} style={{marginBottom: '0px', fontSize: '13px'}}>Learning React? Start Small.</p>
                    <p className={globalStyles['col-sm-12']} style={{marginBottom: '0px', fontSize: '13px'}}>{"{author: @ossia}"}</p>
                    <div className={cx(globalStyles['col-sm-12'], styles.Card)}>
                        <div className={cx(globalStyles['col-sm-12'])} style={{marginBottom: '0%', padding: '0px'}}>
                        <img  className={styles.cardImage} width="100%" src="https://cdn-images-1.medium.com/max/2000/1*o5JioPIf2Y7fwXWvhLf_CA.png" alt="react" />
                        </div>
                        <div className={cx(globalStyles['col-sm-12'], styles.cardBottom)}>
                            <p className={globalStyles['col-sm-12']} style={{fontWeight: '600', padding: '10px 0 0 0', marginBottom: '0px'}}>Learning React? Start Small.</p>
                            <p className={globalStyles['col-sm-12']} style={{marginBottom: '1%', fontWeight: '400', padding: '0px'}}>Can't pry yourself away from the tutorials? The cure is to make tiny little experiment apps.</p>
                            <p className={globalStyles['col-sm-12']} style={{color: '#ccc', padding: '0px'}}>dev.to</p>
                        </div>
                    </div>
                    <div className={cx(globalStyles.row, globalStyles['col-sm-12'])} style={{marginTop: '2%'}}>
                        <div className={cx(globalStyles['col-sm-3'], styles.comment)}><i class="far fa-comment"></i>&nbsp; 2</div>
                        <div className={cx(globalStyles['col-sm-3'], styles.retweet)}><i class="fas fa-retweet"></i>&nbsp; 2</div>
                        <div className={cx(globalStyles['col-sm-3'], styles.favourite)}><i class="far fa-heart"></i>&nbsp; 2</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SocialCard;