import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  MapPin, 
  Clock, 
  Users, 
  Star, 
  Camera, 
  Film, 
  Palette, 
  Crown,
  Sparkles,
  Heart,
  Phone,
  Mail,
  Calendar,
  Award
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export const metadata = {
  title: "Hengdian Film Studios - China's Hollywood | Ancient Costume Drama Experience",
  description: "Experience China's largest film studio at Hengdian. Dress in ancient costumes, watch live filming, and immerse yourself in Chinese cinema culture. Perfect for families and film enthusiasts.",
  keywords: "Hengdian Film Studios, China Hollywood, ancient costume, film tourism, Chinese cinema, family travel, cultural experience",
  openGraph: {
    title: "Hengdian Film Studios - Step Into Chinese Cinema",
    description: "Discover the magic of Chinese filmmaking at Hengdian Studios. Experience ancient costume photography and behind-the-scenes film production.",
    images: ["/hengdian-film-studios-movie-sets-traditional-chine.jpg"],
  },
}

export default function HengdianPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="absolute inset-0 bg-[url('/hengdian-film-studios-movie-sets-traditional-chine.jpg')] bg-cover bg-center opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <Badge className="bg-purple-600 text-white mb-4">
              <Film className="h-3 w-3 mr-1" />
              China's Hollywood
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Hengdian Film Studios
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Step into the magical world of Chinese cinema at the world's largest film studio. 
              Experience ancient dynasties, dress in imperial costumes, and witness the art of filmmaking firsthand.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-purple-600" />
                Hengdian Town, Zhejiang Province
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-purple-600" />
                1-2 Days Recommended
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-purple-600" />
                Family & Cultural Tourism
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/plans/3-day">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Book Film Experience
                </Button>
              </Link>
              <Link href="/planner">
                <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                  Plan Custom Visit
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
            <Card className="text-center border-purple-200">
              <CardContent className="p-6">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Film className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-2">40,000+</h3>
                <p className="text-sm text-gray-600">Films & TV Shows</p>
              </CardContent>
            </Card>
            <Card className="text-center border-purple-200">
              <CardContent className="p-6">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-2">13</h3>
                <p className="text-sm text-gray-600">Film Sets</p>
              </CardContent>
            </Card>
            <Card className="text-center border-purple-200">
              <CardContent className="p-6">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-2">365</h3>
                <p className="text-sm text-gray-600">Filming Days/Year</p>
              </CardContent>
            </Card>
            <Card className="text-center border-purple-200">
              <CardContent className="p-6">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-2">20M+</h3>
                <p className="text-sm text-gray-600">Annual Visitors</p>
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">China's Cinematic Wonderland</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Welcome to Hengdian Film Studios, the world's largest film studio complex and China's answer to Hollywood. 
                      Since 1996, this extraordinary destination has been the backdrop for countless Chinese historical dramas, 
                      martial arts films, and contemporary productions that have captivated audiences worldwide.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      More than just a film studio, Hengdian is a living museum of Chinese culture and history. Here, 
                      ancient palaces, traditional streets, and imperial gardens have been meticulously recreated, 
                      offering visitors an immersive journey through China's rich cultural heritage.
                    </p>
                    <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600 my-8">
                      <h4 className="font-semibold text-purple-900 mb-2">🎬 Film Magic</h4>
                      <p className="text-purple-800">
                        On any given day, you might witness the filming of 3-5 different productions simultaneously, 
                        from epic historical dramas to modern romantic comedies!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Film Sets */}
              <Card className="bg-white">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Iconic Film Sets to Explore</h2>
                  <div className="space-y-6">
                    <div className="border-l-4 border-purple-600 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Forbidden City Replica</h3>
                      <p className="text-gray-700">
                        A stunning 1:1 scale replica of Beijing's Forbidden City, featuring authentic Ming and Qing 
                        dynasty architecture. Walk through the same halls where emperors once ruled.
                      </p>
                    </div>
                    <div className="border-l-4 border-red-600 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Qin Palace</h3>
                      <p className="text-gray-700">
                        Experience the grandeur of China's first unified dynasty with this magnificent recreation 
                        of the Qin Emperor's palace, complete with terracotta warrior displays.
                      </p>
                    </div>
                    <div className="border-l-4 border-gold-600 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Ming & Qing Palace</h3>
                      <p className="text-gray-700">
                        Step into the opulent world of imperial China with authentic palace courtyards, 
                        throne rooms, and royal gardens that have hosted countless period dramas.
                      </p>
                    </div>
                    <div className="border-l-4 border-green-600 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Riverside Scene at Qingming Festival</h3>
                      <p className="text-gray-700">
                        Based on the famous Song dynasty painting, this set recreates ancient Chinese street life 
                        with traditional shops, tea houses, and bustling marketplaces.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Experiences */}
              <Card className="bg-white">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Unique Cultural Experiences</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-purple-100 p-2 rounded-full">
                          <Crown className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Imperial Costume Photography</h4>
                          <p className="text-sm text-gray-600">
                            Transform into ancient Chinese royalty with authentic period costumes and professional 
                            photography sessions in palace settings.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-purple-100 p-2 rounded-full">
                          <Film className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Behind-the-Scenes Tours</h4>
                          <p className="text-sm text-gray-600">
                            Witness live filming sessions and learn about Chinese cinematography techniques 
                            from industry professionals.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-purple-100 p-2 rounded-full">
                          <Palette className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Traditional Arts Workshop</h4>
                          <p className="text-sm text-gray-600">
                            Learn calligraphy, paper cutting, and other traditional Chinese arts in authentic 
                            historical settings.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-purple-100 p-2 rounded-full">
                          <Sparkles className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Cultural Performances</h4>
                          <p className="text-sm text-gray-600">
                            Enjoy daily performances of traditional Chinese opera, martial arts demonstrations, 
                            and imperial ceremonies.
                          </p>
                        </div>
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
                    <Clock className="h-5 w-5 mr-2 text-purple-600" />
                    Visit Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Opening Hours</h4>
                    <p className="text-sm text-gray-600">Daily: 8:00 AM - 5:00 PM</p>
                    <p className="text-sm text-gray-600">Night Shows: 7:00 PM - 9:00 PM</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Best Time to Visit</h4>
                    <p className="text-sm text-gray-600">Spring & Autumn for comfortable weather</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Recommended Duration</h4>
                    <p className="text-sm text-gray-600">Full day or 2 days for all sets</p>
                  </div>
                </CardContent>
              </Card>

              {/* Special Experiences */}
              <Card>
                <CardHeader>
                  <CardTitle>Special Experiences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Crown className="h-4 w-4 text-purple-600" />
                    <span className="text-sm">Emperor/Empress Photo Shoot</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Film className="h-4 w-4 text-purple-600" />
                    <span className="text-sm">Movie Extra Experience</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Palette className="h-4 w-4 text-purple-600" />
                    <span className="text-sm">Traditional Arts Classes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart className="h-4 w-4 text-purple-600" />
                    <span className="text-sm">Family-Friendly Activities</span>
                  </div>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card className="bg-purple-50 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-900">Book Your Film Adventure</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-purple-800">
                    Ready to step into the world of Chinese cinema?
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-purple-700">
                      <Phone className="h-4 w-4" />
                      <span>+86-400-123-4567</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-purple-700">
                      <Mail className="h-4 w-4" />
                      <span>film@chinajourney.com</span>
                    </div>
                  </div>
                  <Link href="/plans/custom">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Plan Your Visit
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
