export interface ActionState<T> {
  data: T;
  hasError?: boolean;
  error?: string;
  stateErrors?: Record<keyof T, string[] | undefined>;
}
