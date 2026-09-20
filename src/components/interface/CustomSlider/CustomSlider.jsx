// import { useState } from "react";

// export const CustomSlider = ({
//   min = 0,
//   max = 100,
//   step = 1,
//   defaultValue = 0,
//   value: controlledValue,
//   onChange = () => {},
//   marks = [],
//   className = "",
// }) => {
//   const [internalValue, setInternalValue] = useState(defaultValue);
//   const value = controlledValue !== undefined ? controlledValue : internalValue;

//   const handleChange = (e) => {
//     const val = Number(e.target.value);
//     if (controlledValue === undefined) {
//       setInternalValue(val);
//     }
//     onChange(e, val);
//   };

//   const percentage = Math.max(
//     0,
//     Math.min(100, ((value - min) / (max - min)) * 100),
//   );
//   const hasMarks = marks && marks.length > 0;

//   return (
//     <div
//       className={`relative w-full flex flex-col justify-center select-none pt-3 pb-5 ${className}`.trim()}
//     >
//       {/* Slider Input & Rail */}
//       <div className="relative w-full flex items-center h-4">
//         <input
//           type="range"
//           min={min}
//           max={max}
//           step={step}
//           value={value}
//           onChange={handleChange}
//           style={{
//             background: `linear-gradient(to right, #f222ff 0%, #f222ff ${percentage}%, rgba(242, 34, 255, 0.3) ${percentage}%, rgba(242, 34, 255, 0.3) 100%)`,
//           }}
//           className="w-full h-0.5 appearance-none cursor-pointer rounded-full outline-none
//             [&::-webkit-slider-thumb]:appearance-none
//             [&::-webkit-slider-thumb]:w-3
//             [&::-webkit-slider-thumb]:h-3
//             [&::-webkit-slider-thumb]:rounded-full
//             [&::-webkit-slider-thumb]:bg-[#f222ff]
//             [&::-webkit-slider-thumb]:transition-transform
//             [&::-webkit-slider-thumb]:hover:scale-125
//             [&::-moz-range-thumb]:w-3
//             [&::-moz-range-thumb]:h-3
//             [&::-moz-range-thumb]:rounded-full
//             [&::-moz-range-thumb]:bg-[#f222ff]
//             [&::-moz-range-thumb]:border-none"
//         />

//         {/* Mark Tick Dots */}
//         {hasMarks && (
//           <div className="absolute inset-0 pointer-events-none flex items-center">
//             {marks.map((mark) => {
//               const markPercent = ((mark.value - min) / (max - min)) * 100;
//               return (
//                 <div
//                   key={mark.value}
//                   className="w-0.5 h-0.5 rounded-full bg-[#f222ff]/60 absolute -translate-x-1/2"
//                   style={{ left: `${markPercent}%` }}
//                 />
//               );
//             })}
//           </div>
//         )}

//         {/* Mark Numbers positioned right below the rail */}
//         {hasMarks && (
//           <div className="absolute top-4 left-0 w-full pointer-events-none">
//             {marks.map((mark) => {
//               const markPercent = ((mark.value - min) / (max - min)) * 100;
//               return (
//                 <div
//                   key={mark.value}
//                   className="absolute -translate-x-1/2"
//                   style={{ left: `${markPercent}%` }}
//                 >
//                   {mark.label !== undefined && (
//                     <span className="text-xs text-[#f222ff] font-mono block">
//                       {mark.label}
//                     </span>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

import React, { useState } from "react";

const CustomSlider = ({
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 0,
  value: controlledValue,
  onChange = () => {},
  marks = [],
  className = "",
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleChange = (e) => {
    const val = Number(e.target.value);
    if (controlledValue === undefined) {
      setInternalValue(val);
    }
    onChange(e, val);
  };

  const percentage = Math.max(
    0,
    Math.min(100, ((value - min) / (max - min)) * 100),
  );
  const hasMarks = marks && marks.length > 0;

  return (
    <div
      className={`relative w-full flex flex-col justify-center select-none ${
        hasMarks ? "pt-3 pb-5" : "py-2.5"
      } ${className}`.trim()}
    >
      {/* Slider Input & Rail */}
      <div className="relative w-full flex items-center h-4">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          style={{
            background: `linear-gradient(to right, #f222ff 0%, #f222ff ${percentage}%, rgba(242, 34, 255, 0.3) ${percentage}%, rgba(242, 34, 255, 0.3) 100%)`,
          }}
          className="w-full h-[2px] appearance-none cursor-pointer rounded-full outline-none
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-3
            [&::-webkit-slider-thumb]:h-3
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-[#f222ff]
            [&::-webkit-slider-thumb]:transition-transform
            [&::-webkit-slider-thumb]:hover:scale-125
            [&::-moz-range-thumb]:w-3
            [&::-moz-range-thumb]:h-3
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:bg-[#f222ff]
            [&::-moz-range-thumb]:border-none"
        />

        {/* Mark Tick Dots */}
        {hasMarks && (
          <div className="absolute inset-0 pointer-events-none flex items-center">
            {marks.map((mark) => {
              const markPercent = ((mark.value - min) / (max - min)) * 100;
              return (
                <div
                  key={mark.value}
                  className="w-[2px] h-[2px] rounded-full bg-[#f222ff]/60 absolute -translate-x-1/2"
                  style={{ left: `${markPercent}%` }}
                />
              );
            })}
          </div>
        )}

        {/* Mark Numbers */}
        {hasMarks && (
          <div className="absolute top-4 left-0 w-full pointer-events-none">
            {marks.map((mark) => {
              const markPercent = ((mark.value - min) / (max - min)) * 100;
              return (
                <div
                  key={mark.value}
                  className="absolute -translate-x-1/2"
                  style={{ left: `${markPercent}%` }}
                >
                  {mark.label !== undefined && (
                    <span className="text-xs text-[#f222ff] font-mono block">
                      {mark.label}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomSlider;
