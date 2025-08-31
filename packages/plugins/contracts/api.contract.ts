export type ApiPlugin = {
  name: string,
  getModule: () => any,
}