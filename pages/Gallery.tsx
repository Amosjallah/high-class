import React, { useState, useRef, useEffect } from 'react';
import { Search, ZoomIn, ImageOff, Upload, Trash2, Plus, Settings, X } from 'lucide-react';

// Define interface for Gallery Image
interface GalleryImage {
  id: number;
  title: string;
  category: string;
  url: string;
  fallback: string;
  description: string;
}

const STORAGE_KEY = 'hcc_gallery_images';

const Gallery: React.FC = () => {
  // Initialize state from localStorage if available, otherwise empty
  const [images, setImages] = useState<GalleryImage[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Failed to load images from storage", e);
      return [];
    }
  });

  const [filter, setFilter] = useState('All');
  const [isAdmin, setIsAdmin] = useState(false);
  
  // Upload State
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Campus');
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const categories = ['All', ...new Set(images.map(img => img.category))];
  // Categories for the dropdown (unique from current images + static options)
  const formCategories = Array.from(new Set([...images.map(img => img.category), 'Campus', 'Academics', 'Sports', 'Arts', 'Boarding', 'Events']));

  const filteredImages = filter === 'All' 
    ? images 
    : images.filter(img => img.category === filter);

  // Save to local storage whenever images change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(images));
  }, [images]);

  // Helper to handle image errors by switching to fallback
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackUrl: string) => {
    const img = e.currentTarget;
    if (img.src !== fallbackUrl) {
      img.src = fallbackUrl;
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) {
      alert("Please select an image file.");
      return;
    }
    if (!title) {
      alert("Please enter a title.");
      return;
    }

    setIsUploading(true);

    // Use FileReader to convert image to Base64 for persistent storage
    const reader = new FileReader();
    
    reader.onloadend = () => {
      const base64String = reader.result as string;
      
      const newImage: GalleryImage = {
        id: Date.now(), // Use timestamp for unique ID
        title,
        category,
        url: base64String,
        fallback: base64String,
        description: description || "No description provided."
      };

      setImages(prev => [newImage, ...prev]);

      // Reset form
      setTitle('');
      setCategory('Campus');
      setDescription('');
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      setIsUploading(false);
    };

    reader.onerror = () => {
      alert("Failed to read file");
      setIsUploading(false);
    };

    // Read the file as a Data URL (Base64)
    reader.readAsDataURL(selectedFile);
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this image? This action cannot be undone.")) {
      setImages(prev => prev.filter(img => img.id !== id));
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
       {/* Header */}
       <div className="bg-school-light py-16 text-center border-b border-gray-200 relative">
        <h1 className="text-4xl font-bold text-school-dark mb-4">Campus Gallery</h1>
        <p className="text-gray-600 max-w-2xl mx-auto px-4 mb-6">
          Explore our world-class facilities, from modern laboratories to comfortable boarding houses.
        </p>
        
        {/* Admin Toggle */}
        <button 
          onClick={() => setIsAdmin(!isAdmin)}
          className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold transition-colors ${
            isAdmin 
            ? 'bg-red-100 text-red-700 hover:bg-red-200' 
            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
          }`}
        >
          {isAdmin ? <X className="h-4 w-4 mr-2" /> : <Settings className="h-4 w-4 mr-2" />}
          {isAdmin ? 'Close Admin Mode' : 'Manage Gallery'}
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Admin Upload Section */}
        {isAdmin && (
          <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-dashed border-school-blue mb-12 animate-fade-in-up">
            <h2 className="text-xl font-bold text-school-dark mb-4 flex items-center">
              <Upload className="h-5 w-5 mr-2 text-school-blue" /> Upload New Photo
            </h2>
            <form onSubmit={handleUpload} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Image</label>
                <div className="flex items-center justify-center w-full">
                  <label htmlFor="dropzone-file" className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 ${selectedFile ? 'border-school-blue bg-blue-50' : 'border-gray-300'}`}>
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className={`w-8 h-8 mb-2 ${selectedFile ? 'text-school-blue' : 'text-gray-400'}`} />
                      <p className="mb-2 text-sm text-gray-500">
                        {selectedFile ? <span className="font-bold text-school-blue">{selectedFile.name}</span> : <><span className="font-semibold">Click to upload</span> or drag and drop</>}
                      </p>
                      <p className="text-xs text-gray-500">
                        {selectedFile ? `${(selectedFile.size / 1024).toFixed(2)} KB` : "SVG, PNG, JPG or GIF"}
                      </p>
                    </div>
                    <input 
                      id="dropzone-file" 
                      type="file" 
                      className="hidden" 
                      accept="image/*"
                      onChange={handleFileChange}
                      ref={fileInputRef}
                    />
                  </label>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input 
                  type="text" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-school-blue focus:border-school-blue" 
                  placeholder="e.g. New Science Lab"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select 
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-school-blue focus:border-school-blue"
                >
                  {formCategories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-school-blue focus:border-school-blue"
                  placeholder="Short description of the image..."
                  rows={2}
                />
              </div>

              <div className="col-span-1 md:col-span-2 flex justify-end">
                <button 
                  type="submit" 
                  disabled={isUploading}
                  className={`text-white font-bold py-2 px-6 rounded-md transition-colors flex items-center ${isUploading ? 'bg-gray-400 cursor-not-allowed' : 'bg-school-blue hover:bg-school-dark'}`}
                >
                  <Plus className="h-5 w-5 mr-2" /> {isUploading ? 'Saving...' : 'Add to Gallery'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                filter === cat 
                  ? 'bg-school-blue text-white shadow-lg scale-105' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-school-blue border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image) => (
            <div key={image.id} className="group relative overflow-hidden rounded-xl shadow-lg bg-white aspect-[4/3]">
              <img 
                src={image.url} 
                alt={image.title}
                onError={(e) => handleImageError(e, image.fallback)}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-school-blue/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center z-10">
                <span className="text-school-gold text-xs font-bold tracking-wider uppercase mb-2">{image.category}</span>
                <h3 className="text-white font-bold text-xl mb-2">{image.title}</h3>
                <p className="text-gray-200 text-sm mb-4 line-clamp-2">{image.description}</p>
                <button className="bg-white text-school-blue p-3 rounded-full hover:bg-school-gold hover:text-white transition-colors pointer-events-none">
                  <ZoomIn className="h-5 w-5" />
                </button>
              </div>

              {/* Delete Button (Admin Only) */}
              {isAdmin && (
                <button 
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleDelete(image.id);
                  }}
                  className="absolute top-2 right-2 z-50 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 shadow-md transform transition-transform hover:scale-110 cursor-pointer"
                  title="Delete Image"
                  aria-label="Delete Image"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              )}
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <ImageOff className="h-12 w-12 mx-auto mb-4 opacity-20" />
            <p>No images found in this category. Use "Manage Gallery" to add new photos.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;