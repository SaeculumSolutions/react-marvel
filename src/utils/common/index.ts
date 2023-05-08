export const replaceDoubleBraces = (str: String, result: any) => {
  return str.replace(/{{(.+?)}}/g, (_, g1) => result[g1] || g1);
};
