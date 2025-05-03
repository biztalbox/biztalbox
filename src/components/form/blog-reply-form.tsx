"use client";
import React, { useState, FormEvent } from "react";
import { usePathname, } from "next/navigation";
import { submitWordPressComment } from "@/utils/wordpress-comment";

interface BlogReplyFormProps {
  postId?: number;
}

export default function BlogReplyForm({ postId }: BlogReplyFormProps) {
  const pathname = usePathname();
  const [formData, setFormData] = useState({
    comment: "",
    author: "",
    email: "",
    url: "",
    saveInfo: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Get post ID from URL if not provided as prop
  const getPostId = () => {
    if (postId) return postId;
    
    // Try to get post ID from URL
    const pathSegments = pathname.split('/');
    const slug = pathSegments[pathSegments.length - 1];
    
    // If we have a slug, we'll need to fetch the post ID
    if (slug) {
      return slug;
    }
    
    return null;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: checkbox.checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.comment.trim()) {
      setError("Please enter a comment");
      return;
    }
    
    if (!formData.author.trim()) {
      setError("Please enter your name");
      return;
    }
    
    if (!formData.email.trim()) {
      setError("Please enter your email");
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      const postIdOrSlug = getPostId();
      
      if (!postIdOrSlug) {
        throw new Error("Could not determine post ID");
      }
      
      // Submit comment using our new utility function
      await submitWordPressComment({
        comment: formData.comment,
        author: formData.author,
        email: formData.email,
        url: formData.url,
        postId: postIdOrSlug
      });
      
      // Save user info to localStorage if checkbox is checked
      if (formData.saveInfo && typeof window !== 'undefined') {
        localStorage.setItem('commentAuthor', formData.author);
        localStorage.setItem('commentEmail', formData.email);
        localStorage.setItem('commentUrl', formData.url);
      }
      
      // Reset form and show success message
      setFormData({
        comment: "",
        author: "",
        email: "",
        url: "",
        saveInfo: false
      });
      
      setSuccess(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
      
    } catch (err) {
      console.error('Error posting comment:', err);
      setError(err instanceof Error ? err.message : 'Failed to post comment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Load saved user info on component mount
  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const savedAuthor = localStorage.getItem('commentAuthor');
    const savedEmail = localStorage.getItem('commentEmail');
    const savedUrl = localStorage.getItem('commentUrl');
    
    if (savedAuthor || savedEmail || savedUrl) {
      setFormData(prev => ({
        ...prev,
        author: savedAuthor || "",
        email: savedEmail || "",
        url: savedUrl || "",
        saveInfo: true
      }));
    }
  }, []);

  return (
    <form className="tp-postbox-details-form-wrapper" onSubmit={handleSubmit}>
      {error && (
        <div className="alert alert-danger mb-4" role="alert">
          {error}
        </div>
      )}
      
      {success && (
        <div className="alert alert-success mb-4" role="alert">
          Your comment has been submitted successfully and is awaiting moderation.
        </div>
      )}
      
      <div className="tp-postbox-details-form-inner">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-postbox-details-input-box">
              <div className="tp-postbox-details-input">
                <textarea
                  id="msg"
                  name="comment"
                  placeholder="Write your message here..."
                  value={formData.comment}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="tp-postbox-details-input-box">
              <div className="tp-postbox-details-input">
                <input 
                  type="text" 
                  name="author"
                  placeholder="Your Name *" 
                  value={formData.author}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="tp-postbox-details-input-box">
              <div className="tp-postbox-details-input">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email *" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="tp-postbox-details-input-box">
              <div className="tp-postbox-details-input">
                <input 
                  type="url" 
                  name="url"
                  placeholder="Website (optional)" 
                  value={formData.url}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-postbox-details-suggetions mb-20">
        <div className="tp-postbox-details-remeber d-flex align-items-start">
          <input 
            id="remeber" 
            type="checkbox" 
            name="saveInfo"
            checked={formData.saveInfo}
            onChange={handleChange}
          />
          <label htmlFor="remeber">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>
      </div>
      <div className="tp-postbox-details-input-box">
        <button 
          className="tp-btn-border-lg" 
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Post Comment'}
        </button>
      </div>
    </form>
  );
}
