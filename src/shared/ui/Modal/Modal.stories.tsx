import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Text',
  isOpen: true,
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
  children: 'Text',
  isOpen: true,
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
