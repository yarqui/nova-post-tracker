const isServerError = (res) => {
  if (res.status === 500) {
    return new Error("Виникла помилка серверу. Спробуйте пізніше");
  }
};

export default isServerError;
