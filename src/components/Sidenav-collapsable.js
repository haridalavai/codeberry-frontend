import React from 'react';
import Sidenav from './Sidenav';
import Profile from './Profile';
import Menuitems from './Menuitems';
import './SIdebar-collapsable.css';
const SidenavCollapsable = ({ active }) => {
  return (
    <div className="">
      <>
        <div className={`sidenav__c ${active ? 'sidenav__c__active' : ''}`}>
          <div className="sidenav__profile__c ">
            <Profile />
          </div>
          <div className="sidenav__navSection__c">
            <span className="sidenav__sectionTitle__c">GENERAL</span>
            <div className="menuitem">
              <img
                src="/images/ic_dashboard.svg"
                className="menuitems__icon"
                alt=""
              />
              <span className="menuitem__title">Dashboard</span>
              <img
                src="/images/ic_chevron_right.png"
                alt="jhg"
                className="menuitems__icon"
              />
            </div>
            <span className="sidenav__sectionTitle__c">MANAGEMENT</span>

            <Menuitems title={'Users'} list={'list'} />
          </div>
          <div className="sidenav__hamburger__c"></div>
        </div>
      </>
    </div>
  );
};

export default SidenavCollapsable;
