import './InfoCard.css';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InfoCard = ({info}) => {
  return (
    <div className="col-md-4 mb-3">
      <div className={`info-container info-bg-${info.background}`}>
        <div>
          <FontAwesomeIcon icon={info.icon} size="2x" />
        </div>
        <div>
          <h6>{info.title}</h6>
          <small>{info.description}</small>
        </div>
      </div>
    </div>
  )
}

export default InfoCard;