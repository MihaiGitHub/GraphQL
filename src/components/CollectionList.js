import React from "react";
import { useQuery } from "@apollo/client";
import { GET_COLLECTIONS } from "../queries";

const CollectionList = () => {
  const { loading, error, data } = useQuery(GET_COLLECTIONS);

  if (loading) return <p>Loading collections...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Collections</h1>
      {data.collections.map((collection) => (
        <div key={collection.id} style={{ marginBottom: "20px" }}>
          <h2>{collection.title}</h2>
          <ul style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {collection.items.map((item) => (
              <li
                key={item.id}
                style={{
                  listStyle: "none",
                  border: "1px solid #ddd",
                  padding: "10px",
                  width: "150px",
                }}
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  style={{ width: "100%" }}
                />
                <div>
                  <strong>{item.name}</strong>
                </div>
                <div>${item.price.toFixed(2)}</div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CollectionList;
