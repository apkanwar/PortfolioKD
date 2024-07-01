
export default function Table(props) {
    return (
        <div className="overflow-x-auto shadow-md rounded-lg mt-12 mx-24">
            <table className="w-full table-auto text-midnight-black">
                <thead className="bg-bmo-blue uppercase font-dText text-white text-xl">
                    <tr className="text-left border-b-4 border-white">
                        <th className="px-6 py-2 border-r border-gray-300">
                            Category
                        </th>
                        <th className="px-6 py-2 border-r border-gray-300">
                            Term
                        </th>
                        <th className="px-6 py-2">
                            Amortization Period
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.content.map(row => {
                        return (
                            <tr key={row.id} className="font-jSans text-xl odd:bg-gray-200 even:bg-white">
                                <td className="px-6 py-2 border-r border-gray-300">
                                    {row.name}
                                </td>
                                <td className="px-6 py-2 border-r border-gray-300">
                                    {row.tValue}
                                </td>
                                <td className="px-6 py-2">
                                    {row.aValue}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}