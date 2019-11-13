import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { translate, Trans } from 'react-i18next';
import { FiPhone, FiMapPin , FiClock } from "react-icons/fi";
import styles from './styles.css'




class App extends Component {

  transferTimeWorkingDays(time){
    let date = new Date(time)
    let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    let am_pm = date.getHours() >= 12 ? "PM" : "AM";
    hours = hours < 10 ? "0" + hours : hours;
    let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let result = hours + ":" + minutes + " " + am_pm;
   return <span >{result}</span>
  }
  

  render() {
    const { t, i18n , informationData , branches, borderWorkingDays, iconColor } = this.props;
  
    if (informationData === null || informationData ==="") {
           return <div></div>
    }else{
           let workingDaysData = JSON.parse(informationData.workingDays);
           return(
             <div className="masspa-working-days-container-01">
               <div className="row w-100 no-gutters" style={{border: `${borderWorkingDays}`}}>
                 <div className="col-sm-12 col-md-4 col-lg-4 masspa-working-days-container-02">
                   <div className="masspa-working-days-group">
                     <div className="masspa-working-days-icon-place">
                       <FiClock className="masspa-working-days-icon" style={{color: `${iconColor}`}}/>
                     </div>
                     <div >
                       <div className="masspa-working-days-text-uppercase">{t('workingsDay_time')}</div>
                       {workingDaysData.monday.off === 1 ? <div></div> : <div className="masspa-working-days-time"><span className="masspa-working-days-left-content-01">{t('workingDays_monday')}</span> <span className="masspa-working-days-right-content-01">{this.transferTimeWorkingDays(workingDaysData.monday.from)} - {this.transferTimeWorkingDays(workingDaysData.monday.to)}</span></div>}
                       {workingDaysData.tuesday.off === 1 ? <div></div> : <div className="masspa-working-days-time"><span className="masspa-working-days-left-content-01">{t('workingDays_tuesday')}</span> <span className="masspa-working-days-right-content-01">{this.transferTimeWorkingDays(workingDaysData.tuesday.from)} - {this.transferTimeWorkingDays(workingDaysData.tuesday.to)}</span></div>}
                       {workingDaysData.wednesday.off === 1 ? <div></div> : <div className="masspa-working-days-time"><span className="masspa-working-days-left-content-01">{t('workingDays_wednesday')}</span> <span className="masspa-working-days-right-content-01">{this.transferTimeWorkingDays(workingDaysData.wednesday.from)} - {this.transferTimeWorkingDays(workingDaysData.wednesday.to)}</span></div>}
                       {workingDaysData.thursday.off === 1 ? <div></div> : <div className="masspa-working-days-time"><span className="masspa-working-days-left-content-01">{t('workingDays_thursday')}</span> <span className="masspa-working-days-right-content-01">{this.transferTimeWorkingDays(workingDaysData.thursday.from)} - {this.transferTimeWorkingDays(workingDaysData.thursday.to)}</span></div>}
                       {workingDaysData.friday.off === 1 ? <div></div> : <div className="masspa-working-days-time"><span className="masspa-working-days-left-content-01">{t('workingDays_friday')}</span> <span className="masspa-working-days-right-content-01">{this.transferTimeWorkingDays(workingDaysData.friday.from)} - {this.transferTimeWorkingDays(workingDaysData.friday.to)}</span></div>}
                       {workingDaysData.saturday.off === 1 ? <div></div> : <div className="masspa-working-days-time"><span className="masspa-working-days-left-content-01">{t('workingDays_saturday')}</span> <span className="masspa-working-days-right-content-01">{this.transferTimeWorkingDays(workingDaysData.saturday.from)} - {this.transferTimeWorkingDays(workingDaysData.saturday.to)}</span></div>}
                       {workingDaysData.sunday.off === 1 ? <div></div> : <div className="masspa-working-days-time"><span className="masspa-working-days-left-content-01">{t('workingDays_sunday')}</span> <span className="masspa-working-days-right-content-01">{this.transferTimeWorkingDays(workingDaysData.sunday.from)} - {this.transferTimeWorkingDays(workingDaysData.sunday.to)}</span></div>}
                     </div>
                   </div>
                 </div>
                 <div className="col-sm-12 col-md-5 col-lg-5 masspa-working-days-container-02">
                   <div className="masspa-working-days-group">
                     <div className="masspa-working-days-icon-place">
                       <FiMapPin className="masspa-working-days-icon" style={{color: `${iconColor}`}}/>
                     </div>
                     <div >
                       <div className="masspa-working-days-text-uppercase">{t('workingsDay_branches')}</div>
                       {branches.map((branch, index) => {
                         let addressBranch = branch.address + "," + branch.district + "," + branch.city;
                         return <div className="masspa-working-days-text-address d-flex" key={index}>
                           <span className="masspa-working-days-left-content-02">{t('workingsDay_branch')} {index + 1} :</span>
                           <a href={`https://www.google.com/maps/search/?api=1&query=${branch.lat},${branch.lng}`} target="_blank" className="masspa-working-days-right-content-02"> {addressBranch}</a>
                         </div>
                       })}
                     </div>
                   </div>
                 </div>
                 <div className="col-sm-12 col-md-3 col-lg-3 masspa-working-days-container-02">
                   <div className="masspa-working-days-group">
                     <div className="masspa-working-days-icon-place">
                       <FiPhone className="masspa-working-days-icon" style={{color: `${iconColor}`}}/>
                     </div>
                     <div>
                       <div className="masspa-working-days-text-uppercase">{t('workingsDay_contact')}</div>
                       <a tel="0934788768" className="masspa-working-days-text-address"> Mobile : 0934788768</a>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           )
     
    }
  }
}
// extended main view with translate hoc
export default translate('translations')(App);