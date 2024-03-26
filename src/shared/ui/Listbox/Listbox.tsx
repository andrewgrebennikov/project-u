import { Listbox as HListbox } from '@headlessui/react';
import { cx } from 'classix';

import styles from './Listbox.module.scss';

interface IListboxItem {
  value: string;
  name: string;
}

interface IListboxProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  options: IListboxItem[];
  disabled?: boolean;
}

export const Listbox = (props: IListboxProps) => {
  const { value, onChange, options, label, disabled } = props;

  return (
    <HListbox value={value} onChange={onChange} disabled={disabled}>
      <div className={styles.field}>
        {label && <HListbox.Label className={styles.label}>{label}</HListbox.Label>}
        <HListbox.Button className={styles.button}>{value}</HListbox.Button>
        <HListbox.Options className={styles.options}>
          {options.map((option) => {
            const { value, name } = option;

            return (
              <HListbox.Option
                key={value}
                value={value}
                className={({ active }) => cx(styles.option, active && styles.optionActive)}
              >
                {name}
              </HListbox.Option>
            );
          })}
        </HListbox.Options>
      </div>
    </HListbox>
  );
};
