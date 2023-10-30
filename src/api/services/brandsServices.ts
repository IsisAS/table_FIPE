import axios from "axios";
import { ROUTE } from "../routes";

export const getBrands = async (type: string) => {
  const response = await axios.get(ROUTE.brands.getAll(type));
  return response.data;
};

export const getModels = async (type: string, brandCode: string) => {
  const response = await axios.get(ROUTE.models.getAll(type, brandCode));
  return response.data;
};

export const getValue = async (
  type: string,
  brandCode: string,
  modelCode: string,
  yearCode: string
) => {
  const response = await axios.get(
    ROUTE.value.get(type, brandCode, modelCode, yearCode)
  );
  return response.data;
};
