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
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-r from-amber-50 to-red-50">
        <div className="absolute inset-0 bg-[url('/chinese-traditional-architecture-with-mountains.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <Badge className="bg-amber-600 text-white mb-4">
              <Heart className="h-3 w-3 mr-1" />
              Exclusive Customization
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Create Your Exclusive Chinese Cultural Journey</h1>
            <p className="text-lg text-gray-700">
              Tell us your needs and preferences, our professional team will customize a unique travel experience for you
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
                  <CardTitle>Customize Your Exclusive Journey</CardTitle>
                  <p className="text-gray-600">Please fill in the following information, we will contact you within 24 hours</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Basic Info */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" placeholder="Please enter your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Contact Phone *</Label>
                      <Input id="phone" placeholder="Please enter your phone number" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Please enter your email address" />
                  </div>

                  {/* Travel Details */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="travelers">Number of Travelers *</Label>
                      <Input id="travelers" placeholder="e.g.: 2 adults 1 child" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="duration">Travel Duration *</Label>
                      <Input id="duration" placeholder="e.g.: 5 days 4 nights" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Input id="budget" placeholder="e.g.: $500-800 per person" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="start-date">Departure Date</Label>
                      <Input id="start-date" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="departure">Departure City</Label>
                      <Input id="departure" placeholder="e.g.: Beijing" />
                    </div>
                  </div>

                  {/* Destination Preferences */}
                  <div className="space-y-4">
                    <Label>Interested Destinations (Multiple Selection)</Label>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="yiwu" />
                        <Label htmlFor="yiwu" className="flex items-center">
                          <Building2 className="h-4 w-4 mr-2 text-amber-600" />
                          Yiwu International Trade City
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="hengdian" />
                        <Label htmlFor="hengdian" className="flex items-center">
                          <Camera className="h-4 w-4 mr-2 text-amber-600" />
                          Hengdian Film Studios
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="jingdezhen" />
                        <Label htmlFor="jingdezhen" className="flex items-center">
                          <Palette className="h-4 w-4 mr-2 text-amber-600" />
                          Jingdezhen Porcelain Capital
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="lushan" />
                        <Label htmlFor="lushan" className="flex items-center">
                          <Mountain className="h-4 w-4 mr-2 text-amber-600" />
                          Lushan Scenic Area
                        </Label>
                      </div>
                    </div>
                  </div>

                  {/* Travel Style */}
                  <div className="space-y-4">
                    <Label>Travel Style Preferences (Multiple Selection)</Label>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="cultural" />
                        <Label htmlFor="cultural">Cultural In-depth Experience</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="family" />
                        <Label htmlFor="family">Family Travel with Children</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="luxury" />
                        <Label htmlFor="luxury">Luxury Premium Experience</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="photography" />
                        <Label htmlFor="photography">Photography Theme Tour</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="handicraft" />
                        <Label htmlFor="handicraft">Handicraft Experience</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="nature" />
                        <Label htmlFor="nature">Natural Scenery Tour</Label>
                      </div>
                    </div>
                  </div>

                  {/* Special Requirements */}
                  <div className="space-y-2">
                    <Label htmlFor="requirements">Special Requirements or Preferences</Label>
                    <Textarea
                      id="requirements"
                      placeholder="Please tell us your special requirements, such as dietary preferences, accommodation requirements, transportation methods, special experiences, etc..."
                      rows={4}
                    />
                  </div>

                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white" size="lg">
                    Submit Customization Request
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Customization Service Process</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-100 text-amber-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Submit Requirements</h4>
                      <p className="text-xs text-gray-600">Fill out the customization form, tell us your ideas</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-100 text-amber-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Professional Consultation</h4>
                      <p className="text-xs text-gray-600">Professional advisor contacts you within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-100 text-amber-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Plan Design</h4>
                      <p className="text-xs text-gray-600">Tailor-made exclusive travel plan</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-100 text-amber-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Confirm Travel</h4>
                      <p className="text-xs text-gray-600">Confirm itinerary, start wonderful journey</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Why Choose Customization</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-amber-500" />
                    <span className="text-sm">Completely personalized itinerary</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-amber-500" />
                    <span className="text-sm">Dedicated travel advisor</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-amber-500" />
                    <span className="text-sm">Flexible time arrangement</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-amber-500" />
                    <span className="text-sm">Unique cultural experience</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-amber-500" />
                    <span className="text-sm">24-hour caring service</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-amber-50 border-amber-200">
                <CardContent className="p-4 text-center">
                  <h4 className="font-semibold text-amber-800 mb-2">Need Help?</h4>
                  <p className="text-sm text-amber-700 mb-3">Our professional advisors are always at your service</p>
                  <div className="space-y-2 text-sm text-amber-700">
                    <div>Hotline: +86-400-123-4567</div>
                    <div>WhatsApp: +86-138-0013-8000</div>
                    <div>Working Hours: 9:00-21:00 (GMT+8)</div>
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
