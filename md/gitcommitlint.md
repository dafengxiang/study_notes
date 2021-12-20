# gitcommitlint配置方案

* 安装依赖

  ```js
  yarn add @commitlint/config-conventional@12.1.4 @commitlint/cli@12.1.4 -S
  ```

* 根目录创建commitlint.config.js文件，并添加代码

  ```js
  module.exports = {
      extends: [
          '@commitlint/config-conventional'
      ],
      rules: {
          'type-enum': [2, 'always', [
              'feat', 'fix', 'docs', 'style', 'build', 'refactor', 'test', 'chore', 'perf', 'ci', 'revert'
          ]],
          'type-case': [0],
          'type-empty': [0],
          'scope-empty': [0],
          'scope-case': [0],
          'subject-full-stop': [0, 'never'],
          'subject-case': [0, 'never'],
          'header-max-length': [0, 'always', 72]
      }
  }
  ```

* 安装 husky

  ```js
  yarn add husky@7.0.1 -S
  ```


* 在package.json中添加prepare 指令

  ```js
  "scripts": {
      "prepare": "husky install"
  },
  ```

* 执行prepare指令

  ```
  yarn prepare / npm run prepare
  ```

- 添加 commitlint 的 hook 到 husky 中，并指令在commit-msg 的hooks下执行 npx --no-install commitlint --edit "$1" 指令

  ```
  npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
  ```

