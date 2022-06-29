# react-todo

## 技术栈​
pnpm + typescript +vite + react+ antd生态​

Todo List Demo

## eslint 代码规范
pnpm i eslint -D 
npx eslint --init 

### husky 控制git的规范，
git commit代码之前，我们的代码必须要跑一便eslint 
npx husky install npx husky add .husky/pre-commit"
pnpm run lint" npx husky add .husky/commit-msg "node scripts/verifyCommit.js"

### git 管理代码

文件夹规范 src pages : 
 - 页面组件 components : 
 - 通用组件 apis: 数据请求相关的文件 （axios) 
 - utils 工具含数据 
 - assets 静态资源

### git log规范 husky来校验 
type: message 
type(module): message 
perf(reactvity): addxx

refactor: 代码重写 不影响功能 
chore: 构建
feat: 新功能 
fix: 改bug 
docs: 文档 
perf: 性能 
test: 测试 
style: 样式 
ci: 打包集成相关 
build: 部署 
release: 发版 
deps: 依赖更改