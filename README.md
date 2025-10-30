# AI工具大全网站

一个使用Eleventy构建的静态网站，展示精选的人工智能工具目录，包括文本生成、代码生成、图像生成、视频生成等工具。

## 项目特点

- ✨ **现代设计**: 响应式布局，美观的UI设计
- 🚀 **SEO优化**: 完整的meta标签、结构化数据、语义化HTML
- 📱 **移动友好**: 适配各种屏幕尺寸
- 🔍 **搜索功能**: 支持工具搜索和分类浏览
- 🏎️ **性能优化**: 图片懒加载、资源压缩、快速加载
- 🛠️ **易于维护**: 模块化结构，清晰的组织方式

## 本地开发

### 前提条件

- Node.js (v14或更高版本)
- npm或yarn

### 安装步骤

1. 克隆项目
```bash
git clone [repository-url]
cd ai-tools-website
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm start
```

4. 在浏览器中访问 `http://localhost:8080`

## 构建项目

运行以下命令生成生产版本的网站：

```bash
npm run build
```

构建后的文件将位于 `dist` 目录中。

## 部署到GitHub Pages

### 方法一：手动部署

1. 构建项目
```bash
npm run build
```

2. 将 `dist` 目录的内容复制到GitHub Pages的发布分支（通常是 `gh-pages`）

### 方法二：使用GitHub Actions自动部署

1. 创建 `.github/workflows/deploy.yml` 文件：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]  # 或者你的主分支名称

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. 将上述配置添加到仓库中

3. 推送更改到主分支

4. 在GitHub仓库的设置中，将GitHub Pages的源设置为 `gh-pages` 分支

## 项目结构

```
ai-tools-website/
├── .eleventy.js         # Eleventy配置文件
├── package.json         # 项目配置和依赖
├── src/                 # 源代码目录
│   ├── _includes/       # 模板文件
│   ├── css/             # 样式文件
│   ├── data/            # 数据文件
│   ├── img/             # 图片文件
│   ├── js/              # JavaScript文件
│   ├── tools/           # 工具分类页面
│   ├── index.md         # 首页
│   ├── search.md        # 搜索页面
│   └── 404.md           # 404页面
└── dist/                # 构建输出目录（自动生成）
```

## 添加新工具

要添加新的AI工具，请编辑对应的分类文件，位于 `src/tools/` 目录下，例如 `src/tools/text.md`。

工具的格式如下：

```yaml
- name: "工具名称"
  url: "工具官网链接"
  description: "工具描述"
  features: ["特性1", "特性2", "特性3"]
  price: "价格信息（可选）"
```

## 自定义配置

### 修改网站信息

编辑 `src/data/site.json` 文件，修改网站标题、描述、作者信息等。

### 修改样式

编辑 `src/css/style.css` 文件，可以自定义网站的样式。

## 贡献指南

欢迎贡献！请按照以下步骤进行：

1. Fork 项目
2. 创建你的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交你的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开一个 Pull Request

## 许可证

[MIT](https://choosealicense.com/licenses/mit/)