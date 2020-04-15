import React from "react";

export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export function addFeature(newFeature) {
    console.log(newFeature);
    return {
        type: ADD_FEATURE,
        payload: newFeature
    }
}

export function removeFeature(feature) {
    // console.log(feature);
    return {
        type: REMOVE_FEATURE,
        payload: feature
    }
}