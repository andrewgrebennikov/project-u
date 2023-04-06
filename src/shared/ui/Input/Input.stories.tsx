import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './Input';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
  title: 'shared/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Введите имя',
  type: 'text',
};

export const InputDark = Template.bind({});
InputDark.args = {
  label: 'Введите имя',
  type: 'text',
};
InputDark.decorators = [ThemeDecorator(Theme.DARK)];
