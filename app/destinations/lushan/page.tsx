import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  MapPin, 
  Clock, 
  Users, 
  Star, 
  Mountain, 
  Camera, 
  Sunrise, 
  TreePine,
  Droplets,
  Book,
  Phone,
  Mail,
  Calendar,
  Award,
  Heart
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export const metadata = {
  title: "Lushan Mountain - UNESCO World Heritage Natural Wonder | China Cultural Tourism",
  description: "Explore Lushan Mountain, a UNESCO World Heritage site featuring stunning waterfalls, ancient temples, and poetic landscapes. Experience China's natural beauty and cultural heritage.",
  keywords: "Lushan Mountain, UNESCO World Heritage, China mountains, natural scenery, waterfalls, temples, poetry culture, hiking, nature tourism",
  openGraph: {
    title: "Lushan Mountain - Poetic Natural Wonder",
    description: "Discover the breathtaking beauty of Lushan Mountain, where nature meets culture in perfect harmony. Experience waterfalls, temples, and poetic landscapes.",
    images: ["/lushan-mountain-scenic-natural-landscape-waterfall.jpg"],
  },
}

export default function LushanPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="absolute inset-0 bg-[url('/lushan-mountain-scenic-natural-landscape-waterfall.jpg')] bg-cover bg-center opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <Badge className="bg-green-600 text-white mb-4">
              <Mountain className="h-3 w-3 mr-1" />
              UNESCO World Heritage
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Lushan Mountain
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Discover the poetic beauty of Lushan Mountain, where misty peaks, cascading waterfalls, and ancient temples 
              create a landscape that has inspired Chinese poets and artists for over 2,000 years.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-green-600" />
                Lushan County, Jiangxi Province
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-green-600" />
                1-2 Days Recommended
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-green-600" />
                Nature & Cultural Tourism
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/plans/3-day">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Book Mountain Experience
                </Button>
              </Link>
              <Link href="/planner">
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Plan Custom Hiking
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
            <Card className="text-center border-green-200">
              <CardContent className="p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mountain className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-2">1,474m</h3>
                <p className="text-sm text-gray-600">Highest Peak</p>
              </CardContent>
            </Card>
            <Card className="text-center border-green-200">
              <CardContent className="p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-2">22</h3>
                <p className="text-sm text-gray-600">Waterfalls</p>
              </CardContent>
            </Card>
            <Card className="text-center border-green-200">
              <CardContent className="p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TreePine className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-2">2000+</h3>
                <p className="text-sm text-gray-600">Years of History</p>
              </CardContent>
            </Card>
            <Card className="text-center border-green-200">
              <CardContent className="p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-green-600" />
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">A Poetic Landscape of Natural Wonder</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Welcome to Lushan Mountain, one of China's most celebrated natural and cultural landmarks. This UNESCO 
                      World Heritage site has been captivating visitors for over two millennia with its ethereal beauty, 
                      where mist-shrouded peaks, thundering waterfalls, and ancient temples create a landscape of pure poetry.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Known as the "Immortal's Residence" in Chinese literature, Lushan has inspired countless poets, 
                      scholars, and artists throughout history. The mountain's ever-changing moods - from sunrise golden 
                      glows to mysterious evening mists - offer a different experience with each visit.
                    </p>
                    <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600 my-8">
                      <h4 className="font-semibold text-green-900 mb-2">🏔️ Literary Heritage</h4>
                      <p className="text-green-800">
                        Over 4,000 poems have been written about Lushan Mountain, including the famous verse by Li Bai: 
                        "I do not know the true face of Mount Lu, only because I am in this mountain."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Natural Attractions */}
              <Card className="bg-white">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Natural Wonders to Explore</h2>
                  <div className="space-y-6">
                    <div className="border-l-4 border-green-600 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Sandie Spring Waterfall</h3>
                      <p className="text-gray-700">
                        The crown jewel of Lushan's waterfalls, cascading 155 meters in three magnificent tiers. 
                        The thunderous roar and misty spray create a truly awe-inspiring natural spectacle.
                      </p>
                    </div>
                    <div className="border-l-4 border-blue-600 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Hanpo Mouth Sunrise</h3>
                      <p className="text-gray-700">
                        Witness one of China's most spectacular sunrises from this famous viewpoint, where the first 
                        rays of dawn illuminate the surrounding peaks in golden splendor.
                      </p>
                    </div>
                    <div className="border-l-4 border-purple-600 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Five Old Men Peaks</h3>
                      <p className="text-gray-700">
                        Five distinctive peaks that resemble elderly sages in meditation, offering panoramic views 
                        of the surrounding landscape and Poyang Lake in the distance.
                      </p>
                    </div>
                    <div className="border-l-4 border-orange-600 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Flower Path</h3>
                      <p className="text-gray-700">
                        A scenic walking trail lined with seasonal flowers, leading to the famous White Deer Cave 
                        Academy, one of China's four great ancient academies.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Cultural Experiences */}
              <Card className="bg-white">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Cultural & Spiritual Experiences</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-green-100 p-2 rounded-full">
                          <Book className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Poetry Recitation</h4>
                          <p className="text-sm text-gray-600">
                            Join guided sessions where you'll learn and recite classical Chinese poems inspired 
                            by Lushan's beauty, connecting with centuries of literary tradition.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-green-100 p-2 rounded-full">
                          <TreePine className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Temple Meditation</h4>
                          <p className="text-sm text-gray-600">
                            Experience tranquility at ancient Buddhist and Taoist temples nestled among the peaks, 
                            participating in meditation sessions and tea ceremonies.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-green-100 p-2 rounded-full">
                          <Camera className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Photography Workshops</h4>
                          <p className="text-sm text-gray-600">
                            Learn to capture Lushan's ethereal beauty with professional photography guides who 
                            know the best viewpoints and optimal lighting conditions.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-green-100 p-2 rounded-full">
                          <Sunrise className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Sunrise Hiking</h4>
                          <p className="text-sm text-gray-600">
                            Join early morning hikes to witness spectacular sunrises from various peaks, 
                            experiencing the mountain's mystical atmosphere at dawn.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Hiking Tips */}
              <Card className="bg-white">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Hiking & Visiting Tips</h2>
                  <div className="space-y-6">
                    <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                      <h4 className="font-semibold text-yellow-900 mb-2">🌤️ Weather Tip</h4>
                      <p className="text-yellow-800">
                        Lushan's weather can change rapidly. Bring layers and rain gear even on sunny days. 
                        The mountain creates its own microclimate with frequent mists and sudden showers.
                      </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Best Hiking Routes</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• Sandie Spring Trail (2-3 hours)</li>
                          <li>• Five Old Men Peaks Circuit (4-5 hours)</li>
                          <li>• Flower Path to White Deer Cave (1-2 hours)</li>
                          <li>• Hanpo Mouth Sunrise Hike (1 hour)</li>
                          <li>• Complete Mountain Circuit (2 days)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">What to Pack</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• Sturdy hiking boots with good grip</li>
                          <li>• Waterproof jacket and pants</li>
                          <li>• Warm layers for elevation changes</li>
                          <li>• Camera with extra batteries</li>
                          <li>• Water and energy snacks</li>
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
                    <Clock className="h-5 w-5 mr-2 text-green-600" />
                    Visit Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Park Hours</h4>
                    <p className="text-sm text-gray-600">Daily: 6:00 AM - 6:00 PM</p>
                    <p className="text-sm text-gray-600">Sunrise Tours: 4:30 AM start</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Best Seasons</h4>
                    <p className="text-sm text-gray-600">Spring (Mar-May) & Autumn (Sep-Nov)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Recommended Duration</h4>
                    <p className="text-sm text-gray-600">1-2 days for comprehensive visit</p>
                  </div>
                </CardContent>
              </Card>

              {/* Activities */}
              <Card>
                <CardHeader>
                  <CardTitle>Mountain Activities</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Mountain className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Guided Hiking Tours</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Sunrise className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Sunrise Viewing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Camera className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Photography Tours</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Book className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Cultural Workshops</span>
                  </div>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-900">Plan Your Mountain Adventure</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-green-800">
                    Ready to explore China's most poetic mountain?
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-green-700">
                      <Phone className="h-4 w-4" />
                      <span>+86-400-123-4567</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-green-700">
                      <Mail className="h-4 w-4" />
                      <span>mountain@chinajourney.com</span>
                    </div>
                  </div>
                  <Link href="/plans/custom">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Plan Your Hike
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
