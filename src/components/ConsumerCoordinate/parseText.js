import { transform } from "../../utils";

export const getWGSDecimalFromText = (str) => {
  const res = [];

  for (const el of str.matchAll(/[0-9]{2}\.([0-9]*)(\s|,\s)[0-9]{2}\.([0-9]*)/gm)) {
    res.push(el[0].split(" ").map((el) => Number(el.replaceAll(/[^\d.-]/g, ""))));
  }

  console.log(transform(res[0][0], res[0][1]));

  return res;
};

export const getUSKfromText = (str) => {
  console.log("usk run =============>");
  return [];
};

export const paseCoordinateFormText = (str) => {
  const parsers = [getWGSDecimalFromText, getUSKfromText];

  for (const parser of parsers) {
    try {
      const res = parser(str);

      if (res.length) {
        return res;
      } else {
        continue;
      }
    } catch (error) {
      console.error(error);
      continue;
    }
  }

  return [];
};
