import React from 'react';
import { useState } from 'react';
import { FiInfo, FiSave, FiTag, FiX } from "react-icons/fi";
import toast from "react-hot-toast";

const ArticleEditor = () => {

// const { id } = useParams();
// console.log("id from url", id);

const isEditMode = false;

  // State for article data
  const [title, setTitle] = useState("");
  const [content, setContent] = useState(""); // Always initialize as an empty string
  const [selectedTags, setSelectedTags] = useState([]);
  const [isSaving, setIsSaving] = useState(false);
  const [isTagsMenuOpen, setIsTagsMenuOpen] = useState(false);
  const [featuredImageUrl, setFeaturedImageUrl] = useState("");
  const [isPublished, setIsPublished] = useState(false);
  const [error, setError] = useState(null);

  // State for image upload
  const [selectedImage, setSelectedImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [imagePath, setImagePath] = useState("");

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* header buttons */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">
          {isEditMode ? "Edit Article" : "Create New Article"}
        </h1>

        {/* buttons */}

        <div className="flex space-x-4">
          <button className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
            <FiX className="inline mr-2" />
            Cancel
          </button>

          <button className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
            <FiSave className="inline mr-2" />
            {isEditMode ? "Update Draft" : " Save as Draft"}
          </button>

          <button className="px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
            <FiSave className="inline mr-2" />
            {isEditMode ? "Update and publish" : "Save and Publish"}
          </button>
        </div>
      </div>

      {/* Title input */}
      <div className="mb-6">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
          placeholder="Enter article title"
        />
      </div>
       
       {/* Featured Image Upload */}
            <div className="mb-6">

                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Featured Image
                    <button
                        type="button"
                        onClick={() => toast('Maximum image size allowed is 5MB')}
                        className="ml-2 text-xs text-gray-500 hover:text-gray-700"
                    >
                        <FiInfo className="inline-block" />
                    </button>
                </label>
                </div>
       
    </div>
  );
  
};

export default ArticleEditor;
