import React, { useState } from "react";

function useDeleteCategory() {
  const [loading, setLoading] = useState(false);

  const deleteCategory = (catName: any) => {};

  return {
    deleteCategory,
  };
}

export default useDeleteCategory;
