import React, { useState } from "react";
import BlogDetailsCommentsApi from "./blog-details-comments-api";

export default function BlogCommentsExample() {
  const [postId, setPostId] = useState<number | undefined>(undefined);
  const [showComments, setShowComments] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowComments(true);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card p-4 mb-4">
            <h2 className="mb-4">WordPress Comments Example</h2>
            <p className="mb-4">
              This example demonstrates how to use the WordPress comments component.
              You can fetch comments for a specific post by providing a post ID, or
              fetch all comments by leaving the field empty.
            </p>
            
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="mb-3">
                <label htmlFor="postId" className="form-label">Post ID (optional)</label>
                <input
                  type="number"
                  className="form-control"
                  id="postId"
                  value={postId || ""}
                  onChange={(e) => setPostId(e.target.value ? parseInt(e.target.value) : undefined)}
                  placeholder="Enter WordPress post ID"
                />
                <div className="form-text">
                  Leave empty to fetch all comments
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Load Comments
              </button>
            </form>
          </div>

          {showComments && (
            <div className="card p-4">
              <h3 className="mb-4">Comments</h3>
              <BlogDetailsCommentsApi postId={postId} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 