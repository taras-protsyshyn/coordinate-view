const parse = (str, regex) => {
  const res = [];

  for (const el of str.matchAll(regex)) {
    res.push(el[0].split(" ").map((el) => Number(el.replaceAll(/[^\d.]/g, ""))));
  }

  return res;
};

export const parseWGSDecimal = (str) => {
  return parse(str, new RegExp(/[0-9]{2}.([0-9]*)(\s|,\s)[0-9]{2}.([0-9]*)/gm));
};

export const parseUSCCartesian = (str) => {
  const cords = parse(str, new RegExp(/((x|х)-[0-9]*)(\s|,\s)((у|y)-[0-9]*)/gm));

  console.log(cords);

  return cords;
};

export const paseCordsFromText = (text) => {
  const parsers = [parseWGSDecimal, parseUSCCartesian];
  let cords = [];

  for (let parser of parsers) {
    try {
      cords = parser(text);
      if (cords.length > 0) break;
    } catch (err) {
      console.log(err);
    }
  }

  return cords;
};
