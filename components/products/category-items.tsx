import React, { useState } from "react";
import ProductRow from "./product-row";

function CategoryItems(props: {
  editTableNumber: any;
  item: any;
  products: any;
  setProducts: any;
  prodIndex: any;
  selectedLan: any;
}) {
  const { editTableNumber, item, prodIndex, products, setProducts } = props;
  const [categoryItems, setCategoryItems] = useState(item.products);

  const handleDeleteProduct = (i: string) => {
    const filteredProducts = categoryItems.filter(
      (pro: { id: string }) => pro.id !== i
    );
    setCategoryItems(filteredProducts);
  };
  return (
    <>
      {categoryItems.map((row: any, i: number) => (
        <ProductRow
          key={row.title.ar}
          editTableNumber={editTableNumber}
          i={i}
          item={item}
          row={row}
          products={products}
          setProducts={setProducts}
          index={prodIndex}
          handleDeleteProduct={handleDeleteProduct}
          selectedLan={props.selectedLan}
        />
      ))}
    </>
  );
}

export default CategoryItems;
