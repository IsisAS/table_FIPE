const BASE_ROUTE = "https://parallelum.com.br/fipe/api";

export const ROUTE = {
  base: BASE_ROUTE,
  brands: {
    getAll: (type: string) => `${BASE_ROUTE}/v1/${type}/marcas`,
  },
  models: {
    getAll: (type: string, brandCode: string) =>
      `${BASE_ROUTE}/v1/${type}/marcas/${brandCode}/modelos`,
  },
  years: {
    getAll: (type: string, brandCode: string, modelCode: string) =>
      `${BASE_ROUTE}/v1/${type}/marcas/${brandCode}/modelos/${modelCode}/anos`,
  },
  value: {
    get: (
      type: string,
      brandCode: string,
      modelCode: string,
      yearCode: string
    ) =>
      `${BASE_ROUTE}/v1/${type}/marcas/${brandCode}/modelos/${modelCode}/anos/${yearCode}`,
  },
};
