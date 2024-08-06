# box-browser官网

## 项目介绍
海外项目

## 测试地址


## 正式地址



## 模板介绍

该项目为 SPA 应用模板，使用`viewprot`方案进行移动端兼容，使用时请复制项目中除`.git`文件夹之外的文件到项目目录，之后请自觉进入`packjson.json`中同步项目名称。

## 运行命令

首次进入：`pnpm install`

本地运行：`pnpm run dev`

本地打包：`pnpm run build:test` || `pnpm run build:prod`

格式化文档：`pnpm run format`

代码规范检查：`pnpm run lint`

全局类型检查：`pnpm run type-check`

## 提交规则

项目分支主要分为**main**以及**test**两个，分别对应线上及测试环境，所有与这两个分支相关的变更提交前须依次执行**代码规范检查**、**代码格式化**命令

## 目录及文件介绍

- `.husky` _git 自动化命令配置目录_
- `env/` _项目环境变量配置文件目录_
- `plugin/` _项目预加载内容目录_
- `public/` _项目固定资源目录（该目录下的内容打包时不会进行任何处理）_
- `src/` _项目内容_
  - `api/` _接口相关目录_
  - `assets/` _静态资源目录_
  - `components/` _组件目录_
  - `utils/` _项目静态方法以及配置内容目录_
  - `pages/` _页面目录_
- `.editorconfig` _prettier 格式化规则配置文件，统一配置，禁止修改_
- `.eslintrc` _eslint 配置文件，统一配置，禁止修改_
- `.gitignore` _git 忽略提交配置文件_
- `.gitlab-ci.yml` _流水线配置文件，非必要基本无需修改_
- `.prettierignore` _格式化忽略配置文件_
- `env.d.ts` _env 以及第三方库的类型配置文件_
- `package.json` _项目配置文件，一般只用改一个项目名称_
- `pnpm-lock.yaml` _node_modules 包管理文件，如遇线上 pnpm i 时报错，可删除项目内的`node_modelues/`目录以及该文件，重新执行`pnpm install`后再进行提交打包_
- `postcss.config.js` _项目移动端兼容配置文件，无需更改_
- `README.MD`
- `tsconfig*` _项目类型定义相关_
- `vite.config.ts` _vite 配置文件_
