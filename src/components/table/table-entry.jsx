import React from "react";

function tableentry(props) {
  const id = props.id;
  const description = props.description;
  const status = props.status;

  const changeStatus = () => {
    props.setTable3({
      id: 3,
      description: "Table 3",
      status: 1,
    });
  };

  if (status == 2) {
    return (
      <div className="main-tables__help" onClick={changeStatus}>
        {description}
      </div>
    );
  } else if (status == 1) {
    return <div className="main-tables__occupied">{description}</div>;
  } else if (status == 0) {
    return <div className="main-tables__vacant">{description}</div>;
  } else {
    return;
  }
}

export default tableentry;
