"use client";
import { CardContainer } from "@/components/CardContainer";
import { Container } from "@/components/Container";
import { Text } from "@/components/Text";
import * as Styles from './styles';

interface ISearchResult {
    searchParams: {
        marca: string;
        modelo: string;
        ano: string;
        valor: string;
    }
}

export default function Result({ searchParams }: ISearchResult) {

    console.log("MARCA", searchParams)
    return (
        <Container>
            <CardContainer>
                <Styles.Content>
                    <Text size="14px">Table FIPE: Preço {searchParams.marca} {searchParams.modelo} {searchParams.ano}</Text>
                    <Styles.ContainerPrice>
                        <Text size="14px" color="white">{searchParams.valor}</Text>
                    </Styles.ContainerPrice>
                </Styles.Content>
            </CardContainer>
        </Container>
    )

}