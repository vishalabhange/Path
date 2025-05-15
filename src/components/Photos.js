import React, { useState } from "react";
import "./Photos.css";

const photoData = [
  { category: "Events", url: "https://www.wtcmanila.com.ph/wp-content/uploads/2022/08/rear-view-of-audience-in-the-conference-hall-or-se-2021-08-30-06-51-57-utc-1.jpg" },
  { category: "Office", url: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Blade3_Placeholder_8?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=786&hei=443&qlt=75&fit=constrain" },
  { category: "Training", url: "https://cdn.sanity.io/images/uqxwe2qj/production/4ee9fb18bdc214aefebf7859557a6611125c3841-760x426.png?q=80&auto=format&fit=clip&w=760" },
  { category: "Celebrations", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF8WpX6rS2kBR4l-B-7QDwDQCchzKDqIZQ_g&s" },
  { category: "Projects", url: "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg" },
  { category: "Events", url: "https://www.wtcmanila.com.ph/wp-content/uploads/2022/08/rear-view-of-audience-in-the-conference-hall-or-se-2021-08-30-06-51-57-utc-1.jpg" },
  { category: "Office", url: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Blade3_Placeholder_8?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=786&hei=443&qlt=75&fit=constrain" },
  { category: "Training", url: "https://cdn.sanity.io/images/uqxwe2qj/production/4ee9fb18bdc214aefebf7859557a6611125c3841-760x426.png?q=80&auto=format&fit=clip&w=760" },
  { category: "Celebrations", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF8WpX6rS2kBR4l-B-7QDwDQCchzKDqIZQ_g&s" },
  { category: "Projects", url: "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg" },
  // Add more images as needed...
];

const categories = ["All", "Events", "Office", "Training", "Celebrations", "Projects"];

function Photos() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPhotos =
    selectedCategory === "All"
      ? photoData
      : photoData.filter((photo) => photo.category === selectedCategory);

  return (
    <div className="photos-container">
      <h2>Our Company Gallery</h2>
      <div className="category-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="photo-grid">
        {filteredPhotos.map((photo, index) => (
          <div key={index} className="photo-card">
            <img src={photo.url} alt={photo.category} />
            <span>{photo.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Photos;
