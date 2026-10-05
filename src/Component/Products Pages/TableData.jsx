import { useMemo, useState } from "react";
import {
  useTable,
  tableFeatures,
  rowSortingFeature,
  rowPaginationFeature,
  createSortedRowModel,
  createPaginatedRowModel,
  flexRender,
} from "@tanstack/react-table";
import {
  Eye,
  SquarePen,
  Trash2,
  Star,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";


    const initialData  = [
  {
    id: 1,
    image: "src/assets/Product/1.png",
    name: "Wireless Earbuds",
    seller: "My Furniture",
    sku: "WB-10245",
    category: "Electronics",
    stock: 56,
    price: "$59.99",
    orders: 124,
    rating: 5,
    reviews: 87,
    status: "Published",
    date: "18 Apr, 2025",
    time: "12:24 PM",
  },
  {
    id: 2,
    image: "src/assets/Product/2.png",
    name: "Smart LED Desk Lamp",
    seller: "BrightLite",
    sku: "SL-89012",
    category: "Home & Office",
    stock: 32,
    price: "$39.49",
    orders: 78,
    rating: 4,
    reviews: 54,
    status: "Pending",
    date: "22 Apr, 2025",
    time: "09:45 AM",
  },
  {
    id: 3,
    image: "src/assets/Product/3.png",
    name: "Men's Running Shoes",
    seller: "ActiveWear Co.",
    sku: "RS-20450",
    category: "Fashion",
    stock: 120,
    price: "$89.00",
    orders: 231,
    rating: 5,
    reviews: 142,
    status: "Published",
    date: "24 Apr, 2025",
    time: "03:10 PM",
  },
  {
    id: 4,
    image: "src/assets/Product/4.png",
    name: "Fitness Tracker Watch",
    seller: "FitPulse",
    sku: "FT-67123",
    category: "Fitness",
    stock: 78,
    price: "$49.95",
    orders: 198,
    rating: 4,
    reviews: 89,
    status: "Published",
    date: "23 Apr, 2025",
    time: "10:12 AM",
  },
  {
    id: 5,
    image: "src/assets/Product/5.png",
    name: "Gaming Mouse RGB",
    seller: "HyperClick",
    sku: "GM-72109",
    category: "Gaming",
    stock: 120,
    price: "$29.99",
    orders: 243,
    rating: 3,
    reviews: 102,
    status: "Published",
    date: "19 Apr, 2025",
    time: "05:56 PM",
  },
  {
    id: 6,
    image: "src/assets/Product/6.png",
    name: "Modern Lounge Chair",
    seller: "UrbanLiving",
    sku: "FC-31220",
    category: "Furniture",
    stock: 24,
    price: "$199.00",
    orders: 38,
    rating: 5,
    reviews: 27,
    status: "Out of Stock",
    date: "18 Apr, 2025",
    time: "11:30 AM",
  },
  {
    id: 7,
    image: "src/assets/Product/7.png",
    name: "Plush Toy Bear",
    seller: "Softies",
    sku: "TY-00788",
    category: "Toys",
    stock: 150,
    price: "$15.99",
    orders: 305,
    rating: 4,
    reviews: 120,
    status: "Published",
    date: "17 Apr, 2025",
    time: "04:21 PM",
  },
  {
    id: 8,
    image: "src/assets/Product/8.png",
    name: '55" Ultra HD Smart TV',
    seller: "ViewMaster",
    sku: "TV-5588",
    category: "Electronics",
    stock: 64,
    price: "$499.00",
    orders: 142,
    rating: 4,
    reviews: 88,
    status: "Published",
    date: "25 Apr, 2025",
    time: "10:10 AM",
  },
  {
    id: 9,
    image: "src/assets/Product/9.png",
    name: 'Apple iMac 24" M3',
    seller: "Apple",
    sku: "IMAC-M3-24",
    category: "Computers",
    stock: 18,
    price: "$1,399.00",
    orders: 29,
    rating: 5,
    reviews: 16,
    status: "Pending",
    date: "24 Apr, 2025",
    time: "02:14 PM",
  },
  {
    id: 10,
    image: "src/assets/Product/10.png",
    name: "Smart Watch Pro X2",
    seller: "FitTech",
    sku: "SWPX2-GL",
    category: "Wearables",
    stock: 85,
    price: "$149.50",
    orders: 197,
    rating: 4,
    reviews: 65,
    status: "Published",
    date: "23 Apr, 2025",
    time: "08:00 AM",
  },
];

// status ke rang ek jagah, taake row mein ternary na likhna paray
const statusStyles = {
  Published: "bg-emerald-500/15 text-emerald-400",
  Pending: "bg-amber-500/15 text-amber-400",
  "Out of Stock": "bg-rose-500/15 text-rose-400",
};

const features = tableFeatures({
  rowSortingFeature,
  rowPaginationFeature,
  sortedRowModel: createSortedRowModel(),
  paginatedRowModel: createPaginatedRowModel(),
});

// "$1,399.00" -> 1399 (sorting number ke hisab se ho, text ke hisab se nahi)
const toNumber = (p) => Number(String(p).replace(/[$,]/g, ""));

function SortHeader({ column, title }) {
  return (
    <button
      onClick={column.getToggleSortingHandler()}
      className="flex items-center gap-1 uppercase text-xs font-semibold tracking-wide"
    >
      {title}
      <ArrowUpDown
        size={12}
        className={column.getIsSorted() ? "text-white" : "text-gray-500"}
      />
    </button>
  );
}

const TableData = () => {
  const [data, setData] = useState(initialData);

  const columns = useMemo(
    () => [
      {
        id: "select",
        header: () => <input type="checkbox" className="accent-blue-500" />,
        cell: () => <input type="checkbox" className="accent-blue-500" />,
        enableSorting: false,
      },
      {
        id: "name",
        accessorKey: "name",
        header: ({ column }) => <SortHeader column={column} title="Product" />,
        cell: (info) => {
          const p = info.row.original;
          return (
            <div className="flex items-center gap-3">
              <img
                src={p.image}
                alt={p.name}
                className="size-10 rounded-md object-cover bg-gray-700"
              />
              <div>
                <p className="text-sm font-semibold text-gray-100">{p.name}</p>
                <p className="text-xs text-gray-500">by: {p.seller}</p>
              </div>
            </div>
          );
        },
      },
      { accessorKey: "sku", header: "SKU", enableSorting: false },
      {
        accessorKey: "category",
        header: ({ column }) => <SortHeader column={column} title="Category" />,
      },
      {
        accessorKey: "stock",
        header: ({ column }) => <SortHeader column={column} title="Stock" />,
        cell: (info) => <b className="text-white">{info.getValue()}</b>,
      },
      {
        id: "price",
        accessorFn: (row) => toNumber(row.price),
        header: ({ column }) => <SortHeader column={column} title="Price" />,
        cell: (info) => info.row.original.price,
      },
      {
        accessorKey: "orders",
        header: ({ column }) => <SortHeader column={column} title="Orders" />,
      },
      {
        accessorKey: "rating",
        header: ({ column }) => <SortHeader column={column} title="Rating" />,
        cell: (info) => {
          const p = info.row.original;
          return (
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star
                  key={n}
                  size={14}
                  className={
                    n <= p.rating
                      ? "fill-amber-400 text-amber-400"
                      : "text-amber-400"
                  }
                />
              ))}
              <span className="ml-1 text-xs text-gray-400">({p.reviews})</span>
            </div>
          );
        },
      },
      {
        accessorKey: "status",
        header: ({ column }) => <SortHeader column={column} title="Status" />,
        cell: (info) => (
          <span
            className={`text-xs px-2 py-0.5 rounded ${statusStyles[info.getValue()]}`}
          >
            {info.getValue()}
          </span>
        ),
      },
      {
        id: "published",
        accessorFn: (row) => Date.parse(`${row.date} ${row.time}`),
        header: ({ column }) => (
          <SortHeader column={column} title="Published" />
        ),
        cell: (info) => {
          const p = info.row.original;
          return (
            <span>
              {p.date} <span className="text-xs text-gray-500">{p.time}</span>
            </span>
          );
        },
      },
      {
        id: "actions",
        header: "Actions",
        enableSorting: false,
        cell: (info) => {
          const id = info.row.original.id;
          const btn =
            "p-1.5 rounded-md border border-gray-700 text-gray-300 hover:bg-gray-700";
          return (
            <div className="flex items-center gap-1.5">
              <button className={btn}><Eye size={14} /></button>
              <button className={btn}><SquarePen size={14} /></button>
              <button
                className={btn}
                onClick={() => setData((d) => d.filter((p) => p.id !== id))}
              >
                <Trash2 size={14} />
              </button>
            </div>
          );
        },
      },
    ],
    []
  );

  const table = useTable(
    {
      features,
      columns,
      data,
      initialState: { pagination: { pageIndex: 0, pageSize: 8 } },
    },
    (state) => ({ sorting: state.sorting, pagination: state.pagination })
  );

  const { pageIndex, pageSize } = table.state.pagination;
  const total = data.length;
  const from = total === 0 ? 0 : pageIndex * pageSize + 1;
  const to = Math.min((pageIndex + 1) * pageSize, total);
  const pageCount = table.getPageCount();

  return (
    <div className="bg-[#1e1e26] rounded-lg text-gray-300">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead>
            {table.getHeaderGroups().map((hg) => (
              <tr key={hg.id} className="text-gray-400">
                {hg.headers.map((header) => (
                  <th key={header.id} className="py-3 px-3 font-medium">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-t border-gray-800">
                {row.getAllCells().map((cell) => (
                  <td key={cell.id} className="py-3 px-3">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between p-4 border-t border-gray-800">
        <p className="text-sm text-gray-400">
          Showing {from} to {to} of {total} products
        </p>

        <div className="flex items-center gap-1">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="p-2 rounded-md border border-gray-700 disabled:opacity-40"
          >
            <ChevronLeft size={14} />
          </button>

          {Array.from({ length: pageCount }, (_, i) => (
            <button
              key={i}
              onClick={() => table.setPageIndex(i)}
              className={`size-8 rounded-md text-sm ${
                i === pageIndex
                  ? "bg-blue-600 text-white"
                  : "border border-gray-700 hover:bg-gray-700"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="p-2 rounded-md border border-gray-700 disabled:opacity-40"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableData;