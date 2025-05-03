"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

// Define the WordPress category type
interface WordPressCategory {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
}

interface CategoryListProps {
  className?: string;
}

export default function CategoryList({ className = "" }: CategoryListProps) {
  const [categories, setCategories] = useState<WordPressCategory[]>([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://blog.biztalbox.com/wp-json/wp/v2/categories/');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setCategoriesLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Add shimmer animation to document
  useEffect(() => {
    // Check if in browser environment
    if (typeof window === 'undefined') return;
    
    // Add shimmer animation to document if it doesn't exist
    if (!document.getElementById('skeleton-animations')) {
      const style = document.createElement('style');
      style.id = 'skeleton-animations';
      style.innerHTML = `
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `;
      document.head.appendChild(style);
    }
    
    return () => {
      // Clean up if needed
      if (typeof window === 'undefined') return;
      
      const style = document.getElementById('skeleton-animations');
      if (style) {
        style.remove();
      }
    };
  }, []);

  // Skeleton loading component for categories
  const CategorySkeleton = () => (
    <ul>
      {[1, 2, 3, 4, 5].map((item) => (
        <li key={item} className="mb-3">
          <div className="skeleton-item" style={{ 
            height: '22px', 
            width: `${70 + Math.random() * 30}%`, 
            backgroundColor: 'rgba(172, 171, 171, 0.05)', 
            borderRadius: '3px',
            boxShadow: '0 1px 2px rgba(119, 119, 119, 0.05)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)',
              animation: 'shimmer .5s infinite',
              transform: 'translateX(-100%)'
            }}></div>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={className}>
      {categoriesLoading ? (
        <CategorySkeleton />
      ) : (
        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              <Link href={`/blog-modern?category=${category.slug}`}>
                {category.name} ({category.count})
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
} 