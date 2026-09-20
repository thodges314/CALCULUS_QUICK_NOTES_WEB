import { useState } from "react";
import { useNavigate } from "react-router-dom";
import items from "pages/pageDirectory";
import { toPascalCase } from "utils/utils";

const ChevronDown = ({ open }) => (
  <svg
    className={`w-4 h-4 ml-auto stroke-current transform transition-transform duration-200 ${
      open ? "rotate-180" : ""
    }`}
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2.5"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const NavItems = () => {
  const [openItems, setOpenItems] = useState([]);
  const navigate = useNavigate();

  const isOpen = (item) => openItems.includes(item.name);
  const toggleItem = (item) => {
    setOpenItems((prev) =>
      prev.includes(item.name)
        ? prev.filter((i) => i !== item.name)
        : [...prev, item.name],
    );
  };

  const handleNavigate = (entry, item) => {
    navigate(`/${toPascalCase(entry.name)}/${toPascalCase(item)}`);
  };

  return (
    <nav className="w-full text-left">
      <ul className="list-none p-0 m-0">
        {items.map((entry, idx) => {
          const open = isOpen(entry);
          return (
            <li key={idx} className="border-b border-synth-sunset-magenta/10">
              <button
                type="button"
                onClick={() => toggleItem(entry)}
                className="w-full flex items-center justify-between px-4 py-3 text-base text-synth-sunset-magenta hover:bg-white/5 transition-colors cursor-pointer text-left font-normal"
              >
                <span>{entry.name}</span>
                <ChevronDown open={open} />
              </button>

              {/* Smooth collapse container */}
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                  open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <ul className="list-none p-0 m-0 bg-black/20">
                    {entry.items.map((item, idx2) => (
                      <li key={`${idx}-${idx2}`}>
                        <button
                          type="button"
                          onClick={() => handleNavigate(entry, item)}
                          className="w-full block pl-8 pr-4 py-2.5 text-sm text-synth-sunset-magenta/80 hover:text-synth-sunset-magenta hover:bg-white/5 transition-colors cursor-pointer text-left"
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavItems;
