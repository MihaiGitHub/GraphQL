import React from "react";
import { useQuery } from "@apollo/client";
import { GET_COLLECTION } from "../queries";

const Collection = ({ collectionId }) => {
  const { loading, error, data } = useQuery(GET_COLLECTION, {
    variables: { id: collectionId },
  });

  if (loading) return <p>Loading collections...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log("data collection ", data.collection.id);

  return (
    <div>
      <h1>Collection</h1>
      {data.collection.id}
    </div>
  );
};

export default Collection;
