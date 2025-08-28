import ReactPaginate from "react-paginate";

// prop type
type IProps = {
  pageCount: number;
  handlePageClick: (event: { selected: number }) => void;
  currentPage?: number;
};

const Pagination = ({ handlePageClick, pageCount, currentPage }: IProps) => {
  return (
    <ReactPaginate
      className="pagination list-wrap"
      breakLabel="..."
      activeClassName="current"
      nextLabel={<i className="fa-regular fa-arrow-right icon"></i>}
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel={<i className="fa-regular fa-arrow-left icon"></i>}
      renderOnZeroPageCount={null}
      forcePage={currentPage ? currentPage - 1 : undefined}
    />
  );
};

export default Pagination;