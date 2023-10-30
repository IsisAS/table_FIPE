import { Text } from "../Text";
import { ContainerChip } from "./styles";

interface IPropsChoiceChip {
  selected: boolean;
  type: string;
  onClick: () => void
}

export function ChoiceChip({ selected, type, onClick }: IPropsChoiceChip) {

  return (
    <ContainerChip selected={selected} onClick={onClick}>
      <Text size="12px">{type}</Text>
    </ContainerChip>
  )
}
