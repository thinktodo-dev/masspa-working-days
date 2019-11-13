import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { I18nextProvider } from "react-i18next";
import masspai18n from "./setting/i18n";
import App from "./app";



class MasspaWorkingDays extends Component {
  static propTypes = {
    branches: PropTypes.array.isRequired,
    borderWorkingDays:  PropTypes.string.isRequired,
    iconColor: PropTypes.string.isRequired,
  }


  render() {
    const {informationData , branches , languages ,borderWorkingDays , iconColor} = this.props

      return (
        <I18nextProvider i18n={languages}>
        <App informationData={informationData} branches={branches} languages={languages} borderWorkingDays={borderWorkingDays} iconColor={iconColor}/>
      </I18nextProvider>
      );
    }
  }


export default MasspaWorkingDays;

MasspaWorkingDays.defaultProps = {
  informationData: "",
  branches:[],
  languages: masspai18n,
  borderWorkingDays: `none`,
  iconColor: "#ceb060"
}