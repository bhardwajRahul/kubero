import { zhHans } from 'vuetify/locale'

const messages = {
  navigation: {
    pipelines: '流水线',
    templates: '模板',
    activity: '活动',
    addOns: '附加组件',
    accounts: '账户',
    settings: '设置',
    logout: '登出',
    theme: '深色/浅色模式',
    documentation: '文档',
    general: '常规',
    runpacks: '运行包',
    podSizes: 'Pod 大小',
    notifications: '通知',
    kuberoAPI: 'Kubero API',
    github: 'GitHub',
    discord: 'Discord',
  },
  accounts: {
    users: '用户',
    teams: '团队',
    roles: '角色',
    tokens: '令牌',
  },
  teams: {
    name: '团队',
    search: '搜索团队',
    actions: {
      create: '创建团队',
      edit: '编辑团队',
    },
    form: {
      name: '团队名称',
      description: '描述',
    },
  },
  roles: {
    name: '角色',
    search: '搜索角色',
    permission: '权限',
    actions: {
      create: '创建角色',
      edit: '编辑角色',
    },
    form: {
      name: '角色名称',
      description: '描述',
      permissionsRead: '读取',
      permissionsWrite: '写入',
      permissions: {
        apps: '应用',
        name: '权限',
        pipelines: '流水线',
        accounts: '账户',
        settings: '设置',
        security: '安全',
        tokens: '令牌',
        audit: '审计',
        console: '控制台',
        logs: '日志',
        reboot: '重启',
      },
    },
  },
  tokens: {
    name: '令牌',
    search: '搜索令牌',
    form: {
      id: '令牌ID',
      name: '令牌名称',
      expiresAt: '过期时间',
      owner: '所有者',
    },
  },
  global: {
    name: "名称",
    value: "值",
    repository: "仓库",
    annotation: "注释",
    size: "大小",
    create: "创建",
    update: "更新",
    abort: "中止",
    cancel: "取消",
    save: "保存",
  },
  pipeline: {
    name: '流水线',
    buttons: {
      new: '新建流水线',
      edit: '编辑流水线',
      delete: '删除流水线',
      create: '创建流水线',
      update: '更新流水线',
      connect: '连接',
      disconnect: '断开连接',
      reconnect: '重新连接',
    },
    phases: {
      production: '生产',
      stage: '阶段',
      test: '测试',
      review: '审查',
    },
    form: {
      label: {
        name: '名称',
        fqdnDomain: 'FQDN域名',
        teamAccess: '团队访问',
        enableBuilds: '启用从源码构建流水线',
      },
      title:{
        continuousDeployment: '持续部署',
        environments: '环境',
      },
      help: {
        gitrepo: '连接后，Webhook和部署密钥将存储在仓库中。这意味着在此项目中配置的应用可以通过“git push”自动重新部署，打开PR会在“审核”阶段启动新实例。',
      },
    },
  },
  app: {
    nav: {
      overview: '概览',
      builds: '构建',
      metrics: '指标',
      logs: '日志',
      events: '事件',
      vulnerabilities: '漏洞',
    },
    actions: {
      name: '操作',
      edit: '编辑',
      openApp: '打开应用',
      restart: '重启',
      openConsole: '打开控制台',
      openLogs: '打开日志',
      downloadTemplate: '下载模板',
      delete: '删除',
      update: '更新',
    },
    domains: '域名',
    deploymentStrategy: '部署策略',
    runpack: 'Runpack',
    buildStrategy: '构建策略',
    gitRepo: 'Git仓库',
    autodeploy: '自动部署',
    podSize: 'Pod大小',
    autoscale: '自动扩缩',
    webReplicas: 'Web副本',
    workerReplicas: 'Worker副本',
    cpu: 'CPU',
    memory: 'Memory',
    pod: 'Pod',
    titles: {
      advanced: '高级应用设置',
      consumption: '资源消耗',
      environmentVariables: '环境变量',
      cronjobs: '定时任务',
      activities: '活动',
      deployment: '部署',
      resources: '资源',
      serviceAccountAnnotations: '服务账号注释',
      volumes: '存储卷',
      addOns: '插件',
      basicAuth: '基础认证',
      security: '安全',
      networking: '网络',
      kubernetes: 'Kubernetes',
      healthChecks: '健康检查',
    },
    form: {
      createNewApp: '在{pipeline}中创建新应用',
      editApp: '在{pipeline}中编辑{app}',
      warning: '请更改所有密码、令牌并选择适合集群的storageClass。',
      appName: '应用名称',
      domain: '域名',
      containerPort: '容器端口',
      strategy: '策略',
      advancedAppConfig: '高级应用配置',
      repository: '仓库',
      branch: '分支',
      autodeploy: '自动部署',
      runpack: 'Runpack',
      buildcommand: '构建命令',
      runcommand: '运行命令',
      containerImage: '容器镜像',
      tag: '标签',
      command: '命令',
      basicAuthEnabled: '启用基础认证',
      basicAuthRealm: '领域/标题',
      basicAuthUser: '用户名',
      basicAuthPass: '密码',
      readOnlyAppStorage: '只读应用存储卷',
      readOnlyRootFilesystem: '只读根文件系统',
      vulnerabililityScan: '启用Trivy漏洞扫描',
      privilegeEscalation: '允许权限提升',
      runAsNonRoot: '以非root身份运行',
      runAsUser: '以用户身份运行',
      runAsGroup: '以组身份运行',
      capabilitiesAdd: '添加能力',
      capabilitiesDrop: '移除能力',
      whitelistSourceRange: '白名单源范围',
      denylistSourceRange: '黑名单源范围',
      forceSSLRedirect: '强制SSL重定向',
      proxyBufferSize: '代理缓冲区大小',
      ingressClassName: 'Ingress类名',
      corsEnable: '启用CORS',
      corsAllowOrigin: 'CORS允许来源',
      corsAllowMethods: 'CORS允许方法',
      corsAllowHeaders: 'CORS允许头部',
      corsExposeHeaders: 'CORS暴露头部',
      corsAllowCredentials: 'CORS允许凭证',
      corsMaxAge: 'CORS最大存活时间',
      storageClass: '存储类',
      mountPath: '挂载路径',
      accessMode: '访问模式',
      healthCheckEnabled: '启用健康检查',
      healthCheckPath: '健康检查路径',
      healthCheckStartupSeconds: '启动秒数',
      healthCheckTimeoutSeconds: '超时时间（秒）',
      healthCheckIntervalSeconds: '间隔时间（秒）',
    },
    strategy: {
      name: '策略',
      containerImage: '容器镜像',
      fromSource: '源码',
      runpacks: 'Runpacks',
      runpackExplanation: '您的代码将在官方镜像上构建和运行。每个Pod都会在init容器中构建代码。这是最快的方法，但副本越多效率越低。',
      externalCICD: '外部CI/CD',
      externalCICDExplanation: '您在外部CI/CD上构建镜像，并通过API更改镜像标签进行部署。',
      nixpacks: 'Nixpacks',
      nixpacksExplanation: '<a href="https://nixpacks.com/" target="_blank" style="text-decoration: underline;">Nixpacks</a>是一个用nix构建Docker镜像的开源项目。如果您希望拥有可复现的构建过程且不需要Dockerfile，这是一个好方法。',
      buildpacks: 'Buildpacks',
      buildpacksExplanation: '<a href="https://buildpacks.io/" target="_blank" style="text-decoration: underline;">Buildpacks</a>是一组用于将应用源码转换为可部署镜像的脚本和二进制文件，自动化编译、构建和配置应用的过程。',
      dockerfile: 'Dockerfile',
      dockerfileExplanation: '根据Git根目录下的Dockerfile构建镜像。允许最高级别的自定义。',
      noBuildPipeline: '未配置构建流水线',
      noBuildPipelineExplanation: '无法从源码构建应用，因为未配置构建流水线。请配置注册表以使用Buildpacks、Nixpacks和Dockerfile构建流水线。',
    },
    cronjobs: {
      name: '定时任务',
      schedule: '计划',
      command: '命令',
      image: '镜像',
      env: '环境变量',
      actions: {
        new: '新建定时任务',
        edit: '编辑定时任务',
        delete: '删除定时任务',
        create: '创建定时任务',
      },
    },
    volumes: {
      name: '存储卷',
      size: '大小',
      accessMode: '访问模式',
    },
    events: {
      name: '事件',
      description: '<strong>{app}</strong>的Kubernetes事件流',
      empty: {
        title: '{app}没有事件',
        message: 'Kube-API事件的默认TTL为1小时。如果要查看更早的事件，需在Kube-apiserver中增加TTL。',
        link: 'Kubernetes文档',
      }
    },
    vulnerabilities: {
      lastScan: '最后扫描',
      artefact: '工件',
      arch: '架构',
      created: '创建时间',
      os: '操作系统',
      layers: '层',
      workingDir: '工作目录',
      exposedPorts: '暴露端口',
      summary: '摘要',
      empty: {
        title: '{app}没有漏洞扫描',
        message: '要扫描此应用的漏洞，请触发重新扫描。',
      },
      actions: {
        rescan: '重新扫描',
      }
    },
  },
  profile: {
    titles: {
      apiTokens: 'API令牌',
      profileDetails: '个人资料详情',
    },
    avatar: {
      edit: '编辑头像',
      limitMessage: '图片不得超过100KB。',
      uploadAvatar: '上传新头像',
    },
    token: {
      create: '创建令牌',
      expiresAt: '过期时间',
      noTokens: '未找到令牌。',
      details: '令牌详情',
      warningMessage: '此令牌将<strong>不会再次显示</strong>。请立即复制并安全存储。',
      copyToken: '复制令牌',
      copiedMessage: '令牌已复制到剪贴板！',
      close: '关闭',
    },
    actions: {
      editProfile: '编辑个人资料',
    },
  },
  user: {
    name: '用户',
    email: '电子邮件',
    username: '用户名',
    firstName: '名',
    lastName: '姓',
    role: '角色',
    teams: '团队',
    provider: '提供者',
    status: '状态',
    password: '密码',
    changePassword: '更改密码',
    changePasswordFor: '为{user}更改密码',
    currentPassword: '当前密码',
    newPassword: '新密码',
    confirmPassword: '确认密码',
    errors: {
      passwordMismatch: '密码不匹配',
      passwordConfirm: '请确认您的密码',
      firstNameRequired: '名字是必需的',
      lastNameRequired: '姓氏是必需的',
      emailRequired: '电子邮件是必需的',
      emailValid: '电子邮件必须有效',
      currentPasswordRequired: '当前密码是必需的',
      newPasswordRequired: '新密码是必需的',
      passwordMinLength: '密码必须至少8个字符',
    },
    actions: {
      name: '操作',
      create: '创建用户',
      edit: '编辑用户',
      search: '搜索用户',
    }
  },
  notifications: {
    name: '通知',
    helpTitle: '什么是通知？',
    helpText: '<p><strong>通知</strong>允许您接收有关 Kubero 应用程序事件的提醒。您可以配置 Slack、Discord 或 Webhook 通知，以便及时了解部署、错误和其他重要事件。</p><p class="mt-2"><a href="https://www.kubero.dev/docs/usermanual/notifications/" target="_blank" rel="noopener">在 Kubero 文档中阅读更多</a></p>',
    form: {
      name: '名称',
      type: '类型',
      enabled: '已启用',
      pipelines: '流水线',
      events: '事件',
      config: '配置',
      url: 'URL',
      channel: '频道',
      secret: '密钥',
      slackWebhookUrl: 'Slack Webhook URL',
      discordWebhookUrl: 'Discord Webhook URL',
      webhookUrl: 'Webhook URL',
      pipelinesHint: '输入流水线名称，或输入“all”表示全部流水线',
      eventsHint: '输入要监听的事件名称',
    },
    actions: {
      create: '创建通知',
      edit: '编辑通知',
      delete: '删除通知',
    },
    errors: {
      load: '加载通知时出错',
      edit: '加载通知详情时出错',
      create: '创建通知时出错',
      save: '保存通知时出错',
      delete: '删除通知时出错',
    },
  },
  runpacks: {
    name: 'Runpacks',
    helpTitle: '什么是 Runpacks？',
    helpText: '<p><strong>Runpacks</strong> 在 Kubero 中定义应用程序如何在 Kubernetes 集群内获取、构建和运行。每个 runpack 包含三个阶段：</p><ul class="ma-4"><li><strong>Fetch</strong>：使用容器镜像从 Git 仓库检索代码。您可以使用默认设置或自定义。</li><li><strong>Build</strong>：在您选择的容器中运行构建命令（任何 Docker 镜像）。这是安装依赖项或编译应用程序的地方。</li><li><strong>Run</strong>：启动最终容器。<em>web</em> pod 暴露到互联网，而 <em>worker</em> pod 用于后台作业。</li></ul><p>Runpacks 非常灵活，可以为不同的语言和框架进行自定义。它们依赖于公开可用的容器镜像。您可以在 <a href="https://github.com/kubero-dev/runpacks/tree/main/packs" target="_blank" rel="noopener">kubero-dev/runpacks</a> 找到示例 runpacks。</p><p class="mt-2"><a href="https://www.kubero.dev/docs/usermanual/runpacks/" target="_blank" rel="noopener">在 Kubero 文档中阅读更多</a></p>',
    table: {
      name: '名称',
      language: '语言',
      fetch: 'Fetch',
      build: 'Build',
      run: 'Run',
      actions: '操作',
    },
    details: {
      repository: '仓库',
      command: '命令',
      readOnlyAppStorage: '只读应用存储',
      securityContext: '安全上下文',
      showDetails: '显示详情',
      runAsUser: 'runAsUser',
      runAsGroup: 'runAsGroup',
      allowPrivilegeEscalation: 'allowPrivilegeEscalation',
      readOnlyRootFilesystem: 'readOnlyRootFilesystem',
      runAsNonRoot: 'runAsNonRoot',
      capabilities: '权限',
      add: '添加',
      drop: '删除',
      yes: '是',
      no: '否',
    },
    form: {
      name: '名称',
      language: '语言',
      search: '搜索 Runpacks',
      repository: '仓库',
      tag: '标签',
      runAsUser: '以用户身份运行',
      runAsGroup: '以组身份运行',
      readOnlyAppVolume: '只读应用卷',
      readOnlyRootFilesystem: '只读根文件系统',
      allowPrivilegeEscalation: '允许权限升级',
      runAsNonRoot: '以非 root 身份运行',
      capabilitiesAdd: '添加权限',
      capabilitiesDrop: '删除权限',
      selectOneOrMore: '选择一个或多个',
      required: '必填',
      mustBeNumber: '必须是数字',
    },
    actions: {
      create: '创建 Runpack',
      edit: '编辑 Runpack',
      delete: '删除 Runpack',
      save: '保存',
      abort: '中止',
    },
    errors: {
      load: '加载 runpack 详情时出错。',
    },
    stages: {
      fetch: 'Fetch',
      build: 'Build',
      run: 'Run',
    },
  },
  settings: {
    deployment: {
      title: '连接仓库',
      configAlert: '配置更改需要手动重启 Kubero UI 容器后才能生效。',
      webhookEndpoint: 'Webhook 端点',
      url: 'URL',
      secret: '密钥',
      github: {
        title: 'Github',
        baseUrl: 'Github 基础 URL',
        personalAccessToken: 'Github 个人访问令牌',
        instructions: '如何从以下位置获取个人访问令牌的说明',
      },
      gitea: {
        title: 'Gitea',
        baseUrl: 'Gitea 基础 URL',
        personalAccessToken: 'Gitea 个人访问令牌',
        instructions: '如何为以下位置获取个人访问令牌的说明',
      },
      gogs: {
        title: 'Gogs',
        baseUrl: 'Gogs 基础 URL',
        personalAccessToken: 'Gogs 个人访问令牌',
      },
      gitlab: {
        title: 'Gitlab',
        baseUrl: 'Gitlab 基础 URL',
        personalAccessToken: 'Gitlab 个人访问令牌',
      },
      bitbucket: {
        title: 'Bitbucket',
        username: 'Bitbucket 用户名',
        appPassword: 'Bitbucket 应用密码',
      },
    },
    general: {
      title: '通用 Kubero 设置',
      description: '一些配置值需要浏览器刷新(*) 或 Pod 重启(**) 才能生效。',
      namespace: 'Kubero 命名空间',
      readonlyMode: '只读模式 (**)',
      adminDisabled: '禁用管理员',
      ttyConsoleEnabled: '启用 TTY 控制台',
      banner: {
        title: '横幅',
        enabled: '启用 (*)',
        backgroundColor: '背景颜色',
        fontColor: '字体颜色',
        message: '消息',
      },
      authentication: {
        title: '身份验证',
        github: {
          enabled: 'Github',
          id: 'ID',
          organization: '组织',
          callbackUrl: '回调 URL',
          secret: '密钥',
        },
        oauth2: {
          enabled: 'Oauth2',
          name: '名称',
          id: 'ID',
          authUrl: '认证 URL',
          tokenUrl: '令牌 URL',
          callbackUrl: '回调 URL',
          scopes: '范围',
          secret: '密钥',
        },
      },
      auditLogs: {
        title: '审计日志',
        enabled: '启用 (**)',
        storageClass: '存储类',
        limit: '限制',
        size: '大小',
      },
    },
  },
  podsizes: {
    name: 'Pod大小',
    helpTitle: '什么是Pod大小？',
    helpText: '<p><strong>Pod大小</strong>定义了Kubero中应用Pod的资源请求和限制。您可以创建、编辑和删除Pod大小以匹配您的工作负载需求。</p><p class="mt-2"><a href="https://www.kubero.dev/docs/usermanual/podsizes/" target="_blank" rel="noopener">在Kubero文档中了解更多</a></p>',
    form: {
      name: 'Pod大小名称',
      description: '描述',
      cpuRequest: 'CPU请求 (m)',
      cpuLimit: 'CPU限制 (m)',
      memoryRequest: '内存请求 (Gi)',
      memoryLimit: '内存限制 (Gi)',
      cpu: 'CPU',
      memory: '内存',
    },
    actions: {
      create: '创建Pod大小',
      edit: '编辑Pod大小',
    },
    errors: {
      loadinPodsize: '加载Pod大小时出错',
    },
  },
  templates: {
    search: '搜索模板',
    category: '类别',
    pipeline: '流水线',
    phase: '阶段',
    actions: {
      install: '安装',
      loadTemplate: '加载模板',
    },
  },
  $vuetify: {
    ...zhHans,
  },
}

export default messages
