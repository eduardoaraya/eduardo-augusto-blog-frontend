declare const process: { env: { [key: string]: string } };

export const environment = {
  production: true,
  api: process.env["URL_API"] ?? 'http://localhost:8080/'
};
