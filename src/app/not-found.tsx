import { Metadata } from 'next';
import ErrorPage from '@/components/ErrorPage';
 
export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <ErrorPage/>
  )
}