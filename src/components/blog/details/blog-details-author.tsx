import React from "react";
import Image from "next/image";
import avatar from '@/assets/img/inner-blog/blog-details/avatar/avatar-1.jpg'

interface BlogDetailsAuthorProps {
  author: string;
}

export default function BlogDetailsAuthor({ author }: BlogDetailsAuthorProps) {
  return (
    <div className="blog-details-author d-flex mb-60">
      <div className="blog-details-author-img">
        <Image
          src={avatar}
          alt={author}
        />
      </div>
      <div className="blog-details-author-content-wrap">
        <div className="blog-details-author-social text-end">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <div className="blog-details-author-content">
          <h4 className="blog-details-author-title">{author}</h4>
          <p>
            Author of this blog post.
          </p>
        </div>
      </div>
    </div>
  );
}
