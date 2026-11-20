"use client";

import { useEffect, useRef, useState } from "react";
import BookTableSection from "./BookTableSection";

const TIME_SLOTS = Array.from({ length: 13 }, (_, i) => 11 + i).flatMap(
  (hour24) => {
    const hour12 = hour24 > 12 ? hour24 - 12 : hour24;
    const ampm = hour24 >= 12 ? "pm" : "am";

    if (hour24 === 23) {
      return [`${hour12}:00 ${ampm}`];
    }

    return [`${hour12}:00 ${ampm}`, `${hour12}:30 ${ampm}`];
  },
);

const getTodayString = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export default function BookTableSectionStandalone() {
  const [peopleCount, setPeopleCount] = useState(2);
  const [isPeopleDropdownOpen, setIsPeopleDropdownOpen] = useState(false);
  const [date, setDate] = useState(getTodayString());
  const [selectedTime, setSelectedTime] = useState("11:00 am");
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const timeDropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setIsPeopleDropdownOpen(false);
      }

      if (
        timeDropdownRef.current &&
        !timeDropdownRef.current.contains(target)
      ) {
        setIsTimeDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <BookTableSection
      dropdownRef={dropdownRef}
      timeDropdownRef={timeDropdownRef}
      peopleCount={peopleCount}
      isPeopleDropdownOpen={isPeopleDropdownOpen}
      setIsPeopleDropdownOpen={setIsPeopleDropdownOpen}
      setPeopleCount={setPeopleCount}
      date={date}
      setDate={setDate}
      getTodayString={getTodayString}
      selectedTime={selectedTime}
      isTimeDropdownOpen={isTimeDropdownOpen}
      setIsTimeDropdownOpen={setIsTimeDropdownOpen}
      setSelectedTime={setSelectedTime}
      timeSlots={TIME_SLOTS}
    />
  );
}
