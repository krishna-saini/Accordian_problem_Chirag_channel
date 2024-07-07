import { memo } from "react";
import "./styles.css";

export const Accoridian = memo(({ data, expanded }) => {
  console.log("child rendered", data.id);
  const handleCheckboxClick = (event) => {
    event.stopPropagation();
  };
  return (
    <>
      <button
        data-index={data.id}
        style={{
          display: "block",
          width: "100%",
          marginBottom: "4px",
          textAlign: "left",
        }}
      >
        <input
          type="checkbox"
          // onChange={onChangeEventHanlder} -> it will not stop event propogattion
          onClick={handleCheckboxClick} // Add the new click handler
        />
        {data.header}
        {expanded && (
          <div style={{ padding: "0.5px 1px" }}>{data.description}</div>
        )}
      </button>
      {/* ANs to requriement 6? */}
      {/* <details>
        <summary>Accordion Header</summary>
        <p>This is the content of the accordion.</p>
        <p>Hello</p>
      </details> */}
    </>
  );
});
