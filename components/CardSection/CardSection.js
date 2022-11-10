import React, { useState } from "react";
import Card from "./Card";
import CompareSection from "../CompareSection/CompareSection";

export default function CardSection({ platforms }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentPlatforms, setCurrentPlatforms] = useState(platforms);
  return (
    <div className={"flex flex-wrap justify-center"}>
      {currentPlatforms?.map((item) => (
        <Card
          key={item.id}
          item={item}
          setSelectedItems={setSelectedItems}
          selectedItems={selectedItems}
          currentPlatforms={currentPlatforms}
          setCurrentPlatforms={setCurrentPlatforms}
        />
      ))}
      {selectedItems.length > 0 && (
        <CompareSection
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          currentPlatforms={currentPlatforms}
          setCurrentPlatforms={setCurrentPlatforms}
        />
      )}
    </div>
  );
}
