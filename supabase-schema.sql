-- 创建博客文章表
CREATE TABLE IF NOT EXISTS blog_posts (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  author VARCHAR(100) NOT NULL,
  category VARCHAR(50) NOT NULL,
  image TEXT,
  tags TEXT[] DEFAULT '{}',
  published BOOLEAN DEFAULT false,
  seo_title VARCHAR(255),
  seo_description TEXT,
  seo_keywords TEXT,
  views INTEGER DEFAULT 0,
  likes INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建博客分类表
CREATE TABLE IF NOT EXISTS blog_categories (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 插入默认分类
INSERT INTO blog_categories (id, name, description) VALUES
('destination', '目的地攻略', '各地旅行攻略和景点介绍'),
('family', '亲子旅行', '家庭旅行指南和亲子活动'),
('culture', '文化体验', '中华文化体验和传统文化分享'),
('photography', '摄影攻略', '旅行摄影技巧和拍摄指南'),
('food', '美食攻略', '当地美食推荐和餐厅指南'),
('tips', '旅行贴士', '实用旅行建议和注意事项')
ON CONFLICT (id) DO NOTHING;

-- 创建订单表
CREATE TABLE IF NOT EXISTS orders (
  id BIGSERIAL PRIMARY KEY,
  order_number VARCHAR(50) UNIQUE NOT NULL,
  plan_type VARCHAR(50) NOT NULL,
  plan_name VARCHAR(255) NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'USD',
  customer_name VARCHAR(100),
  customer_email VARCHAR(255),
  customer_phone VARCHAR(20),
  travelers INTEGER DEFAULT 1,
  travel_date DATE,
  special_requests TEXT,
  payment_status VARCHAR(20) DEFAULT 'pending',
  payment_id VARCHAR(255),
  paypal_order_id VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建存储桶（需要在 Supabase 控制台中手动创建）
-- 1. 进入 Supabase 项目控制台
-- 2. 点击 Storage
-- 3. 创建新的 bucket 名为 'blog-images'
-- 4. 设置为 public bucket
-- 5. 配置 RLS 策略允许上传和读取

-- 创建 RLS 策略
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- 博客文章的 RLS 策略
CREATE POLICY "Anyone can view published blog posts" ON blog_posts
  FOR SELECT USING (published = true);

CREATE POLICY "Anyone can view all blog posts" ON blog_posts
  FOR SELECT USING (true);

CREATE POLICY "Anyone can insert blog posts" ON blog_posts
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can update blog posts" ON blog_posts
  FOR UPDATE USING (true);

CREATE POLICY "Anyone can delete blog posts" ON blog_posts
  FOR DELETE USING (true);

-- 博客分类的 RLS 策略
CREATE POLICY "Anyone can view blog categories" ON blog_categories
  FOR SELECT USING (true);

-- 订单的 RLS 策略
CREATE POLICY "Anyone can insert orders" ON orders
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can view orders" ON orders
  FOR SELECT USING (true);

CREATE POLICY "Anyone can update orders" ON orders
  FOR UPDATE USING (true);

-- 创建更新时间触发器函数
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 为表添加更新时间触发器
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON orders
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 创建视图统计
CREATE OR REPLACE VIEW blog_stats AS
SELECT 
  COUNT(*) as total_posts,
  COUNT(*) FILTER (WHERE published = true) as published_posts,
  COUNT(*) FILTER (WHERE published = false) as draft_posts,
  SUM(views) as total_views,
  SUM(likes) as total_likes
FROM blog_posts;

-- 创建分类统计视图
CREATE OR REPLACE VIEW category_stats AS
SELECT 
  bc.id,
  bc.name,
  bc.description,
  COUNT(bp.id) as post_count,
  SUM(bp.views) as total_views
FROM blog_categories bc
LEFT JOIN blog_posts bp ON bp.category = bc.id AND bp.published = true
GROUP BY bc.id, bc.name, bc.description;

-- 插入示例博客文章
INSERT INTO blog_posts (title, excerpt, content, author, category, tags, published, seo_title, seo_description, seo_keywords) VALUES
(
  '义乌国际商贸城深度探索：全球贸易的心脏',
  '走进世界最大的小商品批发市场，感受全球贸易的脉搏跳动，探索中国制造的奇迹...',
  '<h2>义乌：世界小商品之都</h2><p>义乌国际商贸城，这个被誉为"世界超市"的地方，每天都在上演着全球贸易的精彩故事。</p>',
  '李文华',
  'destination',
  ARRAY['义乌', '商贸', '购物', '文化体验'],
  true,
  '义乌国际商贸城旅游攻略 - 世界最大小商品市场探索指南',
  '详细介绍义乌国际商贸城的历史、规模、特色商品，为您的义乌之旅提供完整的攻略指南。',
  '义乌,国际商贸城,小商品市场,购物攻略,义乌旅游'
),
(
  '横店影视城亲子游攻略：让孩子爱上中华文化',
  '带着孩子穿越古今，在横店影视城体验不一样的历史文化之旅，寓教于乐的完美选择...',
  '<h2>横店影视城：中国好莱坞</h2><p>横店影视城是全球规模最大的影视拍摄基地，被誉为"中国好莱坞"。</p>',
  '王美丽',
  'family',
  ARRAY['横店', '亲子游', '影视', '教育'],
  true,
  '横店影视城亲子游攻略 - 家庭旅行完美选择',
  '横店影视城家庭游玩攻略，适合亲子的景点推荐，让孩子在游玩中学习中华文化。',
  '横店影视城,亲子游,家庭旅行,儿童教育,中华文化'
)
ON CONFLICT DO NOTHING;
