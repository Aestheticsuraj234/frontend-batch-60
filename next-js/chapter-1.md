# Next.js 15 Complete Guide 📚

## Table of Contents
1. [What is Next.js?](#what-is-nextjs)
2. [Why Next.js over React?](#why-nextjs-over-react)
3. [Key Features of Next.js](#key-features-of-nextjs)
4. [Hello World in Next.js](#hello-world-in-nextjs)
5. [Folder Structure](#folder-structure)
6. [React Server Components & Client Components](#react-server-components--client-components)
7. [Routing in Next.js](#routing-in-nextjs)
8. [Routing Conventions](#routing-conventions)

---

## What is Next.js?

Next.js is a **React-based web framework** that provides a structured approach to building full-stack web applications. It extends React with additional features and optimizations for production-ready applications.

> 💡 **Key Point**: Next.js is built on top of React and provides additional functionality like server-side rendering, routing, and optimization out of the box.

### Core Concepts
- **Full-stack Framework**: Both frontend and backend capabilities
- **React-based**: Uses React as the UI library
- **Production-ready**: Built-in optimizations and best practices
- **Developer Experience**: Great tooling and development experience

---

## Why Next.js over React?

| Feature | React | Next.js |
|---------|-------|---------|
| **Routing** | Manual setup (React Router) | Built-in file-based routing |
| **SSR/SSG** | Manual configuration | Built-in support |
| **Performance** | Manual optimization | Automatic optimizations |
| **Bundle Splitting** | Manual setup | Automatic code splitting |
| **SEO** | Limited (CSR only) | Excellent (SSR/SSG) |
| **API Routes** | Separate backend needed | Built-in API routes |

### Benefits of Next.js:
1. **Zero Configuration**: Works out of the box
2. **Automatic Code Splitting**: Better performance
3. **SEO Friendly**: Server-side rendering support
4. **Built-in CSS Support**: CSS Modules, Sass, CSS-in-JS
5. **API Routes**: Full-stack development in one framework
6. **Image Optimization**: Automatic image optimization
7. **TypeScript Support**: Built-in TypeScript support

---

## Key Features of Next.js

### 🚀 **Core Features**

#### 1. **App Router (App Directory)**
- New routing system introduced in Next.js 13+
- Built on React Server Components
- Improved performance and developer experience

#### 2. **Server Components & Client Components**
- Server Components render on the server
- Client Components render on the client
- Automatic optimization based on component type

#### 3. **Multiple Rendering Methods**
- **SSG** (Static Site Generation)
- **SSR** (Server-Side Rendering)
- **ISR** (Incremental Static Regeneration)
- **CSR** (Client-Side Rendering)

#### 4. **Built-in Optimizations**
- Automatic image optimization
- Font optimization
- Script optimization
- Bundle optimization

#### 5. **Developer Experience**
- Hot reloading
- Error overlay
- Built-in ESLint
- TypeScript support

---

## Hello World in Next.js

### Installation & Setup

```bash
# Create a new Next.js app
npx create-next-app@latest my-nextjs-app

# Navigate to the project
cd my-nextjs-app

# Start the development server
npm run dev
```

### Project Structure (Default)
```
my-nextjs-app/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── next.config.js
├── package.json
└── tsconfig.json
```

### Basic Hello World Example

**app/page.tsx**
```tsx
export default function Home() {
  return (
    <div>
      <h1>Hello, Next.js 15! 👋</h1>
      <p>Welcome to your first Next.js application.</p>
    </div>
  )
}
```

**app/layout.tsx**
```tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hello Next.js',
  description: 'My first Next.js application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

---

## Folder Structure

### 📁 **App Directory Structure (Next.js 13+)**

```
app/
├── globals.css          # Global styles
├── layout.tsx          # Root layout
├── page.tsx            # Home page
├── loading.tsx         # Loading UI
├── error.tsx           # Error UI
├── not-found.tsx       # 404 page
├── about/
│   └── page.tsx        # /about route
├── blog/
│   ├── page.tsx        # /blog route
│   ├── [slug]/
│   │   └── page.tsx    # /blog/[slug] route
│   └── loading.tsx     # Loading for blog
├── api/
│   ├── users/
│   │   └── route.ts    # API route
│   └── auth/
│       └── route.ts    # API route
└── components/         # Reusable components
    ├── Header.tsx
    └── Footer.tsx
```

### 📂 **Key Directories Explained**

#### **app/** (App Router)
- Main directory for the App Router
- Contains pages, layouts, and special files

#### **public/**
- Static assets (images, icons, etc.)
- Served directly from the root URL

#### **components/** (Optional)
- Reusable React components
- Can be placed anywhere in the project

#### **lib/** (Optional)
- Utility functions and configurations
- Database connections, helpers, etc.

### 🔧 **Configuration Files**

```
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind CSS config
├── tsconfig.json       # TypeScript config
├── package.json        # Dependencies
└── .env.local          # Environment variables
```

---

## React Server Components & Client Components

### 🖥️ **Server Components (Default)**

Server Components render on the server and send HTML to the client.

**Benefits:**
- Better performance
- Smaller bundle sizes
- Direct database access
- Better SEO
- Server-side data fetching

**Example:**
```tsx
// app/products/page.tsx (Server Component)
async function getProducts() {
  const res = await fetch('https://api.example.com/products')
  return res.json()
}

export default async function ProductsPage() {
  const products = await getProducts()
  
  return (
    <div>
      <h1>Products</h1>
      {products.map((product: any) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  )
}
```

### 🖱️ **Client Components**

Client Components render on the client and can use browser APIs and React hooks.

**When to use:**
- Interactive elements
- Event handlers
- Browser APIs
- React hooks (useState, useEffect)
- Context providers

**Example:**
```tsx
'use client' // This directive makes it a Client Component

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}
```

### 🔄 **Composition Pattern**

You can compose Server and Client Components together:

```tsx
// app/page.tsx (Server Component)
import ClientCounter from './components/ClientCounter'

async function getData() {
  const res = await fetch('https://api.example.com/data')
  return res.json()
}

export default async function Home() {
  const data = await getData()

  return (
    <div>
      <h1>Server Data: {data.title}</h1>
      <ClientCounter />
    </div>
  )
}
```

---

## Routing in Next.js

### 🛣️ **App Router Overview**

Next.js uses **file-based routing** in the `app` directory. The folder structure directly maps to URL paths.

### **Basic Routing Examples**

| File Path | URL | Description |
|-----------|-----|-------------|
| `app/page.tsx` | `/` | Home page |
| `app/about/page.tsx` | `/about` | About page |
| `app/blog/page.tsx` | `/blog` | Blog page |
| `app/products/[id]/page.tsx` | `/products/123` | Dynamic route |

---

## Routing Conventions

### 1. 📁 **File-Based Routing**

Routes are defined by the folder structure in the `app` directory.

```tsx
// app/about/page.tsx
export default function About() {
  return <h1>About Page</h1>
}

// app/contact/page.tsx  
export default function Contact() {
  return <h1>Contact Page</h1>
}
```

### 2. 🪆 **Nested Routing**

Create nested routes using nested folders.

```
app/
├── blog/
│   ├── page.tsx          # /blog
│   ├── categories/
│   │   └── page.tsx      # /blog/categories
│   └── authors/
│       ├── page.tsx      # /blog/authors
│       └── [id]/
│           └── page.tsx  # /blog/authors/[id]
```

**Example:**
```tsx
// app/blog/categories/page.tsx
export default function BlogCategories() {
  return (
    <div>
      <h1>Blog Categories</h1>
      <ul>
        <li>Technology</li>
        <li>Design</li>
        <li>Business</li>
      </ul>
    </div>
  )
}
```

### 3. 🎯 **Dynamic Routing**

Use square brackets `[param]` for dynamic route segments.

```tsx
// app/products/[id]/page.tsx
interface Props {
  params: { id: string }
}

export default function Product({ params }: Props) {
  return (
    <div>
      <h1>Product {params.id}</h1>
      <p>Product details for ID: {params.id}</p>
    </div>
  )
}

// app/blog/[category]/[slug]/page.tsx
interface Props {
  params: { category: string; slug: string }
}

export default function BlogPost({ params }: Props) {
  return (
    <div>
      <h1>Category: {params.category}</h1>
      <h2>Post: {params.slug}</h2>
    </div>
  )
}
```

### 4. 🎣 **Catch-All Routing**

Use `[...param]` to catch all route segments.

```tsx
// app/docs/[...slug]/page.tsx
interface Props {
  params: { slug: string[] }
}

export default function Docs({ params }: Props) {
  return (
    <div>
      <h1>Documentation</h1>
      <p>Path segments: {params.slug.join(' / ')}</p>
    </div>
  )
}

// URLs matched:
// /docs/getting-started → slug: ['getting-started']
// /docs/api/authentication → slug: ['api', 'authentication']
// /docs/guides/deployment/vercel → slug: ['guides', 'deployment', 'vercel']
```

### 5. ❓ **Optional Catch-All Routing**

Use `[[...param]]` for optional catch-all routes.

```tsx
// app/shop/[[...category]]/page.tsx
interface Props {
  params: { category?: string[] }
}

export default function Shop({ params }: Props) {
  return (
    <div>
      <h1>Shop</h1>
      {params.category ? (
        <p>Category: {params.category.join(' / ')}</p>
      ) : (
        <p>All Products</p>
      )}
    </div>
  )
}

// URLs matched:
// /shop → category: undefined
// /shop/electronics → category: ['electronics']
// /shop/electronics/phones → category: ['electronics', 'phones']
```

### 6. 🚫 **Not Found Page**

Create a custom 404 page with `not-found.tsx`.

```tsx
// app/not-found.tsx
import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Could not find the requested resource.</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}

// app/products/[id]/not-found.tsx (Route-specific)
export default function ProductNotFound() {
  return (
    <div>
      <h1>Product Not Found</h1>
      <p>The product you're looking for doesn't exist.</p>
    </div>
  )
}
```

### 7. 📦 **File Colocation**

You can colocate components, styles, and tests with your routes.

```
app/
├── dashboard/
│   ├── page.tsx
│   ├── components/
│   │   ├── Chart.tsx
│   │   └── Stats.tsx
│   ├── styles/
│   │   └── dashboard.css
│   └── __tests__/
│       └── dashboard.test.tsx
```

**Only `page.tsx`, `layout.tsx`, and other special files are routable.**

### 8. 🔒 **Private Folders**

Use underscore prefix `_folder` to create private folders.

```
app/
├── _components/     # Private folder (not routable)
│   ├── Header.tsx
│   └── Footer.tsx
├── _utils/         # Private folder
│   └── helpers.ts
└── dashboard/
    └── page.tsx    # Can import from private folders
```

```tsx
// app/dashboard/page.tsx
import Header from '../_components/Header'
import { formatDate } from '../_utils/helpers'

export default function Dashboard() {
  return (
    <div>
      <Header />
      <h1>Dashboard</h1>
      <p>Today: {formatDate(new Date())}</p>
    </div>
  )
}
```

### 9. 📁 **Route Groups**

Use parentheses `(folder)` to group routes without affecting URL structure.

```
app/
├── (marketing)/
│   ├── about/
│   │   └── page.tsx     # /about
│   └── contact/
│       └── page.tsx     # /contact
├── (shop)/
│   ├── products/
│   │   └── page.tsx     # /products
│   └── cart/
│       └── page.tsx     # /cart
└── layout.tsx
```

**Each route group can have its own layout:**

```tsx
// app/(marketing)/layout.tsx
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <nav>Marketing Navigation</nav>
      {children}
      <footer>Marketing Footer</footer>
    </div>
  )
}

// app/(shop)/layout.tsx
export default function ShopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <nav>Shop Navigation</nav>
      {children}
      <footer>Shop Footer</footer>
    </div>
  )
}
```

### 10. 🏗️ **Layout Files & Nested Layouts**

#### **Root Layout (Required)**
```tsx
// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>Global Header</header>
        {children}
        <footer>Global Footer</footer>
      </body>
    </html>
  )
}
```

#### **Nested Layouts**
```tsx
// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <nav>
        <a href="/dashboard">Overview</a>
        <a href="/dashboard/analytics">Analytics</a>
        <a href="/dashboard/settings">Settings</a>
      </nav>
      <main>{children}</main>
    </div>
  )
}

// app/dashboard/analytics/layout.tsx
export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div>Analytics Sidebar</div>
      <div>{children}</div>
    </div>
  )
}
```

#### **Layout Hierarchy**
```
app/layout.tsx                 (Root Layout)
├── app/dashboard/layout.tsx   (Dashboard Layout)
│   ├── app/dashboard/page.tsx
│   └── app/dashboard/analytics/layout.tsx  (Analytics Layout)
│       └── app/dashboard/analytics/page.tsx
```

**Final rendered structure:**
```tsx
<RootLayout>
  <DashboardLayout>
    <AnalyticsLayout>
      <AnalyticsPage />
    </AnalyticsLayout>
  </DashboardLayout>
</RootLayout>
```

---

## 🚀 **Quick Commands Reference**

```bash
# Create new Next.js app
npx create-next-app@latest my-app

# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

---

## 📝 **Best Practices**

1. **Use Server Components by default** - Only use Client Components when necessary
2. **Keep layouts simple** - Avoid complex logic in layout files
3. **Use TypeScript** - Better development experience and fewer bugs
4. **Optimize images** - Use Next.js Image component
5. **Handle loading states** - Use loading.tsx files for better UX
6. **Error boundaries** - Use error.tsx files for error handling
7. **SEO optimization** - Use metadata API for better SEO

