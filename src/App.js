import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {addFeature, removeFeature} from "./actions/carFeatureActions"
import {connect} from "react-redux"

const App = (props) => {
  console.log(props.additionalPrice)
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car}/>
        <AddedFeatures  addedFeature={props.removeFeature} car={props.car}/>
      </div>
      <div className="box">
      {/* <Header car={props.car}/> */}
        <AdditionalFeatures addFeature={props.addFeature} additionalFeatures={props.additionalFeatures}/>
        <Total car={props.car} additionalPrice={props.additionalPrice}/>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = {
  removeFeature,
  addFeature
}

export default connect(mapStateToProps, mapDispatchToProps)(App)