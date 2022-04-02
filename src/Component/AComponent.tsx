import React, { FC, ReactElement } from 'react';


export interface DataSourceType {
  value: string
}

export interface AutoCompleteProps<T extends DataSourceType> {
  renderOption?: (item: T) => ReactElement;
}

export const AComponent: FC<AutoCompleteProps<any>> = (props) => {
  const { renderOption } = props;
  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value;
  }
  return (
    <div>
      {renderTemplate({ value: '123' })}
    </div>
  );
};
