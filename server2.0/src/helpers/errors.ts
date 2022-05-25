export const CreateError = (status: any, message: string, data?: any) => {
  const error: any = new Error();
  error.status = status;
  error.message = message;
  error.data = data;
};
