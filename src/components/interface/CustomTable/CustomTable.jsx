const CustomTable = ({ entries = [], sx = {}, headerCol = false }) => {
  const cellPadding = sx.p !== undefined ? sx.p : "8px";

  return (
    <div className="mt-5 mb-0 rounded overflow-hidden border border-synth-sunset-pink bg-theme-background text-synth-sunset-pink shadow-[2px_2px_2px_2px] shadow-synth-cyber-pink">
      <table className="w-full border-collapse">
        <tbody>
          {entries.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => {
                const isHeader = colIndex === 0 && headerCol;
                return (
                  <td
                    key={colIndex}
                    style={{
                      padding: cellPadding,
                      width: isHeader ? "100%" : sx.width,
                    }}
                    className="border border-synth-sunset-pink text-synth-sunset-pink text-center align-middle"
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
