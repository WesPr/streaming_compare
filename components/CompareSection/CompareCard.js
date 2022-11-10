import React from "react";
import Image from "next/image";

export default function CompareCard({
  item,
  setSelectedItems,
  selectedItems,
  setCurrentPlatforms,
}) {
  const handleClick = (item) => {
    const remainingArr = selectedItems.filter((data) => data.id != item.id);
    setSelectedItems(remainingArr);
    setCurrentPlatforms((current) => [...current, item]);
  };

  return (
    <div
      className={
        " bg-[#18181c] rounded-lg my-4 lg:mx-1 mx-1 flex border-solid border-gray-400 border-2 cursor-pointer hover:bg-red-500 hover:opacity-50"
      }
      onClick={() => handleClick(item)}
    >
      <div className={"flex p-2"}>
        <Image
          src={item.imageUrl}
          alt={`"${item.platformName}"`}
          className="compareImage"
          width={100}
          height={200}
        />
      </div>
    </div>
  );
}
