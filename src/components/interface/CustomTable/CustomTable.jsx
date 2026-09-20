import React from "react";

const CustomTable = ({
  entries = [],
  sx = {},
  headerCol = false,
  className = "",
}) => {
  const cellPadding = sx.p !== undefined ? sx.p : "8px";
  const isFixedLayout = Boolean(sx.width || sx.headerWidth);

  // If the caller didn't specify horizontal margins (e.g. mx-*, ml-*, mr-*), default to mx-auto
  const hasCustomMargin = /\bm[xlr]-/.test(className);
  const marginClasses = hasCustomMargin ? "" : "mx-auto my-5";

  return (
    <div
      className={`rounded overflow-hidden border border-synth-sunset-pink bg-theme-background text-synth-sunset-pink shadow-[2px_2px_2px_2px] shadow-synth-cyber-pink w-fit ${marginClasses} ${className}`.trim()}
    >
      <table
        style={{
          borderCollapse: "separate",
          borderSpacing: 0,
          tableLayout: isFixedLayout ? "fixed" : "auto",
        }}
      >
        <tbody>
          {entries.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => {
                const isHeader = colIndex === 0 && headerCol;
                const cellWidth = isHeader
                  ? sx.headerWidth || sx.width
                  : sx.width;

                return (
                  <td
                    key={colIndex}
                    style={{
                      padding: cellPadding,
                      ...(cellWidth ? { width: cellWidth } : {}),
                      boxSizing: "border-box",
                    }}
                    className={`border-b border-r border-synth-sunset-pink text-synth-sunset-pink align-middle ${
                      sx.textAlign
                        ? sx.textAlign
                        : headerCol && !isHeader
                          ? "text-center"
                          : "text-left"
                    }`}
                  >
                    {cell}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
