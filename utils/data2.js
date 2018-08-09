
const question_all = [
  {
  "id": 820,
  "type": "单选",
  "q": "下面哪项表示Npich正确的是____",
  "options": [
    {
      "label": "A",
      "text": "A、一个寻呼块内PICH的帧数"
    },
    {
      "label": "B",
      "text": "B、一个帧内的寻呼指示数"
    },
    {
      "label": "C",
      "text": "C、寻呼用户数量"
    },
    {
      "label": "D",
      "text": "D、用户监听PCH周期"
    }
  ],
  "a": "A",
  "isStore": "false",
  "isAnswer": 0
},
  {
    "id": 821,
    "type": "单选",
    "q": "无线信号在自由空间的衰落情况是：传播距离每增大一倍，信号强度减小____",
    "options": [
      {
        "label": "A",
        "text": "A、3dB"
      },
      {
        "label": "B",
        "text": "B、6dB"
      },
      {
        "label": "C",
        "text": "C、9 dB"
      },
      {
        "label": "D",
        "text": "D、2 dB"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 822,
    "type": "单选",
    "q": "馈线走线原则描述不正确的是____。",
    "options": [
      {
        "label": "A",
        "text": "A、线缆尽量短"
      },
      {
        "label": "B",
        "text": "B、走线方便"
      },
      {
        "label": "C",
        "text": "C、可以与电源线一起走线"
      },
      {
        "label": "D",
        "text": "D、注意不要影响建筑物美观"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 823,
    "type": "单选",
    "q": "要使用基于下行覆盖的切换方式实现语音电话从3G切换到2G，那么RNC要配置2G的外部邻区和2/3G邻接关系。下列____参数不是2G小区的参数。",
    "options": [
      {
        "label": "A",
        "text": "A、 2G小区的频点"
      },
      {
        "label": "B",
        "text": "B、 2G小区的发射功率"
      },
      {
        "label": "C",
        "text": "C、 2G小区的位置区码"
      },
      {
        "label": "D",
        "text": "D、 2G小区的小区ID"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 824,
    "type": "单选",
    "q": "语音电话从3G切换到2G使用的是基于下行覆盖的切换。如果RNC没有下发3A的测量控制，那么可能是CN配置的SERVICE.HANDOVER不正确。CN下发的SERVICE.HANDOVER是否符合要求，是在_ _条信令消息里面查看。",
    "options": [
      {
        "label": "A",
        "text": "A、 RAB、ASSIGNMENT REQUEST"
      },
      {
        "label": "B",
        "text": "B、 RAB、ASSIGNMENT RESPONSE"
      },
      {
        "label": "C",
        "text": "C、 SECURITY MODE、COMPLETE"
      },
      {
        "label": "D",
        "text": "D、 RADIO LINK SETUP REQUEST"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 825,
    "type": "单选",
    "q": "一个完整的CS12.2K呼叫主叫流程包含很多信令子流程。在RAB建立过程中，存在RL重配置的信令流程，那么下列信令消息，正常同步方式的RL重配置流程不包含____信令消息。",
    "options": [
      {
        "label": "A",
        "text": "A、 RADIO LINK RECONFIGURATION PREPARE"
      },
      {
        "label": "B",
        "text": "B、 RADIO LINK RECONFIGURATION READY"
      },
      {
        "label": "C",
        "text": "C、 RADIO LINK RECONFIGURATION COMMIT"
      },
      {
        "label": "D",
        "text": "D、 RADIO LINK SETUP FAILURE"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 826,
    "type": "单选",
    "q": "关于上行同步，以下说法错误的是____",
    "options": [
      {
        "label": "A",
        "text": "A、只有当用户建立并保持下行同步时，才能开始上行同步过程；"
      },
      {
        "label": "B",
        "text": "B、只有当用户建立并保持上行同步时，才能开始下行同步过程；"
      },
      {
        "label": "C",
        "text": "C、开始建立上行同步时，UE将从已知的SYNC、UL 集合中随机选择一个SYNC、UL码；"
      },
      {
        "label": "D",
        "text": "D、上行同步，同一时隙不同用户的信号同步到达基站接收机；"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 827,
    "type": "单选",
    "q": "关于N频点，以下说法错误的是____",
    "options": [
      {
        "label": "A",
        "text": "A、针对每一小区，从分配到的n 个频点中确定一个作为主载频，其他载频为辅助载频；"
      },
      {
        "label": "B",
        "text": "B、承载P-CCPCH 的载频称为主载频，不承载P-CCPCH 的载频称为辅载频；"
      },
      {
        "label": "C",
        "text": "C、在同一个小区内，仅在主载频上发送DwPTS 和广播信息(TS0)；"
      },
      {
        "label": "D",
        "text": "D、 主载频和辅助载频使用不同的扰码和基本Midamble；"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 828,
    "type": "单选",
    "q": "智能天线对网络性能的改进不包括____：",
    "options": [
      {
        "label": "A",
        "text": "A、提高了基站发射机的等效发射功率"
      },
      {
        "label": "B",
        "text": "B、降低了系统的干扰"
      },
      {
        "label": "C",
        "text": "C、降低了系统的误码率"
      },
      {
        "label": "D",
        "text": "D、消除了多址干扰MAI"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 829,
    "type": "单选",
    "q": "下面有关Ssearch,RAT参数说法正确的是____",
    "options": [
      {
        "label": "A",
        "text": "A、该参数用于UE、在idle状态时，TD要重选到GSM，需判断Srx小于等于该参数，触发对GSM测量参数；"
      },
      {
        "label": "B",
        "text": "B、该参数用于UE在CELL_DCH状态，TD要切换到GSM, 需判断Srx小于等于该参数，触发对GSM测量参数；"
      },
      {
        "label": "C",
        "text": "C、该参数用于UE、在idle状态时，TD要重选到GSM，需判断UE的RSCP小于等于该参数，触发对GSM测量参数；"
      },
      {
        "label": "D",
        "text": "D、该参数用于UE在CELL_DCH状态，TD要切换到GSM, 需判断UE的RSCP小于等于该参数，触发对GSM测量参数；"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 830,
    "type": "单选",
    "q": "关于GPS跑偏定位方法，下列说法错误的是：（）",
    "options": [
      {
        "label": "A",
        "text": "A、 如果疑似GPS跑偏站点各个小区各个频点上行时隙平均干扰和最大干扰都比较高，则判断该站点可能是GPS超前。"
      },
      {
        "label": "B",
        "text": "B、 把基站站点信息(经纬度、频点、站型、天线数等)和对应ISCP数值信息，导入MAPINFO地图，分析是否具备以某个站点为中心的分布，从而确定疑似GPS跑偏站点。"
      },
      {
        "label": "C",
        "text": "C、 如果疑似GPS跑偏站点上行时隙干扰正常，周围邻小区上行时隙干扰比较高，则进一步查询疑似GPS跑偏站点周围小区的干扰ISCP报表数据，观察周围邻小区干扰比较严重的频点、时隙的情况"
      },
      {
        "label": "D",
        "text": "D、 周围邻小区中和“疑似GPS跑偏站点”各个小区主频点同频的频点的上行时隙TS1或/和TS2干扰比较高，其它频点干扰较低，则可以判断该站点GPS超前"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 831,
    "type": "单选",
    "q": "跑偏基站信号滞后正常站时，下述说法错误的是:（）",
    "options": [
      {
        "label": "A",
        "text": "A、 通常干扰正常基站1-2个时隙"
      },
      {
        "label": "B",
        "text": "B、 表现为正常基站的上行时隙受到干扰"
      },
      {
        "label": "C",
        "text": "C、 干扰电平以跑偏基站为圆心向外递减"
      },
      {
        "label": "D",
        "text": "D、 跑偏基站本身上行时隙受到较大干扰"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 832,
    "type": "单选",
    "q": "关于GPS跑偏干扰的定位方法，下述说法错误的是:（）",
    "options": [
      {
        "label": "A",
        "text": "A、 如果发生GPS告警，应优先排查告警站"
      },
      {
        "label": "B",
        "text": "B、 若GPS跑偏站信号滞后，则干扰范围较大，难以直观的一眼找到干扰站。"
      },
      {
        "label": "C",
        "text": "C、 若GPS跑偏站信号滞后，仅单个站受干扰的现象清晰，很容易就可以定位。"
      },
      {
        "label": "D",
        "text": "D、 通过进行小区的切入切出统计进行定位，如果GPS跑偏，与其他基站的小区切换成功率低"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 833,
    "type": "单选",
    "q": "终端在上次关机或脱网前登记上的PLMN是（）",
    "options": [
      {
        "label": "A",
        "text": "A、 RPLMN"
      },
      {
        "label": "B",
        "text": "B、 EPLMN"
      },
      {
        "label": "C",
        "text": "C、 HPLMN"
      },
      {
        "label": "D",
        "text": "D、 FPLMN"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 834,
    "type": "单选",
    "q": "下列属于全网优化手段的是：____",
    "options": [
      {
        "label": "A",
        "text": "A、基站设备的排障"
      },
      {
        "label": "B",
        "text": "B、覆盖测试"
      },
      {
        "label": "C",
        "text": "C、DT&CQT"
      },
      {
        "label": "D",
        "text": "D、单站业务测试"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 835,
    "type": "单选",
    "q": "Iu-CS是RNC和____的接口。",
    "options": [
      {
        "label": "A",
        "text": "A、SGSN"
      },
      {
        "label": "B",
        "text": "B、MGW"
      },
      {
        "label": "C",
        "text": "C、NODEB"
      },
      {
        "label": "D",
        "text": "D、HLR"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 836,
    "type": "单选",
    "q": "在小区重选的判决条件中，上行链路最大发射功率Maximum alloweD.UL TX power的取值范围是____dBm？",
    "options": [
      {
        "label": "A",
        "text": "A、33~50"
      },
      {
        "label": "B",
        "text": "B、-50~33"
      },
      {
        "label": "C",
        "text": "C、-116~-50"
      },
      {
        "label": "D",
        "text": ""
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 837,
    "type": "单选",
    "q": "如果将A小区中邻区B的小区个性偏移进行调高3dB，会造成的影响是____。",
    "options": [
      {
        "label": "A",
        "text": "A、没有影响"
      },
      {
        "label": "B",
        "text": "B、终端从A切到B难度变大"
      },
      {
        "label": "C",
        "text": "C、终端从A切到B难度变小"
      },
      {
        "label": "D",
        "text": "D、终端从B切到A难度变小"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 838,
    "type": "单选",
    "q": "下面哪些接口不是UTRAN的标准接口____。",
    "options": [
      {
        "label": "A",
        "text": "A、Iu口"
      },
      {
        "label": "B",
        "text": "B、A口"
      },
      {
        "label": "C",
        "text": "C、Iur口"
      },
      {
        "label": "D",
        "text": "D、Uu口"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 839,
    "type": "单选",
    "q": "对于TD-SCDMA系统，下面关于DwPCH的描述不正确的是____。",
    "options": [
      {
        "label": "A",
        "text": "A、全小区覆盖 不进行波型赋形"
      },
      {
        "label": "B",
        "text": "B、不扩频不加扰"
      },
      {
        "label": "C",
        "text": "C、需要进行功率控制"
      },
      {
        "label": "D",
        "text": "D、发送下行同步码的信道"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 840,
    "type": "单选",
    "q": "以下说法正确的是：____",
    "options": [
      {
        "label": "A",
        "text": "A、RACH和PCH可复用到一个CCTrCH上。"
      },
      {
        "label": "B",
        "text": "B、P-CCPCH不可与S-CCPCH在TS0上时分复用。"
      },
      {
        "label": "C",
        "text": "C、PICH是寻呼指示信道，用以指示UE是否需要解读其后跟随的PCH信道。"
      },
      {
        "label": "D",
        "text": "D、FPACH位于上行时隙。"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 841,
    "type": "单选",
    "q": "如果天线接错，则有可能导致下列哪种覆盖问题？____",
    "options": [
      {
        "label": "A",
        "text": "A、背向过覆盖"
      },
      {
        "label": "B",
        "text": "B、超角度覆盖"
      },
      {
        "label": "C",
        "text": "C、无主覆盖"
      },
      {
        "label": "D",
        "text": "D、覆盖不平衡"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 842,
    "type": "单选",
    "q": "下面哪些不属于系统外干扰的来源？  ____",
    "options": [
      {
        "label": "A",
        "text": "A、微波E1传输器干扰"
      },
      {
        "label": "B",
        "text": "B、其它厂家TD-SCDMA设备"
      },
      {
        "label": "C",
        "text": "C、WCDMA系统"
      },
      {
        "label": "D",
        "text": "D、特种设备干扰"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 843,
    "type": "单选",
    "q": "下列参数中，扫频仪不能得到的是____。",
    "options": [
      {
        "label": "A",
        "text": "A、PCCPCH RSCP"
      },
      {
        "label": "B",
        "text": "B、DwPTS ISCP"
      },
      {
        "label": "C",
        "text": "C、DPCH BLER"
      },
      {
        "label": "D",
        "text": "D、DwPTS RSSI"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 844,
    "type": "单选",
    "q": "关于系统间切换发起的条件，以下说法正确的是____。",
    "options": [
      {
        "label": "A",
        "text": "A、需要在操作维护系统中设置系统间切换算法开关。"
      },
      {
        "label": "B",
        "text": "B、系统间切换判决中UE的业务要求(与GSM/GPRS系统的支持程度有关系)。"
      },
      {
        "label": "C",
        "text": "C、UE是支持3G(TD-SCDMA)和GSM/GPRS的双模终端。"
      },
      {
        "label": "D",
        "text": "D、以上说法都正确。"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 845,
    "type": "单选",
    "q": "多小区组网时，移动终端在进行小区搜索时，会受到相邻小区的____干扰。",
    "options": [
      {
        "label": "A",
        "text": "A、DwPTS"
      },
      {
        "label": "B",
        "text": "B、UpPTS"
      },
      {
        "label": "C",
        "text": "C、PCCPCH"
      },
      {
        "label": "D",
        "text": "D、SCCPCH"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 846,
    "type": "单选",
    "q": "TD/GSM互操作中，为保证用户享受先进的技术与丰富的业务，应优先驻留在____网络",
    "options": [
      {
        "label": "A",
        "text": "A、TD-SCDMA"
      },
      {
        "label": "B",
        "text": "B、GSM"
      },
      {
        "label": "C",
        "text": "C、GPRS"
      },
      {
        "label": "D",
        "text": "D、无所谓"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 847,
    "type": "单选",
    "q": "关于小区重选过程的流程的执行顺序，以下说法正确的是____。",
    "options": [
      {
        "label": "A",
        "text": "A、候选小区评估和排序过程-->小区重搜过程-->合适小区评估过程"
      },
      {
        "label": "B",
        "text": "B、合适小区评估过程-->候选小区评估和排序过程-->小区重搜过程"
      },
      {
        "label": "C",
        "text": "C、小区重搜过程-->合适小区评估过程-->候选小区评估和排序过程"
      },
      {
        "label": "D",
        "text": "D、候选小区评估和排序过程-->合适小区评估过程-->小区重搜过程"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 848,
    "type": "单选",
    "q": "RNC下发关于业务量的测量控制消息时机是在____。",
    "options": [
      {
        "label": "A",
        "text": "A、RRC连接建立成功后"
      },
      {
        "label": "B",
        "text": "B、RAB建立成功后"
      },
      {
        "label": "C",
        "text": "C、Connect ACK信令之后"
      },
      {
        "label": "D",
        "text": "D、Setup信令之后"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 849,
    "type": "单选",
    "q": "信令跟踪时，Ue呼叫建立流程正确的顺序是____",
    "options": [
      {
        "label": "A",
        "text": "A、 RRC建立->鉴权->信令连接建立->业务建立->释放"
      },
      {
        "label": "B",
        "text": "B、 信令连接建立->鉴权->RRC建立->业务建立->释放"
      },
      {
        "label": "C",
        "text": "C、 RRC建立->信令连接建立->鉴权->业务建立->释放"
      },
      {
        "label": "D",
        "text": "D、RRC建立->信令连接建立->业务建立->鉴权->释放"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 850,
    "type": "单选",
    "q": "有关硬切换和接力切换说法中错误的有____",
    "options": [
      {
        "label": "A",
        "text": "A、 硬切换是当从一个小区切换到另一个小区时，首先中断与原先基站的通信，再与新的基站建立起通信。硬切换在切换过程中有可能丢失信息"
      },
      {
        "label": "B",
        "text": "B、 将软切换的高成功率和硬切换的高信道利用率综合到接力切换中 ，使用该方法可以在使用不同载频的SCDMA基站之间，甚至在SCDMA系统与其他移动通信系统如GSM.IS95的基站之间实现不中断通信.不丢失信息的越区切换"
      },
      {
        "label": "C",
        "text": "C、 目前很多UE都不支持接力切换"
      },
      {
        "label": "D",
        "text": "D、 接力切换是TD-SCDMA特有的一种切换"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 851,
    "type": "单选",
    "q": "关于GPS跑偏,下述说法错误的是:（）",
    "options": [
      {
        "label": "A",
        "text": "A、 由于TD-SCDMA是时分系统，基站间上下行依靠准确的同步来避免干扰，GPS跑偏的直接结果就是基站间的同步关系被破坏，上下行信号发生互相干扰。"
      },
      {
        "label": "B",
        "text": "B、 下行信号功率一般强于上行，并且存在几乎以基站最大发射功率常发的导频时隙TS0和DwPTS，所以上行信号的1-2个时隙受到的干扰会比较严重。"
      },
      {
        "label": "C",
        "text": "C、 一般离得较近的站点ISCP干扰强度高达-70dBm以上，甚至达到测量值上限-50dBm。"
      },
      {
        "label": "D",
        "text": "D、 跑偏基站的小区主频点、辅频点都会产生干扰。"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 852,
    "type": "单选",
    "q": "为了避免HSDPA业务与R4业务之间的强干扰，建议连片HSDPA区域内，适宜将不同小区的HSDPA业务信道配置在____上。",
    "options": [
      {
        "label": "A",
        "text": "A、不同频点"
      },
      {
        "label": "B",
        "text": "B、同一频点"
      },
      {
        "label": "C",
        "text": "C、与R4同频点"
      },
      {
        "label": "D",
        "text": "D、都可以"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 853,
    "type": "单选",
    "q": "DWPCH信道的功率设置一般会____PCCPCH信道的功率。",
    "options": [
      {
        "label": "A",
        "text": "A、高于"
      },
      {
        "label": "B",
        "text": "B、低于"
      },
      {
        "label": "C",
        "text": "C、等于"
      },
      {
        "label": "D",
        "text": "D、与PCCPCH信道的配置功率无关"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 854,
    "type": "单选",
    "q": "在TD-SCDMA系统中，时隙比例规划出的上下行的时隙转换点不可能在____时隙之前。",
    "options": [
      {
        "label": "A",
        "text": "A、TS1"
      },
      {
        "label": "B",
        "text": "B、TS2"
      },
      {
        "label": "C",
        "text": "C、TS5"
      },
      {
        "label": "D",
        "text": "D、TS6"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 855,
    "type": "单选",
    "q": "关于水平波瓣角度的选择，下列说法正确的是____。",
    "options": [
      {
        "label": "A",
        "text": "A、基站数目较多、覆盖半径较小、话务分布较大的区域，天线的水平波瓣宽度应选得大一点"
      },
      {
        "label": "B",
        "text": "B、对于业务信道定向赋形，全向天线的水平波瓣宽度的理论值为25度"
      },
      {
        "label": "C",
        "text": "C、在城市适合65度的三扇区定向天线，城镇可以使用水平波瓣角度为90度，农村则可以采用105度，对于高速公路可以采用20度的高增益天线"
      },
      {
        "label": "D",
        "text": "D、定向天线在0度赋形时水平波瓣宽度的理论值为17度，40度赋形时水平波瓣宽度的理论值为12.6度"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 856,
    "type": "单选",
    "q": "在分析路测资料时，有关手机发射功率参数描述错误的是____",
    "options": [
      {
        "label": "A",
        "text": "A、手机发射功率只有在拨打测试时才显示"
      },
      {
        "label": "B",
        "text": "B、手机发射功率在任何时候都显示"
      },
      {
        "label": "C",
        "text": "C、手机发射功率在手机为IDLE状态下不显示"
      },
      {
        "label": "D",
        "text": "D、手机发射功率直接反应功率控制下UE侧发射功率情况"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 857,
    "type": "单选",
    "q": "TD-SCDMA系统扰码长度____",
    "options": [
      {
        "label": "A",
        "text": "A、256chips"
      },
      {
        "label": "B",
        "text": "B、128chips"
      },
      {
        "label": "C",
        "text": "C、32chips"
      },
      {
        "label": "D",
        "text": "D、16chips"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 858,
    "type": "单选",
    "q": "TD-SCDMA系统中SYNC_DL码有____个",
    "options": [
      {
        "label": "A",
        "text": "A、128"
      },
      {
        "label": "B",
        "text": "B、64"
      },
      {
        "label": "C",
        "text": "C、32"
      },
      {
        "label": "D",
        "text": "D、16"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 859,
    "type": "单选",
    "q": "TD-SCDMA系统中SYNC_UL码共有____个",
    "options": [
      {
        "label": "A",
        "text": "A、256"
      },
      {
        "label": "B",
        "text": "B、128"
      },
      {
        "label": "C",
        "text": "C、64"
      },
      {
        "label": "D",
        "text": "D、32"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 860,
    "type": "单选",
    "q": "复合码可由扩频码与扰码逐元素相乘得到，128个扰码的复合码集合中，根据扩频比为16的复合码集合，128个扰码可以分为____组",
    "options": [
      {
        "label": "A",
        "text": "A、16"
      },
      {
        "label": "B",
        "text": "B、12"
      },
      {
        "label": "C",
        "text": "C、8"
      },
      {
        "label": "D",
        "text": "D、7"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 861,
    "type": "单选",
    "q": "TD-SCDMA系统中,在上下行时隙对称配置方式下单载波AMR12、2K业务码字受限容量为___",
    "options": [
      {
        "label": "A",
        "text": "A、21"
      },
      {
        "label": "B",
        "text": "B、22"
      },
      {
        "label": "C",
        "text": "C、23"
      },
      {
        "label": "D",
        "text": "D、24"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 862,
    "type": "单选",
    "q": "TD-SCDMA系统中,在上下行时隙对称配置方式下单载波CS64K业务码字受限容量为___",
    "options": [
      {
        "label": "A",
        "text": "A、4"
      },
      {
        "label": "B",
        "text": "B、5"
      },
      {
        "label": "C",
        "text": "C、6"
      },
      {
        "label": "D",
        "text": "D、7"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 863,
    "type": "单选",
    "q": "TD-SCDMA系统中,在上下行时隙对称配置方式下单载波PS128K业务码字受限容量为___",
    "options": [
      {
        "label": "A",
        "text": "A、1"
      },
      {
        "label": "B",
        "text": "B、2"
      },
      {
        "label": "C",
        "text": "C、3"
      },
      {
        "label": "D",
        "text": "D、4"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 864,
    "type": "单选",
    "q": "TD-SCDMA系统中,在上下行时隙对称配置方式下单载波PS384K业务码字受限容量为___",
    "options": [
      {
        "label": "A",
        "text": "A、1"
      },
      {
        "label": "B",
        "text": "B、2"
      },
      {
        "label": "C",
        "text": "C、3"
      },
      {
        "label": "D",
        "text": "D、4"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 865,
    "type": "单选",
    "q": "多媒体彩铃业务的业务中，HLR在SRI消息中携带的SS_CODE为___",
    "options": [
      {
        "label": "A",
        "text": "A、250"
      },
      {
        "label": "B",
        "text": "B、251"
      },
      {
        "label": "C",
        "text": "C、252"
      },
      {
        "label": "D",
        "text": "D、254"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 866,
    "type": "单选",
    "q": "切换触发门限是一个（）的差值，此参数是在RNC侧的OMCR上配置，是一个（）变量。___",
    "options": [
      {
        "label": "A",
        "text": "A、邻小区与本小区的接收信号（Pccpch_Rscp）强度；小区"
      },
      {
        "label": "B",
        "text": "B、邻小区与本小区的接收信号（Pccpch_Rscp）强度；全局"
      },
      {
        "label": "C",
        "text": "C、邻小区与本小区的CIR; 小区"
      },
      {
        "label": "D",
        "text": "D、邻小区与本小区的CIR; 全局"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 867,
    "type": "单选",
    "q": "如果干扰源处于被干扰系统下方一定高度时，比如PHS和TD-CDMA系统，可以考虑将干扰源天线更换为___的天线来获取更高的空间隔离度。",
    "options": [
      {
        "label": "A",
        "text": "A、上副瓣抑制较大"
      },
      {
        "label": "B",
        "text": "B、下副瓣抑制较大"
      },
      {
        "label": "C",
        "text": "C、上副瓣抑制较小"
      },
      {
        "label": "D",
        "text": "D、上副瓣抑制较小"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 868,
    "type": "单选",
    "q": "随着天线增益的下降，天线的3dB波瓣宽度的增大将使下倾角的动态范围___。",
    "options": [
      {
        "label": "A",
        "text": "A、减小"
      },
      {
        "label": "B",
        "text": "B、增大"
      },
      {
        "label": "C",
        "text": "C、不变"
      },
      {
        "label": "D",
        "text": "D、先减小后增大"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 869,
    "type": "单选",
    "q": "通用模型中，绕射修正系数是___。",
    "options": [
      {
        "label": "A",
        "text": "A、K1"
      },
      {
        "label": "B",
        "text": "B、K 3"
      },
      {
        "label": "C",
        "text": "C、K 5"
      },
      {
        "label": "D",
        "text": "D、K 7"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 870,
    "type": "单选",
    "q": "通常在某一Cluster中建成并开通正常站点占总数的____以上，并且保证基本连续覆盖的时候，就可以进行RF优化。",
    "options": [
      {
        "label": "A",
        "text": "A、80％"
      },
      {
        "label": "B",
        "text": "B、85％"
      },
      {
        "label": "C",
        "text": "C、75％"
      },
      {
        "label": "D",
        "text": "D、70％"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 871,
    "type": "单选",
    "q": "加密功能为GPRS用户数据传送过程提供必要的安全性保证，加密算法分布在SGSN和MS两侧，SGSN侧的加密过程在Gb接口协议的那一层进行处理___",
    "options": [
      {
        "label": "A",
        "text": "A、BSSGP"
      },
      {
        "label": "B",
        "text": "B、SNDCP"
      },
      {
        "label": "C",
        "text": "C、LLC"
      },
      {
        "label": "D",
        "text": "D、NS"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 872,
    "type": "单选",
    "q": "下列属于IU-PS口控制面的协议层是___",
    "options": [
      {
        "label": "A",
        "text": "A、 RANAP"
      },
      {
        "label": "B",
        "text": "B、 RNSAP"
      },
      {
        "label": "C",
        "text": "C、 NBAP"
      },
      {
        "label": "D",
        "text": "D、 RRC"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 873,
    "type": "单选",
    "q": "对于前转呼叫A--->B--->C的情况，与3G计费规范要求的号码填写格式不相符的是___。",
    "options": [
      {
        "label": "A",
        "text": "A、MOC话单中主叫是A、被叫是B、连接号码是C"
      },
      {
        "label": "B",
        "text": "B、CFW话单中主叫是A、被叫是C、连接号码是C"
      },
      {
        "label": "C",
        "text": "C、MTC话单中主叫是A、被叫是C、连接号码是C"
      },
      {
        "label": "D",
        "text": "D、MTC话单中主叫是B、被叫是C、连接号码是A"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 874,
    "type": "单选",
    "q": "对ATM描述正确的是___。",
    "options": [
      {
        "label": "A",
        "text": "A、一个ATM信元由52个字节组成，其中有48字节净荷；"
      },
      {
        "label": "B",
        "text": "B、ATM信元分UNI和NNI两种，其结构完全相同；"
      },
      {
        "label": "C",
        "text": "C、在ATM交换中，VPI,VCI就足以定义一个物理承载；"
      },
      {
        "label": "D",
        "text": "D、ATM层的功能可以分为三大类：信元复用/解复用，有关信元头的操作和一般流量控制功能。"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 875,
    "type": "单选",
    "q": "对于TD-SCDMA技术体制，其核心网基于___网络的演进，并保持与之兼容。",
    "options": [
      {
        "label": "A",
        "text": "A、IS-41"
      },
      {
        "label": "B",
        "text": "B、IP"
      },
      {
        "label": "C",
        "text": "C、GSM/GPRS"
      },
      {
        "label": "D",
        "text": "D、IS-136"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 876,
    "type": "单选",
    "q": "以下对TD－SCDMA网络中MSC设备鉴权功能要求描述错误的是___。",
    "options": [
      {
        "label": "A",
        "text": "A、MSC Server/VLR应能向HLR/AuC索取并存储鉴权参数"
      },
      {
        "label": "B",
        "text": "B、MSC Server不可支持UE/MS对网络的反向鉴权"
      },
      {
        "label": "C",
        "text": "C、五元组鉴权参数不可重用。"
      },
      {
        "label": "D",
        "text": "D、在移动台位置登记时向前一个VLR索取鉴权参数"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 877,
    "type": "单选",
    "q": "TD-SCDMA系统中,规定的上行同步调整步长的取值范围是___",
    "options": [
      {
        "label": "A",
        "text": "A、1-8chips"
      },
      {
        "label": "B",
        "text": "B、1/8-1chips"
      },
      {
        "label": "C",
        "text": "C、1-4chips"
      },
      {
        "label": "D",
        "text": "D、1/4-1chips"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 878,
    "type": "单选",
    "q": "TD-SCDMA系统中,功率控制最快频率为___",
    "options": [
      {
        "label": "A",
        "text": "A、100Hz"
      },
      {
        "label": "B",
        "text": "B、200Hz"
      },
      {
        "label": "C",
        "text": "C、300Hz"
      },
      {
        "label": "D",
        "text": "D、400Hz"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 879,
    "type": "单选",
    "q": "TD-SCDMA系统中,一般通过GPS实现基站之间相同的帧同步定时，其精度要求为___",
    "options": [
      {
        "label": "A",
        "text": "A、3微秒"
      },
      {
        "label": "B",
        "text": "B、4微秒"
      },
      {
        "label": "C",
        "text": "C、5微秒"
      },
      {
        "label": "D",
        "text": "D、6微秒"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 880,
    "type": "单选",
    "q": "UE能力包括了UE的全部的UMTS无线能力,以下描述不属于UE能力的是___",
    "options": [
      {
        "label": "A",
        "text": "A、power control"
      },
      {
        "label": "B",
        "text": "B、code resource"
      },
      {
        "label": "C",
        "text": "C、ciphering"
      },
      {
        "label": "D",
        "text": "D、multislot capability"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 881,
    "type": "单选",
    "q": "UMTS网络比2G网络在安全性上增加了___",
    "options": [
      {
        "label": "A",
        "text": "A、网络对手机设备的鉴权"
      },
      {
        "label": "B",
        "text": "B、网络对手机用户的鉴权"
      },
      {
        "label": "C",
        "text": "C、手机用户对网络的鉴权"
      },
      {
        "label": "D",
        "text": "D、网络对手机类型的鉴权"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 882,
    "type": "单选",
    "q": "在20MHz系统带宽下，LTE的最初设计目标上下行支持的瞬间峰值速率（2T2R）分别是？",
    "options": [
      {
        "label": "A",
        "text": ""
      },
      {
        "label": "B",
        "text": ""
      },
      {
        "label": "C",
        "text": ""
      },
      {
        "label": "D",
        "text": ""
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 883,
    "type": "单选",
    "q": "根据协议对LTE系统需求支持的定义，从主流状态到激活状态的时延和零负载（单用户",
    "options": [
      {
        "label": "A",
        "text": "单数据流）"
      },
      {
        "label": "B",
        "text": "小IP分组条件下单向时延分别小于多少"
      },
      {
        "label": "C",
        "text": ""
      },
      {
        "label": "D",
        "text": ""
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 884,
    "type": "单选",
    "q": "在E-UTRN系统中，MC使用的重传方式是？",
    "options": [
      {
        "label": "A",
        "text": "HARQ；"
      },
      {
        "label": "B",
        "text": "FE；？ARQD"
      },
      {
        "label": "C",
        "text": "CRC"
      },
      {
        "label": "D",
        "text": ""
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 885,
    "type": "单选",
    "q": "eNodeB侧对控制面数据经过（  ）协议与MME交互。",
    "options": [
      {
        "label": "A",
        "text": "GTPU/UDP；"
      },
      {
        "label": "B",
        "text": "X2AP/STP；"
      },
      {
        "label": "C",
        "text": "S1AP/SCTP；"
      },
      {
        "label": "D",
        "text": "RRC"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 886,
    "type": "单选",
    "q": "混合自动重传请求协议HARQ是在那个子层实现的（）",
    "options": [
      {
        "label": "A",
        "text": "MAC；"
      },
      {
        "label": "B",
        "text": "RL；"
      },
      {
        "label": "C",
        "text": "PCP；"
      },
      {
        "label": "D",
        "text": "PHY"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 887,
    "type": "单选",
    "q": "RCH在频域上占用几个RB?",
    "options": [
      {
        "label": "A",
        "text": "3"
      },
      {
        "label": "B",
        "text": "4"
      },
      {
        "label": "C",
        "text": "5"
      },
      {
        "label": "D",
        "text": "6"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 888,
    "type": "单选",
    "q": "用于上行调度的控制信息是哪个？",
    "options": [
      {
        "label": "A",
        "text": "DCI1"
      },
      {
        "label": "B",
        "text": "BDI0"
      },
      {
        "label": "C",
        "text": "CCI1A"
      },
      {
        "label": "D",
        "text": "DDCI2B"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 889,
    "type": "单选",
    "q": "LTE采用作为（  ）下行多址方式",
    "options": [
      {
        "label": "A",
        "text": "CDMA"
      },
      {
        "label": "B",
        "text": "FDMA"
      },
      {
        "label": "C",
        "text": "OFMA"
      },
      {
        "label": "D",
        "text": "TDMA"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 890,
    "type": "单选",
    "q": "集中式的SON架构中,SON功能在以下哪个实现",
    "options": [
      {
        "label": "A",
        "text": "OAM"
      },
      {
        "label": "B",
        "text": "BeNB"
      },
      {
        "label": "C",
        "text": "MME"
      },
      {
        "label": "D",
        "text": "DSGW"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 891,
    "type": "单选",
    "q": "LTE中，寻呼区域采用（   ）",
    "options": [
      {
        "label": "A",
        "text": "LAC"
      },
      {
        "label": "B",
        "text": "RAC"
      },
      {
        "label": "C",
        "text": "TA"
      },
      {
        "label": "D",
        "text": "TAlist"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 892,
    "type": "单选",
    "q": "LTE的缩写是？",
    "options": [
      {
        "label": "A",
        "text": "LongTermEvolution"
      },
      {
        "label": "B",
        "text": "LongTimeEvolution"
      },
      {
        "label": "C",
        "text": "LongTimeEquip"
      },
      {
        "label": "D",
        "text": "LastTermEvolution"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 893,
    "type": "单选",
    "q": "LTE共有（）个PCI",
    "options": [
      {
        "label": "A",
        "text": "3"
      },
      {
        "label": "B",
        "text": "32"
      },
      {
        "label": "C",
        "text": "512"
      },
      {
        "label": "D",
        "text": "504"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 894,
    "type": "单选",
    "q": "在E-UTRAN系统中，MAC使用的重传方式是：",
    "options": [
      {
        "label": "A",
        "text": "HAR"
      },
      {
        "label": "B",
        "text": "FEC"
      },
      {
        "label": "C",
        "text": "ARQ"
      },
      {
        "label": "D",
        "text": "CRC"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 895,
    "type": "单选",
    "q": "用于上行调度的控制信息是哪个:",
    "options": [
      {
        "label": "A",
        "text": "DCI1"
      },
      {
        "label": "B",
        "text": "DCI0"
      },
      {
        "label": "C",
        "text": "DCI1A"
      },
      {
        "label": "D",
        "text": "DCI2"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 896,
    "type": "单选",
    "q": "查询小区状态的MML命令",
    "options": [
      {
        "label": "A",
        "text": "DSPCELL"
      },
      {
        "label": "B",
        "text": ""
      },
      {
        "label": "C",
        "text": ""
      },
      {
        "label": "D",
        "text": ""
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 897,
    "type": "单选",
    "q": "系统消息（）包含小区重选相关的其它EUTRA频点和异频邻小区信息",
    "options": [
      {
        "label": "A",
        "text": "SIB1"
      },
      {
        "label": "B",
        "text": "SIB3"
      },
      {
        "label": "C",
        "text": "SIB4"
      },
      {
        "label": "D",
        "text": "SIB5"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 898,
    "type": "单选",
    "q": "TD-LTE小区平均吞吐量指标",
    "options": [
      {
        "label": "A",
        "text": "DL：27.3MbpsUL:7.6Mbps"
      },
      {
        "label": "B",
        "text": "DL：17.3MbpsUL:10.6Mbps"
      },
      {
        "label": "C",
        "text": "DL：27.3MbpsUL:10.6Mbps"
      },
      {
        "label": "D",
        "text": "DL：17.3MbpsUL:7.6Mbps"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 899,
    "type": "单选",
    "q": "在eNodeB的MAC子层与物理层的SP是哪个？",
    "options": [
      {
        "label": "A",
        "text": "逻辑信道"
      },
      {
        "label": "B",
        "text": "传输信道"
      },
      {
        "label": "C",
        "text": "物理信道"
      },
      {
        "label": "D",
        "text": "无线承载"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 900,
    "type": "单选",
    "q": "天线的VSWR合理的范围为？ 1<VSWR<3",
    "options": [
      {
        "label": "A",
        "text": "01<VSWR<1"
      },
      {
        "label": "B",
        "text": "5VSWR>1"
      },
      {
        "label": "C",
        "text": "5VSWR>3"
      },
      {
        "label": "D",
        "text": "0"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 901,
    "type": "单选",
    "q": "通常我们所说的天线绝对高度指的是？",
    "options": [
      {
        "label": "A",
        "text": ""
      },
      {
        "label": "B",
        "text": ""
      },
      {
        "label": "C",
        "text": ""
      },
      {
        "label": "D",
        "text": ""
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 902,
    "type": "单选",
    "q": "以下哪种信道支持空间复用",
    "options": [
      {
        "label": "A",
        "text": "PCFICH"
      },
      {
        "label": "B",
        "text": "PHIH"
      },
      {
        "label": "C",
        "text": "PCH"
      },
      {
        "label": "D",
        "text": "PDSCH"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 903,
    "type": "单选",
    "q": "下载截图时需要",
    "options": [
      {
        "label": "A",
        "text": "不做要求"
      },
      {
        "label": "B",
        "text": "要保证RadioParameters和HooNetMeter的完整"
      },
      {
        "label": "C",
        "text": "要保证RadioParameters完整"
      },
      {
        "label": "D",
        "text": "保证HooNetMeter完整"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 904,
    "type": "单选",
    "q": "以下3GPP版本中，哪个版本是LTE的第一版",
    "options": [
      {
        "label": "A",
        "text": ".R6"
      },
      {
        "label": "B",
        "text": ".R7"
      },
      {
        "label": "C",
        "text": ".R8"
      },
      {
        "label": "D",
        "text": ".R9"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 905,
    "type": "单选",
    "q": "支持宏分集的网络架构（三层构架）不包括",
    "options": [
      {
        "label": "A",
        "text": "核心网CN"
      },
      {
        "label": "B",
        "text": "无线网络控制器RNC"
      },
      {
        "label": "C",
        "text": "基站NodeB"
      },
      {
        "label": "D",
        "text": "核心网+基站"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 906,
    "type": "单选",
    "q": "TTACH REQUEST, ATTACH ACCEPT分别包含于哪条空口RRC消息内:（）",
    "options": [
      {
        "label": "A",
        "text": "RRCCONNECTIONREQUEST,RRCCONNECTIONSETUP"
      },
      {
        "label": "B",
        "text": "RRCCONNECTIONSETUP,RRCCONNECTIONSETUPCOMPELTE"
      },
      {
        "label": "C",
        "text": "RRCCONNECTIONSETUPCOMPELTE,RRCCONNECTIONRECONFIGURATION"
      },
      {
        "label": "D",
        "text": "RRCCONNECTIONRECONFIGURATION,RRCCONNECTIONSETUPRECONFIGURATIONCOMPELTE"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 907,
    "type": "单选",
    "q": "在Norml情况下，一个RB包含（  ）个子载波",
    "options": [
      {
        "label": "A",
        "text": "3"
      },
      {
        "label": "B",
        "text": "6"
      },
      {
        "label": "C",
        "text": "12"
      },
      {
        "label": "D",
        "text": "24"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 908,
    "type": "单选",
    "q": "MIB信息是携带在哪个下行物理层信道中？",
    "options": [
      {
        "label": "A",
        "text": "PDCCH"
      },
      {
        "label": "B",
        "text": "PHIH"
      },
      {
        "label": "C",
        "text": "PCFICH"
      },
      {
        "label": "D",
        "text": "PBCH"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 909,
    "type": "单选",
    "q": "HRQ的信息是承载在哪个信道上的？",
    "options": [
      {
        "label": "A",
        "text": "PDCCH"
      },
      {
        "label": "B",
        "text": "PDSH"
      },
      {
        "label": "C",
        "text": "PHICH"
      },
      {
        "label": "D",
        "text": "PCFICH"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 910,
    "type": "单选",
    "q": "关于LTE TDD帧结构，哪些说法是正确的（）",
    "options": [
      {
        "label": "A",
        "text": "一个长度为10ms的无线帧由2个长度为5ms的半帧构成"
      },
      {
        "label": "B",
        "text": "常规子帧由两个长度为0.5ms的时隙构成，长度为1ms"
      },
      {
        "label": "C",
        "text": "支持5ms和10msDL?UL切换点周期"
      },
      {
        "label": "D",
        "text": "UpPTS以及UpPTS之后的第一个子帧永远为上行"
      }
    ],
    "a": "E",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 911,
    "type": "单选",
    "q": "关于切换过程描叙正确的是：（）",
    "options": [
      {
        "label": "A",
        "text": "切换过程中，收到源小区发来的RRCCONNECTIONRECONFIGURATION，UE在源小区发送RRCCONNECTIONSETUPRECONFIGURATIONCOMPELTE"
      },
      {
        "label": "B",
        "text": "切换过程中，收到源小区发来的RRCCONNECTIONRECONFIGURATION，UE在目标小区随机接入后并在目标小区上送RRCCONNECTIONSETUPRECONFIGURATIONCOMPELTE"
      },
      {
        "label": "C",
        "text": "切换过程中，收到源小区发来的RRCCONNECTIONRECONFIGURATION，UE无需随机接入过程，直接在目标小区上送RRCCONNECTIONSETUPRECONFIGURATIONCOMPELTE"
      },
      {
        "label": "D",
        "text": "切换过程中，UE在目标随机接入后收到目标小区发来的RRCCONNECTIONRECONFIGURATION后在目标小区上送RRCCONNECTIONSETUPRECONFIGURATIONCOMPELTE"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 912,
    "type": "单选",
    "q": "LTE NR的过程中，UE通过（ ）信道获得邻区的GCI信息。",
    "options": [
      {
        "label": "A",
        "text": "CH"
      },
      {
        "label": "B",
        "text": "H"
      },
      {
        "label": "C",
        "text": "MIB"
      },
      {
        "label": "D",
        "text": "SIB"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 913,
    "type": "单选",
    "q": "目前资源的最小粒度为",
    "options": [
      {
        "label": "A",
        "text": "RE"
      },
      {
        "label": "B",
        "text": "RB"
      },
      {
        "label": "C",
        "text": "REG"
      },
      {
        "label": "D",
        "text": "CCE"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 914,
    "type": "单选",
    "q": "在LTE中，上行功控的精度是？",
    "options": [
      {
        "label": "A",
        "text": "0"
      },
      {
        "label": "B",
        "text": "5dBB:1dB:1"
      },
      {
        "label": "C",
        "text": "5B:2B"
      },
      {
        "label": "D",
        "text": ""
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 915,
    "type": "单选",
    "q": "目前阶段，LTE系统内的切换是基于？",
    "options": [
      {
        "label": "A",
        "text": "RSRP"
      },
      {
        "label": "B",
        "text": "QI"
      },
      {
        "label": "C",
        "text": "RSRQ"
      },
      {
        "label": "D",
        "text": "RSSI"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 916,
    "type": "单选",
    "q": "3GPP要求LTE系统每MHz下行平均用户吞吐量应达到R6 HSDP的（）倍。",
    "options": [
      {
        "label": "A",
        "text": "1~2；"
      },
      {
        "label": "B",
        "text": "2~3；"
      },
      {
        "label": "C",
        "text": "3~4；"
      },
      {
        "label": "D",
        "text": "4~5"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 917,
    "type": "单选",
    "q": "以下哪个网元设备不能被OMC管理？（  ）",
    "options": [
      {
        "label": "A",
        "text": "eNodeB"
      },
      {
        "label": "B",
        "text": "SGSN"
      },
      {
        "label": "C",
        "text": "MME"
      },
      {
        "label": "D",
        "text": "SGW"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 918,
    "type": "单选",
    "q": "LTE协议规定的UE最大发射功率是？",
    "options": [
      {
        "label": "A",
        "text": "20dm"
      },
      {
        "label": "B",
        "text": "23dbm"
      },
      {
        "label": "C",
        "text": "30bm"
      },
      {
        "label": "D",
        "text": "33dbm"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 919,
    "type": "单选",
    "q": "PBCH支持的调制方式是？",
    "options": [
      {
        "label": "A",
        "text": "PSK"
      },
      {
        "label": "B",
        "text": "QPSK"
      },
      {
        "label": "C",
        "text": "16QAM"
      },
      {
        "label": "D",
        "text": "32QAM"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 920,
    "type": "单选",
    "q": "上行功控中，PRCH只有？",
    "options": [
      {
        "label": "A",
        "text": "开环功控"
      },
      {
        "label": "B",
        "text": "闭环功控"
      },
      {
        "label": "C",
        "text": "内环功控"
      },
      {
        "label": "D",
        "text": "外环功控"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 921,
    "type": "单选",
    "q": "TTI bundling支持的调制方式为？",
    "options": [
      {
        "label": "A",
        "text": "PSK"
      },
      {
        "label": "B",
        "text": "QPSK"
      },
      {
        "label": "C",
        "text": "16QAM"
      },
      {
        "label": "D",
        "text": "64QAM"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 922,
    "type": "单选",
    "q": "系统消息（   ）包含小区重选相关的其它E-UTR频点和异频邻小区信息。",
    "options": [
      {
        "label": "A",
        "text": "SI1"
      },
      {
        "label": "B",
        "text": "SIB3"
      },
      {
        "label": "C",
        "text": "SIB4"
      },
      {
        "label": "D",
        "text": "SIB5"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 923,
    "type": "单选",
    "q": "假定小区输出总功率为46dBm，在2天线时，单天线功率是？",
    "options": [
      {
        "label": "A",
        "text": "46dm"
      },
      {
        "label": "B",
        "text": "43dbm"
      },
      {
        "label": "C",
        "text": "49bm"
      },
      {
        "label": "D",
        "text": "40dbm"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 924,
    "type": "单选",
    "q": "在LTE下行和上行信道中，存在一定的开销信道。在对业务信道覆盖估计时候，需要考虑这些开销信道影响。",
    "options": [
      {
        "label": "A",
        "text": ""
      },
      {
        "label": "B",
        "text": ""
      },
      {
        "label": "C",
        "text": ""
      },
      {
        "label": "D",
        "text": ""
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 925,
    "type": "单选",
    "q": "E-UTR系统覆盖半径最大可达（）。",
    "options": [
      {
        "label": "A",
        "text": "10km；"
      },
      {
        "label": "B",
        "text": "30km；"
      },
      {
        "label": "C",
        "text": "50km；"
      },
      {
        "label": "D",
        "text": "100km"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 926,
    "type": "单选",
    "q": "以下哪些是属于SGW的功能（）",
    "options": [
      {
        "label": "A",
        "text": "外部IP地址的连接"
      },
      {
        "label": "B",
        "text": "对UE用户的寻呼"
      },
      {
        "label": "C",
        "text": "针对UE，PDN和QCI的计费"
      },
      {
        "label": "D",
        "text": "用户策略的实现"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 927,
    "type": "单选",
    "q": "以下哪一点不是PCI规划需要重点关注的（）",
    "options": [
      {
        "label": "A",
        "text": "频率"
      },
      {
        "label": "B",
        "text": "RS位置"
      },
      {
        "label": "C",
        "text": "小区位置关系"
      },
      {
        "label": "D",
        "text": "TA归属"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 928,
    "type": "单选",
    "q": "以下哪一项不是TD-LTE标准中定义的TDD配比格式（）",
    "options": [
      {
        "label": "A",
        "text": "DSUUUDSUUU"
      },
      {
        "label": "B",
        "text": "DSUUDDSUUD"
      },
      {
        "label": "C",
        "text": "DDSUUDDSUU"
      },
      {
        "label": "D",
        "text": "DSUDDDSUDD"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 929,
    "type": "单选",
    "q": "以下哪种RLC实体不支持重复检测、丢失检测:",
    "options": [
      {
        "label": "A",
        "text": "AM"
      },
      {
        "label": "B",
        "text": "TM"
      },
      {
        "label": "C",
        "text": "UM"
      },
      {
        "label": "D",
        "text": ""
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 930,
    "type": "单选",
    "q": "以下哪种RLC实体支持ARQ重传:",
    "options": [
      {
        "label": "A",
        "text": "AM"
      },
      {
        "label": "B",
        "text": "TM"
      },
      {
        "label": "C",
        "text": "UM"
      },
      {
        "label": "D",
        "text": ""
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 931,
    "type": "单选",
    "q": "以下哪种RLC实体最适合用于VoIP业务:",
    "options": [
      {
        "label": "A",
        "text": "AM"
      },
      {
        "label": "B",
        "text": "TM"
      },
      {
        "label": "C",
        "text": "UM"
      },
      {
        "label": "D",
        "text": ""
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 932,
    "type": "单选",
    "q": "以下哪种备份形式是对数据库进行整体备份（）",
    "options": [
      {
        "label": "A",
        "text": "RAID备份"
      },
      {
        "label": "B",
        "text": "业务数据库备份"
      },
      {
        "label": "C",
        "text": "全备份"
      },
      {
        "label": "D",
        "text": "增量备份"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 933,
    "type": "单选",
    "q": "以下哪种单载波带宽是LTE协议不支持的（）",
    "options": [
      {
        "label": "A",
        "text": "40M"
      },
      {
        "label": "B",
        "text": "5M"
      },
      {
        "label": "C",
        "text": "15M"
      },
      {
        "label": "D",
        "text": "20M"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 934,
    "type": "单选",
    "q": "多码字传输即复用到多根天线的数据流可以独立进行信道编码和调制，目前LTE支持的最大码字数目是？（    ）",
    "options": [
      {
        "label": "A",
        "text": "1"
      },
      {
        "label": "B",
        "text": "2"
      },
      {
        "label": "C",
        "text": "3"
      },
      {
        "label": "D",
        "text": "4"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 935,
    "type": "单选",
    "q": "发射机采用以下哪种技术来实现OFDM（）",
    "options": [
      {
        "label": "A",
        "text": "FFT"
      },
      {
        "label": "B",
        "text": "IFFT"
      },
      {
        "label": "C",
        "text": "匹配滤波器"
      },
      {
        "label": "D",
        "text": "IQ调制"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 936,
    "type": "单选",
    "q": "发射模式(TM)中，下面哪一项的说法是错误的（）",
    "options": [
      {
        "label": "A",
        "text": "TM1是单天线端口传输：主要应用于单天线传输的场合"
      },
      {
        "label": "B",
        "text": "TM2适合于小区边缘信道情况比较复杂，干扰较大的情况，有时候也用于高速的情况"
      },
      {
        "label": "C",
        "text": "TM3是大延迟分集：合适于终端（UE）高速移动的情况"
      },
      {
        "label": "D",
        "text": "TM4是Rank1的传输：主要适合于小区边缘的情况"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 937,
    "type": "单选",
    "q": "发射模式(TM)中，下面哪一项的说法是正确的 （）",
    "options": [
      {
        "label": "A",
        "text": "TM2为单天线端口传输：主要应用于单天线传输的场合"
      },
      {
        "label": "B",
        "text": "TM3适合于信道条件较好的场合，用于提供高的数据率传输"
      },
      {
        "label": "C",
        "text": "TM4 适合与外场高速移动的场合"
      },
      {
        "label": "D",
        "text": "TM5 MU-MIMO传输模式：主要用来提高小区的容量"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 938,
    "type": "单选",
    "q": "发射模式(TM)中，下面哪一项的说法是正确的（）",
    "options": [
      {
        "label": "A",
        "text": "TM3常用于室分的场合"
      },
      {
        "label": "B",
        "text": "TM3需要8通道智能天线才能实现"
      },
      {
        "label": "C",
        "text": "TM7 能提高终端在小区边缘的表现"
      },
      {
        "label": "D",
        "text": "TM4 适合与外场高速移动的场合"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 939,
    "type": "单选",
    "q": "以下信道分别对应哪些功能：PCFICH（）",
    "options": [
      {
        "label": "A",
        "text": "在子帧的第一个OFDM符号上发送，占用4个REG，均匀分布在整个系统带宽。"
      },
      {
        "label": "B",
        "text": "采用BPSK调制，传输上行信道反馈信息。"
      },
      {
        "label": "C",
        "text": "采用QPSK调制，携带一个子帧中用于传输PDCCH的OFDM符号数，传输格式。"
      },
      {
        "label": "D",
        "text": "用于发送上/下行资源调度信息、功控命令等，通过下行控制信息块DCI承载，不同用户使用不同的DCI资源。"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 940,
    "type": "单选",
    "q": "传输信道与对应的物理信道的映射关系中，与PCH对应的物理信道为:",
    "options": [
      {
        "label": "A",
        "text": "PBCH"
      },
      {
        "label": "B",
        "text": "PDSCH"
      },
      {
        "label": "C",
        "text": "PMCH"
      },
      {
        "label": "D",
        "text": "PDCCH"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 941,
    "type": "单选",
    "q": "一个RB包含多少个RE（）",
    "options": [
      {
        "label": "A",
        "text": "12"
      },
      {
        "label": "B",
        "text": "36"
      },
      {
        "label": "C",
        "text": "72"
      },
      {
        "label": "D",
        "text": "84"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 942,
    "type": "单选",
    "q": "在对路测数据的分析操作中，:一个很重要的功能，通过该功能，分析人员可以再现路测时的情况，帮助分析无线网络中存在的问题:",
    "options": [
      {
        "label": "A",
        "text": "回放"
      },
      {
        "label": "B",
        "text": "数据合并"
      },
      {
        "label": "C",
        "text": "切换数据流"
      },
      {
        "label": "D",
        "text": "分析数据"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 943,
    "type": "单选",
    "q": "在工程建设过程中，当部分网络覆盖区域形成片区效应后（一般大于__个以上基站形成连续覆盖）",
    "options": [
      {
        "label": "A",
        "text": "8"
      },
      {
        "label": "B",
        "text": "9"
      },
      {
        "label": "C",
        "text": "10"
      },
      {
        "label": "D",
        "text": "11"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 944,
    "type": "单选",
    "q": "以下说法正确的是（）",
    "options": [
      {
        "label": "A",
        "text": "如果采用TD-LTE系统组网，必须采用8天线规模建网，2天线不能独立建网"
      },
      {
        "label": "B",
        "text": "一个时隙中，频域上连续的宽度为150kHz的物理资源称为一个资源块"
      },
      {
        "label": "C",
        "text": "缩小宏站的覆盖距离，不一定能提升覆盖性能"
      },
      {
        "label": "D",
        "text": "链路预算的覆盖半径是由中心用户速率要求确定的"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 945,
    "type": "单选",
    "q": "以下说法正确的是（）",
    "options": [
      {
        "label": "A",
        "text": "TD-LTE标准是一种国内标准"
      },
      {
        "label": "B",
        "text": "TD-LTE只能异频组网"
      },
      {
        "label": "C",
        "text": "TD-LTE核心网兼容2、3G"
      },
      {
        "label": "D",
        "text": "TD-LTE的核心网兼容FDD-LTE"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 946,
    "type": "单选",
    "q": "以下说法中错误的是（）",
    "options": [
      {
        "label": "A",
        "text": "在ECM-IDLE状态下，UE和网络间没有NAS信令连接，UE执行小区选择/重选以及PLMN选择。"
      },
      {
        "label": "B",
        "text": "MME能在UE注册的TA列表的全部小区中发起寻呼。"
      },
      {
        "label": "C",
        "text": "UE在ECM-IDLE状态下的位置是可知的，这时向UE发Paging，是向所有的注册小区发广播消息。"
      },
      {
        "label": "D",
        "text": "在EPS中，注册区域由一系列TA组成，即TA列表。每个TA由一到多个小区组成。TA之间区域可以重叠。"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 947,
    "type": "单选",
    "q": "以下物理信道中，不支持64QAM调制方式的物理信道是:",
    "options": [
      {
        "label": "A",
        "text": "PUSCH"
      },
      {
        "label": "B",
        "text": "PDSCH"
      },
      {
        "label": "C",
        "text": "PMCH"
      },
      {
        "label": "D",
        "text": "PBCH"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 948,
    "type": "单选",
    "q": "LTE 同步信号的周期是（）ms，分为主同步信号（PSS）和辅同步信号（SSS）。",
    "options": [
      {
        "label": "A",
        "text": "1"
      },
      {
        "label": "B",
        "text": "2"
      },
      {
        "label": "C",
        "text": "3"
      },
      {
        "label": "D",
        "text": "5"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 949,
    "type": "单选",
    "q": "LTE 系统传输用户数据主要使用（   ）信道",
    "options": [
      {
        "label": "A",
        "text": "专用信道"
      },
      {
        "label": "B",
        "text": "公用信道"
      },
      {
        "label": "C",
        "text": "共享信道"
      },
      {
        "label": "D",
        "text": "信令信道"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 950,
    "type": "单选",
    "q": "LTE（3.9G）中下行调制有几种",
    "options": [
      {
        "label": "A",
        "text": "1"
      },
      {
        "label": "B",
        "text": "2"
      },
      {
        "label": "C",
        "text": "3"
      },
      {
        "label": "D",
        "text": "4"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 951,
    "type": "单选",
    "q": "LTE/EPC网络,在开机过程中，以下哪个描述是正确的（）",
    "options": [
      {
        "label": "A",
        "text": "建立默认的EPS承载"
      },
      {
        "label": "B",
        "text": "建立专属的EPS承载"
      },
      {
        "label": "C",
        "text": "分配IPv4和IPv6的地址"
      },
      {
        "label": "D",
        "text": "S5接口上为GTP和PMIP协议的承载层建立"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 952,
    "type": "单选",
    "q": "LTE/EPC网络的去附着流程可由什么实体发起（）",
    "options": [
      {
        "label": "A",
        "text": "UE"
      },
      {
        "label": "B",
        "text": "MME"
      },
      {
        "label": "C",
        "text": "HSS"
      },
      {
        "label": "D",
        "text": "以上都对"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 953,
    "type": "单选",
    "q": "LTE/EPC网络实现语音业务的解决方案包括（）",
    "options": [
      {
        "label": "A",
        "text": "CS fallback      （CSFB）"
      },
      {
        "label": "B",
        "text": "多模双待"
      },
      {
        "label": "C",
        "text": "SRVCC"
      },
      {
        "label": "D",
        "text": "以上都正确"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 954,
    "type": "单选",
    "q": "LTE/EPC网络选择SGW的输入参数是（）",
    "options": [
      {
        "label": "A",
        "text": "TA"
      },
      {
        "label": "B",
        "text": "IMSI"
      },
      {
        "label": "C",
        "text": "GUTI"
      },
      {
        "label": "D",
        "text": "IP"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 955,
    "type": "单选",
    "q": "LTE/EPC网络中,GTP-C协议使用的GTP版本是（）",
    "options": [
      {
        "label": "A",
        "text": "V1"
      },
      {
        "label": "B",
        "text": "V2"
      },
      {
        "label": "C",
        "text": "V3"
      },
      {
        "label": "D",
        "text": "V4"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 956,
    "type": "单选",
    "q": "LTE/EPC网络中，手机成功完成初始化附着后，移动性管理的状态变为（）",
    "options": [
      {
        "label": "A",
        "text": "EMM-Registered"
      },
      {
        "label": "B",
        "text": "ECM Connected"
      },
      {
        "label": "C",
        "text": "ECM Active"
      },
      {
        "label": "D",
        "text": "EMM-Deregisted"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 957,
    "type": "单选",
    "q": "LTE/EPC网络中，手机完成业务请求后，状态变为（）",
    "options": [
      {
        "label": "A",
        "text": "EMM-Registered"
      },
      {
        "label": "B",
        "text": "ECM Connected"
      },
      {
        "label": "C",
        "text": "ECM IDLE"
      },
      {
        "label": "D",
        "text": "EMM-Deregisted"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 958,
    "type": "单选",
    "q": "CCE(Control Channel Element)可用于数据量相对较大的PDCCH的资源分配,每个用户的PDCCH只能占用（）个CCE,称为聚合级别。",
    "options": [
      {
        "label": "A",
        "text": "1,2,4,8"
      },
      {
        "label": "B",
        "text": "1,2,8,16"
      },
      {
        "label": "C",
        "text": "16,24,48,96"
      },
      {
        "label": "D",
        "text": "16,32,48,96"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 959,
    "type": "单选",
    "q": "CNP支持的传播模型是:",
    "options": [
      {
        "label": "A",
        "text": "SPM"
      },
      {
        "label": "B",
        "text": "Cost231-Hata"
      },
      {
        "label": "C",
        "text": "Cost-Hata"
      },
      {
        "label": "D",
        "text": "通用宏小区模型"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 960,
    "type": "单选",
    "q": "有关Diameter协议说法不正确的是（）",
    "options": [
      {
        "label": "A",
        "text": "由RADIUS协议演变而来"
      },
      {
        "label": "B",
        "text": "Peer 到Peer的协议"
      },
      {
        "label": "C",
        "text": "不同接口传不同类型消息"
      },
      {
        "label": "D",
        "text": "消息中携带的参数称为IE"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 961,
    "type": "单选",
    "q": "有关SCTP协议说法不正确的是（）",
    "options": [
      {
        "label": "A",
        "text": "是传输层协议"
      },
      {
        "label": "B",
        "text": "数据在偶联中按序传递"
      },
      {
        "label": "C",
        "text": "保证上层信令的可靠传递"
      },
      {
        "label": "D",
        "text": "采用四次握手方式建立连接"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 962,
    "type": "单选",
    "q": "有关SGsAP协议说法正确的是（）",
    "options": [
      {
        "label": "A",
        "text": "用于SGs接口"
      },
      {
        "label": "B",
        "text": "可实现CS/PS的联合附着"
      },
      {
        "label": "C",
        "text": "可实现CS/PS的联合寻呼"
      },
      {
        "label": "D",
        "text": "以上都正确"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 963,
    "type": "单选",
    "q": "有关UE完成初始化附着过程中，说法不正确的是（）",
    "options": [
      {
        "label": "A",
        "text": "UE与MME建立MM上下文"
      },
      {
        "label": "B",
        "text": "MME为UE建立默认承载"
      },
      {
        "label": "C",
        "text": "UE获得网络侧分配的IP地址"
      },
      {
        "label": "D",
        "text": "UE一定要携带APN"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 964,
    "type": "单选",
    "q": "有关数据操作维护，下列哪个描述是错误的（）",
    "options": [
      {
        "label": "A",
        "text": "任意修改单个网元的参数均不需要知会相关网元"
      },
      {
        "label": "B",
        "text": "对于影响小区业务的操作应选择在低话务时段进行"
      },
      {
        "label": "C",
        "text": "重要参数的修改前需要做好备份，以便出现问题及时恢复"
      },
      {
        "label": "D",
        "text": "严禁擅自修改参数"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 965,
    "type": "单选",
    "q": "载波间隔是LTE系统中最基本的参数之一，LTE的载波间隔为__kHz。",
    "options": [
      {
        "label": "A",
        "text": "10"
      },
      {
        "label": "B",
        "text": "15"
      },
      {
        "label": "C",
        "text": "20"
      },
      {
        "label": "D",
        "text": "25"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 966,
    "type": "单选",
    "q": "在eNodeB的MAC子层与RLC子层的SAP是哪个？",
    "options": [
      {
        "label": "A",
        "text": "逻辑信道"
      },
      {
        "label": "B",
        "text": "传输信道"
      },
      {
        "label": "C",
        "text": "物理信道"
      },
      {
        "label": "D",
        "text": "无线承载"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 967,
    "type": "单选",
    "q": "在eNodeB的MAC子层与物理层的SAP是哪个？",
    "options": [
      {
        "label": "A",
        "text": "逻辑信道"
      },
      {
        "label": "B",
        "text": "传输信道"
      },
      {
        "label": "C",
        "text": "物理信道"
      },
      {
        "label": "D",
        "text": "无线承载"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 968,
    "type": "单选",
    "q": "在eNodeB的层2与应用层的SAP是哪个？",
    "options": [
      {
        "label": "A",
        "text": "逻辑信道"
      },
      {
        "label": "B",
        "text": "传输信道"
      },
      {
        "label": "C",
        "text": "物理信道"
      },
      {
        "label": "D",
        "text": "无线承载"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 969,
    "type": "单选",
    "q": "在EPC网络中SGW往往和（）合设",
    "options": [
      {
        "label": "A",
        "text": "HSS"
      },
      {
        "label": "B",
        "text": "PCRF"
      },
      {
        "label": "C",
        "text": "PGW"
      },
      {
        "label": "D",
        "text": "eNB"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 970,
    "type": "单选",
    "q": "在EPG上， IPv6的地址被默认由（）分配",
    "options": [
      {
        "label": "A",
        "text": "RADIUS"
      },
      {
        "label": "B",
        "text": "DHCP"
      },
      {
        "label": "C",
        "text": "L2TP"
      },
      {
        "label": "D",
        "text": "Local-pool"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 971,
    "type": "单选",
    "q": "在E-UTRAN系统中，MAC使用的重传方式是：",
    "options": [
      {
        "label": "A",
        "text": "HARQ"
      },
      {
        "label": "B",
        "text": "FEC"
      },
      {
        "label": "C",
        "text": "ARQ"
      },
      {
        "label": "D",
        "text": "CRC"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 972,
    "type": "单选",
    "q": "在E-UTRAN系统中，每个小区在20MHz带宽下期望最少支持的用户数是（）",
    "options": [
      {
        "label": "A",
        "text": "250"
      },
      {
        "label": "B",
        "text": "300"
      },
      {
        "label": "C",
        "text": "1200"
      },
      {
        "label": "D",
        "text": "400"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 973,
    "type": "单选",
    "q": "在E-UTRAN系统中，每个小区在5MHz带宽下期望最少支持的用户数是：",
    "options": [
      {
        "label": "A",
        "text": "250"
      },
      {
        "label": "B",
        "text": "300"
      },
      {
        "label": "C",
        "text": "200"
      },
      {
        "label": "D",
        "text": "400"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 974,
    "type": "单选",
    "q": "在LTE空口上使用以下哪个选项来标识UE（）",
    "options": [
      {
        "label": "A",
        "text": "S-TMSI"
      },
      {
        "label": "B",
        "text": "IMSI"
      },
      {
        "label": "C",
        "text": "C-RNTI"
      },
      {
        "label": "D",
        "text": "UE -RNTI"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 975,
    "type": "单选",
    "q": "在LTE网管系统中，用户管理属于哪个模块____",
    "options": [
      {
        "label": "A",
        "text": "配置管理"
      },
      {
        "label": "B",
        "text": "性能管理"
      },
      {
        "label": "C",
        "text": "安全管理"
      },
      {
        "label": "D",
        "text": "动态管理。"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 976,
    "type": "单选",
    "q": "在LTE网络中，哪个逻辑接口提供位置更新的功能（）",
    "options": [
      {
        "label": "A",
        "text": "S6a"
      },
      {
        "label": "B",
        "text": "S11"
      },
      {
        "label": "C",
        "text": "S1-u"
      },
      {
        "label": "D",
        "text": "S5"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 977,
    "type": "单选",
    "q": "在LTE下，eNodeB通过()接口连接MME（）",
    "options": [
      {
        "label": "A",
        "text": "S1-U"
      },
      {
        "label": "B",
        "text": "S4"
      },
      {
        "label": "C",
        "text": "S3"
      },
      {
        "label": "D",
        "text": "S1-MME"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 978,
    "type": "单选",
    "q": "在LTE下，EPC主要由（）和PDN GW, Serving GW,HSS组成",
    "options": [
      {
        "label": "A",
        "text": "PDSN"
      },
      {
        "label": "B",
        "text": "SGSN"
      },
      {
        "label": "C",
        "text": "GGSN"
      },
      {
        "label": "D",
        "text": "MME"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 979,
    "type": "单选",
    "q": "在LTE下行和上行信道中，存在一定的开销信道。在对业务信道覆盖估计时候，需要考虑这些开销信道影响。例如，如果要承载1000kbps业务速率，当DL下行总开销是20％时候，则至少要分配（  ）的资源才行。",
    "options": [
      {
        "label": "A",
        "text": "1000kbps/(1-20%)"
      },
      {
        "label": "B",
        "text": "1000kbps*(1-20%)"
      },
      {
        "label": "C",
        "text": "1000kbps*20%"
      },
      {
        "label": "D",
        "text": "1000kbps/20%"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 980,
    "type": "单选",
    "q": "关于系统消息广播的功能，描述错误的是____",
    "options": [
      {
        "label": "A",
        "text": "系统信息广播（System Information Broadcast）是通信系统中的一个重要功能，主要提供了接入网系统的主要信息，以便于UE建立无线连接"
      },
      {
        "label": "B",
        "text": "下发对小区中UE配置的专用消息。"
      },
      {
        "label": "C",
        "text": "通知UE紧急信息: 地震海啸告警系统(ETWS)"
      },
      {
        "label": "D",
        "text": "使UE获得足够的接入信息、小区选择/重选的公共配置参数"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 981,
    "type": "单选",
    "q": "关于下行物理信道的描述，哪个不正确:",
    "options": [
      {
        "label": "A",
        "text": "PDSCH、PMCH以及PBCH映射到子帧中的数据区域上"
      },
      {
        "label": "B",
        "text": "PMCH与PDSCH或者PBCH不能同时存在于一个子帧中"
      },
      {
        "label": "C",
        "text": "PDSCH与PBCH不能存在于同一个子帧中"
      },
      {
        "label": "D",
        "text": "PDCCH、PCFICH以及PHICH映射到子帧中的控制区域上"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 982,
    "type": "单选",
    "q": "关于小区搜索，以下描述错误的是:",
    "options": [
      {
        "label": "A",
        "text": "小区搜索过程是UE和小区取得时间和频率同步，并检测小区ID的过程。"
      },
      {
        "label": "B",
        "text": "检测PSCH（用于获得5ms时钟，并获得小区ID组内的具体小区ID）"
      },
      {
        "label": "C",
        "text": "检测SSCH（用于获得无线帧时钟、小区ID组、BCH天线配置）"
      },
      {
        "label": "D",
        "text": "读取PCH（用于获得其它小区信息）"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 983,
    "type": "单选",
    "q": "关于资源块RB，下列说法正确的是:",
    "options": [
      {
        "label": "A",
        "text": "一个资源块RB频域上固定为180KHz，固定为12个15kHz的子载波，时域上为0.5ms，即一个时隙"
      },
      {
        "label": "B",
        "text": "一个资源块RB频域上固定为180KHz，固定为12个15kHz的子载波，时域上为1ms，即一个子帧"
      },
      {
        "label": "C",
        "text": "一个资源块RB频域上固定为180KHz，可以是12个15kHz的子载波也可以是24个7.5kHz子载波，时域上为0.5ms，即一个时隙"
      },
      {
        "label": "D",
        "text": "一个资源块RB频域上固定为180KHz，可以是12个15kHz的子载波也可以是24个7.5kHz子载波，时域上为1ms，即一个子帧"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 984,
    "type": "单选",
    "q": "国内TD-LTE规模技术试验覆盖城市所说的“6+1”的“1”是指哪个城市（）",
    "options": [
      {
        "label": "A",
        "text": "深圳"
      },
      {
        "label": "B",
        "text": "成都"
      },
      {
        "label": "C",
        "text": "上海"
      },
      {
        "label": "D",
        "text": "北京"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 985,
    "type": "单选",
    "q": "国内TD-LTE规模技术试验开始于哪一年（）",
    "options": [
      {
        "label": "A",
        "text": "2010"
      },
      {
        "label": "B",
        "text": "2011"
      },
      {
        "label": "C",
        "text": "2012"
      },
      {
        "label": "D",
        "text": "2013"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 986,
    "type": "单选",
    "q": "国内TD-LTE扩大规模试验的建设基站数量是多少（）",
    "options": [
      {
        "label": "A",
        "text": "1.15万"
      },
      {
        "label": "B",
        "text": "2.05万"
      },
      {
        "label": "C",
        "text": "2.75万"
      },
      {
        "label": "D",
        "text": "3.25万"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 987,
    "type": "单选",
    "q": "过覆盖是在规划的小区边缘RSRP高于__dBm",
    "options": [
      {
        "label": "A",
        "text": "-90"
      },
      {
        "label": "B",
        "text": "-95"
      },
      {
        "label": "C",
        "text": "-100"
      },
      {
        "label": "D",
        "text": "-105"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 988,
    "type": "单选",
    "q": "哪个不是常用的调度算法",
    "options": [
      {
        "label": "A",
        "text": "轮询算法"
      },
      {
        "label": "B",
        "text": "最大载干比算法"
      },
      {
        "label": "C",
        "text": "正比公平算法"
      },
      {
        "label": "D",
        "text": "最小载干比算法"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 989,
    "type": "单选",
    "q": "哪个节点作为归属网络的网关和宿主完成 3GPP的会话管理（）",
    "options": [
      {
        "label": "A",
        "text": "SGW"
      },
      {
        "label": "B",
        "text": "SGSN"
      },
      {
        "label": "C",
        "text": "PGW"
      },
      {
        "label": "D",
        "text": "MGW"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 990,
    "type": "单选",
    "q": "哪个模式为其他MIMO模式的回退模式（）",
    "options": [
      {
        "label": "A",
        "text": "TM1"
      },
      {
        "label": "B",
        "text": "TM2"
      },
      {
        "label": "C",
        "text": "TM3"
      },
      {
        "label": "D",
        "text": "TM4"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 991,
    "type": "单选",
    "q": "哪个事件表示服务小区质量优于门限:",
    "options": [
      {
        "label": "A",
        "text": "A1"
      },
      {
        "label": "B",
        "text": "A2"
      },
      {
        "label": "C",
        "text": "A3"
      },
      {
        "label": "D",
        "text": "A4"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 992,
    "type": "单选",
    "q": "哪个信道含有PDCCH使用的符号数的信息（）",
    "options": [
      {
        "label": "A",
        "text": "PHICH"
      },
      {
        "label": "B",
        "text": "PDCCH"
      },
      {
        "label": "C",
        "text": "PBCH"
      },
      {
        "label": "D",
        "text": "PCFICH"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 993,
    "type": "单选",
    "q": "TD-LTE扩大规模试验网室外F频段组网采用的上下行时隙配比为（）",
    "options": [
      {
        "label": "A",
        "text": "0.085"
      },
      {
        "label": "B",
        "text": "0.044"
      },
      {
        "label": "C",
        "text": "0.126"
      },
      {
        "label": "D",
        "text": "0.128"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 994,
    "type": "单选",
    "q": "在LTE中，20M的系统带宽对应多少个RB（）",
    "options": [
      {
        "label": "A",
        "text": "10"
      },
      {
        "label": "B",
        "text": "50"
      },
      {
        "label": "C",
        "text": "70"
      },
      {
        "label": "D",
        "text": "100"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 995,
    "type": "单选",
    "q": "在LTE中，上行功控的精度是：",
    "options": [
      {
        "label": "A",
        "text": "0.5dB"
      },
      {
        "label": "B",
        "text": "1dB"
      },
      {
        "label": "C",
        "text": "1.5dB"
      },
      {
        "label": "D",
        "text": "2dB"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 996,
    "type": "单选",
    "q": "系统信息通过（）信道发送至终端",
    "options": [
      {
        "label": "A",
        "text": "BCCH"
      },
      {
        "label": "B",
        "text": "PCCH"
      },
      {
        "label": "C",
        "text": "DCCH"
      },
      {
        "label": "D",
        "text": "CCCH"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 997,
    "type": "单选",
    "q": "PDCCH表示以下那个信道（）",
    "options": [
      {
        "label": "A",
        "text": "物理下行数据信道"
      },
      {
        "label": "B",
        "text": "随机接入信道。"
      },
      {
        "label": "C",
        "text": "物理上行控制信道"
      },
      {
        "label": "D",
        "text": "物理下行控制信道"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 998,
    "type": "单选",
    "q": "CRC计算中，校验比特的数目L可能的长度不包括:",
    "options": [
      {
        "label": "A",
        "text": "8"
      },
      {
        "label": "B",
        "text": "16"
      },
      {
        "label": "C",
        "text": "24"
      },
      {
        "label": "D",
        "text": "32"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 999,
    "type": "单选",
    "q": "dBi和dBd是考征增益的值（功率增益），两者都是一个相对值， 但参考基准不一样:dBi的参考基准为理想点源，dBd的参考基准为:",
    "options": [
      {
        "label": "A",
        "text": "半波振子"
      },
      {
        "label": "B",
        "text": "全波振子"
      },
      {
        "label": "C",
        "text": "标准天线"
      },
      {
        "label": "D",
        "text": "理想点源"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1000,
    "type": "单选",
    "q": "TDD上下行子帧配置一共有几种类型（）",
    "options": [
      {
        "label": "A",
        "text": "3"
      },
      {
        "label": "B",
        "text": "5"
      },
      {
        "label": "C",
        "text": "7"
      },
      {
        "label": "D",
        "text": "9"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1001,
    "type": "单选",
    "q": "在CNP中设置坐标系时，需要根据地图文件夹:的projection文件内容进行设置:",
    "options": [
      {
        "label": "A",
        "text": "heights"
      },
      {
        "label": "B",
        "text": "clutter"
      },
      {
        "label": "C",
        "text": "vector"
      },
      {
        "label": "D",
        "text": "text"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1002,
    "type": "单选",
    "q": "___反映系统的通讯保持能力",
    "options": [
      {
        "label": "A",
        "text": "E-RAB建立阻塞率"
      },
      {
        "label": "B",
        "text": "切换成功率"
      },
      {
        "label": "C",
        "text": "E-RAB掉话率"
      },
      {
        "label": "D",
        "text": "RRC重建成功率"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1003,
    "type": "单选",
    "q": "___反映小区对UE呼叫的接纳能力，直接影响用户对网络使用的感受:",
    "options": [
      {
        "label": "A",
        "text": "无线接通率"
      },
      {
        "label": "B",
        "text": "RRC连接建立成功率（业务相关）"
      },
      {
        "label": "C",
        "text": "E-RAB建立阻塞率"
      },
      {
        "label": "D",
        "text": "E-RAB建立成功率"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1004,
    "type": "单选",
    "q": "__主要是无线资源相关配置",
    "options": [
      {
        "label": "A",
        "text": "SIB1"
      },
      {
        "label": "B",
        "text": "SIB2"
      },
      {
        "label": "C",
        "text": "SIB3"
      },
      {
        "label": "D",
        "text": "SIB4"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1005,
    "type": "单选",
    "q": "A1事件表示:",
    "options": [
      {
        "label": "A",
        "text": "服务小区质量高于门限"
      },
      {
        "label": "B",
        "text": "服务小区质量低于门限"
      },
      {
        "label": "C",
        "text": "邻接异RAT小区质量高于门限"
      },
      {
        "label": "D",
        "text": "邻接异RAT小区质量低于门限"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1006,
    "type": "单选",
    "q": "A2事件表示:",
    "options": [
      {
        "label": "A",
        "text": "服务小区质量高于门限"
      },
      {
        "label": "B",
        "text": "服务小区质量低于门限"
      },
      {
        "label": "C",
        "text": "邻接异RAT小区质量高于门限"
      },
      {
        "label": "D",
        "text": "邻接异RAT小区质量低于门限"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1007,
    "type": "单选",
    "q": "ATTACH REQUEST, ATTACH ACCEPT分别包含于哪条空口RRC消息内:（）",
    "options": [
      {
        "label": "A",
        "text": "RRC CONNECTION REQUEST, RRC CONNECTION SETUP"
      },
      {
        "label": "B",
        "text": "RRC CONNECTION SETUP, RRC CONNECTION SETUP COMPELTE"
      },
      {
        "label": "C",
        "text": "RRC CONNECTION SETUP COMPELTE,RRC CONNECTION RECONFIGURATION"
      },
      {
        "label": "D",
        "text": "RRC CONNECTION RECONFIGURATION, RRC CONNECTION SETUP RECONFIGURATION COMPELTE"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1008,
    "type": "单选",
    "q": "B1事件表示:",
    "options": [
      {
        "label": "A",
        "text": "服务小区质量高于门限"
      },
      {
        "label": "B",
        "text": "服务小区质量低于门限"
      },
      {
        "label": "C",
        "text": "邻接异RAT小区质量高于门限"
      },
      {
        "label": "D",
        "text": "邻接异RAT小区质量低于门限"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1009,
    "type": "单选",
    "q": "BBU安装要求的机架宽度和深度是（）",
    "options": [
      {
        "label": "A",
        "text": "300*300"
      },
      {
        "label": "B",
        "text": "300*600"
      },
      {
        "label": "C",
        "text": "600*600"
      },
      {
        "label": "D",
        "text": "900*900"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1010,
    "type": "单选",
    "q": "网络中相邻小区存在PCI mod3冲突，那些指标会变差（）",
    "options": [
      {
        "label": "A",
        "text": "RSRP"
      },
      {
        "label": "B",
        "text": "SINR"
      },
      {
        "label": "C",
        "text": "RSSI"
      },
      {
        "label": "D",
        "text": "PCI"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1011,
    "type": "单选",
    "q": "为保证MIMO性能，双路室内分布系统应通过合理的设计确保两路分布系统的功率差控制在(    )dB以内。",
    "options": [
      {
        "label": "A",
        "text": "3"
      },
      {
        "label": "B",
        "text": "5"
      },
      {
        "label": "C",
        "text": "8"
      },
      {
        "label": "D",
        "text": "10"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1012,
    "type": "单选",
    "q": "为了加强对移动基站近区的覆盖并尽可能减少盲区，同时尽量减少对其它相邻基站的干扰，天线应避免:设，同时应采用下倾的方式:",
    "options": [
      {
        "label": "A",
        "text": "过高"
      },
      {
        "label": "B",
        "text": "过低"
      },
      {
        "label": "C",
        "text": "垂直"
      },
      {
        "label": "D",
        "text": "水平"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1013,
    "type": "单选",
    "q": "为了提高小区覆盖的RSRP，采用RS power boosting技术，最高可以提高几个dB（）",
    "options": [
      {
        "label": "A",
        "text": "1dB"
      },
      {
        "label": "B",
        "text": "3dB"
      },
      {
        "label": "C",
        "text": "6dB"
      },
      {
        "label": "D",
        "text": "9dB"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1014,
    "type": "单选",
    "q": "为了支持GTL的CSFB，需要在MME和MSC之间增加什么接口（）",
    "options": [
      {
        "label": "A",
        "text": "SGs接口"
      },
      {
        "label": "B",
        "text": "S1-U接口"
      },
      {
        "label": "C",
        "text": "S1-MME接口"
      },
      {
        "label": "D",
        "text": ""
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1015,
    "type": "单选",
    "q": "为什么会有国内TD-LTE扩大规模试验覆盖城市所说的“10+3”之中的“3”（）",
    "options": [
      {
        "label": "A",
        "text": "3个直辖市"
      },
      {
        "label": "B",
        "text": "扩大规模试验比前两个阶段增加了3个城市"
      },
      {
        "label": "C",
        "text": "3个内陆城市"
      },
      {
        "label": "D",
        "text": "包括了“海峡两岸无线城市群合作TD-LTE试验网项目”的3个城市"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1016,
    "type": "单选",
    "q": "为什么用符号末端部分复制为循环前缀（）",
    "options": [
      {
        "label": "A",
        "text": "保证时域信号周期连续"
      },
      {
        "label": "B",
        "text": "保证循环数目为整数"
      },
      {
        "label": "C",
        "text": "减小峰均比"
      },
      {
        "label": "D",
        "text": "增加有用符号时长"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1017,
    "type": "单选",
    "q": "为抑制干扰，TD-LTE宜采用（）",
    "options": [
      {
        "label": "A",
        "text": "快速功控"
      },
      {
        "label": "B",
        "text": "部分功控"
      },
      {
        "label": "C",
        "text": "完全功控"
      },
      {
        "label": "D",
        "text": "慢速功控"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1018,
    "type": "单选",
    "q": "移动通信中常规天线的极化方式为",
    "options": [
      {
        "label": "A",
        "text": "垂直极化"
      },
      {
        "label": "B",
        "text": "水平极化"
      },
      {
        "label": "C",
        "text": "圆极化"
      },
      {
        "label": "D",
        "text": "双极化"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1019,
    "type": "单选",
    "q": "以前在GGSN-MPG中板卡被称为C-PIC， 而在EPG-S中它们被称为（）",
    "options": [
      {
        "label": "A",
        "text": "NMB"
      },
      {
        "label": "B",
        "text": "CPB"
      },
      {
        "label": "C",
        "text": "PPB"
      },
      {
        "label": "D",
        "text": "SSC"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1020,
    "type": "单选",
    "q": "以数据库超级管理员的身份连接到一个用户名system、密码oracle、名称为lteomc的数据库的命令为:",
    "options": [
      {
        "label": "A",
        "text": "sqlplus system/oracle@lteomc as sysdba"
      },
      {
        "label": "B",
        "text": "sqlplus sys/oracle@lteomc as dba"
      },
      {
        "label": "C",
        "text": "sqlplus system：oracle@lteomc as sysdba"
      },
      {
        "label": "D",
        "text": "sqlplus sys：oracle@lteomc as dba"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1021,
    "type": "单选",
    "q": "以下（）TDLTE的业务类型，其macMIMOModeDl必须设置为mimoTwoLayersNotAllowed",
    "options": [
      {
        "label": "A",
        "text": "QCI 1"
      },
      {
        "label": "B",
        "text": "QCI 9"
      },
      {
        "label": "C",
        "text": "QCI 8"
      },
      {
        "label": "D",
        "text": "QCI 2"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1022,
    "type": "单选",
    "q": "以下（）参数可在小区激活状态下直接修改并生效",
    "options": [
      {
        "label": "A",
        "text": "小区中心频点"
      },
      {
        "label": "B",
        "text": "子帧信息"
      },
      {
        "label": "C",
        "text": "小区下行系统带宽"
      },
      {
        "label": "D",
        "text": "小区最大发射功率"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1023,
    "type": "单选",
    "q": "以下LTE在移动性能方面的主要要求哪条是错误的（）",
    "options": [
      {
        "label": "A",
        "text": "最大支持500kmph的移动速度"
      },
      {
        "label": "B",
        "text": "通常的覆盖范围内主要考虑低速（0～15km）,并优先考虑低速"
      },
      {
        "label": "C",
        "text": "保证在200kmph条件下的高性能"
      },
      {
        "label": "D",
        "text": "保证在120kmph条件下的连接稳定"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1024,
    "type": "单选",
    "q": "如果性能报表中没有KPI数据，不可能是以下哪种情况（）",
    "options": [
      {
        "label": "A",
        "text": "采集周期内没有进行相关的业务"
      },
      {
        "label": "B",
        "text": "采集周期内性能统计计划处于挂起状态"
      },
      {
        "label": "C",
        "text": "pc进程挂死"
      },
      {
        "label": "D",
        "text": "FTP服务器与eNB之间ping不通"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1025,
    "type": "单选",
    "q": "如果选择了S1切换，则Handover Request、Handover Request Acknowledge及数据转发需要走__口转发",
    "options": [
      {
        "label": "A",
        "text": "Uu"
      },
      {
        "label": "B",
        "text": "X2"
      },
      {
        "label": "C",
        "text": "S1"
      },
      {
        "label": "D",
        "text": ""
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1026,
    "type": "单选",
    "q": "如下哪个工具无法用于RRH至BBU的传输排障（）",
    "options": [
      {
        "label": "A",
        "text": "万用表"
      },
      {
        "label": "B",
        "text": "发光笔"
      },
      {
        "label": "C",
        "text": "光功率计"
      },
      {
        "label": "D",
        "text": "光纤头子清洁试纸"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1027,
    "type": "单选",
    "q": "如下哪个频段只能用于TDD LTE室分覆盖（）",
    "options": [
      {
        "label": "A",
        "text": "1880-1900MHz"
      },
      {
        "label": "B",
        "text": "2570-2620"
      },
      {
        "label": "C",
        "text": "2330-2370MHz"
      },
      {
        "label": "D",
        "text": "2010-2025MHz"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1028,
    "type": "单选",
    "q": "如下哪个选项不是OFDM系统的优点 （）",
    "options": [
      {
        "label": "A",
        "text": "较好抵抗多径干扰"
      },
      {
        "label": "B",
        "text": "较低的频域均衡处理复杂度"
      },
      {
        "label": "C",
        "text": "灵活的频域资源分配"
      },
      {
        "label": "D",
        "text": "较低的峰均比"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1029,
    "type": "单选",
    "q": "如下哪个因素不可能造成RRH和BBU之间的光纤连接异常（）",
    "options": [
      {
        "label": "A",
        "text": "光纤头子受污染"
      },
      {
        "label": "B",
        "text": "光纤长度过长"
      },
      {
        "label": "C",
        "text": "光纤走纤时曲率半径过大"
      },
      {
        "label": "D",
        "text": "光模块类型不匹配"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1030,
    "type": "单选",
    "q": "LTE 4G表示？",
    "options": [
      {
        "label": "A",
        "text": "数字通信"
      },
      {
        "label": "B",
        "text": "多媒体业务"
      },
      {
        "label": "C",
        "text": "无所不在的业务环境"
      },
      {
        "label": "D",
        "text": "动态无线资源管理"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1031,
    "type": "单选",
    "q": "LTE ANR的过程中，UE通过（）信道获得邻区的GCI信息",
    "options": [
      {
        "label": "A",
        "text": "BCH"
      },
      {
        "label": "B",
        "text": "CCH"
      },
      {
        "label": "C",
        "text": "MIB"
      },
      {
        "label": "D",
        "text": "SIB"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1032,
    "type": "单选",
    "q": "LTE FDD和TDD系统中的PSS与SSS之间分别相差几个OFDM符号（）",
    "options": [
      {
        "label": "A",
        "text": "1和1"
      },
      {
        "label": "B",
        "text": "1和3"
      },
      {
        "label": "C",
        "text": "3和1"
      },
      {
        "label": "D",
        "text": "3和3"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1033,
    "type": "单选",
    "q": "LTE FDD模式支持最多的HARQ 进程数为()",
    "options": [
      {
        "label": "A",
        "text": "1"
      },
      {
        "label": "B",
        "text": "2"
      },
      {
        "label": "C",
        "text": "4"
      },
      {
        "label": "D",
        "text": "8"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1034,
    "type": "单选",
    "q": "LTE OMC的组网结构为:",
    "options": [
      {
        "label": "A",
        "text": "eNB-OMM-EMS-NMS"
      },
      {
        "label": "B",
        "text": "eNB-EMS-OMM-NMS"
      },
      {
        "label": "C",
        "text": "eNB-OMM-NMS-EMS"
      },
      {
        "label": "D",
        "text": "eNB-OMM-EMS-OMC"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1035,
    "type": "单选",
    "q": "LTE OMC前后台建链成功时，建链消息EV_CONNECTION_ SNMP_ ASK_SUCCESS中，第21和22字节数据(前后台的建链消息号)为:",
    "options": [
      {
        "label": "A",
        "text": "16212"
      },
      {
        "label": "B",
        "text": "16213"
      },
      {
        "label": "C",
        "text": "16214"
      },
      {
        "label": "D",
        "text": "16215"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1036,
    "type": "单选",
    "q": "LTE OMC前后台建链失败时，建链消息EV_CONNECTION_ SNMP_ ASK_ FAILURE中，第21和22字节数据(前后台的建链消息号)为:",
    "options": [
      {
        "label": "A",
        "text": "16212"
      },
      {
        "label": "B",
        "text": "16213"
      },
      {
        "label": "C",
        "text": "16214"
      },
      {
        "label": "D",
        "text": "16215"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1037,
    "type": "单选",
    "q": "LTE OMC前后台建链使用协议及端口分别为:",
    "options": [
      {
        "label": "A",
        "text": "SNMP,161"
      },
      {
        "label": "B",
        "text": "RPC,135"
      },
      {
        "label": "C",
        "text": "RUDP,5000"
      },
      {
        "label": "D",
        "text": "TFTP，69"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1038,
    "type": "单选",
    "q": "LTE OMC中使用模板批量导入进行数据配置时采用的模板类型是:",
    "options": [
      {
        "label": "A",
        "text": "xls文件"
      },
      {
        "label": "B",
        "text": "xml文件"
      },
      {
        "label": "C",
        "text": "zdb文件"
      },
      {
        "label": "D",
        "text": "xls + xml文件"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1039,
    "type": "单选",
    "q": "关于接收随机接入前导的测量，以下说法不正确的是:",
    "options": [
      {
        "label": "A",
        "text": "该测量适用于PRACH信道，其参考点是MAC层与物理层之间的服务接入点"
      },
      {
        "label": "B",
        "text": "该测量量是时间周期内小区内所有PRACH信道中所接受到的随机接入前导数"
      },
      {
        "label": "C",
        "text": "该测量的目的是判断所接收到的随机接入前导是否合法"
      },
      {
        "label": "D",
        "text": "该测量在专用前导、小范围随机选择前导和大范围随机选择前导三种情况下进行"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1040,
    "type": "单选",
    "q": "关于空间复用，UE是如何估计下行无线信道质量的（）",
    "options": [
      {
        "label": "A",
        "text": "通过测量同步信号"
      },
      {
        "label": "B",
        "text": "通过测量探测参考信号"
      },
      {
        "label": "C",
        "text": "通过测量PDCCH信道"
      },
      {
        "label": "D",
        "text": "通过测量下行参考信号"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1041,
    "type": "单选",
    "q": "关于切换过程描叙正确的是（）",
    "options": [
      {
        "label": "A",
        "text": "切换过程中，收到源小区发来的RRC CONNECTION RECONFIGURATION，UE在源小区发送RRC CONNECTION SETUP RECONFIGURATION COMPELTE"
      },
      {
        "label": "B",
        "text": "切换过程中，收到源小区发来的RRC CONNECTION RECONFIGURATION，UE在目标小区随机接入后并在目标小区上送RRC CONNECTION SETUP RECONFIGURATION COMPELTE"
      },
      {
        "label": "C",
        "text": "切换过程中，收到源小区发来的RRC CONNECTION RECONFIGURATION，UE无需随机接入过程，直接在目标小区上送RRC CONNECTION SETUP RECONFIGURATION COMPELTE"
      },
      {
        "label": "D",
        "text": "切换过程中，UE在目标随机接入后收到目标小区发来的RRC CONNECTION RECONFIGURATION后在目标小区上送RRC CONNECTION SETUP RECONFIGURATION COMPELTE"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1042,
    "type": "单选",
    "q": "关于切换几个阶段，其中错误的一项是",
    "options": [
      {
        "label": "A",
        "text": "切换测量"
      },
      {
        "label": "B",
        "text": "切换决策"
      },
      {
        "label": "C",
        "text": "切换控制"
      },
      {
        "label": "D",
        "text": "切换执行"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1043,
    "type": "单选",
    "q": "在TD-LTE无线网络中影响网络结构的因素有那些（）",
    "options": [
      {
        "label": "A",
        "text": "站间距（站点拓扑关系）"
      },
      {
        "label": "B",
        "text": "下倾角和方位角"
      },
      {
        "label": "C",
        "text": "站高"
      },
      {
        "label": "D",
        "text": "以上都是"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1044,
    "type": "单选",
    "q": "在TD-LTE中，应用层速率，PDCP层速率，MAC层速率，物理层速率，哪个值最大（）",
    "options": [
      {
        "label": "A",
        "text": "应用层速率"
      },
      {
        "label": "B",
        "text": "PDCP层速率"
      },
      {
        "label": "C",
        "text": "MAC层速率"
      },
      {
        "label": "D",
        "text": "物理层速率"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1045,
    "type": "单选",
    "q": "在UE接收到竞争解决消息后，一下那种行为是错误的",
    "options": [
      {
        "label": "A",
        "text": "UE对消息正确解码，并检测到自己的标识：反馈一个肯定的确认\"ACK"
      },
      {
        "label": "B",
        "text": "UE对消息正确解码，并发现消息中包含其他UE标识：不反馈信息"
      },
      {
        "label": "C",
        "text": "UE对消息解码失败，或漏掉了下行准许信号：不反馈信息"
      },
      {
        "label": "D",
        "text": "UE对消息正确解码，并发现消息中包含其他UE标识：反馈信息"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1046,
    "type": "单选",
    "q": "在UE执行TA update时，HSS通过哪条消息将用户签约数据下发给MME（）",
    "options": [
      {
        "label": "A",
        "text": "Insert Subscriber data"
      },
      {
        "label": "B",
        "text": "Update Location answer"
      },
      {
        "label": "C",
        "text": "Modify bearer request"
      },
      {
        "label": "D",
        "text": "Create session Request"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1047,
    "type": "单选",
    "q": "在UpPTS（上行导频时隙）中可以发送一下哪类消息（）",
    "options": [
      {
        "label": "A",
        "text": "数据"
      },
      {
        "label": "B",
        "text": "控制消息"
      },
      {
        "label": "C",
        "text": "接入前缀"
      },
      {
        "label": "D",
        "text": "同步信号"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1048,
    "type": "单选",
    "q": "在vi编辑器命令模式下，保存并退出编辑的命令是:",
    "options": [
      {
        "label": "A",
        "text": ":q"
      },
      {
        "label": "B",
        "text": ":q!"
      },
      {
        "label": "C",
        "text": ":wq"
      },
      {
        "label": "D",
        "text": "!q"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1049,
    "type": "单选",
    "q": "在X2 handover中，由哪个网元负责通知 SGW修改承载（）",
    "options": [
      {
        "label": "A",
        "text": "eNodeB"
      },
      {
        "label": "B",
        "text": "MME"
      },
      {
        "label": "C",
        "text": "PGW"
      },
      {
        "label": "D",
        "text": "HSS"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1050,
    "type": "单选",
    "q": "在传输定时调整中，NTA值发生一个正向的变化说明上行传输定时发生了:",
    "options": [
      {
        "label": "A",
        "text": "提前"
      },
      {
        "label": "B",
        "text": "推迟"
      },
      {
        "label": "C",
        "text": "没有变化"
      },
      {
        "label": "D",
        "text": "以上情况都有可能"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1051,
    "type": "单选",
    "q": "系统消息（   ）包含小区重选相关的其它E-UTRA频点和异频邻小区信息。",
    "options": [
      {
        "label": "A",
        "text": "SIB1"
      },
      {
        "label": "B",
        "text": "SIB3"
      },
      {
        "label": "C",
        "text": "SIB4"
      },
      {
        "label": "D",
        "text": "SIB5"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1052,
    "type": "单选",
    "q": "（LTE）2012年10月中国政府首次正式公布了FDD频谱规划方案，将原3G FDD规划的1.9G和（），可作为LTE-FDD和LTE-A FDD系统使用频率。",
    "options": [
      {
        "label": "A",
        "text": "1.9G"
      },
      {
        "label": "B",
        "text": "2.3G"
      },
      {
        "label": "C",
        "text": "2.6G"
      },
      {
        "label": "D",
        "text": "2.1G"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1053,
    "type": "单选",
    "q": "（LTE）2012年10月中国政府首次正式公布了TDD频谱规划方案，宣布将2.6G频段共（）MHz规划为TDD。",
    "options": [
      {
        "label": "A",
        "text": "50"
      },
      {
        "label": "B",
        "text": "190"
      },
      {
        "label": "C",
        "text": "100"
      },
      {
        "label": "D",
        "text": "140"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1054,
    "type": "单选",
    "q": "（LTE）2013年启动的中国移动TD-LTE网络建设项目将覆盖全国（不含港澳台）多少个省、自治区、直辖市（）",
    "options": [
      {
        "label": "A",
        "text": "31个"
      },
      {
        "label": "B",
        "text": "30个"
      },
      {
        "label": "C",
        "text": "29个"
      },
      {
        "label": "D",
        "text": "28个"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1055,
    "type": "单选",
    "q": "（LTE）20MHz小区支持的子载波个数为（）",
    "options": [
      {
        "label": "A",
        "text": "300"
      },
      {
        "label": "B",
        "text": "600"
      },
      {
        "label": "C",
        "text": "900"
      },
      {
        "label": "D",
        "text": "1200"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1056,
    "type": "单选",
    "q": "（LTE）3GPP R8 及以后的SGSN与MME之间的接口是（）",
    "options": [
      {
        "label": "A",
        "text": "S6"
      },
      {
        "label": "B",
        "text": "S3"
      },
      {
        "label": "C",
        "text": "S4"
      },
      {
        "label": "D",
        "text": "S12"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1057,
    "type": "单选",
    "q": "（LTE）3GPP R8 及以后的SGSN与SGW之间的接口是（）",
    "options": [
      {
        "label": "A",
        "text": "S3"
      },
      {
        "label": "B",
        "text": "X1"
      },
      {
        "label": "C",
        "text": "S4"
      },
      {
        "label": "D",
        "text": "S8"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1058,
    "type": "单选",
    "q": "（LTE）3GPP要求LTE系统每MHz上行平均用户吞吐量应达到R6 HSUPA的（）倍",
    "options": [
      {
        "label": "A",
        "text": "1~2"
      },
      {
        "label": "B",
        "text": "2~3"
      },
      {
        "label": "C",
        "text": "3~4"
      },
      {
        "label": "D",
        "text": "4~5"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1059,
    "type": "单选",
    "q": "（LTE）3G相对于LTE,多了哪个单元（）",
    "options": [
      {
        "label": "A",
        "text": "NodeB"
      },
      {
        "label": "B",
        "text": "RNC"
      },
      {
        "label": "C",
        "text": "CN"
      },
      {
        "label": "D",
        "text": "BBU"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1060,
    "type": "单选",
    "q": "下面哪种话单是SGW产生的？（）",
    "options": [
      {
        "label": "A",
        "text": "SGW-CDR"
      },
      {
        "label": "B",
        "text": "PGW-CDR"
      },
      {
        "label": "C",
        "text": "S-CDR"
      },
      {
        "label": "D",
        "text": "P-CDR"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1061,
    "type": "单选",
    "q": "下面那个软件不能够进行传播模型校正",
    "options": [
      {
        "label": "A",
        "text": "Aircom"
      },
      {
        "label": "B",
        "text": "Atoll"
      },
      {
        "label": "C",
        "text": "Capesso"
      },
      {
        "label": "D",
        "text": "CNP"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1062,
    "type": "单选",
    "q": "下面协议子层不属于控制面的是？（    ）",
    "options": [
      {
        "label": "A",
        "text": "SCTP"
      },
      {
        "label": "B",
        "text": "S1AP"
      },
      {
        "label": "C",
        "text": "GTPU"
      },
      {
        "label": "D",
        "text": "NAS"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1063,
    "type": "单选",
    "q": "下述对于LTE帧结构类型2描述正确的是？（    ）",
    "options": [
      {
        "label": "A",
        "text": "每帧有20个时隙组成"
      },
      {
        "label": "B",
        "text": "每帧包括2个半帧"
      },
      {
        "label": "C",
        "text": "每个时隙长0.5mm"
      },
      {
        "label": "D",
        "text": "帧结构类型2既适用于FDD模式也适用于TDD模式"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1064,
    "type": "单选",
    "q": "下述关于2*2 MIMO说法正确的是？（    ）",
    "options": [
      {
        "label": "A",
        "text": "2发是指eNodeB端，2收也是指eNodeB端"
      },
      {
        "label": "B",
        "text": "2发是指eNodeB端，2收是指UE端"
      },
      {
        "label": "C",
        "text": "2发是指UE端，2收也是指UE端"
      },
      {
        "label": "D",
        "text": "2发是指UE端，2收是指eNodeB端"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1065,
    "type": "单选",
    "q": "下述哪段频段不是3GPP定义E-UTRA的TDD频段（）",
    "options": [
      {
        "label": "A",
        "text": "Band21 1495.9 MHz – 1510.9 MHz"
      },
      {
        "label": "B",
        "text": "Band33 1900 MHz – 1920 MHz"
      },
      {
        "label": "C",
        "text": "Band34 2010 MHz  – 2025 MHz"
      },
      {
        "label": "D",
        "text": "Band35 1850 MHz  – 1910 MHz"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1066,
    "type": "单选",
    "q": "下述哪个选项是LTE系统cat3 UE在20M带宽内，上下行2：2，特殊子帧10：2：2条件下的上行峰值速率（）",
    "options": [
      {
        "label": "A",
        "text": "20Mbit/s"
      },
      {
        "label": "B",
        "text": "50Mbit/s"
      },
      {
        "label": "C",
        "text": "100Mbit/s"
      },
      {
        "label": "D",
        "text": "200Mbit/s"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1067,
    "type": "单选",
    "q": "下述哪个选项是LTE系统cat3 UE在20M带宽内，上下行2：2，特殊子帧10：2：2条件下的下行峰值速率（）",
    "options": [
      {
        "label": "A",
        "text": "25Mbit/s"
      },
      {
        "label": "B",
        "text": "50Mbit/s"
      },
      {
        "label": "C",
        "text": "60Mbit/s"
      },
      {
        "label": "D",
        "text": "200Mbit/s"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1068,
    "type": "单选",
    "q": "相对于3G，LTE取消了哪个网元（）",
    "options": [
      {
        "label": "A",
        "text": "NodeB"
      },
      {
        "label": "B",
        "text": "RNC"
      },
      {
        "label": "C",
        "text": "HSS"
      },
      {
        "label": "D",
        "text": "DRA"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1069,
    "type": "单选",
    "q": "小区范围内的过载指示在:口进行交换，用于小区间功率控制:",
    "options": [
      {
        "label": "A",
        "text": "X1"
      },
      {
        "label": "B",
        "text": "X2"
      },
      {
        "label": "C",
        "text": "S1"
      },
      {
        "label": "D",
        "text": "Uu"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1070,
    "type": "单选",
    "q": "小区更新属于下列那个范围的流程",
    "options": [
      {
        "label": "A",
        "text": "RRC连接管理过程"
      },
      {
        "label": "B",
        "text": "RB控制过程"
      },
      {
        "label": "C",
        "text": "RRC连接移动性管理"
      },
      {
        "label": "D",
        "text": "S1口全局过程"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1071,
    "type": "单选",
    "q": "小区重选信息在（   ）广播。（    ）",
    "options": [
      {
        "label": "A",
        "text": "SIB2"
      },
      {
        "label": "B",
        "text": "SIB3"
      },
      {
        "label": "C",
        "text": "SIB4"
      },
      {
        "label": "D",
        "text": "SIB5"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1072,
    "type": "单选",
    "q": "信道映射的顺序是：",
    "options": [
      {
        "label": "A",
        "text": "PDSCH，PDCCH，PHICH，固定位置信道"
      },
      {
        "label": "B",
        "text": "PHICH、PDSCH、PDCCH、固定位置信道"
      },
      {
        "label": "C",
        "text": "固定位置信道，PHICH，PDCCH，PDSCH"
      },
      {
        "label": "D",
        "text": "固定位置信道，PDSCH，PHICH，PDCCH"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1073,
    "type": "单选",
    "q": "一般TD/LTE//WLAN与GSM合路时采用(    )合路方式。",
    "options": [
      {
        "label": "A",
        "text": "前端"
      },
      {
        "label": "B",
        "text": "后端"
      },
      {
        "label": "C",
        "text": "前端或后端"
      },
      {
        "label": "D",
        "text": "前后端综合"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1074,
    "type": "单选",
    "q": "一个CCE对应（ ）个REG：",
    "options": [
      {
        "label": "A",
        "text": "1"
      },
      {
        "label": "B",
        "text": "3"
      },
      {
        "label": "C",
        "text": "9"
      },
      {
        "label": "D",
        "text": "12"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1075,
    "type": "单选",
    "q": "RLC UM实体针对PDU丢失的策略是:",
    "options": [
      {
        "label": "A",
        "text": "不支持丢失检测，无法发现丢失"
      },
      {
        "label": "B",
        "text": "支持丢失检测，但由于丢失无什么实质影响，忽略丢失"
      },
      {
        "label": "C",
        "text": "支持丢失检测，检测到PDU丢失后，将同属同一SDU的PDU全部丢弃"
      },
      {
        "label": "D",
        "text": "支持丢失检测，检测到PDU丢失后，向对端UM实体请求重传"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1076,
    "type": "单选",
    "q": "RLC层和MAC层之间的接口是（）.",
    "options": [
      {
        "label": "A",
        "text": "传输信道"
      },
      {
        "label": "B",
        "text": "逻辑信道"
      },
      {
        "label": "C",
        "text": "物理信道"
      },
      {
        "label": "D",
        "text": ""
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1077,
    "type": "单选",
    "q": "RLC控制PDU仅用于哪种RLC实体:",
    "options": [
      {
        "label": "A",
        "text": "AM"
      },
      {
        "label": "B",
        "text": "TM"
      },
      {
        "label": "C",
        "text": "UM"
      },
      {
        "label": "D",
        "text": ""
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1078,
    "type": "单选",
    "q": "RLC实体通过:_从上层接收/向上层发送RLC SDU:",
    "options": [
      {
        "label": "A",
        "text": "物理信道"
      },
      {
        "label": "B",
        "text": "逻辑信道"
      },
      {
        "label": "C",
        "text": "专用端口"
      },
      {
        "label": "D",
        "text": "SAP"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1079,
    "type": "单选",
    "q": "RLC实体通过:_向下层发送RLC数据PDU:",
    "options": [
      {
        "label": "A",
        "text": "物理信道"
      },
      {
        "label": "B",
        "text": "逻辑信道"
      },
      {
        "label": "C",
        "text": "专用端口"
      },
      {
        "label": "D",
        "text": "SAP"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1080,
    "type": "单选",
    "q": "RLC数据PDU的重分段操作只可能在（）类型的RLC实体存在",
    "options": [
      {
        "label": "A",
        "text": "AM"
      },
      {
        "label": "B",
        "text": "TM"
      },
      {
        "label": "C",
        "text": "UM"
      },
      {
        "label": "D",
        "text": ""
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1081,
    "type": "单选",
    "q": "RNC与 SGW之间的接口名为（）",
    "options": [
      {
        "label": "A",
        "text": "S3"
      },
      {
        "label": "B",
        "text": "S12"
      },
      {
        "label": "C",
        "text": "S5"
      },
      {
        "label": "D",
        "text": "S8"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1082,
    "type": "单选",
    "q": "PDCCH具体使用取决于（）所采用的算法",
    "options": [
      {
        "label": "A",
        "text": "eNodeB"
      },
      {
        "label": "B",
        "text": "UE"
      },
      {
        "label": "C",
        "text": "MME"
      },
      {
        "label": "D",
        "text": "SGW"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1083,
    "type": "单选",
    "q": "preamble格式中，（）可以支持100km的组网",
    "options": [
      {
        "label": "A",
        "text": "format 0"
      },
      {
        "label": "B",
        "text": "format 1"
      },
      {
        "label": "C",
        "text": "format 2"
      },
      {
        "label": "D",
        "text": "format 3"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1084,
    "type": "单选",
    "q": "preamble码的format 4可以在（）时隙中传输",
    "options": [
      {
        "label": "A",
        "text": "Slot 0"
      },
      {
        "label": "B",
        "text": "Slot 1"
      },
      {
        "label": "C",
        "text": "Dwpts"
      },
      {
        "label": "D",
        "text": "Uppts"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1085,
    "type": "单选",
    "q": "PSS在每个无线帧的2次发送内容一样，SSS每个无线帧2次发送内容不一样，通过解PSS先获得__ms定时，通过解SSS可以获得无线帧的__ms定时",
    "options": [
      {
        "label": "A",
        "text": "5,10"
      },
      {
        "label": "B",
        "text": "10,5"
      },
      {
        "label": "C",
        "text": "5,5"
      },
      {
        "label": "D",
        "text": "10,10"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1086,
    "type": "单选",
    "q": "PUCCH format 1a的调制方式为（）",
    "options": [
      {
        "label": "A",
        "text": "QPSK"
      },
      {
        "label": "B",
        "text": "BPSK"
      },
      {
        "label": "C",
        "text": "QPSK＋BPSK"
      },
      {
        "label": "D",
        "text": "16QAM"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1087,
    "type": "单选",
    "q": "PUSCH信道（  ）是反映无线接口信号传输质量的重要指标，是进行很多无线资源管理控制的依据。（    ）",
    "options": [
      {
        "label": "A",
        "text": "重传率"
      },
      {
        "label": "B",
        "text": "时延"
      },
      {
        "label": "C",
        "text": "负荷"
      },
      {
        "label": "D",
        "text": "误块率"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1088,
    "type": "单选",
    "q": "在（）情况下，SFBC具有一定的分集增益，FSTD带来频率选择增益，这有助于降低其所需的解调门限，从而提高覆盖性能",
    "options": [
      {
        "label": "A",
        "text": "单天线端口"
      },
      {
        "label": "B",
        "text": "传输分集"
      },
      {
        "label": "C",
        "text": "MU-MIMO"
      },
      {
        "label": "D",
        "text": "闭环空间复用"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1089,
    "type": "单选",
    "q": "以下关于SRVCC的哪个说法是错误的（）",
    "options": [
      {
        "label": "A",
        "text": "SRVCC发生在UE漫游到LTE覆盖的边缘地区时。"
      },
      {
        "label": "B",
        "text": "R9 SRVCC支持CS到LTE的语音连续性切换。"
      },
      {
        "label": "C",
        "text": "SRVCC MSCS可以新建，避免现网的MSC升级。"
      },
      {
        "label": "D",
        "text": "SRVCC基于IMS业务控制架构实现。"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1090,
    "type": "单选",
    "q": "关于Cat3 UE在20M带宽TD-LTE 不同模式下峰值速率说法正确的是（）",
    "options": [
      {
        "label": "A",
        "text": "TM3=tm8>TM2=TM7"
      },
      {
        "label": "B",
        "text": "TM2<TM3<TM7<TM8"
      },
      {
        "label": "C",
        "text": "TM3>TM8>TM7>TM2"
      },
      {
        "label": "D",
        "text": "TM3>TM8>TM2>TM7"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1091,
    "type": "单选",
    "q": "关于CSG小区频点优先级的说法正确的是:",
    "options": [
      {
        "label": "A",
        "text": "最高"
      },
      {
        "label": "B",
        "text": "最低"
      },
      {
        "label": "C",
        "text": "根据系统配置决定"
      },
      {
        "label": "D",
        "text": ""
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1092,
    "type": "单选",
    "q": "关于CSG小区说法错误的是:",
    "options": [
      {
        "label": "A",
        "text": "CSG小区是PLMN的一部分，每个CSG小区有一个CSG ID"
      },
      {
        "label": "B",
        "text": "共享相同的CSG标识的所有CSG小区可以使用不同的无线接入技术"
      },
      {
        "label": "C",
        "text": "同一用户可属于多个CSG小区"
      },
      {
        "label": "D",
        "text": "UE维护一张它所属CSG小区的CSG ID列表（即允许的CSG列表），在这个列表之外的其他CSG小区对该UE而言是不可访问的"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1093,
    "type": "单选",
    "q": "关于EPC部署不正确的是（）",
    "options": [
      {
        "label": "A",
        "text": "可以部署ePDG接入非3GPP网络"
      },
      {
        "label": "B",
        "text": "SGW与PGW不可以分设"
      },
      {
        "label": "C",
        "text": "多个MME可以组成POOL"
      },
      {
        "label": "D",
        "text": "HSS可以和HLR合设"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1094,
    "type": "单选",
    "q": "关于E-RAB的描述正确的是____",
    "options": [
      {
        "label": "A",
        "text": "E-RAB是指控制平面的承载"
      },
      {
        "label": "B",
        "text": "E-RAB建立由eNodeB发起"
      },
      {
        "label": "C",
        "text": "用于UE和CN之间传送控制信令"
      },
      {
        "label": "D",
        "text": "E-RAB建立成功率统计要包含三个过程：初始Attach过程，Service Request过程和Bearer建立过程"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1095,
    "type": "单选",
    "q": "关于GTPv2协议，以下说法正确的有（）",
    "options": [
      {
        "label": "A",
        "text": "GTP-v2协议属于数据平面"
      },
      {
        "label": "B",
        "text": "GTP-v2协议属于控制平面"
      },
      {
        "label": "C",
        "text": "GTP-v2协议采用UDP源端口2152"
      },
      {
        "label": "D",
        "text": "GTP-v2协议采用TCP目的端口2152"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1096,
    "type": "单选",
    "q": "关于HLR/HSS分设方案，描述错误的是（）",
    "options": [
      {
        "label": "A",
        "text": "部署快、对现有HLR基本无影响"
      },
      {
        "label": "B",
        "text": "一般需要多点开通，流程长、效率低"
      },
      {
        "label": "C",
        "text": "可根据LTE用户数增长迅速新建HSS"
      },
      {
        "label": "D",
        "text": "HLR，HSS都不需要新增特定功能"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1097,
    "type": "单选",
    "q": "下行PDCCH和PHICH的映射范围由（）信道决定",
    "options": [
      {
        "label": "A",
        "text": "PCFICH"
      },
      {
        "label": "B",
        "text": "PRACH"
      },
      {
        "label": "C",
        "text": "PDCCH"
      },
      {
        "label": "D",
        "text": "PDSCH"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1098,
    "type": "单选",
    "q": "下行PRB中，物理层信令可以使用的带宽由（）的配置内容确定",
    "options": [
      {
        "label": "A",
        "text": "SIB1"
      },
      {
        "label": "B",
        "text": "DCI"
      },
      {
        "label": "C",
        "text": "UCI"
      },
      {
        "label": "D",
        "text": "CFI"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1099,
    "type": "单选",
    "q": "对于10W的功率，按dBm单位进行折算后的值应为？（    ）",
    "options": [
      {
        "label": "A",
        "text": "10"
      },
      {
        "label": "B",
        "text": "20"
      },
      {
        "label": "C",
        "text": "30"
      },
      {
        "label": "D",
        "text": "40"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1100,
    "type": "单选",
    "q": "对于8天线，2Port配置，当单port上的功率需求为15.2dBm时，单Path应该配置多大（）",
    "options": [
      {
        "label": "A",
        "text": "6.2dBm"
      },
      {
        "label": "B",
        "text": "7.2dBm"
      },
      {
        "label": "C",
        "text": "8.2dBm"
      },
      {
        "label": "D",
        "text": "9.2dBm"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1101,
    "type": "单选",
    "q": "对于FDD，SSS在slot0和slot10的倒数第__个OFDM符号上",
    "options": [
      {
        "label": "A",
        "text": "0"
      },
      {
        "label": "B",
        "text": "1"
      },
      {
        "label": "C",
        "text": "2"
      },
      {
        "label": "D",
        "text": "3"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1102,
    "type": "单选",
    "q": "以下哪条关于LTE核心网(EPC)的主要特点描述是错误的（）",
    "options": [
      {
        "label": "A",
        "text": "减少了网元（NE）的数量"
      },
      {
        "label": "B",
        "text": "IP网络与ATM网络混合组网"
      },
      {
        "label": "C",
        "text": "具有优先等级的QoS"
      },
      {
        "label": "D",
        "text": "与早期的GSM/UMTS核心网互联，提供平滑过渡能力"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1103,
    "type": "单选",
    "q": "以下哪条信息与LTE调度有关（）",
    "options": [
      {
        "label": "A",
        "text": "QoS参数和测量"
      },
      {
        "label": "B",
        "text": "等待重传的数据"
      },
      {
        "label": "C",
        "text": "UE的CQI反馈"
      },
      {
        "label": "D",
        "text": "以上都是"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1104,
    "type": "单选",
    "q": "以下哪些描述可以最贴切的描述S4接口（）",
    "options": [
      {
        "label": "A",
        "text": "通过GSM & WCDMA网络进行PS开关机和PDP的激活去激活"
      },
      {
        "label": "B",
        "text": "支持在所属网络中PGW和在拜访网络中SGW之间的互操作"
      },
      {
        "label": "C",
        "text": "一个单独PGW可以通过S4接口和外部的SGW通信"
      },
      {
        "label": "D",
        "text": "支持UE的无缝切换过程"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1105,
    "type": "单选",
    "q": "LTE系统中，S1接口是eNB与下面哪个网元的接口（）",
    "options": [
      {
        "label": "A",
        "text": "MME"
      },
      {
        "label": "B",
        "text": "ENB"
      },
      {
        "label": "C",
        "text": "RNC"
      },
      {
        "label": "D",
        "text": "SGSN"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1106,
    "type": "单选",
    "q": "LTE系统中，X2接口是eNB与下面哪个网元的接口（）",
    "options": [
      {
        "label": "A",
        "text": "MME"
      },
      {
        "label": "B",
        "text": "ENB"
      },
      {
        "label": "C",
        "text": "RNC"
      },
      {
        "label": "D",
        "text": "SGSN"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1107,
    "type": "单选",
    "q": "LTE系统中，定义TTI（发送时间间隔）的长度为:",
    "options": [
      {
        "label": "A",
        "text": "2ms"
      },
      {
        "label": "B",
        "text": "3ms、"
      },
      {
        "label": "C",
        "text": "1ms"
      },
      {
        "label": "D",
        "text": "5ms"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1108,
    "type": "单选",
    "q": "LTE室外宽频智能天线支持的频段不包括（）",
    "options": [
      {
        "label": "A",
        "text": "A频段"
      },
      {
        "label": "B",
        "text": "D频段"
      },
      {
        "label": "C",
        "text": "E频段"
      },
      {
        "label": "D",
        "text": "F频段"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1109,
    "type": "单选",
    "q": "LTE中，对于频分双工(FDD)的操作，定义了4中随机接入的前导格式，其中格式3的Tcp（）μs",
    "options": [
      {
        "label": "A",
        "text": "101.3"
      },
      {
        "label": "B",
        "text": "684.38"
      },
      {
        "label": "C",
        "text": "203.13"
      },
      {
        "label": "D",
        "text": "406.26"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1110,
    "type": "单选",
    "q": "LTE中，事件触发测量报告中，事件A3的定义为：",
    "options": [
      {
        "label": "A",
        "text": "本小区优于门限值"
      },
      {
        "label": "B",
        "text": "邻区优于本小区，并超过偏置值"
      },
      {
        "label": "C",
        "text": "邻区优于门限值"
      },
      {
        "label": "D",
        "text": "本小区低于门限值，且邻小区优于门限值"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1111,
    "type": "单选",
    "q": "LTE中，下列哪项不是Primary SCH的作用 （）",
    "options": [
      {
        "label": "A",
        "text": "OFDM符号定时"
      },
      {
        "label": "B",
        "text": "频率同步"
      },
      {
        "label": "C",
        "text": "cell ID group号的检测"
      },
      {
        "label": "D",
        "text": "所属cell ID group中的三种cell id的检测"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1112,
    "type": "单选",
    "q": "LTE中，寻呼区域大小取决于（）",
    "options": [
      {
        "label": "A",
        "text": "LAC区大小"
      },
      {
        "label": "B",
        "text": "RAC区大小"
      },
      {
        "label": "C",
        "text": "TA区大小"
      },
      {
        "label": "D",
        "text": "TA list大小"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1113,
    "type": "单选",
    "q": "LTE中，自组织网络SON可以实现那些功能（）",
    "options": [
      {
        "label": "A",
        "text": "自配置"
      },
      {
        "label": "B",
        "text": "自优化"
      },
      {
        "label": "C",
        "text": "自愈合"
      },
      {
        "label": "D",
        "text": "以上三种功能都可以实现"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1114,
    "type": "单选",
    "q": "关于PRB利用率，下面说法不正确的是:",
    "options": [
      {
        "label": "A",
        "text": "PRB利用率的测量目的是对时间和频率资源的使用情况进行测量"
      },
      {
        "label": "B",
        "text": "PRB总利用率是在时域和频域计算得来的，其参考点是MAC层和物理层之间的服务接入点"
      },
      {
        "label": "C",
        "text": "PRB利用率测量通常用于小区间负荷均衡，其中PRB利用率是通过S1口进行传递的"
      },
      {
        "label": "D",
        "text": "PRB利用率测量通常用于小区间负荷均衡，其中PRB利用率是通过X2口进行传递的"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1115,
    "type": "单选",
    "q": "关于RRC建立成功率描述错误的是____",
    "options": [
      {
        "label": "A",
        "text": "反映eNB或者小区的UE接纳能力"
      },
      {
        "label": "B",
        "text": "RRC连接建立成功意味着UE与网络建立了信令连接"
      },
      {
        "label": "C",
        "text": "RRC连接建立可以分两种情况：一种是与业务相关的RRC连接建立；另一种是与业务无关（如紧急呼叫、系统间小区重选、注册等）的RRC连接建立"
      },
      {
        "label": "D",
        "text": "与业务无关的RRC连接建立是衡量呼叫接通率的一个重要指标，与业务相关的RRC连接建立可用于考察系统负荷情况"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1116,
    "type": "单选",
    "q": "以下哪个功能不属于SGW的功能（）",
    "options": [
      {
        "label": "A",
        "text": "eNodeB之间的切换的本地锚点"
      },
      {
        "label": "B",
        "text": "数据包路由和转发"
      },
      {
        "label": "C",
        "text": "合法监听"
      },
      {
        "label": "D",
        "text": "PGW的选择"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1117,
    "type": "单选",
    "q": "关于S1口数据流的传输，下列说法错误的是:",
    "options": [
      {
        "label": "A",
        "text": "S1口用户面数据流中的传输层是基于IP传输的"
      },
      {
        "label": "B",
        "text": "S1口用户面传输层同时支持IPV4和IPV6"
      },
      {
        "label": "C",
        "text": "S1口用户面传输协议栈中下层有物理层和数据链路层"
      },
      {
        "label": "D",
        "text": "S1口用户面传输协议栈中上层为GTP-U和SCTP协议"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1118,
    "type": "单选",
    "q": "关于TD-LTE小区搜索，以下描述错误的是（）",
    "options": [
      {
        "label": "A",
        "text": "小区搜索过程是UE和小区取得时间和频率同步，并检测小区ID的过程"
      },
      {
        "label": "B",
        "text": "PSS位于DwPTS的第二个符号"
      },
      {
        "label": "C",
        "text": "SSS位于5ms第一个子帧的最后一个符号"
      },
      {
        "label": "D",
        "text": "根据PBCH的内容可以得到系统帧号和带宽信息"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1119,
    "type": "单选",
    "q": "关于TD-LTE帧结构，哪些说法是正确的",
    "options": [
      {
        "label": "A",
        "text": "每一个无线帧长度为10ms，由20个时隙构成"
      },
      {
        "label": "B",
        "text": "每一个半帧由8个常规子帧和DwPTS、GP和UpPTS三个特殊时隙构成"
      },
      {
        "label": "C",
        "text": "TDD上下行数据可以在同一频带内传输；可使用非成对频谱"
      },
      {
        "label": "D",
        "text": "GP越小说明小区覆盖半径越大"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1120,
    "type": "单选",
    "q": "关于TD-LTE中天线端口说法正确的是（）",
    "options": [
      {
        "label": "A",
        "text": "天线逻辑端口与物理端口一一对应"
      },
      {
        "label": "B",
        "text": "8path TM7配置下逻辑端口为1个"
      },
      {
        "label": "C",
        "text": "8path TM8配置下逻辑端口为4个"
      },
      {
        "label": "D",
        "text": "8path TM3配置下逻辑端口与TM8配置下的逻辑端口数相同"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1121,
    "type": "单选",
    "q": "关于承载建立的描述错误的是（）",
    "options": [
      {
        "label": "A",
        "text": "默认承载建立类似于一次PDP激活"
      },
      {
        "label": "B",
        "text": "专有承载建立类似于二次PDP激活"
      },
      {
        "label": "C",
        "text": "默认承载一定是Non-GBR承载"
      },
      {
        "label": "D",
        "text": "专有承载一定是GBR承载"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1122,
    "type": "单选",
    "q": "交通枢纽场景在WLAN/LTE合路引入的情况下，天线间距建议为(    )米，覆盖4500平米。",
    "options": [
      {
        "label": "A",
        "text": "10"
      },
      {
        "label": "B",
        "text": "12"
      },
      {
        "label": "C",
        "text": "15"
      },
      {
        "label": "D",
        "text": "20"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1123,
    "type": "单选",
    "q": "接入小区，UE不必完成()的动作",
    "options": [
      {
        "label": "A",
        "text": "小区搜索"
      },
      {
        "label": "B",
        "text": "小区选择"
      },
      {
        "label": "C",
        "text": "随机接入"
      },
      {
        "label": "D",
        "text": "UE鉴权"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1124,
    "type": "单选",
    "q": "接收机底噪的是在_____带宽上积分",
    "options": [
      {
        "label": "A",
        "text": "10M"
      },
      {
        "label": "B",
        "text": "20M"
      },
      {
        "label": "C",
        "text": "根据频率规划方式选择的带宽决定"
      },
      {
        "label": "D",
        "text": "根据所分配的RB占用的带宽决定"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1125,
    "type": "单选",
    "q": "接收机有（）个接收天线。",
    "options": [
      {
        "label": "A",
        "text": "1"
      },
      {
        "label": "B",
        "text": "2"
      },
      {
        "label": "C",
        "text": "3"
      },
      {
        "label": "D",
        "text": "4"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1126,
    "type": "单选",
    "q": "截止2013年7月初，全球LTE FDD商用网络数量为（）。",
    "options": [
      {
        "label": "A",
        "text": "A.173？？"
      },
      {
        "label": "B",
        "text": "B.186"
      },
      {
        "label": "C",
        "text": "C.165"
      },
      {
        "label": "D",
        "text": "D.210"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1127,
    "type": "单选",
    "q": "截止2013年7月初，全球TD-LTE商用网络数量为（）。",
    "options": [
      {
        "label": "A",
        "text": "12？？"
      },
      {
        "label": "B",
        "text": "14"
      },
      {
        "label": "C",
        "text": "16"
      },
      {
        "label": "D",
        "text": "18"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1128,
    "type": "单选",
    "q": "进行传播模型校正时，希望的标准方差小于：",
    "options": [
      {
        "label": "A",
        "text": "1db"
      },
      {
        "label": "B",
        "text": "2.5db"
      },
      {
        "label": "C",
        "text": "8db"
      },
      {
        "label": "D",
        "text": "10db"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1129,
    "type": "单选",
    "q": "考虑到干扰控制，城区三扇区站水平波束宽度一般不大于（）",
    "options": [
      {
        "label": "A",
        "text": "45°"
      },
      {
        "label": "B",
        "text": "90°"
      },
      {
        "label": "C",
        "text": "120°"
      },
      {
        "label": "D",
        "text": "65°"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1130,
    "type": "单选",
    "q": "可信任的非3GPP接入网到PGW的IP接入接口是（）",
    "options": [
      {
        "label": "A",
        "text": "S2a"
      },
      {
        "label": "B",
        "text": "S101"
      },
      {
        "label": "C",
        "text": "SWn"
      },
      {
        "label": "D",
        "text": "Gxa"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1131,
    "type": "单选",
    "q": "可以提高空口速率的技术是（ ）",
    "options": [
      {
        "label": "A",
        "text": "高阶调制"
      },
      {
        "label": "B",
        "text": "编码"
      },
      {
        "label": "C",
        "text": "交织"
      },
      {
        "label": "D",
        "text": "加扰"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1132,
    "type": "单选",
    "q": "空分复用对应几个码字（）",
    "options": [
      {
        "label": "A",
        "text": "1个"
      },
      {
        "label": "B",
        "text": "2个"
      },
      {
        "label": "C",
        "text": "3个"
      },
      {
        "label": "D",
        "text": "4个"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1133,
    "type": "单选",
    "q": "空口协议栈中，数据的压缩功能位于（）层",
    "options": [
      {
        "label": "A",
        "text": "PHY"
      },
      {
        "label": "B",
        "text": "RRC"
      },
      {
        "label": "C",
        "text": "RLC"
      },
      {
        "label": "D",
        "text": "PDCP"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1134,
    "type": "单选",
    "q": "扩展CP的时长为（）",
    "options": [
      {
        "label": "A",
        "text": "4.7us"
      },
      {
        "label": "B",
        "text": "5.2us"
      },
      {
        "label": "C",
        "text": "33.3us"
      },
      {
        "label": "D",
        "text": "16.7us"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1135,
    "type": "单选",
    "q": "链路预算中，一般将普通手持智能终端的天线增益设置为多大（）",
    "options": [
      {
        "label": "A",
        "text": "0dB"
      },
      {
        "label": "B",
        "text": "1dBi"
      },
      {
        "label": "C",
        "text": "2dBi"
      },
      {
        "label": "D",
        "text": "3dBi"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1136,
    "type": "单选",
    "q": "路测开始前，我们需要新建一个工程，下列选项中必须导入的信息为:",
    "options": [
      {
        "label": "A",
        "text": "基站信息表"
      },
      {
        "label": "B",
        "text": "邻区列表"
      },
      {
        "label": "C",
        "text": "区域话务量"
      },
      {
        "label": "D",
        "text": "传播模型"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1137,
    "type": "单选",
    "q": "每个16QAM一个相位有几个信息",
    "options": [
      {
        "label": "A",
        "text": "1"
      },
      {
        "label": "B",
        "text": "2"
      },
      {
        "label": "C",
        "text": "3"
      },
      {
        "label": "D",
        "text": "4"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1138,
    "type": "单选",
    "q": "使用TD-LTE的手机终端用户可以使用（）",
    "options": [
      {
        "label": "A",
        "text": "只有数据业务"
      },
      {
        "label": "B",
        "text": "只有语音业务"
      },
      {
        "label": "C",
        "text": "数据、语音皆可"
      },
      {
        "label": "D",
        "text": ""
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1139,
    "type": "单选",
    "q": "适用于TD-SCDMA室分升级到TD-LTE室分的RRU类型为(    )。",
    "options": [
      {
        "label": "A",
        "text": "FA+E频段单通道RRU"
      },
      {
        "label": "B",
        "text": "FA+E频段双通道RRU"
      },
      {
        "label": "C",
        "text": "E频段双通道RRU"
      },
      {
        "label": "D",
        "text": "E频段单通道RRU"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1140,
    "type": "单选",
    "q": "室分2PATH 20M 带宽TD-LTE 每PATH 10W发射,并PA=-3, PB=1则CRS_EPRE为（）",
    "options": [
      {
        "label": "A",
        "text": "9.2dBm"
      },
      {
        "label": "B",
        "text": "12.2dBm"
      },
      {
        "label": "C",
        "text": "13dBm"
      },
      {
        "label": "D",
        "text": "15.2dBm"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1141,
    "type": "单选",
    "q": "室分系统设计中，有PS、T、ANT等常用英文缩写，其中T代表？（    ）",
    "options": [
      {
        "label": "A",
        "text": "功分器"
      },
      {
        "label": "B",
        "text": "耦合器"
      },
      {
        "label": "C",
        "text": "天线"
      },
      {
        "label": "D",
        "text": "馈线"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1142,
    "type": "单选",
    "q": "室分系统是双路系统的情况下，可选用如下哪些传输模式（）",
    "options": [
      {
        "label": "A",
        "text": "TM2"
      },
      {
        "label": "B",
        "text": "TM1"
      },
      {
        "label": "C",
        "text": "TM7"
      },
      {
        "label": "D",
        "text": "TM8"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1143,
    "type": "单选",
    "q": "未能在任何小区上驻留的UE将进入:状态，直到发现可接受的小区:",
    "options": [
      {
        "label": "A",
        "text": "任意小区驻留"
      },
      {
        "label": "B",
        "text": "任意小区选择"
      },
      {
        "label": "C",
        "text": "正常驻留"
      },
      {
        "label": "D",
        "text": ""
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1144,
    "type": "单选",
    "q": "物理层提供以下什么信息给MAC层（）",
    "options": [
      {
        "label": "A",
        "text": "终端调度请求信令"
      },
      {
        "label": "B",
        "text": "终端缓存状态"
      },
      {
        "label": "C",
        "text": "终端数据分段大小"
      },
      {
        "label": "D",
        "text": "终端DRX状态"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1145,
    "type": "单选",
    "q": "H-PCRF和V-PCRF之间的接口是（）",
    "options": [
      {
        "label": "A",
        "text": "S9"
      },
      {
        "label": "B",
        "text": "S10"
      },
      {
        "label": "C",
        "text": "S11"
      },
      {
        "label": "D",
        "text": "S12"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1146,
    "type": "单选",
    "q": "HSS对应哪个功能？",
    "options": [
      {
        "label": "A",
        "text": "负责无线资源管理，集成了部分类似2G/TD基站和基站控制器的功能"
      },
      {
        "label": "B",
        "text": "LTE接入下的控制面网元，负责移动性管理功能；"
      },
      {
        "label": "C",
        "text": "SAE网络的边界网关，提供承载控制、计费、地址分配和非3GPP接入等功能，相当于传统的GGSN。"
      },
      {
        "label": "D",
        "text": "SAE网络用户数据管理网元，提供鉴权和签约等功能，包含HLR功能。"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1147,
    "type": "单选",
    "q": "HSS和MME之间的接口是（）",
    "options": [
      {
        "label": "A",
        "text": "S1"
      },
      {
        "label": "B",
        "text": "S11"
      },
      {
        "label": "C",
        "text": "S6a"
      },
      {
        "label": "D",
        "text": "S10"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1148,
    "type": "单选",
    "q": "ICIC测量标识中属于下行标识的是:",
    "options": [
      {
        "label": "A",
        "text": "HII"
      },
      {
        "label": "B",
        "text": "OI"
      },
      {
        "label": "C",
        "text": "RNTP"
      },
      {
        "label": "D",
        "text": ""
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1149,
    "type": "单选",
    "q": "ICIC是:的干扰规避:",
    "options": [
      {
        "label": "A",
        "text": "时域"
      },
      {
        "label": "B",
        "text": "频域"
      },
      {
        "label": "C",
        "text": "空域"
      },
      {
        "label": "D",
        "text": "码域"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  }]

var multiOptions = [
  {
  "id": 547,
  "type": "多选",
  "q": "下面哪些信道是下行信道:",
  "options": [
    {
      "label": "A",
      "text": "PMCH"
    },
    {
      "label": "B",
      "text": "PDSCH"
    },
    {
      "label": "C",
      "text": "PUCCH"
    },
    {
      "label": "D",
      "text": "PRACH"
    }
  ],
  "a": "AB",
  "isStore": "false",
  "isAnswer": 0
},
  {
    "id": 548,
    "type": "多选",
    "q": "GPS接收器集成在CC上,GPS和时钟模块完成哪些功能:",
    "options": [
      {
        "label": "A",
        "text": "支持与外部各种参考时钟同步,包括GPS,BITS始终和IEEE1588等"
      },
      {
        "label": "B",
        "text": "产生并给其他模块分发时钟"
      },
      {
        "label": "C",
        "text": "提供GPS接收器接口和对其管理"
      },
      {
        "label": "D",
        "text": "为操作维护系统提供高精度时钟,时间可以由O&M系统和GPS来校准"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 549,
    "type": "多选",
    "q": "RRU的AISG/MON接口的功能有哪些:",
    "options": [
      {
        "label": "A",
        "text": "操作维护接口"
      },
      {
        "label": "B",
        "text": "AISG电调天线接口"
      },
      {
        "label": "C",
        "text": "半双工和全双工485接口"
      },
      {
        "label": "D",
        "text": "4对干接点"
      }
    ],
    "a": "BCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 550,
    "type": "多选",
    "q": "ZXSDRR8862从系统架构上主要分为:",
    "options": [
      {
        "label": "A",
        "text": "电源模块"
      },
      {
        "label": "B",
        "text": "双工滤波器"
      },
      {
        "label": "C",
        "text": "收发信板"
      },
      {
        "label": "D",
        "text": "功放和信号防雷板"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 551,
    "type": "多选",
    "q": "对于ZXSDRB8300上CC单板的EXT接口描述正确的是:",
    "options": [
      {
        "label": "A",
        "text": "外部接口,和外部接口连接器相连"
      },
      {
        "label": "B",
        "text": "提供485接口"
      },
      {
        "label": "C",
        "text": "PP1S时钟接口"
      },
      {
        "label": "D",
        "text": "2M时钟接口"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 552,
    "type": "多选",
    "q": "关于UBPM物理层实现的描述正确的是:",
    "options": [
      {
        "label": "A",
        "text": "传输信道错误检测,并向高层提供错误指示"
      },
      {
        "label": "B",
        "text": "软件组合混合自动重发请求(HARQ)"
      },
      {
        "label": "C",
        "text": "传输信道到物理信道的编码映射"
      },
      {
        "label": "D",
        "text": "物理信道调制解调"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 553,
    "type": "多选",
    "q": "关于B8300,下列说法正确的是:",
    "options": [
      {
        "label": "A",
        "text": "3U基带池支持最多8个全高AMC槽位,支持MCH和PWR备份"
      },
      {
        "label": "B",
        "text": "采用横插单板方式"
      },
      {
        "label": "C",
        "text": "左右风道,左出风,右进风"
      },
      {
        "label": "D",
        "text": "有14个物理资源槽位"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 554,
    "type": "多选",
    "q": "CC单板为BBU的时钟和控制板,有如下功能:",
    "options": [
      {
        "label": "A",
        "text": "实现主控功能,完成RRC协议处理,支持主备功能"
      },
      {
        "label": "B",
        "text": "GE以太网交换,提供信令流和媒体流交换平面"
      },
      {
        "label": "C",
        "text": "内(外)置GPS/BITS/E1(T1)线路恢复时钟/1588协议时钟"
      },
      {
        "label": "D",
        "text": "提供系统时钟和射频基准时钟10M,61.44M,FR/FN"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 555,
    "type": "多选",
    "q": "下列关于室内防雷箱的安装说法正确的是:",
    "options": [
      {
        "label": "A",
        "text": "室内防雷箱的安装高度应便于施工维护;建议防雷箱底部距地1.4m,上端不超过2m"
      },
      {
        "label": "B",
        "text": "室内防雷箱,垂直走线槽可以安装在馈线窗和挂式空调的正下方"
      },
      {
        "label": "C",
        "text": "室外2芯电源线接入室内防雷箱时,应剥掉绝缘护套,用防雷箱自带的接地铜圈紧密压接在电源线的屏蔽层上,保证可靠接地,且裸露层不宜过多"
      },
      {
        "label": "D",
        "text": "禁止将室内防雷箱安装在蓄电池上方"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 556,
    "type": "多选",
    "q": "BBU的安装准备过程包括哪些方面的内容:",
    "options": [
      {
        "label": "A",
        "text": "安装环境检察"
      },
      {
        "label": "B",
        "text": "工具仪表准备"
      },
      {
        "label": "C",
        "text": "技术资料准备"
      },
      {
        "label": "D",
        "text": "开箱验货"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 557,
    "type": "多选",
    "q": "RRU的抱杆安装方式分为哪几种:",
    "options": [
      {
        "label": "A",
        "text": "1抱2安装"
      },
      {
        "label": "B",
        "text": "1抱5安装"
      },
      {
        "label": "C",
        "text": "1抱1安装"
      },
      {
        "label": "D",
        "text": "1抱3安装"
      }
    ],
    "a": "ACD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 558,
    "type": "多选",
    "q": "RRU上电前需要完成哪些准备工作:",
    "options": [
      {
        "label": "A",
        "text": "确认供电电压符合RRU要求"
      },
      {
        "label": "B",
        "text": "确认机箱电源和接地电缆连接正确"
      },
      {
        "label": "C",
        "text": "确认电源插头处于断开位置"
      },
      {
        "label": "D",
        "text": ""
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 559,
    "type": "多选",
    "q": "安装RRU天馈系统之前,检查来料包括哪些步骤:",
    "options": [
      {
        "label": "A",
        "text": "检查馈线,安装附件等包装是否完好"
      },
      {
        "label": "B",
        "text": "对物品外观进行检查,确保外观完好"
      },
      {
        "label": "C",
        "text": "确认物品数量(长度等）和装箱单符合"
      },
      {
        "label": "D",
        "text": "在安装前,确保按照要求存放"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 560,
    "type": "多选",
    "q": "工程勘察报告设计信息部分包含以下哪些内容:",
    "options": [
      {
        "label": "A",
        "text": "机房平面图"
      },
      {
        "label": "B",
        "text": "线缆走向图"
      },
      {
        "label": "C",
        "text": "电源分配图"
      },
      {
        "label": "D",
        "text": "可靠性勘察表"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 561,
    "type": "多选",
    "q": "工程勘察输出的文档包括:",
    "options": [
      {
        "label": "A",
        "text": "工程勘察报告"
      },
      {
        "label": "B",
        "text": "环境验收报告"
      },
      {
        "label": "C",
        "text": "合同问题反馈表"
      },
      {
        "label": "D",
        "text": "工程勘察报告评审表"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 562,
    "type": "多选",
    "q": "设备安装完后,安装环境清理应包括:",
    "options": [
      {
        "label": "A",
        "text": "机箱安装完后,清洁机箱外表面"
      },
      {
        "label": "B",
        "text": "清理机房内多余不用的物品,整齐布放需要放在机房内的物品"
      },
      {
        "label": "C",
        "text": "清理操作台及活动地板"
      },
      {
        "label": "D",
        "text": "清理走线槽,机箱底部及周围的活动地板下方杂物"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 563,
    "type": "多选",
    "q": "无线基站的安装开通流程包括下面那些内容:",
    "options": [
      {
        "label": "A",
        "text": "工程勘察"
      },
      {
        "label": "B",
        "text": "工程设计"
      },
      {
        "label": "C",
        "text": "软件安装"
      },
      {
        "label": "D",
        "text": "移交,割接,试运行"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 564,
    "type": "多选",
    "q": "关于UBPM单板,下列说法正确的是:",
    "options": [
      {
        "label": "A",
        "text": "实现和RRU的基带射频接口"
      },
      {
        "label": "B",
        "text": "实现TD-LTE用户面处理和物理层处理,包括PDCP,RLC,MAC,PHY等"
      },
      {
        "label": "C",
        "text": "支持IPMI的管理接口"
      },
      {
        "label": "D",
        "text": "一块UBPM板可支持1个8天线20MHz小区"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 565,
    "type": "多选",
    "q": "关于PM提供的功能,下列说法正确的是:",
    "options": [
      {
        "label": "A",
        "text": "系统支持两个电源模块互为备份"
      },
      {
        "label": "B",
        "text": "SA,FA,CC,UPB,BPG,UBPM单板插拔检测"
      },
      {
        "label": "C",
        "text": "SA,FA,CC,UPB,BPG,UBPM单板使能控制"
      },
      {
        "label": "D",
        "text": "管理电源MP及载荷电源PP控制管理"
      }
    ],
    "a": "ABCDE",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 566,
    "type": "多选",
    "q": "关于FA提供的功能,下列说法正确的是:",
    "options": [
      {
        "label": "A",
        "text": "风扇供电,转速控制,状态上报驱动"
      },
      {
        "label": "B",
        "text": "IPMI机框管理(EMMC)"
      },
      {
        "label": "C",
        "text": "提供一个温度传感器,供SA检测进风口温度"
      },
      {
        "label": "D",
        "text": "提供风扇插箱LED状态显示"
      }
    ],
    "a": "ABCDE",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 567,
    "type": "多选",
    "q": "TD-LTE可以采用的室内解决方案包括:",
    "options": [
      {
        "label": "A",
        "text": "BBU+RRU+室内分布系统"
      },
      {
        "label": "B",
        "text": "宏基站+室内分布系统"
      },
      {
        "label": "C",
        "text": "PicoNodeB+PicoRRU"
      },
      {
        "label": "D",
        "text": "Femto"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 568,
    "type": "多选",
    "q": "在LTE合路改造过程中,可能需要替换或整改的内容包括:",
    "options": [
      {
        "label": "A",
        "text": "天线"
      },
      {
        "label": "B",
        "text": "合路器"
      },
      {
        "label": "C",
        "text": "馈线"
      },
      {
        "label": "D",
        "text": "布线系统"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 569,
    "type": "多选",
    "q": "下面说法正确的是:",
    "options": [
      {
        "label": "A",
        "text": "对于实时业务,E-UTRAN系统和UTRAN系统之间的切换中断时间应控制在300ms以内"
      },
      {
        "label": "B",
        "text": "对于非实时业务,E-UTRAN系统和UTRAN系统之间的切换中断时间应控制在500ms以内"
      },
      {
        "label": "C",
        "text": "对于实时业务,E-UTRAN系统和GERAN系统之间的切换中断时间应控制在300ms以内"
      },
      {
        "label": "D",
        "text": "对于非实时业务,E-UTRAN系统和GERAN系统之间的切换中断时间应控制在500ms以内"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 570,
    "type": "多选",
    "q": "下述对于LTE无线帧结构类型2描述正确的是:",
    "options": [
      {
        "label": "A",
        "text": "帧结构类型2适用于TDD模式"
      },
      {
        "label": "B",
        "text": "每一个无线帧由两个半帧构成,每一个办帧长度为5ms"
      },
      {
        "label": "C",
        "text": "一般情况下,每一个半帧由8个常规时隙和DwPTS,GP,UpPTS三个特殊时隙构成"
      },
      {
        "label": "D",
        "text": "一个常规时隙长度为0.5ms"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 571,
    "type": "多选",
    "q": "下述对于LTE帧结构类型2描述正确的是:",
    "options": [
      {
        "label": "A",
        "text": "每个无线帧由两个长度为5ms的半帧组成"
      },
      {
        "label": "B",
        "text": "一个半帧包含8个常规时隙"
      },
      {
        "label": "C",
        "text": "办帧中可包含DwPTS,UpPTS和GP三个特殊时隙"
      },
      {
        "label": "D",
        "text": "帧结构类型2适用于TDD模式"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 572,
    "type": "多选",
    "q": "一个完整的呼叫接通率有多个层次:",
    "options": [
      {
        "label": "A",
        "text": "寻呼成功率"
      },
      {
        "label": "B",
        "text": "RRC连接建立成功率"
      },
      {
        "label": "C",
        "text": "E-RAB指配建立成功率"
      },
      {
        "label": "D",
        "text": "专用承载建立成功率"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 573,
    "type": "多选",
    "q": "以下关于LTE关键需求描述错误的是:",
    "options": [
      {
        "label": "A",
        "text": "支持1.4MHz,3MHz,5MHz,10MHz,15MHz和20MHz带宽"
      },
      {
        "label": "B",
        "text": "提高小区边缘的比特率"
      },
      {
        "label": "C",
        "text": "空闲模式到激活模式的转换时间不超过50ms"
      },
      {
        "label": "D",
        "text": "在小IP分组和空载条件下,用户面延时不超过50ms."
      }
    ],
    "a": "CD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 574,
    "type": "多选",
    "q": "EPS系统的标志有哪些:",
    "options": [
      {
        "label": "A",
        "text": "GUTI"
      },
      {
        "label": "B",
        "text": "TAI"
      },
      {
        "label": "C",
        "text": "RNTI"
      },
      {
        "label": "D",
        "text": "CI"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 575,
    "type": "多选",
    "q": "E-UTRAN系统消息（SI）在哪些信道上发送:",
    "options": [
      {
        "label": "A",
        "text": "PBCH"
      },
      {
        "label": "B",
        "text": "PDCCH"
      },
      {
        "label": "C",
        "text": "PDSCH"
      },
      {
        "label": "D",
        "text": "PRACH"
      }
    ],
    "a": "AC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 576,
    "type": "多选",
    "q": "LTE系统小区间干扰抑制技术主要有3种解决方式,即",
    "options": [
      {
        "label": "A",
        "text": "小区间干扰随机化"
      },
      {
        "label": "B",
        "text": "小区间干扰删除"
      },
      {
        "label": "C",
        "text": "干扰协调与避免"
      },
      {
        "label": "D",
        "text": "频分复用"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 577,
    "type": "多选",
    "q": "LTE系统中,网络自配置过程包括哪几个主要功能:",
    "options": [
      {
        "label": "A",
        "text": "参数调整"
      },
      {
        "label": "B",
        "text": "基本启动"
      },
      {
        "label": "C",
        "text": "初始无线参数配置"
      },
      {
        "label": "D",
        "text": "参数优化"
      }
    ],
    "a": "BC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 578,
    "type": "多选",
    "q": "LTE中QoS参数包括:",
    "options": [
      {
        "label": "A",
        "text": "QCI"
      },
      {
        "label": "B",
        "text": "ARP"
      },
      {
        "label": "C",
        "text": "GBR"
      },
      {
        "label": "D",
        "text": "AMBR"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 579,
    "type": "多选",
    "q": "请问QCI等于下面哪些值时映射的承载为GBR承载:",
    "options": [
      {
        "label": "A",
        "text": "1"
      },
      {
        "label": "B",
        "text": "2"
      },
      {
        "label": "C",
        "text": "3"
      },
      {
        "label": "D",
        "text": "4"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 580,
    "type": "多选",
    "q": "请问QCI等于下面哪些值时映射的承载为NGBR承载:",
    "options": [
      {
        "label": "A",
        "text": "1"
      },
      {
        "label": "B",
        "text": "2"
      },
      {
        "label": "C",
        "text": "3"
      },
      {
        "label": "D",
        "text": "4"
      }
    ],
    "a": "EF",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 581,
    "type": "多选",
    "q": "以下哪个模块属于RNLC系统:",
    "options": [
      {
        "label": "A",
        "text": "DCM"
      },
      {
        "label": "B",
        "text": "CCM"
      },
      {
        "label": "C",
        "text": "BCM"
      },
      {
        "label": "D",
        "text": "CRM"
      }
    ],
    "a": "ABCDEF",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 582,
    "type": "多选",
    "q": "服务小区与EUTRAN系统内邻区关系有:",
    "options": [
      {
        "label": "A",
        "text": "相邻"
      },
      {
        "label": "B",
        "text": "同覆盖"
      },
      {
        "label": "C",
        "text": "邻小区包含本小区"
      },
      {
        "label": "D",
        "text": "邻小区被包含于本小区"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 583,
    "type": "多选",
    "q": "OMC和ENB的通信方式有哪几种:",
    "options": [
      {
        "label": "A",
        "text": "SNMP"
      },
      {
        "label": "B",
        "text": "RUDP"
      },
      {
        "label": "C",
        "text": "FTP"
      },
      {
        "label": "D",
        "text": "SNMPTRAP"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 584,
    "type": "多选",
    "q": "以下哪些算法属于RRM算法:",
    "options": [
      {
        "label": "A",
        "text": "QoS算法"
      },
      {
        "label": "B",
        "text": "接纳算法"
      },
      {
        "label": "C",
        "text": "移动性管理算法"
      },
      {
        "label": "D",
        "text": "物理资源分配算法"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 585,
    "type": "多选",
    "q": "以下哪些模块属于CC单板:",
    "options": [
      {
        "label": "A",
        "text": "DCM模块"
      },
      {
        "label": "B",
        "text": "DBS模块"
      },
      {
        "label": "C",
        "text": "USM模块"
      },
      {
        "label": "D",
        "text": "DMAC模块"
      }
    ],
    "a": "ABF",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 586,
    "type": "多选",
    "q": "站内切换需配置的参数包括:",
    "options": [
      {
        "label": "A",
        "text": "S1偶联配置"
      },
      {
        "label": "B",
        "text": "X2偶联配置"
      },
      {
        "label": "C",
        "text": "邻区配置"
      },
      {
        "label": "D",
        "text": "测量参数配置"
      }
    ],
    "a": "ACDEF",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 587,
    "type": "多选",
    "q": "当勘察新建机房时,对建筑物防雷要求描述不正确的是:",
    "options": [
      {
        "label": "A",
        "text": "在市电进入机房的线路上,不用安装电源防雷装置"
      },
      {
        "label": "B",
        "text": "在建筑物易受雷击的部位装设避雷网或避雷带"
      },
      {
        "label": "C",
        "text": "接地体宜采用建筑物本身的金属构件（如墙,柱内的钢筋）作为防雷接地的引下线,这些引下线应进行电气联通,使建筑物内的电位均衡"
      },
      {
        "label": "D",
        "text": "突出屋面的物体如烟囱,天线,水塔等,不应在其上部安装架空防雷线或避雷针"
      }
    ],
    "a": "AD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 588,
    "type": "多选",
    "q": "以下说法正确:",
    "options": [
      {
        "label": "A",
        "text": "配重式抱杆支架要求屋面活荷载≥1.5kN/m2"
      },
      {
        "label": "B",
        "text": "抱杆距屋面边沿的距离与抱杆高度无关"
      },
      {
        "label": "C",
        "text": "混凝土墩下方用1:3水泥砂浆找平"
      },
      {
        "label": "D",
        "text": "选址应避开屋面挑檐,雨水口,天沟,并注意不得损害原屋面防水层"
      }
    ],
    "a": "ACD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 589,
    "type": "多选",
    "q": "下列那几种电源线的直径符合我国的标准:",
    "options": [
      {
        "label": "A",
        "text": "16mm"
      },
      {
        "label": "B",
        "text": "25mm"
      },
      {
        "label": "C",
        "text": "32mm"
      },
      {
        "label": "D",
        "text": "240mm"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 590,
    "type": "多选",
    "q": "B8300支持的安装方式有下面几种方式:",
    "options": [
      {
        "label": "A",
        "text": "HUB柜安装"
      },
      {
        "label": "B",
        "text": "19英寸机柜安装"
      },
      {
        "label": "C",
        "text": "抱杆安装"
      },
      {
        "label": "D",
        "text": "挂墙安装"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 591,
    "type": "多选",
    "q": "CC板的软件架构包括一下哪些:",
    "options": [
      {
        "label": "A",
        "text": "SDR平台软件"
      },
      {
        "label": "B",
        "text": "LTE平台软件"
      },
      {
        "label": "C",
        "text": "LTE业务软件"
      },
      {
        "label": "D",
        "text": ""
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 592,
    "type": "多选",
    "q": "CC板提供哪些外部接口:",
    "options": [
      {
        "label": "A",
        "text": "S1/X2接口"
      },
      {
        "label": "B",
        "text": "GPS天线"
      },
      {
        "label": "C",
        "text": "环境监控接口"
      },
      {
        "label": "D",
        "text": "本地操作维护接口"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 593,
    "type": "多选",
    "q": "RRU包括哪些主要功能模块:",
    "options": [
      {
        "label": "A",
        "text": "双工滤波器"
      },
      {
        "label": "B",
        "text": "功放"
      },
      {
        "label": "C",
        "text": "监控"
      },
      {
        "label": "D",
        "text": "收发信板"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 594,
    "type": "多选",
    "q": "UBPM板有哪些功能:",
    "options": [
      {
        "label": "A",
        "text": "完成物理层的相关处理"
      },
      {
        "label": "B",
        "text": "提供与RRU之间的光接口"
      },
      {
        "label": "C",
        "text": "支持IPMI机框管理"
      },
      {
        "label": "D",
        "text": "提供传输信道到物理信道的映射"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 595,
    "type": "多选",
    "q": "UBPM板主要有哪些功能:",
    "options": [
      {
        "label": "A",
        "text": "实现LTEeNodeB用户面处理"
      },
      {
        "label": "B",
        "text": "实现与CC信令流和媒体流交换"
      },
      {
        "label": "C",
        "text": "实现内部基带处理与用户面处理的媒体流交换"
      },
      {
        "label": "D",
        "text": "支持IPMI机框管理"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 596,
    "type": "多选",
    "q": "以太网线在BBU中可用于:",
    "options": [
      {
        "label": "A",
        "text": "S1/X2接口"
      },
      {
        "label": "B",
        "text": "本地操作维护LMT线缆"
      },
      {
        "label": "C",
        "text": "操作管理维护"
      },
      {
        "label": "D",
        "text": "环境监控"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 597,
    "type": "多选",
    "q": "LTE的容量仿真与TD-SCDMA相比有哪些不同:",
    "options": [
      {
        "label": "A",
        "text": "支持时时域频域二维的调度算法(RB资源分配)"
      },
      {
        "label": "B",
        "text": "支持各种多天线技术"
      },
      {
        "label": "C",
        "text": "支持小区间干扰协调(主要为基于SFR的ICIC)"
      },
      {
        "label": "D",
        "text": "不仅考虑大尺度衰落,还考虑小尺度衰落"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 598,
    "type": "多选",
    "q": "影响天线覆盖距离的主要因素有:",
    "options": [
      {
        "label": "A",
        "text": "天线挂高"
      },
      {
        "label": "B",
        "text": "天线下倾角"
      },
      {
        "label": "C",
        "text": "天线增益"
      },
      {
        "label": "D",
        "text": "天线方位角"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 599,
    "type": "多选",
    "q": "切换分析报表输出的各项统计有:",
    "options": [
      {
        "label": "A",
        "text": "切换次数"
      },
      {
        "label": "B",
        "text": "切换成功次数"
      },
      {
        "label": "C",
        "text": "切换失败次数"
      },
      {
        "label": "D",
        "text": "切换成功率"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 600,
    "type": "多选",
    "q": "触发切换的原因:",
    "options": [
      {
        "label": "A",
        "text": "网络覆盖"
      },
      {
        "label": "B",
        "text": "网络负荷"
      },
      {
        "label": "C",
        "text": "业务"
      },
      {
        "label": "D",
        "text": "速度"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 601,
    "type": "多选",
    "q": "随机接入的触发条件:",
    "options": [
      {
        "label": "A",
        "text": "RRC_IDLE初始接入"
      },
      {
        "label": "B",
        "text": "无线链路断开时初始接入"
      },
      {
        "label": "C",
        "text": "切换时需要随机接入"
      },
      {
        "label": "D",
        "text": "RRC_CONNECTED状态下收到下行数据,需要随机接入,即UE被叫时失步"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 602,
    "type": "多选",
    "q": "网优过程中,系统参数部分可调整的参数有:",
    "options": [
      {
        "label": "A",
        "text": "接纳控制参数"
      },
      {
        "label": "B",
        "text": "功率控制参数"
      },
      {
        "label": "C",
        "text": "切换参数"
      },
      {
        "label": "D",
        "text": "测量参数"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 603,
    "type": "多选",
    "q": "UE Attach流程包含以下哪几个过程",
    "options": [
      {
        "label": "A",
        "text": "RRC链接建立和S1连接建立"
      },
      {
        "label": "B",
        "text": "E-RAB建立"
      },
      {
        "label": "C",
        "text": "专用承载建立"
      },
      {
        "label": "D",
        "text": "鉴权过程和安全过程"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 604,
    "type": "多选",
    "q": "eNodeB可以通过如下几种方式执行到UTRAN的CS Fallback______",
    "options": [
      {
        "label": "A",
        "text": "基于PS重定向的CS Fallback"
      },
      {
        "label": "B",
        "text": "基于PS切换的CS Fallback"
      },
      {
        "label": "C",
        "text": "基于CCO/NACC的CS Fallback"
      },
      {
        "label": "D",
        "text": "快速（Flash）CSFallback"
      }
    ],
    "a": "BCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 605,
    "type": "多选",
    "q": "使用Probe进行路测时必须配置的设备有_______",
    "options": [
      {
        "label": "A",
        "text": "SCANNER"
      },
      {
        "label": "B",
        "text": "GPS"
      },
      {
        "label": "C",
        "text": "MS"
      },
      {
        "label": "D",
        "text": ""
      }
    ],
    "a": "BC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 606,
    "type": "多选",
    "q": "影响上行覆盖的因素有________",
    "options": [
      {
        "label": "A",
        "text": "频段"
      },
      {
        "label": "B",
        "text": "天线分集增益"
      },
      {
        "label": "C",
        "text": "塔放"
      },
      {
        "label": "D",
        "text": "基站接收灵敏度"
      }
    ],
    "a": "ABCDF",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 607,
    "type": "多选",
    "q": "评估LTE网络主要通过哪些性能指标进行评估______",
    "options": [
      {
        "label": "A",
        "text": "软切换成功率"
      },
      {
        "label": "B",
        "text": "连接建立成功率"
      },
      {
        "label": "C",
        "text": "掉话率"
      },
      {
        "label": "D",
        "text": "寻呼成功率"
      }
    ],
    "a": "BCDEF",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 608,
    "type": "多选",
    "q": "RRC连接建立失败的原因有_______。",
    "options": [
      {
        "label": "A",
        "text": "鉴权失败"
      },
      {
        "label": "B",
        "text": "eNodeB拒绝用户接入"
      },
      {
        "label": "C",
        "text": "eNodeB资源分配失败"
      },
      {
        "label": "D",
        "text": "弱覆盖导致UE无应答"
      }
    ],
    "a": "BCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 609,
    "type": "多选",
    "q": "LTE常见的掉话原因有哪些______。",
    "options": [
      {
        "label": "A",
        "text": "切换失败"
      },
      {
        "label": "B",
        "text": "外部干扰"
      },
      {
        "label": "C",
        "text": "小区覆盖差"
      },
      {
        "label": "D",
        "text": "业务调度不足"
      }
    ],
    "a": "ABCE",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 610,
    "type": "多选",
    "q": "工程勘察流程包括下面那些方面:",
    "options": [
      {
        "label": "A",
        "text": "工程勘察准备"
      },
      {
        "label": "B",
        "text": "制定工程勘察计划"
      },
      {
        "label": "C",
        "text": "工程现场勘察,第一次环境验收"
      },
      {
        "label": "D",
        "text": "勘察文档制作"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 611,
    "type": "多选",
    "q": "下列对通信机房环境要求描述正确的是:",
    "options": [
      {
        "label": "A",
        "text": "机房湿度调节范围应在30％~75％"
      },
      {
        "label": "B",
        "text": "机房温度调节范围应在18℃~28℃"
      },
      {
        "label": "C",
        "text": "机房灰尘的浓度小于3×104粒/m3"
      },
      {
        "label": "D",
        "text": "机房主体照明采用镶入天花板的日光灯,平均照度以300lx~450lx为宜"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 612,
    "type": "多选",
    "q": "通信机房的接地系统有那几种设计方式:",
    "options": [
      {
        "label": "A",
        "text": "星形分配系统"
      },
      {
        "label": "B",
        "text": "网形分配系统"
      },
      {
        "label": "C",
        "text": "混合的星－网形分配系统"
      },
      {
        "label": "D",
        "text": "链形分配系统"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 613,
    "type": "多选",
    "q": "下列那些属于不规范的施工行为:",
    "options": [
      {
        "label": "A",
        "text": "某工程人员由于紧急事情未换鞋便走进用户机房"
      },
      {
        "label": "B",
        "text": "某工程师未经客户同意使用客户电话"
      },
      {
        "label": "C",
        "text": "某工程师在随工人员的许可下,在机房抽烟"
      },
      {
        "label": "D",
        "text": "某工程队在天馈安装中,塔下施工人员未带安全帽,塔上人员未系安全带"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 614,
    "type": "多选",
    "q": "TD-LTE工程中,下面哪些线缆两端均要粘贴标签（机柜门,侧门板保护接地线不需做标签）,书写工整,粘贴位置一致,标签紧贴端头粘贴,距离端头20mm:",
    "options": [
      {
        "label": "A",
        "text": "电源线"
      },
      {
        "label": "B",
        "text": "地线"
      },
      {
        "label": "C",
        "text": "传输线"
      },
      {
        "label": "D",
        "text": "野战光缆"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 615,
    "type": "多选",
    "q": "通信系统的接地类型分为:",
    "options": [
      {
        "label": "A",
        "text": "室内接地"
      },
      {
        "label": "B",
        "text": "工作接地"
      },
      {
        "label": "C",
        "text": "保护接地"
      },
      {
        "label": "D",
        "text": "防雷接地"
      }
    ],
    "a": "BCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 616,
    "type": "多选",
    "q": "下述GPS布放原则描述正确的是:",
    "options": [
      {
        "label": "A",
        "text": "L<130m时,采用1/4″电缆"
      },
      {
        "label": "B",
        "text": "130m<L<220m时,采用7/8″电缆"
      },
      {
        "label": "C",
        "text": "L>220m时,可以采用1/2″馈线＋放大器的方式"
      },
      {
        "label": "D",
        "text": "以上都正确"
      }
    ],
    "a": "BC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 617,
    "type": "多选",
    "q": "以下LTE哪些覆盖指标与LTE负荷大小相关________。",
    "options": [
      {
        "label": "A",
        "text": "RSRP"
      },
      {
        "label": "B",
        "text": "EC/IO"
      },
      {
        "label": "C",
        "text": "SINR"
      },
      {
        "label": "D",
        "text": "RSRQ"
      }
    ],
    "a": "CD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 618,
    "type": "多选",
    "q": "用户最终分配的RB数由以下哪些因素决定:",
    "options": [
      {
        "label": "A",
        "text": "PDSCHSINR"
      },
      {
        "label": "B",
        "text": "历史流量"
      },
      {
        "label": "C",
        "text": "业务保障速率"
      },
      {
        "label": "D",
        "text": "UE等级"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 619,
    "type": "多选",
    "q": "TD-LTE网络规划工具CNP的业务模型参数包括:",
    "options": [
      {
        "label": "A",
        "text": "会话时间间隔"
      },
      {
        "label": "B",
        "text": "阅读时间间隔"
      },
      {
        "label": "C",
        "text": "上/下行保障速率"
      },
      {
        "label": "D",
        "text": "上/下行子对象大小"
      }
    ],
    "a": "ABCDE",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 620,
    "type": "多选",
    "q": "影响LTE容量估算的因素包括:",
    "options": [
      {
        "label": "A",
        "text": "环境因素"
      },
      {
        "label": "B",
        "text": "设备性能"
      },
      {
        "label": "C",
        "text": "多天线技术"
      },
      {
        "label": "D",
        "text": "调度算法"
      }
    ],
    "a": "ABCDE",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 621,
    "type": "多选",
    "q": "上行UCI中包含哪些信息:",
    "options": [
      {
        "label": "A",
        "text": "HARQ"
      },
      {
        "label": "B",
        "text": "CQI"
      },
      {
        "label": "C",
        "text": "RI"
      },
      {
        "label": "D",
        "text": "PMI"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 622,
    "type": "多选",
    "q": "下行DCI中包含哪些信息:",
    "options": [
      {
        "label": "A",
        "text": "传输格式"
      },
      {
        "label": "B",
        "text": "功率控制"
      },
      {
        "label": "C",
        "text": "HARQ"
      },
      {
        "label": "D",
        "text": "资源分配"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 623,
    "type": "多选",
    "q": "PDCCH支持的发射模式有:",
    "options": [
      {
        "label": "A",
        "text": "单天线端口"
      },
      {
        "label": "B",
        "text": "发射分集"
      },
      {
        "label": "C",
        "text": "BF"
      },
      {
        "label": "D",
        "text": "MIMO"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 624,
    "type": "多选",
    "q": "无线通信网络中,为什么要使用功率控制:",
    "options": [
      {
        "label": "A",
        "text": "降低多径干扰"
      },
      {
        "label": "B",
        "text": "解决远近效应"
      },
      {
        "label": "C",
        "text": "解决阴影效应"
      },
      {
        "label": "D",
        "text": "提高系统容量和节约电池"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 625,
    "type": "多选",
    "q": "PDCCH可以占用的CCE个数有哪些:",
    "options": [
      {
        "label": "A",
        "text": "1"
      },
      {
        "label": "B",
        "text": "2"
      },
      {
        "label": "C",
        "text": "4"
      },
      {
        "label": "D",
        "text": "8"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 626,
    "type": "多选",
    "q": "下面关于LTE站点勘察说法正确的是:",
    "options": [
      {
        "label": "A",
        "text": "站点选择要满足无线网络拓扑结构设计要求"
      },
      {
        "label": "B",
        "text": "要使天线主瓣正对着街道走向,以保证道路覆盖"
      },
      {
        "label": "C",
        "text": "扇区天线发现方向按照规划法线方向设置时,要预留30度左右的调整余度"
      },
      {
        "label": "D",
        "text": "进行站点拍照时,每60度拍一张照片"
      }
    ],
    "a": "AC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 627,
    "type": "多选",
    "q": "对测量事件描述正确的是:",
    "options": [
      {
        "label": "A",
        "text": "A1事件：服务小区质量高于一个绝对门限（serving>threshold）,用于关闭正在进行的频间测量和gap"
      },
      {
        "label": "B",
        "text": "A2事件：服务小区质量低于一个绝对门限（serving<threshold）,用于打开频间测量和激活gap"
      },
      {
        "label": "C",
        "text": "A3事件：邻区比服务小区质量高于一个门限（Neighbour>Serving+Offset,Offset：+/-）,用于频内/频间的基于覆盖的切换"
      },
      {
        "label": "D",
        "text": "A4事件：邻区质量高于一个绝对门限,用于基于负荷的切换"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 628,
    "type": "多选",
    "q": "哪些信令属于基于竞争的随机接入:",
    "options": [
      {
        "label": "A",
        "text": "RandomAccessPreamble"
      },
      {
        "label": "B",
        "text": "RAPreambleassignment"
      },
      {
        "label": "C",
        "text": "RandomAccessResponse"
      },
      {
        "label": "D",
        "text": "ScheduledTransmission"
      }
    ],
    "a": "ACD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 629,
    "type": "多选",
    "q": "GPS干放和天线的使用原则:",
    "options": [
      {
        "label": "A",
        "text": "馈线小于130米,只需要一个MBGPS-38-001GPS天线"
      },
      {
        "label": "B",
        "text": "馈线大于130米小于330米,MBGPS-38-001加一个干线放大器"
      },
      {
        "label": "C",
        "text": "馈线大于330米小区510米使用高增益GPS天线加一个干线放大器"
      },
      {
        "label": "D",
        "text": "馈线大于510米小于710米,使用高增益GPS天线加两个个干线放大器"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 630,
    "type": "多选",
    "q": "关于RF优化说法正确的是_______",
    "options": [
      {
        "label": "A",
        "text": "RF优化完全可以由系统参数优化替代"
      },
      {
        "label": "B",
        "text": "RF优化的对象是天线（位置高度方位角下倾角）"
      },
      {
        "label": "C",
        "text": "RF优化的理论基础可以参考覆盖仿真结果"
      },
      {
        "label": "D",
        "text": "RF优化的目标是无线信号覆盖"
      }
    ],
    "a": "BCDE",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 631,
    "type": "多选",
    "q": "Probe软件使用的流程包含_______",
    "options": [
      {
        "label": "A",
        "text": "配置测试计划并执行测试计划"
      },
      {
        "label": "B",
        "text": "导入地图/公参"
      },
      {
        "label": "C",
        "text": "系统设置"
      },
      {
        "label": "D",
        "text": "导入话统数据"
      }
    ],
    "a": "ABCEF",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 632,
    "type": "多选",
    "q": "OFDM抗多径干扰的方法包括______",
    "options": [
      {
        "label": "A",
        "text": "时分复用"
      },
      {
        "label": "B",
        "text": "保护间隔"
      },
      {
        "label": "C",
        "text": "循环前缀"
      },
      {
        "label": "D",
        "text": "分集接收"
      }
    ],
    "a": "BC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 633,
    "type": "多选",
    "q": "TDL网络好中近点RSRP个满足的条件是_______（按照好中近顺序选择答案）",
    "options": [
      {
        "label": "A",
        "text": "-95～-105 dBm"
      },
      {
        "label": "B",
        "text": "-105～-115dBm"
      },
      {
        "label": "C",
        "text": "-85～-95dBm"
      },
      {
        "label": "D",
        "text": "-65～-95dBm"
      }
    ],
    "a": "CAB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 634,
    "type": "多选",
    "q": "影响下行覆盖的因素有_______",
    "options": [
      {
        "label": "A",
        "text": "合路损耗"
      },
      {
        "label": "B",
        "text": "频段"
      },
      {
        "label": "C",
        "text": "路径损耗PL"
      },
      {
        "label": "D",
        "text": "接收点距离基站的距离"
      }
    ],
    "a": "ABCDF",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 635,
    "type": "多选",
    "q": "优势",
    "options": [
      {
        "label": "A",
        "text": "记录站至周边环境温度"
      },
      {
        "label": "B",
        "text": "观察站址周围是否存在其他通信设备的天馈系统，并做记录。记录下天线位置（采用方向距离   表示）系统所用频段发射功率天线挂高方向角俯仰角"
      },
      {
        "label": "C",
        "text": "记录各个方向上障碍物的高度和距本站的距离。从0度（正北方向）开始，以45度位步长，记录8个方向上的障碍物的高度和距本站的距离"
      },
      {
        "label": "D",
        "text": "拍摄站址周围的无限传播环境，每张照片要注明拍摄点的位置以及拍摄方向。上一张照片跟下一张照片应该有少许交叠"
      }
    ],
    "a": "BCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 636,
    "type": "多选",
    "q": "解决越区覆盖的方法有________",
    "options": [
      {
        "label": "A",
        "text": "调整邻区关系"
      },
      {
        "label": "B",
        "text": "在天线方位角基本合理的情况下，调整扇区天线下倾角或更换电子下倾更大的天线"
      },
      {
        "label": "C",
        "text": "避免扇区天线的主瓣方向正对道路传输"
      },
      {
        "label": "D",
        "text": "在不影响小区业务性能的前提下，降低载频功率"
      }
    ],
    "a": "BCDE",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 637,
    "type": "多选",
    "q": "LTE小区理论峰值的影响因素______",
    "options": [
      {
        "label": "A",
        "text": "调制方式（MCS）"
      },
      {
        "label": "B",
        "text": "UE能力"
      },
      {
        "label": "C",
        "text": "MIMO模式"
      },
      {
        "label": "D",
        "text": "小区带宽"
      }
    ],
    "a": "ACD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 638,
    "type": "多选",
    "q": "以下哪些系统消息包含了同频小区重选信息_______",
    "options": [
      {
        "label": "A",
        "text": "SIB6"
      },
      {
        "label": "B",
        "text": "SIB5"
      },
      {
        "label": "C",
        "text": "SIB3"
      },
      {
        "label": "D",
        "text": "SIB4"
      }
    ],
    "a": "CD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 639,
    "type": "多选",
    "q": "小区的不合理布局将对网络性能产生很大的影响，具体表现有_______。",
    "options": [
      {
        "label": "A",
        "text": "越区覆盖"
      },
      {
        "label": "B",
        "text": "弱信号区及信号盲区"
      },
      {
        "label": "C",
        "text": "覆盖重叠区面积多大"
      },
      {
        "label": "D",
        "text": "覆盖面积变大"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 640,
    "type": "多选",
    "q": "邻区漏配的解决方法有_______。",
    "options": [
      {
        "label": "A",
        "text": "打开ANR算法开关"
      },
      {
        "label": "B",
        "text": "调整小区切换优先级"
      },
      {
        "label": "C",
        "text": "检查射频通道"
      },
      {
        "label": "D",
        "text": "手工添加邻区配置"
      }
    ],
    "a": "AD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 641,
    "type": "多选",
    "q": "对于越区覆盖以下描述正确的是______。",
    "options": [
      {
        "label": "A",
        "text": "对于LTE而言越区覆盖不会对其邻区小区形成干扰"
      },
      {
        "label": "B",
        "text": "越区覆盖可能形成“孤岛”，导致掉话"
      },
      {
        "label": "C",
        "text": "越区覆盖可能导致UE发射功率受限，引起接入失败"
      },
      {
        "label": "D",
        "text": "越区覆盖可能导致越区覆盖基础与周边基站负荷不均衡，周边基站资源利用率低"
      }
    ],
    "a": "BCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 642,
    "type": "多选",
    "q": "引起上下行链路不平衡的原因有______。",
    "options": [
      {
        "label": "A",
        "text": "eNodeB硬件故障"
      },
      {
        "label": "B",
        "text": "基站站间距过密"
      },
      {
        "label": "C",
        "text": "干放和直放站故障"
      },
      {
        "label": "D",
        "text": "上行干扰"
      }
    ],
    "a": "ACDEF",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 643,
    "type": "多选",
    "q": "LTE网络中SGW的功能有哪些______。",
    "options": [
      {
        "label": "A",
        "text": "下行数据缓存"
      },
      {
        "label": "B",
        "text": "用户IP地址分配"
      },
      {
        "label": "C",
        "text": "下行数据缓存"
      },
      {
        "label": "D",
        "text": "移动性锚点，eNB间的切换时，SGW作为用户面的锚点"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 644,
    "type": "多选",
    "q": "E-RAB异常释放原因有________。",
    "options": [
      {
        "label": "A",
        "text": "网络拥塞"
      },
      {
        "label": "B",
        "text": "切换失败"
      },
      {
        "label": "C",
        "text": "核心网问题"
      },
      {
        "label": "D",
        "text": "UE长时间处于不活动状态"
      }
    ],
    "a": "BCDE",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 645,
    "type": "多选",
    "q": "室内分布系统常用器件有_______。",
    "options": [
      {
        "label": "A",
        "text": "合路器"
      },
      {
        "label": "B",
        "text": "天线"
      },
      {
        "label": "C",
        "text": "功分器"
      },
      {
        "label": "D",
        "text": "耦合器"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 646,
    "type": "多选",
    "q": "LTE RLC层的功能包括_______。",
    "options": [
      {
        "label": "A",
        "text": "分段"
      },
      {
        "label": "B",
        "text": "ARQ"
      },
      {
        "label": "C",
        "text": "级联"
      },
      {
        "label": "D",
        "text": "加密"
      }
    ],
    "a": "ABCE",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 647,
    "type": "多选",
    "q": "在楼顶安装定向天线需要满足哪些要求:",
    "options": [
      {
        "label": "A",
        "text": "安装时应避开阻挡物,尽量避免产生信号盲区"
      },
      {
        "label": "B",
        "text": "加强杆连接件的安装位置应不影响天线方向和倾角的调整"
      },
      {
        "label": "C",
        "text": "天线支架一定要和水平垂直"
      },
      {
        "label": "D",
        "text": "定向天线安装在楼顶时,要求支架必须安装有避雷针,支架和建筑物避雷网也应连通"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 648,
    "type": "多选",
    "q": "协议错误情况可以分成哪些:",
    "options": [
      {
        "label": "A",
        "text": "TransferSyntaxError"
      },
      {
        "label": "B",
        "text": "AbstractSyntaxError"
      },
      {
        "label": "C",
        "text": "LogicalError"
      },
      {
        "label": "D",
        "text": "UnknownError"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 649,
    "type": "多选",
    "q": "对于接收到的不同种类的程序编码临界状态信息,接收节点的处理方式:",
    "options": [
      {
        "label": "A",
        "text": "RejectIE"
      },
      {
        "label": "B",
        "text": "IgnoreIEandNotifySender"
      },
      {
        "label": "C",
        "text": "IgnoreIE"
      },
      {
        "label": "D",
        "text": "ReceiveIE"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 650,
    "type": "多选",
    "q": "E-RAB建立成功率统计要包含的过程:",
    "options": [
      {
        "label": "A",
        "text": "初始Attach过程"
      },
      {
        "label": "B",
        "text": "ServiceRequest过程"
      },
      {
        "label": "C",
        "text": "RRC建立过程"
      },
      {
        "label": "D",
        "text": "Bearer建立过程"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 651,
    "type": "多选",
    "q": "E-UTRAN系统定义了上行物理信道有哪些:",
    "options": [
      {
        "label": "A",
        "text": "PUSCH"
      },
      {
        "label": "B",
        "text": "PUCCH"
      },
      {
        "label": "C",
        "text": "PRACH"
      },
      {
        "label": "D",
        "text": "PCFICH"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 652,
    "type": "多选",
    "q": "E-UTRAN系统中,逻辑信道包括下述哪几大类:",
    "options": [
      {
        "label": "A",
        "text": "控制信道"
      },
      {
        "label": "B",
        "text": "传输信道"
      },
      {
        "label": "C",
        "text": "物理行道"
      },
      {
        "label": "D",
        "text": "业务信道"
      }
    ],
    "a": "AD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 653,
    "type": "多选",
    "q": "E-UTRAN系统中,下述属于下行物理信道是:",
    "options": [
      {
        "label": "A",
        "text": "PDSCH"
      },
      {
        "label": "B",
        "text": "PBCH和PDCCH"
      },
      {
        "label": "C",
        "text": "PMCH"
      },
      {
        "label": "D",
        "text": "PCFICH"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 654,
    "type": "多选",
    "q": "RLC实体包括以下种类:",
    "options": [
      {
        "label": "A",
        "text": "TMRLC发送实体/TMRLC接收实体"
      },
      {
        "label": "B",
        "text": "UMRLC发送实体/UMRLC接收实体"
      },
      {
        "label": "C",
        "text": "AMRLC发送实体/AMRLC接收实体"
      },
      {
        "label": "D",
        "text": "AMRLC实体"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 655,
    "type": "多选",
    "q": "LTE系统内移动性测量事件有哪些:",
    "options": [
      {
        "label": "A",
        "text": "A1"
      },
      {
        "label": "B",
        "text": "A2"
      },
      {
        "label": "C",
        "text": "A3"
      },
      {
        "label": "D",
        "text": "A4"
      }
    ],
    "a": "ABCDE",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 656,
    "type": "多选",
    "q": "TD-LTE的时间转换周期包括哪两个:",
    "options": [
      {
        "label": "A",
        "text": "1ms"
      },
      {
        "label": "B",
        "text": "5ms"
      },
      {
        "label": "C",
        "text": "10ms"
      },
      {
        "label": "D",
        "text": "20ms"
      }
    ],
    "a": "BC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 657,
    "type": "多选",
    "q": "关于OFDM技术,说法正确的是:",
    "options": [
      {
        "label": "A",
        "text": "LTE上行链路所采用的SC-FDMA多址接入技术基于DFTspreadOFDM传输方案"
      },
      {
        "label": "B",
        "text": "OFDM系统的输出是多个子信道信号的叠加,如果多个信号的相位一致,所得到的叠加信号的瞬时功率就会远远高于信号的平均功率,即OFDM系统的PAPR较高"
      },
      {
        "label": "C",
        "text": "OFDM调制对发射机的线性度,功耗提出了很高的要求,所以在LTE上行链路,基于OFDM的多址接入技术并不适合用在UE侧使用"
      },
      {
        "label": "D",
        "text": "上行采用SC-FDMA后,在降低峰均比的同时,也降低了频谱效率"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 658,
    "type": "多选",
    "q": "LTE系统与异RAT系统间移动性测量事件有几种:",
    "options": [
      {
        "label": "A",
        "text": "B1"
      },
      {
        "label": "B",
        "text": "B2"
      },
      {
        "label": "C",
        "text": "B3"
      },
      {
        "label": "D",
        "text": "B4"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 659,
    "type": "多选",
    "q": "用于承载RRC消息和NAS消息的SRB有哪些:",
    "options": [
      {
        "label": "A",
        "text": "SRB0"
      },
      {
        "label": "B",
        "text": "SRB1"
      },
      {
        "label": "C",
        "text": "SRB2"
      },
      {
        "label": "D",
        "text": "SRB3"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 660,
    "type": "多选",
    "q": "RRC连接重配置消息用于建立:",
    "options": [
      {
        "label": "A",
        "text": "SRB0"
      },
      {
        "label": "B",
        "text": "SRB1"
      },
      {
        "label": "C",
        "text": "SRB2"
      },
      {
        "label": "D",
        "text": "DRBs"
      }
    ],
    "a": "CD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 661,
    "type": "多选",
    "q": "AS层的安全性功能包括哪两部分:",
    "options": [
      {
        "label": "A",
        "text": "SRBs的完整性保护"
      },
      {
        "label": "B",
        "text": "SRBs和DRBs的加密"
      },
      {
        "label": "C",
        "text": "RBs的加密"
      },
      {
        "label": "D",
        "text": "RBs的完整性保护"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 662,
    "type": "多选",
    "q": "LTE网管系统主要支持的TCP/IP类通讯协议包括:",
    "options": [
      {
        "label": "A",
        "text": "FTP"
      },
      {
        "label": "B",
        "text": "SNMP"
      },
      {
        "label": "C",
        "text": "CORBA"
      },
      {
        "label": "D",
        "text": "SCTP"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 663,
    "type": "多选",
    "q": "OMM中数据配置有哪几种方式:",
    "options": [
      {
        "label": "A",
        "text": "手动配置"
      },
      {
        "label": "B",
        "text": "模板批量导入"
      },
      {
        "label": "C",
        "text": "前台反构"
      },
      {
        "label": "D",
        "text": "SON自配置"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 664,
    "type": "多选",
    "q": "对于TD-LTE系统,不同频段在链路预算方面的差异主要体现在哪些方面:",
    "options": [
      {
        "label": "A",
        "text": "上跳线损耗"
      },
      {
        "label": "B",
        "text": "天线增益"
      },
      {
        "label": "C",
        "text": "传播模型"
      },
      {
        "label": "D",
        "text": ""
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 665,
    "type": "多选",
    "q": "阻塞干扰是指当同时被接收机接收时,强干扰会使接收机链路的非线性器件饱和,产生非线性失真:",
    "options": [
      {
        "label": "A",
        "text": "强的干扰信号"
      },
      {
        "label": "B",
        "text": "加性噪声"
      },
      {
        "label": "C",
        "text": "有用信号"
      },
      {
        "label": "D",
        "text": "阻塞干扰"
      }
    ],
    "a": "AC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 666,
    "type": "多选",
    "q": "引起邻道干扰的具体原因是:",
    "options": [
      {
        "label": "A",
        "text": "模拟通道的非线性产生的噪声"
      },
      {
        "label": "B",
        "text": "邻道信号经过滤波器之后的残余噪声功率"
      },
      {
        "label": "C",
        "text": "混频器的倒易混频"
      },
      {
        "label": "D",
        "text": "在ADC或数字处理部分产生的噪声业务信道"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 667,
    "type": "多选",
    "q": "影响LTE流量的主要影响因素有哪些:",
    "options": [
      {
        "label": "A",
        "text": "干扰"
      },
      {
        "label": "B",
        "text": "多天线技术"
      },
      {
        "label": "C",
        "text": "子帧配比"
      },
      {
        "label": "D",
        "text": "带宽"
      }
    ],
    "a": "ABCDEF",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 668,
    "type": "多选",
    "q": "影响TD-LTE覆盖性能的因素有哪些:",
    "options": [
      {
        "label": "A",
        "text": "天线个数"
      },
      {
        "label": "B",
        "text": "发射功率"
      },
      {
        "label": "C",
        "text": "CP配置"
      },
      {
        "label": "D",
        "text": "RB资源分配"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 669,
    "type": "多选",
    "q": "需求分析是规划工作的基础,概括起来主要包括以下几个方面:",
    "options": [
      {
        "label": "A",
        "text": "规划区域"
      },
      {
        "label": "B",
        "text": "建网目标"
      },
      {
        "label": "C",
        "text": "业务模型"
      },
      {
        "label": "D",
        "text": "备选站点"
      }
    ],
    "a": "ABCDE",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 670,
    "type": "多选",
    "q": "属于LTE网络级干扰的有:",
    "options": [
      {
        "label": "A",
        "text": "同频干扰"
      },
      {
        "label": "B",
        "text": "异频干扰"
      },
      {
        "label": "C",
        "text": "交叉时隙干扰"
      },
      {
        "label": "D",
        "text": "室内外干扰"
      }
    ],
    "a": "ABCDE",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 671,
    "type": "多选",
    "q": "在LTE-Advanced中,采用的关键技术有:",
    "options": [
      {
        "label": "A",
        "text": "频谱聚合"
      },
      {
        "label": "B",
        "text": "中继Relay"
      },
      {
        "label": "C",
        "text": "分布式天线"
      },
      {
        "label": "D",
        "text": "基站间协同"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 672,
    "type": "多选",
    "q": "CNP中支持的地图格式有:",
    "options": [
      {
        "label": "A",
        "text": "MapInfo"
      },
      {
        "label": "B",
        "text": "GoogleEarth"
      },
      {
        "label": "C",
        "text": "Planet"
      },
      {
        "label": "D",
        "text": ""
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 673,
    "type": "多选",
    "q": "ACLR是邻道泄漏,它是指发射信号落入到被干扰接收机通带内的能力:",
    "options": [
      {
        "label": "A",
        "text": "邻道"
      },
      {
        "label": "B",
        "text": "带外"
      },
      {
        "label": "C",
        "text": "带内"
      },
      {
        "label": "D",
        "text": "交调"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 674,
    "type": "多选",
    "q": "OFDM的技术优点",
    "options": [
      {
        "label": "A",
        "text": "频谱效率高"
      },
      {
        "label": "B",
        "text": "宽带扩展性强"
      },
      {
        "label": "C",
        "text": "抗多径衰落"
      },
      {
        "label": "D",
        "text": "频域调度及自适应"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 675,
    "type": "多选",
    "q": "MIMO系统的极限容量和空间相关性有关，空间相关性越_，MIMO信道容量越_",
    "options": [
      {
        "label": "A",
        "text": "高,小"
      },
      {
        "label": "B",
        "text": "高，大"
      },
      {
        "label": "C",
        "text": "低，大"
      },
      {
        "label": "D",
        "text": "低，小"
      }
    ],
    "a": "AC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 676,
    "type": "多选",
    "q": "MME（MobilityManagementEntity）是一个信令实体，主要负责_等功能",
    "options": [
      {
        "label": "A",
        "text": "移动性管理"
      },
      {
        "label": "B",
        "text": "IP分配管理"
      },
      {
        "label": "C",
        "text": "用户的鉴权认证"
      },
      {
        "label": "D",
        "text": "SGW和PGW的选择"
      }
    ],
    "a": "ACD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 677,
    "type": "多选",
    "q": "ServingGW（以下简称SGW）终结和E-UTRAN的接口，主要负责_等功能，支持3GPP不同接入技术的切换，发生切换时作为用户面的锚点",
    "options": [
      {
        "label": "A",
        "text": "用户面处理"
      },
      {
        "label": "B",
        "text": "数据包的路由"
      },
      {
        "label": "C",
        "text": "数据包的转发"
      },
      {
        "label": "D",
        "text": "SAE承载控制"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 678,
    "type": "多选",
    "q": "LTE中RRC子层功能与原有UTRAN系统中的RRC功能相同，包括_等",
    "options": [
      {
        "label": "A",
        "text": "鉴权认证"
      },
      {
        "label": "B",
        "text": "系统信息广播"
      },
      {
        "label": "C",
        "text": "寻呼"
      },
      {
        "label": "D",
        "text": "建立释放维护RRC连接"
      }
    ],
    "a": "BCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 679,
    "type": "多选",
    "q": "已经确定的S1接口支持功能包括有",
    "options": [
      {
        "label": "A",
        "text": "SAE承载业务管理功能，例如建立和释放"
      },
      {
        "label": "B",
        "text": "UE在LTE_ACTIVE状态下的移动性功能，例如Intra-LTE切换和Inter-3GPP-RAT切换"
      },
      {
        "label": "C",
        "text": "网络共享功能，漫游和区域限制支持功能，NAS节点选择功能，初始上下文建立功能"
      },
      {
        "label": "D",
        "text": "S1寻呼功能,S1接口管理功能，例如错误指示等"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 680,
    "type": "多选",
    "q": "已经确定的S1接口的信令过程有",
    "options": [
      {
        "label": "A",
        "text": "SAE承载信令过程，包括SAE承载建立和释放过程"
      },
      {
        "label": "B",
        "text": "切换信令过程,寻呼过程"
      },
      {
        "label": "C",
        "text": "NAS信令传输功能"
      },
      {
        "label": "D",
        "text": "NAS传输过程，包括上行方向的初始UE和下行链路的直传"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 681,
    "type": "多选",
    "q": "E-UTRA可以应用不同大小的频谱分配，上下行链路上，可以包括有2.5MHz10MHz15MHz以及20MHz。",
    "options": [
      {
        "label": "A",
        "text": "1.25 MHz"
      },
      {
        "label": "B",
        "text": "5 MHz"
      },
      {
        "label": "C",
        "text": "20 MHz"
      },
      {
        "label": "D",
        "text": "1.6 MHz"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 682,
    "type": "多选",
    "q": "目前LTE支持的调制方式有_",
    "options": [
      {
        "label": "A",
        "text": "QPSK"
      },
      {
        "label": "B",
        "text": "16QAM"
      },
      {
        "label": "C",
        "text": "64QAM"
      },
      {
        "label": "D",
        "text": ""
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 683,
    "type": "多选",
    "q": "在前往外场测试之前我们需要先做什么_",
    "options": [
      {
        "label": "A",
        "text": "明确测试目的"
      },
      {
        "label": "B",
        "text": "明确测试区域"
      },
      {
        "label": "C",
        "text": "检查测试设备"
      },
      {
        "label": "D",
        "text": "做好突发预案"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 684,
    "type": "多选",
    "q": "E-UTRAN内部的移动性过程包括_",
    "options": [
      {
        "label": "A",
        "text": "小区选择过程小区重选过程"
      },
      {
        "label": "B",
        "text": "切换数据前向无线链路失败"
      },
      {
        "label": "C",
        "text": "无线接入网共享"
      },
      {
        "label": "D",
        "text": "UE释放"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 685,
    "type": "多选",
    "q": "TypicalmodesforLTEare_",
    "options": [
      {
        "label": "A",
        "text": "RNC"
      },
      {
        "label": "B",
        "text": "eNodeB"
      },
      {
        "label": "C",
        "text": "Adjacency"
      },
      {
        "label": "D",
        "text": "Cell"
      }
    ],
    "a": "BD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 686,
    "type": "多选",
    "q": "LTE-Uu接口的控制平面包括_",
    "options": [
      {
        "label": "A",
        "text": "?NAS层"
      },
      {
        "label": "B",
        "text": "RRC层"
      },
      {
        "label": "C",
        "text": "PDCP"
      },
      {
        "label": "D",
        "text": "RLC层"
      }
    ],
    "a": "ABCDEF",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 687,
    "type": "多选",
    "q": "RRC层——主要执行广播寻呼移动性管理密钥管理MBMS控制NAS消息直传QoS管理_等功能",
    "options": [
      {
        "label": "A",
        "text": "UE测量报告与控制"
      },
      {
        "label": "B",
        "text": "RRC连接管理"
      },
      {
        "label": "C",
        "text": "无线承载（RB）管理"
      },
      {
        "label": "D",
        "text": "数据传输加密以及完整性保护"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 688,
    "type": "多选",
    "q": "MAC层——主要功能包括_",
    "options": [
      {
        "label": "A",
        "text": "执行头压缩"
      },
      {
        "label": "B",
        "text": "HARQ重传"
      },
      {
        "label": "C",
        "text": "上下行调度"
      },
      {
        "label": "D",
        "text": "无线承载（RB）管理"
      }
    ],
    "a": "BC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 689,
    "type": "多选",
    "q": "RLC层——主要功能包括_",
    "options": [
      {
        "label": "A",
        "text": "A分段与连接"
      },
      {
        "label": "B",
        "text": "UE测量报告与控制C.重传处理"
      },
      {
        "label": "C",
        "text": "对高层数据的顺序传送。"
      },
      {
        "label": "D",
        "text": ""
      }
    ],
    "a": "ACD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 690,
    "type": "多选",
    "q": "PHY层——主要功能包括_",
    "options": [
      {
        "label": "A",
        "text": "处理编译码"
      },
      {
        "label": "B",
        "text": "调制解调"
      },
      {
        "label": "C",
        "text": "多天线映射"
      },
      {
        "label": "D",
        "text": "其它典型物理层功能"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 691,
    "type": "多选",
    "q": "NAS层——非接入层，支持移动性管理功能以及用户平面激活修改和释放功能。主要执行_",
    "options": [
      {
        "label": "A",
        "text": "EPS承载管理鉴权"
      },
      {
        "label": "B",
        "text": "IDLE状态下的移动性处理"
      },
      {
        "label": "C",
        "text": "寻呼"
      },
      {
        "label": "D",
        "text": "安全控制功能。"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 692,
    "type": "多选",
    "q": "下行MIMO技术主要包括_",
    "options": [
      {
        "label": "A",
        "text": "时间分集"
      },
      {
        "label": "B",
        "text": "频域分集"
      },
      {
        "label": "C",
        "text": "空间分集"
      },
      {
        "label": "D",
        "text": "空间复用"
      }
    ],
    "a": "CD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 693,
    "type": "多选",
    "q": "链路自适应技术主要包括_",
    "options": [
      {
        "label": "A",
        "text": "分组调度控制"
      },
      {
        "label": "B",
        "text": "动态功率控制"
      },
      {
        "label": "C",
        "text": "自适应调制解码（AMC）"
      },
      {
        "label": "D",
        "text": "自动请求重传"
      }
    ],
    "a": "BCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 694,
    "type": "多选",
    "q": "LTE系统中，UE的移动性测量包括哪几项_",
    "options": [
      {
        "label": "A",
        "text": "AE-UTRAN同频测量"
      },
      {
        "label": "B",
        "text": "B和GERAN系统的RAT间测量"
      },
      {
        "label": "C",
        "text": "C和UTRAN系统的RAT间测量"
      },
      {
        "label": "D",
        "text": "DE-UTRAN异频测量"
      }
    ],
    "a": "AC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 695,
    "type": "多选",
    "q": "无线特性在终端和基站进行测量，并在网络中向高层进行报告，其包括_",
    "options": [
      {
        "label": "A",
        "text": "A同频切换的测量"
      },
      {
        "label": "B",
        "text": "B用于不同无线接入技术之间切换的测量"
      },
      {
        "label": "C",
        "text": "C异频切换的测量"
      },
      {
        "label": "D",
        "text": "D定时测量"
      }
    ],
    "a": "AD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 696,
    "type": "多选",
    "q": "NAS控制协议终止于MME，主要实现的功能有_",
    "options": [
      {
        "label": "A",
        "text": "ASAE承载控制管理"
      },
      {
        "label": "B",
        "text": "B鉴权和安全控制"
      },
      {
        "label": "C",
        "text": "CLTE_IDLE状态下的移动性管理"
      },
      {
        "label": "D",
        "text": "D产生LTE_IDLE状态下的寻呼信息"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 697,
    "type": "多选",
    "q": "LTE-A的关键技术有_",
    "options": [
      {
        "label": "A",
        "text": "AComp"
      },
      {
        "label": "B",
        "text": "B频谱聚合"
      },
      {
        "label": "C",
        "text": "C下行增强MIMO"
      },
      {
        "label": "D",
        "text": "D中继"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 698,
    "type": "多选",
    "q": "eNodeB上RRC协议实体主要完成哪些功能_",
    "options": [
      {
        "label": "A",
        "text": "A广播和寻呼"
      },
      {
        "label": "B",
        "text": "BRRC连接管理"
      },
      {
        "label": "C",
        "text": "CRB控制和移动性功能"
      },
      {
        "label": "D",
        "text": "DUE的测量和测量上报控制"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 699,
    "type": "多选",
    "q": "LTE的理论峰值流量的大小由_决定。_",
    "options": [
      {
        "label": "A",
        "text": "ARB数"
      },
      {
        "label": "B",
        "text": "BMCS"
      },
      {
        "label": "C",
        "text": "C时隙比配置"
      },
      {
        "label": "D",
        "text": "DMIMO方案"
      }
    ],
    "a": "CD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 700,
    "type": "多选",
    "q": "LTE系统中，NAS的协议状态包括_",
    "options": [
      {
        "label": "A",
        "text": "ALTE_DETACHED"
      },
      {
        "label": "B",
        "text": "BLTE_ACTIVE"
      },
      {
        "label": "C",
        "text": "CLTE_IDLE"
      },
      {
        "label": "D",
        "text": ""
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 701,
    "type": "多选",
    "q": "eNodeB提供的无线资源管理功能包括哪些_",
    "options": [
      {
        "label": "A",
        "text": "A无线承载控制"
      },
      {
        "label": "B",
        "text": "B无线接纳控制"
      },
      {
        "label": "C",
        "text": "C连接移动性管理"
      },
      {
        "label": "D",
        "text": "D终端的上下行资源动态分配"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 702,
    "type": "多选",
    "q": "LTE系统中，定义的信号有_",
    "options": [
      {
        "label": "A",
        "text": "A导频信号"
      },
      {
        "label": "B",
        "text": "B参考信号"
      },
      {
        "label": "C",
        "text": "C主同步信号"
      },
      {
        "label": "D",
        "text": "D辅同步信号"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 703,
    "type": "多选",
    "q": "服务常用语有哪些_",
    "options": [
      {
        "label": "A",
        "text": "A我们公司就是这么规定的"
      },
      {
        "label": "B",
        "text": "B好的，我们马上就去做"
      },
      {
        "label": "C",
        "text": "C为了确保设备的稳定运行，请根据规范要求进行操作"
      },
      {
        "label": "D",
        "text": "D您可以与我们签定维护协议，以便我们为您提供及时周到的服务"
      }
    ],
    "a": "CD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 704,
    "type": "多选",
    "q": "服务人员的语言规范有以下哪些_",
    "options": [
      {
        "label": "A",
        "text": "A保持愉快自信的工作心态，不将个人情绪带到工作之中"
      },
      {
        "label": "B",
        "text": "B语气应热诚谦和不卑不亢"
      },
      {
        "label": "C",
        "text": "C尊重对方谈话，注意倾听，不轻易打断客户谈话，不随意转移话题"
      },
      {
        "label": "D",
        "text": "D与客户有不同意见时，与客户发生争论清楚"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 705,
    "type": "多选",
    "q": "ZPPOSNetMAX-TLPersonal支持哪几种频率规划模式_",
    "options": [
      {
        "label": "A",
        "text": "ABasedonSame_Frequency:同频组网"
      },
      {
        "label": "B",
        "text": "BBasedonSFR（NonExclusiveIC):模式3组网"
      },
      {
        "label": "C",
        "text": "CBasedonSFR（ExclusiveIC):模式4组网"
      },
      {
        "label": "D",
        "text": "DBasedonDiffer_Frequency:异频组网"
      }
    ],
    "a": "BC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 706,
    "type": "多选",
    "q": "ZPPOSNetMAX-TLPersonal在无线参数规划方面有哪些功能_",
    "options": [
      {
        "label": "A",
        "text": "A邻区规划"
      },
      {
        "label": "B",
        "text": "BPCI规划"
      },
      {
        "label": "C",
        "text": "CPRACH规划"
      },
      {
        "label": "D",
        "text": "D频率规划"
      }
    ],
    "a": "CD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 707,
    "type": "多选",
    "q": "LTECNT的mini模式可以进行的测试包括_",
    "options": [
      {
        "label": "A",
        "text": "AAttach/Detach测试"
      },
      {
        "label": "B",
        "text": "BPING测试"
      },
      {
        "label": "C",
        "text": "CFTP测试"
      },
      {
        "label": "D",
        "text": "D语音测试"
      }
    ],
    "a": "BC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 708,
    "type": "多选",
    "q": "LTE和WLAN在某一室内房间都要做覆盖，以下建议正确的有_",
    "options": [
      {
        "label": "A",
        "text": "A为了规避干扰，不建议共建一套室分系统"
      },
      {
        "label": "B",
        "text": "B建议在LTE频率规划中尽量采用远离WLAN频段的可用频率"
      },
      {
        "label": "C",
        "text": "C如果不是一套室分系统，为确保隔离度要求，两系统天线间距应尽可能大。"
      },
      {
        "label": "D",
        "text": "D如果不是一套室分系统，两系统天线间距过大可能会导致异系统干扰增加"
      }
    ],
    "a": "AC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 709,
    "type": "多选",
    "q": "PING包时延主要由两大部分时延构成，包括_",
    "options": [
      {
        "label": "A",
        "text": "AUU口时延"
      },
      {
        "label": "B",
        "text": "BX2口时延"
      },
      {
        "label": "C",
        "text": "C传输时延"
      },
      {
        "label": "D",
        "text": "DIub口时延"
      }
    ],
    "a": "CD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 710,
    "type": "多选",
    "q": "数据分析要结合优化软件中_的核查来分析，分类和定位网络中存在的问题。",
    "options": [
      {
        "label": "A",
        "text": "A无线参数"
      },
      {
        "label": "B",
        "text": "B工程参数"
      },
      {
        "label": "C",
        "text": "C配置"
      },
      {
        "label": "D",
        "text": "DCN侧"
      }
    ],
    "a": "CD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 711,
    "type": "多选",
    "q": "无线接通率=______*_________。_",
    "options": [
      {
        "label": "A",
        "text": "ARRC连接建立成功率（与业务相关）"
      },
      {
        "label": "B",
        "text": "BRRC连接建立成功率"
      },
      {
        "label": "C",
        "text": "CE-RAB建立成功率"
      },
      {
        "label": "D",
        "text": "DE-RAB掉话率"
      }
    ],
    "a": "AC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 712,
    "type": "多选",
    "q": "NetMAX-TL进行邻区规划有哪些步骤_",
    "options": [
      {
        "label": "A",
        "text": "A导入工程参数"
      },
      {
        "label": "B",
        "text": "B选择待规划邻区的小区"
      },
      {
        "label": "C",
        "text": "C设置邻区规划参数"
      },
      {
        "label": "D",
        "text": "D运行邻区规划"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 713,
    "type": "多选",
    "q": "《售后现场服务行为通用规范》适用于哪些人员_",
    "options": [
      {
        "label": "A",
        "text": "A售后工程师"
      },
      {
        "label": "B",
        "text": "B合作方工程师"
      },
      {
        "label": "C",
        "text": "C销售人员"
      },
      {
        "label": "D",
        "text": "D开发人员"
      }
    ],
    "a": "BC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 714,
    "type": "多选",
    "q": "E-UTRAN系统中，定义了哪几种类型的无线信道类型_",
    "options": [
      {
        "label": "A",
        "text": "A无线信道"
      },
      {
        "label": "B",
        "text": "B逻辑信道"
      },
      {
        "label": "C",
        "text": "C物理信道"
      },
      {
        "label": "D",
        "text": "D传输信道"
      }
    ],
    "a": "CD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 715,
    "type": "多选",
    "q": "LTE系统传输用户数据主要使用_信道",
    "options": [
      {
        "label": "A",
        "text": "专用信道"
      },
      {
        "label": "B",
        "text": "公用信道"
      },
      {
        "label": "C",
        "text": "共享信道"
      },
      {
        "label": "D",
        "text": "信令信道"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 716,
    "type": "多选",
    "q": "影响LTE的容量的因素有_",
    "options": [
      {
        "label": "A",
        "text": "A无线环境"
      },
      {
        "label": "B",
        "text": "BICIC算法成熟度"
      },
      {
        "label": "C",
        "text": "C调度算法"
      },
      {
        "label": "D",
        "text": "D多天线技术"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 717,
    "type": "多选",
    "q": "TD-LTE的干扰解决方案有哪些_",
    "options": [
      {
        "label": "A",
        "text": "A小区间干扰随机化"
      },
      {
        "label": "B",
        "text": "B小区间干扰消除"
      },
      {
        "label": "C",
        "text": "C小区间干扰协调"
      },
      {
        "label": "D",
        "text": "D发射端波束赋形"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 718,
    "type": "多选",
    "q": "E-UTRAN系统支持成对和非成对频谱，可以在下述哪些频段中部暑_",
    "options": [
      {
        "label": "A",
        "text": "A1.25MHz"
      },
      {
        "label": "B",
        "text": "B20MHz"
      },
      {
        "label": "C",
        "text": "C25MHz"
      },
      {
        "label": "D",
        "text": "D1.4MHz"
      }
    ],
    "a": "BC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 719,
    "type": "多选",
    "q": "LTE下行采用了哪些多天线技术_",
    "options": [
      {
        "label": "A",
        "text": "ASFBC"
      },
      {
        "label": "B",
        "text": "BFSTD"
      },
      {
        "label": "C",
        "text": "CBeamforming"
      },
      {
        "label": "D",
        "text": "DMU-MIMOE基于预编码的空间复用F多码字传输"
      }
    ],
    "a": "CD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 720,
    "type": "多选",
    "q": "LTE系统中Q0S参数包括_",
    "options": [
      {
        "label": "A",
        "text": "AQCI"
      },
      {
        "label": "B",
        "text": "BARP"
      },
      {
        "label": "C",
        "text": "CGBR"
      },
      {
        "label": "D",
        "text": "DAMBR"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 721,
    "type": "多选",
    "q": "业务相关的RRC连接建立原因包括_",
    "options": [
      {
        "label": "A",
        "text": "AMT-Access"
      },
      {
        "label": "B",
        "text": "BMT-Data"
      },
      {
        "label": "C",
        "text": "CMO-Access"
      },
      {
        "label": "D",
        "text": "DMO-Data"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 722,
    "type": "多选",
    "q": "OFDM技术之所以得到广泛关注，并被LTE，Wimax等系统选中作为候选技术，因为_",
    "options": [
      {
        "label": "A",
        "text": "A频谱利用率高"
      },
      {
        "label": "B",
        "text": "B抗多径和频率选择性衰落能力强"
      },
      {
        "label": "C",
        "text": "C动态子载波分配，提高了系统效率"
      },
      {
        "label": "D",
        "text": "D易于实现"
      }
    ],
    "a": "BC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 723,
    "type": "多选",
    "q": "LTE系统无线帧长",
    "options": [
      {
        "label": "A",
        "text": "5ms"
      },
      {
        "label": "B",
        "text": "10ms"
      },
      {
        "label": "C",
        "text": "20ms"
      },
      {
        "label": "D",
        "text": "0.5ms"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 724,
    "type": "多选",
    "q": "对于LTE而言，UTRAN中的RNC功能由哪些网元来实现_",
    "options": [
      {
        "label": "A",
        "text": "E-NodeB"
      },
      {
        "label": "B",
        "text": "MME"
      },
      {
        "label": "C",
        "text": "HSS"
      },
      {
        "label": "D",
        "text": "S-GW"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 725,
    "type": "多选",
    "q": "在LTE制式中，传输信道使用Turbo编码方案的有_",
    "options": [
      {
        "label": "A",
        "text": "UL-SCH"
      },
      {
        "label": "B",
        "text": "DL-SCH"
      },
      {
        "label": "C",
        "text": "PCH"
      },
      {
        "label": "D",
        "text": "MCH"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 726,
    "type": "多选",
    "q": "在LTE制式中，控制信息使用的编码方案有_",
    "options": [
      {
        "label": "A",
        "text": "Tail Biting 卷积码"
      },
      {
        "label": "B",
        "text": "块编码"
      },
      {
        "label": "C",
        "text": "Turbo编码"
      },
      {
        "label": "D",
        "text": "重复编码"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 727,
    "type": "多选",
    "q": "LTE使用的调度策略_",
    "options": [
      {
        "label": "A",
        "text": "Max C/I"
      },
      {
        "label": "B",
        "text": "RR（Round Robin)"
      },
      {
        "label": "C",
        "text": "PF（Proportional Fair）"
      },
      {
        "label": "D",
        "text": "EPF（Enhanced Proportional Fair）"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 728,
    "type": "多选",
    "q": "支持向LTE演进的技术有_。",
    "options": [
      {
        "label": "A",
        "text": "CDMA EvDo"
      },
      {
        "label": "B",
        "text": "WCDMA"
      },
      {
        "label": "C",
        "text": "TD-SCDMA"
      },
      {
        "label": "D",
        "text": "WiFi"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 729,
    "type": "多选",
    "q": "以下_不属于OFDM的复用技术",
    "options": [
      {
        "label": "A",
        "text": "频率复用"
      },
      {
        "label": "B",
        "text": "码分复用"
      },
      {
        "label": "C",
        "text": "时分复用"
      },
      {
        "label": "D",
        "text": "空分复用"
      }
    ],
    "a": "BCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 730,
    "type": "多选",
    "q": "LTE切换中，eNB包括以下_切换。",
    "options": [
      {
        "label": "A",
        "text": "基于无线质量的切换"
      },
      {
        "label": "B",
        "text": "基于无线接入技术覆盖的切换"
      },
      {
        "label": "C",
        "text": "基于负载情况的切换"
      },
      {
        "label": "D",
        "text": "基于调度算法的切换"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 731,
    "type": "多选",
    "q": "无线帧时钟检测的方法有以下_几种。",
    "options": [
      {
        "label": "A",
        "text": "基于SCH的检测"
      },
      {
        "label": "B",
        "text": "基于CCH的检测"
      },
      {
        "label": "C",
        "text": "基于BCH的检测"
      },
      {
        "label": "D",
        "text": "基于参考信号的检测"
      }
    ],
    "a": "ACD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 732,
    "type": "多选",
    "q": "相对于3G来说，LTE采用了哪些关键技术",
    "options": [
      {
        "label": "A",
        "text": "OFDM技术"
      },
      {
        "label": "B",
        "text": "MIMO(Multiple-Input Multiple Output)技术"
      },
      {
        "label": "C",
        "text": "调度和链路自适应"
      },
      {
        "label": "D",
        "text": "小区干扰控制"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 733,
    "type": "多选",
    "q": "LTE中的跟踪区边界规划的原则是什么",
    "options": [
      {
        "label": "A",
        "text": "跟踪区的划分不能过大或过小，TAC的最大值由MME的最大寻呼容量来决定"
      },
      {
        "label": "B",
        "text": "城郊与市区不连续覆盖时，郊区（县）使用单独的跟踪区，不规划在一个TA中"
      },
      {
        "label": "C",
        "text": "跟踪区规划应在地理上为一块连续的区域，避免和减少各跟踪区基站插花组网"
      },
      {
        "label": "D",
        "text": "寻呼区域不跨MME的原则"
      }
    ],
    "a": "ABCDE",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 734,
    "type": "多选",
    "q": "LTEPCI规划的原则",
    "options": [
      {
        "label": "A",
        "text": "collision-free原则"
      },
      {
        "label": "B",
        "text": "confusion-free原则"
      },
      {
        "label": "C",
        "text": "邻小区导频符号V-shift错开最优化原则"
      },
      {
        "label": "D",
        "text": "基于实现简单，清晰明了，容易扩展的目标，目前采用的规划原则：同一站点的PCI分配在同一个PCI组内，相邻站点的PCI在不同的PCI组内"
      }
    ],
    "a": "ABCDE",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 735,
    "type": "多选",
    "q": "UE测量上报给eNodeB的有_",
    "options": [
      {
        "label": "A",
        "text": "RI"
      },
      {
        "label": "B",
        "text": "CQI"
      },
      {
        "label": "C",
        "text": "PMI"
      },
      {
        "label": "D",
        "text": "DCI"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 736,
    "type": "多选",
    "q": "以下哪几种类型测量报告为LTE的的测量报告_",
    "options": [
      {
        "label": "A",
        "text": "Event A1"
      },
      {
        "label": "B",
        "text": "Event B2"
      },
      {
        "label": "C",
        "text": "Event 2F"
      },
      {
        "label": "D",
        "text": "Event 2D"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 737,
    "type": "多选",
    "q": "LTE同频切换可分为_",
    "options": [
      {
        "label": "A",
        "text": "eNodeB内切换"
      },
      {
        "label": "B",
        "text": "同MME内异eNodeB通过X2切换"
      },
      {
        "label": "C",
        "text": "同MME内异eNodeB通过S1口切换"
      },
      {
        "label": "D",
        "text": "跨MME异eNodeB通过X2口切换"
      }
    ],
    "a": "ABCDE",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 738,
    "type": "多选",
    "q": "移动通信系统中的传播机制有_",
    "options": [
      {
        "label": "A",
        "text": "直射"
      },
      {
        "label": "B",
        "text": "反射"
      },
      {
        "label": "C",
        "text": "散射"
      },
      {
        "label": "D",
        "text": "衍射"
      }
    ],
    "a": "BCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 739,
    "type": "多选",
    "q": "天线极化方向有_",
    "options": [
      {
        "label": "A",
        "text": "水平极化"
      },
      {
        "label": "B",
        "text": "垂直极化"
      },
      {
        "label": "C",
        "text": "+45°倾斜极化"
      },
      {
        "label": "D",
        "text": "-45°倾斜极化"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 740,
    "type": "多选",
    "q": "天馈安装注意事项_",
    "options": [
      {
        "label": "A",
        "text": "避雷的“设备端”和“防雷端”不能接反，设备端接eNB方向，防雷端接天线方向"
      },
      {
        "label": "B",
        "text": "如果馈线长度小于50米，一般要求用7/8“馈线"
      },
      {
        "label": "C",
        "text": "如果馈线长度大于50米，一般要求用5/4”馈线"
      },
      {
        "label": "D",
        "text": "安装时，注意每个接头要拧紧，以及用胶带包好，安装完毕，用BTSmaster测量的天馈系统的驻波比要小于1.5，否则就认为安装不合格。"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 741,
    "type": "多选",
    "q": "室分系统中可采用以下哪些传输模式_",
    "options": [
      {
        "label": "A",
        "text": "TM2"
      },
      {
        "label": "B",
        "text": "TM3"
      },
      {
        "label": "C",
        "text": "TM4"
      },
      {
        "label": "D",
        "text": "TM7"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 742,
    "type": "多选",
    "q": "LTE协议中规定计数器有_",
    "options": [
      {
        "label": "A",
        "text": "N300"
      },
      {
        "label": "B",
        "text": "N310"
      },
      {
        "label": "C",
        "text": "N311"
      },
      {
        "label": "D",
        "text": "N320"
      }
    ],
    "a": "BC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 743,
    "type": "多选",
    "q": "关于多径衰落的正确的说法有",
    "options": [
      {
        "label": "A",
        "text": "多径衰落也称瑞利衰落"
      },
      {
        "label": "B",
        "text": "对于多径衰落，基站采取的措施就是采用时间分集频率分集和空间分集（极化分集）的办法"
      },
      {
        "label": "C",
        "text": "多径衰落其中值变动服从对数正态分布"
      },
      {
        "label": "D",
        "text": "多径衰落最大值和最小值发生的位置大约相差1/4波长"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 744,
    "type": "多选",
    "q": "TD-LTE支持的带宽_",
    "options": [
      {
        "label": "A",
        "text": "1.5"
      },
      {
        "label": "B",
        "text": "3"
      },
      {
        "label": "C",
        "text": "10"
      },
      {
        "label": "D",
        "text": "20"
      }
    ],
    "a": "BCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 745,
    "type": "多选",
    "q": "多天线技术中，主要的增益包括_",
    "options": [
      {
        "label": "A",
        "text": "分集增益（diverstiygain）"
      },
      {
        "label": "B",
        "text": "阵列增益(arraygain)"
      },
      {
        "label": "C",
        "text": "空间复用增益（spatialmultiplexgain）"
      },
      {
        "label": "D",
        "text": "编码增益（codinggain））"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 746,
    "type": "多选",
    "q": "在atoll中默认的LTE的业务模型包含哪些",
    "options": [
      {
        "label": "A",
        "text": "FTP"
      },
      {
        "label": "B",
        "text": "VoIP"
      },
      {
        "label": "C",
        "text": "webbrowsing"
      },
      {
        "label": "D",
        "text": "videoconferencing"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 747,
    "type": "多选",
    "q": "抑制小区干扰有_种方法。_",
    "options": [
      {
        "label": "A",
        "text": "A干扰随机化"
      },
      {
        "label": "B",
        "text": "B干扰消除"
      },
      {
        "label": "C",
        "text": "C干扰协调"
      },
      {
        "label": "D",
        "text": "D干扰删除"
      }
    ],
    "a": "ACD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 748,
    "type": "多选",
    "q": "影响LTE系统容量的因素有_",
    "options": [
      {
        "label": "A",
        "text": "A系统带宽"
      },
      {
        "label": "B",
        "text": "B子帧配比"
      },
      {
        "label": "C",
        "text": "C多天线技术"
      },
      {
        "label": "D",
        "text": "DICICE调度与功控"
      }
    ],
    "a": "ACD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 749,
    "type": "多选",
    "q": "关于阴影说衰落的正确的说法有",
    "options": [
      {
        "label": "A",
        "text": "阴影衰落又叫慢衰落"
      },
      {
        "label": "B",
        "text": "阴影衰落对系统的影响可以不用考虑"
      },
      {
        "label": "C",
        "text": "这种慢衰落的规律，其中值变动服从对数正态分布"
      },
      {
        "label": "D",
        "text": "电波传播路径上遇有高大建筑物树林地形起伏等障碍物的阻挡，就会产生电磁场的阴影衰落"
      }
    ],
    "a": "ACD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 750,
    "type": "多选",
    "q": "下行多天线技术包括",
    "options": [
      {
        "label": "A",
        "text": "空间复用"
      },
      {
        "label": "B",
        "text": "传输分集"
      },
      {
        "label": "C",
        "text": "波束赋形"
      },
      {
        "label": "D",
        "text": "时间复用"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 751,
    "type": "多选",
    "q": "TD-LTE关键技术包括哪些",
    "options": [
      {
        "label": "A",
        "text": "OFDM技术"
      },
      {
        "label": "B",
        "text": "上行SC-FDMA技术"
      },
      {
        "label": "C",
        "text": "MIMO多天线技术"
      },
      {
        "label": "D",
        "text": "下行SC-OFDMA技术"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 752,
    "type": "多选",
    "q": "以下TD-LTE不同场景的站间距规划建议中，哪些比较合理():",
    "options": [
      {
        "label": "A",
        "text": "中心商务区:中心商业区:政务区:密集居民区建议站间距400～500米;"
      },
      {
        "label": "B",
        "text": "一般市区建议站间距500～600米;"
      },
      {
        "label": "C",
        "text": "景区建议站间距300～500米;"
      },
      {
        "label": "D",
        "text": "高速公路建议站间距800～1000米;"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 753,
    "type": "多选",
    "q": "GBR/Non-GBR bearerQCI描述正确的()",
    "options": [
      {
        "label": "A",
        "text": "default-bearer一定是Non-GBRbearer"
      },
      {
        "label": "B",
        "text": "delicatedbearer一定是GBRbearer"
      },
      {
        "label": "C",
        "text": "Non-GBRbearer可以对应QCI16789"
      },
      {
        "label": "D",
        "text": "QCI2345一定是delicated-bearer"
      }
    ],
    "a": "ACD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 754,
    "type": "多选",
    "q": "2G-LTE系统间重选的相关消息在下面的一些消息中广播或发送()",
    "options": [
      {
        "label": "A",
        "text": "SI2Quatermessage"
      },
      {
        "label": "B",
        "text": "PacketMeasurementOrder(PMO)"
      },
      {
        "label": "C",
        "text": "SI2QissentonPACCH"
      },
      {
        "label": "D",
        "text": "SIB1"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 755,
    "type": "多选",
    "q": "LTE采用IP化的网络结构，以下哪些部分包含在EPC内()。",
    "options": [
      {
        "label": "A",
        "text": "eNodeB"
      },
      {
        "label": "B",
        "text": "HSS"
      },
      {
        "label": "C",
        "text": "MME"
      },
      {
        "label": "D",
        "text": "HSS"
      }
    ],
    "a": "BCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 756,
    "type": "多选",
    "q": "TD-LTE系统设计需求需要考虑以下方面： ()。",
    "options": [
      {
        "label": "A",
        "text": "系统容量需求和系统性能需求"
      },
      {
        "label": "B",
        "text": "系统部署相关需求和无线资源管理需求"
      },
      {
        "label": "C",
        "text": "网络架构及迁移需求和复杂性需求"
      },
      {
        "label": "D",
        "text": "成本相关需求和业务相关需求"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 757,
    "type": "多选",
    "q": "以下哪些带宽是TDD-LTE支持的？",
    "options": [
      {
        "label": "A",
        "text": "20MHz"
      },
      {
        "label": "B",
        "text": "10MHz"
      },
      {
        "label": "C",
        "text": "5MHz"
      },
      {
        "label": "D",
        "text": "1.4MHz"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 758,
    "type": "多选",
    "q": "下列关于TD-LTE E频段室分系统说法正确的是()",
    "options": [
      {
        "label": "A",
        "text": "单极化MIMO天线间距应该大于4倍波长"
      },
      {
        "label": "B",
        "text": "可以使用双极化天线"
      },
      {
        "label": "C",
        "text": "与TDS干扰较小，与WLAN干扰较大"
      },
      {
        "label": "D",
        "text": "与TDS干扰较小，与WLAN干扰较大"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 759,
    "type": "多选",
    "q": "一个好的网络规划要先进行需求分析，以下哪些内容不属于需求分析阶段：():",
    "options": [
      {
        "label": "A",
        "text": "站型配置"
      },
      {
        "label": "B",
        "text": "建网策略"
      },
      {
        "label": "C",
        "text": "覆盖估算"
      },
      {
        "label": "D",
        "text": "获取现网数据"
      }
    ],
    "a": "AC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 760,
    "type": "多选",
    "q": "LTE的特殊时隙配置有以下哪些()",
    "options": [
      {
        "label": "A",
        "text": "10:02:02"
      },
      {
        "label": "B",
        "text": "3:09:02"
      },
      {
        "label": "C",
        "text": "11:01:02"
      },
      {
        "label": "D",
        "text": "9:03:02"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 761,
    "type": "多选",
    "q": "以下哪些技术是TD-LTE的关键技术():",
    "options": [
      {
        "label": "A",
        "text": "宽带码分多址技术"
      },
      {
        "label": "B",
        "text": "干扰抑制技术"
      },
      {
        "label": "C",
        "text": "OFDM技术"
      },
      {
        "label": "D",
        "text": "MIMO技术"
      }
    ],
    "a": "BCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 762,
    "type": "多选",
    "q": "与CDMA相比，OFDM有哪些优势()",
    "options": [
      {
        "label": "A",
        "text": "频谱效率更高"
      },
      {
        "label": "B",
        "text": "带宽扩展性更强"
      },
      {
        "label": "C",
        "text": "抗多径衰落能力强"
      },
      {
        "label": "D",
        "text": "频域调度及自适应"
      }
    ],
    "a": "ABCDF",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 763,
    "type": "多选",
    "q": "关于LTE下行导频，以下说法正确的是()",
    "options": [
      {
        "label": "A",
        "text": "LTE下行只有CRS"
      },
      {
        "label": "B",
        "text": "LTE下行只有UE-specificreferencesignal"
      },
      {
        "label": "C",
        "text": "LTE下行既可以有UE-specificreferencesignal，有可以有Cell-specificReferenceSignal"
      },
      {
        "label": "D",
        "text": "LTE下行支持MBSFN专用导频"
      }
    ],
    "a": "CD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 764,
    "type": "多选",
    "q": "LTE系统中资源分配方式有以下哪几种()",
    "options": [
      {
        "label": "A",
        "text": "Type0"
      },
      {
        "label": "B",
        "text": "Type1"
      },
      {
        "label": "C",
        "text": "Type2"
      },
      {
        "label": "D",
        "text": "Type3"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 765,
    "type": "多选",
    "q": "LTE RLC层的功能包括()",
    "options": [
      {
        "label": "A",
        "text": "分段"
      },
      {
        "label": "B",
        "text": "ARQ(AutomaticRepeatRequest)"
      },
      {
        "label": "C",
        "text": "级联"
      },
      {
        "label": "D",
        "text": "加密"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 766,
    "type": "多选",
    "q": "RLC实体可以被配置成为哪种模式()",
    "options": [
      {
        "label": "A",
        "text": "TransparentMode"
      },
      {
        "label": "B",
        "text": "UnacknowledgedMode"
      },
      {
        "label": "C",
        "text": "TransportMode"
      },
      {
        "label": "D",
        "text": "AcknowledgedMode"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 767,
    "type": "多选",
    "q": "AM RLC 实体会处理哪些RLC PDU()",
    "options": [
      {
        "label": "A",
        "text": "AMDPDU"
      },
      {
        "label": "B",
        "text": "AMDPDUsegment"
      },
      {
        "label": "C",
        "text": "STATUSPDU"
      },
      {
        "label": "D",
        "text": ""
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 768,
    "type": "多选",
    "q": "以下属于BSR类型的是()",
    "options": [
      {
        "label": "A",
        "text": "LongBSR"
      },
      {
        "label": "B",
        "text": "ShortBSR"
      },
      {
        "label": "C",
        "text": "TruncatedBSR"
      },
      {
        "label": "D",
        "text": "SmallBSR"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 769,
    "type": "多选",
    "q": "在RRC Connection Reestablishment Request消息中，重建立原因有()",
    "options": [
      {
        "label": "A",
        "text": "Reconfigurationfailure"
      },
      {
        "label": "B",
        "text": "Handoverfailure"
      },
      {
        "label": "C",
        "text": "Otherfailure"
      },
      {
        "label": "D",
        "text": "LoadbalancingTAUrequired"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 770,
    "type": "多选",
    "q": "有关缺省承载说法正确的是()",
    "options": [
      {
        "label": "A",
        "text": "保证客户在开始业务时具有更短的时延"
      },
      {
        "label": "B",
        "text": "可提供基本的连接服务"
      },
      {
        "label": "C",
        "text": "为PDN连接提供Always-on服务"
      },
      {
        "label": "D",
        "text": "是Non-GBR(Non-GuaranteedBitRate)类型的承载"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 771,
    "type": "多选",
    "q": "RLC 数据PDU包括()",
    "options": [
      {
        "label": "A",
        "text": "TMDPDU"
      },
      {
        "label": "B",
        "text": "UMDPDU"
      },
      {
        "label": "C",
        "text": "AMDPDU"
      },
      {
        "label": "D",
        "text": "AMDPDUsegment"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 772,
    "type": "多选",
    "q": "以下()是RLC控制PDU的一部分",
    "options": [
      {
        "label": "A",
        "text": "D/C"
      },
      {
        "label": "B",
        "text": "CPT"
      },
      {
        "label": "C",
        "text": "STATUSPDUpayload"
      },
      {
        "label": "D",
        "text": ""
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 773,
    "type": "多选",
    "q": "以下哪些是3GPP R8定义的LTE设计目标：",
    "options": [
      {
        "label": "A",
        "text": "支持1.4MHz-20MHz可变带宽"
      },
      {
        "label": "B",
        "text": "峰值数据率：上行>50Mbps，下行>100Mbps"
      },
      {
        "label": "C",
        "text": "频谱效率达到HSDPA/HSUPA的20倍"
      },
      {
        "label": "D",
        "text": "提高小区边缘的比特率"
      }
    ],
    "a": "ABDE",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 774,
    "type": "多选",
    "q": "TD-LTE在站址及天线天线选择时应注意():",
    "options": [
      {
        "label": "A",
        "text": "天线高度在覆盖范围内基本保持一致:不宜过高;"
      },
      {
        "label": "B",
        "text": "天线主瓣方向无明显阻挡，特别是第一菲涅尔区无阻挡；"
      },
      {
        "label": "C",
        "text": "新建基站应建在交通方便，市电可用:环境安全的地方；避免在大功率无线电发射台:雷达站或其他干扰源附近建站；"
      },
      {
        "label": "D",
        "text": "信号反射及衍射在开阔地区选址时影响更大。"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 775,
    "type": "多选",
    "q": "影响TDLTE站间距离的因素有：()",
    "options": [
      {
        "label": "A",
        "text": "基站间的同步差"
      },
      {
        "label": "B",
        "text": "GP占用的SYMBOLE数"
      },
      {
        "label": "C",
        "text": "PRACH的格式"
      },
      {
        "label": "D",
        "text": "PRACHPREAMBLECYCLICSHIFT的位数"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 776,
    "type": "多选",
    "q": "速率控制(即AMC)分为()",
    "options": [
      {
        "label": "A",
        "text": "时域AMC"
      },
      {
        "label": "B",
        "text": "频域AMC"
      },
      {
        "label": "C",
        "text": "空域AMC"
      },
      {
        "label": "D",
        "text": "码域AMC"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 777,
    "type": "多选",
    "q": "以下哪些问题可以导致切换失败()",
    "options": [
      {
        "label": "A",
        "text": "覆盖差导致"
      },
      {
        "label": "B",
        "text": "干扰导致"
      },
      {
        "label": "C",
        "text": "未配邻区"
      },
      {
        "label": "D",
        "text": "切换开关参数未打开"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 778,
    "type": "多选",
    "q": "以下哪些问题可能导致T300超时()？",
    "options": [
      {
        "label": "A",
        "text": "UE所处位置信道质量较差"
      },
      {
        "label": "B",
        "text": "基站校准失步"
      },
      {
        "label": "C",
        "text": "LTE基站内互相干扰"
      },
      {
        "label": "D",
        "text": "网络资源不足"
      }
    ],
    "a": "ABCE",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 779,
    "type": "多选",
    "q": "以下哪些内容在路测前需要准备好？()",
    "options": [
      {
        "label": "A",
        "text": "基站数据库信息"
      },
      {
        "label": "B",
        "text": "测试区域纸质或数字地图"
      },
      {
        "label": "C",
        "text": "GPS"
      },
      {
        "label": "D",
        "text": "准备好测试电脑及路测软件，检查测试终端"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 780,
    "type": "多选",
    "q": "以下哪些是OFDM的特点: ()",
    "options": [
      {
        "label": "A",
        "text": "低速并行传输：高速串行数据经串并转换后，分割成若干低速并行数据流；每路并行数据流采用独立载波调制并叠加发送"
      },
      {
        "label": "B",
        "text": "抗衰落与均衡：由于OFDM对信道频带的分割作用，各个子载波占据相对窄的信道带宽，因而可以把它看作是平坦衰落信道；这样，OFDM技术就具有系统大带宽的抗衰落特性和子载波小带宽的均衡简单特性"
      },
      {
        "label": "C",
        "text": "抗多径时延引起的码间干扰：引入循环前缀CP。只有多径时延扩展小于CP，码间干扰完全消除"
      },
      {
        "label": "D",
        "text": "基于DFT实现：采用DFT进行OFDM信号调制和解调对频偏和相位噪声敏感，同步要求低"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 781,
    "type": "多选",
    "q": "关于随机接入描叙不正确的是：()",
    "options": [
      {
        "label": "A",
        "text": "随机接入分为基于竞争与基于非竞争两种，根据网络配置，初始接入及切换过程中都可以是基于竞争接入或基于非竞争接入"
      },
      {
        "label": "B",
        "text": "随机接入分为基于竞争与基于非竞争两种，根据网络配置，初始接入可以为基于竞争接入或基于非竞争接入，切换过程只能是基于非竞争接入。"
      },
      {
        "label": "C",
        "text": "随机接入分为基于竞争与基于非竞争两种，根据网络配置，初始接入可以为基于竞争接入或基于非竞争接入，切换过程中无随机接入。"
      },
      {
        "label": "D",
        "text": "随机接入分为基于竞争与基于非竞争两种，根据网络配置，初始接入只能是基于竞争接入，切换过程中的随机接入可以是基于竞争也可以是基于非竞"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  }]
  

function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      break;
    default:
      return 0;
      break;
  }
}
var question = new Array();

// 单选
for (var i = 0; i < 10; i++) {
  var index = buildItem(question_all);
  if (index != -1) {
    pushQuestion(index, question_all);
  } else {
    while (true) {
      index = buildItem(question_all);
      if (index != -1) {
        pushQuestion(index, question_all);
        break;
      }
    }
  }
}

// 多选
for (var i = 0; i < 5; i++) {
  var index = buildItem(multiOptions);
  if (index != -1) {
    pushQuestion(index, multiOptions);
  } else {
    while (true) {
      index = buildItem(multiOptions);
      if (index != -1) {
        pushQuestion(index, multiOptions);
        break;
      }
    }
  }
}




module.exports = {
  data: question
}

function pushQuestion(idx, quesObj) {
  if (idx < quesObj.length) {
    question.push(quesObj[idx]);
  }
}

function buildItem(quesObj) {
  var j = randomNum(0, quesObj.length - 1);
  if (contains(question, quesObj[j])) {
    return -1;
  } else {
    return j;
  }
}

function contains(arr, obj) {
  var i = arr.length;
  while (i--) {
    // console.log(arr[i] + '*****' + obj);
    if (arr[i] === obj) {
      return true;
    }
  }
  return false;
}



