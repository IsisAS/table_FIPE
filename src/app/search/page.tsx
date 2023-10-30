"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from "react-redux";
import { setBrands } from "@/redux/search/search-slice";
import { getBrands, getModels, getValue } from '@/api/services/brandsServices';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from "@/components/Container";
import { CardContainer } from '@/components/CardContainer';
import { ChoiceChip } from "@/components/ChoiceChip";
import * as Styles from './styles';

type GenericType = {
    nome: string;
    codigo: string;
};

const Search = () => {
    const optionVehicle = ["carros", "motos", "caminhoes"]
    const dispatch = useDispatch();
    const brands = useSelector((state: any) => state.search.brands);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const [selectedType, setSelectedType] = useState<string | null>(null);
    const [selectedBrand, setSelectedBrand] = useState<GenericType | null>(null);
    const [selectedModel, setSelectedModel] = useState<GenericType | null>(null);
    const [selectedYear, setSelectedYear] = useState<GenericType | null>(null);
    const [models, setModels] = useState<GenericType[]>([]);
    const [years, setYears] = useState<GenericType[]>([]);
    const [value, setValue] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const router = useRouter();

    const fetchData = async (type: string) => {
        const response = await getBrands(type);
        if (response) {
            dispatch(setBrands(response));
        }
    };

    const handleChange = (setter: React.Dispatch<React.SetStateAction<any>>) => (_: any, newValue: any) => {
        setter(newValue);
    };

    useEffect(() => {
        const fetchModels = async () => {
            if (selectedBrand && selectedType) {
                const brandCode = selectedBrand.codigo;
                const response = await getModels(selectedType, brandCode);
                if (response) {
                    if (response.modelos) {
                        setModels(response.modelos);
                    }

                    if (response.anos) {
                        setYears(response.anos);
                    }
                }
            }
        };

        fetchModels();
    }, [selectedBrand, selectedType]);

    const handleGetValue = async () => {
        setLoading(true)
        if (selectedType && selectedBrand && selectedModel && selectedYear) {
            try {
                const response = await getValue(selectedType, selectedBrand.codigo, selectedModel.codigo, selectedYear.codigo);
                if (response) {
                    setValue(response.Valor);
                    router.push(`/search/result?marca=${selectedBrand!.nome}&modelo=${selectedModel!.nome}&ano=${selectedYear!.nome}&valor=${response.Valor}`);
                }
            } catch (error) {
                console.error(error)
                setOpenSnackbar(true);
            } finally {
                setLoading(false)
            }
        }
    };

    return (
        <Container>
            <CardContainer>
                <Styles.ContainerChip>
                    {optionVehicle.map((item, index) => (
                        <ChoiceChip
                            key={index}
                            type={item}
                            selected={item === selectedType}
                            onClick={() => { setSelectedType(item); fetchData(item); }}
                        />
                    ))}
                </Styles.ContainerChip>

                <Autocomplete
                    options={brands}
                    getOptionLabel={(option) => option.nome}
                    renderInput={(params) => <TextField {...params} label="Marca" />}
                    onChange={handleChange(setSelectedBrand)}
                />

                <Autocomplete
                    options={models}
                    getOptionLabel={(option) => option.nome}
                    renderInput={(params) => <TextField {...params} label="Modelo" />}
                    onChange={handleChange(setSelectedModel)}
                />

                <Autocomplete
                    options={years}
                    getOptionLabel={(option) => option.nome}
                    renderInput={(params) => <TextField {...params} label="Ano" />}
                    onChange={handleChange(setSelectedYear)} />

                <Button variant="contained" color="primary" size='large' onClick={handleGetValue}>
                    {loading ? <CircularProgress color="inherit" size={'1rem'} /> : 'Consultar Preço'}
                </Button>
            </CardContainer>

            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
                <Alert onClose={() => setOpenSnackbar(false)} severity="error">
                    Não foi possível completar a pesquisa.
                </Alert>
            </Snackbar>
        </Container>
    )
}
export default Search;