import { ReactNode } from 'react';
import GlobalSchema from './GlobalSchema';
import { SchemaProps } from '@/types/schema-types';

interface SchemaProviderProps {
  children: ReactNode;
  schemaProps: SchemaProps;
  currentUrl?: string;
  title?: string;
  description?: string;
}

/**
 * SchemaProvider - A convenient wrapper component that provides schema data to pages
 * Use this component to wrap your page content and automatically inject structured data
 */
export default function SchemaProvider({ 
  children, 
  schemaProps, 
  currentUrl, 
  title, 
  description 
}: SchemaProviderProps) {
  return (
    <>
      <GlobalSchema 
        {...schemaProps}
        currentUrl={currentUrl}
        title={title}
        description={description}
      />
      {children}
    </>
  );
}