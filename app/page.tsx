import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users, Star, ArrowRight, Camera, Mountain, Building2, Palette } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-amber-50 to-red-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/chinese-traditional-architecture-with-mountains.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 text-balance">
              Discover the Beauty of Chinese Culture
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              From the bustling Yiwu International Trade City to the magical Hengdian Film Studios,
              from the thousand-year porcelain heritage of Jingdezhen to the natural wonders of Lushan Mountain,
              we create unforgettable Chinese cultural journeys for you and your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/planner">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8">
                  Start Your Journey
                </Button>
              </Link>
              <Link href="/plans/3-day">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
                >
                  View Travel Plans
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Destinations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Four distinctive destinations, each carrying profound Chinese cultural heritage</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-lg overflow-hidden">
                <div className="absolute inset-0 bg-[url('/yiwu-international-trade-city-modern-buildings.jpg')] bg-cover bg-center"></div>
                <Badge className="absolute top-3 left-3 bg-amber-600 text-white">商贸之都</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Building2 className="h-5 w-5 text-amber-600 mr-2" />
                  <h3 className="font-bold text-lg">义乌国际商贸城</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">世界最大的小商品批发市场，感受全球贸易的脉搏</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    浙江义乌
                  </div>
                  <ArrowRight className="h-4 w-4 text-amber-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 bg-gradient-to-br from-purple-100 to-pink-200 rounded-t-lg overflow-hidden">
                <div className="absolute inset-0 bg-[url('/hengdian-film-studios-movie-sets-traditional-chine.jpg')] bg-cover bg-center"></div>
                <Badge className="absolute top-3 left-3 bg-amber-600 text-white">影视基地</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Camera className="h-5 w-5 text-amber-600 mr-2" />
                  <h3 className="font-bold text-lg">横店影视城</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">中国好莱坞，体验古装剧拍摄现场的魅力</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    浙江横店
                  </div>
                  <ArrowRight className="h-4 w-4 text-amber-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 bg-gradient-to-br from-orange-100 to-red-200 rounded-t-lg overflow-hidden">
                <div className="absolute inset-0 bg-[url('/jingdezhen-porcelain-pottery-traditional-chinese-c.jpg')] bg-cover bg-center"></div>
                <Badge className="absolute top-3 left-3 bg-amber-600 text-white">瓷都文化</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Palette className="h-5 w-5 text-amber-600 mr-2" />
                  <h3 className="font-bold text-lg">景德镇</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">千年瓷都，亲手体验陶瓷制作的传统工艺</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    江西景德镇
                  </div>
                  <ArrowRight className="h-4 w-4 text-amber-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 bg-gradient-to-br from-green-100 to-emerald-200 rounded-t-lg overflow-hidden">
                <div className="absolute inset-0 bg-[url('/lushan-mountain-scenic-natural-landscape-waterfall.jpg')] bg-cover bg-center"></div>
                <Badge className="absolute top-3 left-3 bg-amber-600 text-white">自然奇观</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Mountain className="h-5 w-5 text-amber-600 mr-2" />
                  <h3 className="font-bold text-lg">庐山</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">世界文化遗产，感受"不识庐山真面目"的诗意</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    江西庐山
                  </div>
                  <ArrowRight className="h-4 w-4 text-amber-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Travel Plans Preview */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">精心设计的旅行计划</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">从经典路线到高端定制，满足不同需求的家庭旅行体验</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                    <Clock className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">3天经典之旅</h3>
                  <p className="text-gray-600">精选核心景点，适合初次体验</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    义乌商贸城 + 横店影视城
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    家庭友好行程安排
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    专业导游服务
                  </li>
                </ul>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">查看详情</Button>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow duration-300 border-2 border-amber-200">
              <div className="bg-amber-600 text-white text-center py-2 text-sm font-medium">推荐选择</div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                    <Users className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">5天高端之旅</h3>
                  <p className="text-gray-600">深度体验，奢华享受</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    四大目的地全覆盖
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    五星级酒店住宿
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    私人定制体验
                  </li>
                </ul>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">查看详情</Button>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                    <Palette className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">定制旅行计划</h3>
                  <p className="text-gray-600">完全个性化，专属于您</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    根据需求量身定制
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    灵活时间安排
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    专属旅行顾问
                  </li>
                </ul>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">开始定制</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
