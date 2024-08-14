export const getWGSDecimalFromText = (str) => {
  const res = [];

  for (const el of str.matchAll(/[0-9]{2}\.([0-9]*)(\s|,\s)[0-9]{2}\.([0-9]*)/gm)) {
    res.push(el[0].split(" ").map((el) => Number(el.replaceAll(/[^\d.-]/g, ""))));
  }

  return res;
};
