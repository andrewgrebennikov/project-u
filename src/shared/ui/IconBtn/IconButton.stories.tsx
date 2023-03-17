import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconButton } from './IconButton';
import IconArrowRight from 'shared/assets/icons/icon-arrow-right.svg';

export default {
  title: 'shared/IconButton',
  component: IconButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <IconArrowRight width="30" height="30" />,
};
