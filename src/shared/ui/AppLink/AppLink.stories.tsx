import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppLink, AppLinkUnderline } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const UnderlineAlways = Template.bind({});
UnderlineAlways.args = {
  children: 'Text',
  underline: AppLinkUnderline.ALWAYS,
};

export const UnderlineAlwaysDark = Template.bind({});
UnderlineAlwaysDark.args = {
  children: 'Text',
  underline: AppLinkUnderline.ALWAYS,
};
UnderlineAlwaysDark.decorators = [ThemeDecorator(Theme.DARK)];

export const UnderlineHover = Template.bind({});
UnderlineHover.args = {
  children: 'Text',
  underline: AppLinkUnderline.HOVER,
};

export const UnderlineHoverDark = Template.bind({});
UnderlineHoverDark.args = {
  children: 'Text',
  underline: AppLinkUnderline.HOVER,
};
UnderlineHoverDark.decorators = [ThemeDecorator(Theme.DARK)];

export const UnderlineNone = Template.bind({});
UnderlineNone.args = {
  children: 'Text',
  underline: AppLinkUnderline.NONE,
};

export const UnderlineNoneDark = Template.bind({});
UnderlineNoneDark.args = {
  children: 'Text',
  underline: AppLinkUnderline.NONE,
};
UnderlineNoneDark.decorators = [ThemeDecorator(Theme.DARK)];
