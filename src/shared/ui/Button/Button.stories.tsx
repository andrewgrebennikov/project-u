import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ButtonVariant } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Text = Template.bind({});
Text.args = {
  children: 'Text',
  variant: ButtonVariant.TEXT,
};

export const TextDark = Template.bind({});
TextDark.args = {
  children: 'Text',
  variant: ButtonVariant.TEXT,
};
TextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Contained = Template.bind({});
Contained.args = {
  children: 'Text',
  variant: ButtonVariant.CONTAINED,
};

export const ContainedDark = Template.bind({});
ContainedDark.args = {
  children: 'Text',
  variant: ButtonVariant.CONTAINED,
};
ContainedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Text',
  variant: ButtonVariant.OUTLINED,
};

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
  children: 'Text',
  variant: ButtonVariant.OUTLINED,
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];
