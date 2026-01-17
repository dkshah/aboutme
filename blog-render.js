// Blog rendering JavaScript for blogs.html
// This file contains the rendering logic for the blog page
// Blog data is loaded from blog-data.js

// Render category filters
function renderCategoryFilters() {
    const container = document.getElementById("category-filters");
    const categories = [...new Set(blogs.map(blog => blog.category))];

    let html = `<button class="category-filter-btn active" data-category="all">
        <i class="fas fa-th"></i> All Articles
    </button>`;

    categories.forEach(category => {
        const icon = getCategoryIcon(category);
        html += `<button class="category-filter-btn" data-category="${category}">
            <i class="${icon}"></i> ${category}
        </button>`;
    });

    container.innerHTML = html;

    // Add click handlers
    document.querySelectorAll('.category-filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const button = e.currentTarget;
            const category = button.getAttribute('data-category');

            // Update active state
            document.querySelectorAll('.category-filter-btn').forEach(b => b.classList.remove('active'));
            button.classList.add('active');

            if (category === 'all') {
                renderBlogList();
            } else {
                renderBlogList(category);
            }
        });
    });
}

// Get icon for category
function getCategoryIcon(category) {
    const iconMap = {
        "React & Authentication": "fab fa-react",
        "Azure & Architecture": "fas fa-cloud",
        "Frontend Development": "fas fa-code",
        "Data Engineering": "fas fa-database",
        "Backend Development": "fas fa-server",
        "DevOps": "fas fa-cogs",
        "AWS & Cloud": "fab fa-aws",
        "Generative AI": "fas fa-robot"
    };
    return iconMap[category] || "fas fa-folder";
}

// Render blog list or single article
function renderBlogList(filterCategory = null) {
    const container = document.getElementById("blog-article");
    const filteredBlogs = filterCategory ? blogs.filter(blog => blog.category === filterCategory) : blogs;

    if (filteredBlogs.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-inbox"></i>
                <h3>No articles found</h3>
                <p>Try selecting a different category</p>
            </div>
        `;
        return;
    }

    let html = '<div class="blog-grid">';
    filteredBlogs.forEach((blog, index) => {
        const blogIndex = blogs.indexOf(blog);
        html += `
            <article class="blog-card" onclick="renderBlogArticle(${blogIndex})">
                <div class="blog-card-header">
                    <h3>${blog.title}</h3>
                    <div class="blog-meta">
                        <span class="blog-date"><i class="fas fa-calendar"></i> ${blog.date}</span>
                        <span class="blog-time"><i class="fas fa-clock"></i> ${blog.readTime}</span>
                    </div>
                </div>
                <div class="blog-card-content">
                    <span class="blog-category"><i class="fas fa-tag"></i> ${blog.category}</span>
                    <p>${blog.excerpt}</p>
                </div>
                <div class="blog-card-footer">
                    <span class="read-more">Read Full Article <i class="fas fa-arrow-right"></i></span>
                </div>
            </article>
        `;
    });
    html += '</div>';

    container.innerHTML = html;
}

// Render single blog article
function renderBlogArticle(index) {
    const blog = blogs[index];
    const container = document.getElementById("blog-article");

    container.innerHTML = `
        <div class="article-container">
            <div class="article-navigation">
                <button onclick="renderBlogList()" class="back-btn">
                    <i class="fas fa-arrow-left"></i> Back to Articles
                </button>
            </div>
            ${blog.content}
        </div>
    `;

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialize
renderCategoryFilters();
renderBlogList();
