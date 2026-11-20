import { RESERVATION_URL } from "@/lib/reservation";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import React from "react";
import Reveal from "./Reveal";
import Link from "next/link";

type BookTableSectionProps = {
  dropdownRef: React.RefObject<HTMLDivElement | null>;
  timeDropdownRef: React.RefObject<HTMLDivElement | null>;
  peopleCount: number;
  isPeopleDropdownOpen: boolean;
  setIsPeopleDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setPeopleCount: React.Dispatch<React.SetStateAction<number>>;
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  getTodayString: () => string;
  selectedTime: string;
  isTimeDropdownOpen: boolean;
  setIsTimeDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedTime: React.Dispatch<React.SetStateAction<string>>;
  timeSlots: string[];
};


const to24HourTime = (time: string) => {
  const [timePart, meridiemRaw] = time.trim().toLowerCase().split(" ");
  const [hourPart, minutePart] = timePart.split(":");

  let hour = Number(hourPart);
  const minute = Number(minutePart);
  const meridiem = meridiemRaw === "PM" ? "pm" : "am";

  if (meridiem === "pm" && hour !== 12) {
    hour += 12;
  }

  if (meridiem === "am" && hour === 12) {
    hour = 0;
  }

  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
};

const buildOpenTableReservationUrl = (
  partySize: number,
  bookingDate: string,
  bookingTime: string,
) => {
  const url = new URL(RESERVATION_URL);

  url.searchParams.set("partysize", String(partySize));
  url.searchParams.set(
    "dateTime",
    `${bookingDate}T${to24HourTime(bookingTime)}`,
  );

  return url.toString();
};

export default function BookTableSection({
  dropdownRef,
  timeDropdownRef,
  peopleCount,
  isPeopleDropdownOpen,
  setIsPeopleDropdownOpen,
  setPeopleCount,
  date,
  setDate,
  getTodayString,
  selectedTime,
  isTimeDropdownOpen,
  setIsTimeDropdownOpen,
  setSelectedTime,
  timeSlots,
}: BookTableSectionProps) {
  // Dynamic reservation URL built from selected guest count, date, and time.
  const bookNowUrl = buildOpenTableReservationUrl(
    peopleCount,
    date,
    selectedTime,
  );

  return (
    <section className="relative py-24 lg:py-32 flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/interior.jpg"
          alt="Book a table background"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <Reveal>
          <span className="block font-bold tracking-[0.2em] text-[14px] uppercase mb-4 font-sans-body">
            ONLINE RESERVATION
          </span>
          <h2 className="font-serif-display text-5xl md:text-6xl lg:text-7xl mb-12">
            BOOK A TABLE
          </h2>
        </Reveal>

        <div className="max-w-4xl mx-auto bg-transparent">
          <div className="flex flex-col lg:flex-row items-end gap-6 lg:gap-0">
            <div
              ref={dropdownRef}
              className="w-full lg:w-1/4 border-b border-white/50 pb-2 relative"
            >
              {/* Guest selector (peopleCount) */}
              <div
                className="flex justify-between items-center cursor-pointer hover:text-amber-500 transition-colors"
                onClick={() => setIsPeopleDropdownOpen(!isPeopleDropdownOpen)}
              >
                <span className="text-sm font-sans-body">
                  {peopleCount} {peopleCount === 1 ? "Person" : "People"}
                </span>
                <ChevronDown size={14} className="text-white" />
              </div>

              {isPeopleDropdownOpen && (
                <div className="absolute bottom-full left-0 w-full max-h-60 overflow-y-auto bg-black border border-white/20 shadow-xl z-50 mb-1 custom-scrollbar">
                  {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <div
                      key={num}
                      onClick={() => {
                        setPeopleCount(num);
                        setIsPeopleDropdownOpen(false);
                      }}
                      className={`px-4 py-2 text-sm text-left hover:bg-amber-6  00 hover:text-black cursor-pointer transition-colors font-sans-body ${
                        peopleCount === num
                          ? "bg-amber-500 text-black"
                          : "text-white"
                      }`}
                    >
                      {num} {num === 1 ? "Person" : "People"}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="hidden lg:block w-8"></div>

            <div className="w-full lg:w-1/4 border-b border-white/50 pb-2 relative group">
              {/* Date selector (date) */}
              <input
                type="date"
                min={getTodayString()}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
              />
              <div className="flex justify-between items-center group-hover:text-amber-600 transition-colors">
                <span className="text-sm font-sans-body">{date}</span>
                <ChevronDown
                  size={14}
                  className="text-white group-hover:text-amber-600 transition-colors"
                />
              </div>
            </div>

            <div className="hidden lg:block w-8"></div>

            <div
              ref={timeDropdownRef}
              className="w-full lg:w-1/4 border-b border-white/50 pb-2 relative"
            >
              {/* Time selector (selectedTime) */}
              <div
                className="flex justify-between items-center cursor-pointer hover:text-amber-500 transition-colors"
                onClick={() => setIsTimeDropdownOpen(!isTimeDropdownOpen)}
              >
                <span className="text-sm font-sans-body">{selectedTime}</span>
                <ChevronDown size={14} className="text-white" />
              </div>

              {isTimeDropdownOpen && (
                <div className="absolute bottom-full left-0 w-full max-h-60 overflow-y-auto bg-black border border-white/20 shadow-xl z-50 mb-1 custom-scrollbar">
                  {timeSlots.map((time, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setSelectedTime(time);
                        setIsTimeDropdownOpen(false);
                      }}
                      className={`px-4 py-2 text-sm text-left hover:bg-amber-500 hover:text-black cursor-pointer transition-colors font-sans-body ${
                        selectedTime === time
                          ? "bg-amber-500 text-black"
                          : "text-white"
                      }`}
                    >
                      {time}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="hidden lg:block w-8"></div>

            <Link
              href={bookNowUrl}
              target="_blank"
              className="font-jost  w-full lg:w-1/4 bg-amber-600 hover:bg-amber-600 text-white font-bold py-3 px-6 text-[14px] tracking-widest uppercase transition font-sans-body text-center  hover:scale-[1.02]"
            >
              BOOK NOW
            </Link>
          </div>

          {/* <div className="text-left mt-2">
            <span className="text-[10px] text-white/70 italic">
              *Powered by Himanshu
            </span>
          </div> */}
        </div>
      </div>
    </section>
  );
}
