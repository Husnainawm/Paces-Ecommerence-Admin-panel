import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  ShoppingBag, MessageSquare, Briefcase, ListChecks,
  FileText, Heart, Users, Wallet, Zap,
  Mail, BadgePercent, LayoutGrid, ChevronDown,
  Headphones,
} from "lucide-react";

// "Add/Edit Order" -> "add-edit-order"
const slug = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// string ho ya object, dono ko object bana deta hai
const normalize = (x) => (typeof x === "string" ? { label: x } : x);

// ---------- Data (component ke bahar, taake har render par dobara na bane) ----------
const appmen = [
  {
    label: "Ecommerce",
    symbol: ShoppingBag,
    submenu: [
      {
        label: "Products",
        submenu: [
          { label: "Products", path: "/products" },
          { label: "Products Grid", path: "/products-grid" },
          { label: "Product Details", path: "/product-details" },
          { label: "Add Product", path: "/addproduct" },
        ],
      },
      "Categories",
      {
        label: "Orders",
        submenu: ["Orders", "Order Details", "Add/Edit Order"],
      },
      "Customers",
      "Cart",
      "Checkout",
      {
        label: "Sellers",
        submenu: ["Sellers", "Sellers Details"],
      },
      "Refunds",
      "Reviews",
      {
        label: "Inventory",
        submenu: ["Warehouse", "Product Stocks", "Purchased Orders"],
      },
      {
        label: "Reports",
        submenu: ["Product Views", "Sales"],
      },
      "Attributes",
      "Settings",
    ],
  },
  { label: "Chat", symbol: MessageSquare, submenu: [] },
  {
    label: "Projects",
    symbol: Briefcase,
    submenu: [
      "My Projects",
      "Projects List",
      "View Project",
      "Kanban Board",
      "Team Board",
      "Activity Stream",
    ],
  },
  {
    label: "Tasks",
    symbol: ListChecks,
    submenu: ["Task List", "Task Details", "Create Tasks"],
  },
  {
    label: "Invoice",
    symbol: FileText,
    submenu: ["Invoices", "Single Invoice", "New Invoice"],
  },
  {
    label: "CRM",
    symbol: Heart,
    submenu: [
      "Contacts",
      "Opportunities",
      "Deals",
      "Leads",
      "Pipeline",
      "Campaign",
      "Proposals",
      "Estimations",
      "Customers",
      "Activities",
    ],
  },
  {
    label: "Users",
    symbol: Users,
    submenu: [
      "Contacts",
      "Profile",
      "Account Settings",
      "Roles",
      "Role Details",
      "Permissions",
    ],
  },
  {
    label: "Finance",
    symbol: Wallet,
    submenu: ["Expenses", "Income", "Transactions", "Banks & Cards"],
  },
  {
    label: "HRM",
    symbol: Zap,
    submenu: [
      "Staffs",
      "Departments",
      "Attendance",
      "Leaves",
      "Holidays",
      "Payroll",
      "Create Salary Slip",
    ],
  },
  {
    label: "Email",
    symbol: Mail,
    submenu: ["Inbox", "Details", "Compose"],
  },
  {
    label: "Support Center",
    symbol: Headphones,
    submenu: ["Tickets List", "Ticket Details", "New Ticket"],
  },
  {
    label: "Promo",
    symbol: BadgePercent,
    submenu: ["Coupons", "Gift Cards", "Discounts"],
  },
  {
    label: "More Apps",
    symbol: LayoutGrid,
    submenu: [
      "Social Feed",
      "Pro AI",
      "File Manager",
      "Calendar",
      "Companies",
      "Todo",
      "Pin Board",
      "Clients",
      "Outlook View",
      "Vote List",
      "Issue Tracker",
      "API Keys",
      "Manage Apps",
      "Blog",
      "Forum",
    ],
  },
];

// ---------- Submenu item (khud ko dobara call karta hai, is liye 3+ levels bhi chalenge) ----------
function SubItem({ sub, base }) {
  const item = normalize(sub);
  const children = item.submenu ?? [];
  const hasChildren = children.length > 0;
  const path = item.path ?? `${base}/${slug(item.label)}`;

  const { pathname } = useLocation();

  const childPath = (c) => {
    const n = normalize(c);
    return n.path ?? `${path}/${slug(n.label)}`;
  };

  // page refresh par bhi sahi submenu khula rahe
  const [open, setOpen] = useState(
    hasChildren && children.some((c) => childPath(c) === pathname)
  );

  // andar submenu nahi: seedha link
  if (!hasChildren) {
    return (
      <NavLink
        to={path}
        end
        className={({ isActive }) =>
          `block text-sm py-2 ${
            isActive
              ? "text-white font-semibold"
              : "text-gray-400 hover:text-gray-200"
          }`
        }
      >
        {item.label}
      </NavLink>
    );
  }

  // andar submenu hai: click par khule/band ho
  return (
    <div>
      <div
        onClick={() => setOpen(!open)}
        className={`flex items-center justify-between text-sm py-2 cursor-pointer ${
          open ? "text-white font-semibold" : "text-gray-400 hover:text-gray-200"
        }`}
      >
        <span>{item.label}</span>
        <ChevronDown
          size={14}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </div>

      {open && (
        <div className="flex flex-col pl-4">
          {children.map((child) => (
            <SubItem key={normalize(child).label} sub={child} base={path} />
          ))}
        </div>
      )}
    </div>
  );
}

// ---------- Main component ----------
const AppsBoard = () => {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <>
      {appmen.map((item, i) => (
        <div key={item.label}>
          <div
            onClick={() => setIsOpen(isOpen === i ? null : i)}
            className="flex items-center justify-between py-2 rounded-lg cursor-pointer text-white"
          >
            <div className="flex items-center gap-3">
              <item.symbol className="size-6 lg:size-4.5" />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
            <ChevronDown
              size={16}
              className={`transition-transform ${
                isOpen === i ? "rotate-180" : ""
              }`}
            />
          </div>

          {isOpen === i && (
            <div className="flex flex-col pl-10 py-1">
              {item.submenu.map((sub) => (
                <SubItem
                  key={typeof sub === "string" ? sub : sub.label}
                  sub={sub}
                  base={`/${slug(item.label)}`}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default AppsBoard;