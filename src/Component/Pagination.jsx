function Pagination({ currentpage, total, onChange }) {
  const prev = (
    <button
      data-testid="prev-page"
      disabled={currentpage === 1}
      onClick={() => onChange(currentpage - 1)}
    >
      Prev
    </button>
  );

  const currentPage = (
    <button data-testid="current-page">{currentpage}</button>
  );

  const next = (
    <button
      data-testid="next-page"
      disabled={currentpage === total}
      onClick={() => onChange(currentpage + 1)}
    >
      Next
    </button>
  );

  return (
    <div data-testid="page-container">
      <div>
        {prev}
        {currentPage}
        {next}
      </div>
      <div>
        Total Pages: <b data-testid="total-pages">{total}</b>
      </div>
    </div>
  );
}

export default Pagination;
