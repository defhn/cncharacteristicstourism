import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Search, Calendar, User, Eye, ArrowRight, MapPin, Camera, Mountain, Building2, Plus } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getAllBlogPosts } from '@/lib/supabase'
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"



const categories = ["All", "Destination Guides", "Family Travel", "Cultural Experience", "Photography Tips", "Food Guides", "Travel Tips"]

export default async function BlogPage() {
  let blogPosts = []

  try {
    // 尝试从数据库获取博客文章
    blogPosts = await getAllBlogPosts()
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    // 如果数据库连接失败，使用静态数据作为后备
    blogPosts = [
      {
        id: 1,
        title: "Yiwu International Trade City Deep Exploration: The Heart of Global Trade",
        excerpt: "Step into the world's largest small commodity wholesale market, feel the pulse of global trade, and explore the miracle of Chinese manufacturing...",
        author: "David Chen",
        created_at: "2024-03-15",
        category: "Destination Guides",
        image: "/yiwu-international-trade-city-modern-buildings.jpg",
        views: 1250,
        tags: ["Yiwu", "Trade", "Shopping", "Cultural Experience"],
      },
      {
        id: 2,
        title: "Hengdian Film Studios Family Guide: Making Children Fall in Love with Chinese Culture",
        excerpt: "Take your children on a journey through time at Hengdian Film Studios, experiencing a unique historical and cultural adventure that combines education with entertainment...",
        author: "Sarah Wang",
        created_at: "2024-03-12",
        category: "Family Travel",
        image: "/hengdian-film-studios-movie-sets-traditional-chine.jpg",
        views: 980,
        tags: ["Hengdian", "Family Travel", "Film", "Education"],
      },
      {
        id: 3,
        title: "Jingdezhen Ceramic Cultural Journey: The Artistic Charm of the Millennium Porcelain Capital",
        excerpt: "Experience the cultural heritage of the millennium porcelain capital in Jingdezhen, enjoy hands-on ceramic making, and take home unique works of art...",
        author: "Michael Zhang",
        created_at: "2024-03-10",
        category: "Cultural Experience",
        image: "/jingdezhen-porcelain-pottery-traditional-chinese-c.jpg",
        views: 1100,
        tags: ["Jingdezhen", "Ceramics", "Handicrafts", "Culture"],
      },
    ]
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-r from-amber-50 to-red-50">
        <div className="absolute inset-0 bg-[url('/chinese-traditional-architecture-with-mountains.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Chinese Culture Travel Blog</h1>
            <p className="text-lg text-gray-700 mb-6">
              Share authentic travel experiences, record beautiful cultural moments, and provide inspiration and guidance for your Chinese cultural journey
            </p>
            <div className="flex items-center space-x-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Search articles..." className="pl-10" />
              </div>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={
                  category === "All" ? "bg-amber-600 hover:bg-amber-700" : "hover:bg-amber-50 hover:border-amber-300"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="bg-white hover:shadow-lg transition-shadow duration-300">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <div className="relative h-48 md:h-full">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                          />
                          <Badge className="absolute top-3 left-3 bg-amber-600 text-white">{post.category}</Badge>
                        </div>
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {post.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(post.created_at).toLocaleDateString('zh-CN')}
                          </div>
                          <div className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            {post.views || 0}
                          </div>
                        </div>

                        <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-amber-600 cursor-pointer">
                          <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </h2>

                        <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>

                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <Link href={`/blog/${post.id}`}>
                            <Button variant="ghost" size="sm" className="text-amber-600 hover:text-amber-700">
                              Read More <ArrowRight className="ml-1 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    Previous
                  </Button>
                  <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Popular Posts */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Popular Posts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {blogPosts.slice(0, 4).map((post) => (
                    <div key={post.id} className="flex space-x-3">
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 hover:text-amber-600 cursor-pointer">
                          <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </h4>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <Eye className="h-3 w-3 mr-1" />
                          {post.views}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Destinations */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Popular Destinations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link href="/destinations/yiwu" className="flex items-center space-x-2 text-sm hover:text-amber-600">
                    <Building2 className="h-4 w-4 text-amber-600" />
                    <span>Yiwu International Trade City</span>
                  </Link>
                  <Link
                    href="/destinations/hengdian"
                    className="flex items-center space-x-2 text-sm hover:text-amber-600"
                  >
                    <Camera className="h-4 w-4 text-amber-600" />
                    <span>Hengdian Film Studios</span>
                  </Link>
                  <Link
                    href="/destinations/jingdezhen"
                    className="flex items-center space-x-2 text-sm hover:text-amber-600"
                  >
                    <Mountain className="h-4 w-4 text-amber-600" />
                    <span>Jingdezhen Porcelain Capital</span>
                  </Link>
                  <Link
                    href="/destinations/lushan"
                    className="flex items-center space-x-2 text-sm hover:text-amber-600"
                  >
                    <MapPin className="h-4 w-4 text-amber-600" />
                    <span>Lushan Mountain</span>
                  </Link>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="bg-amber-50 border-amber-200">
                <CardHeader>
                  <CardTitle className="text-lg text-amber-800">Subscribe to Our Blog</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-amber-700 mb-4">Get the latest travel guides and cultural experience sharing</p>
                  <div className="space-y-3">
                    <Input placeholder="Enter your email" className="bg-white" />
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Subscribe Blog</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Tags Cloud */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">热门标签</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["义乌", "横店", "景德镇", "庐山", "亲子游", "文化体验", "摄影", "美食", "手工艺", "家庭旅行"].map(
                      (tag) => (
                        <Badge key={tag} variant="outline" className="text-xs hover:bg-amber-50 cursor-pointer">
                          {tag}
                        </Badge>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
