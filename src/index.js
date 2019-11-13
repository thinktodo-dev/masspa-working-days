import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { I18nextProvider } from "react-i18next";
import i18n from "./setting/i18n";
import App from "./app";



class MasspaWorkingDays extends Component {
  static propTypes = {
    branches: PropTypes.array.isRequired,
    language: PropTypes.string.isRequired,
    borderWorkingDays:  PropTypes.string.isRequired,
    iconColor: PropTypes.string.isRequired,
  }


  render() {
    const {informationData , branches , language ,borderWorkingDays , iconColor} = this.props
    return (
      <I18nextProvider i18n={i18n}>
      <App informationData={informationData} branches={branches} language={language} borderWorkingDays={borderWorkingDays} iconColor={iconColor}/>
    </I18nextProvider>
    );
  }
}

export default MasspaWorkingDays;

MasspaWorkingDays.defaultProps = {
  informationData: "",
  branches:[],
  language: "en",
  borderWorkingDays: `none`,
  iconColor: "#ceb060"
}