import styled from "styled-components"
import { PaginationProps } from "../../../../public/types"
import { Button } from "../../../components"

const PaginationContainer: React.FC<PaginationProps> = ({
  className,
  setPage,
  page,
  totalPages,
}) => {
  return (
    <div className={className}>
      <Button onClick={() => setPage(1)} disabled={page === 1}>
        В начало
      </Button>
      <Button
        onClick={() => setPage(Math.max(1, page - 1))}
        disabled={page === 1}
      >
        Предыдущая
      </Button>
      <div className="current-page">
        Страница: {page} / {totalPages}
      </div>
      <Button
        onClick={() => setPage(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
      >
        Следующая
      </Button>
      <Button
        onClick={() => setPage(totalPages)}
        disabled={page === totalPages}
      >
        В конец
      </Button>
    </div>
  )
}

export const Pagination = styled(PaginationContainer)`
  display: flex;
  justify-content: center;
  position: absolute:
  bottom: 140px;
  width: 100%;
  margin: 0 0 20px;
  padding: 0 20px;

  & .button {
    margin: 0 5px;
  }

  & .current-page {
    width: 100%;
    height: 32px;
    line-height: 26px;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    border: 1px solid #000;
  }
`
