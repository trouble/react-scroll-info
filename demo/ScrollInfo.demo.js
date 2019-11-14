import React from 'react';
import PropTypes from 'prop-types';
import { withScrollInfo } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build

const ScrollInfoDemo = (props) => {
  const {
    scrollInfo: {
      x,
      y,
      xDifference,
      yDifference,
      xDirection,
      yDirection,
      xPercentage,
      yPercentage,
      count,
    },
  } = props;

  return (
    <div style={{ position: 'fixed' }}>
      <code>
        <pre>
          {'scrollPos:{'}
          <br />
          &emsp;
          {`x: ${x},`}
          <br />
          &emsp;
          {`y: ${y},`}
          <br />
          &emsp;
          {`xDifference: ${xDifference},`}
          <br />
          &emsp;
          {`yDifference: ${yDifference},`}
          <br />
          &emsp;
          {`xDirection: ${xDirection},`}
          <br />
          &emsp;
          {`yDirection: ${yDirection},`}
          <br />
          &emsp;
          {`xPercentage: ${xPercentage},`}
          <br />
          &emsp;
          {`yPercentage: ${yPercentage}`}
          <br />
          &emsp;
          {`count: ${count},`}
          <br />
          {'}'}
        </pre>
      </code>
    </div>
  );
};

ScrollInfoDemo.propTypes = {
  scrollInfo: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    xPercentage: PropTypes.number,
    yPercentage: PropTypes.number,
    xDirection: PropTypes.oneOf([
      '',
      'left',
      'right',
    ]),
    yDirection: PropTypes.oneOf([
      '',
      'up',
      'down',
    ]),
    xDifference: PropTypes.number,
    yDifference: PropTypes.number,
    count: PropTypes.number,
  }).isRequired,
};

export default withScrollInfo(ScrollInfoDemo);