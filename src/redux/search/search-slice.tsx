import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
    selectedType: string | null;
    brands: Array<string>;
    selectedBrand: string | null;
    models: Array<string>;
    selectedModel: string | null;
    years: Array<string>;
    selectedYear: string | null;
    value: string | null;
}

const initialState: SearchState = {
    selectedType: null,
    brands: [],
    selectedBrand: null,
    models: [],
    selectedModel: null,
    years: [],
    selectedYear: null,
    value: null,
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setType: (state, action: PayloadAction<string>) => {
            state.selectedType = action.payload;
        },
        setBrands: (state, action: PayloadAction<Array<string>>) => {
            state.brands = action.payload;
        },
        setSelectedBrand: (state, action: PayloadAction<string>) => {
            state.selectedBrand = action.payload;
        },
        setModels: (state, action: PayloadAction<Array<string>>) => {
            state.models = action.payload;
        },
        setSelectedModel: (state, action: PayloadAction<string>) => {
            state.selectedModel = action.payload;
        },
        setYears: (state, action: PayloadAction<Array<string>>) => {
            state.years = action.payload;
        },
        setSelectedYear: (state, action: PayloadAction<string>) => {
            state.selectedYear = action.payload;
        },
        setValue: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

export const {
    setType,
    setBrands,
    setSelectedBrand,
    setModels,
    setSelectedModel,
    setYears,
    setSelectedYear,
    setValue,
} = searchSlice.actions;

export default searchSlice.reducer;
