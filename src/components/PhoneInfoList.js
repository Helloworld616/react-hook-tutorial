import React from 'react';
import PhoneInfo from './PhoneInfo';

const PhoneInfoList = (props) => {
  const { data, onRemove, onUpdate } = props;

  const list = data.map(
    info => (
      <PhoneInfo
        onRemove={onRemove}
        onUpdate={onUpdate}
        info={info}
        key={info.id}
      />
    )
  );

  return (
    <div>
      {list}
    </div>
  );
};

PhoneInfoList.defaultProps = {
  data: []
}

export default PhoneInfoList;