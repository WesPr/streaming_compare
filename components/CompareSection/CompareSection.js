import React, { useState } from "react";
import CompareCard from "./CompareCard";
import { useRouter } from "next/router";

export default function CompareSection({
  selectedItems,
  setSelectedItems,
  currentPlatforms,
  setCurrentPlatforms,
}) {
  const router = useRouter();

  return (
    <div
      className={
        "h-20  w-screen bottom-2 fixed overflow-hidden tw-opacityContainer flex flex-1 justify-evenly px-2"
      }
    >
      <div className={"flex mr-5"}>
        {selectedItems.map((item) => (
          <CompareCard
            key={item.id}
            item={item}
            setSelectedItems={setSelectedItems}
            selectedItems={selectedItems}
            currentPlatforms={currentPlatforms}
            setCurrentPlatforms={setCurrentPlatforms}
          />
        ))}
      </div>
      {selectedItems.length > 1 && (
        <button
          type="button"
          className={
            " px-2 tw-button my-4 text-center rounded-lg text-sm font-semibold"
          }
          onClick={() => {
            router.push({
              pathname: "/compare",
              query: {
                selectedPlatforms: JSON.stringify(selectedItems),
              },
            });
          }}
        >
          Compare
        </button>
      )}
    </div>
  );
}
