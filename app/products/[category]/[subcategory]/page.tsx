"use client"

import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import { ArrowLeft, Filter } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { useState } from "react"

// Sample product data - in a real app, this would come from an API
const sampleProducts = [
  {
    id: 1,
    image: "/elegant-brown-oxfords.png",
    price: "₹9,999.00",
    name: "SL 72 Rs Shoes",
    category: "Men originals",
    colors: ["brown", "black"],
    isNew: false,
  },
  {
    id: 2,
    image: "/modern-white-sneakers.png",
    price: "₹5,999.00",
    name: "Liverpool FC 25/26 Away Jersey",
    category: "Men Football",
    colors: ["white", "red"],
    isNew: true,
  },
  {
    id: 3,
    image: "/rugged-brown-hiking-boots.png",
    price: "₹8,599.00",
    name: "Liverpool FC 25/26 Away Authentic Jersey",
    category: "Men Football",
    colors: ["cream", "red"],
    isNew: true,
  },
  {
    id: 4,
    image: "/elegant-black-high-heels.png",
    price: "₹10,999.00",
    name: "Samba OG Shoes",
    category: "Men originals",
    colors: ["beige", "white", "gum"],
    isNew: true,
  },
  {
    id: 5,
    image: "/elegant-brown-oxfords.png",
    price: "₹7,999.00",
    name: "Gazelle Indoor Shoes",
    category: "Men originals",
    colors: ["navy", "white"],
    isNew: false,
  },
  {
    id: 6,
    image: "/modern-white-sneakers.png",
    price: "₹12,999.00",
    name: "Ultraboost 22 Shoes",
    category: "Men Running",
    colors: ["black", "white", "blue"],
    isNew: false,
  },
  {
    id: 7,
    image: "/rugged-brown-hiking-boots.png",
    price: "₹6,499.00",
    name: "Stan Smith Shoes",
    category: "Men originals",
    colors: ["white", "green"],
    isNew: false,
  },
  {
    id: 8,
    image: "/elegant-black-high-heels.png",
    price: "₹9,499.00",
    name: "Forum Low Shoes",
    category: "Men originals",
    colors: ["white", "black"],
    isNew: true,
  },
]

const subcategoryFilters = {
  "new-arrivals": ["All Men's", "Shoes", "Clothing", "Accessories"],
  casual: ["All Casual", "Sneakers", "Loafers", "Canvas"],
  formal: ["All Formal", "Oxford", "Derby", "Monk Strap"],
  sports: ["All Sports", "Running", "Training", "Basketball"],
}

export default function ProductPage() {
  const params = useParams()
  const router = useRouter()
  const [activeFilter, setActiveFilter] = useState(0)

  const category = params.category as string
  const subcategory = params.subcategory as string

  // Generate breadcrumb
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: category.charAt(0).toUpperCase() + category.slice(1), href: `/${category}` },
    { label: subcategory.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase()), href: null },
  ]

  // Generate page title
  const pageTitle = `${subcategory.replace("-", " ").toUpperCase()} FOR ${category.toUpperCase()}`

  // Get filters for this subcategory
  const filters = subcategoryFilters[subcategory as keyof typeof subcategoryFilters] || ["All Items"]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content - Added top padding for fixed header */}
      <main className="pt-[88px] sm:pt-[104px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 mb-6 text-sm">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              BACK
            </button>
            <div className="flex items-center gap-2 text-gray-600">
              {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center gap-2">
                  {index > 0 && <span>/</span>}
                  {crumb.href ? (
                    <button onClick={() => router.push(crumb.href!)} className="hover:text-black transition-colors">
                      {crumb.label}
                    </button>
                  ) : (
                    <span className="text-black font-medium">{crumb.label}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Page Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-2">{pageTitle}</h1>
              <span className="text-gray-500 text-sm">[{sampleProducts.length}]</span>
            </div>

            {/* Filter & Sort Button */}
            <Button
              variant="outline"
              className="flex items-center gap-2 px-6 py-2 border-black text-black hover:bg-black hover:text-white transition-colors w-fit bg-transparent"
            >
              <Filter className="w-4 h-4" />
              FILTER & SORT
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-0 mb-8 border-b border-gray-200">
            {filters.map((filter, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(index)}
                className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeFilter === index
                    ? "border-black text-black"
                    : "border-transparent text-gray-600 hover:text-black"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {sampleProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                {/* Product Image Container */}
                <div className="relative bg-gray-100 overflow-hidden mb-4 aspect-[4/5] transition-all duration-300 hover:shadow-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* New Badge */}
                  {product.isNew && (
                    <div className="absolute top-3 left-3 bg-white px-2 py-1 text-xs font-medium">New</div>
                  )}
                </div>

                {/* Product Info */}
                <div className="space-y-1">
                  <p className="font-bold text-sm">{product.price}</p>
                  <h3 className="font-medium text-sm leading-tight">{product.name}</h3>
                  <p className="text-gray-500 text-xs">{product.category}</p>

                  {/* Color Variants */}
                  {product.colors && product.colors.length > 1 && (
                    <div className="flex items-center gap-1 pt-1">
                      {product.colors.slice(0, 3).map((color, colorIndex) => (
                        <div
                          key={colorIndex}
                          className={`w-3 h-3 rounded-full border border-gray-300 ${
                            color === "white"
                              ? "bg-white"
                              : color === "black"
                                ? "bg-black"
                                : color === "brown"
                                  ? "bg-amber-800"
                                  : color === "red"
                                    ? "bg-red-500"
                                    : color === "blue"
                                      ? "bg-blue-500"
                                      : color === "green"
                                        ? "bg-green-500"
                                        : color === "navy"
                                          ? "bg-blue-900"
                                          : color === "cream"
                                            ? "bg-amber-100"
                                            : color === "beige"
                                              ? "bg-amber-200"
                                              : color === "gum"
                                                ? "bg-amber-600"
                                                : "bg-gray-400"
                          }`}
                        />
                      ))}
                      {product.colors.length > 3 && (
                        <span className="text-xs text-gray-500 ml-1">+{product.colors.length - 3}</span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="px-8 py-3 border-black text-black hover:bg-black hover:text-white transition-colors bg-transparent"
            >
              Load More Products
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
