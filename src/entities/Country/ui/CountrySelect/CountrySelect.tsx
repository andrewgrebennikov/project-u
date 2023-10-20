import { Select } from 'shared/ui/Select/Select';
import cx from 'classix';
import { Country, country } from '../../model/types/countrySchema';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';

interface ICountrySelect {
  className?: string;
  value?: Country;
  readOnly?: boolean;
  onChange?: (value: Country) => void;
}

const options = [
  { value: country.Russia, name: country.Russia },
  { value: country.Belarus, name: country.Belarus },
];

export const CountrySelect = (props: ICountrySelect) => {
  const { className, value, readOnly, onChange } = props;
  const { t } = useTranslation();

  const onChangeCountry = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange],
  );

  return (
    <Select
      className={cx(className)}
      onChange={onChangeCountry}
      label={t('Страна')}
      value={value}
      disabled={readOnly}
      options={options}
    />
  );
};
