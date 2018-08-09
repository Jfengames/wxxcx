
const question_all = [
  {
  "id": 1614,
  "type": "单选",
  "q": "eNodeB怎样找到MME（）",
  "options": [
    {
      "label": "A",
      "text": "通过eNodeB上的配置数据可找到对应的MME的IP地址和端口号"
    },
    {
      "label": "B",
      "text": "通过DNS找到对应MME列表"
    },
    {
      "label": "C",
      "text": "MME上配置了eNodeB的IP地址，MME周期性向eNodeB宣告自己的IP地址"
    },
    {
      "label": "D",
      "text": "eNodeB通过查询HSS找到对应的MME地址"
    }
  ],
  "a": "B",
  "isStore": "false",
  "isAnswer": 0
},
  {
    "id": 1615,
    "type": "单选",
    "q": "在随机接入过程中使用哪种标识区分用户:",
    "options": [
      {
        "label": "A",
        "text": "C-RNTI"
      },
      {
        "label": "B",
        "text": "P-RNTI"
      },
      {
        "label": "C",
        "text": "SI-RNTI"
      },
      {
        "label": "D",
        "text": "RA-RNTI"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1616,
    "type": "单选",
    "q": "在随机接入响应中，如果相应的随机接入响应的频率跳变字段设置为:UE将执行PUSCH频率跳变:",
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
        "text": "6"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1617,
    "type": "单选",
    "q": "在同样的覆盖要求下，采用F频段组网与采用D频段组网相比，所需要的站点数（）",
    "options": [
      {
        "label": "A",
        "text": "更多"
      },
      {
        "label": "B",
        "text": "更少"
      },
      {
        "label": "C",
        "text": "基本相当"
      },
      {
        "label": "D",
        "text": "难以评估"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1618,
    "type": "单选",
    "q": "在下行功率分配中，对于使用16QAM 或 64QAM的PMCH，UE PMCH EPRE与MBSFN RS EPRE的比值等于:",
    "options": [
      {
        "label": "A",
        "text": "0dB"
      },
      {
        "label": "B",
        "text": "1dB"
      },
      {
        "label": "C",
        "text": "2dB"
      },
      {
        "label": "D",
        "text": "8dB"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1619,
    "type": "单选",
    "q": "在新的LTE框架中，原先的Iu, 将被新的接口S1替换。Iub和Iur将被（）替换",
    "options": [
      {
        "label": "A",
        "text": "S2"
      },
      {
        "label": "B",
        "text": "X1"
      },
      {
        "label": "C",
        "text": "X2"
      },
      {
        "label": "D",
        "text": "M1"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1620,
    "type": "单选",
    "q": "在信道编码中，码块分段时最大的码块大小为Z的值为:",
    "options": [
      {
        "label": "A",
        "text": "4096"
      },
      {
        "label": "B",
        "text": "5120"
      },
      {
        "label": "C",
        "text": "6144"
      },
      {
        "label": "D",
        "text": "7168"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1621,
    "type": "单选",
    "q": "LTE系统中，定义了几种帧结构（）",
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
    "id": 1622,
    "type": "单选",
    "q": "LTE系统中，对normal子帧，有几种CP长度（）",
    "options": [
      {
        "label": "A",
        "text": "一种"
      },
      {
        "label": "B",
        "text": "两种"
      },
      {
        "label": "C",
        "text": "三种"
      },
      {
        "label": "D",
        "text": "四种"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1623,
    "type": "单选",
    "q": "LTE系统中，每个小区用于随机接入的码是preamble码，一共（）个",
    "options": [
      {
        "label": "A",
        "text": "32个"
      },
      {
        "label": "B",
        "text": "64个"
      },
      {
        "label": "C",
        "text": "128个"
      },
      {
        "label": "D",
        "text": "256个"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1624,
    "type": "单选",
    "q": "LTE系统中，完成调度功能的调度器位于e-Node __层",
    "options": [
      {
        "label": "A",
        "text": "MAC层"
      },
      {
        "label": "B",
        "text": "物理层"
      },
      {
        "label": "C",
        "text": "网络层"
      },
      {
        "label": "D",
        "text": "传输层"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1625,
    "type": "单选",
    "q": "LTE系统中，一个无线帧时间长度为？（    ）",
    "options": [
      {
        "label": "A",
        "text": "0.5ms"
      },
      {
        "label": "B",
        "text": "1ms"
      },
      {
        "label": "C",
        "text": "5ms"
      },
      {
        "label": "D",
        "text": "10ms"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1626,
    "type": "单选",
    "q": "LTE系统中的PCFICH指示的信息是（）",
    "options": [
      {
        "label": "A",
        "text": "PDCCH所占的符号数"
      },
      {
        "label": "B",
        "text": "PDSCH所占的符号数"
      },
      {
        "label": "C",
        "text": "PUCCH所占的符号数"
      },
      {
        "label": "D",
        "text": "PUSCH所占的符号数"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1627,
    "type": "单选",
    "q": "LTE系统中的PHICH承载的信息是（）",
    "options": [
      {
        "label": "A",
        "text": "针对PUCCH的反馈信息"
      },
      {
        "label": "B",
        "text": "针对PUSCH的反馈信息"
      },
      {
        "label": "C",
        "text": "针对PDSCH的反馈信息"
      },
      {
        "label": "D",
        "text": "针对PDCCH的反馈信息"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1628,
    "type": "单选",
    "q": "LTE系统中的一个载波上的PDSCH和PMCH是（）",
    "options": [
      {
        "label": "A",
        "text": "时分"
      },
      {
        "label": "B",
        "text": "频分"
      },
      {
        "label": "C",
        "text": "码分"
      },
      {
        "label": "D",
        "text": "空分"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1629,
    "type": "单选",
    "q": "LTE采用的切换方式为:",
    "options": [
      {
        "label": "A",
        "text": "终端辅助的后向切换"
      },
      {
        "label": "B",
        "text": "网络辅助的后向切换"
      },
      {
        "label": "C",
        "text": "终端辅助的前向切换"
      },
      {
        "label": "D",
        "text": "网络辅助的前向切换"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1630,
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
        "text": "OFDMA"
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
    "id": 1631,
    "type": "单选",
    "q": "LTE产业链包括环节（）",
    "options": [
      {
        "label": "A",
        "text": "系统设备和终端芯片"
      },
      {
        "label": "B",
        "text": "系统设备和业务"
      },
      {
        "label": "C",
        "text": "系统设备、终端芯片和业务"
      },
      {
        "label": "D",
        "text": "系统设备、终端芯片、仪器仪表和业务"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1632,
    "type": "单选",
    "q": "LTE传输块的信道编码方案采用Turbo编码，编码速率为:",
    "options": [
      {
        "label": "A",
        "text": "R = 1"
      },
      {
        "label": "B",
        "text": "R = 1/5"
      },
      {
        "label": "C",
        "text": "R = 1/2"
      },
      {
        "label": "D",
        "text": "R = 1/3"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1633,
    "type": "单选",
    "q": "TD-LTE扩大规模试验网室外F频段组网采用的特殊时隙配比为（）",
    "options": [
      {
        "label": "A",
        "text": "0.131"
      },
      {
        "label": "B",
        "text": "0.377"
      },
      {
        "label": "C",
        "text": "0.418"
      },
      {
        "label": "D",
        "text": "0.459"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1634,
    "type": "单选",
    "q": "TD-LTE路测指标中的掉线率指标表述不正确的是（）",
    "options": [
      {
        "label": "A",
        "text": "掉线率=掉线次数/成功完成连接建立次数"
      },
      {
        "label": "B",
        "text": "掉线指：在终端正常进行数据传送过程中数据传送发生异常中断，包括RRC连接异常中断:或数据速率降为0并持续5秒。"
      },
      {
        "label": "C",
        "text": "掉线率指业务进行过程中发生业务异常中断的概率，即异常中断的次数与总业务进行次数之比。"
      },
      {
        "label": "D",
        "text": "掉线是指在手机没主发Disconnect信令或没收到网络下发Disconnect/Release信令情况下，手机回到idle状态，则视为一次掉话。"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1635,
    "type": "单选",
    "q": "TD-LTE如果采用室外D频段组网，上下行时隙配比为2:2，特殊时隙配置为（）",
    "options": [
      {
        "label": "A",
        "text": "0.418"
      },
      {
        "label": "B",
        "text": "0.131"
      },
      {
        "label": "C",
        "text": "0.459"
      },
      {
        "label": "D",
        "text": "0.377"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1636,
    "type": "单选",
    "q": "TDLTE如果采用室外D频段组网，一般时隙配置为2:1:2，特殊时隙配置为（）",
    "options": [
      {
        "label": "A",
        "text": "0.418"
      },
      {
        "label": "B",
        "text": "0.131"
      },
      {
        "label": "C",
        "text": "0.459"
      },
      {
        "label": "D",
        "text": "0.377"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1637,
    "type": "单选",
    "q": "TD-LTE网络在发展用户时最可能采用的策略是（）",
    "options": [
      {
        "label": "A",
        "text": "要换卡、不登记、不换号"
      },
      {
        "label": "B",
        "text": "不换卡、不登记、不换号"
      },
      {
        "label": "C",
        "text": "要换卡、要登记、要换号"
      },
      {
        "label": "D",
        "text": "不换卡、要登记、要换号"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1638,
    "type": "单选",
    "q": "TD-LTE无线中继基站Relay在部署时候，基站的传输采用何种方式（）",
    "options": [
      {
        "label": "A",
        "text": "PTN"
      },
      {
        "label": "B",
        "text": "PON"
      },
      {
        "label": "C",
        "text": "无线回传"
      },
      {
        "label": "D",
        "text": "微波"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1639,
    "type": "单选",
    "q": "TD-LTE系统无线带宽不包括(    )。",
    "options": [
      {
        "label": "A",
        "text": "1.4MHz"
      },
      {
        "label": "B",
        "text": "2.5MHz"
      },
      {
        "label": "C",
        "text": "5MHz"
      },
      {
        "label": "D",
        "text": "10MHz"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1640,
    "type": "单选",
    "q": "哪个信道用来指示PDCCH所用的符号数目( ）",
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
    "id": 1641,
    "type": "单选",
    "q": "随机接入的前导格式分为几种？（    ）",
    "options": [
      {
        "label": "A",
        "text": "2"
      },
      {
        "label": "B",
        "text": "5"
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
    "id": 1642,
    "type": "单选",
    "q": "天线的VSWR合理的范围为",
    "options": [
      {
        "label": "A",
        "text": "1<VSWR<3.0"
      },
      {
        "label": "B",
        "text": "1<VSWR<1.5"
      },
      {
        "label": "C",
        "text": "VSWR>1.5"
      },
      {
        "label": "D",
        "text": "VSWR>3.0"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1643,
    "type": "单选",
    "q": "天线端口由（）定义",
    "options": [
      {
        "label": "A",
        "text": "流数"
      },
      {
        "label": "B",
        "text": "码字"
      },
      {
        "label": "C",
        "text": "参考信号"
      },
      {
        "label": "D",
        "text": "秩"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1644,
    "type": "单选",
    "q": "天线工程参数不包括",
    "options": [
      {
        "label": "A",
        "text": "天线极化方式"
      },
      {
        "label": "B",
        "text": "天线高度"
      },
      {
        "label": "C",
        "text": "天线下倾角"
      },
      {
        "label": "D",
        "text": "天线方位角"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1645,
    "type": "单选",
    "q": "LTE协议中规定PCI的数目是？",
    "options": [
      {
        "label": "A",
        "text": "512"
      },
      {
        "label": "B",
        "text": "504"
      },
      {
        "label": "C",
        "text": "384"
      },
      {
        "label": "D",
        "text": "508"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1646,
    "type": "单选",
    "q": "对于LTE TDD与WCDMA邻频共存和共站可通过设置保护带来满足，指标满足协议规定，保护带设置为（）MHz",
    "options": [
      {
        "label": "A",
        "text": "5"
      },
      {
        "label": "B",
        "text": "10"
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
    "id": 1647,
    "type": "单选",
    "q": "对于LTE-FDD，PSS位于slot0和slot10的倒数第（）个OFDM符号上",
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
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1648,
    "type": "单选",
    "q": "对于PUCCH格式2b，每子帧中的比特数是多少:",
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
        "text": "22"
      },
      {
        "label": "D",
        "text": "20"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1649,
    "type": "单选",
    "q": "对于RRU与智能天线之间的跳线长度一般情况下宜小于（）米",
    "options": [
      {
        "label": "A",
        "text": "5m"
      },
      {
        "label": "B",
        "text": "10m"
      },
      {
        "label": "C",
        "text": "15m"
      },
      {
        "label": "D",
        "text": "20m"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1650,
    "type": "单选",
    "q": "ZXSDR B8200 L200 最多可以和（）个RRU星型组网。",
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
    "id": 1651,
    "type": "单选",
    "q": "ZXSDR B8200 L200支持最大（）级RRU的链型组网。",
    "options": [
      {
        "label": "A",
        "text": "2"
      },
      {
        "label": "B",
        "text": "4"
      },
      {
        "label": "C",
        "text": "6"
      },
      {
        "label": "D",
        "text": "8"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1652,
    "type": "单选",
    "q": "按照业界惯例，以灵敏度恶化:干扰判断准则:",
    "options": [
      {
        "label": "A",
        "text": "0.8"
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
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1653,
    "type": "单选",
    "q": "波束赋形（TM7）使用的参考信号为（）",
    "options": [
      {
        "label": "A",
        "text": "port 0"
      },
      {
        "label": "B",
        "text": "port 1"
      },
      {
        "label": "C",
        "text": "port 5"
      },
      {
        "label": "D",
        "text": "port 7"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1654,
    "type": "单选",
    "q": "不管系统带宽是多少，PSS和SSS都在在系统带宽中间的__个RB上发送，在带宽内对称发送，所以通过解PSS和SSS可以获得频域同步",
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
    "id": 1655,
    "type": "单选",
    "q": "不是MME功能的是",
    "options": [
      {
        "label": "A",
        "text": "NAS信令以及安全性功能"
      },
      {
        "label": "B",
        "text": "3GPP接入网络移劢性导致的CN节点间信令"
      },
      {
        "label": "C",
        "text": "承载管理功能（包括与用承载的建立）"
      },
      {
        "label": "D",
        "text": "支持UE的移劢性切换用户面数据的功能"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1656,
    "type": "单选",
    "q": "不属于BBU3900的逻辑功能划分的",
    "options": [
      {
        "label": "A",
        "text": "控制子系统"
      },
      {
        "label": "B",
        "text": "传输子系统"
      },
      {
        "label": "C",
        "text": "基带子系统"
      },
      {
        "label": "D",
        "text": "物理子系统"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1657,
    "type": "单选",
    "q": "不属于LTE链路级干扰的是:",
    "options": [
      {
        "label": "A",
        "text": "子载波间干扰"
      },
      {
        "label": "B",
        "text": "符号间干扰"
      },
      {
        "label": "C",
        "text": "小区内序列干扰"
      },
      {
        "label": "D",
        "text": "同频干扰"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1658,
    "type": "单选",
    "q": "对LTE业务模型说法正确的是",
    "options": [
      {
        "label": "A",
        "text": "VOIP优先级最高"
      },
      {
        "label": "B",
        "text": "FTP优先级最高"
      },
      {
        "label": "C",
        "text": "Conversational Stream优先级最高"
      },
      {
        "label": "D",
        "text": "各业务优先级一样"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1659,
    "type": "单选",
    "q": "采用Ir接口的BBU+RRU分布式架构的TD-LTE宏基站，其BBU和RRU之间是靠（）连接",
    "options": [
      {
        "label": "A",
        "text": "E1"
      },
      {
        "label": "B",
        "text": "T1"
      },
      {
        "label": "C",
        "text": "馈线"
      },
      {
        "label": "D",
        "text": "光纤"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1660,
    "type": "单选",
    "q": "采用单小区10MHz、双频点异频组网时，要求单小区平均吞吐量满足（）",
    "options": [
      {
        "label": "A",
        "text": "DL 15Mbps/UL 4Mbps"
      },
      {
        "label": "B",
        "text": "DL 15Mbps/UL 6Mbps"
      },
      {
        "label": "C",
        "text": "DL 20Mbps/UL 4Mbps"
      },
      {
        "label": "D",
        "text": "DL 20Mbps/UL 6Mbps"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1661,
    "type": "单选",
    "q": "如果同时配置了X2和S1链路，eNB间的切换优先走__切换",
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
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1662,
    "type": "单选",
    "q": "室分系统是双路系统的情况下，可选用如下哪些传输模式( ）",
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
    "id": 1663,
    "type": "单选",
    "q": "室外D频段组网采用的时隙配比为( ）",
    "options": [
      {
        "label": "A",
        "text": "0.084"
      },
      {
        "label": "B",
        "text": "0.042"
      },
      {
        "label": "C",
        "text": "0.126"
      },
      {
        "label": "D",
        "text": "0.126"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1664,
    "type": "单选",
    "q": "以下哪个属于ICIC的干扰抑制技术( ）",
    "options": [
      {
        "label": "A",
        "text": "加扰"
      },
      {
        "label": "B",
        "text": "交织"
      },
      {
        "label": "C",
        "text": "波束赋形"
      },
      {
        "label": "D",
        "text": "静态小区间干扰协调"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1665,
    "type": "单选",
    "q": "LTE的调度周期是多少：( ）",
    "options": [
      {
        "label": "A",
        "text": "A、1ms"
      },
      {
        "label": "B",
        "text": "B、2ms"
      },
      {
        "label": "C",
        "text": "C、10ms"
      },
      {
        "label": "D",
        "text": "D、20ms"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1666,
    "type": "单选",
    "q": "LTE室外宽频智能天线支持的频段不包括( ）",
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
    "id": 1667,
    "type": "单选",
    "q": "LTE为了解决深度覆盖的问题，以下哪些措施是不可取的：(  ）",
    "options": [
      {
        "label": "A",
        "text": "A、增加LTE系统带宽；"
      },
      {
        "label": "B",
        "text": "B、降低LTE工作频点，采用低频段组网；"
      },
      {
        "label": "C",
        "text": "C、采用分层组网；"
      },
      {
        "label": "D",
        "text": "D、采用家庭基站等新型设备"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1668,
    "type": "单选",
    "q": "如果出现eNB的告警“小区退服，光口不可用”( 1018007），不可能是以下哪种原因造成的( ）",
    "options": [
      {
        "label": "A",
        "text": "基带板上Ir接口光模块损坏"
      },
      {
        "label": "B",
        "text": "基带板上Ir接口光模块被拔出"
      },
      {
        "label": "C",
        "text": "基带板上Ir接口光模块型号不匹配"
      },
      {
        "label": "D",
        "text": "基带板上Ir接口光纤收发接反"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1669,
    "type": "单选",
    "q": "E-UTRA系统覆盖半径最大可达( ）",
    "options": [
      {
        "label": "A",
        "text": "10km"
      },
      {
        "label": "B",
        "text": "30km"
      },
      {
        "label": "C",
        "text": "50km"
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
    "id": 1670,
    "type": "单选",
    "q": "LTE支持那种切换( ）",
    "options": [
      {
        "label": "A",
        "text": "硬切换"
      },
      {
        "label": "B",
        "text": "硬切换和软切换"
      },
      {
        "label": "C",
        "text": "硬切、软切和更软切换"
      },
      {
        "label": "D",
        "text": "不支持切换"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1671,
    "type": "单选",
    "q": "截止2013年1季度，全球LTE用户数达到( ）。",
    "options": [
      {
        "label": "A",
        "text": "800万"
      },
      {
        "label": "B",
        "text": "5000万"
      },
      {
        "label": "C",
        "text": "9020万"
      },
      {
        "label": "D",
        "text": "1亿"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1672,
    "type": "单选",
    "q": "截止到目前，“GTI”有( ）运营商成员，有( ）合作伙伴。",
    "options": [
      {
        "label": "A",
        "text": "57,54"
      },
      {
        "label": "B",
        "text": "54,57"
      },
      {
        "label": "C",
        "text": "57,60"
      },
      {
        "label": "D",
        "text": "60,54"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1673,
    "type": "单选",
    "q": "PING包命令的PING请求时间间隔默认是多少？（   ）",
    "options": [
      {
        "label": "A",
        "text": "100ms"
      },
      {
        "label": "B",
        "text": "1s"
      },
      {
        "label": "C",
        "text": "5ms"
      },
      {
        "label": "D",
        "text": "10ms"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1674,
    "type": "单选",
    "q": "PRACH采用（）时可以在UpPTS中发射",
    "options": [
      {
        "label": "A",
        "text": "format1"
      },
      {
        "label": "B",
        "text": "format2"
      },
      {
        "label": "C",
        "text": "format3"
      },
      {
        "label": "D",
        "text": "format4"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1675,
    "type": "单选",
    "q": "PRACH信道在每个子帧上最多只能配置（）个",
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
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1676,
    "type": "单选",
    "q": "完成测量报告文件存储与管理的单元是（）",
    "options": [
      {
        "label": "A",
        "text": "应用服务器"
      },
      {
        "label": "B",
        "text": "CDG服务器"
      },
      {
        "label": "C",
        "text": "FTP服务器"
      },
      {
        "label": "D",
        "text": "MR服务器"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1677,
    "type": "单选",
    "q": "网管中，一般设置FTP的端口为:",
    "options": [
      {
        "label": "A",
        "text": "21"
      },
      {
        "label": "B",
        "text": "162"
      },
      {
        "label": "C",
        "text": "10021"
      },
      {
        "label": "D",
        "text": "5000"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1678,
    "type": "单选",
    "q": "对KPI指标中S1接口流量描述不正确",
    "options": [
      {
        "label": "A",
        "text": "S1接口流量可分为S1接口上行流量和S1接口下行流量"
      },
      {
        "label": "B",
        "text": "S1接口流量指的是物理层流量"
      },
      {
        "label": "C",
        "text": "S1接口流量指的是IP层流量"
      },
      {
        "label": "D",
        "text": "反映S1接口的系统负荷情况"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1679,
    "type": "单选",
    "q": "对KPI指标中覆盖率描述不正确的是",
    "options": [
      {
        "label": "A",
        "text": "无线网络的覆盖率，反映了网络的可用性。"
      },
      {
        "label": "B",
        "text": "如果某一区域接收信号功率超过某一门限或者信号质量超过某一门限则表示该区域被覆盖"
      },
      {
        "label": "C",
        "text": "覆盖率是指满足RSRP>R且RSRQ>S的区域和总测试区域的比值。"
      },
      {
        "label": "D",
        "text": "通常我们所说的覆盖率是区域覆盖率不是边缘覆盖率。"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1680,
    "type": "单选",
    "q": "对RSRP描述错误的事",
    "options": [
      {
        "label": "A",
        "text": "RSRP是一个表示接收信号强度的绝对值"
      },
      {
        "label": "B",
        "text": "一定程度上可以用来反映移动台距离基站的远近，因此可以用来度量小区覆盖范围大小"
      },
      {
        "label": "C",
        "text": "只通过RSRP即可以确定系统实际覆盖情况"
      },
      {
        "label": "D",
        "text": "RSRP是承载小区参考信号RE上的线性平均功率。"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1681,
    "type": "单选",
    "q": "对TD-LTE1个时隙单位描述准确的是（）",
    "options": [
      {
        "label": "A",
        "text": "2个半帧"
      },
      {
        "label": "B",
        "text": "十分之一个无线帧"
      },
      {
        "label": "C",
        "text": "半个子帧"
      },
      {
        "label": "D",
        "text": "一个特殊子帧"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1682,
    "type": "单选",
    "q": "对X2切换描述错误的是",
    "options": [
      {
        "label": "A",
        "text": "eNB间存在X2接口"
      },
      {
        "label": "B",
        "text": "切换信令使用X2口"
      },
      {
        "label": "C",
        "text": "源和目的eNB使用同一个MME"
      },
      {
        "label": "D",
        "text": "支持系统间切换"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1683,
    "type": "单选",
    "q": "对基站进行完配置，对基站参数进行备份，该备份叫做（）",
    "options": [
      {
        "label": "A",
        "text": "UP"
      },
      {
        "label": "B",
        "text": "CV"
      },
      {
        "label": "C",
        "text": "CU"
      },
      {
        "label": "D",
        "text": "BP"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1684,
    "type": "单选",
    "q": "对仅支持无需登记服务的UE说法正确的是:",
    "options": [
      {
        "label": "A",
        "text": "需要进行位置登记"
      },
      {
        "label": "B",
        "text": "不需要进行位置登记"
      },
      {
        "label": "C",
        "text": "视情况而定"
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
    "id": 1685,
    "type": "单选",
    "q": "对某一个特定的UE来说，同时能有几个切换准备流程进行:",
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
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1686,
    "type": "单选",
    "q": "LTE下行方向，若同时给同一用户分配了多个RB，则下列哪种说法正确（）",
    "options": [
      {
        "label": "A",
        "text": "多个RB在频率上必须是连续的"
      },
      {
        "label": "B",
        "text": "多个RB在频率上可以是不连续的"
      },
      {
        "label": "C",
        "text": "多个RB在频率上必须是不连续的"
      },
      {
        "label": "D",
        "text": "以上说法都不对"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1687,
    "type": "单选",
    "q": "LTE下行覆盖能力最强的控制信道是:",
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
        "text": "PHICH"
      },
      {
        "label": "D",
        "text": "PCFICH"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1688,
    "type": "单选",
    "q": "LTE下行控制信道中覆盖受限的是:",
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
        "text": "PHICH"
      },
      {
        "label": "D",
        "text": "PCFICH"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1689,
    "type": "单选",
    "q": "LTE下行调度是基于以下哪个参量（）",
    "options": [
      {
        "label": "A",
        "text": "CQI"
      },
      {
        "label": "B",
        "text": "PMI"
      },
      {
        "label": "C",
        "text": "RI"
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
    "id": 1690,
    "type": "单选",
    "q": "LTE下行最多支持（）个层的空间复用",
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
    "id": 1691,
    "type": "单选",
    "q": "LTE协议规定的UE最大发射功率是：",
    "options": [
      {
        "label": "A",
        "text": "20dbm"
      },
      {
        "label": "B",
        "text": "23dbm"
      },
      {
        "label": "C",
        "text": "30dbm"
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
    "id": 1692,
    "type": "单选",
    "q": "LTE协议规范中，层二不包括以下哪个协议层:",
    "options": [
      {
        "label": "A",
        "text": "NAS"
      },
      {
        "label": "B",
        "text": "RLC"
      },
      {
        "label": "C",
        "text": "MAC"
      },
      {
        "label": "D",
        "text": "PDCP"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1693,
    "type": "单选",
    "q": "LTE协议中，定义了几种PDSCH的传输模式（）",
    "options": [
      {
        "label": "A",
        "text": "5"
      },
      {
        "label": "B",
        "text": "6"
      },
      {
        "label": "C",
        "text": "7"
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
    "id": 1694,
    "type": "单选",
    "q": "DCI格式0用于传输什么信息:",
    "options": [
      {
        "label": "A",
        "text": "UL-SCH分配信息"
      },
      {
        "label": "B",
        "text": "应用SIMO操作的DL-SCH分配信息"
      },
      {
        "label": "C",
        "text": "应用MIMO操作的DL-SCH分配信息"
      },
      {
        "label": "D",
        "text": "传送功率控制命令"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1695,
    "type": "单选",
    "q": "DCI格式0用于调度:",
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
        "text": "PUCCH"
      },
      {
        "label": "D",
        "text": "PDCCH"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1696,
    "type": "单选",
    "q": "以下（）TDLTE的业务类型，其macMIMOModeDl必须设置为mimoTwoLayersNotAllowed",
    "options": [
      {
        "label": "A",
        "text": "QCI1"
      },
      {
        "label": "B",
        "text": "QCI9"
      },
      {
        "label": "C",
        "text": "QCI8"
      },
      {
        "label": "D",
        "text": "QCI2"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1697,
    "type": "单选",
    "q": "TD-LTE在系统配置为TM3/7自适应模式下，关于定点FTP业务测试（）可以算通过单站验证。",
    "options": [
      {
        "label": "A",
        "text": "ULTput>12Mbps,DLTput>45Mbps"
      },
      {
        "label": "B",
        "text": "ULTput>12Mbps,DLTput>50Mbps"
      },
      {
        "label": "C",
        "text": "ULTput>15Mbps,DLTput>45Mbps"
      },
      {
        "label": "D",
        "text": "ULTput>15Mbps,DLTput>50Mbps"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1698,
    "type": "单选",
    "q": "UE的能力等级信息可以在哪条消息中读取（）",
    "options": [
      {
        "label": "A",
        "text": "InitialUEContextSetupRequest"
      },
      {
        "label": "B",
        "text": "RRCCONNECTIONRECONFIGURATION"
      },
      {
        "label": "C",
        "text": "CONNECTIONSETUPRECONFIGURATIONCOMPELTE"
      },
      {
        "label": "D",
        "text": "MIB"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1699,
    "type": "单选",
    "q": "LTE的测量报告中，（）表示表示服务小区信号质量高于一定门限，eNodeB停止异频/异系统测量。",
    "options": [
      {
        "label": "A",
        "text": "EventA1"
      },
      {
        "label": "B",
        "text": "EventA2"
      },
      {
        "label": "C",
        "text": "EventA3"
      },
      {
        "label": "D",
        "text": "EventA4"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1700,
    "type": "单选",
    "q": "哪种RLC模式的业务时延最小（）",
    "options": [
      {
        "label": "A",
        "text": "AcknowledgedMode(AM)"
      },
      {
        "label": "B",
        "text": "UnacknowledgedMode(UM)"
      },
      {
        "label": "C",
        "text": "TransparentMode(TM)"
      },
      {
        "label": "D",
        "text": "LowLatencyMode(LM)"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1701,
    "type": "单选",
    "q": "传送主同步信号和辅同步信号需要多大带宽（）",
    "options": [
      {
        "label": "A",
        "text": "1.4MHz"
      },
      {
        "label": "B",
        "text": "1.08MHz"
      },
      {
        "label": "C",
        "text": "930kHz"
      },
      {
        "label": "D",
        "text": "upto20MHz"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1702,
    "type": "单选",
    "q": "以下哪个LTE天线方案仅支持单流（）",
    "options": [
      {
        "label": "A",
        "text": "8天线TM7Beamforming"
      },
      {
        "label": "B",
        "text": "8天线2x2MIMO"
      },
      {
        "label": "C",
        "text": "4x2MIMO"
      },
      {
        "label": "D",
        "text": "AdaptiveMIMO/BF"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1703,
    "type": "单选",
    "q": "ZXSDR B8300的CC板REF接口是____",
    "options": [
      {
        "label": "A",
        "text": "GPS天线接口"
      },
      {
        "label": "B",
        "text": "外部通信端口"
      },
      {
        "label": "C",
        "text": "时钟扩展口"
      },
      {
        "label": "D",
        "text": "调试端口"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1704,
    "type": "单选",
    "q": "ZXSDR B8300支持最大:RRU的链型组网:",
    "options": [
      {
        "label": "A",
        "text": "2"
      },
      {
        "label": "B",
        "text": "4"
      },
      {
        "label": "C",
        "text": "6"
      },
      {
        "label": "D",
        "text": "8"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1705,
    "type": "单选",
    "q": "preamble码的format 4可以在（）时隙中传输",
    "options": [
      {
        "label": "A",
        "text": "Slot0"
      },
      {
        "label": "B",
        "text": "Slot1"
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
    "id": 1706,
    "type": "单选",
    "q": "preamble格式中，（）可以支持100km的组网",
    "options": [
      {
        "label": "A",
        "text": "format0"
      },
      {
        "label": "B",
        "text": "format1"
      },
      {
        "label": "C",
        "text": "format2"
      },
      {
        "label": "D",
        "text": "format3"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1707,
    "type": "单选",
    "q": "LTE/SAE为UE的位置管理提出（）",
    "options": [
      {
        "label": "A",
        "text": "TrackingArea"
      },
      {
        "label": "B",
        "text": "RoutingArea"
      },
      {
        "label": "C",
        "text": "LocationArea"
      },
      {
        "label": "D",
        "text": "MobilityArea"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1708,
    "type": "单选",
    "q": "eNodeB对哪种类型的数据进行完整性保护（）",
    "options": [
      {
        "label": "A",
        "text": "Userplanedata"
      },
      {
        "label": "B",
        "text": "RRCsignalling"
      },
      {
        "label": "C",
        "text": "NASsignalling"
      },
      {
        "label": "D",
        "text": "SystemInformation"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1709,
    "type": "单选",
    "q": "那条信令不属于基于竞争的随机接入",
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
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1710,
    "type": "单选",
    "q": "什么情况下手机用户可能被分配一个新的GUTI（）",
    "options": [
      {
        "label": "A",
        "text": "附着"
      },
      {
        "label": "B",
        "text": "跨MMETAupdate"
      },
      {
        "label": "C",
        "text": "MME内的TAupdate"
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
    "id": 1711,
    "type": "单选",
    "q": "UL-SCH、DL-SCH采用的信道编码方式及编码速率分别为:",
    "options": [
      {
        "label": "A",
        "text": "Turbocoding，1/3"
      },
      {
        "label": "B",
        "text": "Turbocoding，1/2"
      },
      {
        "label": "C",
        "text": "Tailbitingconvolutionalcoding,1/3"
      },
      {
        "label": "D",
        "text": "Tailbitingconvolutionalcoding,1/2"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1712,
    "type": "单选",
    "q": "室外D频段组网采用的时隙配比为（）",
    "options": [
      {
        "label": "A",
        "text": "2:01:02"
      },
      {
        "label": "B",
        "text": "1:01:03"
      },
      {
        "label": "C",
        "text": "3:01:01"
      },
      {
        "label": "D",
        "text": "3:02:05"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1713,
    "type": "单选",
    "q": "波束赋形（TM7）使用的参考信号为（）",
    "options": [
      {
        "label": "A",
        "text": "port0"
      },
      {
        "label": "B",
        "text": "port1"
      },
      {
        "label": "C",
        "text": "port5"
      },
      {
        "label": "D",
        "text": "port7"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1714,
    "type": "单选",
    "q": "以下哪个功能不属于MME的功能（）",
    "options": [
      {
        "label": "A",
        "text": "NAS信令处理"
      },
      {
        "label": "B",
        "text": "TAList管理"
      },
      {
        "label": "C",
        "text": "合法监听"
      },
      {
        "label": "D",
        "text": "漫游控制"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1715,
    "type": "单选",
    "q": "以下哪个功能不属于PGW的功能（）",
    "options": [
      {
        "label": "A",
        "text": "TAList管理"
      },
      {
        "label": "B",
        "text": "IP地址分配"
      },
      {
        "label": "C",
        "text": "合法监听"
      },
      {
        "label": "D",
        "text": "上行和下行的承载绑定"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1716,
    "type": "单选",
    "q": "LTE下，EPC主要由MME和（）, Serving GW,HSS组成",
    "options": [
      {
        "label": "A",
        "text": "AAA"
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
        "text": "PDNGW"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1717,
    "type": "单选",
    "q": "关于系统消息广播的功能，描述错误的是____",
    "options": [
      {
        "label": "A",
        "text": "系统信息广播（SystemInformationBroadcast）是通信系统中的一个重要功能，主要提供了接入网系统的主要信息，以便于UE建立无线连接"
      },
      {
        "label": "B",
        "text": "下发对小区中UE配置的专用消息。"
      },
      {
        "label": "C",
        "text": "通知UE紧急信息:地震海啸告警系统(ETWS)"
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
    "id": 1718,
    "type": "单选",
    "q": "假设链路预算结果城区站点单扇区覆盖半径为1Km,则在拓扑结构设计的时候站间距应该是_________",
    "options": [
      {
        "label": "A",
        "text": "1.5Km"
      },
      {
        "label": "B",
        "text": "1Km"
      },
      {
        "label": "C",
        "text": "2Km"
      },
      {
        "label": "D",
        "text": "1.95Km"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1719,
    "type": "单选",
    "q": "指南针的主要功能不包括_________",
    "options": [
      {
        "label": "A",
        "text": "测定方位"
      },
      {
        "label": "B",
        "text": "测定天线方向角"
      },
      {
        "label": "C",
        "text": "测定斜面坡度"
      },
      {
        "label": "D",
        "text": "测定经纬度"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1720,
    "type": "单选",
    "q": "协调经理职责是_________",
    "options": [
      {
        "label": "A",
        "text": "负责对规划站点进行勘察，整理提交站点勘察报告"
      },
      {
        "label": "B",
        "text": "负责对规划站点勘察结果进行初审；整理输出规划结果及规划站点勘察报告；对客户负责人反馈的问题站点进行确认；"
      },
      {
        "label": "C",
        "text": "负责对规划站点进行仿真验证工作，确定规划结果是否符合项目需求；"
      },
      {
        "label": "D",
        "text": "对规划站点勘察工作负项目管理协调责任，协调项目组内外人力资源；负责规划站点勘察计划以及每日站点勘察任务书的制定与下达；负责规划站点勘察工作整体进度的把握判断。"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1721,
    "type": "单选",
    "q": "站点勘察要求每个站点拍摄_________张照片",
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
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1722,
    "type": "单选",
    "q": "ZXSDR B8200 L200设备的工作温度范围是_________",
    "options": [
      {
        "label": "A",
        "text": "-25℃~50℃"
      },
      {
        "label": "B",
        "text": "-15℃~50℃"
      },
      {
        "label": "C",
        "text": "-5℃~60℃"
      },
      {
        "label": "D",
        "text": "-15℃~60℃"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1723,
    "type": "单选",
    "q": "下面哪种说法是正确的。_________",
    "options": [
      {
        "label": "A",
        "text": "测试时间的选择上要注意尽量避开人流高峰期"
      },
      {
        "label": "B",
        "text": "邻区未加可以进行单站测试"
      },
      {
        "label": "C",
        "text": "单站验证测试时车速尽可能的快"
      },
      {
        "label": "D",
        "text": "单站验证测试不能检查出天馈接反"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1724,
    "type": "单选",
    "q": "单站验证测试过程中网优人员的工作任务是_________",
    "options": [
      {
        "label": "A",
        "text": "检查各小区的基本功能是否正常"
      },
      {
        "label": "B",
        "text": "检查空闲模式下的小区状态"
      },
      {
        "label": "C",
        "text": "检查连接模式下的小区状态以及业务连接情况"
      },
      {
        "label": "D",
        "text": "单站点覆盖DT测试"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1725,
    "type": "单选",
    "q": "单站测试验证的重点是_________",
    "options": [
      {
        "label": "A",
        "text": "小区是否正常工作"
      },
      {
        "label": "B",
        "text": "下载速率是否满足要求"
      },
      {
        "label": "C",
        "text": "设备问题和工程安装问题"
      },
      {
        "label": "D",
        "text": "能否进行业务"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1726,
    "type": "单选",
    "q": "当接收机和发射机之间的无线路径被尖利的边缘阻挡时发生________",
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
        "text": "绕射"
      },
      {
        "label": "D",
        "text": "散射"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1727,
    "type": "单选",
    "q": "天线增益一般常用dBd和dBi两种单位，二者之间的换算关系是0dBd=________2.15dBi",
    "options": [
      {
        "label": "A",
        "text": "-2.15"
      },
      {
        "label": "B",
        "text": "-1"
      },
      {
        "label": "C",
        "text": "1"
      },
      {
        "label": "D",
        "text": "2.15"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1728,
    "type": "单选",
    "q": "10dBm+10dB=_______dBm",
    "options": [
      {
        "label": "A",
        "text": "13"
      },
      {
        "label": "B",
        "text": "15"
      },
      {
        "label": "C",
        "text": "18"
      },
      {
        "label": "D",
        "text": "20"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1729,
    "type": "单选",
    "q": "在覆盖半径不变的情况下，天线越高需要的下倾角越_________",
    "options": [
      {
        "label": "A",
        "text": "越大"
      },
      {
        "label": "B",
        "text": "越小"
      },
      {
        "label": "C",
        "text": "不变"
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
    "id": 1730,
    "type": "单选",
    "q": "在生成扇区图层时，以下哪个信息不是必须的_________",
    "options": [
      {
        "label": "A",
        "text": "站点经纬度"
      },
      {
        "label": "B",
        "text": "站点下倾角"
      },
      {
        "label": "C",
        "text": "站点方位角"
      },
      {
        "label": "D",
        "text": "水平波瓣宽度"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1731,
    "type": "单选",
    "q": "Downlink MCS在以下哪个参数界面中显示_________",
    "options": [
      {
        "label": "A",
        "text": "LTEServercellinformation"
      },
      {
        "label": "B",
        "text": "LTEPCIRSRP/RSRQ"
      },
      {
        "label": "C",
        "text": "LTEPHYInformation"
      },
      {
        "label": "D",
        "text": "LTECELLInformation"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1732,
    "type": "单选",
    "q": "Nanocell与Small cell的区别是（）",
    "options": [
      {
        "label": "A",
        "text": "Nanocell用于广覆盖，SmallCell用于热点地区"
      },
      {
        "label": "B",
        "text": "Nanocell仅用于LTE"
      },
      {
        "label": "C",
        "text": "融合WIFI的smallcell"
      },
      {
        "label": "D",
        "text": "Nanocell与Smallcell无区别"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1733,
    "type": "单选",
    "q": "TD-LTE CPE拥有哪些无线路由器不具备的功能（）",
    "options": [
      {
        "label": "A",
        "text": "可实现Internet连接共享"
      },
      {
        "label": "B",
        "text": "支持多种设备"
      },
      {
        "label": "C",
        "text": "可随时移动"
      },
      {
        "label": "D",
        "text": "覆盖范围可达上百米"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1734,
    "type": "单选",
    "q": "Solaris中，哪个命令可以删除UID=1002的用户oracle:",
    "options": [
      {
        "label": "A",
        "text": "userdel–roracle"
      },
      {
        "label": "B",
        "text": "userdel–u1002"
      },
      {
        "label": "C",
        "text": "userdel–uidoracle"
      },
      {
        "label": "D",
        "text": "userdel–r1002"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1735,
    "type": "单选",
    "q": "Oracle中关闭数据库时，不允许启动新事务，回滚到未提交事务并关闭实例的命令为:",
    "options": [
      {
        "label": "A",
        "text": "shutdown"
      },
      {
        "label": "B",
        "text": "shutdownimmediate"
      },
      {
        "label": "C",
        "text": "shutdownabort"
      },
      {
        "label": "D",
        "text": "shutdownnomount"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1736,
    "type": "单选",
    "q": "Oracle中启动数据库时，分配SGA并启动后台进程，装配数据库，但不打开数据库的命令为:",
    "options": [
      {
        "label": "A",
        "text": "startup"
      },
      {
        "label": "B",
        "text": "startupopen"
      },
      {
        "label": "C",
        "text": "startupnomount"
      },
      {
        "label": "D",
        "text": "startupmount"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1737,
    "type": "单选",
    "q": "Solaris操作系统的核心是____",
    "options": [
      {
        "label": "A",
        "text": "Shell"
      },
      {
        "label": "B",
        "text": "Kernel"
      },
      {
        "label": "C",
        "text": "Bourneshell"
      },
      {
        "label": "D",
        "text": "Filestructure"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1738,
    "type": "单选",
    "q": "当LTE UE从一个服务区移动到另一个服务区， 会发生以下哪些事件（）",
    "options": [
      {
        "label": "A",
        "text": "TrackingArea更新"
      },
      {
        "label": "B",
        "text": "RoutingArea更新"
      },
      {
        "label": "C",
        "text": "位置更新"
      },
      {
        "label": "D",
        "text": "切换"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1739,
    "type": "单选",
    "q": "影响TD-LTE小区间干扰的因素不包括（）",
    "options": [
      {
        "label": "A",
        "text": "小区频率"
      },
      {
        "label": "B",
        "text": "PSSID"
      },
      {
        "label": "C",
        "text": "SSSID"
      },
      {
        "label": "D",
        "text": "TA"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1740,
    "type": "单选",
    "q": "RRC连接建立成功次统计触发的信令是（）",
    "options": [
      {
        "label": "A",
        "text": "RRCconnectionsetup"
      },
      {
        "label": "B",
        "text": "RRCconnectionrequest"
      },
      {
        "label": "C",
        "text": "RRCconnectionsetupcomplete"
      },
      {
        "label": "D",
        "text": "RRCconnectionreconfigurationcomplete"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1741,
    "type": "单选",
    "q": "以下哪个3GPP版本第一次发布LTE标准（）",
    "options": [
      {
        "label": "A",
        "text": "Rel5"
      },
      {
        "label": "B",
        "text": "Rel6"
      },
      {
        "label": "C",
        "text": "Rel7"
      },
      {
        "label": "D",
        "text": "Rel8"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1742,
    "type": "单选",
    "q": "EPC发起的寻呼消息以下列哪个为单位下发给UE（）",
    "options": [
      {
        "label": "A",
        "text": "TA"
      },
      {
        "label": "B",
        "text": "TAList"
      },
      {
        "label": "C",
        "text": "LA"
      },
      {
        "label": "D",
        "text": "RA"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1743,
    "type": "单选",
    "q": "下面哪条打桩命令可以实现没有EPC存在情况下，释放UE上下文的功能:",
    "options": [
      {
        "label": "A",
        "text": "RnlcDcmDbgUeCtxtRelCmd"
      },
      {
        "label": "B",
        "text": "RnlcDcmDbgCloseAutoFailRsp"
      },
      {
        "label": "C",
        "text": "RnlcDcmDbgCloseAutoRsp"
      },
      {
        "label": "D",
        "text": "SerReqSaeRelFalMsg"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1744,
    "type": "单选",
    "q": "ARQ机制是:主要功能",
    "options": [
      {
        "label": "A",
        "text": "RLCAM"
      },
      {
        "label": "B",
        "text": "RLCUM"
      },
      {
        "label": "C",
        "text": "PDCP"
      },
      {
        "label": "D",
        "text": "MAC"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1745,
    "type": "单选",
    "q": "以下哪一项不属于用户面协议模块:",
    "options": [
      {
        "label": "A",
        "text": "DMAC"
      },
      {
        "label": "B",
        "text": "RLCUM"
      },
      {
        "label": "C",
        "text": "PDCP"
      },
      {
        "label": "D",
        "text": "RRC"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1746,
    "type": "单选",
    "q": "中国移动香港公司在香港部署的LTE网络制式（）",
    "options": [
      {
        "label": "A",
        "text": "TD-LTE"
      },
      {
        "label": "B",
        "text": "LTEFDD"
      },
      {
        "label": "C",
        "text": "双模，先部署LTEFDD，后TD-LTE"
      },
      {
        "label": "D",
        "text": "双模，先部署TD-LTE，后LTEFDD"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1747,
    "type": "单选",
    "q": "OFDM的英文全称是（）",
    "options": [
      {
        "label": "A",
        "text": "OrthogonalFrequencyDivisionMultiplexing"
      },
      {
        "label": "B",
        "text": "OutstandingFrequencyDivisionMultiplexing"
      },
      {
        "label": "C",
        "text": "OverwhelmingFrequencyDivisionMultiplexing"
      },
      {
        "label": "D",
        "text": "OrthogonalFrequencyDivisionModulation"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1748,
    "type": "单选",
    "q": "TD-LTE中的MIMO技术英文全称是（）",
    "options": [
      {
        "label": "A",
        "text": "MaximumInputMinimumOutput"
      },
      {
        "label": "B",
        "text": "MultipleInputMultipleOutput"
      },
      {
        "label": "C",
        "text": "MultipleInputMaximumOutput"
      },
      {
        "label": "D",
        "text": "MaximumInputMultipleOutput"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1749,
    "type": "单选",
    "q": "LTE中小区是以哪种形式聚合在一起的（）",
    "options": [
      {
        "label": "A",
        "text": "LA"
      },
      {
        "label": "B",
        "text": "TA"
      },
      {
        "label": "C",
        "text": "RA"
      },
      {
        "label": "D",
        "text": "LAorRA"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1750,
    "type": "单选",
    "q": "SAE是以下哪个的缩写（）",
    "options": [
      {
        "label": "A",
        "text": "SharedApplicationEnvironment"
      },
      {
        "label": "B",
        "text": "SystemArchitectureEvolution"
      },
      {
        "label": "C",
        "text": "SocietyofAutomotiveEngineers"
      },
      {
        "label": "D",
        "text": "SpecialAreaofEmphasis"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1751,
    "type": "单选",
    "q": "LTE不支持以下哪种MIMO（）",
    "options": [
      {
        "label": "A",
        "text": "2*2MIMO"
      },
      {
        "label": "B",
        "text": "3*3MIMO"
      },
      {
        "label": "C",
        "text": "4*4MIMO"
      },
      {
        "label": "D",
        "text": "4*2MIMO"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1752,
    "type": "单选",
    "q": "LTE/EPC网络实现语音业务的解决方案包括（）",
    "options": [
      {
        "label": "A",
        "text": "CSfallback"
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
    "id": 1753,
    "type": "单选",
    "q": "LTE上行多天线技术称作（）",
    "options": [
      {
        "label": "A",
        "text": "MU-MIMO"
      },
      {
        "label": "B",
        "text": "SU-MIMO"
      },
      {
        "label": "C",
        "text": "4x4MIMO"
      },
      {
        "label": "D",
        "text": "2x2MIMO"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1754,
    "type": "单选",
    "q": "配置EPG-M 2012A 节点S11网络接口的IP地址需要用以下哪些命令（）",
    "options": [
      {
        "label": "A",
        "text": "[editservicesepgsgwcontrol-planeprotocolsgtpinterfacess11]address-rangeaddress-range"
      },
      {
        "label": "B",
        "text": "[editservicesepgsgw]s11-vip-addresss11-vip-address;"
      },
      {
        "label": "C",
        "text": "[editservicesepgsgwuser-planeprotocolsgtpran-network]address-rangeaddress-range;"
      },
      {
        "label": "D",
        "text": "[editservicesepgsgwcontrol-planeprotocolsgtpinterfacess4s11]address-rangeaddress-range;"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1755,
    "type": "单选",
    "q": "LTE/EPC网络中，手机完成业务请求后，状态变为（）",
    "options": [
      {
        "label": "A",
        "text": "EMM-Registered"
      },
      {
        "label": "B",
        "text": "ECMConnected"
      },
      {
        "label": "C",
        "text": "ECMIDLE"
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
    "id": 1756,
    "type": "单选",
    "q": "TD-LTE中，判断上行基站侧接收信号强度情况，以及是否处于小区覆盖边缘主要通过（）",
    "options": [
      {
        "label": "A",
        "text": "CRS-SINR"
      },
      {
        "label": "B",
        "text": "MCS调度值"
      },
      {
        "label": "C",
        "text": "DLMACBLER"
      },
      {
        "label": "D",
        "text": "路径损耗pathloss"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1757,
    "type": "单选",
    "q": "LTE中，RLC层接收端将接收到的RLC PDU重组并排序，生成RLC SDU，然后用（）方式将RLC SDU转发到上层",
    "options": [
      {
        "label": "A",
        "text": "In-sequenceDelivery"
      },
      {
        "label": "B",
        "text": "nonIn-sequenceDelivery"
      },
      {
        "label": "C",
        "text": "通过高层信令配置为In-sequenceDelivery"
      },
      {
        "label": "D",
        "text": "通过高层信令配置为In-sequenceDelivery或nonIn-sequenceDelivery"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1758,
    "type": "单选",
    "q": "TDLTE如果采用室外D频段组网，一般时隙配置为2:1:2，特殊时隙配置为（）",
    "options": [
      {
        "label": "A",
        "text": "10:02:02AM"
      },
      {
        "label": "B",
        "text": "03:09:02AM"
      },
      {
        "label": "C",
        "text": "11:01:02AM"
      },
      {
        "label": "D",
        "text": "09:03:02AM"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1759,
    "type": "单选",
    "q": "TDLTE的UE的小区重选的S法则要求小区满足（）",
    "options": [
      {
        "label": "A",
        "text": "Srxlev>0dB"
      },
      {
        "label": "B",
        "text": "Squal>0dB"
      },
      {
        "label": "C",
        "text": "A和B同时满足"
      },
      {
        "label": "D",
        "text": "A或B满足一项"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1760,
    "type": "单选",
    "q": "关于TD-LTE中天线端口说法正确的是（）",
    "options": [
      {
        "label": "A",
        "text": "天线逻辑端口与物理端口一一对应"
      },
      {
        "label": "B",
        "text": "8pathTM7配置下逻辑端口为1个"
      },
      {
        "label": "C",
        "text": "8pathTM8配置下逻辑端口为4个"
      },
      {
        "label": "D",
        "text": "8pathTM3配置下逻辑端口与TM8配置下的逻辑端口数相同"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1761,
    "type": "单选",
    "q": "Reordering_Window指示了记录窗的大小，对于映射在:式下的Reordering_Window大小为2048:",
    "options": [
      {
        "label": "A",
        "text": "RLCUM"
      },
      {
        "label": "B",
        "text": "RLCAM"
      },
      {
        "label": "C",
        "text": "RLCTM"
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
    "id": 1762,
    "type": "单选",
    "q": "在资源分配中，UE根据检测到的:资源分配域进行解析:",
    "options": [
      {
        "label": "A",
        "text": "RIV"
      },
      {
        "label": "B",
        "text": "PDSCHDCI格式"
      },
      {
        "label": "C",
        "text": "PDCCHDCI格式"
      },
      {
        "label": "D",
        "text": "VRB"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1763,
    "type": "单选",
    "q": "X2AP全局过程中，eNB1向eNB2请求了负荷测量，eNB2通过下面哪条消息报告测量结果给eNB1:",
    "options": [
      {
        "label": "A",
        "text": "RESOURCESTATUSUPDATE"
      },
      {
        "label": "B",
        "text": "RESOURCESTATUSREQUEST"
      },
      {
        "label": "C",
        "text": "RESOURCESTATUSRESPONSE"
      },
      {
        "label": "D",
        "text": "ENBCONFIGURATIONUPDATE"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1764,
    "type": "单选",
    "q": "X2AP的Resource Status Reporting Initiation过程通过那条消息发起:",
    "options": [
      {
        "label": "A",
        "text": "RESOURCESTATUSUPDATE"
      },
      {
        "label": "B",
        "text": "RESOURCESTATUSREQUEST"
      },
      {
        "label": "C",
        "text": "RESOURCESTATUSRESPONSE"
      },
      {
        "label": "D",
        "text": "ENBCONFIGURATIONUPDATE"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1765,
    "type": "单选",
    "q": "Linux系统中，查看监听服务状态的命令是:",
    "options": [
      {
        "label": "A",
        "text": "listenerstate"
      },
      {
        "label": "B",
        "text": "listenerstatus"
      },
      {
        "label": "C",
        "text": "lsnrctlstate"
      },
      {
        "label": "D",
        "text": "lsnrctlstatus"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1766,
    "type": "单选",
    "q": "Linux系统中，启动监听服务的命令是:",
    "options": [
      {
        "label": "A",
        "text": "listenerstart"
      },
      {
        "label": "B",
        "text": "listenerstartup"
      },
      {
        "label": "C",
        "text": "lsnrctlstart"
      },
      {
        "label": "D",
        "text": "lsnrctlstartup"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1767,
    "type": "单选",
    "q": "Linux系统中，停止监听服务的命令是:",
    "options": [
      {
        "label": "A",
        "text": "listenerstop"
      },
      {
        "label": "B",
        "text": "listenerend"
      },
      {
        "label": "C",
        "text": "lsnrctlstop"
      },
      {
        "label": "D",
        "text": "lsnrctlend"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1768,
    "type": "单选",
    "q": "下列哪一项命令不能重启Linux系统:",
    "options": [
      {
        "label": "A",
        "text": "halt"
      },
      {
        "label": "B",
        "text": "init6"
      },
      {
        "label": "C",
        "text": "shutdown-r"
      },
      {
        "label": "D",
        "text": "reboot"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1769,
    "type": "单选",
    "q": "SON是LTE网络的一个重要属性，以下哪些是SON的功能（）",
    "options": [
      {
        "label": "A",
        "text": "Self-configuration"
      },
      {
        "label": "B",
        "text": "ANR(AutomaticNeighborRelationFunction)"
      },
      {
        "label": "C",
        "text": "ICIC(inter-cellinterferencecoordination)"
      },
      {
        "label": "D",
        "text": "以上全是"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1770,
    "type": "单选",
    "q": "在CNA里面1个测试文件导入后对应生成1个数据库文件，理论最大支持TB级，推荐单个文件________以下",
    "options": [
      {
        "label": "A",
        "text": "2GB"
      },
      {
        "label": "B",
        "text": "4GB"
      },
      {
        "label": "C",
        "text": "10GB"
      },
      {
        "label": "D",
        "text": "20GB"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1771,
    "type": "单选",
    "q": "TD-LTE优化初期我们对RSCP的覆盖要求应该是：RSCP大于等于-105dbm的采样点占所有采样点的比例应大于________",
    "options": [
      {
        "label": "A",
        "text": "0.85"
      },
      {
        "label": "B",
        "text": "0.9"
      },
      {
        "label": "C",
        "text": "0.95"
      },
      {
        "label": "D",
        "text": "0.98"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1772,
    "type": "单选",
    "q": "脱管eNB的正确步骤是（）",
    "options": [
      {
        "label": "A",
        "text": "unmangeeNB-->deleteeNB"
      },
      {
        "label": "B",
        "text": "deleteeNB-->unmangeeNB"
      },
      {
        "label": "C",
        "text": "shutdowndiscoveryrule-->deletediscoveryrule"
      },
      {
        "label": "D",
        "text": "deletediscoveryrule-->shutdowndiscoveryrule"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1773,
    "type": "单选",
    "q": "下列哪个参数对下行链路的掉话率的统计指标有较明显的影响？???",
    "options": [
      {
        "label": "A",
        "text": "RLINKT"
      },
      {
        "label": "B",
        "text": "ACCMIN"
      },
      {
        "label": "C",
        "text": "MSRXMIN"
      },
      {
        "label": "D",
        "text": "MAXTA"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1774,
    "type": "单选",
    "q": "LTE最高可采用什么调制方式？",
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
        "text": "256QAM"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1775,
    "type": "单选",
    "q": "64QAM一个符号携带的是比特信息？",
    "options": [
      {
        "label": "A",
        "text": "2"
      },
      {
        "label": "B",
        "text": "4"
      },
      {
        "label": "C",
        "text": "6"
      },
      {
        "label": "D",
        "text": "8"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1776,
    "type": "单选",
    "q": "LTE下行采用什么多址技术？",
    "options": [
      {
        "label": "A",
        "text": "FDMA"
      },
      {
        "label": "B",
        "text": "TDMA"
      },
      {
        "label": "C",
        "text": "OFDMA"
      },
      {
        "label": "D",
        "text": "SC-OFDMA"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1777,
    "type": "单选",
    "q": "LTE最大支持的层数为多少？",
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
    "id": 1778,
    "type": "单选",
    "q": "LTE最大支持的码字数为多少？",
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
    "id": 1779,
    "type": "单选",
    "q": "LTE的PLMN信息在哪条消息里广播？",
    "options": [
      {
        "label": "A",
        "text": "MIB"
      },
      {
        "label": "B",
        "text": "SIB1"
      },
      {
        "label": "C",
        "text": "SIB2"
      },
      {
        "label": "D",
        "text": "SIB3"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1780,
    "type": "单选",
    "q": "LTE里一个帧在时间上为多少毫秒？",
    "options": [
      {
        "label": "A",
        "text": "0.5"
      },
      {
        "label": "B",
        "text": "1"
      },
      {
        "label": "C",
        "text": "5"
      },
      {
        "label": "D",
        "text": "10"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1781,
    "type": "单选",
    "q": "LTE里一个RB包含多少个子载波？",
    "options": [
      {
        "label": "A",
        "text": "12"
      },
      {
        "label": "B",
        "text": "7"
      },
      {
        "label": "C",
        "text": "14"
      },
      {
        "label": "D",
        "text": "10"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1782,
    "type": "单选",
    "q": "PBCH的周期为多少？",
    "options": [
      {
        "label": "A",
        "text": "20"
      },
      {
        "label": "B",
        "text": "40"
      },
      {
        "label": "C",
        "text": "80"
      },
      {
        "label": "D",
        "text": "160"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1783,
    "type": "单选",
    "q": "PCFICH里的CFI为多少比特？",
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
    "id": 1784,
    "type": "单选",
    "q": "PHICH信道采用什么调制方式？",
    "options": [
      {
        "label": "A",
        "text": "BPSK"
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
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1785,
    "type": "单选",
    "q": "PCFICH的调度单位是什么",
    "options": [
      {
        "label": "A",
        "text": "RB"
      },
      {
        "label": "B",
        "text": "REG"
      },
      {
        "label": "C",
        "text": "CCE"
      },
      {
        "label": "D",
        "text": "RE"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1786,
    "type": "单选",
    "q": "PRACH的帧格式有几张？",
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
    "id": 1787,
    "type": "单选",
    "q": "LTE的最小根序列有多少个?",
    "options": [
      {
        "label": "A",
        "text": "504"
      },
      {
        "label": "B",
        "text": "838"
      },
      {
        "label": "C",
        "text": "837"
      },
      {
        "label": "D",
        "text": "503"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1788,
    "type": "单选",
    "q": "下述哪段频段不是3GPP定义E-UTRA的TDD频段（）",
    "options": [
      {
        "label": "A",
        "text": "Band211495.9MHz–1510.9MHz"
      },
      {
        "label": "B",
        "text": "Band331900MHz–1920MHz"
      },
      {
        "label": "C",
        "text": "Band342010MHz–2025MHz"
      },
      {
        "label": "D",
        "text": "Band351850MHz–1910MHz"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1789,
    "type": "单选",
    "q": "室外F频段组网采用的时隙配比为（）",
    "options": [
      {
        "label": "A",
        "text": "3:09:02"
      },
      {
        "label": "B",
        "text": "9:03:02"
      },
      {
        "label": "C",
        "text": "10:02:02"
      },
      {
        "label": "D",
        "text": "11:01:02"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1790,
    "type": "单选",
    "q": "UDC 是（）的缩写",
    "options": [
      {
        "label": "A",
        "text": "UserDataConvergence"
      },
      {
        "label": "B",
        "text": "UserDatacenter"
      },
      {
        "label": "C",
        "text": "UserDataConcept"
      },
      {
        "label": "D",
        "text": "UserDatacarrier"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1791,
    "type": "单选",
    "q": "以下哪类UE支持上行64QAM（）",
    "options": [
      {
        "label": "A",
        "text": "Category2"
      },
      {
        "label": "B",
        "text": "Category3"
      },
      {
        "label": "C",
        "text": "Category4"
      },
      {
        "label": "D",
        "text": "Category5"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1792,
    "type": "单选",
    "q": "下行控制信息(DCI: Downlink Control Information)有多种格式，用于传递不同的控制信息，其中用于传输PUSCH 调度授权信息的是（）",
    "options": [
      {
        "label": "A",
        "text": "format0"
      },
      {
        "label": "B",
        "text": "format1"
      },
      {
        "label": "C",
        "text": "format2A"
      },
      {
        "label": "D",
        "text": "format1B"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1793,
    "type": "单选",
    "q": "newdir目录非空可以用:制删除:",
    "options": [
      {
        "label": "A",
        "text": "rmnewdir"
      },
      {
        "label": "B",
        "text": "rmdirnewdir"
      },
      {
        "label": "C",
        "text": "rm-anewdir"
      },
      {
        "label": "D",
        "text": "rmdir-frnewdir"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1794,
    "type": "单选",
    "q": "停止进程号为21的进程的命令格式为:",
    "options": [
      {
        "label": "A",
        "text": "kill-p21"
      },
      {
        "label": "B",
        "text": "kill-121"
      },
      {
        "label": "C",
        "text": "kill-621"
      },
      {
        "label": "D",
        "text": "kill-921"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1795,
    "type": "单选",
    "q": "下列几种RAID模式中，磁盘输入输出效率最高的是:",
    "options": [
      {
        "label": "A",
        "text": "RAID0"
      },
      {
        "label": "B",
        "text": "RAID1"
      },
      {
        "label": "C",
        "text": "RAID5"
      },
      {
        "label": "D",
        "text": "RAID6"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1796,
    "type": "单选",
    "q": "以数据库超级管理员的身份连接到一个用户名system、密码oracle、名称为lteomc的数据库的命令为:",
    "options": [
      {
        "label": "A",
        "text": "sqlplussystem/oracle@lteomcassysdba"
      },
      {
        "label": "B",
        "text": "sqlplussys/oracle@lteomcasdba"
      },
      {
        "label": "C",
        "text": "sqlplussystem：oracle@lteomcassysdba"
      },
      {
        "label": "D",
        "text": "sqlplussys：oracle@lteomcasdba"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1797,
    "type": "单选",
    "q": "创建数据库实例时，需要修改日期格式为:",
    "options": [
      {
        "label": "A",
        "text": "YYYY-MM-DDHH24:MI:SS"
      },
      {
        "label": "B",
        "text": "MM-DD-YYYYHH24:MI:SS"
      },
      {
        "label": "C",
        "text": "DD-MM-YYYYHH24:MI:SS"
      },
      {
        "label": "D",
        "text": "MM-DD-YYYYHH:MI:SS"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1798,
    "type": "单选",
    "q": "在链路预算表中，RLC rate 与MAC rate的关系是:",
    "options": [
      {
        "label": "A",
        "text": "RLCrate=MACrate×90%"
      },
      {
        "label": "B",
        "text": "RLCrate=MACrate×80%"
      },
      {
        "label": "C",
        "text": "RLCrate=MACrate×70%"
      },
      {
        "label": "D",
        "text": "RLCrate=MACrate×60%"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1799,
    "type": "单选",
    "q": "室内馈线走线架应可靠接地，当走线架较长时，推荐每:用多股铜线接地一次接地线径不小于:mm2:",
    "options": [
      {
        "label": "A",
        "text": "535"
      },
      {
        "label": "B",
        "text": "235"
      },
      {
        "label": "C",
        "text": "516"
      },
      {
        "label": "D",
        "text": "216"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1800,
    "type": "单选",
    "q": "用于安装ZXSDR BBU的机房接地电阻应____",
    "options": [
      {
        "label": "A",
        "text": "≤5Ω，"
      },
      {
        "label": "B",
        "text": "≤10Ω，"
      },
      {
        "label": "C",
        "text": "＜5Ω,"
      },
      {
        "label": "D",
        "text": "＜10Ω"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1801,
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
        "text": "cellIDgroup号的检测"
      },
      {
        "label": "D",
        "text": "所属cellIDgroup中的三种cellid的检测"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1802,
    "type": "单选",
    "q": "在UE执行TA update时，HSS通过哪条消息将用户签约数据下发给MME（）",
    "options": [
      {
        "label": "A",
        "text": "InsertSubscriberdata"
      },
      {
        "label": "B",
        "text": "UpdateLocationanswer"
      },
      {
        "label": "C",
        "text": "Modifybearerrequest"
      },
      {
        "label": "D",
        "text": "CreatesessionRequest"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1803,
    "type": "单选",
    "q": "对LTE业务模型说法正确的是",
    "options": [
      {
        "label": "A",
        "text": "VOIP优先级最高"
      },
      {
        "label": "B",
        "text": "FTP优先级最高"
      },
      {
        "label": "C",
        "text": "ConversationalStream优先级最高"
      },
      {
        "label": "D",
        "text": "各业务优先级一样"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1804,
    "type": "单选",
    "q": "LTE Voice的Qos控制流程与以下哪个网元无关（）",
    "options": [
      {
        "label": "A",
        "text": "SCCAS"
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
        "text": "P-CSCF"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1805,
    "type": "单选",
    "q": "对于帧结构类型2，PSS将被映射到子帧1和子帧6的第几个OFDM符号上",
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
    "id": 1806,
    "type": "单选",
    "q": "在3GPP技术规范中，LTE系统频谱效率应达到R6HSDPA的",
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
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1807,
    "type": "单选",
    "q": "UBPM板的RUN灯以2HZ的频率闪烁表示____",
    "options": [
      {
        "label": "A",
        "text": "单板处于复位状态"
      },
      {
        "label": "B",
        "text": "单板运行，状态正常"
      },
      {
        "label": "C",
        "text": "单板下载软件"
      },
      {
        "label": "D",
        "text": "单板无法上电"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1808,
    "type": "单选",
    "q": "UBPM单板与RRU接口的光口速率是____",
    "options": [
      {
        "label": "A",
        "text": "155M"
      },
      {
        "label": "B",
        "text": "1.025G"
      },
      {
        "label": "C",
        "text": "3.072G"
      },
      {
        "label": "D",
        "text": "5G"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1809,
    "type": "单选",
    "q": "关于ZXSDRB8300系统CC单板外部接口关系描述错误的是",
    "options": [
      {
        "label": "A",
        "text": "TX/RX是S1/X2接口"
      },
      {
        "label": "B",
        "text": "ETH0和TX/RX接口不能同时使用"
      },
      {
        "label": "C",
        "text": "TX/RX接口为基带-射频接口"
      },
      {
        "label": "D",
        "text": "CC单板中EXT是GPS时钟出口。"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1810,
    "type": "单选",
    "q": "系统使用GPS作为时钟源时，要求GPS最少能够捕获几个星____",
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
    "id": 1811,
    "type": "单选",
    "q": "以下关于SU-MIMO效果说法正确的有____",
    "options": [
      {
        "label": "A",
        "text": "它只能实现小区吞吐量翻番，对单UE吞吐量没有影响"
      },
      {
        "label": "B",
        "text": "它只能实现单UE吞吐量翻番，对小区吞吐量无影响"
      },
      {
        "label": "C",
        "text": "它能同时实现单UE和小区吞吐量翻番"
      },
      {
        "label": "D",
        "text": "和MU-MIMO的效果基本一样"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1812,
    "type": "单选",
    "q": "对于走廊等空间封闭场景，则要求LTE两路天馈系统的天线间距大于 _",
    "options": [
      {
        "label": "A",
        "text": "15λ"
      },
      {
        "label": "B",
        "text": "10λ"
      },
      {
        "label": "C",
        "text": "4λ"
      },
      {
        "label": "D",
        "text": "λ"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1813,
    "type": "单选",
    "q": "每个小区有多少个前导序列__",
    "options": [
      {
        "label": "A",
        "text": "A、60"
      },
      {
        "label": "B",
        "text": "B、64"
      },
      {
        "label": "C",
        "text": "C、4"
      },
      {
        "label": "D",
        "text": "D、56"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1814,
    "type": "单选",
    "q": "PRACH在频域上占用__个RB。__",
    "options": [
      {
        "label": "A",
        "text": "A、3"
      },
      {
        "label": "B",
        "text": "B、4"
      },
      {
        "label": "C",
        "text": "C、5"
      },
      {
        "label": "D",
        "text": "D、6"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1815,
    "type": "单选",
    "q": "多普勒效应引起的附加频移称为多普勒频移，若移动向远离基站方向移动，则此时因多普勒频移会造成移动台接收频率__",
    "options": [
      {
        "label": "A",
        "text": "A、偏小"
      },
      {
        "label": "B",
        "text": "B、偏大"
      },
      {
        "label": "C",
        "text": "C、不变"
      },
      {
        "label": "D",
        "text": "D、以上均有可能"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1816,
    "type": "单选",
    "q": "LTE上行使用SCFDMA技术是由于__。",
    "options": [
      {
        "label": "A",
        "text": "支持智能天线"
      },
      {
        "label": "B",
        "text": "削弱PAPR"
      },
      {
        "label": "C",
        "text": "速度比OFDMA更快"
      },
      {
        "label": "D",
        "text": "支持CDMA"
      }
    ],
    "a": "b",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1817,
    "type": "单选",
    "q": "LTE频段7，其下行频率范围为",
    "options": [
      {
        "label": "A",
        "text": "2110-2170MHz"
      },
      {
        "label": "B",
        "text": "2620-2690MHz"
      },
      {
        "label": "C",
        "text": "1805-1880MHz"
      },
      {
        "label": "D",
        "text": "875-885MHz"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1818,
    "type": "单选",
    "q": "E-UTRA系统在覆盖半径__km之内，用户吞吐量、频谱效率和移动性等性能指标必须完全满足",
    "options": [
      {
        "label": "A",
        "text": "1"
      },
      {
        "label": "B",
        "text": "5"
      },
      {
        "label": "C",
        "text": "30"
      },
      {
        "label": "D",
        "text": "100"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1819,
    "type": "单选",
    "q": "对于实时业务，E-UTRAN和UTRAN之间的切换中断时间应低于__ms",
    "options": [
      {
        "label": "A",
        "text": "5"
      },
      {
        "label": "B",
        "text": "100"
      },
      {
        "label": "C",
        "text": "300"
      },
      {
        "label": "D",
        "text": "500"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1820,
    "type": "单选",
    "q": "从驻留状态到激活状态，也就是类似于从Release6的空闲模式到CELL_DCH状态，控制面的传输延迟时间小于__ms，这个时间不包括寻呼延迟时间和NAS延迟时间",
    "options": [
      {
        "label": "A",
        "text": "5"
      },
      {
        "label": "B",
        "text": "100"
      },
      {
        "label": "C",
        "text": "300"
      },
      {
        "label": "D",
        "text": "500"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1821,
    "type": "单选",
    "q": "对于FDD，在每一个10ms中，有10个子帧可以用于下行传输，并且有__个子帧可以用于上行传输。",
    "options": [
      {
        "label": "A",
        "text": "5"
      },
      {
        "label": "B",
        "text": "10"
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
    "id": 1822,
    "type": "单选",
    "q": "下面哪条命令是查看RRU所有锁相环状态以及频点信息",
    "options": [
      {
        "label": "A",
        "text": "pms"
      },
      {
        "label": "B",
        "text": "pll"
      },
      {
        "label": "C",
        "text": "rssi"
      },
      {
        "label": "D",
        "text": "bsp"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1823,
    "type": "单选",
    "q": "开局调试时，使用LMT连接到eNB是通过CC单板上的哪个接口",
    "options": [
      {
        "label": "A",
        "text": "EXT接口"
      },
      {
        "label": "B",
        "text": "ETH1接口"
      },
      {
        "label": "C",
        "text": "ETH0接口  DTx/Rx接口"
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
    "id": 1824,
    "type": "单选",
    "q": "以下哪个模块属于RNLC系统",
    "options": [
      {
        "label": "A",
        "text": "DBS"
      },
      {
        "label": "B",
        "text": "BCM"
      },
      {
        "label": "C",
        "text": "OSS"
      },
      {
        "label": "D",
        "text": "USM"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1825,
    "type": "单选",
    "q": "发生切换时， 发生数据的反传，在一定程度上保证数据不丢包",
    "options": [
      {
        "label": "A",
        "text": "RLC"
      },
      {
        "label": "B",
        "text": "PDCP"
      },
      {
        "label": "C",
        "text": "GTPU"
      },
      {
        "label": "D",
        "text": "DMAC"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1826,
    "type": "单选",
    "q": "对数据进行安全处理的协议为",
    "options": [
      {
        "label": "A",
        "text": "RLC"
      },
      {
        "label": "B",
        "text": "PDCP"
      },
      {
        "label": "C",
        "text": "GTPU"
      },
      {
        "label": "D",
        "text": "DMAC"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1827,
    "type": "单选",
    "q": "MIB走哪条传输信道",
    "options": [
      {
        "label": "A",
        "text": "PCH"
      },
      {
        "label": "B",
        "text": "BCH"
      },
      {
        "label": "C",
        "text": "DL-SCH"
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
    "id": 1828,
    "type": "单选",
    "q": "UBPM板的RUN灯以1HZ的频率闪烁表示____",
    "options": [
      {
        "label": "A",
        "text": "单板处于复位状态"
      },
      {
        "label": "B",
        "text": "单板运行，状态正常"
      },
      {
        "label": "C",
        "text": "单板下载软件"
      },
      {
        "label": "D",
        "text": "单板无法上电"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1829,
    "type": "单选",
    "q": "SA板分别提供几个输入干结点和输入/输出干结点____",
    "options": [
      {
        "label": "A",
        "text": "4,4"
      },
      {
        "label": "B",
        "text": "6,2"
      },
      {
        "label": "C",
        "text": "2,6"
      },
      {
        "label": "D",
        "text": "3,5"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1830,
    "type": "单选",
    "q": "ZXSDRB8300支持最大 RRU的链型组网",
    "options": [
      {
        "label": "A",
        "text": "2"
      },
      {
        "label": "B",
        "text": "4"
      },
      {
        "label": "C",
        "text": "6"
      },
      {
        "label": "D",
        "text": "8"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1831,
    "type": "单选",
    "q": "关于UPB板描述错误的是",
    "options": [
      {
        "label": "A",
        "text": "UBP板完成用户面处理"
      },
      {
        "label": "B",
        "text": "UPB板提供一个维护接口"
      },
      {
        "label": "C",
        "text": "UPG板与CC板实现信令流交换"
      },
      {
        "label": "D",
        "text": "UPG板与BPG实现媒体流交换"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1832,
    "type": "单选",
    "q": "从环保考虑，LTE室内覆盖的天线口功率一般不超过 bm",
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
        "text": "43"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1833,
    "type": "单选",
    "q": "对于2.3G频段的LTE信号，7/8''馈线的100米损耗大约是 _",
    "options": [
      {
        "label": "A",
        "text": "5"
      },
      {
        "label": "B",
        "text": "7"
      },
      {
        "label": "C",
        "text": "11"
      },
      {
        "label": "D",
        "text": "12"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1834,
    "type": "单选",
    "q": "对于办公室等空间宽阔场景，则要求LTE两路天馈系统的天线间距大于 _",
    "options": [
      {
        "label": "A",
        "text": "15λ"
      },
      {
        "label": "B",
        "text": "10λ"
      },
      {
        "label": "C",
        "text": "4λ"
      },
      {
        "label": "D",
        "text": "λ"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1835,
    "type": "单选",
    "q": "在少雷电的平原地区，天馈系统中避雷针的保护角是",
    "options": [
      {
        "label": "A",
        "text": "≤30°"
      },
      {
        "label": "B",
        "text": "≤35°"
      },
      {
        "label": "C",
        "text": "≤40°"
      },
      {
        "label": "D",
        "text": "≤45°"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1836,
    "type": "单选",
    "q": "LTEANR的过程中，UE通过__信道获得邻区的GCI信息。",
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
    "id": 1837,
    "type": "单选",
    "q": "LTE协议规定的UE最大发射功率是",
    "options": [
      {
        "label": "A",
        "text": "20"
      },
      {
        "label": "B",
        "text": "23"
      },
      {
        "label": "C",
        "text": "30"
      },
      {
        "label": "D",
        "text": "23"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1838,
    "type": "单选",
    "q": "UECategory__支持最大上行调制方式64QAM。",
    "options": [
      {
        "label": "A",
        "text": "2"
      },
      {
        "label": "B",
        "text": "3"
      },
      {
        "label": "C",
        "text": "4"
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
    "id": 1839,
    "type": "单选",
    "q": "LTE组网，可以采用同频也可以采用异频，以下哪项说法是错误的__",
    "options": [
      {
        "label": "A",
        "text": "20M同频组网相对于3*10M异频组网可以更有效的利用资源，提升频谱效率"
      },
      {
        "label": "B",
        "text": "20M同频组网相对于3*10M异频组网可以提升边缘用户速率"
      },
      {
        "label": "C",
        "text": "20M同频组网相对于3*10M异频组网，小区间干扰更明显"
      },
      {
        "label": "D",
        "text": "20M同频组网相对于3*10M异频组网，算法复杂度要高"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1840,
    "type": "单选",
    "q": "在LTE制式中，传输信道使用TailBiting卷积码编码方案的有__",
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
        "text": "BCH"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1841,
    "type": "单选",
    "q": "PDCCH应具有各种可能的尺寸，分别对应CCE最大支持__的聚合度。",
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
    "id": 1842,
    "type": "单选",
    "q": "以下哪类MIMO技术能够提升传输速率",
    "options": [
      {
        "label": "A",
        "text": "接收分集"
      },
      {
        "label": "B",
        "text": "发射分集"
      },
      {
        "label": "C",
        "text": "空间复用"
      },
      {
        "label": "D",
        "text": "空分多址"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1843,
    "type": "单选",
    "q": "如果下载文件,则数据通过以下__接口传送。",
    "options": [
      {
        "label": "A",
        "text": "S1-U"
      },
      {
        "label": "B",
        "text": "S1-MME"
      },
      {
        "label": "C",
        "text": "X1"
      },
      {
        "label": "D",
        "text": "X2"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1844,
    "type": "单选",
    "q": "PDSCH资源分配时，对于20M带宽，RBGSize的取值为",
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
    "id": 1845,
    "type": "单选",
    "q": "无线信号在水面上传播比在空气中传播的损耗_____，无线信号的频率越高，在空气中传播的损耗越_____。",
    "options": [
      {
        "label": "A",
        "text": "大、大"
      },
      {
        "label": "B",
        "text": "小、小"
      },
      {
        "label": "C",
        "text": "大、小"
      },
      {
        "label": "D",
        "text": "小、大"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1846,
    "type": "单选",
    "q": "下列哪项技术的快速发展和引入使得FDMA技术能够应用到LTE系统中____",
    "options": [
      {
        "label": "A",
        "text": "快速傅立叶变换"
      },
      {
        "label": "B",
        "text": "MIMO技术"
      },
      {
        "label": "C",
        "text": "HARQ"
      },
      {
        "label": "D",
        "text": "FEC和ARQ"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1847,
    "type": "单选",
    "q": "在LTE系统协议中，eNB侧MAC层对下行数据进行处理是____",
    "options": [
      {
        "label": "A",
        "text": "编码"
      },
      {
        "label": "B",
        "text": "复用"
      },
      {
        "label": "C",
        "text": "压缩和加密、"
      },
      {
        "label": "D",
        "text": "调制"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1848,
    "type": "单选",
    "q": "当子载波宽度为7.5kHz时，每个下行时隙中有几个OFDM符号",
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
        "text": "6"
      },
      {
        "label": "D",
        "text": "7"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1849,
    "type": "单选",
    "q": "CC板REF指示灯慢闪（1.5s亮，1.5s灭）表示____",
    "options": [
      {
        "label": "A",
        "text": "表示GPS天馈正常"
      },
      {
        "label": "B",
        "text": "表示GPS天馈断路"
      },
      {
        "label": "C",
        "text": "表示GPS天馈正常但收不到卫星信号"
      },
      {
        "label": "D",
        "text": "表示GPS天线短路"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1850,
    "type": "单选",
    "q": "SA单板RUN指示灯1S闪烁一次时表示____",
    "options": [
      {
        "label": "A",
        "text": "单板处于复位状态"
      },
      {
        "label": "B",
        "text": "单板运行，状态正常"
      },
      {
        "label": "C",
        "text": "单板运行，但状态不正常"
      },
      {
        "label": "D",
        "text": "表示自检失败"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1851,
    "type": "单选",
    "q": "并柜安装的机柜，在打底孔时，必须保证相邻机柜(底座)划线模板之间留 隙",
    "options": [
      {
        "label": "A",
        "text": "10mm"
      },
      {
        "label": "B",
        "text": "5mm"
      },
      {
        "label": "C",
        "text": "15mm"
      },
      {
        "label": "D",
        "text": "2mm"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1852,
    "type": "单选",
    "q": "电源线标签分别贴在各线缆的两端，粘贴位置距离线鼻",
    "options": [
      {
        "label": "A",
        "text": "1cm"
      },
      {
        "label": "B",
        "text": "2cm"
      },
      {
        "label": "C",
        "text": "4cm"
      },
      {
        "label": "D",
        "text": "紧贴，不要距离"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1853,
    "type": "单选",
    "q": "所有的电缆都要用线扣绑扎,线扎上结与结之间的间距要均匀，一般间距取线扎直径的",
    "options": [
      {
        "label": "A",
        "text": "1倍"
      },
      {
        "label": "B",
        "text": "2~3倍"
      },
      {
        "label": "C",
        "text": "4~5倍"
      },
      {
        "label": "D",
        "text": "7~8倍"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1854,
    "type": "单选",
    "q": "下列哪一项命令不能重启Linux系统",
    "options": [
      {
        "label": "A",
        "text": "halt"
      },
      {
        "label": "B",
        "text": "init 6"
      },
      {
        "label": "C",
        "text": "shutdown -r"
      },
      {
        "label": "D",
        "text": "reboot"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1855,
    "type": "单选",
    "q": "下列几种RAID模式中，磁盘输入输出效率最高的是",
    "options": [
      {
        "label": "A",
        "text": "RAID 0"
      },
      {
        "label": "B",
        "text": "RAID 1"
      },
      {
        "label": "C",
        "text": "RAID 5"
      },
      {
        "label": "D",
        "text": "RAID 6"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1856,
    "type": "单选",
    "q": "机房内工作温度的范围是____",
    "options": [
      {
        "label": "A",
        "text": "-15 ℃～＋50 ℃"
      },
      {
        "label": "B",
        "text": "-10 ℃～＋55 ℃"
      },
      {
        "label": "C",
        "text": "-25 ℃～＋55 ℃"
      },
      {
        "label": "D",
        "text": "-35 ℃～＋50 ℃"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1857,
    "type": "单选",
    "q": "馈线的弯曲半径是其直径的多少倍____",
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
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1858,
    "type": "单选",
    "q": "同一排机架的设备面应在同一水平面，偏差不大于 m；每列设备的列头柜应在同一水平面上，偏差不大于 m",
    "options": [
      {
        "label": "A",
        "text": "3,5"
      },
      {
        "label": "B",
        "text": "5,3"
      },
      {
        "label": "C",
        "text": "3,3"
      },
      {
        "label": "D",
        "text": "5,5"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1859,
    "type": "单选",
    "q": "传输线在走线道内与电源线分开布放，直流电源线和交流电源线的间隔不得小于",
    "options": [
      {
        "label": "A",
        "text": "20mm"
      },
      {
        "label": "B",
        "text": "30mm"
      },
      {
        "label": "C",
        "text": "50mm"
      },
      {
        "label": "D",
        "text": "80mm"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1860,
    "type": "单选",
    "q": "电源线、地线从机柜顶部垂直上走线架，在走线架上每段绑扎距离约为",
    "options": [
      {
        "label": "A",
        "text": "100mm"
      },
      {
        "label": "B",
        "text": "200mm"
      },
      {
        "label": "C",
        "text": "500mm"
      },
      {
        "label": "D",
        "text": "800mm"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1861,
    "type": "单选",
    "q": "馈线走线原则描述不准确的是",
    "options": [
      {
        "label": "A",
        "text": "线缆尽量短"
      },
      {
        "label": "B",
        "text": "走线方便"
      },
      {
        "label": "C",
        "text": "尽量不要与其他设备馈线一起走线"
      },
      {
        "label": "D",
        "text": "注意不要影响建筑物美观"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1862,
    "type": "单选",
    "q": "室内馈线走线架应可靠接地，当走线架较长时，推荐每 用多股铜线接地一次接地线径不小于 mm2",
    "options": [
      {
        "label": "A",
        "text": "5      35"
      },
      {
        "label": "B",
        "text": "2      35"
      },
      {
        "label": "C",
        "text": "5      16"
      },
      {
        "label": "D",
        "text": "2     16"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1863,
    "type": "单选",
    "q": "机架（配线架、电源柜等）垂直误差超过属于严重错误",
    "options": [
      {
        "label": "A",
        "text": "1mm"
      },
      {
        "label": "B",
        "text": "2mm"
      },
      {
        "label": "C",
        "text": "3mm"
      },
      {
        "label": "D",
        "text": "4mm"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1864,
    "type": "单选",
    "q": "GPS馈线系统至少需用 张贴标签",
    "options": [
      {
        "label": "A",
        "text": "2"
      },
      {
        "label": "B",
        "text": "3"
      },
      {
        "label": "C",
        "text": "5"
      },
      {
        "label": "D",
        "text": "7"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1865,
    "type": "单选",
    "q": "野战光缆一次性弯曲时，弯曲半径最小为 线缆直径",
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
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1866,
    "type": "单选",
    "q": "RLC实体通过 _从上层接收/向上层发送RLCSDU",
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
    "id": 1867,
    "type": "单选",
    "q": "UBPM板的RUN灯以长灭表示____",
    "options": [
      {
        "label": "A",
        "text": "光口通讯正常"
      },
      {
        "label": "B",
        "text": "单板运行，状态正常"
      },
      {
        "label": "C",
        "text": "单板下载软件"
      },
      {
        "label": "D",
        "text": "单板无法上电"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1868,
    "type": "单选",
    "q": "通常要求室内走线架的高度为 宽度为",
    "options": [
      {
        "label": "A",
        "text": "2200mm，300mm"
      },
      {
        "label": "B",
        "text": "2400mm，400mm"
      },
      {
        "label": "C",
        "text": "2600mm，400mm"
      },
      {
        "label": "D",
        "text": "2800mm，450mm"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1869,
    "type": "单选",
    "q": "在工程安装中，要求机柜水平、垂直度偏差均不应超过____",
    "options": [
      {
        "label": "A",
        "text": "2mm"
      },
      {
        "label": "B",
        "text": "3mm"
      },
      {
        "label": "C",
        "text": "4mm"
      },
      {
        "label": "D",
        "text": "5mm"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1870,
    "type": "单选",
    "q": "在工程勘查中，工程勘察任务书由谁来签发____",
    "options": [
      {
        "label": "A",
        "text": "局方"
      },
      {
        "label": "B",
        "text": "商务经理"
      },
      {
        "label": "C",
        "text": "项目经理"
      },
      {
        "label": "D",
        "text": "工程设计经理"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1871,
    "type": "单选",
    "q": "Bitmap的可能长度为0，这个Bitmap第一位指示SN为 ol4096的SDU是否被正确接收解调",
    "options": [
      {
        "label": "A",
        "text": "FMS + 0"
      },
      {
        "label": "B",
        "text": "FMS + 1"
      },
      {
        "label": "C",
        "text": "FMS + 2"
      },
      {
        "label": "D",
        "text": "FMS + 3"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1872,
    "type": "单选",
    "q": "LTE上下行传输使用的最小资源单位叫做 ___",
    "options": [
      {
        "label": "A",
        "text": "PRB"
      },
      {
        "label": "B",
        "text": "RE"
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
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1873,
    "type": "单选",
    "q": "LTEFDD模式支持最多的HARQ进程数为",
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
    "id": 1874,
    "type": "单选",
    "q": "在下列地物中，那个地物的电波传播损耗最大",
    "options": [
      {
        "label": "A",
        "text": "水面"
      },
      {
        "label": "B",
        "text": "沙漠"
      },
      {
        "label": "C",
        "text": "草地"
      },
      {
        "label": "D",
        "text": "森林"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1875,
    "type": "单选",
    "q": "在定位过程中，一般要求GPS的精度值（EPE值）要小于__米。",
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
    "id": 1876,
    "type": "单选",
    "q": "关于CC板TX/RX接口描述错误的是哪一项____",
    "options": [
      {
        "label": "A",
        "text": "它是S1/X2接口"
      },
      {
        "label": "B",
        "text": "它是光接口"
      },
      {
        "label": "C",
        "text": "可选择性支持1000BASE-LX/SX或100BASE-FX"
      },
      {
        "label": "D",
        "text": "可以与ETH0同时使用"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1877,
    "type": "单选",
    "q": "关于CC板描述错误的是",
    "options": [
      {
        "label": "A",
        "text": "提供信令流和媒体流的交换平面"
      },
      {
        "label": "B",
        "text": "提供自适应以太网口"
      },
      {
        "label": "C",
        "text": "不提供干结点输入"
      },
      {
        "label": "D",
        "text": "不提供1588时钟接口"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1878,
    "type": "单选",
    "q": "以下元器件中，插入损耗最小的是____",
    "options": [
      {
        "label": "A",
        "text": "二功分"
      },
      {
        "label": "B",
        "text": "三功分"
      },
      {
        "label": "C",
        "text": "5dB耦合器"
      },
      {
        "label": "D",
        "text": "合路器"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1879,
    "type": "单选",
    "q": "LTE系统中，一个子帧有__个符号周期。",
    "options": [
      {
        "label": "A",
        "text": "5"
      },
      {
        "label": "B",
        "text": "7"
      },
      {
        "label": "C",
        "text": "10"
      },
      {
        "label": "D",
        "text": "14"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1880,
    "type": "单选",
    "q": "单端口/波束赋形的MIMO方式的天线端口为__。",
    "options": [
      {
        "label": "A",
        "text": "AP 0"
      },
      {
        "label": "B",
        "text": "AP 5"
      },
      {
        "label": "C",
        "text": "AP 0~3"
      },
      {
        "label": "D",
        "text": "AP 7"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1881,
    "type": "单选",
    "q": "某LTE终端得到了5个PRB，则为__kHz。",
    "options": [
      {
        "label": "A",
        "text": "75"
      },
      {
        "label": "B",
        "text": "500"
      },
      {
        "label": "C",
        "text": "900"
      },
      {
        "label": "D",
        "text": "1500"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1882,
    "type": "单选",
    "q": "LTE手机发照片到微博时，使用__物理信道。",
    "options": [
      {
        "label": "A",
        "text": "PBCH"
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
        "text": "PUSCH"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1883,
    "type": "单选",
    "q": "在随机接入过程中，以下哪个ID是由eNodeB分配给UE的",
    "options": [
      {
        "label": "A",
        "text": "GUTI"
      },
      {
        "label": "B",
        "text": "TMSI"
      },
      {
        "label": "C",
        "text": "C-RNTI"
      },
      {
        "label": "D",
        "text": "P地址"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1884,
    "type": "单选",
    "q": "LTE下行质量反馈信息共有__种。",
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
        "text": "16"
      },
      {
        "label": "D",
        "text": "29"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1885,
    "type": "单选",
    "q": "在下面哪个模式下，LTE手机可以执行TA更新",
    "options": [
      {
        "label": "A",
        "text": "ECM-IDLE"
      },
      {
        "label": "B",
        "text": "ECM-Connected"
      },
      {
        "label": "C",
        "text": "EMM-DEREGISTERED"
      },
      {
        "label": "D",
        "text": "URA_PCH"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1886,
    "type": "单选",
    "q": "在LTE系统架构中，没有定义下面哪个接口____",
    "options": [
      {
        "label": "A",
        "text": "A接口"
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
        "text": "X1"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1887,
    "type": "单选",
    "q": "ZXSDRB8300的CC板REF接口是____",
    "options": [
      {
        "label": "A",
        "text": "GPS天线接口"
      },
      {
        "label": "B",
        "text": "外部通信端口"
      },
      {
        "label": "C",
        "text": "时钟扩展口"
      },
      {
        "label": "D",
        "text": "调试端口"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1888,
    "type": "单选",
    "q": "当主馈线采用7/8\"或5/4\"同轴电缆时，RRU和天线之间需要采用 接",
    "options": [
      {
        "label": "A",
        "text": "射频跳线"
      },
      {
        "label": "B",
        "text": "DIN转换头"
      },
      {
        "label": "C",
        "text": "N型转换头"
      },
      {
        "label": "D",
        "text": "不需要转换"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1889,
    "type": "单选",
    "q": "以下关于LTE室内覆盖说法正确的是",
    "options": [
      {
        "label": "A",
        "text": "如果不想实现双流，可以只建设一路天馈系统"
      },
      {
        "label": "B",
        "text": "WLAN AP与LTE室分组合场景，可以和wlan天线相距0.3米"
      },
      {
        "label": "C",
        "text": "现有室分天线最高只支持2.1G频段，可以不换天线"
      },
      {
        "label": "D",
        "text": "在20平米的演示房间，只装1副天线可以使系统吞吐量达到峰值"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1890,
    "type": "单选",
    "q": "为了接收PDSCH上的数据，UE需要先解码__信道",
    "options": [
      {
        "label": "A",
        "text": "PBCH信道"
      },
      {
        "label": "B",
        "text": "PDCCH信道"
      },
      {
        "label": "C",
        "text": "PCFICH信道"
      },
      {
        "label": "D",
        "text": "PUCCH信道"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1891,
    "type": "单选",
    "q": "LTE中小区ID的数量为__",
    "options": [
      {
        "label": "A",
        "text": "504"
      },
      {
        "label": "B",
        "text": "508"
      },
      {
        "label": "C",
        "text": "510"
      },
      {
        "label": "D",
        "text": "512"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1892,
    "type": "单选",
    "q": "多天线分集技术与单天线系统直观相比并没有增加系统吞吐量，但是由于改善了性能指标从而可以通过__编码率和__重传率提高系统容量。",
    "options": [
      {
        "label": "A",
        "text": "提高,降低"
      },
      {
        "label": "B",
        "text": "提高，提高"
      },
      {
        "label": "C",
        "text": "降低，提高"
      },
      {
        "label": "D",
        "text": "降低，降低"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1893,
    "type": "单选",
    "q": "MIMO系统的极限容量和空间相关性有关，空间相关性越高，MIMO信道容量越__",
    "options": [
      {
        "label": "A",
        "text": "大"
      },
      {
        "label": "B",
        "text": "小"
      },
      {
        "label": "C",
        "text": "条件不足，无法确定"
      },
      {
        "label": "D",
        "text": "以上都错"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1894,
    "type": "单选",
    "q": "SGSN与MME之间的接口是__",
    "options": [
      {
        "label": "A",
        "text": "S1"
      },
      {
        "label": "B",
        "text": "X2"
      },
      {
        "label": "C",
        "text": "S3"
      },
      {
        "label": "D",
        "text": "Iu"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1895,
    "type": "单选",
    "q": "UE与eNB之间的接口是__",
    "options": [
      {
        "label": "A",
        "text": "UU"
      },
      {
        "label": "B",
        "text": "S1"
      },
      {
        "label": "C",
        "text": "X2"
      },
      {
        "label": "D",
        "text": "Iu"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1896,
    "type": "单选",
    "q": "不属于RRC_IDLE状态特征",
    "options": [
      {
        "label": "A",
        "text": "小区重选移动性"
      },
      {
        "label": "B",
        "text": "系统信息广播"
      },
      {
        "label": "C",
        "text": "eNB中没有存储RRC上下文"
      },
      {
        "label": "D",
        "text": "邻区测量"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1897,
    "type": "单选",
    "q": "不属于RRC_CONNECTED状态特征",
    "options": [
      {
        "label": "A",
        "text": "网络控制移动性过程，例如切换"
      },
      {
        "label": "B",
        "text": "NAS配置UE指定的DRX"
      },
      {
        "label": "C",
        "text": "邻区测量"
      },
      {
        "label": "D",
        "text": "E-UTRAN中存在UE的上下文"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1898,
    "type": "单选",
    "q": "下行链路的立即峰值数据速率在20MHz下行链路频谱分配的条件下，可以达到__Mbps（网络侧2发射天线，UE侧2接收天线条件下）",
    "options": [
      {
        "label": "A",
        "text": "20"
      },
      {
        "label": "B",
        "text": "72.4"
      },
      {
        "label": "C",
        "text": "100"
      },
      {
        "label": "D",
        "text": "150"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1899,
    "type": "单选",
    "q": "上行链路的立即峰值数据速率在20MHz上行链路频谱分配的条件下，可以达到__Mbps（UE侧一发射天线情况下）",
    "options": [
      {
        "label": "A",
        "text": "1.8"
      },
      {
        "label": "B",
        "text": "7.2"
      },
      {
        "label": "C",
        "text": "20"
      },
      {
        "label": "D",
        "text": "50"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1900,
    "type": "单选",
    "q": "从睡眠状态到激活状态，也就是类似于从Release6的CELL_PCH状态到Release6的CELL_DCH装态，控制面传输延迟时间小于__ms",
    "options": [
      {
        "label": "A",
        "text": "20"
      },
      {
        "label": "B",
        "text": "50"
      },
      {
        "label": "C",
        "text": "66.7"
      },
      {
        "label": "D",
        "text": "100"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1901,
    "type": "单选",
    "q": "由于阻挡物而产生的类似阴影效果的无线信号衰落称为",
    "options": [
      {
        "label": "A",
        "text": "多径衰落"
      },
      {
        "label": "B",
        "text": "快衰落"
      },
      {
        "label": "C",
        "text": "慢衰落"
      },
      {
        "label": "D",
        "text": "路径衰落"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1902,
    "type": "单选",
    "q": "天线增益是如何获得的",
    "options": [
      {
        "label": "A",
        "text": "在天线系统中使用功率放大器"
      },
      {
        "label": "B",
        "text": "使天线的辐射变得更集中"
      },
      {
        "label": "C",
        "text": "使用高效率的天馈线"
      },
      {
        "label": "D",
        "text": "使用低驻波比的设备"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1903,
    "type": "单选",
    "q": "TM7的diversity模式对应的DCIformat是__",
    "options": [
      {
        "label": "A",
        "text": "1"
      },
      {
        "label": "B",
        "text": "1A"
      },
      {
        "label": "C",
        "text": "2"
      },
      {
        "label": "D",
        "text": "2A"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1904,
    "type": "单选",
    "q": "RRCConnectionRequest触发以下哪个__计时器",
    "options": [
      {
        "label": "A",
        "text": "T300"
      },
      {
        "label": "B",
        "text": "T301"
      },
      {
        "label": "C",
        "text": "T304"
      },
      {
        "label": "D",
        "text": "T310"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1905,
    "type": "单选",
    "q": "下列传输模式哪个是R8协议版本不需要支持的",
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
        "text": "TM7"
      },
      {
        "label": "D",
        "text": "TM8"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1906,
    "type": "单选",
    "q": "主要用于提高小区的传输模式为__",
    "options": [
      {
        "label": "A",
        "text": "TM1"
      },
      {
        "label": "B",
        "text": "TM4"
      },
      {
        "label": "C",
        "text": "TM5"
      },
      {
        "label": "D",
        "text": "TM6"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1907,
    "type": "单选",
    "q": "TTIbundling也称为子帧捆绑，是LTE系统中一种特殊的调度方式，它是针对处于小区边缘的VoIP用户而设计的。TTIbundling仅用于__",
    "options": [
      {
        "label": "A",
        "text": "上行"
      },
      {
        "label": "B",
        "text": "下行"
      },
      {
        "label": "C",
        "text": "上下行均用"
      },
      {
        "label": "D",
        "text": "以上都不对"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1908,
    "type": "单选",
    "q": "TDD帧格式配置在那个SIB里",
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
    "id": 1909,
    "type": "单选",
    "q": "TTIbundling支持的调制方式为",
    "options": [
      {
        "label": "A",
        "text": "BPSK"
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
    "id": 1910,
    "type": "单选",
    "q": "假定小区输出总功率为46dBm，在2天线时，单天线功率是",
    "options": [
      {
        "label": "A",
        "text": "46"
      },
      {
        "label": "B",
        "text": "43"
      },
      {
        "label": "C",
        "text": "49"
      },
      {
        "label": "D",
        "text": "40"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1911,
    "type": "单选",
    "q": "在LTE中，上行功控的精度是",
    "options": [
      {
        "label": "A",
        "text": "0.5"
      },
      {
        "label": "B",
        "text": "1"
      },
      {
        "label": "C",
        "text": "1.5"
      },
      {
        "label": "D",
        "text": "2"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1912,
    "type": "单选",
    "q": "3GPP要求LTE系统每MHz上行平均用户吞吐量应达到R6HSDP",
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
    "id": 1913,
    "type": "单选",
    "q": "ZXSDRB8200L200支持最大__级RRU的链型组网。",
    "options": [
      {
        "label": "A",
        "text": "2；"
      },
      {
        "label": "B",
        "text": "4；"
      },
      {
        "label": "C",
        "text": "6；"
      },
      {
        "label": "D",
        "text": "8"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1914,
    "type": "单选",
    "q": "每个小区中有 可用的随机接入前导",
    "options": [
      {
        "label": "A",
        "text": "16"
      },
      {
        "label": "B",
        "text": "32"
      },
      {
        "label": "C",
        "text": "64"
      },
      {
        "label": "D",
        "text": "128"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1915,
    "type": "单选",
    "q": "在通信设备需要抵抗的雷电过电压类别中，不包括",
    "options": [
      {
        "label": "A",
        "text": "直击雷"
      },
      {
        "label": "B",
        "text": "感应雷"
      },
      {
        "label": "C",
        "text": "线路来波"
      },
      {
        "label": "D",
        "text": "地电位反击"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1916,
    "type": "单选",
    "q": "放在膨胀螺栓上的部件先后顺序为",
    "options": [
      {
        "label": "A",
        "text": "绝缘垫、大平垫、弹垫、螺母"
      },
      {
        "label": "B",
        "text": "大平垫、绝缘垫、弹垫、螺母"
      },
      {
        "label": "C",
        "text": "弹垫、大平垫、绝缘垫、螺母"
      },
      {
        "label": "D",
        "text": "螺母、弹垫、平垫、绝缘垫"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1917,
    "type": "单选",
    "q": "RRU在挂墙安装时，为保证设备的散热，设备距墙面应大于",
    "options": [
      {
        "label": "A",
        "text": "30mm"
      },
      {
        "label": "B",
        "text": "25mm"
      },
      {
        "label": "C",
        "text": "15mm"
      },
      {
        "label": "D",
        "text": "20mm"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1918,
    "type": "单选",
    "q": "施工中度线缆进行绑扎，应使用相应型号的扎带，线缆（束）外径越大，使用规格越大的扎带，扎带串联绑扎使用时不得超过 __根",
    "options": [
      {
        "label": "A",
        "text": "2"
      },
      {
        "label": "B",
        "text": "3"
      },
      {
        "label": "C",
        "text": "4"
      },
      {
        "label": "D",
        "text": "5"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1919,
    "type": "单选",
    "q": "用于安装ZXSDRBBU的机房接地电阻应____",
    "options": [
      {
        "label": "A",
        "text": "≤5 Ω，"
      },
      {
        "label": "B",
        "text": "≤10Ω，"
      },
      {
        "label": "C",
        "text": "＜5Ω,"
      },
      {
        "label": "D",
        "text": "＜10Ω"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1920,
    "type": "单选",
    "q": "在下行功率分配中，对于使用16QAM或64QAM的PMCH，UEPMCHEPRE与MBSFNRSEPRE的比值等于",
    "options": [
      {
        "label": "A",
        "text": "0dB"
      },
      {
        "label": "B",
        "text": "1dB"
      },
      {
        "label": "C",
        "text": "2dB"
      },
      {
        "label": "D",
        "text": "8dB"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1921,
    "type": "单选",
    "q": "下列参数中，哪个不能唯一标识一个数据库",
    "options": [
      {
        "label": "A",
        "text": "SERVICE_NAME"
      },
      {
        "label": "B",
        "text": "DB_NAME"
      },
      {
        "label": "C",
        "text": "INSTANCE_NAME"
      },
      {
        "label": "D",
        "text": "ORACLE_SID"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1922,
    "type": "单选",
    "q": "TD-LTE的上下行业务信道采用2×2天线配置时，在与TD-SCDMA覆盖距离相同的地方，TD-LTE下行流量性能比TD-SCDMAHSDPA业务性能",
    "options": [
      {
        "label": "A",
        "text": "稍好"
      },
      {
        "label": "B",
        "text": "稍差"
      },
      {
        "label": "C",
        "text": "等于"
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
    "id": 1923,
    "type": "单选",
    "q": "当子帧中CQI/PMI/RI上报与正向SR发生冲突时，哪个会被丢弃",
    "options": [
      {
        "label": "A",
        "text": "两者都不丢弃"
      },
      {
        "label": "B",
        "text": "CQI/PMI/RI上报被丢弃"
      },
      {
        "label": "C",
        "text": "正向SR被丢弃"
      },
      {
        "label": "D",
        "text": "两者都被丢弃"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1924,
    "type": "单选",
    "q": "以下无线通信系统，假设与LTE在同一个室分场景中出现，它们之间隔离度要求最高的是",
    "options": [
      {
        "label": "A",
        "text": "WCDMA"
      },
      {
        "label": "B",
        "text": "CDMA2000"
      },
      {
        "label": "C",
        "text": "WLAN"
      },
      {
        "label": "D",
        "text": "DCS"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1925,
    "type": "单选",
    "q": "关于LTE的小区间干扰抑制技术，下列说法错误的是",
    "options": [
      {
        "label": "A",
        "text": "OI是一种事后控制策略"
      },
      {
        "label": "B",
        "text": "HII是一种事前控制策略"
      },
      {
        "label": "C",
        "text": "RNTP是一种事后控制策略"
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
    "id": 1926,
    "type": "单选",
    "q": "下列选项有关路测数据说法错误的是",
    "options": [
      {
        "label": "A",
        "text": "展示了网络下行信号的电平和质量的分布状况"
      },
      {
        "label": "B",
        "text": "能比较直观地反应网络服务质量"
      },
      {
        "label": "C",
        "text": "可以反映上行信号的情况"
      },
      {
        "label": "D",
        "text": "同时能够帮助检查工程参数的正确性"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1927,
    "type": "单选",
    "q": "LTE有__个天线端口__",
    "options": [
      {
        "label": "A",
        "text": "A、3"
      },
      {
        "label": "B",
        "text": "B、4"
      },
      {
        "label": "C",
        "text": "C、5"
      },
      {
        "label": "D",
        "text": "D、6"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1928,
    "type": "单选",
    "q": "在工程设计流程中，谁有权要求变更设计内容____",
    "options": [
      {
        "label": "A",
        "text": "商务经理、"
      },
      {
        "label": "B",
        "text": "项目经理、"
      },
      {
        "label": "C",
        "text": "设计工程师、"
      },
      {
        "label": "D",
        "text": "工程督导"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1929,
    "type": "单选",
    "q": "eNB之间的接口是__",
    "options": [
      {
        "label": "A",
        "text": "UU"
      },
      {
        "label": "B",
        "text": "S1"
      },
      {
        "label": "C",
        "text": "X2"
      },
      {
        "label": "D",
        "text": "S3"
      }
    ],
    "a": "c",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1930,
    "type": "单选",
    "q": "1毫瓦与1瓦约相差多少",
    "options": [
      {
        "label": "A",
        "text": "20dB"
      },
      {
        "label": "B",
        "text": "30dB"
      },
      {
        "label": "C",
        "text": "1000dB"
      },
      {
        "label": "D",
        "text": "100dB"
      }
    ],
    "a": "b",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1931,
    "type": "单选",
    "q": "以下哪个现象不存在模拟网，而只存在于数字无线网中",
    "options": [
      {
        "label": "A",
        "text": "瑞利衰落"
      },
      {
        "label": "B",
        "text": "拥塞"
      },
      {
        "label": "C",
        "text": "快衰落"
      },
      {
        "label": "D",
        "text": "码间干扰"
      }
    ],
    "a": "d",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1932,
    "type": "单选",
    "q": "假设一个用户在一小时内分别进行了一个两分钟及一个四分钟的通话，那么他在这一小时内产生了多少话务",
    "options": [
      {
        "label": "A",
        "text": "10 millierlangs"
      },
      {
        "label": "B",
        "text": "50 millierlangs"
      },
      {
        "label": "C",
        "text": "100 millierlangs"
      },
      {
        "label": "D",
        "text": "200 millierlangs"
      }
    ],
    "a": "c",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1933,
    "type": "单选",
    "q": "无线信号在自由空间的衰落情况是 传播距离每增大一倍，信号强度减小____。",
    "options": [
      {
        "label": "A",
        "text": "2dB"
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
    "a": "c",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1934,
    "type": "单选",
    "q": "1W＝_____dBm",
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
        "text": "33"
      }
    ],
    "a": "c",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1935,
    "type": "单选",
    "q": "EvolvedUniversalTerrestrialRadioAccess(E-UTRA);RadioResourceControl(RRC);Protocolspecification的相关协议为__",
    "options": [
      {
        "label": "A",
        "text": "TS 36.311"
      },
      {
        "label": "B",
        "text": "TS 36.321"
      },
      {
        "label": "C",
        "text": "TS 36.331"
      },
      {
        "label": "D",
        "text": "TS 36.341"
      }
    ],
    "a": "c",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1936,
    "type": "单选",
    "q": "ARQ机制是 主要功能",
    "options": [
      {
        "label": "A",
        "text": "RLC AM"
      },
      {
        "label": "B",
        "text": "RLC UM"
      },
      {
        "label": "C",
        "text": "PDCP"
      },
      {
        "label": "D",
        "text": "MAC"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1937,
    "type": "单选",
    "q": "柜内线缆在走道内应顺直排放整齐，拐弯均匀、圆滑、平直，外径不大于 m的各种线缆弯曲率半径不小于 m，外径大于 m的线缆弯曲率半径不小于其外径的",
    "options": [
      {
        "label": "A",
        "text": "12,60,12,10"
      },
      {
        "label": "B",
        "text": "8,60,8,5"
      },
      {
        "label": "C",
        "text": "12,60,12,5"
      },
      {
        "label": "D",
        "text": "8,60,8,10"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1938,
    "type": "单选",
    "q": "用铁塔方式安装天线时，需要安装铁塔 铁塔一般由用户提供，铁塔的设计和安装必须满足通讯系统相关规范的要求，一般要求能够承受的风速要求是",
    "options": [
      {
        "label": "A",
        "text": "160KM/H"
      },
      {
        "label": "B",
        "text": "180KM/H"
      },
      {
        "label": "C",
        "text": "200KM/H"
      },
      {
        "label": "D",
        "text": "220KM/H"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1939,
    "type": "单选",
    "q": "检查BC8810机柜的安装时下列符合工程安装规范要求的是____",
    "options": [
      {
        "label": "A",
        "text": "机柜必须垂直安装，安装完毕后，水平、垂直度偏差均不应超过3 mm"
      },
      {
        "label": "B",
        "text": "机柜必须垂直安装，安装完毕后，水平、垂直度偏差均不应超过5 mm"
      },
      {
        "label": "C",
        "text": "机柜必须垂直安装，安装完毕后，水平、垂直度偏差均不应超过2 mm"
      },
      {
        "label": "D",
        "text": "机柜必须垂直安装，安装完毕后，水平、垂直度偏差均不应超过4 mm"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1940,
    "type": "单选",
    "q": "RNC机柜安装时，固定设备或底座的螺栓应全部正确安装，即依次按   序紧固并拧紧 紧固力矩应达到 Nm",
    "options": [
      {
        "label": "A",
        "text": "垫圈、弹垫、螺栓      45"
      },
      {
        "label": "B",
        "text": "垫圈、弹垫、螺栓      25"
      },
      {
        "label": "C",
        "text": "弹垫、垫圈、螺栓      45"
      },
      {
        "label": "D",
        "text": "弹垫、垫圈、螺栓      25"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1941,
    "type": "单选",
    "q": "通信机房承重应不小于",
    "options": [
      {
        "label": "A",
        "text": "450－600kg/m2"
      },
      {
        "label": "B",
        "text": "400－550kg/m2"
      },
      {
        "label": "C",
        "text": "550－600kg/m2"
      },
      {
        "label": "D",
        "text": "450－650kg/m2"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1942,
    "type": "单选",
    "q": "安装GPS要满足净空",
    "options": [
      {
        "label": "A",
        "text": "120°"
      },
      {
        "label": "B",
        "text": "45°"
      },
      {
        "label": "C",
        "text": "60°"
      },
      {
        "label": "D",
        "text": "90°"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1943,
    "type": "单选",
    "q": "在AtollCell表格中，“MaxPower”指的是（假设天线端口为2T2S）",
    "options": [
      {
        "label": "A",
        "text": "小区最大发射功率"
      },
      {
        "label": "B",
        "text": "基站最大发射功率"
      },
      {
        "label": "C",
        "text": "天线单通道发射功率"
      },
      {
        "label": "D",
        "text": "RS信号发射功率"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1944,
    "type": "单选",
    "q": "集中式的SON架构中,SON功能在以下哪个实现",
    "options": [
      {
        "label": "A",
        "text": "OAMBeNB"
      },
      {
        "label": "B",
        "text": "MMEDSGW"
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
    "id": 1945,
    "type": "单选",
    "q": "一条SCTP记录，最多可配置_____条SCTP流信息",
    "options": [
      {
        "label": "A",
        "text": "2"
      },
      {
        "label": "B",
        "text": "4"
      },
      {
        "label": "C",
        "text": "6"
      },
      {
        "label": "D",
        "text": "8"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1946,
    "type": "单选",
    "q": "在制作馈线接头时，要始终把至少 馈线拉直",
    "options": [
      {
        "label": "A",
        "text": "100mm"
      },
      {
        "label": "B",
        "text": "50mm"
      },
      {
        "label": "C",
        "text": "150mm"
      },
      {
        "label": "D",
        "text": "200mm"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1947,
    "type": "单选",
    "q": "静电在达到 ，器件被完全损坏",
    "options": [
      {
        "label": "A",
        "text": "800V"
      },
      {
        "label": "B",
        "text": "900V"
      },
      {
        "label": "C",
        "text": "1000V"
      },
      {
        "label": "D",
        "text": "2000V"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1948,
    "type": "单选",
    "q": "国内机房环境要求的交流电源波动范围是",
    "options": [
      {
        "label": "A",
        "text": "三相电源380V±10%、单相电源 220V±10%、直流电源－40～－48V"
      },
      {
        "label": "B",
        "text": "三相电源380V±15%、单相电源 220V±15%、直流电源－40～－48V"
      },
      {
        "label": "C",
        "text": "三相电源380V±10%、单相电源 220V±10%、直流电源－40～－57V"
      },
      {
        "label": "D",
        "text": "三相电源380V±15%、单相电源 220V±15%、直流电源－40～－57V"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1949,
    "type": "单选",
    "q": "TD-LTE产品所有线缆走线平直、整齐、无交叉，电源线和信号线分开走线，间距推荐大于",
    "options": [
      {
        "label": "A",
        "text": "50MM"
      },
      {
        "label": "B",
        "text": "80MM"
      },
      {
        "label": "C",
        "text": "100MM"
      },
      {
        "label": "D",
        "text": "120MM"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1950,
    "type": "单选",
    "q": "TD-LTE中心机房地网到机房的接地引入线的长度不宜超过",
    "options": [
      {
        "label": "A",
        "text": "10m"
      },
      {
        "label": "B",
        "text": "20m"
      },
      {
        "label": "C",
        "text": "30m"
      },
      {
        "label": "D",
        "text": "40m"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1951,
    "type": "单选",
    "q": "RRU室外抱杆安装时，抱杆直径范围是",
    "options": [
      {
        "label": "A",
        "text": "70mm~120mm"
      },
      {
        "label": "B",
        "text": "60mm~130mm"
      },
      {
        "label": "C",
        "text": "60mm~120mm"
      },
      {
        "label": "D",
        "text": "90mm~150mm"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1952,
    "type": "单选",
    "q": "对于2.3G频段的LTE信号，1/2''馈线的100米损耗大约是 _",
    "options": [
      {
        "label": "A",
        "text": "10dB"
      },
      {
        "label": "B",
        "text": "11dB"
      },
      {
        "label": "C",
        "text": "12dB"
      },
      {
        "label": "D",
        "text": "13dB"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1953,
    "type": "单选",
    "q": "用于上行调度的控制信息是哪个",
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
        "text": "DCI2B"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1954,
    "type": "单选",
    "q": "3GPP要求LTE系统每MHz下行平均用户吞吐量应达到R6HSDPA的__倍。",
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
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1955,
    "type": "单选",
    "q": "TD-LTE的上下行业务信道采用2×2天线配置时，在与TD-SCDMA覆盖距离相同的地方，TD-LTE系统上行流量性能比TD-SCDMAHSUPA业务性能",
    "options": [
      {
        "label": "A",
        "text": "稍好"
      },
      {
        "label": "B",
        "text": "稍差"
      },
      {
        "label": "C",
        "text": "等于"
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
    "id": 1956,
    "type": "单选",
    "q": "路测数据上显示的邻小区信息是",
    "options": [
      {
        "label": "A",
        "text": "路测设备可以搜索到的所有邻小区信息"
      },
      {
        "label": "B",
        "text": "是网管后台配置的邻小区信息"
      },
      {
        "label": "C",
        "text": "是导入的基站信息表中的邻小区信息"
      },
      {
        "label": "D",
        "text": "以上都不是"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1957,
    "type": "单选",
    "q": "在导入电子地图时，下面哪个不是必须的",
    "options": [
      {
        "label": "A",
        "text": "数字高程模型"
      },
      {
        "label": "B",
        "text": "EM"
      },
      {
        "label": "C",
        "text": "地物覆盖模型"
      },
      {
        "label": "D",
        "text": "OM"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1958,
    "type": "单选",
    "q": "天线增益一般常用dBd和dBi两种单位。2者之间的换算原则是 0dBd=__dBi。",
    "options": [
      {
        "label": "A",
        "text": "-2.15"
      },
      {
        "label": "B",
        "text": "0"
      },
      {
        "label": "C",
        "text": "1"
      },
      {
        "label": "D",
        "text": "2.15"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1959,
    "type": "单选",
    "q": "下列选项中，EPS中eNB与S-GW间的接口为",
    "options": [
      {
        "label": "A",
        "text": "X1"
      },
      {
        "label": "B",
        "text": "S1-MME"
      },
      {
        "label": "C",
        "text": "S1"
      },
      {
        "label": "D",
        "text": "S1-U"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1960,
    "type": "单选",
    "q": "下面哪个模块负责小区相关硬件单板和软件子系统资源协调",
    "options": [
      {
        "label": "A",
        "text": "CRM"
      },
      {
        "label": "B",
        "text": "DCM"
      },
      {
        "label": "C",
        "text": "DRM"
      },
      {
        "label": "D",
        "text": "CCM"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1961,
    "type": "单选",
    "q": "以下哪一项不属于用户面协议模块",
    "options": [
      {
        "label": "A",
        "text": "DMAC"
      },
      {
        "label": "B",
        "text": "RLC UM"
      },
      {
        "label": "C",
        "text": "PDCP"
      },
      {
        "label": "D",
        "text": "RRC"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1962,
    "type": "单选",
    "q": "以下关于切换重建立的说法正确的是",
    "options": [
      {
        "label": "A",
        "text": "RRC重建立一定会导致业务数据的丢失"
      },
      {
        "label": "B",
        "text": "RRC重建立只会重建立到源和目的小区"
      },
      {
        "label": "C",
        "text": "RRC重建立不会增加业务数据的时延"
      },
      {
        "label": "D",
        "text": "RRC重建立是UE发起的"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1963,
    "type": "单选",
    "q": "室外地排采用截面积不小于___mm2的多股铜线或40x4mm的镀锌扁钢可靠接地",
    "options": [
      {
        "label": "A",
        "text": "16"
      },
      {
        "label": "B",
        "text": "25"
      },
      {
        "label": "C",
        "text": "35"
      },
      {
        "label": "D",
        "text": "95"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1964,
    "type": "单选",
    "q": "TD-LTE产品对于年平均雷暴日小于20天的地区，接地电阻不大于 __",
    "options": [
      {
        "label": "A",
        "text": "2Ω"
      },
      {
        "label": "B",
        "text": "5Ω"
      },
      {
        "label": "C",
        "text": "1Ω"
      },
      {
        "label": "D",
        "text": "10Ω"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1965,
    "type": "单选",
    "q": "工程设计由谁发起____",
    "options": [
      {
        "label": "A",
        "text": "局方"
      },
      {
        "label": "B",
        "text": "商务经理"
      },
      {
        "label": "C",
        "text": "项目经理"
      },
      {
        "label": "D",
        "text": "工程设计经理"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1966,
    "type": "单选",
    "q": "天线安装时，定向天线下倾角与规划数据误差不大于____",
    "options": [
      {
        "label": "A",
        "text": "±5°"
      },
      {
        "label": "B",
        "text": "±3°"
      },
      {
        "label": "C",
        "text": "±1°"
      },
      {
        "label": "D",
        "text": "±0.5°"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1967,
    "type": "单选",
    "q": "选择RRU室外安装方式的原则是",
    "options": [
      {
        "label": "A",
        "text": "首选抱杆次选挂墙"
      },
      {
        "label": "B",
        "text": "首选挂墙次选机架"
      },
      {
        "label": "C",
        "text": "首选机架次选抱杆"
      },
      {
        "label": "D",
        "text": "首选挂墙次选抱杆"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1968,
    "type": "单选",
    "q": "单板不能放置在强直流磁场附近，维护台显示器的阴极射线管附近，安全距离至少为 上",
    "options": [
      {
        "label": "A",
        "text": "50mm"
      },
      {
        "label": "B",
        "text": "100mm"
      },
      {
        "label": "C",
        "text": "200mm"
      },
      {
        "label": "D",
        "text": "500mm"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1969,
    "type": "单选",
    "q": "以下的说法，不正确的是",
    "options": [
      {
        "label": "A",
        "text": "机房应远离强电场、强磁场、强电波、强热源等区域，满足机房电磁要求级别"
      },
      {
        "label": "B",
        "text": "机房抗震、防雷及承重满足机房建设要求和设备长期安全运行需要"
      },
      {
        "label": "C",
        "text": "机房环境温度和相对湿度应满足设备长期安全运行要求"
      },
      {
        "label": "D",
        "text": "机房内和户外设备相关连的其他金属结构件不作保护接地"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1970,
    "type": "单选",
    "q": "对电源线和地线颜色说法正确的是",
    "options": [
      {
        "label": "A",
        "text": "-48V电源是蓝色"
      },
      {
        "label": "B",
        "text": "-48VGND电源地是黑色"
      },
      {
        "label": "C",
        "text": "PGND保护地是黄绿色"
      },
      {
        "label": "D",
        "text": "以上说法都正确"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1971,
    "type": "单选",
    "q": "下面说法错误的是",
    "options": [
      {
        "label": "A",
        "text": "定向天线的安装方位角误差不能小于±5度，俯仰角误差也不能小于±5度，全向天线应保持垂直，误差应小于±2度"
      },
      {
        "label": "B",
        "text": "全向天线离塔体距离应保持不小于1.5 m，定向天线；、离塔体距离应不小于1m"
      },
      {
        "label": "C",
        "text": "室外防雷盒接线是一进二出，保护地线采用16M2黄绿线接到室外地排"
      },
      {
        "label": "D",
        "text": "室外走线架应每隔5米接地一次，接地铜线线径不小于16M2或40X4MM的镀锌扁钢"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1972,
    "type": "单选",
    "q": "工程中对保护地线、电源线要求错误的是",
    "options": [
      {
        "label": "A",
        "text": "线缆必须完好，不允许有外皮破损、腐蚀、毛糙等现象"
      },
      {
        "label": "B",
        "text": "线缆必须成整段，不允许中间做接头"
      },
      {
        "label": "C",
        "text": "线缆两头必须用配套规的接线端子（铜鼻子），不允许使用做头子时将部分铜线剪掉"
      },
      {
        "label": "D",
        "text": "布放时部分多余线缆可以可以做预留固定在走线架或墙上"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1973,
    "type": "单选",
    "q": "在布放尾纤时，尾纤的弯曲半径必须大于____",
    "options": [
      {
        "label": "A",
        "text": "5cm"
      },
      {
        "label": "B",
        "text": "6cm"
      },
      {
        "label": "C",
        "text": "7cm"
      },
      {
        "label": "D",
        "text": "8cm"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1974,
    "type": "单选",
    "q": "在工程勘查中，勘察任务安排由谁来执行____",
    "options": [
      {
        "label": "A",
        "text": "局方"
      },
      {
        "label": "B",
        "text": "商务经理"
      },
      {
        "label": "C",
        "text": "项目经理"
      },
      {
        "label": "D",
        "text": "工程设计经理"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1975,
    "type": "单选",
    "q": "eNodeB基站点天面要求有防雷接地地网，采用联合接地方式时，防雷接地电阻不大于",
    "options": [
      {
        "label": "A",
        "text": "1Ω"
      },
      {
        "label": "B",
        "text": "5Ω"
      },
      {
        "label": "C",
        "text": "10Ω"
      },
      {
        "label": "D",
        "text": "15Ω"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1976,
    "type": "单选",
    "q": "固定GPS馈线的馈线卡间间距应不大于",
    "options": [
      {
        "label": "A",
        "text": "0.5"
      },
      {
        "label": "B",
        "text": "0.7"
      },
      {
        "label": "C",
        "text": "1"
      },
      {
        "label": "D",
        "text": "1.2"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1977,
    "type": "单选",
    "q": "馈线和电源线进入机房是要做滴水弯，滴水弯的最低点要求低于馈线窗下沿____",
    "options": [
      {
        "label": "A",
        "text": "5-15cm"
      },
      {
        "label": "B",
        "text": "10-20cm"
      },
      {
        "label": "C",
        "text": "15-25cm"
      },
      {
        "label": "D",
        "text": "20-30cm"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1978,
    "type": "单选",
    "q": "在屋顶安装抱杆时，要求所有安装天线的抱杆垂直于地面，垂直误差应小于____",
    "options": [
      {
        "label": "A",
        "text": "1°"
      },
      {
        "label": "B",
        "text": "2°"
      },
      {
        "label": "C",
        "text": "3°"
      },
      {
        "label": "D",
        "text": "4°"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1979,
    "type": "单选",
    "q": "一般情况下在单站验证过程中Ping包的大小和时间间隔是？",
    "options": [
      {
        "label": "A",
        "text": "1500byte，2s"
      },
      {
        "label": "B",
        "text": "32byte，2s"
      },
      {
        "label": "C",
        "text": "1500byte，1s"
      },
      {
        "label": "D",
        "text": "32byte，1s"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1980,
    "type": "单选",
    "q": "MME和eNodeB之间的接口是()。",
    "options": [
      {
        "label": "A",
        "text": "S1-U"
      },
      {
        "label": "B",
        "text": "S11"
      },
      {
        "label": "C",
        "text": "S5"
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
    "id": 1981,
    "type": "单选",
    "q": "3. TDD-LTE中上下行子帧配比2:2，HARQ的ACK/NACK在第几个子帧后传输?()。",
    "options": [
      {
        "label": "A",
        "text": "6"
      },
      {
        "label": "B",
        "text": "4:07"
      },
      {
        "label": "C",
        "text": "4:06"
      },
      {
        "label": "D",
        "text": "4:06:07"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1982,
    "type": "单选",
    "q": "LTE中PRACH的配置有format0～format4共5种格式，考虑网络建设初期应用场景为城区，那么建议的配置有()。",
    "options": [
      {
        "label": "A",
        "text": "format0"
      },
      {
        "label": "B",
        "text": "format1"
      },
      {
        "label": "C",
        "text": "format3"
      },
      {
        "label": "D",
        "text": "format4"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1983,
    "type": "单选",
    "q": "以下哪个信道用于承载小区ID等系统信息，用于小区搜索过程()？",
    "options": [
      {
        "label": "A",
        "text": "PDSCH"
      },
      {
        "label": "B",
        "text": "PDCCH"
      },
      {
        "label": "C",
        "text": "SCH"
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
    "id": 1984,
    "type": "单选",
    "q": "TD-LTE的PBCH采用()种发射模式",
    "options": [
      {
        "label": "A",
        "text": "SFBC"
      },
      {
        "label": "B",
        "text": "CDDC"
      },
      {
        "label": "C",
        "text": "TSTD"
      },
      {
        "label": "D",
        "text": "FSTD"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1985,
    "type": "单选",
    "q": "以下哪个信道用于承载控制信息所在的OFDM符号的位置信息。()？",
    "options": [
      {
        "label": "A",
        "text": "PDSCH"
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
    "id": 1986,
    "type": "单选",
    "q": "WCDMA中，上行数据通过()发送",
    "options": [
      {
        "label": "A",
        "text": "UPDCH"
      },
      {
        "label": "B",
        "text": "DPDCH"
      },
      {
        "label": "C",
        "text": "HARQ"
      },
      {
        "label": "D",
        "text": "HSDPA"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1987,
    "type": "单选",
    "q": "下列传输模式中支持双流传输模式的有",
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
        "text": "TM6"
      },
      {
        "label": "D",
        "text": "TM7"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1988,
    "type": "单选",
    "q": "EMB5116 TD-LTE最多可以支持多少块BPOG()",
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
    "id": 1989,
    "type": "单选",
    "q": "下面哪种LTE下行资源调度算法可以实现最大系统容量()?",
    "options": [
      {
        "label": "A",
        "text": "多载波比例公平（MPF）调度算法"
      },
      {
        "label": "B",
        "text": "轮询调度算法（RoundRobin，RR）"
      },
      {
        "label": "C",
        "text": "最大载干比调度算法"
      },
      {
        "label": "D",
        "text": "K＆H/MPF算法"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1990,
    "type": "单选",
    "q": "单用户PUSCH最大分配的RB数是()？",
    "options": [
      {
        "label": "A",
        "text": "100"
      },
      {
        "label": "B",
        "text": "98"
      },
      {
        "label": "C",
        "text": "96"
      },
      {
        "label": "D",
        "text": "94"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1991,
    "type": "单选",
    "q": "UE检测到主同步序列x和辅同步序列y后，如何得到PCI()？",
    "options": [
      {
        "label": "A",
        "text": "没有关系"
      },
      {
        "label": "B",
        "text": "x+y"
      },
      {
        "label": "C",
        "text": "3x+y"
      },
      {
        "label": "D",
        "text": "x+3y"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1992,
    "type": "单选",
    "q": "以下哪种技术不能降低LTE小区间的干扰()?",
    "options": [
      {
        "label": "A",
        "text": "通过加扰，交织，跳频等方法使干扰随机化"
      },
      {
        "label": "B",
        "text": "利用交织多址IDMA进行多小区信息联合解调"
      },
      {
        "label": "C",
        "text": "合并不同小区的信号来降低邻小区信号的影响"
      },
      {
        "label": "D",
        "text": "干扰协调，对小区边缘可用的时频资源做一定的限制"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1993,
    "type": "单选",
    "q": "关于OFDM技术可以有效抑制无线多径信道的频率选择性衰落，以下说法正确的是()？",
    "options": [
      {
        "label": "A",
        "text": "OFDM通过把高速率数据流进行串并转换，使得每个子载波上的数据符号持续长度相对增加"
      },
      {
        "label": "B",
        "text": "OFDM的子载波间隔比较宽，这样在一个子载波内，衰落是平坦的"
      },
      {
        "label": "C",
        "text": "通过合理的子载波分配方案，可以将衰落特性不同的子载波分配给不同的用户"
      },
      {
        "label": "D",
        "text": "OFDM系统各个子载波之间存在正交性"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1994,
    "type": "单选",
    "q": "在OFDMA中为什么要使用循环前缀？",
    "options": [
      {
        "label": "A",
        "text": "为了保证符号时间为整数"
      },
      {
        "label": "B",
        "text": "为了克服多径及符号间干扰"
      },
      {
        "label": "C",
        "text": "为了保持正交性"
      },
      {
        "label": "D",
        "text": "为了OFDMA可扩展性"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1995,
    "type": "单选",
    "q": "LTE同步信号用来确保小区内UE获得下行同步，在信道中的位置和长度都固定，在频域上占用系统带宽中心位置共()个子载波。",
    "options": [
      {
        "label": "A",
        "text": "60"
      },
      {
        "label": "B",
        "text": "72"
      },
      {
        "label": "C",
        "text": "84"
      },
      {
        "label": "D",
        "text": "96"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1996,
    "type": "单选",
    "q": "eNodeB和eNodeB之间的接口是()。",
    "options": [
      {
        "label": "A",
        "text": "S1-U"
      },
      {
        "label": "B",
        "text": "X2"
      },
      {
        "label": "C",
        "text": "S5"
      },
      {
        "label": "D",
        "text": "S11"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1997,
    "type": "单选",
    "q": "在OFDM中，子载波间隔F和符号时间T的关系是？",
    "options": [
      {
        "label": "A",
        "text": "没关系"
      },
      {
        "label": "B",
        "text": "f=t"
      },
      {
        "label": "C",
        "text": "fxt=2048"
      },
      {
        "label": "D",
        "text": "f=1/t"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1998,
    "type": "单选",
    "q": "LTE如果采用室外D频段组网，目前常用时隙配置为2:1:2，特殊时隙配置为()",
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
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1999,
    "type": "单选",
    "q": "以下信道中不属于控制信道的是()。",
    "options": [
      {
        "label": "A",
        "text": "PCFICH"
      },
      {
        "label": "B",
        "text": "PDCCH"
      },
      {
        "label": "C",
        "text": "PUSCH"
      },
      {
        "label": "D",
        "text": "PBCH"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 2000,
    "type": "单选",
    "q": "PCCH的寻呼信息中()带有用户信息(UE-Identity).",
    "options": [
      {
        "label": "A",
        "text": "IMEI"
      },
      {
        "label": "B",
        "text": "IMSI"
      },
      {
        "label": "C",
        "text": "TMSI"
      },
      {
        "label": "D",
        "text": "MSISDN"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 2001,
    "type": "单选",
    "q": "由于阻挡物而产生的类似阴影效果的无线信号衰落称为()",
    "options": [
      {
        "label": "A",
        "text": "快衰弱"
      },
      {
        "label": "B",
        "text": "慢衰弱"
      },
      {
        "label": "C",
        "text": "多径衰弱"
      },
      {
        "label": "D",
        "text": "路径衰弱"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 2002,
    "type": "单选",
    "q": "天线水平半功率角指天线的辐射图中低于峰值()dB处所成夹角的宽度。",
    "options": [
      {
        "label": "A",
        "text": "2"
      },
      {
        "label": "B",
        "text": "3"
      },
      {
        "label": "C",
        "text": "4"
      },
      {
        "label": "D",
        "text": "5"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 2003,
    "type": "单选",
    "q": "PDCP的主要功能()",
    "options": [
      {
        "label": "A",
        "text": "消息广播"
      },
      {
        "label": "B",
        "text": "逻辑信道和传输信道映射"
      },
      {
        "label": "C",
        "text": "对数据分段重组"
      },
      {
        "label": "D",
        "text": "对分组数据进行头压缩"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 2004,
    "type": "单选",
    "q": "关于LTE子帧的描述，哪个不正确？()",
    "options": [
      {
        "label": "A",
        "text": "下行常规子帧控制区域与数据区域进行频分"
      },
      {
        "label": "B",
        "text": "特殊子帧由三个特殊域组成，分别为DwPTS、GP和UpPTS"
      },
      {
        "label": "C",
        "text": "下行MBSFN专用载波子帧中不存在控制区域"
      },
      {
        "label": "D",
        "text": "上行常规子帧控制区域与数据区域进行频分"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 2005,
    "type": "单选",
    "q": "TDD-LTE中子帧长度是()",
    "options": [
      {
        "label": "A",
        "text": "0.5ms"
      },
      {
        "label": "B",
        "text": "1ms"
      },
      {
        "label": "C",
        "text": "5ms"
      },
      {
        "label": "D",
        "text": "10ms"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 2006,
    "type": "单选",
    "q": "TDD-LTE中一个半帧包含()个子帧。",
    "options": [
      {
        "label": "A",
        "text": "2"
      },
      {
        "label": "B",
        "text": "3"
      },
      {
        "label": "C",
        "text": "4"
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
    "id": 2007,
    "type": "单选",
    "q": "TDD-LTE中一个时隙包含()OFDM符号数。",
    "options": [
      {
        "label": "A",
        "text": "7"
      },
      {
        "label": "B",
        "text": "8"
      },
      {
        "label": "C",
        "text": "9"
      },
      {
        "label": "D",
        "text": "10"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 2008,
    "type": "单选",
    "q": "RB是资源分配的最小粒度，由()个RE组成。",
    "options": [
      {
        "label": "A",
        "text": "4*3"
      },
      {
        "label": "B",
        "text": "5*3"
      },
      {
        "label": "C",
        "text": "6*3"
      },
      {
        "label": "D",
        "text": "12*7"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 2009,
    "type": "单选",
    "q": "()个REG组成一个CCE（control channel elements），用于PDCCH资源分配。",
    "options": [
      {
        "label": "A",
        "text": "7"
      },
      {
        "label": "B",
        "text": "8"
      },
      {
        "label": "C",
        "text": "9"
      },
      {
        "label": "D",
        "text": "10"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 2010,
    "type": "单选",
    "q": "Master Information Block(MIB)位于系统带宽中央的()个子载波。",
    "options": [
      {
        "label": "A",
        "text": "72"
      },
      {
        "label": "B",
        "text": "64"
      },
      {
        "label": "C",
        "text": "50"
      },
      {
        "label": "D",
        "text": "80"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 2011,
    "type": "单选",
    "q": "TDD-LTE的设计目标是()",
    "options": [
      {
        "label": "A",
        "text": "高数据速率"
      },
      {
        "label": "B",
        "text": "低时延"
      },
      {
        "label": "C",
        "text": "分组优化的无线接入技术"
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
    "id": 2012,
    "type": "单选",
    "q": "X2接口是提供()之间的互相连接。",
    "options": [
      {
        "label": "A",
        "text": "eNODEB、eNODEB"
      },
      {
        "label": "B",
        "text": "eNODEEPC"
      },
      {
        "label": "C",
        "text": "eNODEB、UE"
      },
      {
        "label": "D",
        "text": "EPC、MME"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 2013,
    "type": "单选",
    "q": "物理随机接入信道是()",
    "options": [
      {
        "label": "A",
        "text": "PDCCH"
      },
      {
        "label": "B",
        "text": "PUSCH"
      },
      {
        "label": "C",
        "text": "PHICH"
      },
      {
        "label": "D",
        "text": "PRACH"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  }]

var multiOptions = [
  {
  "id": 1029,
  "type": "多选",
  "q": "SON的架构分如下几种()",
  "options": [
    {
      "label": "A",
      "text": "集中式"
    },
    {
      "label": "B",
      "text": "分布式"
    },
    {
      "label": "C",
      "text": "混合式"
    },
    {
      "label": "D",
      "text": "复合式"
    }
  ],
  "a": "ABC",
  "isStore": "false",
  "isAnswer": 0
},
  {
    "id": 1030,
    "type": "多选",
    "q": "SON提出的背景有如下几种原因()",
    "options": [
      {
        "label": "A",
        "text": "需要配置的海量数据"
      },
      {
        "label": "B",
        "text": "3种网络并存（2G,3G,LTE),使得网络更加复杂"
      },
      {
        "label": "C",
        "text": "大量的HNB的引入"
      },
      {
        "label": "D",
        "text": "人工成本的增加"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1031,
    "type": "多选",
    "q": "SIB1和所有SI消息可以在哪些信道传输？()",
    "options": [
      {
        "label": "A",
        "text": "BCCH"
      },
      {
        "label": "B",
        "text": "DL-SCH"
      },
      {
        "label": "C",
        "text": "PDSCH"
      },
      {
        "label": "D",
        "text": "PDCCH"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1032,
    "type": "多选",
    "q": "下列哪些原因会导致Ir光口的光功率过低()",
    "options": [
      {
        "label": "A",
        "text": "光纤故障"
      },
      {
        "label": "B",
        "text": "光模块故障"
      },
      {
        "label": "C",
        "text": "光模块的功率不足"
      },
      {
        "label": "D",
        "text": "光纤过长"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1033,
    "type": "多选",
    "q": "路测数据采集包括如下测试()",
    "options": [
      {
        "label": "A",
        "text": "DT测试"
      },
      {
        "label": "B",
        "text": "CQT测试"
      },
      {
        "label": "C",
        "text": "基站开通测试"
      },
      {
        "label": "D",
        "text": "传输中断测试"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1034,
    "type": "多选",
    "q": "SON自优化带来的好处()",
    "options": [
      {
        "label": "A",
        "text": "基于网络性能检测和UE的测量数据进行无线参数优化"
      },
      {
        "label": "B",
        "text": "极大的减少了人工参与"
      },
      {
        "label": "C",
        "text": "提高的系统的性能和服务质量"
      },
      {
        "label": "D",
        "text": "系统能够检测故障，自动隔离并尝试恢复"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1035,
    "type": "多选",
    "q": "邻区关系中不存在X2的场景有()",
    "options": [
      {
        "label": "A",
        "text": "目标eNB不能支持X2连接"
      },
      {
        "label": "B",
        "text": "两个eNB不在同一个网段"
      },
      {
        "label": "C",
        "text": "不同运营商直接的eNB，不允许建立X2连接"
      },
      {
        "label": "D",
        "text": "两个eNB分属不同的MME"
      }
    ],
    "a": "AC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1036,
    "type": "多选",
    "q": "以下属于符合均衡的设计目标的是()",
    "options": [
      {
        "label": "A",
        "text": "使系统内小区间负荷尽量均衡"
      },
      {
        "label": "B",
        "text": "使系统间的负荷尽量均衡"
      },
      {
        "label": "C",
        "text": "保证用户的QoS，减少拥塞造成的性能恶化"
      },
      {
        "label": "D",
        "text": "提升网络的KPI指标"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1037,
    "type": "多选",
    "q": "以下属于常用资源调度策略的是()",
    "options": [
      {
        "label": "A",
        "text": "IRC算法"
      },
      {
        "label": "B",
        "text": "RR算法"
      },
      {
        "label": "C",
        "text": "Max C/I算法"
      },
      {
        "label": "D",
        "text": "PF算法"
      }
    ],
    "a": "BCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1038,
    "type": "多选",
    "q": "当UE处于连接态时，如果要对该UE进行负荷均衡调整，可以采用的方法包括()",
    "options": [
      {
        "label": "A",
        "text": "直接释放"
      },
      {
        "label": "B",
        "text": "重定向"
      },
      {
        "label": "C",
        "text": "直接切换到邻区"
      },
      {
        "label": "D",
        "text": "释放专用承载"
      }
    ],
    "a": "BC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1039,
    "type": "多选",
    "q": "LTE系统的干扰协调包括()",
    "options": [
      {
        "label": "A",
        "text": "功率域协调"
      },
      {
        "label": "B",
        "text": "频率域协调"
      },
      {
        "label": "C",
        "text": "码域协调"
      },
      {
        "label": "D",
        "text": "空域协调"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1040,
    "type": "多选",
    "q": "LTE系统内触发移动性切换的测量报告事件包括()",
    "options": [
      {
        "label": "A",
        "text": "A3事件"
      },
      {
        "label": "B",
        "text": "A1事件"
      },
      {
        "label": "C",
        "text": "A4事件"
      },
      {
        "label": "D",
        "text": "A5事件"
      }
    ],
    "a": "ACD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1041,
    "type": "多选",
    "q": "LTE系统内负载均衡包括场景()",
    "options": [
      {
        "label": "A",
        "text": "重叠覆盖场景"
      },
      {
        "label": "B",
        "text": "交叠覆盖场景"
      },
      {
        "label": "C",
        "text": "不存在覆盖交叠关系的邻小区之间"
      },
      {
        "label": "D",
        "text": "无所谓"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1042,
    "type": "多选",
    "q": "LTE切换类型包括()",
    "options": [
      {
        "label": "A",
        "text": "同频切换"
      },
      {
        "label": "B",
        "text": "异频切换"
      },
      {
        "label": "C",
        "text": "负荷均衡原因触发的切换"
      },
      {
        "label": "D",
        "text": "重定向"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1043,
    "type": "多选",
    "q": "LTE系统中可以进行上行开环功率控制的信道是()",
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
        "text": "SRS"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1044,
    "type": "多选",
    "q": "如下对静态干扰协调与半静态干扰协调的描述正确的有()",
    "options": [
      {
        "label": "A",
        "text": "静态干扰协调采用事先分配预先规划等方式实现小区间干扰协调"
      },
      {
        "label": "B",
        "text": "静态干扰协调不需要X2口的负载信息交互支持"
      },
      {
        "label": "C",
        "text": "半静态干扰协调必须依赖小区之间的负载信息资源分配限制/协调信息的交互"
      },
      {
        "label": "D",
        "text": "静态干扰协调固定为每个小区的边缘用户分配相互正交的资源"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1045,
    "type": "多选",
    "q": "无线网络规划阶段，对无线参数进行初步的规划，主要包括()",
    "options": [
      {
        "label": "A",
        "text": "频率规划"
      },
      {
        "label": "B",
        "text": "码资源规划"
      },
      {
        "label": "C",
        "text": "邻区规划"
      },
      {
        "label": "D",
        "text": "参数规划"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1046,
    "type": "多选",
    "q": "哪些属于ICIC的干扰抑制技术()",
    "options": [
      {
        "label": "A",
        "text": "加扰"
      },
      {
        "label": "B",
        "text": "交织"
      },
      {
        "label": "C",
        "text": "波束赋形"
      },
      {
        "label": "D",
        "text": "IRC"
      }
    ],
    "a": "CD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1047,
    "type": "多选",
    "q": "小区物理ID由哪些参数决定()",
    "options": [
      {
        "label": "A",
        "text": "PSS"
      },
      {
        "label": "B",
        "text": "SSS"
      },
      {
        "label": "C",
        "text": "CRS"
      },
      {
        "label": "D",
        "text": "DRS"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1048,
    "type": "多选",
    "q": "LTE中有哪些上行物理信道()",
    "options": [
      {
        "label": "A",
        "text": "PRACH"
      },
      {
        "label": "B",
        "text": "PUSCH"
      },
      {
        "label": "C",
        "text": "PUCCH"
      },
      {
        "label": "D",
        "text": "PCIFCH"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1049,
    "type": "多选",
    "q": "你认为以下哪几个场景容易产生导频污染？()",
    "options": [
      {
        "label": "A",
        "text": "高架桥或者高层建筑"
      },
      {
        "label": "B",
        "text": "城中村"
      },
      {
        "label": "C",
        "text": "十字路口"
      },
      {
        "label": "D",
        "text": "水面桥面"
      }
    ],
    "a": "ACD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1050,
    "type": "多选",
    "q": "RF优化流程包括以下哪几部分工作？()",
    "options": [
      {
        "label": "A",
        "text": "测试准备"
      },
      {
        "label": "B",
        "text": "数据采集"
      },
      {
        "label": "C",
        "text": "问题分析及定位"
      },
      {
        "label": "D",
        "text": "优化调整及验证"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1051,
    "type": "多选",
    "q": "无线电波传播的主要形式()",
    "options": [
      {
        "label": "A",
        "text": "直射波"
      },
      {
        "label": "B",
        "text": "反射波"
      },
      {
        "label": "C",
        "text": "绕射波"
      },
      {
        "label": "D",
        "text": "散射波"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1052,
    "type": "多选",
    "q": "调整天线下倾角可以改变()",
    "options": [
      {
        "label": "A",
        "text": "发射功率"
      },
      {
        "label": "B",
        "text": "覆盖半径"
      },
      {
        "label": "C",
        "text": "干扰水平"
      },
      {
        "label": "D",
        "text": "基站接收灵敏度"
      }
    ],
    "a": "BC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1053,
    "type": "多选",
    "q": "数据分析是复杂的过程，需要综合分析()来进行。",
    "options": [
      {
        "label": "A",
        "text": "话务统计数据"
      },
      {
        "label": "B",
        "text": "DT/CQT数据"
      },
      {
        "label": "C",
        "text": "用户申诉数据"
      },
      {
        "label": "D",
        "text": "信令跟踪数据"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1054,
    "type": "多选",
    "q": "室内覆盖功率分配应用的器件主要有下列哪些器件？()",
    "options": [
      {
        "label": "A",
        "text": "耦合器"
      },
      {
        "label": "B",
        "text": "功分器"
      },
      {
        "label": "C",
        "text": "天线"
      },
      {
        "label": "D",
        "text": "合路器"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1055,
    "type": "多选",
    "q": "LTE支持两种RRC状态(AB)()",
    "options": [
      {
        "label": "A",
        "text": "RRC_IDLE"
      },
      {
        "label": "B",
        "text": "RRC_CONNECTED"
      },
      {
        "label": "C",
        "text": "RRC_Disconnect"
      },
      {
        "label": "D",
        "text": "RRC_Connection Request"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1056,
    "type": "多选",
    "q": "EPS移动性管理状态包括()",
    "options": [
      {
        "label": "A",
        "text": "EMM-DEREGISTERED"
      },
      {
        "label": "B",
        "text": "EMM-REGISTERED"
      },
      {
        "label": "C",
        "text": "ECM-IDLE"
      },
      {
        "label": "D",
        "text": "ECM-CONNECTED"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1057,
    "type": "多选",
    "q": "LTE中特殊子帧包含()时隙。",
    "options": [
      {
        "label": "A",
        "text": "DwPTS"
      },
      {
        "label": "B",
        "text": "GP"
      },
      {
        "label": "C",
        "text": "UpPTS"
      },
      {
        "label": "D",
        "text": "CP"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1058,
    "type": "多选",
    "q": "TD-LTE系统消息承载E-UTRA邻区的是()",
    "options": [
      {
        "label": "A",
        "text": "SIB4"
      },
      {
        "label": "B",
        "text": "SIB5"
      },
      {
        "label": "C",
        "text": "SIB6"
      },
      {
        "label": "D",
        "text": "SIB7"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1059,
    "type": "多选",
    "q": "4G附着跟3G附着的区别有()",
    "options": [
      {
        "label": "A",
        "text": "EPS在附着过程中会建立默认承载"
      },
      {
        "label": "B",
        "text": "UE在附着流程中上报的临时标识不同"
      },
      {
        "label": "C",
        "text": "QoS协商机制不同"
      },
      {
        "label": "D",
        "text": "APN域名的解析格式不同"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1060,
    "type": "多选",
    "q": "CSFB对下列哪些核心网网元有特殊要求？()",
    "options": [
      {
        "label": "A",
        "text": "SGW"
      },
      {
        "label": "B",
        "text": "MSCS"
      },
      {
        "label": "C",
        "text": "MME"
      },
      {
        "label": "D",
        "text": "PGW"
      }
    ],
    "a": "BC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1061,
    "type": "多选",
    "q": "CSFB有哪些部署方式？()",
    "options": [
      {
        "label": "A",
        "text": "现网VMSCS升级"
      },
      {
        "label": "B",
        "text": "现网GMSCS升级"
      },
      {
        "label": "C",
        "text": "现网Pool中升级一个MSCS"
      },
      {
        "label": "D",
        "text": "新建一个Proxy MSC"
      }
    ],
    "a": "ACD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1062,
    "type": "多选",
    "q": "如下哪些工具可用于RRH至BBU的传输排障？()",
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
    "a": "BCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1063,
    "type": "多选",
    "q": "diameter基本协议运行在()传输协议上。",
    "options": [
      {
        "label": "A",
        "text": "SNMP"
      },
      {
        "label": "B",
        "text": "TCP"
      },
      {
        "label": "C",
        "text": "UDP"
      },
      {
        "label": "D",
        "text": "SCTP"
      }
    ],
    "a": "BD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1064,
    "type": "多选",
    "q": "关于PGW功能，以下说法正确的有()",
    "options": [
      {
        "label": "A",
        "text": "对用户数据的合法监听"
      },
      {
        "label": "B",
        "text": "在上下行数据的Qos标识"
      },
      {
        "label": "C",
        "text": "基于每个用户的DPI"
      },
      {
        "label": "D",
        "text": "DHCPV4和DHCPV6"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1065,
    "type": "多选",
    "q": "MME通过下列哪几种方法选择SGW？()",
    "options": [
      {
        "label": "A",
        "text": "通过eNB指定的方式选择"
      },
      {
        "label": "B",
        "text": "通过DNS查询的方式选择"
      },
      {
        "label": "C",
        "text": "通过MME指定配置的方式选择"
      },
      {
        "label": "D",
        "text": "通过HSS中对该UE指定配置的方式选择"
      }
    ],
    "a": "BC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1066,
    "type": "多选",
    "q": "LTE DUL 20系列产品能够用于传输的接口有()",
    "options": [
      {
        "label": "A",
        "text": "LMTa"
      },
      {
        "label": "B",
        "text": "LMTb"
      },
      {
        "label": "C",
        "text": "TNa"
      },
      {
        "label": "D",
        "text": "TNb"
      }
    ],
    "a": "CD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1067,
    "type": "多选",
    "q": "SRVCC/eSRVCC与下列哪些网元相关？()",
    "options": [
      {
        "label": "A",
        "text": "ATCF/ATGW"
      },
      {
        "label": "B",
        "text": "SCC AS"
      },
      {
        "label": "C",
        "text": "MSCS"
      },
      {
        "label": "D",
        "text": "MME"
      }
    ],
    "a": "ABCDE",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1068,
    "type": "多选",
    "q": "链路预算得到的路径损耗值为中值，实际的路径损耗在此值上下波动．为了保证一定的边缘覆盖概率（比如>75%），需要留出一定的余量，这个余量主要与电波传播的下述特性无关的是()",
    "options": [
      {
        "label": "A",
        "text": "频率选择性"
      },
      {
        "label": "B",
        "text": "快衰落"
      },
      {
        "label": "C",
        "text": "去极化现象"
      },
      {
        "label": "D",
        "text": "阴影衰落"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1069,
    "type": "多选",
    "q": "影响TD-LTE容量的主要因素有()",
    "options": [
      {
        "label": "A",
        "text": "干扰"
      },
      {
        "label": "B",
        "text": "多天线能力"
      },
      {
        "label": "C",
        "text": "时隙配比"
      },
      {
        "label": "D",
        "text": "频偏"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1070,
    "type": "多选",
    "q": "PDN 连接可以用什么表征？()",
    "options": [
      {
        "label": "A",
        "text": "IPv4"
      },
      {
        "label": "B",
        "text": "IPv6"
      },
      {
        "label": "C",
        "text": "VPN"
      },
      {
        "label": "D",
        "text": "MPLS Label"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1071,
    "type": "多选",
    "q": "能够对MO执行的操作有()",
    "options": [
      {
        "label": "A",
        "text": "新建"
      },
      {
        "label": "B",
        "text": "修改"
      },
      {
        "label": "C",
        "text": "对比"
      },
      {
        "label": "D",
        "text": "删除"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1072,
    "type": "多选",
    "q": "LTE-A采用以下哪些技术？()",
    "options": [
      {
        "label": "A",
        "text": "OFDM"
      },
      {
        "label": "B",
        "text": "SC-FDMA"
      },
      {
        "label": "C",
        "text": "MIMO"
      },
      {
        "label": "D",
        "text": "载波聚合"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1073,
    "type": "多选",
    "q": "关于MIMO，以下说法正确的是()",
    "options": [
      {
        "label": "A",
        "text": "空间复用可以提升小区吞吐率和峰值速率"
      },
      {
        "label": "B",
        "text": "空间复用在小区中心区域"
      },
      {
        "label": "C",
        "text": "上行使用虚拟MIMO"
      },
      {
        "label": "D",
        "text": "空间分集可以增加覆盖和吞吐率"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1074,
    "type": "多选",
    "q": "TDD与FDD的差别()",
    "options": [
      {
        "label": "A",
        "text": "双工模式差异：FDDTDD双工方式不同"
      },
      {
        "label": "B",
        "text": "多址方式差异：FDDTDD多址方式不同"
      },
      {
        "label": "C",
        "text": "帧结构差异：FDDTDD帧结构不同"
      },
      {
        "label": "D",
        "text": "带宽差异：FDTDD支持的带宽不同"
      }
    ],
    "a": "AC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1075,
    "type": "多选",
    "q": "以下哪些过程是LTE的物理层处理过程？()",
    "options": [
      {
        "label": "A",
        "text": "CRC循环冗余校验"
      },
      {
        "label": "B",
        "text": "信道编码"
      },
      {
        "label": "C",
        "text": "加扰"
      },
      {
        "label": "D",
        "text": "调制"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1076,
    "type": "多选",
    "q": "以下不属于多址技术的有()",
    "options": [
      {
        "label": "A",
        "text": "TDMA"
      },
      {
        "label": "B",
        "text": "FDD"
      },
      {
        "label": "C",
        "text": "CDMA"
      },
      {
        "label": "D",
        "text": "TDD"
      }
    ],
    "a": "BD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1077,
    "type": "多选",
    "q": "LTE中主要考虑的降低干扰影响的方法包括()",
    "options": [
      {
        "label": "A",
        "text": "干扰随机化"
      },
      {
        "label": "B",
        "text": "干扰协调"
      },
      {
        "label": "C",
        "text": "干扰消除"
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
    "id": 1078,
    "type": "多选",
    "q": "CRS的端口数可以为()",
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
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1079,
    "type": "多选",
    "q": "LTE系统中PDCCH的搜索空间有哪几种？()",
    "options": [
      {
        "label": "A",
        "text": "公共搜索空间"
      },
      {
        "label": "B",
        "text": "UE特定搜索空间"
      },
      {
        "label": "C",
        "text": "UE组特定搜索空间"
      },
      {
        "label": "D",
        "text": "广播搜索空间"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1080,
    "type": "多选",
    "q": "LTE系统中的UE的RRC状态包括()",
    "options": [
      {
        "label": "A",
        "text": "RRC空闲态"
      },
      {
        "label": "B",
        "text": "RRC繁忙态"
      },
      {
        "label": "C",
        "text": "RRC连接态"
      },
      {
        "label": "D",
        "text": "RRC掉线态"
      }
    ],
    "a": "AC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1081,
    "type": "多选",
    "q": "下列物理信道中哪些属于LTE上行物理信道包括？()",
    "options": [
      {
        "label": "A",
        "text": "PUCCH"
      },
      {
        "label": "B",
        "text": "PRACH"
      },
      {
        "label": "C",
        "text": "PUSCH"
      },
      {
        "label": "D",
        "text": "PBCH"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1082,
    "type": "多选",
    "q": "LTE系统中，下列哪些PUCCH格式可用于传输周期CSI？()",
    "options": [
      {
        "label": "A",
        "text": "PUCCH format 1"
      },
      {
        "label": "B",
        "text": "PUCCH format 2"
      },
      {
        "label": "C",
        "text": "PUCCH format 2a"
      },
      {
        "label": "D",
        "text": "PUCCH format 1a"
      }
    ],
    "a": "BC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1083,
    "type": "多选",
    "q": "GBR/Non-GBR bearerQCI描述正确的有()",
    "options": [
      {
        "label": "A",
        "text": "default-bearer一定是Non-GBR bearer"
      },
      {
        "label": "B",
        "text": "delicated bearer一定是GBR bearer"
      },
      {
        "label": "C",
        "text": "Non-GBR bearer 可以对应QCI 16789"
      },
      {
        "label": "D",
        "text": "QCI 2345一定是delicated-bearer"
      }
    ],
    "a": "ACD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1084,
    "type": "多选",
    "q": "PCRF可以通过以下哪些消息下发PCC规则？()",
    "options": [
      {
        "label": "A",
        "text": "CCR"
      },
      {
        "label": "B",
        "text": "CCA"
      },
      {
        "label": "C",
        "text": "RAR"
      },
      {
        "label": "D",
        "text": "RAA"
      }
    ],
    "a": "BC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1085,
    "type": "多选",
    "q": "Diameter信令网的寻址方式有()",
    "options": [
      {
        "label": "A",
        "text": "PC"
      },
      {
        "label": "B",
        "text": "IP address"
      },
      {
        "label": "C",
        "text": "Relay"
      },
      {
        "label": "D",
        "text": "Proxy"
      }
    ],
    "a": "CD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1086,
    "type": "多选",
    "q": "一个PDN Connection 由哪些参数来确定？()",
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
        "text": "EPG"
      },
      {
        "label": "D",
        "text": "PDN APN"
      }
    ],
    "a": "AD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1087,
    "type": "多选",
    "q": "LTE DUL 21系列产品RI口的传输能力有()",
    "options": [
      {
        "label": "A",
        "text": "2.5Gbps"
      },
      {
        "label": "B",
        "text": "5Gbps"
      },
      {
        "label": "C",
        "text": "7.5Gbps"
      },
      {
        "label": "D",
        "text": "10Gbps"
      }
    ],
    "a": "AD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1088,
    "type": "多选",
    "q": "下列哪些项是属于 PDC？()",
    "options": [
      {
        "label": "A",
        "text": "PDC collection"
      },
      {
        "label": "B",
        "text": "PDC Parsing"
      },
      {
        "label": "C",
        "text": "PDC Pakaging"
      },
      {
        "label": "D",
        "text": "PDC Compression"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1089,
    "type": "多选",
    "q": "下列哪些信息不会出现在PDP关联的追踪里面？()",
    "options": [
      {
        "label": "A",
        "text": "Internal state-machine transitions"
      },
      {
        "label": "B",
        "text": "Radius server configuration"
      },
      {
        "label": "C",
        "text": "UE type"
      },
      {
        "label": "D",
        "text": "Charging info"
      }
    ],
    "a": "BCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1090,
    "type": "多选",
    "q": "eNB日常维护主要包括以下哪几种？()",
    "options": [
      {
        "label": "A",
        "text": "网管告警的观察和整理"
      },
      {
        "label": "B",
        "text": "eNB指示灯的观察"
      },
      {
        "label": "C",
        "text": "软件升级"
      },
      {
        "label": "D",
        "text": "日常清洁"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1091,
    "type": "多选",
    "q": "以下是LTE系统中网元的有()",
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
        "text": "MME"
      },
      {
        "label": "D",
        "text": "PCRF"
      }
    ],
    "a": "BCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1092,
    "type": "多选",
    "q": "关于PGW的数据配置哪些说法是错误的？()",
    "options": [
      {
        "label": "A",
        "text": "不可以配置与APN对应的地址池用于动态分配用户地址"
      },
      {
        "label": "B",
        "text": "SGW与PGW可以合设"
      },
      {
        "label": "C",
        "text": "只能配置1个相连接的PCRF"
      },
      {
        "label": "D",
        "text": "PGW不能独立部署"
      }
    ],
    "a": "ACD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1093,
    "type": "多选",
    "q": "如果GGSN和PGW同时在MPG节点上实现， 那么CDR类型必须是()",
    "options": [
      {
        "label": "A",
        "text": "R6"
      },
      {
        "label": "B",
        "text": "R8"
      },
      {
        "label": "C",
        "text": "R7"
      },
      {
        "label": "D",
        "text": "R9"
      }
    ],
    "a": "AC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1094,
    "type": "多选",
    "q": "以下哪些属于虚拟HLR或虚拟HSS的功能？()",
    "options": [
      {
        "label": "A",
        "text": "支持分用户号段配置局数据,不同的管理员可管理不同的用户号段"
      },
      {
        "label": "B",
        "text": "HLR/HSS融合设备可以为各个虚拟HSS配置BOSS操作用户及其权限"
      },
      {
        "label": "C",
        "text": "可独立配置各个虚拟HLR或虚拟HSS的业务配置（如漫游限制VLR接入控制等）"
      },
      {
        "label": "D",
        "text": "可为各个虚拟HLR或虚拟HSS进行独立统计测量"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1095,
    "type": "多选",
    "q": "以下关于PCC的描述，正确的是()",
    "options": [
      {
        "label": "A",
        "text": "3GPP PCC架构中PCEF是策略执行实体"
      },
      {
        "label": "B",
        "text": "3GPP PCC架构中SPR是签约数据库"
      },
      {
        "label": "C",
        "text": "BBERF与PCEF之间无直接接口"
      },
      {
        "label": "D",
        "text": "AF是业务功能实体"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1096,
    "type": "多选",
    "q": "路测软件界面参数DCI，下面表述正确的是()",
    "options": [
      {
        "label": "A",
        "text": "DCI是PDCCH信道的下行控制信息，不同格式代表不同的调度控制信息"
      },
      {
        "label": "B",
        "text": "Transmission Mode2时，DCI format1或1A均是发射分集"
      },
      {
        "label": "C",
        "text": "Transmission Mode3时，DCI format1A是空分复用"
      },
      {
        "label": "D",
        "text": "Transmission Mode7时，DCI format2A是发射分集"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1097,
    "type": "多选",
    "q": "TD-LTE路测指标中的掉线率指标表述正确的是()",
    "options": [
      {
        "label": "A",
        "text": "掉线率=掉线次数/成功完成连接建立次数"
      },
      {
        "label": "B",
        "text": "掉线指：在终端正常进行数据传送过程中数据传送发生异常中断，包括RRC连接异常中断或数据速率降为0并持续5秒"
      },
      {
        "label": "C",
        "text": "掉线率指业务进行过程中发生业务异常中断的概率，即异常中断的次数与总业务进行次数之比"
      },
      {
        "label": "D",
        "text": "掉线是指在手机没主发Disconnect信令或没收到网络下发Disconnect/Release信令情况下，手机回到idle 状态，则视为一次掉话"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1098,
    "type": "多选",
    "q": "以下说法正确的有()",
    "options": [
      {
        "label": "A",
        "text": "OMC应用服务器程序JBOSS，负责完成各类事务和数据处理"
      },
      {
        "label": "B",
        "text": "NMA，北向网管代理，完成与上级网管的协议和对象模型转换"
      },
      {
        "label": "C",
        "text": "FTP服务器，完成OMC与所管网元间的配置告警性能文件传递"
      },
      {
        "label": "D",
        "text": "OMC服务器端必须配置有jbosswebstartDHCP等模块"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1099,
    "type": "多选",
    "q": "PUSCH支持的上报模式包括()",
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
        "text": "开环空间复用"
      },
      {
        "label": "D",
        "text": "闭环空间复用"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1100,
    "type": "多选",
    "q": "LTE上行实现半静态或动态频率重用方案的指示()",
    "options": [
      {
        "label": "A",
        "text": "HII（High Interference Indicator）"
      },
      {
        "label": "B",
        "text": "TLI（Traffic Load Indicator）"
      },
      {
        "label": "C",
        "text": "LB（Load Blance）"
      },
      {
        "label": "D",
        "text": "OI（Overload Indicator）"
      }
    ],
    "a": "AD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1101,
    "type": "多选",
    "q": "LTE定时同步包括()",
    "options": [
      {
        "label": "A",
        "text": "无线链路监测（Radio link monitoring）"
      },
      {
        "label": "B",
        "text": "小区间同步（Inter-cell synchronisation）"
      },
      {
        "label": "C",
        "text": "发射定时调整（Transmission timing adjustment）"
      },
      {
        "label": "D",
        "text": "以上都不对"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1102,
    "type": "多选",
    "q": "为有效支持LocalizedDistributed和MIMIO传输，E-UTRA支持的CQI报告包括()",
    "options": [
      {
        "label": "A",
        "text": "窄带类型"
      },
      {
        "label": "B",
        "text": "宽带类型"
      },
      {
        "label": "C",
        "text": "多频带类型"
      },
      {
        "label": "D",
        "text": "MIMO类型"
      }
    ],
    "a": "BCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1103,
    "type": "多选",
    "q": "下面哪种场景可以使用TTI bundling？()",
    "options": [
      {
        "label": "A",
        "text": "对于覆盖面积大的小区中处于小区边缘的用户最好是使用TTI Bundling"
      },
      {
        "label": "B",
        "text": "如果UE的RSRQ和RSRP都很低，则最好是使用TTI Bundling"
      },
      {
        "label": "C",
        "text": "如果SRS的SINR很低，则最好是使用TTI Bundling"
      },
      {
        "label": "D",
        "text": "如果UE的RSRQRSRP和SRS的SINR都很低，则最好是使用TTI Bundling"
      }
    ],
    "a": "ABCDE",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1104,
    "type": "多选",
    "q": "ICIC技术就是在相邻小区之间进行协调，以避免或降低ICI。这种“协调”实际上是通过在小区边缘采用小区频率复用方法实现的，可分为()",
    "options": [
      {
        "label": "A",
        "text": "软频率复用"
      },
      {
        "label": "B",
        "text": "同心圆"
      },
      {
        "label": "C",
        "text": "部分频率复用"
      },
      {
        "label": "D",
        "text": "一般频率复用"
      }
    ],
    "a": "AC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1105,
    "type": "多选",
    "q": "为了减少小区间的干扰，在PUSHC的功控方案中使用的是()",
    "options": [
      {
        "label": "A",
        "text": "部分路损补偿"
      },
      {
        "label": "B",
        "text": "开环功控"
      },
      {
        "label": "C",
        "text": "闭环功控"
      },
      {
        "label": "D",
        "text": "全部路损补偿"
      }
    ],
    "a": "AC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1106,
    "type": "多选",
    "q": "E-UTRA小区搜索基于()完成。",
    "options": [
      {
        "label": "A",
        "text": "主同步信号"
      },
      {
        "label": "B",
        "text": "辅同步信号"
      },
      {
        "label": "C",
        "text": "下行参考信号"
      },
      {
        "label": "D",
        "text": "PBCH信号"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1107,
    "type": "多选",
    "q": "TAI的组成有()",
    "options": [
      {
        "label": "A",
        "text": "MCC"
      },
      {
        "label": "B",
        "text": "MNC"
      },
      {
        "label": "C",
        "text": "TAC"
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
    "id": 1108,
    "type": "多选",
    "q": "TAU根据UE状态不同可分为()",
    "options": [
      {
        "label": "A",
        "text": "空闲态TAU"
      },
      {
        "label": "B",
        "text": "连接态TAU"
      },
      {
        "label": "C",
        "text": "非联合TAU(更新TAI LIST)"
      },
      {
        "label": "D",
        "text": "联合TAU(更新TAI LIST+LAU)"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1109,
    "type": "多选",
    "q": "LTE网络接口主要有()",
    "options": [
      {
        "label": "A",
        "text": "S1接口"
      },
      {
        "label": "B",
        "text": "X2接口"
      },
      {
        "label": "C",
        "text": "Uu接口"
      },
      {
        "label": "D",
        "text": "Iub接口"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1110,
    "type": "多选",
    "q": "下行功率分配方式有()",
    "options": [
      {
        "label": "A",
        "text": "静态"
      },
      {
        "label": "B",
        "text": "动态"
      },
      {
        "label": "C",
        "text": "半静态"
      },
      {
        "label": "D",
        "text": "半动态"
      }
    ],
    "a": "AC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1111,
    "type": "多选",
    "q": "上行功控方案有()",
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
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1112,
    "type": "多选",
    "q": "eNB目前支持的小区带宽配置为()",
    "options": [
      {
        "label": "A",
        "text": "1.4MHz"
      },
      {
        "label": "B",
        "text": "3.0MHz"
      },
      {
        "label": "C",
        "text": "5MHz"
      },
      {
        "label": "D",
        "text": "10MHz"
      }
    ],
    "a": "DF",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1113,
    "type": "多选",
    "q": "LTE上行物信道主要有()",
    "options": [
      {
        "label": "A",
        "text": "物理上行共享信道PUSCH"
      },
      {
        "label": "B",
        "text": "物理随机接入信道PRACH"
      },
      {
        "label": "C",
        "text": "物理上行控制信道PUCCH"
      },
      {
        "label": "D",
        "text": "物理广播信道PBCH"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1114,
    "type": "多选",
    "q": "目前，国内TD-LTE使用的频段有()",
    "options": [
      {
        "label": "A",
        "text": "1880-1920MHz"
      },
      {
        "label": "B",
        "text": "2350-2370MHz"
      },
      {
        "label": "C",
        "text": "2575-2615MHz"
      },
      {
        "label": "D",
        "text": "2010-2025MHz"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1115,
    "type": "多选",
    "q": "下行覆盖中，主要关注的无线侧指标包括()",
    "options": [
      {
        "label": "A",
        "text": "RSRP"
      },
      {
        "label": "B",
        "text": "RSCP"
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
    "a": "AC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1116,
    "type": "多选",
    "q": "MIMO技术有下列哪些作用()",
    "options": [
      {
        "label": "A",
        "text": "收发分集"
      },
      {
        "label": "B",
        "text": "空间复用"
      },
      {
        "label": "C",
        "text": "波束赋型"
      },
      {
        "label": "D",
        "text": "空分多址"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1117,
    "type": "多选",
    "q": "下列哪些技术属于干扰随机化技术()",
    "options": [
      {
        "label": "A",
        "text": "加扰"
      },
      {
        "label": "B",
        "text": "跳频"
      },
      {
        "label": "C",
        "text": "交织"
      },
      {
        "label": "D",
        "text": "波束赋型"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1118,
    "type": "多选",
    "q": "以下必须在OMC应用服务器上运行的程序有()",
    "options": [
      {
        "label": "A",
        "text": "jboss"
      },
      {
        "label": "B",
        "text": "webstart"
      },
      {
        "label": "C",
        "text": "license"
      },
      {
        "label": "D",
        "text": "pc"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1119,
    "type": "多选",
    "q": "OMC客户端可以运行在以下哪些操作系统上()",
    "options": [
      {
        "label": "A",
        "text": "Windows98"
      },
      {
        "label": "B",
        "text": "WindowsXP"
      },
      {
        "label": "C",
        "text": "Windows7"
      },
      {
        "label": "D",
        "text": "Windows2000"
      }
    ],
    "a": "BCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1120,
    "type": "多选",
    "q": "以下属于eNB软件文件的有()",
    "options": [
      {
        "label": "A",
        "text": "enb_110_20121221100500+8_cdl.lgz"
      },
      {
        "label": "B",
        "text": "ENB=110_2012-12-27-11-15-07.cfg"
      },
      {
        "label": "C",
        "text": "5116TDL_V3.10.00.13.DTZ"
      },
      {
        "label": "D",
        "text": "DTRRU_V3.10.00.13.DTZ"
      }
    ],
    "a": "CD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1121,
    "type": "多选",
    "q": "增加TD-SCDMA邻区时，需增加以下哪些数据()",
    "options": [
      {
        "label": "A",
        "text": "增加EUTRA邻小区"
      },
      {
        "label": "B",
        "text": "增加邻UTRAN TDD小区"
      },
      {
        "label": "C",
        "text": "增加邻UTRAN FDD小区"
      },
      {
        "label": "D",
        "text": "增加邻小区关系"
      }
    ],
    "a": "BD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1122,
    "type": "多选",
    "q": "以下哪些参数与同频切换相关？()",
    "options": [
      {
        "label": "A",
        "text": "eventA3offset"
      },
      {
        "label": "B",
        "text": "s-Measure"
      },
      {
        "label": "C",
        "text": "hysteresis"
      },
      {
        "label": "D",
        "text": "ThreshServingLow"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1123,
    "type": "多选",
    "q": "请列出所有可支持跨系统移动性的事件()",
    "options": [
      {
        "label": "A",
        "text": "A5"
      },
      {
        "label": "B",
        "text": "A3"
      },
      {
        "label": "C",
        "text": "B2"
      },
      {
        "label": "D",
        "text": "B1"
      }
    ],
    "a": "CD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1124,
    "type": "多选",
    "q": "TD-LTE基站如果出现GPS失步，可能会出现哪些问题？()",
    "options": [
      {
        "label": "A",
        "text": "UE在GPS失步小区无法接入进行业务"
      },
      {
        "label": "B",
        "text": "UE在GPS失步小区周边的小区无法接入进行业务"
      },
      {
        "label": "C",
        "text": "UE在GPS失步小区上行速率很低"
      },
      {
        "label": "D",
        "text": "UE在GPS失步小区进行PING业务时时延较大"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1125,
    "type": "多选",
    "q": "TDLTE的UE设定为A3事件触发同频切换，则增大() 时，可以减少A3事件的触发。",
    "options": [
      {
        "label": "A",
        "text": "eventA3Offset"
      },
      {
        "label": "B",
        "text": "cellIndividualOffset_s"
      },
      {
        "label": "C",
        "text": "cellIndividualOffset_n"
      },
      {
        "label": "D",
        "text": "hysteresis"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1126,
    "type": "多选",
    "q": "BCCH中的SIB中，始终被激活的SIB有()",
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
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1127,
    "type": "多选",
    "q": "TDLTE小区参数cqiReportingModeAperiodic可以设置为()",
    "options": [
      {
        "label": "A",
        "text": "mode 10"
      },
      {
        "label": "B",
        "text": "mode 11"
      },
      {
        "label": "C",
        "text": "mode 30"
      },
      {
        "label": "D",
        "text": "mode 31"
      }
    ],
    "a": "CD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1128,
    "type": "多选",
    "q": "某路段由某站的A/B小区覆盖，整段路上RSRP在-85dBm到-70dBm左右，但切换经常掉话，以下排查方法哪些有效？()",
    "options": [
      {
        "label": "A",
        "text": "利用扫频仪测试，看是否有有本频段内其他非主覆盖小区信号（除A/B小区），尽量减少或降低非主覆盖小区的信号强度，提升主覆盖小区信号SINR"
      },
      {
        "label": "B",
        "text": "检查附近小区是否存在与本小区DL/UL配比不一致，如有则并纠正错误"
      },
      {
        "label": "C",
        "text": "检查附近基站及本基站是否存在GPS失步，如有则反馈排障"
      },
      {
        "label": "D",
        "text": "检查主覆盖小区是否与此路段信号强的邻区PCI存在MOD3相同关系"
      }
    ],
    "a": "ABCDE",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1129,
    "type": "多选",
    "q": "LTE系统消息中，以下描述正确的是()",
    "options": [
      {
        "label": "A",
        "text": "除SIB1以外，SIB2-SIB12均由SI (System Information)承载"
      },
      {
        "label": "B",
        "text": "SIB1是除MIB外最重要的系统消息，固定以20ms为周期重传4次"
      },
      {
        "label": "C",
        "text": "SIB1和所有SI消息均传输在PDSCH上"
      },
      {
        "label": "D",
        "text": "SIB1的传输通过携带SI-RNTI（SI-RNTI每个小区都是相同的）的PDCCH调度完成"
      }
    ],
    "a": "ABCDE",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1130,
    "type": "多选",
    "q": "2012年10月中国政府首次正式公布了FDD频谱规划方案，将原3G FDD规划的()和()，可作为LTE-FDD和LTE-A FDD系统使用频率。",
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
    "a": "AD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1131,
    "type": "多选",
    "q": "以下厂商中已经推出TD-LTE终端的是()",
    "options": [
      {
        "label": "A",
        "text": "苹果"
      },
      {
        "label": "B",
        "text": "三星"
      },
      {
        "label": "C",
        "text": "诺基亚"
      },
      {
        "label": "D",
        "text": "LG"
      }
    ],
    "a": "BCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1132,
    "type": "多选",
    "q": "下列哪些重大活动中使用到了TD-LTE网络技术？()",
    "options": [
      {
        "label": "A",
        "text": "2010年上海世博会"
      },
      {
        "label": "B",
        "text": "2008年北京奥运会"
      },
      {
        "label": "C",
        "text": "2013年厦门国际马拉松"
      },
      {
        "label": "D",
        "text": "2010年广州亚运会"
      }
    ],
    "a": "ACD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1133,
    "type": "多选",
    "q": "以下哪些场景适合部署微基站？()",
    "options": [
      {
        "label": "A",
        "text": "热点"
      },
      {
        "label": "B",
        "text": "盲点"
      },
      {
        "label": "C",
        "text": "住宅小区"
      },
      {
        "label": "D",
        "text": "底层商铺"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1134,
    "type": "多选",
    "q": "以下哪些城市是中移动2012年TD-LTE扩大规模试验网城市？()",
    "options": [
      {
        "label": "A",
        "text": "沈阳"
      },
      {
        "label": "B",
        "text": "广州"
      },
      {
        "label": "C",
        "text": "天津"
      },
      {
        "label": "D",
        "text": "哈尔滨"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1135,
    "type": "多选",
    "q": "相比3G系统，LTE系统设计之初，其目标和需求就非常明确，包括()",
    "options": [
      {
        "label": "A",
        "text": "显著提高峰值传输速率，如下行链路100Mbps，上行链路50Mbps"
      },
      {
        "label": "B",
        "text": "降低时延，如无线接入网的用户面时延低于10ms"
      },
      {
        "label": "C",
        "text": "显著降低控制面时延（从空闲态转换到激活态时延小于100ms）"
      },
      {
        "label": "D",
        "text": "支持灵活的系统带宽配置，支持1.4M/3M/5M/10M/15M/20M"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1136,
    "type": "多选",
    "q": "下面哪些是8天线能够获得的增益?()",
    "options": [
      {
        "label": "A",
        "text": "赋型增益"
      },
      {
        "label": "B",
        "text": "复用增益"
      },
      {
        "label": "C",
        "text": "分集增益"
      },
      {
        "label": "D",
        "text": "BC"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1137,
    "type": "多选",
    "q": "LTE的特殊时隙配置有()",
    "options": [
      {
        "label": "A",
        "text": "10:2:2"
      },
      {
        "label": "B",
        "text": "3:9:2"
      },
      {
        "label": "C",
        "text": "11:1:2"
      },
      {
        "label": "D",
        "text": "9:3:2"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1138,
    "type": "多选",
    "q": "LTE高铁场景组网面临的挑战有()",
    "options": [
      {
        "label": "A",
        "text": "速度快，小区间切换频繁"
      },
      {
        "label": "B",
        "text": "多普勒频偏效应，影响接收端解调"
      },
      {
        "label": "C",
        "text": "列车穿透损耗大，车内覆盖效果差"
      },
      {
        "label": "D",
        "text": "覆盖场景复杂多样，从城区到郊区"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1139,
    "type": "多选",
    "q": "POI的主要功能有()",
    "options": [
      {
        "label": "A",
        "text": "不同制式的手机发出的信号经POI检出后送往不同运营商的基站。"
      },
      {
        "label": "B",
        "text": "将各运营商不同频段载波信号合成后送往覆盖区域的天馈分布系统。"
      },
      {
        "label": "C",
        "text": "向综合监控提供各个输入支路的输入功率值合路输出功率值驻波比等检测数据"
      },
      {
        "label": "D",
        "text": "功率放大的作用"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1140,
    "type": "多选",
    "q": "MME的功能主要包括()",
    "options": [
      {
        "label": "A",
        "text": "寻呼消息发送"
      },
      {
        "label": "B",
        "text": "安全控制"
      },
      {
        "label": "C",
        "text": "Idle状态的移动性管理"
      },
      {
        "label": "D",
        "text": "SAE承载管理"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1141,
    "type": "多选",
    "q": "信道PDSCH可采用的传输方案有()",
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
        "text": "TM7EMU-MIMO"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1142,
    "type": "多选",
    "q": "LTE网络参数规划包括()",
    "options": [
      {
        "label": "A",
        "text": "邻区规划"
      },
      {
        "label": "B",
        "text": "PCI规划"
      },
      {
        "label": "C",
        "text": "PRACH规划"
      },
      {
        "label": "D",
        "text": "TA规划"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1143,
    "type": "多选",
    "q": "小区的覆盖半径与下列哪些因素有关？()",
    "options": [
      {
        "label": "A",
        "text": "干扰余量"
      },
      {
        "label": "B",
        "text": "工作频率"
      },
      {
        "label": "C",
        "text": "穿透损耗"
      },
      {
        "label": "D",
        "text": "天线通道数"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1144,
    "type": "多选",
    "q": "网络规划时要求尽量站址分布符合蜂窝网络结构的要求，在具体落实的时候注意以下哪几点？()",
    "options": [
      {
        "label": "A",
        "text": "不影响基站布局的情况下，视具体情况尽量选择现有设施，以减少建设成本和周期；"
      },
      {
        "label": "B",
        "text": "应避免选取对于网络性能影响较大已有的高站（站高大于70米或站高高于周边建筑物25米），并通过在周边新选址或选用多个替换站点等方式保证取消高站后的覆盖质量;"
      },
      {
        "label": "C",
        "text": "在市区楼群中选址时，可巧妙利用建筑物的高度，实现网络层次结构的划分；"
      },
      {
        "label": "D",
        "text": "避免将小区边缘设置在用户密集区，良好的覆盖是有且仅有一个主力覆盖小区。"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1145,
    "type": "多选",
    "q": "GUTI由哪几部分组成？()",
    "options": [
      {
        "label": "A",
        "text": "GUMMEI"
      },
      {
        "label": "B",
        "text": "MMEC"
      },
      {
        "label": "C",
        "text": "MSIN"
      },
      {
        "label": "D",
        "text": "M-TMSI"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1146,
    "type": "多选",
    "q": "以下不属于中移HLR/HSS建设目标方案的是()",
    "options": [
      {
        "label": "A",
        "text": "私有过渡方案"
      },
      {
        "label": "B",
        "text": "现网HLR升级/替换为HLR/HSS融合设备"
      },
      {
        "label": "C",
        "text": "现网HLR不变，新增HSS"
      },
      {
        "label": "D",
        "text": "现网HLR不变，逐用户携出到新增HLR/HSS融合设备"
      }
    ],
    "a": "ACD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1147,
    "type": "多选",
    "q": "通信机房内照明设置应配备哪几种？()",
    "options": [
      {
        "label": "A",
        "text": "常用照明"
      },
      {
        "label": "B",
        "text": "机架照明"
      },
      {
        "label": "C",
        "text": "电源柜照明"
      },
      {
        "label": "D",
        "text": "应急照明"
      }
    ],
    "a": "AD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1148,
    "type": "多选",
    "q": "下面消息中，()属于TD-LTE跨X2切换的信令流程（从测量报告开始，到切换完成）。",
    "options": [
      {
        "label": "A",
        "text": "HandoverRequest"
      },
      {
        "label": "B",
        "text": "RRCConnectionReconfiguration"
      },
      {
        "label": "C",
        "text": "RandomAccessPreamble"
      },
      {
        "label": "D",
        "text": "PathSwitchRequest"
      }
    ],
    "a": "ABCDE",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1149,
    "type": "多选",
    "q": "TDLTE的UE的小区重选的S法则的门限参数包括()",
    "options": [
      {
        "label": "A",
        "text": "qRxLevMin"
      },
      {
        "label": "B",
        "text": "RxLevMin"
      },
      {
        "label": "C",
        "text": "qQualMin"
      },
      {
        "label": "D",
        "text": "qQualMinOffset"
      }
    ],
    "a": "AC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1150,
    "type": "多选",
    "q": "相邻两个小区的帧配置分别是1和2，请问下列哪些子帧会受到干扰？()",
    "options": [
      {
        "label": "A",
        "text": "子帧7"
      },
      {
        "label": "B",
        "text": "子帧2"
      },
      {
        "label": "C",
        "text": "子帧3"
      },
      {
        "label": "D",
        "text": "子帧8"
      }
    ],
    "a": "CD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1151,
    "type": "多选",
    "q": "RLC 数据PDU包括()",
    "options": [
      {
        "label": "A",
        "text": "TMD PDU"
      },
      {
        "label": "B",
        "text": "UMD PDU"
      },
      {
        "label": "C",
        "text": "AMD PDU"
      },
      {
        "label": "D",
        "text": "AMD PDU segment"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1152,
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
        "text": "STATUS PDU payload"
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
    "id": 1153,
    "type": "多选",
    "q": "如果配置了DRX功能，以下()运行期间，UE处于激活状态",
    "options": [
      {
        "label": "A",
        "text": "onDurationTimer"
      },
      {
        "label": "B",
        "text": "drx-InactivityTimer"
      },
      {
        "label": "C",
        "text": "drx-RetransmissionTimer"
      },
      {
        "label": "D",
        "text": "mac-ContentionResolutionTimer"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1154,
    "type": "多选",
    "q": "EPS承载包括以下哪些承载？()",
    "options": [
      {
        "label": "A",
        "text": "无线承载"
      },
      {
        "label": "B",
        "text": "S1承载"
      },
      {
        "label": "C",
        "text": "S5/S8承载"
      },
      {
        "label": "D",
        "text": "S11承载"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1155,
    "type": "多选",
    "q": "LTE/EPC网络中标示用户PDN连接的标识包括()",
    "options": [
      {
        "label": "A",
        "text": "UE IP"
      },
      {
        "label": "B",
        "text": "TEID"
      },
      {
        "label": "C",
        "text": "APN"
      },
      {
        "label": "D",
        "text": "GUTI"
      }
    ],
    "a": "AC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1156,
    "type": "多选",
    "q": "OFDM如何对抗ISI（符号间干扰）()",
    "options": [
      {
        "label": "A",
        "text": "较短的符号长度"
      },
      {
        "label": "B",
        "text": "较长的符号长度"
      },
      {
        "label": "C",
        "text": "灵活的带宽"
      },
      {
        "label": "D",
        "text": "循环前缀"
      }
    ],
    "a": "BD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1157,
    "type": "多选",
    "q": "下面哪些是LTE系统中的网元？()",
    "options": [
      {
        "label": "A",
        "text": "MME"
      },
      {
        "label": "B",
        "text": "RNC"
      },
      {
        "label": "C",
        "text": "eNodeB"
      },
      {
        "label": "D",
        "text": "NodeB"
      }
    ],
    "a": "AC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1158,
    "type": "多选",
    "q": "RLC层有三种传输模式，分别是()",
    "options": [
      {
        "label": "A",
        "text": "透明模式TM"
      },
      {
        "label": "B",
        "text": "非透明模式NTM"
      },
      {
        "label": "C",
        "text": "非确认模式AM"
      },
      {
        "label": "D",
        "text": "确认模式UM"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1159,
    "type": "多选",
    "q": "MME具有以下哪些功能？()",
    "options": [
      {
        "label": "A",
        "text": "鉴权授权"
      },
      {
        "label": "B",
        "text": "NAS信令"
      },
      {
        "label": "C",
        "text": "TA列表管理"
      },
      {
        "label": "D",
        "text": "PGW和SGW选择"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1160,
    "type": "多选",
    "q": "在外场优化过程中，UE频繁上发测量报告的原因有()",
    "options": [
      {
        "label": "A",
        "text": "邻区漏配"
      },
      {
        "label": "B",
        "text": "导频污染"
      },
      {
        "label": "C",
        "text": "时延设置不合理"
      },
      {
        "label": "D",
        "text": "网络异常不处理"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1161,
    "type": "多选",
    "q": "造成速率低原因有()",
    "options": [
      {
        "label": "A",
        "text": "弱覆盖"
      },
      {
        "label": "B",
        "text": "SINR较差"
      },
      {
        "label": "C",
        "text": "频繁切换"
      },
      {
        "label": "D",
        "text": "FTP异常"
      }
    ],
    "a": "ABCDE",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1162,
    "type": "多选",
    "q": "RLC可以配置为三种数据传输模式，分别是()",
    "options": [
      {
        "label": "A",
        "text": "TM"
      },
      {
        "label": "B",
        "text": "AM"
      },
      {
        "label": "C",
        "text": "OM"
      },
      {
        "label": "D",
        "text": "UM"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1163,
    "type": "多选",
    "q": "TD-LTE网络路测中需要关注的常见指标()",
    "options": [
      {
        "label": "A",
        "text": "RSRP"
      },
      {
        "label": "B",
        "text": "RSRQ"
      },
      {
        "label": "C",
        "text": "SINR"
      },
      {
        "label": "D",
        "text": "C/I"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1164,
    "type": "多选",
    "q": "华为TD-LTE测试软件可以导入的地图格式有()",
    "options": [
      {
        "label": "A",
        "text": "*.Tab"
      },
      {
        "label": "B",
        "text": "*.gst"
      },
      {
        "label": "C",
        "text": "*.mif"
      },
      {
        "label": "D",
        "text": "*.jpg"
      }
    ],
    "a": "ABDE",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1165,
    "type": "多选",
    "q": "TD-LTE网络测试中常见的异常事件()",
    "options": [
      {
        "label": "A",
        "text": "掉线"
      },
      {
        "label": "B",
        "text": "RRC重配置失败"
      },
      {
        "label": "C",
        "text": "切换失败"
      },
      {
        "label": "D",
        "text": "RRC连接失败"
      }
    ],
    "a": "ABCDE",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1166,
    "type": "多选",
    "q": "TD-LTE网络掉线原因()",
    "options": [
      {
        "label": "A",
        "text": "弱覆盖"
      },
      {
        "label": "B",
        "text": "模3干扰"
      },
      {
        "label": "C",
        "text": "邻区漏配"
      },
      {
        "label": "D",
        "text": "设备异常"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1167,
    "type": "多选",
    "q": "TD-LTE常见的优化手段()",
    "options": [
      {
        "label": "A",
        "text": "RF优化"
      },
      {
        "label": "B",
        "text": "参数优化"
      },
      {
        "label": "C",
        "text": "PCI优化"
      },
      {
        "label": "D",
        "text": "邻区优化"
      }
    ],
    "a": "ABCDE",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1168,
    "type": "多选",
    "q": "TD-LTE切换参数有()",
    "options": [
      {
        "label": "A",
        "text": "同频切换幅度迟滞"
      },
      {
        "label": "B",
        "text": "同频切换偏置"
      },
      {
        "label": "C",
        "text": "同频切换时间迟滞(毫秒)"
      },
      {
        "label": "D",
        "text": "邻小区偏移量"
      }
    ],
    "a": "ABCDE",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1169,
    "type": "多选",
    "q": "TD-LTE系统由()部分组成。",
    "options": [
      {
        "label": "A",
        "text": "核心网（EPC,Evolved Packet Core）"
      },
      {
        "label": "B",
        "text": "接入网（eNodeB）"
      },
      {
        "label": "C",
        "text": "用户设备（UE）"
      },
      {
        "label": "D",
        "text": "RNC"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1170,
    "type": "多选",
    "q": "MIB包括哪些网络的基本信息？()",
    "options": [
      {
        "label": "A",
        "text": "PHICH资源指示"
      },
      {
        "label": "B",
        "text": "系统帧号(SFN）"
      },
      {
        "label": "C",
        "text": "CRC"
      },
      {
        "label": "D",
        "text": "使用mask的方式"
      }
    ],
    "a": "ABCDEF",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1171,
    "type": "多选",
    "q": "以下哪些场景会触发RRC连接重建？()",
    "options": [
      {
        "label": "A",
        "text": "切换失败"
      },
      {
        "label": "B",
        "text": "无线链路失败"
      },
      {
        "label": "C",
        "text": "底层完整性保护失败"
      },
      {
        "label": "D",
        "text": "RRC重配置失败"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1172,
    "type": "多选",
    "q": "LTE系统无线接口层2包括()子层。",
    "options": [
      {
        "label": "A",
        "text": "MAC"
      },
      {
        "label": "B",
        "text": "RLC"
      },
      {
        "label": "C",
        "text": "RRC"
      },
      {
        "label": "D",
        "text": "BMC"
      }
    ],
    "a": "ABCE",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1173,
    "type": "多选",
    "q": "TDD-LTE物理信道的描述，哪些是正确的？()",
    "options": [
      {
        "label": "A",
        "text": "PDSCHPMCH可支持64QAM"
      },
      {
        "label": "B",
        "text": "一个上行子帧中可以同时存在多个PRACH信道"
      },
      {
        "label": "C",
        "text": "PDCCHPCFICH以及PHICH映射到子帧中的控制区域上"
      },
      {
        "label": "D",
        "text": "PDSCH与PBCH可以存在于同一个子帧中"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1174,
    "type": "多选",
    "q": "LTE的物理层上下行各采用()技术。",
    "options": [
      {
        "label": "A",
        "text": "SC-FDMA"
      },
      {
        "label": "B",
        "text": "OFDMA"
      },
      {
        "label": "C",
        "text": "CDMA"
      },
      {
        "label": "D",
        "text": "TD-SCDMA"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1175,
    "type": "多选",
    "q": "下面哪些工具软件属于网络侧跟踪定位分析所需要的()",
    "options": [
      {
        "label": "A",
        "text": "CDL"
      },
      {
        "label": "B",
        "text": "LMT"
      },
      {
        "label": "C",
        "text": "测试终端"
      },
      {
        "label": "D",
        "text": "OMC-R"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1176,
    "type": "多选",
    "q": "下面哪些优化属于基础网络优化范畴()",
    "options": [
      {
        "label": "A",
        "text": "覆盖优化"
      },
      {
        "label": "B",
        "text": "邻区优化"
      },
      {
        "label": "C",
        "text": "干扰优化"
      },
      {
        "label": "D",
        "text": "参数优化"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1177,
    "type": "多选",
    "q": "下面哪些优化属于特殊场景网络优化范畴()",
    "options": [
      {
        "label": "A",
        "text": "地铁优化"
      },
      {
        "label": "B",
        "text": "体育场馆优化"
      },
      {
        "label": "C",
        "text": "高铁优化"
      },
      {
        "label": "D",
        "text": "海洋优化"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1178,
    "type": "多选",
    "q": "下面哪些优化属于室外宏站单站优化范畴()",
    "options": [
      {
        "label": "A",
        "text": "Idle模式参数配置检查"
      },
      {
        "label": "B",
        "text": "站内切换"
      },
      {
        "label": "C",
        "text": "双模共站影响"
      },
      {
        "label": "D",
        "text": "覆盖检查"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1179,
    "type": "多选",
    "q": "下面哪些优化属于室内分布单站优化范畴()",
    "options": [
      {
        "label": "A",
        "text": "电梯口切换测试"
      },
      {
        "label": "B",
        "text": "室内外切换测试"
      },
      {
        "label": "C",
        "text": "共分布系统影响"
      },
      {
        "label": "D",
        "text": "室内信号泄露检查"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1180,
    "type": "多选",
    "q": "TD-LTE与TD-SCDMA优化主要差异在于()",
    "options": [
      {
        "label": "A",
        "text": "覆盖和质量评估参数不同"
      },
      {
        "label": "B",
        "text": "TD-LTE需考虑天线模式对覆盖影响"
      },
      {
        "label": "C",
        "text": "TD-SCDMA中可以通过设置黑名单来进行邻区的优化"
      },
      {
        "label": "D",
        "text": "TD-LTE邻区设置需要考虑优先级"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1181,
    "type": "多选",
    "q": "TD-LTE与TD-SCDMA干扰下面表述正确的是()",
    "options": [
      {
        "label": "A",
        "text": "都有系统外干扰"
      },
      {
        "label": "B",
        "text": "TD-LTE主要考虑小区间干扰"
      },
      {
        "label": "C",
        "text": "TD-LTE主要考虑小区内干扰"
      },
      {
        "label": "D",
        "text": "TD-LTE与TD-SCDMA在异频也需考虑交叉时隙干扰"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1182,
    "type": "多选",
    "q": "TD-LTE系统承载系统信息的物理信道是()",
    "options": [
      {
        "label": "A",
        "text": "PBCH"
      },
      {
        "label": "B",
        "text": "PCFICH"
      },
      {
        "label": "C",
        "text": "PHICH"
      },
      {
        "label": "D",
        "text": "PDSCH"
      }
    ],
    "a": "AD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1183,
    "type": "多选",
    "q": "TD-LTE系统中PCI由哪些信号决定()",
    "options": [
      {
        "label": "A",
        "text": "SRS"
      },
      {
        "label": "B",
        "text": "SSS"
      },
      {
        "label": "C",
        "text": "PSS"
      },
      {
        "label": "D",
        "text": "CRS"
      }
    ],
    "a": "BC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1184,
    "type": "多选",
    "q": "TD-LTE系统中PBCH包含()",
    "options": [
      {
        "label": "A",
        "text": "系统帧号"
      },
      {
        "label": "B",
        "text": "其它系统消息调度信息"
      },
      {
        "label": "C",
        "text": "系统带宽"
      },
      {
        "label": "D",
        "text": "PHICH配置信息"
      }
    ],
    "a": "ACD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1185,
    "type": "多选",
    "q": "TD-LTE系统小区选择算法参数包括()",
    "options": [
      {
        "label": "A",
        "text": "Qrxlevmin"
      },
      {
        "label": "B",
        "text": "Qrxlevminoffset"
      },
      {
        "label": "C",
        "text": "Pemax_h"
      },
      {
        "label": "D",
        "text": "Ppowerclass"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1186,
    "type": "多选",
    "q": "MME可以支持以下哪些接口？()",
    "options": [
      {
        "label": "A",
        "text": "S6a"
      },
      {
        "label": "B",
        "text": "S1-MME"
      },
      {
        "label": "C",
        "text": "Gb"
      },
      {
        "label": "D",
        "text": "Iu-PS"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1187,
    "type": "多选",
    "q": "MME用到了以下哪些协议？()",
    "options": [
      {
        "label": "A",
        "text": "Diameter"
      },
      {
        "label": "B",
        "text": "S1-AP"
      },
      {
        "label": "C",
        "text": "GTP"
      },
      {
        "label": "D",
        "text": "RANAP"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1188,
    "type": "多选",
    "q": "EPC网络,重要逻辑接口在传输层协议主要采用的协议()",
    "options": [
      {
        "label": "A",
        "text": "MTP1"
      },
      {
        "label": "B",
        "text": "UDP"
      },
      {
        "label": "C",
        "text": "SCTP"
      },
      {
        "label": "D",
        "text": "MTP2"
      }
    ],
    "a": "BC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1189,
    "type": "多选",
    "q": "EPS系统特点包括()",
    "options": [
      {
        "label": "A",
        "text": "核心网无电路域"
      },
      {
        "label": "B",
        "text": "控制和承载分离网络结构扁平化"
      },
      {
        "label": "C",
        "text": "基于全IP架构"
      },
      {
        "label": "D",
        "text": "支持多种接入方式，永远在线"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1190,
    "type": "多选",
    "q": "LTE/EPC网络中能实现计费功能的网元有()",
    "options": [
      {
        "label": "A",
        "text": "HSS"
      },
      {
        "label": "B",
        "text": "MME"
      },
      {
        "label": "C",
        "text": "SGW"
      },
      {
        "label": "D",
        "text": "PGW"
      }
    ],
    "a": "CD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1191,
    "type": "多选",
    "q": "LTE/EPC网络中的服务请求（Servie Request)可以由()发起",
    "options": [
      {
        "label": "A",
        "text": "只能由UE发起"
      },
      {
        "label": "B",
        "text": "只能由网络侧发起"
      },
      {
        "label": "C",
        "text": "可以由UE发起"
      },
      {
        "label": "D",
        "text": "可以由网络侧发起"
      }
    ],
    "a": "CD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1192,
    "type": "多选",
    "q": "下面哪些属于RRC功能？()",
    "options": [
      {
        "label": "A",
        "text": "寻呼"
      },
      {
        "label": "B",
        "text": "测量控制"
      },
      {
        "label": "C",
        "text": "动态资源分配"
      },
      {
        "label": "D",
        "text": "完整性保护"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1193,
    "type": "多选",
    "q": "以下哪些协议具有添加序列号的功能？()",
    "options": [
      {
        "label": "A",
        "text": "RRC"
      },
      {
        "label": "B",
        "text": "PDCP"
      },
      {
        "label": "C",
        "text": "RLC"
      },
      {
        "label": "D",
        "text": "MAC"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1194,
    "type": "多选",
    "q": "随机接入的目的是()",
    "options": [
      {
        "label": "A",
        "text": "初始接入"
      },
      {
        "label": "B",
        "text": "建立上行同步"
      },
      {
        "label": "C",
        "text": "小区搜索"
      },
      {
        "label": "D",
        "text": "寻呼"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1195,
    "type": "多选",
    "q": "下面哪些系统消息中有关于小区重选的参数？()",
    "options": [
      {
        "label": "A",
        "text": "SIB5"
      },
      {
        "label": "B",
        "text": "SIB11"
      },
      {
        "label": "C",
        "text": "SIB3"
      },
      {
        "label": "D",
        "text": "SIB2"
      }
    ],
    "a": "AC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1196,
    "type": "多选",
    "q": "以下哪些技术有助于LTE频谱的灵活性？()",
    "options": [
      {
        "label": "A",
        "text": "MIMO"
      },
      {
        "label": "B",
        "text": "自动配置"
      },
      {
        "label": "C",
        "text": "FDD和TDD"
      },
      {
        "label": "D",
        "text": "灵活的带宽配置"
      }
    ],
    "a": "CD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1197,
    "type": "多选",
    "q": "以下哪些物理信道用于承载BCCH？()",
    "options": [
      {
        "label": "A",
        "text": "DL-SCH"
      },
      {
        "label": "B",
        "text": "PBCH"
      },
      {
        "label": "C",
        "text": "PDSCH"
      },
      {
        "label": "D",
        "text": "BCH"
      }
    ],
    "a": "BC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1198,
    "type": "多选",
    "q": "相对于TD-SCDMA，LTE核心网有什么变化()",
    "options": [
      {
        "label": "A",
        "text": "在电路域实现了控制和承载的分离"
      },
      {
        "label": "B",
        "text": "只有分组域，没有电路域"
      },
      {
        "label": "C",
        "text": "在分组域实现了控制和承载的分离"
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
    "id": 1199,
    "type": "多选",
    "q": "目前中国移动LTE-TDD实验网使用的频段有哪些？()",
    "options": [
      {
        "label": "A",
        "text": "2.1G"
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
        "text": "2.5G"
      }
    ],
    "a": "BC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1200,
    "type": "多选",
    "q": "LTE 系统中关于MIMO，以下哪种说法是对的？()",
    "options": [
      {
        "label": "A",
        "text": "下行只能单天线发送"
      },
      {
        "label": "B",
        "text": "下行可以单天线发送，也可以多天线发送"
      },
      {
        "label": "C",
        "text": "下行可以支持的天线端口数目为1，2，4"
      },
      {
        "label": "D",
        "text": "下行可以支持的天线端口数目为1，2，4，8"
      }
    ],
    "a": "BC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1201,
    "type": "多选",
    "q": "关于PDCCH，下述那些描述是正确的()",
    "options": [
      {
        "label": "A",
        "text": "在PDCCH上，发送数据"
      },
      {
        "label": "B",
        "text": "在PDCCH上，发送调度PDSCH的控制信令"
      },
      {
        "label": "C",
        "text": "在一个子帧的第一slot上，发送PDCCH"
      },
      {
        "label": "D",
        "text": "在一个子帧上的所有slot上，发送PDCCH"
      }
    ],
    "a": "BC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1202,
    "type": "多选",
    "q": "LTE系统中资源分配方式有以下哪几种？()",
    "options": [
      {
        "label": "A",
        "text": "Type 0"
      },
      {
        "label": "B",
        "text": "Type 1"
      },
      {
        "label": "C",
        "text": "Type 2"
      },
      {
        "label": "D",
        "text": "Type 3"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1203,
    "type": "多选",
    "q": "LTE RLC层的功能包括()",
    "options": [
      {
        "label": "A",
        "text": "分段"
      },
      {
        "label": "B",
        "text": "ARQ(Automatic Repeat Request)"
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
    "id": 1204,
    "type": "多选",
    "q": "RLC实体可以被配置成为哪种模式？()",
    "options": [
      {
        "label": "A",
        "text": "Transparent Mode"
      },
      {
        "label": "B",
        "text": "Unacknowledged Mode"
      },
      {
        "label": "C",
        "text": "Transport Mode"
      },
      {
        "label": "D",
        "text": "Acknowledged Mode"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1205,
    "type": "多选",
    "q": "RACH的作用()",
    "options": [
      {
        "label": "A",
        "text": "获取上行同步"
      },
      {
        "label": "B",
        "text": "获取上行发送资源"
      },
      {
        "label": "C",
        "text": "获取码道资源"
      },
      {
        "label": "D",
        "text": "获取小区ID"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1206,
    "type": "多选",
    "q": "以下逻辑信道不属于控制信道的是 ()",
    "options": [
      {
        "label": "A",
        "text": "DCCH"
      },
      {
        "label": "B",
        "text": "MCCH"
      },
      {
        "label": "C",
        "text": "DTCH"
      },
      {
        "label": "D",
        "text": "MTCH"
      }
    ],
    "a": "CD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1207,
    "type": "多选",
    "q": "以下哪些是LTE 单小区PDSCH数据信道能支持的系统带宽？()",
    "options": [
      {
        "label": "A",
        "text": "5M"
      },
      {
        "label": "B",
        "text": "10M"
      },
      {
        "label": "C",
        "text": "20M"
      },
      {
        "label": "D",
        "text": "30M"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1208,
    "type": "多选",
    "q": "LTE/EPC网络中，使用到的协议有哪些？()",
    "options": [
      {
        "label": "A",
        "text": "S1AP"
      },
      {
        "label": "B",
        "text": "GTP-C"
      },
      {
        "label": "C",
        "text": "GTP-U"
      },
      {
        "label": "D",
        "text": "MAP"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1209,
    "type": "多选",
    "q": "LTE/EPC网络中，可完成会话管理的网元有()",
    "options": [
      {
        "label": "A",
        "text": "MME"
      },
      {
        "label": "B",
        "text": "HSS"
      },
      {
        "label": "C",
        "text": "SGW"
      },
      {
        "label": "D",
        "text": "PGW"
      }
    ],
    "a": "ACD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1210,
    "type": "多选",
    "q": "SGW与PGW之间的接口是()",
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
        "text": "S5"
      },
      {
        "label": "D",
        "text": "S8"
      }
    ],
    "a": "CD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1211,
    "type": "多选",
    "q": "PCRF支持的逻辑接口有()",
    "options": [
      {
        "label": "A",
        "text": "Rx"
      },
      {
        "label": "B",
        "text": "X1"
      },
      {
        "label": "C",
        "text": "Gx"
      },
      {
        "label": "D",
        "text": "X2"
      }
    ],
    "a": "AC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1212,
    "type": "多选",
    "q": "下列有关测量触发事件说法正确的是()",
    "options": [
      {
        "label": "A",
        "text": "A1指的是服务小区的信号质量大于门限值"
      },
      {
        "label": "B",
        "text": "A2指的是服务小区的信号质量大于门限值"
      },
      {
        "label": "C",
        "text": "A4指的是邻小区的信号质量大于门限值"
      },
      {
        "label": "D",
        "text": "B1指的是异系统的邻小区的信号质量大于门限值"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1213,
    "type": "多选",
    "q": "PCRF网元可完成的控制功能包括哪几项？()",
    "options": [
      {
        "label": "A",
        "text": "接入控制"
      },
      {
        "label": "B",
        "text": "QOS控制"
      },
      {
        "label": "C",
        "text": "计费控制"
      },
      {
        "label": "D",
        "text": "加密控制"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1214,
    "type": "多选",
    "q": "LTE/EPC网络中哪些接口的控制平面使用GTP-C？()",
    "options": [
      {
        "label": "A",
        "text": "S11"
      },
      {
        "label": "B",
        "text": "S5"
      },
      {
        "label": "C",
        "text": "S8"
      },
      {
        "label": "D",
        "text": "S1"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1215,
    "type": "多选",
    "q": "LTE/EPC网路中哪些接口的用户平面使用GTP-U？()",
    "options": [
      {
        "label": "A",
        "text": "S1"
      },
      {
        "label": "B",
        "text": "S5"
      },
      {
        "label": "C",
        "text": "S8"
      },
      {
        "label": "D",
        "text": "Uu"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1216,
    "type": "多选",
    "q": "S-TMSI由哪些标识组成？()",
    "options": [
      {
        "label": "A",
        "text": "MMEC"
      },
      {
        "label": "B",
        "text": "M-TMSI"
      },
      {
        "label": "C",
        "text": "GUMMEI"
      },
      {
        "label": "D",
        "text": "MMEI"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1217,
    "type": "多选",
    "q": "哪些接口是基于Diameter协议的？()",
    "options": [
      {
        "label": "A",
        "text": "Gx"
      },
      {
        "label": "B",
        "text": "S6a"
      },
      {
        "label": "C",
        "text": "S5"
      },
      {
        "label": "D",
        "text": "S11"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1218,
    "type": "多选",
    "q": "LTE系统中一个RB对应时间和频率资源分别是多少()",
    "options": [
      {
        "label": "A",
        "text": "1ms"
      },
      {
        "label": "B",
        "text": "0.5ms"
      },
      {
        "label": "C",
        "text": "6个子载波"
      },
      {
        "label": "D",
        "text": "12个子载波"
      }
    ],
    "a": "BD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1219,
    "type": "多选",
    "q": "一个无线帧包括()",
    "options": [
      {
        "label": "A",
        "text": "20个时隙"
      },
      {
        "label": "B",
        "text": "20个子帧"
      },
      {
        "label": "C",
        "text": "10个时隙"
      },
      {
        "label": "D",
        "text": "140个OFDM符号"
      }
    ],
    "a": "AD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1220,
    "type": "多选",
    "q": "下列哪些物理信道承载L1/L2的控制消息？()",
    "options": [
      {
        "label": "A",
        "text": "PCFICH"
      },
      {
        "label": "B",
        "text": "PDCCH"
      },
      {
        "label": "C",
        "text": "PHICH"
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
    "id": 1221,
    "type": "多选",
    "q": "EPS承载建立于()和()之间",
    "options": [
      {
        "label": "A",
        "text": "UE"
      },
      {
        "label": "B",
        "text": "eNB"
      },
      {
        "label": "C",
        "text": "P-GW"
      },
      {
        "label": "D",
        "text": "S-GW"
      }
    ],
    "a": "AC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1222,
    "type": "多选",
    "q": "到目前为止，LTE系统中可使用的调制方式有()",
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
        "text": "<64QAMbr />D128QAM"
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
    "id": 1223,
    "type": "多选",
    "q": "LTE 中的RS包括以下哪几种？()",
    "options": [
      {
        "label": "A",
        "text": "CRS"
      },
      {
        "label": "B",
        "text": "SRS"
      },
      {
        "label": "C",
        "text": "DRS"
      },
      {
        "label": "D",
        "text": "PRS"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1224,
    "type": "多选",
    "q": "ICIC有关的测量有()",
    "options": [
      {
        "label": "A",
        "text": "HII"
      },
      {
        "label": "B",
        "text": "RNTP"
      },
      {
        "label": "C",
        "text": "RSRP"
      },
      {
        "label": "D",
        "text": "OI"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1225,
    "type": "多选",
    "q": "下面哪些干扰可能在无线网络中存在？()",
    "options": [
      {
        "label": "A",
        "text": "杂散干扰"
      },
      {
        "label": "B",
        "text": "阻塞干扰"
      },
      {
        "label": "C",
        "text": "互调干扰"
      },
      {
        "label": "D",
        "text": "谐波干扰"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1226,
    "type": "多选",
    "q": "下列哪些是LTE网络规划所关注的关键指标？()",
    "options": [
      {
        "label": "A",
        "text": "RSRP"
      },
      {
        "label": "B",
        "text": "CRS SINR"
      },
      {
        "label": "C",
        "text": "吞吐率"
      },
      {
        "label": "D",
        "text": "小区负载"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1227,
    "type": "多选",
    "q": "LTE高铁覆盖采用的天线应具备以下哪些特性？()",
    "options": [
      {
        "label": "A",
        "text": "高增益"
      },
      {
        "label": "B",
        "text": "窄波瓣"
      },
      {
        "label": "C",
        "text": "宽波瓣"
      },
      {
        "label": "D",
        "text": "低增益"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1228,
    "type": "多选",
    "q": "TD-LTE-Advanced系统的关键技术包括 ()",
    "options": [
      {
        "label": "A",
        "text": "载波聚合技术"
      },
      {
        "label": "B",
        "text": "中继技术"
      },
      {
        "label": "C",
        "text": "MIMO增强技术"
      },
      {
        "label": "D",
        "text": "多点协作技术"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1229,
    "type": "多选",
    "q": "LTE系统消息中，以下哪些与MIB相关？()",
    "options": [
      {
        "label": "A",
        "text": "承载于P-BCH上"
      },
      {
        "label": "B",
        "text": "包括有限个用以读取其他小区信息的最重要:最常用的传输参数（系统带宽，系统帧号，PHICH配置信息）"
      },
      {
        "label": "C",
        "text": "时域：紧邻同步信道，以10ms为周期重传4次"
      },
      {
        "label": "D",
        "text": "频域：位于系统带宽中央的72个子载波"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1230,
    "type": "多选",
    "q": "TD-LTE系统中，关于邻区漏配现象判断，下列叙述不正确的是()",
    "options": [
      {
        "label": "A",
        "text": "测量控制中有邻区PCI信息，测量报告中无邻区PCI信息，UE会尝试切换到其他小区。"
      },
      {
        "label": "B",
        "text": "测量控制中有邻区PCI信息，测量报告中有邻区PCI信息，UE不会尝试切换到其他小区。"
      },
      {
        "label": "C",
        "text": "测量控制无邻区PCI信息，测量报告中有邻区PCI信息，UE会尝试切换到其他小区。"
      },
      {
        "label": "D",
        "text": "测量控制有邻区PCI信息，测量报告中有邻区PCI信息，UE不会尝试切换到其他小区。"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1231,
    "type": "多选",
    "q": "目前TD-LTE使用的8通道智能天线，在RRU和天线上各有9个端口，如果他们之间的端口没有按规范连接相互连接错误，测试时可能出现的异常现象有()",
    "options": [
      {
        "label": "A",
        "text": "RSRP 无太多变化，SINR值有陡降现象"
      },
      {
        "label": "B",
        "text": "下载速率波动比较大，平均速率低"
      },
      {
        "label": "C",
        "text": "对上行业务速率影响不明显，SINR无陡降现象"
      },
      {
        "label": "D",
        "text": "下载数据量越大，SINR陡降越明显，不做业务或进行小数据下载SINR陡降不明显"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1232,
    "type": "多选",
    "q": "一个2G-LTE多模UE将在下述那些条件下发生异系统重选？()",
    "options": [
      {
        "label": "A",
        "text": "S_serving< THRESH_2G_low 且 S_non-serving_LTE > THRESH_LTE_low"
      },
      {
        "label": "B",
        "text": "S_serving< THRESH_2G_low 且 S_non-serving_LTE < THRESH_LTE_low 且 S_non-serving_LTE > S_serving + H_PRIO"
      },
      {
        "label": "C",
        "text": "S_serving> THRESH_2G_low 且 S_non-serving_LTE > THRESH_LTE_low"
      },
      {
        "label": "D",
        "text": "S_serving> THRESH_2G_low 且 S_non-serving_LTE < THRESH_LTE_low 且 S_non-serving_LTE > S_serving + H_PRIO"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1233,
    "type": "多选",
    "q": "2G-LTE系统间重选的相关消息在下面的哪些消息中广播或发送？()",
    "options": [
      {
        "label": "A",
        "text": "SI2Quater message"
      },
      {
        "label": "B",
        "text": "Packet Measurement Order (PMO)"
      },
      {
        "label": "C",
        "text": "SI2Q is sent on PACCH"
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
    "id": 1234,
    "type": "多选",
    "q": "以下哪些流程是移动性管理流程？()",
    "options": [
      {
        "label": "A",
        "text": "TA更新"
      },
      {
        "label": "B",
        "text": "分离"
      },
      {
        "label": "C",
        "text": "附着"
      },
      {
        "label": "D",
        "text": "业务请求"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1235,
    "type": "多选",
    "q": "EPC产生的话单类型包括()",
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
        "text": "eG-CDR"
      },
      {
        "label": "D",
        "text": "S-CDR"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1236,
    "type": "多选",
    "q": "eUTRAN通过以下哪些接口连接EPC？()",
    "options": [
      {
        "label": "A",
        "text": "S1-MME"
      },
      {
        "label": "B",
        "text": "S1-U"
      },
      {
        "label": "C",
        "text": "Gn"
      },
      {
        "label": "D",
        "text": "S5"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1237,
    "type": "多选",
    "q": "TD-LTE链路预算中资源配置表述正确的是()",
    "options": [
      {
        "label": "A",
        "text": "PHICH采用12RE"
      },
      {
        "label": "B",
        "text": "PCFICH采用16RE"
      },
      {
        "label": "C",
        "text": "PUCCH采用1RB"
      },
      {
        "label": "D",
        "text": "PDCCH可采用1CCE2CCE4CCE8CCE"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1238,
    "type": "多选",
    "q": "PCC架构中的策略控制规则最后由哪些网元执行？()",
    "options": [
      {
        "label": "A",
        "text": "SPR"
      },
      {
        "label": "B",
        "text": "PCRF"
      },
      {
        "label": "C",
        "text": "PCEF"
      },
      {
        "label": "D",
        "text": "BBERF"
      }
    ],
    "a": "CD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1239,
    "type": "多选",
    "q": "EPC HSS的主要功能包括()",
    "options": [
      {
        "label": "A",
        "text": "用户签约数据的存储"
      },
      {
        "label": "B",
        "text": "用户位置信息的存储"
      },
      {
        "label": "C",
        "text": "保存UE接入了PGW的地址信息，为了后续支持切换到non-3GPP网络"
      },
      {
        "label": "D",
        "text": "支持BOSS业务开通接口"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1240,
    "type": "多选",
    "q": "以下哪些接口是属于HLR/HSS融合设备的接口？()",
    "options": [
      {
        "label": "A",
        "text": "Gr"
      },
      {
        "label": "B",
        "text": "S6a"
      },
      {
        "label": "C",
        "text": "S6d"
      },
      {
        "label": "D",
        "text": "Lh/Lh’"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1241,
    "type": "多选",
    "q": "LTE空中接口协议栈控制面部分包括()",
    "options": [
      {
        "label": "A",
        "text": "PHY"
      },
      {
        "label": "B",
        "text": "MAC"
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
    "a": "ABCDE",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1242,
    "type": "多选",
    "q": "以下哪些是EPC中QoS参数？()",
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
        "text": "MBR"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1243,
    "type": "多选",
    "q": "EPC中的附着流程涉及哪些网元？()",
    "options": [
      {
        "label": "A",
        "text": "MME"
      },
      {
        "label": "B",
        "text": "HSS"
      },
      {
        "label": "C",
        "text": "SGW"
      },
      {
        "label": "D",
        "text": "PGW"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1244,
    "type": "多选",
    "q": "EPC中的专有承载建立流程涉及哪些网元？()",
    "options": [
      {
        "label": "A",
        "text": "MME"
      },
      {
        "label": "B",
        "text": "SGW"
      },
      {
        "label": "C",
        "text": "PGW"
      },
      {
        "label": "D",
        "text": "CG"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1245,
    "type": "多选",
    "q": "要做好网络规划，必须了解无线传播的特性，一般的无线传播损耗主要包括()",
    "options": [
      {
        "label": "A",
        "text": "空间传播损耗：随距离衰减的电播传播损耗，为固定斜率的衰减。"
      },
      {
        "label": "B",
        "text": "阴影衰落损耗（慢衰落损耗）：阴影效应，由地形地物引起，表现为高斯分布。一般通过预留慢衰落余量的方式降低对通信质量的影响。"
      },
      {
        "label": "C",
        "text": "快衰落损耗：多径效应，由多径传播引起，表现为瑞利分布或莱斯分布。一般通过功控:均衡等信号处理方式解决。"
      },
      {
        "label": "D",
        "text": "其他损耗，如穿透损耗等。一般通过预留损耗余量降低对通信质量的影响。"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1246,
    "type": "多选",
    "q": "一般情况下在单站验证过程中Ping包的大小和时间间隔是()",
    "options": [
      {
        "label": "A",
        "text": "1500byte，2s"
      },
      {
        "label": "B",
        "text": "32byte，2s"
      },
      {
        "label": "C",
        "text": "1500byte，1s"
      },
      {
        "label": "D",
        "text": "32byte，1s"
      }
    ],
    "a": "CD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1247,
    "type": "多选",
    "q": "可以用来根本性解决越区覆盖的方法有()",
    "options": [
      {
        "label": "A",
        "text": "适当降低越区小区的发射功率"
      },
      {
        "label": "B",
        "text": "调整越区小区上行功控参数"
      },
      {
        "label": "C",
        "text": "调整越区小区下行调度方式"
      },
      {
        "label": "D",
        "text": "调整越区小区天线参数（高度，倾角，方位角等）"
      }
    ],
    "a": "AD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1248,
    "type": "多选",
    "q": "以下哪些属于下行物理参考信号（reference signal）？()",
    "options": [
      {
        "label": "A",
        "text": "小区专用参考信号"
      },
      {
        "label": "B",
        "text": "MBSFN参考信号"
      },
      {
        "label": "C",
        "text": "UE专用参考信号"
      },
      {
        "label": "D",
        "text": "辅同步信号"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1249,
    "type": "多选",
    "q": "以下哪些是单站验证（优化）结果的输出范畴？()",
    "options": [
      {
        "label": "A",
        "text": "TD-LTE单站核查优化测试记录表"
      },
      {
        "label": "B",
        "text": "TD-LTE单站优化状态表"
      },
      {
        "label": "C",
        "text": "TD-LTE站点建设问题汇总表"
      },
      {
        "label": "D",
        "text": "TD-LTE站点勘察记录表"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1250,
    "type": "多选",
    "q": "下列说法正确的是（）",
    "options": [
      {
        "label": "A",
        "text": "在进行室分设计时，一般是按照“先平层后主干”的次序进行。"
      },
      {
        "label": "B",
        "text": "“先平层设计”：对于平层面积大小灵活选用功分器或耦合器进行功率分配。"
      },
      {
        "label": "C",
        "text": "“后主干设计”：主要选用耦合器从主干上耦合信号功率分配至各平层，根据主干信号功率和平层需要功率确定耦合器的耦合度。"
      },
      {
        "label": "D",
        "text": "如果主干线全采用耦合器，可能会引起天线口功率不平衡，因此，主干线可根据情况采用耦合器＋功分器分配功率。"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1251,
    "type": "多选",
    "q": "下面消息中，（）属于TD-LTE跨X2切换的信令流程（从测量报告开始，到切换完成）",
    "options": [
      {
        "label": "A",
        "text": "HandoverRequest"
      },
      {
        "label": "B",
        "text": "RRCConnectionReconfiguration"
      },
      {
        "label": "C",
        "text": "RandomAccessPreamble"
      },
      {
        "label": "D",
        "text": "PathSwitchRequestE.UEContextRelease"
      }
    ],
    "a": "ABCDE",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1252,
    "type": "多选",
    "q": "多天线技术中，主要的增益包括（）",
    "options": [
      {
        "label": "A",
        "text": "分集增益"
      },
      {
        "label": "B",
        "text": "赋形增益"
      },
      {
        "label": "C",
        "text": "空间复用增益"
      },
      {
        "label": "D",
        "text": "编码增益"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1253,
    "type": "多选",
    "q": "以下厂商中已经推出TD-LTE终端的是（）",
    "options": [
      {
        "label": "A",
        "text": "苹果"
      },
      {
        "label": "B",
        "text": "三星"
      },
      {
        "label": "C",
        "text": "索尼"
      },
      {
        "label": "D",
        "text": "华为"
      }
    ],
    "a": "BCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1254,
    "type": "多选",
    "q": "TDLTE小区中n2TxAntennaTm4OneLayerCodebook0 到3设为True，RI=2，则以下正确的PMI反馈可能为（）",
    "options": [
      {
        "label": "A",
        "text": 0.0
      },
      {
        "label": "B",
        "text": 1.0
      },
      {
        "label": "C",
        "text": 2.0
      },
      {
        "label": "D",
        "text": 3.0
      }
    ],
    "a": "BC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1255,
    "type": "多选",
    "q": "LTE中哪些节点可以用来执行计费（）",
    "options": [
      {
        "label": "A",
        "text": "MME"
      },
      {
        "label": "B",
        "text": "HSS"
      },
      {
        "label": "C",
        "text": "S-GW"
      },
      {
        "label": "D",
        "text": "P-GWE.eNB"
      }
    ],
    "a": "CD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1256,
    "type": "多选",
    "q": "BCCH中的SIB中，始终被激活的SIB有（）",
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
        "text": "SIB4E.SIB5F.SIB6"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1257,
    "type": "多选",
    "q": "TDLTE的波束赋形天线配置基站，要求UE直接进入复用模式，则参数transmissionMode可以设置为（）",
    "options": [
      {
        "label": "A",
        "text": "TM7"
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
        "text": "TM8"
      }
    ],
    "a": "BCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1258,
    "type": "多选",
    "q": "LTE系统中下行参考信号的主要目的是（）",
    "options": [
      {
        "label": "A",
        "text": "下行信道质量测量，又称为信道探测"
      },
      {
        "label": "B",
        "text": "下行信道估计，用于UE端的相干检测和解调"
      },
      {
        "label": "C",
        "text": "小区搜索"
      },
      {
        "label": "D",
        "text": "时间和频率同步"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1259,
    "type": "多选",
    "q": "BPG板有哪些功能：()",
    "options": [
      {
        "label": "A",
        "text": "完成物理层的相关处理；"
      },
      {
        "label": "B",
        "text": "提供与eRRU之间的光接口"
      },
      {
        "label": "C",
        "text": "支持IPMI机框管理"
      },
      {
        "label": "D",
        "text": "提供信令流和媒体流交换。"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1260,
    "type": "多选",
    "q": "CQI上报有哪几种上报策略：",
    "options": [
      {
        "label": "A",
        "text": "在PUSCH上非周期上报"
      },
      {
        "label": "B",
        "text": "在PUSCH上周期上报"
      },
      {
        "label": "C",
        "text": "在PUCCH上周期上报"
      },
      {
        "label": "D",
        "text": "PUCCH非周期上报"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1261,
    "type": "多选",
    "q": "eNB通过S1接口和EPC相连，S1接口包括：",
    "options": [
      {
        "label": "A",
        "text": "与MME相连的接口（S1-MME)"
      },
      {
        "label": "B",
        "text": "与PGW连接的接口（S-PGW)；"
      },
      {
        "label": "C",
        "text": "与SAE相连的接口（S1-U)"
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
    "id": 1262,
    "type": "多选",
    "q": "eNodeB包括以下哪些功能？",
    "options": [
      {
        "label": "A",
        "text": "无线资源管理相关的功能"
      },
      {
        "label": "B",
        "text": "UE附着时的MME选择"
      },
      {
        "label": "C",
        "text": "测量与测量报告的配置"
      },
      {
        "label": "D",
        "text": "空闲状态的移动性管理"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1263,
    "type": "多选",
    "q": "eNodeB提供如下功能：",
    "options": [
      {
        "label": "A",
        "text": "无线资源管理IP头压缩和用户数据流加密 "
      },
      {
        "label": "B",
        "text": "用户面数据向S-GW的路由"
      },
      {
        "label": "C",
        "text": "从MME发起的寻呼消息广播消息的调度和发送"
      },
      {
        "label": "D",
        "text": "用于移动性和调度的测量和测量上报配置"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1264,
    "type": "多选",
    "q": "E-RAB的建立，均可由（）和（ ）发起，（ ）不可发起。",
    "options": [
      {
        "label": "A",
        "text": "UE"
      },
      {
        "label": "B",
        "text": "eNodeB"
      },
      {
        "label": "C",
        "text": "EPC"
      },
      {
        "label": "D",
        "text": ""
      }
    ],
    "a": "ACB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1265,
    "type": "多选",
    "q": "E-RAB的建立，均可由A和 C发起， B不可发起。",
    "options": [
      {
        "label": "A",
        "text": "UE"
      },
      {
        "label": "B",
        "text": "eNodeB"
      },
      {
        "label": "C",
        "text": "EPC"
      },
      {
        "label": "D",
        "text": ""
      }
    ],
    "a": "ACB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1266,
    "type": "多选",
    "q": "E-UTRAN系统中eNB节点完成的RRM(无线资源管理相关的)功能包括：",
    "options": [
      {
        "label": "A",
        "text": "无线承载控制；"
      },
      {
        "label": "B",
        "text": "无线接纳控制；"
      },
      {
        "label": "C",
        "text": "连接移动性管理 "
      },
      {
        "label": "D",
        "text": "上/下行动态资源分配/调度等"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1267,
    "type": "多选",
    "q": "E-UTRA小区搜索基于（）完成。 ",
    "options": [
      {
        "label": "A",
        "text": "主同步信号 "
      },
      {
        "label": "B",
        "text": "辅同步信号"
      },
      {
        "label": "C",
        "text": "下行参考信号"
      },
      {
        "label": "D",
        "text": "PBCH信号"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1268,
    "type": "多选",
    "q": "ICIC技术就是在相邻小区之间进行协调，以避免或降低ICI。这种“协调”实际上是通过在小区边缘采用小区频率复用方法实现的，可分为",
    "options": [
      {
        "label": "A",
        "text": "软频率复用"
      },
      {
        "label": "B",
        "text": "同心圆"
      },
      {
        "label": "C",
        "text": "部分频率复用"
      },
      {
        "label": "D",
        "text": "一般频率复用"
      }
    ],
    "a": "AC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1269,
    "type": "多选",
    "q": "LTE操作中涉及到哪些物理层过程",
    "options": [
      {
        "label": "A",
        "text": "小区搜索"
      },
      {
        "label": "B",
        "text": "功率控制"
      },
      {
        "label": "C",
        "text": "随机接入过程"
      },
      {
        "label": "D",
        "text": "HARQ相关过程"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1270,
    "type": "多选",
    "q": "LTE测试用什么软件（）",
    "options": [
      {
        "label": "A",
        "text": "GENEX Probe，"
      },
      {
        "label": "B",
        "text": "GENEX Assistant"
      },
      {
        "label": "C",
        "text": "TEMS"
      },
      {
        "label": "D",
        "text": "PILOT"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1271,
    "type": "多选",
    "q": "LTE测试用什么终端",
    "options": [
      {
        "label": "A",
        "text": "CPE（B593s）"
      },
      {
        "label": "B",
        "text": "B398和B392"
      },
      {
        "label": "C",
        "text": "TUE"
      },
      {
        "label": "D",
        "text": "K790"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1272,
    "type": "多选",
    "q": "LTE传输分集的候选技术包括：",
    "options": [
      {
        "label": "A",
        "text": "空时编码"
      },
      {
        "label": "B",
        "text": "循环延时分集"
      },
      {
        "label": "C",
        "text": "天线切换分集技术"
      },
      {
        "label": "D",
        "text": "空频块码"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1273,
    "type": "多选",
    "q": "LTE的调度周期是多少：",
    "options": [
      {
        "label": "A",
        "text": "1ms"
      },
      {
        "label": "B",
        "text": "2ms"
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
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1274,
    "type": "多选",
    "q": "LTE的特殊时隙由下列哪几项构成",
    "options": [
      {
        "label": "A",
        "text": "DwPTS"
      },
      {
        "label": "B",
        "text": "GP"
      },
      {
        "label": "C",
        "text": "UpPTS"
      },
      {
        "label": "D",
        "text": "Gs"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1275,
    "type": "多选",
    "q": "LTE定时同步包括：\n",
    "options": [
      {
        "label": "A",
        "text": "无线链路监测（Radio link monitoring）"
      },
      {
        "label": "B",
        "text": "小区间同步（Inter-cell synchronisation）"
      },
      {
        "label": "C",
        "text": "发射定时调整（Transmission timing adjustment）"
      },
      {
        "label": "D",
        "text": "以上都不对"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1276,
    "type": "多选",
    "q": "LTE关键技术有哪些",
    "options": [
      {
        "label": "A",
        "text": "下行OFDM:"
      },
      {
        "label": "B",
        "text": "MIMO"
      },
      {
        "label": "C",
        "text": "HARQ"
      },
      {
        "label": "D",
        "text": "多天线技术"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1277,
    "type": "多选",
    "q": "LTE上行功率控制有哪几种",
    "options": [
      {
        "label": "A",
        "text": "上行共享信道PUSCH的功率控制"
      },
      {
        "label": "B",
        "text": "上行控制信道PUCCH的功率控制"
      },
      {
        "label": "C",
        "text": "SRS的功率控制"
      },
      {
        "label": "D",
        "text": "ICIC控制"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1278,
    "type": "多选",
    "q": "LTE上行实现半静态或动态频率重用方案的指示：\n",
    "options": [
      {
        "label": "A",
        "text": "HII （High Interference Indicator）   "
      },
      {
        "label": "B",
        "text": "TLI （Traffic Load Indicator） "
      },
      {
        "label": "C",
        "text": "LB （Load Blance）    "
      },
      {
        "label": "D",
        "text": "OI （Overload Indicator）"
      }
    ],
    "a": "AD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1279,
    "type": "多选",
    "q": "LTE同步过程中，帧同步和时间同步分别是通过什么信号来实现的？",
    "options": [
      {
        "label": "A",
        "text": "PBCH"
      },
      {
        "label": "B",
        "text": "PSS"
      },
      {
        "label": "C",
        "text": "SSS "
      },
      {
        "label": "D",
        "text": "RS"
      }
    ],
    "a": "B C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1280,
    "type": "多选",
    "q": "LTE网络对于传统3G网络而言,在传输网上具有以下特点:",
    "options": [
      {
        "label": "A",
        "text": "传输网络扁平化,由于取消了RNC节点,eNB直接连接到核心网MME/S-GW,从而简化了传输网络结构,降低了网络迟延"
      },
      {
        "label": "B",
        "text": "网状组网,相邻eNB之间组成网状网络,形成MESH网络结构"
      },
      {
        "label": "C",
        "text": "传输网络全IP化,LTE从空中接口到传输信道全部IP化,所有业务都以IP方式承载"
      },
      {
        "label": "D",
        "text": "LTE大大提高了无线终端的速率,相应的LTE基站对于传输网络的带宽以及连接数需求也大大增加了"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1281,
    "type": "多选",
    "q": "LTE网络规划的内容有哪些",
    "options": [
      {
        "label": "A",
        "text": "TA和TAL规划；"
      },
      {
        "label": "B",
        "text": "PRACH规划；"
      },
      {
        "label": "C",
        "text": "PCI规划；"
      },
      {
        "label": "D",
        "text": "LAC规划"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1282,
    "type": "多选",
    "q": "LTE为了解决深度覆盖的问题，以下哪些措施是不可取的： ",
    "options": [
      {
        "label": "A",
        "text": "增加LTE系统带宽；"
      },
      {
        "label": "B",
        "text": "降低LTE工作频点，采用低频段组网；"
      },
      {
        "label": "C",
        "text": "采用分层组网；"
      },
      {
        "label": "D",
        "text": "采用家庭基站等新型设备"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1283,
    "type": "多选",
    "q": "LTE系统的L2（Layer 2）包括哪几层：",
    "options": [
      {
        "label": "A",
        "text": "PDCP"
      },
      {
        "label": "B",
        "text": "RLC"
      },
      {
        "label": "C",
        "text": "MAC"
      },
      {
        "label": "D",
        "text": "RRC"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1284,
    "type": "多选",
    "q": "LTE系统多址方式包括",
    "options": [
      {
        "label": "A",
        "text": "TDMA "
      },
      {
        "label": "B",
        "text": "CDMA"
      },
      {
        "label": "C",
        "text": "OFDMA"
      },
      {
        "label": "D",
        "text": "SC-FDMA"
      }
    ],
    "a": "CD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1285,
    "type": "多选",
    "q": "LTE系统峰值速率需求是根据如下天线设置定义的：",
    "options": [
      {
        "label": "A",
        "text": "下行峰值速率指标需要在UE配置2个接收天线的情况下满足"
      },
      {
        "label": "B",
        "text": "下行峰值速率指标需要在基站配置2个接收天线的情况下满足 "
      },
      {
        "label": "C",
        "text": "上行峰值速率指标需要在UE配置1个接收天线的情况下满足 "
      },
      {
        "label": "D",
        "text": "上行峰值速率指标需要在基站配置2个接收天线的情况下满"
      }
    ],
    "a": "AC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1286,
    "type": "多选",
    "q": "LTE系统共有个物理小区IDPCI，由主同步信号和辅同步信号的组合来标识。",
    "options": [
      {
        "label": "A",
        "text": 501.0
      },
      {
        "label": "B",
        "text": 502.0
      },
      {
        "label": "C",
        "text": 503.0
      },
      {
        "label": "D",
        "text": 504.0
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1287,
    "type": "多选",
    "q": "LTE系统无线资源主要有",
    "options": [
      {
        "label": "A",
        "text": "时隙"
      },
      {
        "label": "B",
        "text": "子载波"
      },
      {
        "label": "C",
        "text": "天线端口"
      },
      {
        "label": "D",
        "text": "码道"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1288,
    "type": "多选",
    "q": "LTE系统支持MIMO技术，包括：",
    "options": [
      {
        "label": "A",
        "text": "空间复用 "
      },
      {
        "label": "B",
        "text": "波束赋行"
      },
      {
        "label": "C",
        "text": "传输分集"
      },
      {
        "label": "D",
        "text": "功率控制"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1289,
    "type": "多选",
    "q": "LTE系统中,RRC包括的状态有:",
    "options": [
      {
        "label": "A",
        "text": "RRC_IDLE"
      },
      {
        "label": "B",
        "text": " RRC_DETACH"
      },
      {
        "label": "C",
        "text": " RRC_CONNECTED"
      },
      {
        "label": "D",
        "text": ""
      }
    ],
    "a": "AC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1290,
    "type": "多选",
    "q": "LTE系统中上行支持哪些调制方式",
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
        "text": "FSK "
      },
      {
        "label": "D",
        "text": "64QAM"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1291,
    "type": "多选",
    "q": "LTE下行物理信道主要有（）几种模式",
    "options": [
      {
        "label": "A",
        "text": "物理下行共享信道PDSCH"
      },
      {
        "label": "B",
        "text": "物理随机接入信道PRACH"
      },
      {
        "label": "C",
        "text": "物理下行控制信道PDCCH"
      },
      {
        "label": "D",
        "text": "物理广播信道PBCH"
      }
    ],
    "a": "ACD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1292,
    "type": "多选",
    "q": "LTE支持的调度方式包括：\n",
    "options": [
      {
        "label": "A",
        "text": "Proportional Fair"
      },
      {
        "label": "B",
        "text": "Proportional Demand"
      },
      {
        "label": "C",
        "text": "Max Aggregate Throughput"
      },
      {
        "label": "D",
        "text": "以上都不是"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1293,
    "type": "多选",
    "q": "LTE中，不同无线技术之间，触发测量报告的事件有：",
    "options": [
      {
        "label": "A",
        "text": "邻区优于门限值"
      },
      {
        "label": "B",
        "text": "邻区优于本小区，并超过偏置值"
      },
      {
        "label": "C",
        "text": "本小区低于门限值，并邻区优于门限值"
      },
      {
        "label": "D",
        "text": "本小区低于门限值）"
      }
    ],
    "a": "AC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1294,
    "type": "多选",
    "q": "LTE中动态调度按复用方式分为（）类型。",
    "options": [
      {
        "label": "A",
        "text": "时域调度（TDM）"
      },
      {
        "label": "B",
        "text": "频域调度（FDM）"
      },
      {
        "label": "C",
        "text": "空域调度（SDM）"
      },
      {
        "label": "D",
        "text": "码域调度（CDM）"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1295,
    "type": "多选",
    "q": "MAC子层的功能包括：\n",
    "options": [
      {
        "label": "A",
        "text": "逻辑信道与传输信道之间的映射"
      },
      {
        "label": "B",
        "text": "RLC协议数据单元的复用与解复用"
      },
      {
        "label": "C",
        "text": "根据传输块（TB）大小进行动态分段"
      },
      {
        "label": "D",
        "text": "同一个UE不同逻辑信道之间的优先级管理"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1296,
    "type": "多选",
    "q": "MIMO模式中分集与复用之间的切换主要取决于：",
    "options": [
      {
        "label": "A",
        "text": "接收信噪比 "
      },
      {
        "label": "B",
        "text": "信道相关性"
      },
      {
        "label": "C",
        "text": "RSRP "
      },
      {
        "label": "D",
        "text": "天线个数"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1297,
    "type": "多选",
    "q": "MIMO天线可以起（）作用：",
    "options": [
      {
        "label": "A",
        "text": "收发分集  "
      },
      {
        "label": "B",
        "text": "空间复用 "
      },
      {
        "label": "C",
        "text": " 赋形抗干扰  "
      },
      {
        "label": "D",
        "text": "用户定位"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1298,
    "type": "多选",
    "q": "Miperf灌包工具可实现的传输模式有",
    "options": [
      {
        "label": "A",
        "text": "ATM"
      },
      {
        "label": "B",
        "text": "UDP"
      },
      {
        "label": "C",
        "text": "TCP"
      },
      {
        "label": "D",
        "text": "64QAM"
      }
    ],
    "a": "BC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1299,
    "type": "多选",
    "q": "MME具有哪些功能？ ",
    "options": [
      {
        "label": "A",
        "text": "寻呼消息分发"
      },
      {
        "label": "B",
        "text": "空闲状态的移动性管理"
      },
      {
        "label": "C",
        "text": "接入层信令的加密与完整性保护 "
      },
      {
        "label": "D",
        "text": "非接入层信令的加密与完整性保护"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1300,
    "type": "多选",
    "q": "OFDM的主要缺点是：",
    "options": [
      {
        "label": "A",
        "text": "易造成自干扰，容量往往受限于上行"
      },
      {
        "label": "B",
        "text": "信号峰均比过高，能量利用效率不高"
      },
      {
        "label": "C",
        "text": "时间同步要求较高"
      },
      {
        "label": "D",
        "text": "频率同步要求较高"
      }
    ],
    "a": "BD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1301,
    "type": "多选",
    "q": "OFDM技术的优势包括",
    "options": [
      {
        "label": "A",
        "text": "频谱效率高"
      },
      {
        "label": "B",
        "text": "带宽扩展性强"
      },
      {
        "label": "C",
        "text": "抗多径衰落"
      },
      {
        "label": "D",
        "text": "频域调度和自适应"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1302,
    "type": "多选",
    "q": "PCI由哪几部分组成",
    "options": [
      {
        "label": "A",
        "text": "主同步序列"
      },
      {
        "label": "B",
        "text": "辅同步序列"
      },
      {
        "label": "C",
        "text": "随机序列"
      },
      {
        "label": "D",
        "text": "跳频序列"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1303,
    "type": "多选",
    "q": "PDCP层的主要功能包括如下：",
    "options": [
      {
        "label": "A",
        "text": "头压缩和解压缩"
      },
      {
        "label": "B",
        "text": "执行安全机制"
      },
      {
        "label": "C",
        "text": "支持切换功能"
      },
      {
        "label": "D",
        "text": "丢弃无效数据"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1304,
    "type": "多选",
    "q": "PHICH_duration用来表示PHICH持续多少个OFDM符号, 取值可以是()",
    "options": [
      {
        "label": "A",
        "text": "A:1"
      },
      {
        "label": "B",
        "text": "B:2"
      },
      {
        "label": "C",
        "text": "C:3"
      },
      {
        "label": "D",
        "text": "D;4"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1305,
    "type": "多选",
    "q": "PMCH不能在子帧()中传输。",
    "options": [
      {
        "label": "A",
        "text": "A:0"
      },
      {
        "label": "B",
        "text": "B:1"
      },
      {
        "label": "C",
        "text": "C:3"
      },
      {
        "label": "D",
        "text": "D:5"
      }
    ],
    "a": "AD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1306,
    "type": "多选",
    "q": "PSS的主要功能是",
    "options": [
      {
        "label": "A",
        "text": "获得物理层小区ID"
      },
      {
        "label": "B",
        "text": "完成符号同步"
      },
      {
        "label": "C",
        "text": "完成帧同步"
      },
      {
        "label": "D",
        "text": "获得CP长度信息"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1307,
    "type": "多选",
    "q": "PUSCH的跳频类型分为（）和（）两种方式  ",
    "options": [
      {
        "label": "A",
        "text": "子帧内跳频"
      },
      {
        "label": "B",
        "text": "时隙内跳频"
      },
      {
        "label": "C",
        "text": "子帧间跳频"
      },
      {
        "label": "D",
        "text": "时隙间跳频"
      }
    ],
    "a": "AC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1308,
    "type": "多选",
    "q": "PUSCH功率控制的闭环功控有（）和（）两种情况  ",
    "options": [
      {
        "label": "A",
        "text": "累积值"
      },
      {
        "label": "B",
        "text": "绝对值"
      },
      {
        "label": "C",
        "text": "平均值 "
      },
      {
        "label": "D",
        "text": "最大值"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1309,
    "type": "多选",
    "q": "PUSCH支持的上报模式包括：",
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
        "text": "开环空间复用"
      },
      {
        "label": "D",
        "text": "闭环空间复用"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1310,
    "type": "多选",
    "q": "RLC可以配置为三种数据传输模式，分别是 ",
    "options": [
      {
        "label": "A",
        "text": "TM"
      },
      {
        "label": "B",
        "text": "AM"
      },
      {
        "label": "C",
        "text": "OM"
      },
      {
        "label": "D",
        "text": "UM"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1311,
    "type": "多选",
    "q": "RRU下行的基本功能是 ",
    "options": [
      {
        "label": "A",
        "text": "对基带数字信号进行数模变换和IQ调制 "
      },
      {
        "label": "B",
        "text": "对调制后信号混频到所需要的频率"
      },
      {
        "label": "C",
        "text": "对信号进行放大滤波 "
      },
      {
        "label": "D",
        "text": "把信号经天线发送到空中"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1312,
    "type": "多选",
    "q": "S1接口控制平面与用户平面类似，也是基于IP传输的，其传输网络层包括哪些？",
    "options": [
      {
        "label": "A",
        "text": "SCTP层"
      },
      {
        "label": "B",
        "text": "物理层"
      },
      {
        "label": "C",
        "text": "IP层"
      },
      {
        "label": "D",
        "text": "数据链路层；"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1313,
    "type": "多选",
    "q": "SAE网络的边界网关，提供承载控制计费地址分配和非3GPP接入等功能的网元    ",
    "options": [
      {
        "label": "A",
        "text": "MME"
      },
      {
        "label": "B",
        "text": "S-GW"
      },
      {
        "label": "C",
        "text": "P-GW"
      },
      {
        "label": "D",
        "text": "HSS"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1314,
    "type": "多选",
    "q": "S-GW和P-GW之间的接口  ",
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
        "text": "S5"
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
    "id": 1315,
    "type": "多选",
    "q": "SINR值好坏与什么有关",
    "options": [
      {
        "label": "A",
        "text": "UE收到的RSRP"
      },
      {
        "label": "B",
        "text": "干扰功率"
      },
      {
        "label": "C",
        "text": "噪声功率"
      },
      {
        "label": "D",
        "text": "频率"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1316,
    "type": "多选",
    "q": "SON的主要功能包括哪些？",
    "options": [
      {
        "label": "A",
        "text": "自升级"
      },
      {
        "label": "B",
        "text": "自优化"
      },
      {
        "label": "C",
        "text": "自配置"
      },
      {
        "label": "D",
        "text": "自愈"
      }
    ],
    "a": "BCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1317,
    "type": "多选",
    "q": "SSS的主要功能是：",
    "options": [
      {
        "label": "A",
        "text": "获得物理层小区ID"
      },
      {
        "label": "B",
        "text": "完成符号同步 "
      },
      {
        "label": "C",
        "text": "完成帧同步"
      },
      {
        "label": "D",
        "text": "获得CP长度信息"
      }
    ],
    "a": "CD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1318,
    "type": "多选",
    "q": "TD-LTE室内覆盖面临的挑战",
    "options": [
      {
        "label": "A",
        "text": "覆盖场景复杂多样"
      },
      {
        "label": "B",
        "text": "信号频段较高，覆盖能力差"
      },
      {
        "label": "C",
        "text": "双流模式对室分系统工程改造要求较高"
      },
      {
        "label": "D",
        "text": "与WLAN系统存在复杂的互干扰问题"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1319,
    "type": "多选",
    "q": "TM7的应用场景是 ",
    "options": [
      {
        "label": "A",
        "text": "主要应用于单天线传输的场合。"
      },
      {
        "label": "B",
        "text": "主要用来提高小区的容量"
      },
      {
        "label": "C",
        "text": "单天线beamforing，主要也是小区边缘，能够有效对抗干扰。"
      },
      {
        "label": "D",
        "text": "适合于小区边缘信道情况比较复杂，干扰较大的情况，有时候也用于高速的情况"
      }
    ],
    "a": "C ",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1320,
    "type": "多选",
    "q": "TTI bundling也称为子帧捆绑，是LTE系统中一种特殊的调度方式，它是针对处于小区边缘的VoIP用户而设计的，其定义是：\n",
    "options": [
      {
        "label": "A",
        "text": "在连续的4个上行子帧发射同一传输块"
      },
      {
        "label": "B",
        "text": "且只在第一个TTI对应发射时刻有PDCCH"
      },
      {
        "label": "C",
        "text": "只在最后一个TTI（即，第4个TTI）对应的发射时刻有PHICH"
      },
      {
        "label": "D",
        "text": "重传也是针对4个连续上行TTI发射"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1321,
    "type": "多选",
    "q": "UE的传输模式包括：\n",
    "options": [
      {
        "label": "A",
        "text": "Single-antenna port ：port0port5"
      },
      {
        "label": "B",
        "text": "Transmit diversity&spatial multiplexing"
      },
      {
        "label": "C",
        "text": "Open-loop&Closed-loop  spatial multiplexing"
      },
      {
        "label": "D",
        "text": "Multi-user MIMO"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1322,
    "type": "多选",
    "q": "UPB板主要有哪些功能：（）",
    "options": [
      {
        "label": "A",
        "text": "实现LTE eNodeB用户面处理"
      },
      {
        "label": "B",
        "text": "实现与CC信令流和媒体流交换"
      },
      {
        "label": "C",
        "text": "实现UPB与BPG的媒体流交换；"
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
    "id": 1323,
    "type": "多选",
    "q": "X2接口支持的功能有：（）",
    "options": [
      {
        "label": "A",
        "text": "漫游和区域限制支持功能"
      },
      {
        "label": "B",
        "text": "小区间干扰协调"
      },
      {
        "label": "C",
        "text": "流量控制功能和拥塞控制功能"
      },
      {
        "label": "D",
        "text": "负荷管理"
      }
    ],
    "a": "BD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1324,
    "type": "多选",
    "q": "比例公平调度与其他调度算法相比兼顾了：",
    "options": [
      {
        "label": "A",
        "text": "系统的效率"
      },
      {
        "label": "B",
        "text": "用户的分布情况"
      },
      {
        "label": "C",
        "text": "用户的行为"
      },
      {
        "label": "D",
        "text": "用户之间的公平性"
      }
    ],
    "a": "AD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1325,
    "type": "多选",
    "q": "参考信号的正交性可以通过下列方法实现：",
    "options": [
      {
        "label": "A",
        "text": "FDM方法"
      },
      {
        "label": "B",
        "text": "CDM方法"
      },
      {
        "label": "C",
        "text": "TDM方法"
      },
      {
        "label": "D",
        "text": "以上几种方法的合并"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1326,
    "type": "多选",
    "q": "此次厦门LTE测试包含哪些测试项目",
    "options": [
      {
        "label": "A",
        "text": "面向建设-隧道覆盖特殊场景"
      },
      {
        "label": "B",
        "text": "面向优化-多邻区干扰测试"
      },
      {
        "label": "C",
        "text": "面向优化-不同网络负荷下的网络性能优化"
      },
      {
        "label": "D",
        "text": "新技术-40M双载波增强方案组网测试"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1327,
    "type": "多选",
    "q": "定义E-UTRAN架构及E-UTRAN接口的工作主要遵循以下基本原则：",
    "options": [
      {
        "label": "A",
        "text": "信令与数据传输在逻辑上是独立的；         "
      },
      {
        "label": "B",
        "text": "E-UTRAN与演进后的分组交换核心网（EPC）在功能上是分开的：   "
      },
      {
        "label": "C",
        "text": "RRC连接的移动性管理完全是由E-UTRAN进行控制的，使得核心网对于无线资源的处理不可见；   "
      },
      {
        "label": "D",
        "text": "E-UTRAN接口上的功能，应定义得尽量简化，选项应尽可能得少。"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1328,
    "type": "多选",
    "q": "对于FDD，主同步信号在时隙（）中传输：",
    "options": [
      {
        "label": "A",
        "text": "TS0"
      },
      {
        "label": "B",
        "text": "TS1"
      },
      {
        "label": "C",
        "text": "TS10 "
      },
      {
        "label": "D",
        "text": "TS11"
      }
    ],
    "a": "AC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1329,
    "type": "多选",
    "q": "多天线技术中，主要的增益包括：\n ",
    "options": [
      {
        "label": "A",
        "text": "分集增益（diverstiy gain） "
      },
      {
        "label": "B",
        "text": "阵列增益(array gain )"
      },
      {
        "label": "C",
        "text": "空间复用增益 （spatial multiplex gain）"
      },
      {
        "label": "D",
        "text": "编码增益（coding gain））"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1330,
    "type": "多选",
    "q": "服务网关具有哪些功能？",
    "options": [
      {
        "label": "A",
        "text": "安全控制"
      },
      {
        "label": "B",
        "text": "寻呼消息的调度与传输"
      },
      {
        "label": "C",
        "text": "终止由于寻呼原因产生的用户平面数据包"
      },
      {
        "label": "D",
        "text": "支持由于UE移动性产生的用户平面切换"
      }
    ],
    "a": "CD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1331,
    "type": "多选",
    "q": "根据ITU-R对第三代移动通信系统（3G）的频谱划分，3G频谱被划分为： ",
    "options": [
      {
        "label": "A",
        "text": "成对频谱"
      },
      {
        "label": "B",
        "text": "对称频谱；"
      },
      {
        "label": "C",
        "text": "非成对频谱；"
      },
      {
        "label": "D",
        "text": "非对称频谱  "
      }
    ],
    "a": "AC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 1332,
    "type": "多选",
    "q": "功率控制的类型包括（）",
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
        "text": "内环功控；"
      },
      {
        "label": "D",
        "text": "外环功控"
      }
    ],
    "a": "ABCD",
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
for (var i=0;i<10; i++){
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



