import { FC, lazy } from 'react';

export const LoginFormLazy = lazy<FC>(() => import('./LoginForm'));
