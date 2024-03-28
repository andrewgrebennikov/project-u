import { Menu, Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

import { AppLink, AppLinkUnderline } from '../AppLink/AppLink';
import { Button, ButtonVariant } from '../Button/Button';

import styles from './Dropdown.module.scss';

interface IDropdownItemProps {
  id: string;
  href?: string;
  label: string;
  action?: () => void;
}

interface IDropdownProps {
  button: ReactNode;
  items: IDropdownItemProps[];
}

export const Dropdown = (props: IDropdownProps) => {
  const { button, items } = props;

  return (
    <div className={styles.dropdown}>
      <Menu>
        <Menu.Button className={styles.button}>{button}</Menu.Button>
        <Transition
          as={Fragment}
          enter={styles.enter}
          enterFrom={styles.enterFrom}
          enterTo={styles.enterTo}
          leave={styles.leave}
          leaveFrom={styles.leaveFrom}
          leaveTo={styles.leaveTo}
        >
          <Menu.Items className={styles.items}>
            {items.map((item) => {
              const { href, label, action, id } = item;

              if (href) {
                return (
                  <Menu.Item key={id} as={AppLink} to={href} underline={AppLinkUnderline.NONE}>
                    {label}
                  </Menu.Item>
                );
              }

              return (
                <Menu.Item key={id} as={Button} onClick={action} variant={ButtonVariant.TEXT}>
                  {label}
                </Menu.Item>
              );
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
