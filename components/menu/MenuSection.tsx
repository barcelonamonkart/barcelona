"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { scrollToElement } from "@/lib/smoothScroll";
import menuData from "./menuSection.json";

const parseWinePrices = (price: string) => {
  const fiveOzMatch = price.match(/\$?([\d.]+)\s*\(\s*5\s*oz\s*\)/i);
  const eightOzMatch = price.match(/\$?([\d.]+)\s*\(\s*8\s*oz\s*\)/i);
  const bottleMatch = price.match(/\$?([\d.]+)\s*Bottle/i);

  return {
    fiveOz: fiveOzMatch ? `$${fiveOzMatch[1]}` : "",
    eightOz: eightOzMatch ? `$${eightOzMatch[1]}` : "",
    bottle: bottleMatch ? `$${bottleMatch[1]}` : "",
  };
};

const winePriceColumnsClass = "w-[220px] grid grid-cols-3 gap-x-3 text-right";
const tabs = ["FOOD", "DRINKS", "HAPPY_HOURS"] as const;

type TabKey = (typeof tabs)[number];

type MenuItem = {
  name: string;
  price: string;
  description: string;
  group?: string;
};

type MenuCategory = {
  category: string;
  note?: string;
  items: MenuItem[];
};

const typedMenuData = menuData as Record<TabKey, MenuCategory[]>;

const createSectionId = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const MenuSection = () => {
  const brandOrange = "#f59e0b";
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const activeTab: TabKey =
    tabParam === "DRINKS" || tabParam === "HAPPY_HOURS" ? tabParam : "FOOD";
  const currentSections = typedMenuData[activeTab] || [];

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    const scrollTimer = window.setTimeout(() => {
      const targetSection = document.getElementById(hash);
      scrollToElement(targetSection);
    }, 80);

    return () => window.clearTimeout(scrollTimer);
  }, [activeTab]);

  return (
    <section className="w-full bg-white py-30 px-6 md:px-12 lg:px-24 font-sans transition-all duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Tab Navigation */}
        <div className="flex justify-start md:justify-center items-center gap-x-6 md:gap-x-12 mb-20 border-b border-gray-100 pb-2 overflow-x-auto md:overflow-x-visible scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                const nextParams = new URLSearchParams(searchParams.toString());
                nextParams.set("tab", tab);

                router.replace(
                  `${pathname}?${nextParams.toString()}${window.location.hash}`,
                  { scroll: false },
                );
              }}
              className="cursor-pointer font-jost relative py-3 px-4 text-base font-bold tracking-[0.2em] uppercase whitespace-nowrap shrink-0 transition-all duration-300"
              style={{ color: activeTab === tab ? "#1a1a1a" : "#9ca3af" }}
            >
              {tab === "HAPPY_HOURS" ? "HAPPY HOURS" : tab}
              <span
                className={`absolute bottom-[-1px] left-0 w-full h-[2px] transition-transform duration-300 origin-left ${
                  activeTab === tab ? "scale-x-100" : "scale-x-0"
                }`}
                style={{ backgroundColor: brandOrange }}
              />
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="md:columns-2 md:gap-16 min-h-[450px]">
          {currentSections.map((section, idx) => (
            <div
              key={`${activeTab}-${idx}`}
              id={createSectionId(section.category)}
              className="space-y-8 animate-fadeIn mb-12 break-inside-avoid scroll-mt-40"
            >
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div>
                  <h3
                    className="text-xl text-amber-600 md:text-2xl font-bold tracking-[0.1em] uppercase"
                    // style={{ color: brandOrange }}
                  >
                    {section.category}
                  </h3>
                  {section.note && (
                    <p className="mt-2 text-sm text-gray-700">{section.note}</p>
                  )}
                </div>
                {section.category === "COCKTAIL" && (
                  <span
                    className="text-xl text-amber-600 md:text-2xl font-semibold tracking-[0.08em]"
                    // style={{ color: brandOrange }}
                  >
                    2 Oz Pours
                  </span>
                )}
                {(["WINES AND BUBBLES", "WHITE", "RED"].includes(
                  section.category,
                )) && (
                  <div
                    className={`${winePriceColumnsClass} text-xl text-amber-600 md:text-2xl font-normal tracking-[0.08em]`}
                    // style={{ color: brandOrange }}
                  >
                    <span>5oz</span>
                    <span>8oz</span>
                    <span>Bottle</span>
                  </div>
                )}
              </div>

              <div className="space-y-10">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="group cursor-default">
                    {item.group && (
                      <h4 className="pt-7 pb-2 text-base font-bold tracking-[0.1em] text-gray-900">
                        {item.group}
                      </h4>
                    )}
                    {(() => {
                      const isWineSection = [
                        "WINES AND BUBBLES",
                        "WHITE",
                        "RED",
                      ].includes(section.category);
                      const winePrices = parseWinePrices(item.price);

                      return (
                        <div className="flex justify-between items-baseline mb-1">
                          <h4 className="text-base md:text-xl font-jost font-normal text-[#3B2417] tracking-wide capitalize transition-colors group-hover:text-amber-600">
                            {item.name.toLowerCase()}
                          </h4>
                          {isWineSection ? (
                            <div
                              className={`${winePriceColumnsClass} text-base md:text-xl font-normal text-[#3B2417]`}
                            >
                              <span>{winePrices.fiveOz}</span>
                              <span>{winePrices.eightOz}</span>
                              <span>{winePrices.bottle}</span>
                            </div>
                          ) : (
                            <span className="text-base md:text-xl font-light text-[#3B2417] ml-4 italic">
                              {item.price}
                            </span>
                          )}
                        </div>
                      );
                    })()}
                    {item.description && (
                      // <p className="text-[13px] md:text-[15px] text-gray-600 font-light leading-relaxed">
                      <p className="font-jost text-[15px] leading-6 text-gray-600 mt-2.5 line-clamp-2 ">
                        {item.description}
                      </p>
                    )}
                    <div className="w-full h-[1px] bg-gray-50 mt-4 group-last:hidden" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `,
        }}
      />
    </section>
  );
};

export default MenuSection;
