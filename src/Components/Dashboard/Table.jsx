const Table = () => {
    let controls = [
        { name: "add", description: "Add new items", icon: "➕" },
        { name: "edit", description: "Edit existing items", icon: "✏" },
        { name: "delete", description: "Delete items", icon: "✖" }
    ];
    return (
        <div className="flex justify-center items-center">
            <table className="table-auto w-full border-collapse border border-gray-400 shadow-lg dark:border-gray-700">
                <thead>
                    <tr className="bg-blue-200 text-white dark:bg-blue-500 dark:text-gray-200">
                        <th className="px-4 py-2 border border-gray-400 dark:border-gray-700">Action</th>
                        <th className="px-4 py-2 border border-gray-400 dark:border-gray-700">Description</th>
                        <th className="px-4 py-2 border border-gray-400 dark:border-gray-700">Control</th>
                    </tr>
                </thead>
                <tbody>
                    {controls.map((control, index) => (
                        <tr key={index} className="text-center">
                            <td className="px-4 py-2 border border-gray-400 dark:border-gray-700 ">
                                {control.name}
                            </td>
                            <td className="px-4 py-2 border border-gray-400 dark:border-gray-700">{control.description}</td>
                            <td className="px-4 py-2 border border-gray-400 dark:border-gray-700 text-center">{control.icon}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
