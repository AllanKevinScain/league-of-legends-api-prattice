import './style.css';

export const Navigation = ({ offset, totalPages, handleAdd, handleDecrease }) => {
  const disablePredecessor = offset <= 0;
  const disabledSuccessor = totalPages === offset;
  return (
    <div className="navigation-container">
      <button className="button-styles" disabled={disablePredecessor} onClick={handleDecrease}>
        {'<'}
      </button>
      {!disablePredecessor && (
        <button className="button-styles" onClick={handleDecrease}>
          {offset - 1}
        </button>
      )}
      <button className="button-styles">{offset}</button>
      <button className="button-styles" onClick={handleAdd}>
        {offset + 1}
      </button>
      {!disabledSuccessor && (
        <button className="button-styles" disabled={disabledSuccessor} onClick={handleAdd}>
          {'>'}
        </button>
      )}
    </div>
  );
};
