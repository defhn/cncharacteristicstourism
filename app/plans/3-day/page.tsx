'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users, Star, ArrowLeft, Camera, Building2, Car, Utensils } from "lucide-react"
import Link from "next/link"
import PayPalCheckout from "@/components/paypal-checkout"

export default function ThreeDayPlan() {
  const handlePaymentSuccess = (details: any) => {
    alert(`支付成功！订单号: ${details.id}`)
    // 这里可以跳转到成功页面或发送确认邮件
  }

  const handlePaymentError = (error: any) => {
    alert("支付失败，请重试或联系客服")
  }

  const handlePaymentCancel = () => {
    alert("支付已取消")
  }

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
              <span className="text-xl font-bold text-gray-900">3天经典之旅</span>
            </div>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">立即预订</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-amber-50 to-red-50">
        <div className="absolute inset-0 bg-[url('/yiwu-international-trade-city-modern-buildings.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <Badge className="bg-amber-600 text-white mb-4">经典推荐</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">3天经典中华文化之旅</h1>
            <p className="text-lg text-gray-700 mb-6">
              精选义乌国际商贸城和横店影视城两大核心景点，适合初次体验中华文化的家庭旅行
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                3天2夜
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                2-6人小团
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                浙江省
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">详细行程安排</h2>

          <div className="space-y-8">
            {/* Day 1 */}
            <Card className="border-l-4 border-l-amber-600">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Badge variant="outline" className="mr-3">
                    第1天
                  </Badge>
                  抵达义乌 - 商贸文化初体验
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <Car className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">09:00 接机服务</h4>
                      <p className="text-xs text-gray-600">专车接机，前往酒店办理入住</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <Building2 className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">14:00 义乌国际商贸城</h4>
                      <p className="text-xs text-gray-600">参观世界最大小商品市场</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <Utensils className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">18:00 欢迎晚宴</h4>
                      <p className="text-xs text-gray-600">品尝地道浙江菜</p>
                    </div>
                  </div>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-sm mb-2">住宿安排</h5>
                  <p className="text-sm text-gray-700">义乌四星级商务酒店，位置便利，设施完善</p>
                </div>
              </CardContent>
            </Card>

            {/* Day 2 */}
            <Card className="border-l-4 border-l-amber-600">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Badge variant="outline" className="mr-3">
                    第2天
                  </Badge>
                  横店影视城 - 穿越古今体验
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <Car className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">08:00 前往横店</h4>
                      <p className="text-xs text-gray-600">舒适大巴，约1.5小时车程</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <Camera className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">10:00 明清宫苑</h4>
                      <p className="text-xs text-gray-600">体验古装拍摄，观看表演</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <Star className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">15:00 秦王宫</h4>
                      <p className="text-xs text-gray-600">参观宏伟建筑群</p>
                    </div>
                  </div>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-sm mb-2">特色体验</h5>
                  <p className="text-sm text-gray-700">免费古装体验拍照，专业摄影师服务</p>
                </div>
              </CardContent>
            </Card>

            {/* Day 3 */}
            <Card className="border-l-4 border-l-amber-600">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Badge variant="outline" className="mr-3">
                    第3天
                  </Badge>
                  文化体验 - 温馨送别
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <Star className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">09:00 文化工坊</h4>
                      <p className="text-xs text-gray-600">亲手制作传统手工艺品</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <Utensils className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">12:00 告别午餐</h4>
                      <p className="text-xs text-gray-600">特色农家菜体验</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <Car className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">14:00 送机服务</h4>
                      <p className="text-xs text-gray-600">专车送至机场或车站</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing & Booking */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>价格包含</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-green-500 mr-2" />
                    全程四星级酒店住宿
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-green-500 mr-2" />
                    专业导游全程陪同
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-green-500 mr-2" />
                    所有景点门票
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-green-500 mr-2" />
                    接送机服务
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-green-500 mr-2" />
                    旅游意外保险
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-green-500 mr-2" />
                    6餐（3早3正）
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="lg:col-span-2">
              <PayPalCheckout
                amount="288.80"
                currency="USD"
                planName="3天经典中华文化之旅"
                planDetails={[
                  "义乌国际商贸城 + 横店影视城",
                  "四星级酒店住宿（2晚）",
                  "专业导游全程陪同",
                  "所有景点门票",
                  "接送机服务",
                  "旅游意外保险",
                  "6餐（3早3正）"
                ]}
                onSuccess={handlePaymentSuccess}
                onError={handlePaymentError}
                onCancel={handlePaymentCancel}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
