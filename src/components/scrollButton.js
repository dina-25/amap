import React from "react";
import ScrollUpButton from "react-scroll-up-button";

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <ScrollUpButton
          EasingType="easeInOutQuint"
          AnimationDuration={485}
        />
      </div>
    );
  }
}
