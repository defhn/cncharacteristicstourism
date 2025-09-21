# 中华之旅 - 中华特色旅游网站

一个基于 Next.js 14 构建的中华文化特色旅游网站，专注于为家庭提供中华文化深度体验的旅行服务。

## 🚀 新增功能

### ✅ 已完成功能

1. **博客系统**
   - 富文本编辑器（基于 TipTap）
   - 图片上传到 Supabase 存储
   - SEO 优化（标题、描述、关键词）
   - 博客发布和管理

2. **支付集成**
   - PayPal 支付集成
   - 订单管理系统
   - 支付状态跟踪

3. **安全更新**
   - 修复了 Next.js 安全漏洞
   - 更新到 Next.js 14.2.32

## 🛠️ 技术栈

- **前端**: Next.js 14, React 18, TypeScript
- **样式**: Tailwind CSS 4.1.9, shadcn/ui
- **数据库**: Supabase (PostgreSQL)
- **存储**: Supabase Storage
- **支付**: PayPal
- **富文本编辑**: TipTap
- **图标**: Lucide React

## 📦 安装和配置

### 1. 克隆项目

```bash
git clone <repository-url>
cd cncharacteristicstourism
```

### 2. 安装依赖

```bash
npm install
```

### 3. 环境变量配置

复制 `.env.local.example` 为 `.env.local` 并填入配置：

```env
# Supabase 配置
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# PayPal 配置
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_paypal_client_id

# 网站配置
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=中华之旅
```

### 4. Supabase 数据库设置

1. 在 Supabase 控制台创建新项目
2. 执行 `supabase-schema.sql` 中的 SQL 语句创建表结构
3. 在 Storage 中创建 `blog-images` bucket 并设置为 public
4. 配置 RLS 策略（已包含在 SQL 脚本中）

### 5. PayPal 配置

1. 在 [PayPal Developer](https://developer.paypal.com/) 创建应用
2. 获取 Client ID 并添加到环境变量
3. 配置 webhook（可选，用于订单状态更新）

### 6. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000

## 📝 使用指南

### 博客管理

1. **写博客**: 访问 `/blog/create` 页面
2. **富文本编辑**: 支持标题、列表、链接、图片等格式
3. **图片上传**: 拖拽或点击上传，自动保存到 Supabase
4. **SEO 设置**: 可自定义 SEO 标题、描述、关键词
5. **发布管理**: 支持草稿和发布状态

### 支付功能

1. **旅行计划**: 在旅行计划页面点击"立即预订"
2. **PayPal 支付**: 支持 PayPal 账户和信用卡支付
3. **订单跟踪**: 支付成功后生成订单记录

### 数据库结构

#### blog_posts 表
- `id`: 主键
- `title`: 文章标题
- `excerpt`: 文章摘要
- `content`: 文章内容（HTML）
- `author`: 作者
- `category`: 分类
- `image`: 特色图片 URL
- `tags`: 标签数组
- `published`: 发布状态
- `seo_title`: SEO 标题
- `seo_description`: SEO 描述
- `seo_keywords`: SEO 关键词
- `views`: 阅读次数
- `likes`: 点赞数
- `created_at`: 创建时间
- `updated_at`: 更新时间

#### orders 表
- `id`: 主键
- `order_number`: 订单号
- `plan_type`: 计划类型
- `plan_name`: 计划名称
- `amount`: 金额
- `currency`: 货币
- `customer_*`: 客户信息
- `payment_*`: 支付信息
- `created_at`: 创建时间

## 🔧 开发指南

### 添加新的博客分类

1. 在 `lib/supabase.ts` 中更新分类列表
2. 在数据库中插入新分类记录
3. 更新前端分类选择器

### 自定义富文本编辑器

编辑 `components/rich-text-editor.tsx`：
- 添加新的工具栏按钮
- 集成新的 TipTap 扩展
- 自定义样式和行为

### 添加新的支付方式

1. 安装相应的 SDK
2. 创建新的支付组件
3. 更新订单处理逻辑

## 🚨 故障排除

### 常见问题

1. **图片上传失败**
   - 检查 Supabase 配置
   - 确认 bucket 权限设置
   - 查看浏览器控制台错误

2. **PayPal 支付失败**
   - 验证 Client ID 配置
   - 检查网络连接
   - 确认 PayPal 账户状态

3. **博客页面 404**
   - 确认数据库连接
   - 检查文章 ID 是否存在
   - 查看服务器日志

### 调试技巧

```bash
# 查看构建错误
npm run build

# 检查类型错误
npx tsc --noEmit

# 查看 Supabase 连接
# 在浏览器控制台测试连接
```

## 📈 性能优化

1. **图片优化**: 使用 Next.js Image 组件
2. **代码分割**: 动态导入大型组件
3. **缓存策略**: 配置适当的缓存头
4. **SEO 优化**: 使用 next-seo 或内置 metadata

## 🔒 安全考虑

1. **RLS 策略**: 已配置 Supabase 行级安全
2. **输入验证**: 前端和后端都需要验证
3. **XSS 防护**: 富文本内容需要清理
4. **CSRF 保护**: 使用 Next.js 内置保护

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 支持

如有问题，请联系：
- 邮箱: info@chinajourney.com
- 电话: +86 400-123-4567
