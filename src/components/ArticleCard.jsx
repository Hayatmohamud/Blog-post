import React from "react";
import { FiClock, FiHeart, FiMessageSquare } from "react-icons/fi";
import { Link } from "react-router";

const ArticleCard = ({ article }) => {
  const { id, title, content, author, tags, created_at, featured_image } =
    article;

  // 1. SAXIDDA TAGS: Haddii xogtu string tahay, u beddel Array dhab ah
  let safeTags = [];
  try {
    if (typeof tags === "string") {
      safeTags = JSON.parse(tags);
    } else {
      safeTags = Array.isArray(tags) ? tags : [];
    }
  } catch (e) {
    safeTags = [];
  }

  // 2. FORMAT DATE: Taariikhda u beddel mid la akhrin karo
  const formatDate = (dateString) => {
    if (!dateString) return "No date";
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return "Invalid date";
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (error) {
      return "Date error";
    }
  };

  // 3. EXCERPT: Qoraalka ka saar HTML tags-ka si uusan u kharribin naqshadda
  const createSafeExcerpt = (htmlContent) => {
    if (!htmlContent) return "";
    const textContent = htmlContent.replace(/<[^>]*>?/gm, "");
    return (
      textContent.substring(0, 120) + (textContent.length > 120 ? "..." : "")
    );
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
      {/* Featured Image */}
      {featured_image && (
        <Link
          to={`/article/${id}`}
          className="relative h-48 w-full overflow-hidden block"
        >
          <img
            src={featured_image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </Link>
      )}

      <div className="p-6 flex-1 flex flex-col">
        {/* Tags Section - Isticmaal safeTags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {safeTags.map((tag, index) => (
            <span
              key={`${id}-tag-${index}`}
              className="inline-block bg-orange-50 text-orange-600 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <Link to={`/article/${id}`}>
          <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-orange-600 transition-colors duration-200 line-clamp-2 leading-tight">
            {title}
          </h2>
        </Link>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
          {createSafeExcerpt(content)}
        </p>

        {/* Author Info */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-3">
            <img
              src={author?.avatar_url || "https://via.placeholder.com/40"}
              alt={author?.username}
              className="h-8 w-8 rounded-full object-cover"
            />
            <div>
              <div className="text-sm font-bold text-gray-900 leading-none">
                {author?.username || "Anonymous"}
              </div>
              <div className="flex items-center text-[10px] text-gray-500 mt-1">
                <FiClock className="mr-1 w-3 h-3" />
                <span>{formatDate(created_at)}</span>
              </div>
            </div>
          </div>

          {/* Stats (Static for now) */}
          <div className="flex items-center space-x-3 text-gray-400">
            <div className="flex items-center text-xs">
              <FiHeart className="mr-1" /> 0
            </div>
            <div className="flex items-center text-xs">
              <FiMessageSquare className="mr-1" /> 0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
