import React, { useState, useEffect } from "react";
import { AXIOS } from "../../../../app/axios-http";
import { Spinner } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import TagItem from "./TagItem";
import AddTag from "./AddTag";

export default function LitsTags() {
  let [isRequesting, setIsRequesting] = useState(false);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetchTags();
  }, []);

  const fetchTags = () => {
    setIsRequesting(true);

    AXIOS.get("/admin/tag/all")
      .then((res) => {
        setTags(res.data);
      })
      .catch((e) => console.log("ERROR /admin/tag/all: ", e))
      .finally(() => setIsRequesting(false));
  };

  return (
    <div>
      <div className="d-flex justify-content-between flex-row">
        <div>
          <h2>Liste des tags</h2>
        </div>
        <div>
          <AddTag fetchTags={fetchTags} />
        </div>
      </div>
      <div className="row justify-content-center flex-column">
        {isRequesting ? (
          <div className="d-flex justify-content-center">
            <Spinner />
          </div>
        ) : tags.length > 0 ? (
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Style</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>
              <tbody>
                {tags.map((tag, index) => (
                  <TagItem tag={tag} key={index} fetchTags={fetchTags} />
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="d-flex flex-row">
            <h3 className="small">Aucun tags</h3>
            &nbsp;
            <FaCheck />
          </div>
        )}
      </div>
    </div>
  );
}
