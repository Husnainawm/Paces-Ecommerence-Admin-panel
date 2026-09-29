# Paces – eCommerce Admin Panel

A responsive eCommerce admin dashboard built with **React**, **Vite** and **Tailwind CSS v4**. It is a front-end clone of the Paces Bootstrap admin template, rebuilt from scratch with modern React tooling.

**Live demo:** https://paces-ecommerence-admin-panel.vercel.app/#
**Repository:** https://github.com/Husnainawm/Paces-Ecommerence-Admin-panel

## Features

- Collapsible sidebar with dropdown menus
- Top navbar
- Dashboard overview cards
- Interactive charts: donut chart, weekly dumbbell chart, sales report chart
- Top products table
- Recent orders table
- Revenue by locations map card
- Responsive layout

## Tech Stack

| Tool | Purpose |
| --- | --- |
| [React](https://react.dev) | UI library |
| [Vite](https://vitejs.dev) | Build tool and dev server |
| [Tailwind CSS v4](https://tailwindcss.com) | Styling |
| [Recharts](https://recharts.org) | Charts |
| [Lucide React](https://lucide.dev) | Icons |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) 18 or later
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Husnainawm/Paces-Ecommerence-Admin-panel.git

# Go into the project folder
cd Paces-Ecommerence-Admin-panel

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will run at `http://localhost:5173`.

### Build for production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/     # Sidebar, navbar, cards, charts, tables
├── assets/         # Images and static files
├── App.jsx
└── main.jsx
```

_Adjust this to match your actual folders._

## Deployment

The project is deployed on [Vercel](https://vercel.com). Every push to the `main` branch triggers a new deployment automatically.

## Roadmap

- [ ] Connect to a real backend API
- [ ] Add authentication
- [ ] Add dark mode
- [ ] Add more pages (products, orders, customers)

## Acknowledgements

Design inspired by the Paces Bootstrap admin template. This project is a learning exercise and is not affiliated with the original template author.

## Author

**Husnain Ali**
GitHub: [@Husnainawm](https://github.com/Husnainawm)
