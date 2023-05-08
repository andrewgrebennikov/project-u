import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoginForm } from './LoginForm';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = () => <LoginForm />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [StoreDecorator({ login: { username: '123', password: '123' } })];

export const LoginFormDark = Template.bind({});
LoginFormDark.args = {};
LoginFormDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ login: { username: '123', password: '123' } }),
];

export const withError = Template.bind({});
withError.args = {};
withError.decorators = [StoreDecorator({ login: { username: '123', password: '123', error: 'Ошибка' } })];

export const withErrorDark = Template.bind({});
withErrorDark.args = {};
withErrorDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ login: { username: '123', password: '123', error: 'Ошибка' } }),
];

export const loading = Template.bind({});
loading.args = {};
loading.decorators = [StoreDecorator({ login: { username: '123', password: '123', isLoading: true } })];

export const loadingDark = Template.bind({});
loadingDark.args = {};
loadingDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ login: { username: '123', password: '123', isLoading: true } }),
];
