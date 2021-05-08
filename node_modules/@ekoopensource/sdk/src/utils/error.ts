const noResponseError = (error: any) => {
  return {
    message: error.message,
    code: error.code,
    status: error.status
  };
};

export default noResponseError;
