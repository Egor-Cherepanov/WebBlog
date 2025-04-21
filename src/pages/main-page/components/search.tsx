import styled from "styled-components"
import { Icon, Input } from "../../../components"
import { SearchProps } from "../../../../public/types"

const SearchContainer: React.FC<SearchProps> = ({
  className,
  onChange,
  searchPhrase,
}) => {
  return (
    <div className={className}>
      <Input
        className="search-input"
        placeholder="Поиск по заголовкам"
        value={searchPhrase}
        onChange={onChange}
      />
      <Icon id="fa-search" size="21px" className="search-icon" />
    </div>
  )
}

export const Search = styled(SearchContainer)`
  display: flex;
  margin: 40px auto 0;
  position: relative;
  width: 340px;
  height: 40px;

  & .search-input {
    padding: 10px 32px 10px 10px;
  }

  & .search-icon {
    position: absolute;
    right: 9px;
    top: 4px;
  }
`
