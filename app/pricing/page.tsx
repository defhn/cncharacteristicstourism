import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Check,
  Star,
  Users,
  Clock,
  Car,
  Utensils,
  Camera,
  Shield,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5 text-amber-600" />
              <span className="text-amber-600 hover:text-amber-700">返回首页</span>
            </Link>
            <div className="flex items-center space-x-2">
              <Star className="h-6 w-6 text-amber-600" />
              <span className="text-xl font-bold text-gray-900">价格与服务</span>
            </div>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">立即咨询</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-r from-amber-50 to-red-50">
        <div className="absolute inset-0 bg-[url('/chinese-traditional-architecture-with-mountains.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">透明价格，优质服务</h1>
            <p className="text-lg text-gray-700">
              我们提供清晰透明的价格体系和全方位的专业服务，让您的中华文化之旅物超所值
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">旅行套餐价格</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">三种不同档次的旅行套餐，满足不同预算和需求的家庭</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* 3-Day Classic Plan */}
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                  <Clock className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-2xl">3天经典之旅</CardTitle>
                <p className="text-gray-600">适合初次体验的家庭</p>
                <div className="mt-4">
                  <div className="text-4xl font-bold text-amber-600">¥2,888</div>
                  <div className="text-sm text-gray-500">每人价格</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">义乌国际商贸城 + 横店影视城</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">四星级酒店住宿（2晚）</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">专业导游全程陪同</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">所有景点门票</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">接送机服务</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">旅游意外保险</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">6餐（3早3正）</span>
                  </div>
                </div>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white mt-6">立即预订</Button>
                <p className="text-xs text-gray-500 text-center">* 2人起订，儿童价格请咨询</p>
              </CardContent>
            </Card>

            {/* 5-Day Premium Plan */}
            <Card className="hover:shadow-xl transition-shadow duration-300 border-2 border-amber-200 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-amber-600 text-white px-4 py-1">最受欢迎</Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                  <Users className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-2xl">5天高端之旅</CardTitle>
                <p className="text-gray-600">深度体验，奢华享受</p>
                <div className="mt-4">
                  <div className="text-4xl font-bold text-amber-600">¥8,888</div>
                  <div className="text-sm text-gray-500">每人价格</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">四大目的地全覆盖</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">五星级豪华酒店（4晚）</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">奔驰商务车专车服务</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">资深文化导游专属服务</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">米其林餐厅用餐体验</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">专业摄影师跟拍服务</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">个人旅行纪念册制作</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">高端旅游保险</span>
                  </div>
                </div>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white mt-6">立即预订</Button>
                <p className="text-xs text-gray-500 text-center">* 每团限制4人，提前30天预订享受优惠</p>
              </CardContent>
            </Card>

            {/* Custom Plan */}
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                  <Star className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-2xl">定制旅行计划</CardTitle>
                <p className="text-gray-600">完全个性化定制</p>
                <div className="mt-4">
                  <div className="text-4xl font-bold text-amber-600">面议</div>
                  <div className="text-sm text-gray-500">根据需求报价</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">根据需求量身定制</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">灵活时间安排</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">专属旅行顾问</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">VIP专享服务</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">独特文化体验</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">24小时贴心服务</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    <span className="text-sm">特殊需求满足</span>
                  </div>
                </div>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white mt-6">开始定制</Button>
                <p className="text-xs text-gray-500 text-center">* 免费咨询，满意后付款</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">我们的服务优势</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">专业团队，贴心服务，让您的旅行无忧无虑</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">专业导游</h3>
                <p className="text-sm text-gray-600">资深文化导游，深度讲解中华文化内涵</p>
              </CardContent>
            </Card>

            <Card className="bg-white text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                  <Car className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">舒适交通</h3>
                <p className="text-sm text-gray-600">豪华商务车或舒适大巴，安全便捷</p>
              </CardContent>
            </Card>

            <Card className="bg-white text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                  <Utensils className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">精选美食</h3>
                <p className="text-sm text-gray-600">当地特色餐厅，品尝正宗中华美食</p>
              </CardContent>
            </Card>

            <Card className="bg-white text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                  <Shield className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">安全保障</h3>
                <p className="text-sm text-gray-600">全程保险覆盖，24小时应急服务</p>
              </CardContent>
            </Card>

            <Card className="bg-white text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                  <Camera className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">摄影服务</h3>
                <p className="text-sm text-gray-600">专业摄影师跟拍，记录美好时光</p>
              </CardContent>
            </Card>

            <Card className="bg-white text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                  <Star className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">品质住宿</h3>
                <p className="text-sm text-gray-600">精选星级酒店，舒适安全的住宿环境</p>
              </CardContent>
            </Card>

            <Card className="bg-white text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                  <Clock className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">灵活安排</h3>
                <p className="text-sm text-gray-600">根据客户需求调整行程，个性化服务</p>
              </CardContent>
            </Card>

            <Card className="bg-white text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                  <MessageCircle className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">贴心服务</h3>
                <p className="text-sm text-gray-600">全程客服支持，随时解答您的疑问</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Details */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">价格说明</h2>
            <p className="text-lg text-gray-600">透明收费，无隐藏费用</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-green-600">费用包含</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">全程住宿费用</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">景点门票费用</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">导游服务费用</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">交通接送费用</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">旅游保险费用</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">行程内餐食费用</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-red-600">费用不含</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center">
                  <span className="w-4 h-4 mr-2 text-red-500">×</span>
                  <span className="text-sm">往返大交通费用</span>
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 mr-2 text-red-500">×</span>
                  <span className="text-sm">个人消费及购物</span>
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 mr-2 text-red-500">×</span>
                  <span className="text-sm">行程外的自费项目</span>
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 mr-2 text-red-500">×</span>
                  <span className="text-sm">单房差费用</span>
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 mr-2 text-red-500">×</span>
                  <span className="text-sm">因不可抗力产生的费用</span>
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 mr-2 text-red-500">×</span>
                  <span className="text-sm">其他未明确包含的费用</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">联系我们</h2>
            <p className="text-lg text-gray-600">专业客服团队，随时为您服务</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                  <Phone className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">电话咨询</h3>
                <p className="text-amber-600 font-semibold">400-123-4567</p>
                <p className="text-sm text-gray-600 mt-2">工作时间：9:00-21:00</p>
              </CardContent>
            </Card>

            <Card className="bg-white text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                  <MessageCircle className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">微信咨询</h3>
                <p className="text-amber-600 font-semibold">ChinaJourney2024</p>
                <p className="text-sm text-gray-600 mt-2">扫码添加客服微信</p>
              </CardContent>
            </Card>

            <Card className="bg-white text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                  <Mail className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">邮件咨询</h3>
                <p className="text-amber-600 font-semibold">info@chinajourney.com</p>
                <p className="text-sm text-gray-600 mt-2">24小时内回复</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">预订流程</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="bg-amber-100 text-amber-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-2">
                    1
                  </div>
                  <p className="text-sm font-semibold">咨询需求</p>
                </div>
                <div className="text-center">
                  <div className="bg-amber-100 text-amber-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-2">
                    2
                  </div>
                  <p className="text-sm font-semibold">确认行程</p>
                </div>
                <div className="text-center">
                  <div className="bg-amber-100 text-amber-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-2">
                    3
                  </div>
                  <p className="text-sm font-semibold">签约付款</p>
                </div>
                <div className="text-center">
                  <div className="bg-amber-100 text-amber-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-2">
                    4
                  </div>
                  <p className="text-sm font-semibold">开心出行</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
