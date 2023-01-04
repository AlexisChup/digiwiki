import React, { useState } from "react";

export default function EmptySubCategories() {
  let [isRequesting, setIsRequesting] = useState(false);

  return (
    <div>
      <h2>Empty SubCategories</h2>
    </div>
  );
}
