"use client";
import { useMemo, useRef, useState } from "react";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/solid";

import { Ripples } from "react-ripples-continued";

function SearchBar({
  isInFocus = false,
  onSearch = () => {
    console.log("searching");
  },
}) {
  const [isInFocusState, setIsInFocusState] = useState(isInFocus);
  const [inputValue, setInputValue] = useState("");
  const [keepLeft, setKeepLeft] = useState(false);
  const refInput = useRef<HTMLInputElement>(null);

  return (
    <div
      tabIndex={0}
      className={
        isInFocusState
          ? "outline-base-200 group relative flex w-full cursor-text overflow-hidden rounded-full bg-white px-4 py-2 text-sm font-medium outline outline-2 transition-all"
          : "outline-base-200 group relative flex w-full cursor-text overflow-hidden rounded-full bg-white px-4 py-2 text-sm font-medium outline outline-0 transition-all"
      }
      // placeholder="Search This Website"
      onFocus={() => {
        setIsInFocusState(true);
        setKeepLeft(true);
        refInput.current?.focus();
      }}
      onBlur={() => {
        setIsInFocusState(false);
        if (inputValue.length === 0) setKeepLeft(false);
      }}
    >
      <div
        className={
          keepLeft
            ? "relative ml-[0%] -translate-x-[0%] transition-all"
            : "relative ml-[50%] -translate-x-[50%] transition-all"
        }
      >
        {/* just a "ghost element"*/}
        <span className="flex gap-2 whitespace-nowrap">
          <div className="flex items-center justify-center">
            <MagnifyingGlassIcon
              stroke="rgb(148 163 184)"
              className="heroicon-sw- h-5 w-5"
            />
          </div>
          <div>
            {inputValue.length == 0 ? "Search This Website" : inputValue}
          </div>
        </span>
        {/* the real element*/}
        <div className="absolute left-0 top-0 flex w-full gap-2 bg-white">
          <div className="flex items-center justify-center">
            <MagnifyingGlassIcon
              onClick={onSearch}
              stroke={inputValue.length == 0 ? "rgb(148 163 184)" : "black"}
              className={
                keepLeft
                  ? "heroicon-sw-2 h-5 w-5 cursor-pointer transition-all"
                  : "heroicon-sw-2 h-5 w-5 transition-all"
              }
            />
          </div>
          <input
            ref={refInput}
            type="text"
            className="placeholder:text-base-400 w-full outline-none transition-all"
            placeholder="Search This Website"
            value={inputValue}
            onInput={(e: any) => {
              setInputValue(e.currentTarget.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") onSearch();
            }}
          />
        </div>
      </div>
    </div>
  );
}

interface Button {
  children: React.ReactElement;
  isIcon?: boolean;
  className?: string;
}

function Button({ children, isIcon = false, className }: Button) {
  return (
    <button
      className={
        isIcon
          ? "outline-primary relative rounded-full px-2 py-2 text-sm outline outline-0 outline-offset-2 focus-visible:outline-2 [&>.background]:active:scale-[0.97]"
          : "outline-primary relative rounded-full px-6 py-2 text-sm outline outline-0 outline-offset-2 focus-visible:outline-2 [&>.background]:active:scale-[0.97]"
      }
    >
      {children}
      <div className="absolute left-0 top-0 z-10 h-full w-full overflow-hidden rounded-full transition-all">
        <Ripples
          optimize
          fillAndHold
          opacity={0.5}
          className="bg-primary z-20"
        />
      </div>
      <div className="background bg-primary absolute left-0 top-0 z-0 h-full w-full rounded-full p-2 transition-all" />
    </button>
  );
}

export default function Home() {
  return (
    <div>
      <div className=" bg-base-100 selection:bg-primary w-full p-4 selection:bg-opacity-50">
        <div className="mx-auto flex max-w-xl items-center gap-3">
          <Button>
            <div className="relative z-10 text-white">Button</div>
          </Button>
          <div className="grow">
            <SearchBar />
          </div>
          <Button isIcon>
            <UserIcon
              fill="white"
              className="heroicon-sw-2 relative z-10 h-5 w-5"
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
