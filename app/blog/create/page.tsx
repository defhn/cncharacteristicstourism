"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Badge } from '@/components/ui/badge'
import RichTextEditor from '@/components/rich-text-editor'
import { createBlogPost, uploadImage } from '@/lib/supabase'
import { ArrowLeft, Save, Eye, Upload, X } from 'lucide-react'
import Link from 'next/link'
import { useDropzone } from 'react-dropzone'
import Image from 'next/image'

const categories = [
  { value: 'destination', label: '目的地攻略' },
  { value: 'family', label: '亲子旅行' },
  { value: 'culture', label: '文化体验' },
  { value: 'photography', label: '摄影攻略' },
  { value: 'food', label: '美食攻略' },
  { value: 'tips', label: '旅行贴士' },
]

export default function CreateBlogPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [featuredImage, setFeaturedImage] = useState<string>('')
  const [isUploadingImage, setIsUploadingImage] = useState(false)
  
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    category: '',
    tags: [] as string[],
    published: false,
    seo_title: '',
    seo_description: '',
    seo_keywords: '',
  })

  const [currentTag, setCurrentTag] = useState('')

  const onDrop = async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (file) {
      setIsUploadingImage(true)
      try {
        const url = await uploadImage(file)
        if (url) {
          setFeaturedImage(url)
        }
      } catch (error) {
        console.error('Error uploading featured image:', error)
      } finally {
        setIsUploadingImage(false)
      }
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp']
    },
    maxFiles: 1
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const addTag = () => {
    if (currentTag.trim() && !formData.tags.includes(currentTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, currentTag.trim()]
      }))
      setCurrentTag('')
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }))
  }

  const handleSubmit = async (isDraft: boolean = false) => {
    if (!formData.title || !formData.content || !formData.author || !formData.category) {
      alert('请填写必填字段：标题、内容、作者、分类')
      return
    }

    setIsLoading(true)
    try {
      const postData = {
        ...formData,
        image: featuredImage,
        published: isDraft ? false : formData.published,
      }

      const result = await createBlogPost(postData)
      if (result) {
        router.push('/blog')
      } else {
        alert('发布失败，请重试')
      }
    } catch (error) {
      console.error('Error creating blog post:', error)
      alert('发布失败，请重试')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/blog" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5 text-amber-600" />
              <span className="text-amber-600 hover:text-amber-700">返回博客</span>
            </Link>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900">写博客</span>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                onClick={() => handleSubmit(true)}
                disabled={isLoading}
              >
                <Save className="h-4 w-4 mr-2" />
                保存草稿
              </Button>
              <Button
                onClick={() => handleSubmit(false)}
                disabled={isLoading}
                className="bg-amber-600 hover:bg-amber-700"
              >
                <Eye className="h-4 w-4 mr-2" />
                {isLoading ? '发布中...' : '发布文章'}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* 主要内容区域 */}
          <div className="lg:col-span-2 space-y-6">
            {/* 基本信息 */}
            <Card>
              <CardHeader>
                <CardTitle>基本信息</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title">文章标题 *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    placeholder="输入文章标题..."
                  />
                </div>

                <div>
                  <Label htmlFor="excerpt">文章摘要 *</Label>
                  <Textarea
                    id="excerpt"
                    value={formData.excerpt}
                    onChange={(e) => handleInputChange('excerpt', e.target.value)}
                    placeholder="输入文章摘要，用于在列表页显示..."
                    rows={3}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="author">作者 *</Label>
                    <Input
                      id="author"
                      value={formData.author}
                      onChange={(e) => handleInputChange('author', e.target.value)}
                      placeholder="作者姓名"
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">分类 *</Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="选择分类" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.value} value={category.value}>
                            {category.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 特色图片 */}
            <Card>
              <CardHeader>
                <CardTitle>特色图片</CardTitle>
              </CardHeader>
              <CardContent>
                {featuredImage ? (
                  <div className="relative">
                    <Image
                      src={featuredImage}
                      alt="Featured image"
                      width={600}
                      height={300}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <Button
                      variant="destructive"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={() => setFeaturedImage('')}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <div
                    {...getRootProps()}
                    className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                      isDragActive ? 'border-amber-500 bg-amber-50' : 'border-gray-300 hover:border-amber-400'
                    }`}
                  >
                    <input {...getInputProps()} />
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    {isUploadingImage ? (
                      <p className="text-gray-600">上传中...</p>
                    ) : (
                      <>
                        <p className="text-gray-600 mb-2">拖拽图片到这里或点击上传</p>
                        <p className="text-sm text-gray-500">支持 JPG, PNG, GIF, WebP 格式</p>
                      </>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 文章内容 */}
            <Card>
              <CardHeader>
                <CardTitle>文章内容 *</CardTitle>
              </CardHeader>
              <CardContent>
                <RichTextEditor
                  content={formData.content}
                  onChange={(content) => handleInputChange('content', content)}
                  placeholder="开始写作..."
                />
              </CardContent>
            </Card>
          </div>

          {/* 侧边栏 */}
          <div className="space-y-6">
            {/* 发布设置 */}
            <Card>
              <CardHeader>
                <CardTitle>发布设置</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="published">立即发布</Label>
                  <Switch
                    id="published"
                    checked={formData.published}
                    onCheckedChange={(checked) => handleInputChange('published', checked)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* 标签 */}
            <Card>
              <CardHeader>
                <CardTitle>标签</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-2">
                  <Input
                    value={currentTag}
                    onChange={(e) => setCurrentTag(e.target.value)}
                    placeholder="添加标签"
                    onKeyPress={(e) => e.key === 'Enter' && addTag()}
                  />
                  <Button onClick={addTag} size="sm">
                    添加
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="cursor-pointer" onClick={() => removeTag(tag)}>
                      {tag} <X className="h-3 w-3 ml-1" />
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* SEO 设置 */}
            <Card>
              <CardHeader>
                <CardTitle>SEO 设置</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="seo_title">SEO 标题</Label>
                  <Input
                    id="seo_title"
                    value={formData.seo_title}
                    onChange={(e) => handleInputChange('seo_title', e.target.value)}
                    placeholder="SEO 标题（留空则使用文章标题）"
                  />
                </div>
                <div>
                  <Label htmlFor="seo_description">SEO 描述</Label>
                  <Textarea
                    id="seo_description"
                    value={formData.seo_description}
                    onChange={(e) => handleInputChange('seo_description', e.target.value)}
                    placeholder="SEO 描述（留空则使用文章摘要）"
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="seo_keywords">SEO 关键词</Label>
                  <Input
                    id="seo_keywords"
                    value={formData.seo_keywords}
                    onChange={(e) => handleInputChange('seo_keywords', e.target.value)}
                    placeholder="关键词，用逗号分隔"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
