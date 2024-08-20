class ClientError extends Error {
  constructor(message, statusCode = 400, name = 'ClientError') {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
  }
}

export { ClientError };
