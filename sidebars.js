module.exports = {
  usernamual: [
    {
      产品描述: [
        '产品描述/简介',
        '产品描述/基本概念',
        '产品描述/应用场景',
        '产品描述/技术白皮书',
        '产品描述/产品定价',
        '产品描述/爱速搭与amis'
      ],
      组织管理: [
        '组织管理/工作台管理',
        '组织管理/基本信息管理',
        '组织管理/角色管理',
        '组织管理/应用管理',
        '组织管理/组织架构及成员管理',
        '组织管理/钉钉集成'
      ],
      数据模型: [
        {
          外部数据源接入: [
            '数据模型/外部数据源接入/数据源编辑',
            '数据模型/外部数据源接入/外部数据源接入',
            '数据模型/外部数据源接入/外部数据源使用',
            '数据模型/外部数据源接入/外部数据源IP白名单'
          ]
        },
        '数据模型/模型基本设置',
        '数据模型/模型其他设置',
        '数据模型/模型数据管理',
        '数据模型/模型字段配置'
      ],
      页面设计: [
        '页面设计/页面管理',
        '页面设计/页面类型说明',
        {
          普通页面设计: [
            '页面设计/普通页面设计/普通页面说明',
            '页面设计/普通页面设计/页面搭建流程',
            '页面设计/普通页面设计/组件说明',
            '页面设计/普通页面设计/编辑器说明',
            '页面设计/普通页面设计/模型组件',
            '页面设计/普通页面设计/自定义组件',
            '页面设计/普通页面设计/Angular组件',
            '页面设计/普通页面设计/页面外部嵌入',
            '页面设计/普通页面设计/本地开发接入说明'
          ]
        }
      ],
      API对接: [
        'API对接/基础',
        'API对接/系统API',
        'API对接/本地开发调试',
        'API对接/API中心'
      ],
      服务编排: [
        '服务编排/服务编排概述',
        {
          设计服务编排: [
            '服务编排/设计服务编排/服务参数定义',
            '服务编排/设计服务编排/调试服务编排',
            '服务编排/设计服务编排/Mock服务编排'
          ]
        },
        {
          活动节点: [
            {
              逻辑控制类: [
                '服务编排/活动节点/逻辑控制类/分支',
                '服务编排/活动节点/逻辑控制类/循环',
                '服务编排/活动节点/逻辑控制类/继续循环',
                '服务编排/活动节点/逻辑控制类/跳出循环',
                '服务编排/活动节点/逻辑控制类/退出'
              ]
            },
            {
              实体活动类: [
                '服务编排/活动节点/实体活动类/新增记录',
                '服务编排/活动节点/实体活动类/删除记录',
                '服务编排/活动节点/实体活动类/更新记录',
                '服务编排/活动节点/实体活动类/查询记录'
              ]
            },
            {
              变量活动类: [
                '服务编排/活动节点/变量活动类/编码转换',
                '服务编排/活动节点/变量活动类/日期格式化',
                '服务编排/活动节点/变量活动类/设置变量',
                '服务编排/活动节点/变量活动类/数据映射'
              ]
            },
            {
              调用服务类: [
                '服务编排/活动节点/调用服务类/API中心',
                '服务编排/活动节点/调用服务类/http请求',
                '服务编排/活动节点/调用服务类/调用流程',
                '服务编排/活动节点/调用服务类/连接器'
              ]
            },
            {
              反馈与消息: [
                '服务编排/活动节点/反馈与消息/发送消息',
                '服务编排/活动节点/反馈与消息/发送邮件'
              ]
            },
            {
              其他高级: [
                '服务编排/活动节点/其他高级/数据源SQL',
                '服务编排/活动节点/其他高级/JS代码节点'
              ]
            }
          ]
        }
      ],
      BPM引擎: [
        'BPM引擎/BPM概述',
        'BPM引擎/快速入门',
        {
          流程设计: [
            'BPM引擎/流程设计/如何设计一个流程',
            {
              节点描述: [
                {
                  事件节点: [
                    'BPM引擎/流程设计/节点描述/事件节点/开始事件',
                    'BPM引擎/流程设计/节点描述/事件节点/定时开始',
                    'BPM引擎/流程设计/节点描述/事件节点/实体事件开始',
                    'BPM引擎/流程设计/节点描述/事件节点/延时事件'
                  ]
                },
                {
                  活动节点: [
                    {
                      人工节点: [
                        'BPM引擎/流程设计/节点描述/活动节点/人工节点/人工任务概述',
                        'BPM引擎/流程设计/节点描述/活动节点/人工节点/填写节点',
                        'BPM引擎/流程设计/节点描述/活动节点/人工节点/审批节点',
                        'BPM引擎/流程设计/节点描述/活动节点/人工节点/知会节点'
                      ]
                    },
                    {
                      自动节点: [
                        'BPM引擎/流程设计/节点描述/活动节点/自动节点/提交节点'
                      ]
                    }
                  ]
                },
                {
                  网关节点: [
                    'BPM引擎/流程设计/节点描述/网关节点/排他网关',
                    'BPM引擎/流程设计/节点描述/网关节点/包容网关',
                    'BPM引擎/流程设计/节点描述/网关节点/并行网关'
                  ]
                }
              ]
            }
          ]
        },
        'BPM引擎/流程运行'
      ],
      移动应用: [
        {
          编辑器: [
            '移动应用/编辑器/编辑器概述',
            '移动应用/编辑器/数据源管理',
            '移动应用/编辑器/运行时变量',
            '移动应用/编辑器/循环渲染与自由列表'
          ]
        },
        {
          小程序: ['移动应用/小程序/小程序开发', '移动应用/小程序/小程序发布']
        },
        {
          快应用: [
            '移动应用/快应用/快应用卡片开发',
            '移动应用/快应用/快应用事件动作',
            '移动应用/快应用/快应用卡片发布'
          ]
        }
      ],
      应用管理: [
        '应用管理/应用设置',
        '应用管理/应用权限设置'
        // '发布管理'
      ],
      门户管理: [
        '门户管理/功能介绍',
        '门户管理/创建门户',
        '门户管理/工作台展示',
        '门户管理/页面框架',
        '门户管理/菜单导航',
        '门户管理/权限设置'
      ],
      对象存储: ['对象存储/对象存储管理'],
      组件模板: [
        '组件模板/功能介绍',
        '组件模板/组件模板管理',
        '组件模板/组件模板在线设计',
        '组件模板/如何使用组件模板'
      ],
      组件扩展包: [
        'NPM组件扩展包/功能介绍',
        'NPM组件扩展包/如何使用',
        'NPM组件扩展包/开发amis组件扩展包',
        'NPM组件扩展包/开发跨端组件扩展包',
        'NPM组件扩展包/开发快应用组件扩展包'
      ],
      管理后台: ['管理后台/站点设置']
    },
    '应用发布'
  ],

  privateImage: [
    '私有部署/私有部署安装',
    '私有部署/更新记录',
    '私有部署/运维及故障处理',
    {
      type: 'category',
      label: '私有部署独有功能',
      collapsed: false,
      items: [
        '私有部署/环境变量说明',
        '私有部署/自定义登录方式',
        '私有部署/接入统计',
        '私有部署/接管发布环境权限',
        '私有部署/邮件服务',
        '私有部署/简单消息服务',
        '私有部署/平台间应用同步'
        // '私有部署/自定义后端插件'
      ]
    }
  ],

  tutorial: [
    '快速入门/使用流程',
    '快速入门/创建应用',
    '快速入门/连接数据源',
    '快速入门/创建数据模型',
    '快速入门/页面设计',
    '快速入门/发布应用',
    '快速入门/权限管理'
  ],

  openAPI: ['OpenAPI/介绍', 'OpenAPI/组织', 'OpenAPI/应用', 'OpenAPI/数据模型']
};
