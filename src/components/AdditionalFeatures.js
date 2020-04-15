import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';
import { addFeature } from "../actions/index";


const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature addFeature={props.addFeature} key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

// const mapPropsToState = state => {
//   return {
//     additionalFeatures: state.additionalFeatures
//   };
// };

// export default connect(mapPropsToState, { })(AdditionalFeatures);
export default AdditionalFeatures;