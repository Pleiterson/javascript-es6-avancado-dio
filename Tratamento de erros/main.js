/* e possivel extender a class error */
class CustomError extends Error {
  constructor({ message, data }) {
    super(message);
    this.data = data;
  }
}

/* Tratamento de Erros */
try {
  const name = "Danilson Sanches";
  const myError = new CustomError({
    message: "Custom message on custom error",
    data: {
      type: "Server error",
    },
  });
  throw myError;
} catch (error) {
  console.log(error);
  console.log(error.data);
} finally {
  console.log("keep going...");
}
