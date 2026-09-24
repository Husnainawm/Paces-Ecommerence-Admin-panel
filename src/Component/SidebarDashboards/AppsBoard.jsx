import {
  ShoppingBag, MessageSquare, Briefcase, ListChecks,
  FileText, Heart, Users, Wallet, Zap,
  Mail, BadgePercent, LayoutGrid, ChevronDown,
  Headphones
} from 'lucide-react';
import React, { useState } from 'react'

const AppsBoard = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [activeItem, setActiveItem] = useState("Ecommerce");

  const appmen = [

    {
      label: "Ecommerce", symbol: ShoppingBag, submenu: [
        "Products",
        "Categories",
        "Orders",
        "Customers",
        "Cart",
        "Checkout",
        "Sellers",
        "Refunds",
        "Reviews",
        "Inventory",
        "Reports",
        "Attributes",
        "Settings",
      ]
    },
    { label: "Chat", symbol: MessageSquare, submenu: [] },
    {
      label: "Projects", symbol: Briefcase, submenu: [
        "My Projects",
        "Projects List",
        "View Project",
        "Kanban Board",
        "Team Board",
        "Activity Steam",
      ]
    },
    { label: "Tasks", symbol: ListChecks, submenu: ["Task List", "Task Detials", "Create Tasks"] },
    { label: "Invoice", symbol: FileText, submenu: ["Invoices", "Single Invoice", "New Invoice"] },
    {
      label: "CRM", symbol: Heart, submenu: [
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
      ]
    },
    {
      label: "Users", symbol: Users, submenu: [
        "Contacts",
        "Profile",
        "Account Settings",
        "Roles",
        "Role Details",
        "Permissions",
      ]
    },
    {
      label: "Finance", symbol: Wallet, submenu: [
        "Expenses",
        "Income",
        "Transactions",
        "Banks & Cards",
      ]
    },
    {
      label: "HRM", symbol: Zap, submenu: [
        "Staffs",
        "Departments",
        "Attendance",
        "Leaves",
        "Holidays",
        "Payroll",
        "Create Salary Slip",
      ]
    },
    {
      label: "Email", symbol: Mail, submenu: [
        "Inbox",
        "Details",
        "Compose",
      ]
    },
    {
      label: "Support Center", symbol: Headphones, submenu: [
        "Tickets List",
        "Ticket Details",
        "New Ticket",
      ]
    },
    {
      label: "Promo", symbol: BadgePercent, submenu: [
        "Coupons",
        "Gift Cards",
        "Discounts",
      ]
    },
    {
      label: "More Apps", symbol: LayoutGrid, submenu: [
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
      ]
    },

  ]


  return (
    <>

      {appmen.map((item, i) => (
        <div key={i}>
          <div
            onClick={() => setIsOpen(isOpen === i ? null : i)}
            className="flex items-center justify-between py-2 rounded-lg cursor-pointer text-white"
          >
            <div className="flex items-center gap-3">
              <item.symbol size={18} />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
            <ChevronDown
              size={16}
              className={`transition-transform ${isOpen === i ? 'rotate-180' : ''}`}
            />
          </div>

          {isOpen === i && (
            <div className="flex flex-col pl-10 py-1">
              {item.submenu.map((sub, index) => (
                <span
                  key={index}
                  onClick={() => setActiveItem(sub)}
                  className={`text-sm py-2 cursor-pointer ${activeItem === sub
                      ? 'text-white font-semibold'
                      : 'text-gray-400 hover:text-gray-200'
                    }`}
                >
                  {sub}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </>

  )

}

export default AppsBoard