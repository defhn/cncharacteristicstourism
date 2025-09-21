// Blog data structure for future database integration
export interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  image: string
  views: number
  likes?: number
  comments?: number
  tags: string[]
  published: boolean
}

export interface BlogCategory {
  id: string
  name: string
  description: string
  count: number
}

// Mock data - replace with database queries in production
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "义乌国际商贸城深度探索：全球贸易的心脏",
    excerpt: "走进世界最大的小商品批发市场，感受全球贸易的脉搏跳动，探索中国制造的奇迹...",
    content: `
      <h2>义乌：世界小商品之都</h2>
      <p>义乌国际商贸城，这个被誉为"世界超市"的地方，每天都在上演着全球贸易的精彩故事。作为世界最大的小商品批发市场，这里汇聚了来自全球各地的商品和商人。</p>
      
      <h3>历史与发展</h3>
      <p>义乌的商贸历史可以追溯到宋代，但真正的腾飞始于改革开放后。从最初的小商品市场，发展到今天的国际商贸城，义乌见证了中国制造业的崛起和全球化贸易的发展。</p>
      
      <h3>市场规模与特色</h3>
      <p>义乌国际商贸城占地面积超过640万平方米，拥有7万多个商位，经营26个大类、320多万种商品。这里的商品远销世界200多个国家和地区，是名副其实的"世界超市"。</p>
    `,
    author: "李文华",
    date: "2024-03-15",
    category: "目的地攻略",
    image: "/yiwu-international-trade-city-modern-buildings.jpg",
    views: 1250,
    likes: 89,
    comments: 23,
    tags: ["义乌", "商贸", "购物", "文化体验"],
    published: true,
  },
  // Add more blog posts here...
]

export const blogCategories: BlogCategory[] = [
  { id: "all", name: "全部", description: "所有文章", count: 0 },
  { id: "destination", name: "目的地攻略", description: "各地旅行攻略", count: 0 },
  { id: "family", name: "亲子旅行", description: "家庭旅行指南", count: 0 },
  { id: "culture", name: "文化体验", description: "文化体验分享", count: 0 },
  { id: "photography", name: "摄影攻略", description: "旅行摄影技巧", count: 0 },
  { id: "food", name: "美食攻略", description: "当地美食推荐", count: 0 },
  { id: "tips", name: "旅行贴士", description: "实用旅行建议", count: 0 },
]

// Utility functions for blog management
export function getBlogPostById(id: number): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id && post.published)
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  if (category === "all") {
    return blogPosts.filter((post) => post.published)
  }
  return blogPosts.filter((post) => post.category === category && post.published)
}

export function getRelatedPosts(currentPostId: number, limit = 3): BlogPost[] {
  const currentPost = getBlogPostById(currentPostId)
  if (!currentPost) return []

  return blogPosts
    .filter(
      (post) =>
        post.id !== currentPostId &&
        post.published &&
        (post.category === currentPost.category || post.tags.some((tag) => currentPost.tags.includes(tag))),
    )
    .slice(0, limit)
}

export function searchBlogPosts(query: string): BlogPost[] {
  const lowercaseQuery = query.toLowerCase()
  return blogPosts.filter(
    (post) =>
      post.published &&
      (post.title.toLowerCase().includes(lowercaseQuery) ||
        post.excerpt.toLowerCase().includes(lowercaseQuery) ||
        post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))),
  )
}
