function searchContent() {
            // Get the search query from the input field
            var searchQuery = document.getElementById("searchInput").value.toLowerCase();
            
            // Define URLs or paths to your content pages
            var contentUrls = {
                "about us": "aboutus.html",
                "admissions": "admision.html",
                "courses": "courses.html",
                "contact": "form.html"
                // Add more content keywords and URLs as needed
            }
            
            // Check if the search query matches any content keyword
            if (contentUrls.hasOwnProperty(searchQuery)) {
                // Redirect to the corresponding content page
                window.location.href = contentUrls[searchQuery];
            } else {
                // Handle case when no match is found (optional)
                alert("No matching content found.");
            }
}