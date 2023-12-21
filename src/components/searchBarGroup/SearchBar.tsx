import style from "./SearchBar.module.scss";
import { AutocompleteField } from "../autocomleteField/AutocomleteField";
import {
  useGetGenerationQuery,
  useGetRegionsQuery,
  useGetTypesQuery,
} from "../../redux/services/optionApi";

export default function SearchBar() {
  const { data: generation } = useGetGenerationQuery();
  const { data: types } = useGetTypesQuery();
  const { data: region } = useGetRegionsQuery();

  return (
    <div className={style.mainSearchBlock}>
      <AutocompleteField
        options={generation?.results}
        label="Generation"
        name="generation"
      />
      <AutocompleteField label="Type" name="type" options={types?.results} />
      <AutocompleteField
        label="Region"
        name="region"
        options={region?.results}
      />
    </div>
  );
}
