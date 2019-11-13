import React from 'react';
import PropTypes from 'prop-types';
import './Info.scss';

export const Info = (props) => {
  const {
    title,
    value,
    children,
    isTag,
  } = props;

  return (
    <div className="level">
      <div className="level-left">
        <div className="level-item">
          <div className="title is-6 is-marginless has-text-light">
            {title}
            :
          </div>
        </div>
        <div className="level-item">
          {children || (
            <div
              className={isTag ? 'tag' : 'is-size-7 long-text has-text-light'}
            >
              {value}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Info.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  children: PropTypes.element,
  isTag: PropTypes.bool,
};

Info.defaultProps = {
  value: null,
  children: null,
  isTag: true,
};
