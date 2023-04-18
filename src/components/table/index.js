
const GenericTable = ({data,tableHeading}) => {
  // return (
  //   data.length !== 0 && 
  //   <table className="styled-table">
  //     <thead>
  //       <tr>
  //         {Object.keys(data[0]).map(key => <th>{key}</th>)}
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {data.map(item => 
  //       <tr>
  //         {Object.values(item).map(val => <td>{val}</td>)}
  //       </tr>)}
  //     </tbody>
  //   </table>
  // )

  return (
      data.length !== 0 && 
      <table className="styled-table">
        <thead>
          <tr>
            {tableHeading.map(item => <th>{item}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map(item => 
          <tr>
            {tableHeading.map(key => <td>{item[key]}</td>)}
          </tr>)}
        </tbody>
      </table>
    )
}

export default GenericTable