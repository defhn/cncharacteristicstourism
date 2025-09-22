import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  MapPin, 
  Clock, 
  Users, 
  Star, 
  Palette, 
  Award, 
  Sparkles, 
  Heart,
  Camera,
  Gift,
  Phone,
  Mail,
  Calendar,
  Brush
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export const metadata = {
  title: "Jingdezhen Porcelain Capital - Millennium Ceramic Art Experience | China Cultural Tourism",
  description: "Discover Jingdezhen, China's porcelain capital with 1000+ years of ceramic heritage. Experience hands-on pottery making, visit master workshops, and create your own ceramic masterpiece.",
  keywords: "Jingdezhen porcelain, ceramic art, pottery making, China ceramics, cultural workshop, traditional crafts, art tourism",
  openGraph: {
    title: "Jingdezhen Porcelain Capital - Ceramic Art Experience",
    description: "Experience the art of Chinese porcelain making in the world's ceramic capital. Learn from masters and create your own ceramic treasures.",
    images: ["/jingdezhen-porcelain-pottery-traditional-chinese-c.jpg"],
  },
}

export default function JingdezhenPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-teal-50 to-cyan-50">
        <div className="absolute inset-0 bg-[url('/jingdezhen-porcelain-pottery-traditional-chinese-c.jpg')] bg-cover bg-center opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <Badge className="bg-teal-600 text-white mb-4">
              <Palette className="h-3 w-3 mr-1" />
              Millennium Ceramic Capital
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Jingdezhen Porcelain Capital
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Journey to the birthplace of the world's finest porcelain. Experience over 1,000 years of ceramic artistry, 
              learn from master craftsmen, and create your own ceramic masterpiece in China's legendary porcelain capital.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-teal-600" />
                Jingdezhen City, Jiangxi Province
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-teal-600" />
                1-2 Days Recommended
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-teal-600" />
                Art & Cultural Tourism
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/plans/3-day">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                  Book Ceramic Experience
                </Button>
              </Link>
              <Link href="/planner">
                <Button size="lg" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                  Plan Custom Workshop
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center border-teal-200">
              <CardContent className="p-6">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-2">1000+</h3>
                <p className="text-sm text-gray-600">Years of Heritage</p>
              </CardContent>
            </Card>
            <Card className="text-center border-teal-200">
              <CardContent className="p-6">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-2">500+</h3>
                <p className="text-sm text-gray-600">Master Artisans</p>
              </CardContent>
            </Card>
            <Card className="text-center border-teal-200">
              <CardContent className="p-6">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-2">72</h3>
                <p className="text-sm text-gray-600">Traditional Techniques</p>
              </CardContent>
            </Card>
            <Card className="text-center border-teal-200">
              <CardContent className="p-6">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-2">UNESCO</h3>
                <p className="text-sm text-gray-600">World Heritage</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Article */}
            <div className="lg:col-span-2 space-y-8">
              {/* Introduction */}
              <Card className="bg-white">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Porcelain Capital of the World</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Welcome to Jingdezhen, the legendary "Porcelain Capital" that has been creating the world's finest 
                      ceramics for over a millennium. This ancient city in Jiangxi Province is where the art of porcelain 
                      making reached its pinnacle, producing treasures that graced imperial palaces and traveled the Silk Road.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Today, Jingdezhen continues to be a living museum of ceramic artistry, where traditional techniques 
                      passed down through generations meet contemporary innovation. Here, you can witness master craftsmen 
                      at work, learn the ancient secrets of porcelain making, and create your own ceramic masterpiece.
                    </p>
                    <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-600 my-8">
                      <h4 className="font-semibold text-teal-900 mb-2">🏺 Cultural Heritage</h4>
                      <p className="text-teal-800">
                        Jingdezhen porcelain was so prized that it gave its name to the entire country - "China" 
                        literally means "porcelain" in many languages!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Ceramic Experiences */}
              <Card className="bg-white">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Hands-On Ceramic Experiences</h2>
                  <div className="space-y-6">
                    <div className="border-l-4 border-teal-600 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Master Craftsman Workshop</h3>
                      <p className="text-gray-700">
                        Learn directly from national-level ceramic masters who will guide you through the traditional 
                        72-step process of creating authentic Jingdezhen porcelain.
                      </p>
                    </div>
                    <div className="border-l-4 border-blue-600 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Pottery Wheel Experience</h3>
                      <p className="text-gray-700">
                        Try your hand at the potter's wheel and experience the meditative art of shaping clay into 
                        beautiful vessels using techniques unchanged for centuries.
                      </p>
                    </div>
                    <div className="border-l-4 border-green-600 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Glazing & Painting Workshop</h3>
                      <p className="text-gray-700">
                        Discover the secrets of Jingdezhen's famous blue and white porcelain, learning traditional 
                        painting techniques and glazing methods.
                      </p>
                    </div>
                    <div className="border-l-4 border-purple-600 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Kiln Firing Experience</h3>
                      <p className="text-gray-700">
                        Witness the magical transformation as your creations are fired in traditional kilns, 
                        completing the ancient ceramic-making process.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Cultural Sites */}
              <Card className="bg-white">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Must-Visit Cultural Sites</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-teal-100 p-2 rounded-full">
                          <Award className="h-5 w-5 text-teal-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Imperial Kiln Museum</h4>
                          <p className="text-sm text-gray-600">
                            Explore the world's most comprehensive collection of imperial porcelain and learn about 
                            the royal ceramic traditions.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-teal-100 p-2 rounded-full">
                          <Palette className="h-5 w-5 text-teal-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Ancient Kiln Folk Customs Museum</h4>
                          <p className="text-sm text-gray-600">
                            Step back in time to see how porcelain was made in ancient times, with working 
                            demonstrations of traditional techniques.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-teal-100 p-2 rounded-full">
                          <Brush className="h-5 w-5 text-teal-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Creative Market</h4>
                          <p className="text-sm text-gray-600">
                            Browse contemporary ceramic art from young artists who blend traditional techniques 
                            with modern designs.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-teal-100 p-2 rounded-full">
                          <Gift className="h-5 w-5 text-teal-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Porcelain Street</h4>
                          <p className="text-sm text-gray-600">
                            Shop for authentic Jingdezhen porcelain directly from artisan workshops and 
                            take home unique ceramic treasures.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Workshop Tips */}
              <Card className="bg-white">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Workshop Experience Tips</h2>
                  <div className="space-y-6">
                    <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                      <h4 className="font-semibold text-yellow-900 mb-2">💡 Pro Tip</h4>
                      <p className="text-yellow-800">
                        Book your ceramic workshop in advance, especially during peak seasons. Popular master classes 
                        can fill up quickly due to limited class sizes.
                      </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">What to Expect</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• 2-4 hour hands-on workshops</li>
                          <li>• All materials and tools provided</li>
                          <li>• English-speaking instructors available</li>
                          <li>• Take home your finished pieces</li>
                          <li>• Certificate of completion</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">What to Bring</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• Comfortable, old clothes</li>
                          <li>• Apron (usually provided)</li>
                          <li>• Camera for memorable moments</li>
                          <li>• Open mind and creativity</li>
                          <li>• Patience for the learning process</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Visit Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-teal-600" />
                    Visit Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Workshop Hours</h4>
                    <p className="text-sm text-gray-600">Daily: 9:00 AM - 5:00 PM</p>
                    <p className="text-sm text-gray-600">Evening Classes: 6:00 PM - 8:00 PM</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Best Time to Visit</h4>
                    <p className="text-sm text-gray-600">Spring & Autumn for ideal weather</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Recommended Duration</h4>
                    <p className="text-sm text-gray-600">1-2 days for full experience</p>
                  </div>
                </CardContent>
              </Card>

              {/* Workshop Types */}
              <Card>
                <CardHeader>
                  <CardTitle>Workshop Options</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Palette className="h-4 w-4 text-teal-600" />
                    <span className="text-sm">Beginner Pottery Class</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-teal-600" />
                    <span className="text-sm">Master Craftsman Session</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Brush className="h-4 w-4 text-teal-600" />
                    <span className="text-sm">Painting & Glazing Workshop</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart className="h-4 w-4 text-teal-600" />
                    <span className="text-sm">Family-Friendly Classes</span>
                  </div>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card className="bg-teal-50 border-teal-200">
                <CardHeader>
                  <CardTitle className="text-teal-900">Book Your Ceramic Journey</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-teal-800">
                    Ready to create your own porcelain masterpiece?
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-teal-700">
                      <Phone className="h-4 w-4" />
                      <span>+86-400-123-4567</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-teal-700">
                      <Mail className="h-4 w-4" />
                      <span>ceramic@chinajourney.com</span>
                    </div>
                  </div>
                  <Link href="/plans/custom">
                    <Button className="w-full bg-teal-600 hover:bg-teal-700">
                      Plan Your Workshop
                    </Button>
                  </Link>
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
