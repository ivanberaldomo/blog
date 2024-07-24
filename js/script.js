document.addEventListener('DOMContentLoaded', function () {
    const posts = [
        // Arts
        {
            id: 1,
            title: 'The Renaissance Art Movement',
            excerpt: 'Exploring the profound impact of the Renaissance on art history...',
            date: '2024-01-15',
            image: 'assets/img/posts/renaissance.jpg',
            category: 'arts',
            views: 150
        },
        {
            id: 2,
            title: 'Modern Art: Breaking the Rules',
            excerpt: 'A deep dive into the rebellious spirit of modern art...',
            date: '2024-02-10',
            image: 'assets/img/posts/modern_art.jpg',
            category: 'arts',
            views: 200
        },
        {
            id: 3,
            title: 'Understanding Abstract Art',
            excerpt: 'Decoding the abstract art movement and its key figures...',
            date: '2024-03-05',
            image: 'assets/img/posts/abstract_art.jpg',
            category: 'arts',
            views: 180
        },
        {
            id: 4,
            title: 'The Evolution of Sculpture',
            excerpt: 'From classical to contemporary: the journey of sculpture...',
            date: '2024-04-20',
            image: 'assets/img/posts/sculpture.jpg',
            category: 'arts',
            views: 130
        },
        // Lifestyle
        {
            id: 5,
            title: 'Minimalist Living: Less is More',
            excerpt: 'Embracing minimalism for a clutter-free life...',
            date: '2024-05-15',
            image: 'assets/img/posts/minimalism.jpg',
            category: 'lifestyle',
            views: 220
        },
        {
            id: 6,
            title: 'Healthy Eating on a Budget',
            excerpt: 'Tips and tricks for eating healthy without breaking the bank...',
            date: '2024-06-10',
            image: 'assets/img/posts/healthy_eating.jpg',
            category: 'lifestyle',
            views: 240
        },
        {
            id: 7,
            title: 'Traveling the World Solo',
            excerpt: 'The ultimate guide to solo travel and self-discovery...',
            date: '2024-07-01',
            image: 'assets/img/posts/solo_travel.jpg',
            category: 'lifestyle',
            views: 300
        },
        {
            id: 8,
            title: 'Yoga for Mental Health',
            excerpt: 'How yoga can improve your mental well-being...',
            date: '2024-08-25',
            image: 'assets/img/posts/yoga.jpg',
            category: 'lifestyle',
            views: 210
        },
        // Technology
        {
            id: 9,
            title: 'The Future of Quantum Computing',
            excerpt: 'Exploring the possibilities and challenges of quantum computing...',
            date: '2024-09-10',
            image: 'assets/img/posts/quantum_computing.jpg',
            category: 'technology',
            views: 350
        },
        {
            id: 10,
            title: 'AI in Everyday Life',
            excerpt: 'How artificial intelligence is changing our daily routines...',
            date: '2024-10-05',
            image: 'assets/img/posts/ai_daily_life.jpg',
            category: 'technology',
            views: 400
        },
        {
            id: 11,
            title: 'The Rise of Smart Homes',
            excerpt: 'Smart home technology and its impact on modern living...',
            date: '2024-11-15',
            image: 'assets/img/posts/smart_home.jpg',
            category: 'technology',
            views: 380
        },
        {
            id: 12,
            title: 'Cybersecurity in 2024',
            excerpt: 'The latest trends and threats in the world of cybersecurity...',
            date: '2024-12-20',
            image: 'assets/img/posts/cybersecurity_trends.jpg',
            category: 'technology',
            views: 420
        },
        // Finance
        {
            id: 13,
            title: 'Investing in the Stock Market',
            excerpt: 'A beginner\'s guide to stock market investment...',
            date: '2024-01-20',
            image: 'assets/img/posts/stock_market.jpg',
            category: 'finance',
            views: 310
        },
        {
            id: 14,
            title: 'Personal Finance Tips for 2024',
            excerpt: 'How to manage your finances effectively this year...',
            date: '2024-02-25',
            image: 'assets/img/posts/personal_finance.jpg',
            category: 'finance',
            views: 330
        },
        {
            id: 15,
            title: 'Cryptocurrency: The New Frontier',
            excerpt: 'Understanding the world of cryptocurrency and blockchain...',
            date: '2024-03-10',
            image: 'assets/img/posts/cryptocurrency.jpg',
            category: 'finance',
            views: 290
        },
        {
            id: 16,
            title: 'Real Estate Investment Strategies',
            excerpt: 'Tips and strategies for successful real estate investing...',
            date: '2024-04-05',
            image: 'assets/img/posts/real_estate.jpg',
            category: 'finance',
            views: 270,
            text: `Hello world`
        }
    ];    

    function renderPosts(category) {
        const postsContainer = document.getElementById('container-posts');
        postsContainer.innerHTML = '';

        const filteredPosts = category === 'all' ? posts : posts.filter(post => post.category === category);

        filteredPosts.forEach(post => {
            const postCard = document.createElement('div');
            postCard.className = 'card-posts';
            postCard.onclick = () => viewPost(post.id);
            postCard.innerHTML = `
                <img src="${post.image}" alt="${post.title}">
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <div class="post-meta">
                    <span>${post.date}</span> | <span>${post.category}</span> | <span>${post.views} views</span>
                </div>
            `;
            postsContainer.appendChild(postCard);
        });
    }

    function viewPost(postId) {
        const post = posts.find(p => p.id === postId);
        post.views += 1;
        localStorage.setItem('posts', JSON.stringify(posts));
        localStorage.setItem('currentPost', JSON.stringify(post));
        window.location.href = 'post.html';
    }

    window.filterPosts = renderPosts;

    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        renderPosts('all');
    } else if (window.location.pathname.includes('post.html')) {
        const post = JSON.parse(localStorage.getItem('currentPost'));
        const postContent = document.getElementById('post-content');
        postContent.innerHTML = `
            <h1>${post.title}</h1>
            <p class="metadata">${post.date} | ${post.category} | ${post.views} views</p>
            <img src="${post.image}" alt="${post.title}" class="img">
            <p class="excerpt">${post.excerpt}</p>
            <p class="post-text">${post.text}</p>
        `;
    }
});

