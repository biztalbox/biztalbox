import { StaticImageData } from "next/image";

export interface IBlogDT {
  featuredImage: string;
  id: number;
  slug?: string;
  img?: StaticImageData;
  images?: StaticImageData[];
  title: string;
  date: string;
  category: string;
  categories?: number[];
  author: string;
  videoId?: string;
  avatar?: StaticImageData;
  blogQuote?: boolean;
  video?: boolean;
  imgSlider?: boolean;
  blogQuoteTwo?: boolean;
  blogHeroSlider?: boolean;
  desc?: string;
}