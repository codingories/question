import React, {FC, ReactElement} from 'react';


interface DataSourceObject {
  value: string;
}

export type DataSourceType<T={}> = T & DataSourceObject ;

export interface AutoCompleteProps {
  renderOption?: (item: DataSourceType) => ReactElement;
}

export const AComponent: FC<AutoCompleteProps> = (props) => {
  const {renderOption} = props;
  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value;
  }
  return (
    <div>
      {renderTemplate({value: '123'})}
    </div>
  );
};
