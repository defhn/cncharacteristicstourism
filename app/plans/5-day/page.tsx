import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Clock,
  Users,
  Star,
  ArrowLeft,
  Camera,
  Building2,
  Car,
  Utensils,
  Mountain,
  Palette,
  Crown,
} from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function FiveDayPlan() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-amber-50 to-red-50">
        <div className="absolute inset-0 bg-[url('/lushan-mountain-scenic-natural-landscape-waterfall.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <Badge className="bg-gradient-to-r from-amber-600 to-orange-600 text-white mb-4">
              <Crown className="h-3 w-3 mr-1" />
              Premium Customized
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">5-Day Premium Chinese Culture In-Depth Journey</h1>
            <p className="text-lg text-gray-700 mb-6">
              Complete coverage of four destinations, five-star luxury experience, exclusive customized service, creating the most unforgettable Chinese cultural journey for you
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                5 Days 4 Nights
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                Private Small Group
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                Zhejiang · Jiangxi
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center border-amber-200">
              <CardContent className="p-6">
                <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold mb-2">五星级住宿</h3>
                <p className="text-sm text-gray-600">精选当地最佳五星级酒店</p>
              </CardContent>
            </Card>
            <Card className="text-center border-amber-200">
              <CardContent className="p-6">
                <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold mb-2">专属导游</h3>
                <p className="text-sm text-gray-600">资深文化导游一对一服务</p>
              </CardContent>
            </Card>
            <Card className="text-center border-amber-200">
              <CardContent className="p-6">
                <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold mb-2">豪华专车</h3>
                <p className="text-sm text-gray-600">奔驰商务车全程接送</p>
              </CardContent>
            </Card>
            <Card className="text-center border-amber-200">
              <CardContent className="p-6">
                <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Utensils className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold mb-2">米其林餐厅</h3>
                <p className="text-sm text-gray-600">品尝地道高端中华料理</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Itinerary */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">精心设计的行程安排</h2>

          <div className="space-y-8">
            {/* Day 1 */}
            <Card className="border-l-4 border-l-amber-600 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Badge variant="outline" className="mr-3">
                    第1天
                  </Badge>
                  抵达义乌 - 商贸帝国探索
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-amber-50 p-4 rounded-lg mb-4">
                  <h5 className="font-semibold text-sm mb-2 flex items-center">
                    <Crown className="h-4 w-4 mr-2 text-amber-600" />
                    VIP接机服务
                  </h5>
                  <p className="text-sm text-gray-700">专属司机机场接机，奔驰商务车直达五星级酒店</p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h5 className="font-semibold">上午安排</h5>
                    <div className="flex items-start space-x-3">
                      <div className="bg-amber-100 p-2 rounded-full">
                        <Building2 className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <h6 className="font-semibold text-sm">义乌国际商贸城VIP参观</h6>
                        <p className="text-xs text-gray-600">专属通道，深度了解全球贸易中心</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h5 className="font-semibold">下午安排</h5>
                    <div className="flex items-start space-x-3">
                      <div className="bg-amber-100 p-2 rounded-full">
                        <Utensils className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <h6 className="font-semibold text-sm">米其林餐厅晚宴</h6>
                        <p className="text-xs text-gray-600">品尝精致浙江菜，专业侍酒师服务</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Day 2 */}
            <Card className="border-l-4 border-l-amber-600 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Badge variant="outline" className="mr-3">
                    第2天
                  </Badge>
                  横店影视城 - 梦幻影视之旅
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h5 className="font-semibold">影视体验</h5>
                    <div className="flex items-start space-x-3">
                      <div className="bg-amber-100 p-2 rounded-full">
                        <Camera className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <h6 className="font-semibold text-sm">专业古装摄影</h6>
                        <p className="text-xs text-gray-600">专业摄影师，精美古装，制作个人写真集</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h5 className="font-semibold">文化体验</h5>
                    <div className="flex items-start space-x-3">
                      <div className="bg-amber-100 p-2 rounded-full">
                        <Star className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <h6 className="font-semibold text-sm">私人导览</h6>
                        <p className="text-xs text-gray-600">影视城幕后探秘，与演员互动</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Day 3 */}
            <Card className="border-l-4 border-l-amber-600 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Badge variant="outline" className="mr-3">
                    第3天
                  </Badge>
                  景德镇 - 千年瓷都艺术之旅
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h5 className="font-semibold">陶瓷艺术</h5>
                    <div className="flex items-start space-x-3">
                      <div className="bg-amber-100 p-2 rounded-full">
                        <Palette className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <h6 className="font-semibold text-sm">大师工坊体验</h6>
                        <p className="text-xs text-gray-600">国家级陶瓷大师亲自指导制作</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h5 className="font-semibold">文化探索</h5>
                    <div className="flex items-start space-x-3">
                      <div className="bg-amber-100 p-2 rounded-full">
                        <Star className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <h6 className="font-semibold text-sm">私人博物馆参观</h6>
                        <p className="text-xs text-gray-600">珍贵瓷器收藏，专业讲解</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Day 4 */}
            <Card className="border-l-4 border-l-amber-600 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Badge variant="outline" className="mr-3">
                    第4天
                  </Badge>
                  庐山 - 诗意山水画卷
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h5 className="font-semibold">自然奇观</h5>
                    <div className="flex items-start space-x-3">
                      <div className="bg-amber-100 p-2 rounded-full">
                        <Mountain className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <h6 className="font-semibold text-sm">庐山风景区深度游</h6>
                        <p className="text-xs text-gray-600">三叠泉瀑布，含鄱口日出</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h5 className="font-semibold">文化体验</h5>
                    <div className="flex items-start space-x-3">
                      <div className="bg-amber-100 p-2 rounded-full">
                        <Star className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <h6 className="font-semibold text-sm">诗词文化体验</h6>
                        <p className="text-xs text-gray-600">古诗词朗诵，书法体验</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Day 5 */}
            <Card className="border-l-4 border-l-amber-600 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Badge variant="outline" className="mr-3">
                    第5天
                  </Badge>
                  文化总结 - 温馨送别
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-sm mb-2">特别安排</h5>
                  <p className="text-sm text-gray-700">制作个人旅行纪念册，专业摄影师全程跟拍照片整理</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Crown className="h-5 w-5 mr-2 text-amber-600" />
                  高端服务包含
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    全程五星级豪华酒店
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    奔驰商务车专车服务
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    资深文化导游专属服务
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    米其林餐厅用餐体验
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    专业摄影师跟拍服务
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    个人旅行纪念册制作
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    高端旅游保险
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  立即预订
                  <Badge className="bg-gradient-to-r from-amber-600 to-orange-600 text-white">限量发售</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-600">¥8,888</div>
                  <div className="text-sm text-gray-500 line-through">原价 ¥9,888</div>
                  <div className="text-sm text-gray-600">每人价格</div>
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white"
                  size="lg"
                >
                  立即预订高端之旅
                </Button>
                <p className="text-xs text-gray-500 text-center">* 每团限制4人，提前30天预订享受优惠价格</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
