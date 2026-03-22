import ReactPaginate from "react-paginate";
import css from "./Pagination.module.css";

interface PaginationProps {
  pageCount: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ pageCount, onPageChange }: PaginationProps) {
  return (
    <ReactPaginate
      pageCount={pageCount}
      onPageChange={(e) => onPageChange(e.selected + 1)}
      containerClassName={css.pagination}
      pageClassName={css.page}
      pageLinkClassName={css.pageLink}
      activeClassName={css.active}
      previousClassName={css.page}
      nextClassName={css.page}
    />
  );
}