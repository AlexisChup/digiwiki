import React, { useState, useEffect } from "react";
import { AXIOS } from "../../../../app/axios-http";
import { Spinner } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import EmptyToolItem from "./EmptyToolItem";
import AddTool from "../../../list-tools/admin/AddTool";

export default function EmptyTools() {
  let [isRequesting, setIsRequesting] = useState(false);
  const [emptyTools, setEmptyTools] = useState([]);

  useEffect(() => {
    fetchTools();
  }, []);

  const fetchTools = () => {
    setIsRequesting(true);

    AXIOS.get("/admin/tool/orphan-tools")
      .then((res) => {
        setEmptyTools(res.data);
      })
      .catch((e) => console.log("ERROR /admin/tool/orphan-tools: ", e))
      .finally(() => setIsRequesting(false));
  };

  return (
    <div>
      <div className="row">
        <AddTool fetchTools={fetchTools} />
      </div>
      <div>
        <h2>Outils sans sous-catégorie parent</h2>
      </div>
      <div className="row justify-content-center flex-column">
        {isRequesting ? (
          <div className="d-flex justify-content-center">
            <Spinner />
          </div>
        ) : emptyTools.length > 0 ? (
          emptyTools.map((tool, index) => (
            <EmptyToolItem key={tool.id} tool={tool} fetchTools={fetchTools} />
          ))
        ) : (
          <div className="d-flex flex-row">
            <h3 className="small">Aucun outil sans sous-catégorie parent</h3>
            &nbsp;
            <FaCheck />
          </div>
        )}
      </div>
    </div>
  );
}
