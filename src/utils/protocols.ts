export type AppErrors = {
  name: string;
  message: string;
  code?: string | number;
  meta?: { target: string; cause: string };
};

export type User = {
  name: string;
};
