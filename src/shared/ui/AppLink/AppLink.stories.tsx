import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppLink, AppLinkUnderline } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import IconArrowRight from 'shared/assets/icons/icon-arrow-right.svg';

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

export const StartIcon = Template.bind({});
StartIcon.args = {
  children: 'Text',
  startIcon: <IconArrowRight className="icon" width="30" height="30" />,
};

export const StartIconDark = Template.bind({});
StartIconDark.args = {
  children: 'Text',
  startIcon: <IconArrowRight className="icon" width="30" height="30" />,
};
StartIconDark.decorators = [ThemeDecorator(Theme.DARK)];

export const EndIcon = Template.bind({});
EndIcon.args = {
  children: 'Text',
  endIcon: <IconArrowRight className="icon" width="30" height="30" />,
};

export const EndIconDark = Template.bind({});
EndIconDark.args = {
  children: 'Text',
  endIcon: <IconArrowRight className="icon" width="30" height="30" />,
};
EndIconDark.decorators = [ThemeDecorator(Theme.DARK)];
