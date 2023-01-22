export type UserActions =
  | { type: 'reset' }
  | { type: 'set_username'; payload: string }
