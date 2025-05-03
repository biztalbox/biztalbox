'use client'
import { useEffect, useRef, useState } from "react";
import $ from "jquery";


const useSticky = () => {
  const [sticky, setSticky] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  const stickyHeader = (): void => {
    if (typeof window === 'undefined') return;
    
    if (window.scrollY > 200) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };


  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const setHeaderHeight = headerRef.current?.offsetHeight;

    if (setHeaderHeight) {
      const headerElements = document.querySelectorAll<HTMLDivElement>('.tp-header-height');
      headerElements.forEach(element => {
        console.log('setHeaderHeight', setHeaderHeight,element);
        element.style.height = `${setHeaderHeight}px`;
      });
    }
  }, []);

  function headerFullWidth () {
    if (typeof window === 'undefined') return;
    
    const menuElements = document.querySelectorAll(".tp-menu-fullwidth");
    menuElements.forEach((element: Element) => {
      const previousDiv = element.parentElement?.parentElement;
      if (previousDiv) {
        previousDiv.classList.add("has-homemenu");
      }
    });
  };

  function adjustMenuBackground() {
    if (typeof window === 'undefined') return;
    
    if ($('.tp-header-3-area').length > 0) {
      const menuBox = $('.tp-header-3-menu-box');
      const menuBoxWidth = menuBox.width()!;
      const menuBoxHeight = menuBox.height()!;
      $('.menu-bg').css({
        'width': menuBoxWidth + 46,
        'height': menuBoxHeight,
        'left': menuBox.offset()!.left
      })
    }
  }
  


  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    window.addEventListener("scroll", stickyHeader);

    return (): void => {
      if (typeof window === 'undefined') return;
      window.removeEventListener("scroll", stickyHeader);
    };
  }, []);

  return {
    sticky,
    headerRef,
    headerFullWidth,
    adjustMenuBackground,
  };
};

export default useSticky;
