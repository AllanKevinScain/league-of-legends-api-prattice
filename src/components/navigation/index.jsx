import './style.css';

export const Navigation = ({ offset, totalPages, handleAdd, handleDecrease }) => {
  return (
    <div className="navigation-container">
      <button className="button-styles" disabled={offset <= 0} onClick={handleDecrease}>
        {'<'}
      </button>
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <button key={index} className="button-styles">
            {index}
          </button>
        ))}
      <button className="button-styles" disabled={totalPages === offset} onClick={handleAdd}>
        {'>'}
      </button>
    </div>
  );
};
