import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, User, Eye, Share2, Heart, MessageCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getBlogPost } from '@/lib/supabase'
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

// Mock blog post data - in a real app, this would come from your database
const blogPost = {
  id: 1,
  title: "义乌国际商贸城深度探索：全球贸易的心脏",
  content: `
    <h2>义乌：世界小商品之都</h2>
    <p>义乌国际商贸城，这个被誉为"世界超市"的地方，每天都在上演着全球贸易的精彩故事。作为世界最大的小商品批发市场，这里汇聚了来自全球各地的商品和商人。</p>
    
    <h3>历史与发展</h3>
    <p>义乌的商贸历史可以追溯到宋代，但真正的腾飞始于改革开放后。从最初的小商品市场，发展到今天的国际商贸城，义乌见证了中国制造业的崛起和全球化贸易的发展。</p>
    
    <h3>市场规模与特色</h3>
    <p>义乌国际商贸城占地面积超过640万平方米，拥有7万多个商位，经营26个大类、320多万种商品。这里的商品远销世界200多个国家和地区，是名副其实的"世界超市"。</p>
    
    <h3>文化体验建议</h3>
    <p>对于游客来说，义乌不仅是购物天堂，更是了解中国制造业和全球贸易的绝佳窗口。建议游客：</p>
    <ul>
      <li>参观不同区域的专业市场，了解商品分类和贸易流程</li>
      <li>与当地商户交流，感受义乌人的商业智慧</li>
      <li>品尝当地特色美食，体验义乌的生活文化</li>
      <li>参观义乌博物馆，了解这座城市的发展历程</li>
    </ul>
    
    <h3>实用信息</h3>
    <p>最佳参观时间：周一至周五（避开周末人流高峰）<br/>
    建议游览时长：半天至一天<br/>
    交通方式：高铁直达义乌站，市内有专线公交直达商贸城</p>
  `,
  author: "李文华",
  date: "2024-03-15",
  category: "目的地攻略",
  image: "/yiwu-international-trade-city-modern-buildings.jpg",
  views: 1250,
  likes: 89,
  comments: 23,
  tags: ["义乌", "商贸", "购物", "文化体验"],
}

const relatedPosts = [
  {
    id: 2,
    title: "横店影视城亲子游攻略：让孩子爱上中华文化",
    image: "/hengdian-film-studios-movie-sets-traditional-chine.jpg",
    category: "亲子旅行",
  },
  {
    id: 3,
    title: "景德镇陶瓷文化之旅：千年瓷都的艺术魅力",
    image: "/jingdezhen-porcelain-pottery-traditional-chinese-c.jpg",
    category: "文化体验",
  },
  {
    id: 4,
    title: "庐山风景区摄影指南：捕捉诗意山水",
    image: "/lushan-mountain-scenic-natural-landscape-waterfall.jpg",
    category: "摄影攻略",
  },
]

interface BlogDetailPageProps {
  params: {
    id: string
  }
}

// 生成页面元数据
export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  try {
    const post = await getBlogPost(parseInt(params.id))

    if (!post) {
      return {
        title: '文章未找到 - 中华之旅',
        description: '您访问的文章不存在或已被删除',
      }
    }

    return {
      title: post.seo_title || `${post.title} - 中华之旅`,
      description: post.seo_description || post.excerpt,
      keywords: post.seo_keywords || post.tags?.join(', '),
      openGraph: {
        title: post.seo_title || post.title,
        description: post.seo_description || post.excerpt,
        images: post.image ? [post.image] : [],
        type: 'article',
        publishedTime: post.created_at,
        modifiedTime: post.updated_at,
        authors: [post.author],
        tags: post.tags,
      },
      twitter: {
        card: 'summary_large_image',
        title: post.seo_title || post.title,
        description: post.seo_description || post.excerpt,
        images: post.image ? [post.image] : [],
      },
    }
  } catch (error) {
    return {
      title: '文章未找到 - 中华之旅',
      description: '您访问的文章不存在或已被删除',
    }
  }
}

export default async function BlogPostPage({ params }: BlogDetailPageProps) {
  let post
  try {
    post = await getBlogPost(parseInt(params.id))
  } catch (error) {
    console.error('Error fetching blog post:', error)
    notFound()
  }

  if (!post) {
    notFound()
  }

  // 使用数据库中的数据，如果没有则使用默认值
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Article Header */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge className="bg-amber-600 text-white mb-4">{post.category}</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-6 text-balance">{post.title}</h1>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
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
                {post.views || 0} 阅读
              </div>
              <div className="flex items-center">
                <Heart className="h-4 w-4 mr-1" />
                {post.likes || 0} 点赞
              </div>
            </div>
          </div>

          {/* Featured Image */}
          {post.image && (
            <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
              <Image src={post.image} alt={post.title} fill className="object-cover" priority />
            </div>
          )}
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-amber-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg prose-img:shadow-lg">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-8 pt-8 border-t">
                  <h4 className="font-semibold mb-4">相关标签</h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="hover:bg-amber-50 cursor-pointer">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Social Actions */}
              <div className="mt-8 pt-8 border-t">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Button variant="outline" className="hover:bg-red-50 hover:border-red-300 bg-transparent">
                      <Heart className="h-4 w-4 mr-2" />
                      点赞 ({post.likes || 0})
                    </Button>
                    <Button variant="outline">
                      <Share2 className="h-4 w-4 mr-2" />
                      分享
                    </Button>
                  </div>
                  <div className="text-sm text-gray-500">
                    最后更新：{new Date(post.updated_at).toLocaleDateString('zh-CN')}
                  </div>
                </div>
              </div>

              {/* Author Info */}
              <Card className="mt-8">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                      <User className="h-8 w-8 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">{post.author}</h4>
                      <p className="text-gray-600 text-sm">
                        资深旅行作家，专注中华文化旅行体验分享，已发表旅行文章200余篇。
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      关注作者
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Table of Contents */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">文章目录</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Link href="#history" className="block text-sm text-gray-600 hover:text-amber-600">
                    历史与发展
                  </Link>
                  <Link href="#scale" className="block text-sm text-gray-600 hover:text-amber-600">
                    市场规模与特色
                  </Link>
                  <Link href="#experience" className="block text-sm text-gray-600 hover:text-amber-600">
                    文化体验建议
                  </Link>
                  <Link href="#info" className="block text-sm text-gray-600 hover:text-amber-600">
                    实用信息
                  </Link>
                </CardContent>
              </Card>

              {/* Related Travel Plans */}
              <Card className="bg-amber-50 border-amber-200">
                <CardHeader>
                  <CardTitle className="text-lg text-amber-800">相关旅行计划</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-amber-700 mb-4">想要亲自体验义乌的魅力？查看我们的专业旅行计划</p>
                  <div className="space-y-2">
                    <Link href="/plans/3-day">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-start border-amber-300 hover:bg-amber-100 bg-transparent"
                      >
                        3天经典之旅
                      </Button>
                    </Link>
                    <Link href="/plans/5-day">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-start border-amber-300 hover:bg-amber-100 bg-transparent"
                      >
                        5天高端之旅
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">相关文章推荐</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <Card key={post.id} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-3 left-3 bg-amber-600 text-white">{post.category}</Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-amber-600 cursor-pointer">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <Link href={`/blog/${post.id}`}>
                    <Button variant="ghost" size="sm" className="text-amber-600 hover:text-amber-700 p-0">
                      阅读更多 <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
