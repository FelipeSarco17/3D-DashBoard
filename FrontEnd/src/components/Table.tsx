import Button from './Button'
import DeleteLogo from '../assets/DeleteLogo.svg';
import EditLogo from '../assets/EditLogo.svg';

interface TableProps {
  headers: string[]
  rows: (string | number)[][]
}



const Table = ({ headers, rows }: TableProps) => {
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-neonPurple/40 shadow-[0_0_20px_-6px_rgba(176,38,255,0.5)]">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="bg-neonPurple">
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-3 text-xs font-medium uppercase tracking-wide text-white first:rounded-tl-xl last:rounded-tr-xl"
              >
                {header}
              </th>
            ))}
            <th className="px-4 py-3 text-xs font-medium uppercase tracking-wide text-white first:rounded-tl-xl last:rounded-tr-xl"/>
          </tr>
        </thead>
        <tbody className="bg-white">
          {rows.length === 0 ? (
            <tr>
              <td
                colSpan={headers.length}
                className="px-4 py-6 text-center text-sm text-gray-400"
              >
                No hay registros para mostrar
              </td>
            </tr>
          ) : (
            rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`border-b border-neonCyan/20 transition-colors last:border-b-0 hover:bg-neonCyan/10 ${
                  rowIndex % 2 === 0 ? 'bg-white' : 'bg-neonPurple/5'
                }`}
              >
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-4 py-3 text-sm text-gray-700">
                    {cell}
                  </td>
                  
                ))}
                <td className='p-2 flex gap-2 justify-center'>
                    <Button className='' color="red"><img src={DeleteLogo} alt="DeleteLogo" /></Button>
                    <Button className='' color="yellow"><img src={EditLogo} alt="EditLogo" /></Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Table