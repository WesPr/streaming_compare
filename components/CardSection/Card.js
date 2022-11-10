import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineInfoCircle } from "react-icons/ai";
import Image from "next/image";
import PlatformModal from "./PlatformModal";

export default function Card({
  item,
  setSelectedItems,
  selectedItems,
  currentPlatforms,
  setCurrentPlatforms,
}) {
  const [open, setOpen] = useState(false);

  const handleClick = (item) => {
    if (selectedItems.length < 3) {
      setSelectedItems((current) => [...current, item]);

      const remainingArr = currentPlatforms.filter(
        (platform) => platform.id != item.id
      );
      setCurrentPlatforms(remainingArr);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="item" data-value="1">
      <div className={"flex-1 flex justify-end"}>
        <div className={"p-5"}>
          <div
            className={"text-black tw-button rounded-lg p-2 cursor-pointer"}
            onClick={() => handleClick(item)}
          >
            <AiOutlinePlus />
          </div>
        </div>
      </div>

      <div className={"flex-1 flex h-0"}>
        <div className={"flex flex-1 px-5"}>
          <Image
            src={item.imageUrl}
            alt={`"${item.imageUrl}"`}
            className="image"
            width={500}
            height={200}
            priority
          />
        </div>
      </div>

      <div className={"flex-1 flex flex-col justify-end"}>
        <div className={"flex flex-row justify-between  px-5 pb-5"}>
          <AiOutlineInfoCircle
            fontSize={30}
            color={"rgb(107, 114, 128)"}
            className={"cursor-pointer"}
            onClick={() => handleOpen()}
          />
        </div>
      </div>
      <PlatformModal open={open} handleClose={handleClose} item={item} />
    </div>
  );
}
