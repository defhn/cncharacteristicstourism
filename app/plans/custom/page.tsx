import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Star, Heart, Palette, Camera, Mountain, Building2 } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function CustomPlan() {
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
              <Palette className="h-6 w-6 text-amber-600" />
              <span className="text-xl font-bold text-gray-900">定制旅行计划</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-r from-amber-50 to-red-50">
        <div className="absolute inset-0 bg-[url('/chinese-traditional-architecture-with-mountains.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <Badge className="bg-amber-600 text-white mb-4">
              <Heart className="h-3 w-3 mr-1" />
              专属定制
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">打造您的专属中华文化之旅</h1>
            <p className="text-lg text-gray-700">
              告诉我们您的需求和偏好，我们的专业团队将为您量身定制独一无二的旅行体验
            </p>
          </div>
        </div>
      </section>

      {/* Custom Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>定制您的专属旅程</CardTitle>
                  <p className="text-gray-600">请填写以下信息，我们将在24小时内联系您</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Basic Info */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">姓名 *</Label>
                      <Input id="name" placeholder="请输入您的姓名" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">联系电话 *</Label>
                      <Input id="phone" placeholder="请输入您的手机号码" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">邮箱地址</Label>
                    <Input id="email" type="email" placeholder="请输入您的邮箱地址" />
                  </div>

                  {/* Travel Details */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="travelers">出行人数 *</Label>
                      <Input id="travelers" placeholder="例如：2大1小" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="duration">出行天数 *</Label>
                      <Input id="duration" placeholder="例如：5天4夜" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">预算范围</Label>
                      <Input id="budget" placeholder="例如：每人5000-8000元" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="start-date">出发日期</Label>
                      <Input id="start-date" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="departure">出发城市</Label>
                      <Input id="departure" placeholder="例如：北京" />
                    </div>
                  </div>

                  {/* Destination Preferences */}
                  <div className="space-y-4">
                    <Label>感兴趣的目的地 (可多选)</Label>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="yiwu" />
                        <Label htmlFor="yiwu" className="flex items-center">
                          <Building2 className="h-4 w-4 mr-2 text-amber-600" />
                          义乌国际商贸城
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="hengdian" />
                        <Label htmlFor="hengdian" className="flex items-center">
                          <Camera className="h-4 w-4 mr-2 text-amber-600" />
                          横店影视城
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="jingdezhen" />
                        <Label htmlFor="jingdezhen" className="flex items-center">
                          <Palette className="h-4 w-4 mr-2 text-amber-600" />
                          景德镇瓷都
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="lushan" />
                        <Label htmlFor="lushan" className="flex items-center">
                          <Mountain className="h-4 w-4 mr-2 text-amber-600" />
                          庐山风景区
                        </Label>
                      </div>
                    </div>
                  </div>

                  {/* Travel Style */}
                  <div className="space-y-4">
                    <Label>旅行风格偏好 (可多选)</Label>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="cultural" />
                        <Label htmlFor="cultural">文化深度体验</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="family" />
                        <Label htmlFor="family">亲子家庭游</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="luxury" />
                        <Label htmlFor="luxury">奢华高端体验</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="photography" />
                        <Label htmlFor="photography">摄影主题游</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="handicraft" />
                        <Label htmlFor="handicraft">手工艺体验</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="nature" />
                        <Label htmlFor="nature">自然风光游</Label>
                      </div>
                    </div>
                  </div>

                  {/* Special Requirements */}
                  <div className="space-y-2">
                    <Label htmlFor="requirements">特殊需求或偏好</Label>
                    <Textarea
                      id="requirements"
                      placeholder="请告诉我们您的特殊需求，如饮食偏好、住宿要求、交通方式、特殊体验等..."
                      rows={4}
                    />
                  </div>

                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white" size="lg">
                    提交定制需求
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">定制服务流程</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-100 text-amber-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">提交需求</h4>
                      <p className="text-xs text-gray-600">填写定制表单，告诉我们您的想法</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-100 text-amber-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">专业咨询</h4>
                      <p className="text-xs text-gray-600">24小时内专业顾问联系您</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-100 text-amber-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">方案设计</h4>
                      <p className="text-xs text-gray-600">量身定制专属旅行方案</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-100 text-amber-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">确认出行</h4>
                      <p className="text-xs text-gray-600">确认行程，开始美好旅程</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">为什么选择定制</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-amber-500" />
                    <span className="text-sm">完全个性化行程</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-amber-500" />
                    <span className="text-sm">专属旅行顾问</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-amber-500" />
                    <span className="text-sm">灵活时间安排</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-amber-500" />
                    <span className="text-sm">独特文化体验</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-amber-500" />
                    <span className="text-sm">24小时贴心服务</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-amber-50 border-amber-200">
                <CardContent className="p-4 text-center">
                  <h4 className="font-semibold text-amber-800 mb-2">需要帮助？</h4>
                  <p className="text-sm text-amber-700 mb-3">我们的专业顾问随时为您服务</p>
                  <div className="space-y-2 text-sm text-amber-700">
                    <div>咨询热线：400-123-4567</div>
                    <div>微信：ChinaJourney2024</div>
                    <div>工作时间：9:00-21:00</div>
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
