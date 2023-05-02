import GenericButton from "../button/genericButton";

const GenericTable = ({ data, tableHeading, Actions }) => {
  return (
    data.length !== 0 && (
      <table className="styled-table">
        <thead>
          <tr>
            {tableHeading.map((item) => (
              <th>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              {tableHeading.map((key) =>
                key === "actions" ? (
                  <td>
                    {Object.keys(Actions).map(key => <GenericButton buttonName={key} buttonClass="buttonClass" clickFunc={() => Actions[key](item)}/>)}
                  </td>
                ) : (
                  <td>{item[key]}</td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    )
  );
};

export default GenericTable;
