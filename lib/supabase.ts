import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 图片上传函数
export async function uploadImage(file: File, bucket: string = 'blog-images'): Promise<string | null> {
  try {
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`
    
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(fileName, file)

    if (error) {
      console.error('Error uploading image:', error)
      return null
    }

    // 获取公共URL
    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(fileName)

    return publicUrl
  } catch (error) {
    console.error('Error uploading image:', error)
    return null
  }
}

// 博客文章数据库操作
export interface BlogPost {
  id?: number
  title: string
  excerpt: string
  content: string
  author: string
  category: string
  image?: string
  tags: string[]
  published: boolean
  seo_title?: string
  seo_description?: string
  seo_keywords?: string
  created_at?: string
  updated_at?: string
}

export async function createBlogPost(post: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>) {
  const { data, error } = await supabase
    .from('blog_posts')
    .insert([post])
    .select()

  if (error) {
    console.error('Error creating blog post:', error)
    return null
  }

  return data[0]
}

export async function updateBlogPost(id: number, post: Partial<BlogPost>) {
  const { data, error } = await supabase
    .from('blog_posts')
    .update(post)
    .eq('id', id)
    .select()

  if (error) {
    console.error('Error updating blog post:', error)
    return null
  }

  return data[0]
}

export async function getBlogPosts(published: boolean = true) {
  let query = supabase
    .from('blog_posts')
    .select('*')
    .order('created_at', { ascending: false })

  if (published) {
    query = query.eq('published', true)
  }

  const { data, error } = await query

  if (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }

  return data
}

// 别名函数，为了兼容性
export const getAllBlogPosts = getBlogPosts

export async function getBlogPost(id: number) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching blog post:', error)
    return null
  }

  return data
}

export async function deleteBlogPost(id: number) {
  const { error } = await supabase
    .from('blog_posts')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting blog post:', error)
    return false
  }

  return true
}
