const SummaryTable = ({ entries = [], className = "" }) => (
  <div
    className={`w-200 mx-auto mt-5 rounded overflow-hidden bg-theme-background text-synth-sunset-orange shadow-[4px_4px_4px_4px] shadow-synth-sunset-orange border-t border-b border-synth-sunset-orange border-l border-r ${className}`.trim()}
  >
    <table className="w-full border-collapse">
      <tbody>
        {entries.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, colIndex) => (
              <td
                key={colIndex}
                className="p-4 border-l border-b border-synth-sunset-orange text-synth-sunset-orange text-left align-middle"
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default SummaryTable;
