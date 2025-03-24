/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // 使用静态导出模式 (GitHub Pages 需要)
    distDir: 'out',    // 默认导出目录，GitHub Pages 只支持 `/out`
    images: {
        unoptimized: true // GitHub Pages 可能不支持 Next.js 图像优化功能
    },
    basePath: '/Jay-C1.github.io', // 设置为你的 GitHub Pages 仓库名
    assetPrefix: '/Jay-C1.github.io/' // 静态资源前缀
};

module.exports = nextConfig
