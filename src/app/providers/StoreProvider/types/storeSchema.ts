import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface StoreSchema {
  counter: CounterSchema;
  user: UserSchema;

  // Асинхронные редюсеры
  login?: LoginSchema;
}

export type StoreSchemaKeys = keyof StoreSchema;
