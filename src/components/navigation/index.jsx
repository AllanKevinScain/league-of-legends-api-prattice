import "./style.css";

export const Navigation = () => {
  return (
    <div className="navigation-container">
      <button className="button-styles">{"<"}</button>
      {Array(5).fill(null).map((_, index) => (
        <button key={index} className="button-styles">{index}</button>
      ))}
      <button className="button-styles">{">"}</button>
    </div>
  );
}
