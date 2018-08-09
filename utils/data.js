
const question_all = [
  {
    "id": 1,
    "type": "单选",
    "q": "（）不相关的各个天线上分别发送多个数据流，利用多径衰落，在不增加带宽和天线发送功率的情况下，提高信道及频谱利用率，下行数据的传输质量。",
    "options": [
      {
        "label": "A",
        "text": "OFDM"
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
        "text": "AMC"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 2,
    "type": "单选",
    "q": "（）分组数据接口的终接点，与各分组数据网络进行连接。它提供与外部分组数据网络会话的定位功能",
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
    "id": 3,
    "type": "单选",
    "q": "（）负责UE用户平面数据的传送、转发和路由切换等",
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
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 4,
    "type": "单选",
    "q": "（）将信道分成若干正交子信道，将高速数据信号转换成并行的低速子数据流，调制到在每个子信道上进行传输。",
    "options": [
      {
        "label": "A",
        "text": "OFDM"
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
        "text": "AMC"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 5,
    "type": "单选",
    "q": "（）接口是E-NodeB之间的接口",
    "options": [
      {
        "label": "A",
        "text": "X2"
      },
      {
        "label": "B",
        "text": "X3"
      },
      {
        "label": "C",
        "text": "X4"
      },
      {
        "label": "D",
        "text": "X5"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 6,
    "type": "单选",
    "q": "（）仅用于波束赋型模式，用于UE解调",
    "options": [
      {
        "label": "A",
        "text": "DMRS"
      },
      {
        "label": "B",
        "text": "DRS"
      },
      {
        "label": "C",
        "text": "SRS"
      },
      {
        "label": "D",
        "text": "CRS"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 7,
    "type": "单选",
    "q": "（）信道映射的顺序是：",
    "options": [
      {
        "label": "A",
        "text": "PDSCH，PDCCH，PHICH，固定位置信道"
      },
      {
        "label": "B",
        "text": "PHICH、PDSCH、PDCCH、固定位置信道移动通信"
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
    "id": 8,
    "type": "单选",
    "q": "（）用于SAE网络，也接入网接入核心网的第一个控制平面节点，用于本地接入的控制。",
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
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 9,
    "type": "单选",
    "q": "（）用于估计上行信道域信息，做频率选择性调度",
    "options": [
      {
        "label": "A",
        "text": "DMRS"
      },
      {
        "label": "B",
        "text": "DRS"
      },
      {
        "label": "C",
        "text": "SRS"
      },
      {
        "label": "D",
        "text": "CRS"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 10,
    "type": "单选",
    "q": "（）用于上行控制和数据信道的相关解调",
    "options": [
      {
        "label": "A",
        "text": "DMRS"
      },
      {
        "label": "B",
        "text": "DRS"
      },
      {
        "label": "C",
        "text": "SRS"
      },
      {
        "label": "D",
        "text": "CRS"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 11,
    "type": "单选",
    "q": "（）用于下行信道估计及非beamforming模式下的解调、调度上下行资源及切换测量；（ DRS）仅用于波束赋型模式，用于UE解调；（ DMRS）用于上行控制和数据信道的相关解调；（ SRS）用于估计上行信道域信息，做频率选择性调度。",
    "options": [
      {
        "label": "A",
        "text": "DMRS"
      },
      {
        "label": "B",
        "text": "DRS"
      },
      {
        "label": "C",
        "text": "SRS"
      },
      {
        "label": "D",
        "text": "CRS"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 12,
    "type": "单选",
    "q": "（CRS）用于下行信道估计及非beamforming模式下的解调、调度上下行资源及切换测量；（ DRS）仅用于波束赋型模式，用于UE解调；（ DMRS）用于上行控制和数据信道的相关解调；（）用于估计上行信道域信息，做频率选择性调度。",
    "options": [
      {
        "label": "A",
        "text": "DMRS"
      },
      {
        "label": "B",
        "text": "DRS"
      },
      {
        "label": "C",
        "text": "SRS"
      },
      {
        "label": "D",
        "text": "CRS"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 13,
    "type": "单选",
    "q": "（CRS）用于下行信道估计及非beamforming模式下的解调、调度上下行资源及切换测量；（ DRS）仅用于波束赋型模式，用于UE解调；（）用于上行控制和数据信道的相关解调；（ SRS）用于估计上行信道域信息，做频率选择性调度。",
    "options": [
      {
        "label": "A",
        "text": "DMRS"
      },
      {
        "label": "B",
        "text": "DRS"
      },
      {
        "label": "C",
        "text": "SRS"
      },
      {
        "label": "D",
        "text": "CRS"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 14,
    "type": "单选",
    "q": "（CRS）用于下行信道估计及非beamforming模式下的解调、调度上下行资源及切换测量；（）仅用于波束赋型模式，用于UE解调；（ DMRS）用于上行控制和数据信道的相关解调；（ SRS）用于估计上行信道域信息，做频率选择性调度。",
    "options": [
      {
        "label": "A",
        "text": "DMRS"
      },
      {
        "label": "B",
        "text": "DRS"
      },
      {
        "label": "C",
        "text": "SRS"
      },
      {
        "label": "D",
        "text": "CRS"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 15,
    "type": "单选",
    "q": "16QAM一个相位有几个信息",
    "options": [
      {
        "label": "A",
        "text": 1.0
      },
      {
        "label": "B",
        "text": 2.0
      },
      {
        "label": "C",
        "text": 3.0
      },
      {
        "label": "D",
        "text": 4.0
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 16,
    "type": "单选",
    "q": "20M带宽对应多少RB",
    "options": [
      {
        "label": "A",
        "text": 100.0
      },
      {
        "label": "B",
        "text": 50.0
      },
      {
        "label": "C",
        "text": 75.0
      },
      {
        "label": "D",
        "text": 25.0
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 17,
    "type": "单选",
    "q": "20兆带宽有（）个RB",
    "options": [
      {
        "label": "A",
        "text": 80.0
      },
      {
        "label": "B",
        "text": 90.0
      },
      {
        "label": "C",
        "text": 100.0
      },
      {
        "label": "D",
        "text": 200.0
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 18,
    "type": "单选",
    "q": "2T2R SFBC表示",
    "options": [
      {
        "label": "A",
        "text": "传输分集，速率高"
      },
      {
        "label": "B",
        "text": "传输分集，速率不高"
      },
      {
        "label": "C",
        "text": "空间复用，速率高"
      },
      {
        "label": "D",
        "text": "空间复用，速率不高"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 19,
    "type": "单选",
    "q": "2T2T OLSM表示",
    "options": [
      {
        "label": "A",
        "text": "传输分集，速率高"
      },
      {
        "label": "B",
        "text": "传输分集，速率不高"
      },
      {
        "label": "C",
        "text": "空间复用，速率高"
      },
      {
        "label": "D",
        "text": "空间复用，速率不高"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 20,
    "type": "单选",
    "q": "3GPP要求LTE系统每MHz上行平均用户吞吐量应达到R6 HSDPA的（）倍",
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
    "id": 21,
    "type": "单选",
    "q": "3GPP要求LTE系统每MHz下行平均用户吞吐量应达到R6 HSDPA的（）倍",
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
    "id": 22,
    "type": "单选",
    "q": "4G表示？",
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
    "id": 23,
    "type": "单选",
    "q": "BCH的传输时间间隔是",
    "options": [
      {
        "label": "A",
        "text": "10ms"
      },
      {
        "label": "B",
        "text": "20ms"
      },
      {
        "label": "C",
        "text": "40ms"
      },
      {
        "label": "D",
        "text": "80ms"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 24,
    "type": "单选",
    "q": "CQT测试在什么地方",
    "options": [
      {
        "label": "A",
        "text": "车内"
      },
      {
        "label": "B",
        "text": "车外"
      },
      {
        "label": "C",
        "text": "无所谓"
      },
      {
        "label": "D",
        "text": "无信号的地方"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 25,
    "type": "单选",
    "q": "EARFCN表示什么意思",
    "options": [
      {
        "label": "A",
        "text": "中心频点"
      },
      {
        "label": "B",
        "text": "传送模式"
      },
      {
        "label": "C",
        "text": "信道"
      },
      {
        "label": "D",
        "text": "载波"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 26,
    "type": "单选",
    "q": "eNB的GPS连接在（）单板上。",
    "options": [
      {
        "label": "A",
        "text": "BPG"
      },
      {
        "label": "B",
        "text": "UPB"
      },
      {
        "label": "C",
        "text": "CC"
      },
      {
        "label": "D",
        "text": "SA"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 27,
    "type": "单选",
    "q": "eNB之间通过什么接口进行通信,可进行小区间优化的无线资源管理？",
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
        "text": "X3"
      },
      {
        "label": "D",
        "text": "X4"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 28,
    "type": "单选",
    "q": "eNB中负责物理层管理的是（）单板",
    "options": [
      {
        "label": "A",
        "text": "BPG"
      },
      {
        "label": "B",
        "text": "UPB"
      },
      {
        "label": "C",
        "text": "CC"
      },
      {
        "label": "D",
        "text": "SA"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 29,
    "type": "单选",
    "q": "eNodeB侧对控制面数据经过（）协议与MME交互。",
    "options": [
      {
        "label": "A",
        "text": "GTPU/UDP"
      },
      {
        "label": "B",
        "text": "X2AP/SCTP"
      },
      {
        "label": "C",
        "text": "S1AP/SCTP"
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
    "id": 30,
    "type": "单选",
    "q": "E-RAB的建立，均可由（）和（ EPC）发起，（ eNodeB）不可发起。",
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
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 31,
    "type": "单选",
    "q": "E-RAB的建立，均可由（UE ）和（ EPC）发起，（）不可发起。",
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
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 32,
    "type": "单选",
    "q": "E-RAB的建立，均可由（UE ）和（）发起，（ eNode）不可发起。",
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
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 33,
    "type": "单选",
    "q": "E-UTRA系统覆盖半径最大可达",
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
    "id": 34,
    "type": "单选",
    "q": "FDD上行传输和下行传输？",
    "options": [
      {
        "label": "A",
        "text": "在不同载波频段"
      },
      {
        "label": "B",
        "text": "在相同载波频段"
      },
      {
        "label": "C",
        "text": "都可以"
      },
      {
        "label": "D",
        "text": "固定在某一载波频段"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 35,
    "type": "单选",
    "q": "FDD优势有哪些？",
    "options": [
      {
        "label": "A",
        "text": "抗干扰性好"
      },
      {
        "label": "B",
        "text": "芯片成熟"
      },
      {
        "label": "C",
        "text": "价格昂贵"
      },
      {
        "label": "D",
        "text": "支持更高移动速度"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 36,
    "type": "单选",
    "q": "FDD子帧长度",
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
    "id": 37,
    "type": "单选",
    "q": "FFR中的中心用户CCU和边缘用户CEU是通过测量的（）与预先设定的门限值进行比较或服务小区和干扰小区的路损比值来区分",
    "options": [
      {
        "label": "A",
        "text": "RSRP  "
      },
      {
        "label": "B",
        "text": "RSRQ  "
      },
      {
        "label": "C",
        "text": "SINR  "
      },
      {
        "label": "D",
        "text": "C/I"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 38,
    "type": "单选",
    "q": "FTP下载什么时候开始录制LOG",
    "options": [
      {
        "label": "A",
        "text": "开始下载的时候"
      },
      {
        "label": "B",
        "text": "下载快结束的时候"
      },
      {
        "label": "C",
        "text": "下载速率稳定的时候"
      },
      {
        "label": "D",
        "text": "无要求"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 39,
    "type": "单选",
    "q": "FTP下载选择多大的文件",
    "options": [
      {
        "label": "A",
        "text": "10M"
      },
      {
        "label": "B",
        "text": "50M"
      },
      {
        "label": "C",
        "text": "100M"
      },
      {
        "label": "D",
        "text": "1G"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 40,
    "type": "单选",
    "q": "GPS需要（）颗卫星进行定位",
    "options": [
      {
        "label": "A",
        "text": 1.0
      },
      {
        "label": "B",
        "text": 2.0
      },
      {
        "label": "C",
        "text": 3.0
      },
      {
        "label": "D",
        "text": 4.0
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 41,
    "type": "单选",
    "q": "HARQ的信息是承载在哪个信道上的",
    "options": [
      {
        "label": "A",
        "text": "PDCCH"
      },
      {
        "label": "B",
        "text": "PDSCH"
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
    "id": 42,
    "type": "单选",
    "q": "HII表示什么意思？",
    "options": [
      {
        "label": "A",
        "text": "过载指示"
      },
      {
        "label": "B",
        "text": "高干扰指示"
      },
      {
        "label": "C",
        "text": "高温告警"
      },
      {
        "label": "D",
        "text": "电量不足"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 43,
    "type": "单选",
    "q": "LTE ANR的过程中，UE通过（）信道获得邻区的GCI信息",
    "options": [
      {
        "label": "A",
        "text": "BCH  "
      },
      {
        "label": "B",
        "text": "CCH  "
      },
      {
        "label": "C",
        "text": "MIB "
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
    "id": 44,
    "type": "单选",
    "q": "LTE FDD模式支持最多的HARQ 进程数为",
    "options": [
      {
        "label": "A",
        "text": 1.0
      },
      {
        "label": "B",
        "text": 2.0
      },
      {
        "label": "C",
        "text": 4.0
      },
      {
        "label": "D",
        "text": 8.0
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 45,
    "type": "单选",
    "q": "LTE PDCP支持几种支持加密？",
    "options": [
      {
        "label": "A",
        "text": "只能1个"
      },
      {
        "label": "B",
        "text": "只能两个"
      },
      {
        "label": "C",
        "text": "只能三个"
      },
      {
        "label": "D",
        "text": "多个"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 46,
    "type": "单选",
    "q": "LTE 系统传输用户数据主要使用（）信道",
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
    "id": 47,
    "type": "单选",
    "q": "LTE（3：9G）中下行调制有几种",
    "options": [
      {
        "label": "A",
        "text": 1.0
      },
      {
        "label": "B",
        "text": 2.0
      },
      {
        "label": "C",
        "text": 3.0
      },
      {
        "label": "D",
        "text": 4.0
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 48,
    "type": "单选",
    "q": "LTE采用的切换方式为",
    "options": [
      {
        "label": "A",
        "text": "终端辅助的后向切换 "
      },
      {
        "label": "B",
        "text": "B,网络辅助的后向切换 "
      },
      {
        "label": "C",
        "text": "终端辅助的前向切换 "
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
    "id": 49,
    "type": "单选",
    "q": "LTE采用作为（）下行多址方式",
    "options": [
      {
        "label": "A",
        "text": "CDMA "
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
    "id": 50,
    "type": "单选",
    "q": "LTE的D频段是指",
    "options": [
      {
        "label": "A",
        "text": "1880MHz-1900MHZ"
      },
      {
        "label": "B",
        "text": "2575MHz-2615MHz"
      },
      {
        "label": "C",
        "text": "2330MHz-2370MHz"
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
    "id": 51,
    "type": "单选",
    "q": "LTE的E频段是指",
    "options": [
      {
        "label": "A",
        "text": "1880MHz-1900MHZ"
      },
      {
        "label": "B",
        "text": "2575MHz-2615MHz"
      },
      {
        "label": "C",
        "text": "2330MHz-2370MHz"
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
    "id": 52,
    "type": "单选",
    "q": "LTE的F频段是指",
    "options": [
      {
        "label": "A",
        "text": "1880MHz-1900MHZ"
      },
      {
        "label": "B",
        "text": "2575MHz-2615MHz"
      },
      {
        "label": "C",
        "text": "2330MHz-2370MHz"
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
    "id": 53,
    "type": "单选",
    "q": "LTE的调度周期是多少",
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
    "id": 54,
    "type": "单选",
    "q": "LTE的缩写是？",
    "options": [
      {
        "label": "A",
        "text": "Long Term Evolution"
      },
      {
        "label": "B",
        "text": "Long Time Evolution"
      },
      {
        "label": "C",
        "text": "Long Time Equip"
      },
      {
        "label": "D",
        "text": "Last Term Evolution"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 55,
    "type": "单选",
    "q": "LTE的特殊时隙不包括",
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
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 56,
    "type": "单选",
    "q": "LTE调制方式有哪些",
    "options": [
      {
        "label": "A",
        "text": "16QAM"
      },
      {
        "label": "B",
        "text": "64QAM"
      },
      {
        "label": "C",
        "text": "QPSK"
      },
      {
        "label": "D",
        "text": "32QAM"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 57,
    "type": "单选",
    "q": "LTE共有（）个PCI",
    "options": [
      {
        "label": "A",
        "text": 3.0
      },
      {
        "label": "B",
        "text": 32.0
      },
      {
        "label": "C",
        "text": 512.0
      },
      {
        "label": "D",
        "text": 503.0
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 58,
    "type": "单选",
    "q": "LTE共支持（）个终端等级",
    "options": [
      {
        "label": "A",
        "text": 1.0
      },
      {
        "label": "B",
        "text": 2.0
      },
      {
        "label": "C",
        "text": 5.0
      },
      {
        "label": "D",
        "text": 15.0
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 59,
    "type": "单选",
    "q": "LTE控制面延时小于（）",
    "options": [
      {
        "label": "A",
        "text": "20ms"
      },
      {
        "label": "B",
        "text": "50ms"
      },
      {
        "label": "C",
        "text": "80ms"
      },
      {
        "label": "D",
        "text": "100ms"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 60,
    "type": "单选",
    "q": "LTE上下行传输使用的最小资源单位是？",
    "options": [
      {
        "label": "A",
        "text": "RE"
      },
      {
        "label": "B",
        "text": "RR"
      },
      {
        "label": "C",
        "text": "TE"
      },
      {
        "label": "D",
        "text": "MM"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 61,
    "type": "单选",
    "q": "LTE上行采用SCFDMA是为了",
    "options": [
      {
        "label": "A",
        "text": "降低峰均比"
      },
      {
        "label": "B",
        "text": "增大峰均比"
      },
      {
        "label": "C",
        "text": "降低峰值"
      },
      {
        "label": "D",
        "text": "增大均值"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 62,
    "type": "单选",
    "q": "LTE上行采用什么机制功率控制？",
    "options": [
      {
        "label": "A",
        "text": "开环"
      },
      {
        "label": "B",
        "text": "闭环"
      },
      {
        "label": "C",
        "text": "都可以"
      },
      {
        "label": "D",
        "text": "圆环"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 63,
    "type": "单选",
    "q": "LTE上行功控分为几种？",
    "options": [
      {
        "label": "A",
        "text": "1种"
      },
      {
        "label": "B",
        "text": "2种"
      },
      {
        "label": "C",
        "text": "3种"
      },
      {
        "label": "D",
        "text": "4种"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 64,
    "type": "单选",
    "q": "LTE为了解决深度覆盖的问题，以下哪些措施是不可取的",
    "options": [
      {
        "label": "A",
        "text": "增加LTE系统带宽"
      },
      {
        "label": "B",
        "text": "降低LTE工作频点，采用低频段组网"
      },
      {
        "label": "C",
        "text": "采用分层组网"
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
    "id": 65,
    "type": "单选",
    "q": "LTE系统的业务有",
    "options": [
      {
        "label": "A",
        "text": "CS域"
      },
      {
        "label": "B",
        "text": "PS域"
      },
      {
        "label": "C",
        "text": "CS和PS域"
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
    "id": 66,
    "type": "单选",
    "q": "LTE系统共有（）个物理小区ID（PCI），由主同步信号和辅同步信号的组合来标识",
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
    "id": 67,
    "type": "单选",
    "q": "LTE系统核心网不包括（）网元",
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
        "text": "eNB"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 68,
    "type": "单选",
    "q": "LTE系统接口是",
    "options": [
      {
        "label": "A",
        "text": "物理接口"
      },
      {
        "label": "B",
        "text": "链路接口"
      },
      {
        "label": "C",
        "text": "数据接口"
      },
      {
        "label": "D",
        "text": "逻辑接口"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 69,
    "type": "单选",
    "q": "LTE系统是第几代移动通信系统",
    "options": [
      {
        "label": "A",
        "text": "一"
      },
      {
        "label": "B",
        "text": "二"
      },
      {
        "label": "C",
        "text": "三"
      },
      {
        "label": "D",
        "text": "四"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 70,
    "type": "单选",
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
        "text": "40ms"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 71,
    "type": "单选",
    "q": "LTE系统用户传输数据主要使用",
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
    "id": 72,
    "type": "单选",
    "q": "LTE系统支持（）种带宽",
    "options": [
      {
        "label": "A",
        "text": 6.0
      },
      {
        "label": "B",
        "text": 10.0
      },
      {
        "label": "C",
        "text": 15.0
      },
      {
        "label": "D",
        "text": 5.0
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 73,
    "type": "单选",
    "q": "LTE系统中preamble码有（）个",
    "options": [
      {
        "label": "A",
        "text": 32.0
      },
      {
        "label": "B",
        "text": 64.0
      },
      {
        "label": "C",
        "text": 128.0
      },
      {
        "label": "D",
        "text": 256.0
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 74,
    "type": "单选",
    "q": "LTE系统中UE的切换方式采用",
    "options": [
      {
        "label": "A",
        "text": "软切换"
      },
      {
        "label": "B",
        "text": "硬切换"
      },
      {
        "label": "C",
        "text": "软切换和硬切换其它"
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
    "id": 75,
    "type": "单选",
    "q": "LTE系统中上行不支持哪种调制方式",
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
        "text": "FSK"
      },
      {
        "label": "D",
        "text": "64QAM"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 76,
    "type": "单选",
    "q": "LTE系统子载波间隔通常为",
    "options": [
      {
        "label": "A",
        "text": "10KHz"
      },
      {
        "label": "B",
        "text": "12KHz"
      },
      {
        "label": "C",
        "text": "15KHz"
      },
      {
        "label": "D",
        "text": "16KHz"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 77,
    "type": "单选",
    "q": "LTE下行采用什么技术",
    "options": [
      {
        "label": "A",
        "text": "OFDMA"
      },
      {
        "label": "B",
        "text": "MIMO"
      },
      {
        "label": "C",
        "text": "PUSCH"
      },
      {
        "label": "D",
        "text": "RACH"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 78,
    "type": "单选",
    "q": "LTE下行传输模式主适用于什么场景？",
    "options": [
      {
        "label": "A",
        "text": "弱覆盖"
      },
      {
        "label": "B",
        "text": "信道质量低"
      },
      {
        "label": "C",
        "text": "信道质量高且空间独立性强"
      },
      {
        "label": "D",
        "text": "信道质量高且空间独立性低"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 79,
    "type": "单选",
    "q": "LTE下行没有采用哪项多天线技术",
    "options": [
      {
        "label": "A",
        "text": "SFBC"
      },
      {
        "label": "B",
        "text": "FSTD"
      },
      {
        "label": "C",
        "text": "波束赋形"
      },
      {
        "label": "D",
        "text": "波束赋形"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 80,
    "type": "单选",
    "q": "LTE下行最多支持（）个层的空间复用",
    "options": [
      {
        "label": "A",
        "text": 1.0
      },
      {
        "label": "B",
        "text": 2.0
      },
      {
        "label": "C",
        "text": 3.0
      },
      {
        "label": "D",
        "text": 4.0
      }
    ],
    "a": "D ",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 81,
    "type": "单选",
    "q": "LTE协议规定的UE最大发射功率是",
    "options": [
      {
        "label": "A",
        "text": "20dBm "
      },
      {
        "label": "B",
        "text": "23dBm "
      },
      {
        "label": "C",
        "text": "30dBm "
      },
      {
        "label": "D",
        "text": "33DBm"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 82,
    "type": "单选",
    "q": "LTE协议中，定义了几种PDSCH的传输模式",
    "options": [
      {
        "label": "A",
        "text": 5.0
      },
      {
        "label": "B",
        "text": 6.0
      },
      {
        "label": "C",
        "text": 7.0
      },
      {
        "label": "D",
        "text": 8.0
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 83,
    "type": "单选",
    "q": "LTE协议中规定PCI的数目是",
    "options": [
      {
        "label": "A",
        "text": 512.0
      },
      {
        "label": "B",
        "text": 504.0
      },
      {
        "label": "C",
        "text": 384.0
      },
      {
        "label": "D",
        "text": 508.0
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 84,
    "type": "单选",
    "q": "LTE要求上行速率达到",
    "options": [
      {
        "label": "A",
        "text": "200Mbps"
      },
      {
        "label": "B",
        "text": "150Mbps"
      },
      {
        "label": "C",
        "text": "100Mbps"
      },
      {
        "label": "D",
        "text": "50Mbps"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 85,
    "type": "单选",
    "q": "LTE要求下行速率达到",
    "options": [
      {
        "label": "A",
        "text": "200Mbps"
      },
      {
        "label": "B",
        "text": "150Mbps"
      },
      {
        "label": "C",
        "text": "100Mbps"
      },
      {
        "label": "D",
        "text": "50Mbps"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 86,
    "type": "单选",
    "q": "LTE一共有多少个小区ID？",
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
    "id": 87,
    "type": "单选",
    "q": "LTE用户面延时小于（）",
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
        "text": "5ms"
      },
      {
        "label": "D",
        "text": "10ms"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 88,
    "type": "单选",
    "q": "LTE支持灵活的系统带宽配置，以下哪种带宽是LTE协议不支持的：",
    "options": [
      {
        "label": "A",
        "text": "5M "
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
        "text": "40M"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 89,
    "type": "单选",
    "q": "LTE支持哪种双工方式？",
    "options": [
      {
        "label": "A",
        "text": "TCH"
      },
      {
        "label": "B",
        "text": "CDMA"
      },
      {
        "label": "C",
        "text": "TDD"
      },
      {
        "label": "D",
        "text": "TCD"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 90,
    "type": "单选",
    "q": "LTE中，事件触发测量报告中，事件A3的定义为",
    "options": [
      {
        "label": "A",
        "text": "本小区优于门限值 "
      },
      {
        "label": "B",
        "text": "邻区优于本小区，并超过偏置值 "
      },
      {
        "label": "C",
        "text": "邻区优于门限值 "
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
    "id": 91,
    "type": "单选",
    "q": "LTE中定义的最大小区ID个数为",
    "options": [
      {
        "label": "A",
        "text": 3.0
      },
      {
        "label": "B",
        "text": 168.0
      },
      {
        "label": "C",
        "text": 504.0
      },
      {
        "label": "D",
        "text": 65536.0
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 92,
    "type": "单选",
    "q": "LTE中每个小区用于随机接入的码有多少个",
    "options": [
      {
        "label": "A",
        "text": 30.0
      },
      {
        "label": "B",
        "text": 45.0
      },
      {
        "label": "C",
        "text": 60.0
      },
      {
        "label": "D",
        "text": 64.0
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 93,
    "type": "单选",
    "q": "LTE中有几种接入类型？",
    "options": [
      {
        "label": "A",
        "text": "一种"
      },
      {
        "label": "B",
        "text": "二种"
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
    "id": 94,
    "type": "单选",
    "q": "LTE子载波间隔通常为",
    "options": [
      {
        "label": "A",
        "text": "30KHz"
      },
      {
        "label": "B",
        "text": "45KHz"
      },
      {
        "label": "C",
        "text": "15KHz"
      },
      {
        "label": "D",
        "text": "50KHz"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 95,
    "type": "单选",
    "q": "LTE组网，可以采用同频也可以采用异频，以下哪项说法是错误的",
    "options": [
      {
        "label": "A",
        "text": "10M同频组网相对于3*10M异频组网可以更有效的利用资源，提升频谱效率"
      },
      {
        "label": "B",
        "text": "10M同频组网相对于3*10M异频组网可以提升边缘用户速率"
      },
      {
        "label": "C",
        "text": "10M同频组网相对于3*10M异频组网，小区间干扰更明显"
      },
      {
        "label": "D",
        "text": "10M同频组网相对于3*10M异频组网，算法复杂度要高"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 96,
    "type": "单选",
    "q": "MBSFN参考信号，与MBSFN传输关联，将在天线端口（）上传输",
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
        "text": 4.0
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 97,
    "type": "单选",
    "q": "MIB信息是携带在哪个下行物理层信道中",
    "options": [
      {
        "label": "A",
        "text": "PDCCH "
      },
      {
        "label": "B",
        "text": "PHICH "
      },
      {
        "label": "C",
        "text": "PCFICH "
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
    "id": 98,
    "type": "单选",
    "q": "MME的功能不包括",
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
        "text": "接入层信令的加密与完整性保护"
      },
      {
        "label": "D",
        "text": "非接入层信令的加密与完整性保护"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 99,
    "type": "单选",
    "q": "OI表示什么意思？",
    "options": [
      {
        "label": "A",
        "text": "过载指示"
      },
      {
        "label": "B",
        "text": "质差"
      },
      {
        "label": "C",
        "text": "弱覆盖"
      },
      {
        "label": "D",
        "text": "电量不足"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 100,
    "type": "单选",
    "q": "PBCH的发送周期为（）ms。 ",
    "options": [
      {
        "label": "A",
        "text": 10.0
      },
      {
        "label": "B",
        "text": 20.0
      },
      {
        "label": "C",
        "text": 30.0
      },
      {
        "label": "D",
        "text": 40.0
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 101,
    "type": "单选",
    "q": "PBCH支持的调制方式是",
    "options": [
      {
        "label": "A",
        "text": "BpsK  "
      },
      {
        "label": "B",
        "text": "QPSK  "
      },
      {
        "label": "C",
        "text": "16QAM  "
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
    "id": 102,
    "type": "单选",
    "q": "PCC表示什么意思",
    "options": [
      {
        "label": "A",
        "text": "主载波"
      },
      {
        "label": "B",
        "text": "信道"
      },
      {
        "label": "C",
        "text": "电平"
      },
      {
        "label": "D",
        "text": "语音质量"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 103,
    "type": "单选",
    "q": "PCFICH占用的RE是（）",
    "options": [
      {
        "label": "A",
        "text": "半静态"
      },
      {
        "label": "B",
        "text": "动态"
      },
      {
        "label": "C",
        "text": "静态"
      },
      {
        "label": "D",
        "text": "半动态"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 104,
    "type": "单选",
    "q": "PCI的范围多少",
    "options": [
      {
        "label": "A",
        "text": "1-100"
      },
      {
        "label": "B",
        "text": "0-200"
      },
      {
        "label": "C",
        "text": "0-503"
      },
      {
        "label": "D",
        "text": "0-504"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 105,
    "type": "单选",
    "q": "PDCCH信道是由什么组成？",
    "options": [
      {
        "label": "A",
        "text": "CCM"
      },
      {
        "label": "B",
        "text": "CCH"
      },
      {
        "label": "C",
        "text": "CCE"
      },
      {
        "label": "D",
        "text": "CCT"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 106,
    "type": "单选",
    "q": "PDSCH资源分配时，对于20M带宽，RBG Size的取值为",
    "options": [
      {
        "label": "A",
        "text": 1.0
      },
      {
        "label": "B",
        "text": 2.0
      },
      {
        "label": "C",
        "text": 3.0
      },
      {
        "label": "D",
        "text": 4.0
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 107,
    "type": "单选",
    "q": "PHICH包含（）个REG",
    "options": [
      {
        "label": "A",
        "text": 1.0
      },
      {
        "label": "B",
        "text": 2.0
      },
      {
        "label": "C",
        "text": 3.0
      },
      {
        "label": "D",
        "text": 4.0
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 108,
    "type": "单选",
    "q": "PHICH采用（）调制",
    "options": [
      {
        "label": "A",
        "text": "QPSK"
      },
      {
        "label": "B",
        "text": "16QAM,"
      },
      {
        "label": "C",
        "text": "64QAM"
      },
      {
        "label": "D",
        "text": "GPSK"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 109,
    "type": "单选",
    "q": "PHICH符号个数是由什么获得?",
    "options": [
      {
        "label": "A",
        "text": "PUSCH"
      },
      {
        "label": "B",
        "text": "PRACH"
      },
      {
        "label": "C",
        "text": "自动获得"
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
    "id": 110,
    "type": "单选",
    "q": "PHICH信道承载HARQ的？",
    "options": [
      {
        "label": "A",
        "text": "ACK/NACK"
      },
      {
        "label": "B",
        "text": "ACK/MACK"
      },
      {
        "label": "C",
        "text": "ACK/LACK"
      },
      {
        "label": "D",
        "text": "ACK/TACK"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 111,
    "type": "单选",
    "q": "PHICH占用的 RE是（）",
    "options": [
      {
        "label": "A",
        "text": "半静态"
      },
      {
        "label": "B",
        "text": "动态"
      },
      {
        "label": "C",
        "text": "静态"
      },
      {
        "label": "D",
        "text": "半动态"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 112,
    "type": "单选",
    "q": "PRB的时域大小为（）个时隙",
    "options": [
      {
        "label": "A",
        "text": 1.0
      },
      {
        "label": "B",
        "text": 6.0
      },
      {
        "label": "C",
        "text": 12.0
      },
      {
        "label": "D",
        "text": 18.0
      }
    ],
    "a": "a",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 113,
    "type": "单选",
    "q": "PUCCH是什么信道",
    "options": [
      {
        "label": "A",
        "text": "物理上行共享信道"
      },
      {
        "label": "B",
        "text": "物理上行链路控制信道"
      },
      {
        "label": "C",
        "text": "随机接入信道"
      },
      {
        "label": "D",
        "text": "广播信道"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 114,
    "type": "单选",
    "q": "PUSCH是什么信道",
    "options": [
      {
        "label": "A",
        "text": "物理上行共享信道"
      },
      {
        "label": "B",
        "text": "物理上行控制信道"
      },
      {
        "label": "C",
        "text": "随机接入信道"
      },
      {
        "label": "D",
        "text": "广播信道"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 115,
    "type": "单选",
    "q": "RACH是什么信道",
    "options": [
      {
        "label": "A",
        "text": "物理上行共享信道"
      },
      {
        "label": "B",
        "text": "物理上行控制信道"
      },
      {
        "label": "C",
        "text": "随机接入信道"
      },
      {
        "label": "D",
        "text": "广播信道"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 116,
    "type": "单选",
    "q": "RACH在频域上占用几个RB?",
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
        "text": 6.0
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 117,
    "type": "单选",
    "q": "RF优化测试以什么为主？",
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
        "text": "统计话务报告"
      },
      {
        "label": "D",
        "text": "投诉"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 118,
    "type": "单选",
    "q": "RSRP的定义正确的是",
    "options": [
      {
        "label": "A",
        "text": "对于需要考虑的小区，在需要考虑的测量频带上，承载小区专用参考信号的RE的功率的线性平均值"
      },
      {
        "label": "B",
        "text": "对于需要考虑的小区，在需要考虑的测量频带上，承载MBSFN参考信号的RE的功率的线性平均值"
      },
      {
        "label": "C",
        "text": "对于需要考虑的小区，在需要考虑的测量频带上，承载UE参考信号的RE的功率的线性平均值"
      },
      {
        "label": "D",
        "text": "对于需要考虑的小区，在需要考虑的测量频带上，承载Sounding参考信号的RE的功率的线性平均值"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 119,
    "type": "单选",
    "q": "RSRP正常要求在多少以内",
    "options": [
      {
        "label": "A",
        "text": "-70dBm"
      },
      {
        "label": "B",
        "text": "-80dBm"
      },
      {
        "label": "C",
        "text": "-90dBm"
      },
      {
        "label": "D",
        "text": "-100dBm"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 120,
    "type": "单选",
    "q": "RSRQ单位是什么",
    "options": [
      {
        "label": "A",
        "text": "dBm"
      },
      {
        "label": "B",
        "text": "dB"
      },
      {
        "label": "C",
        "text": "dBi"
      },
      {
        "label": "D",
        "text": "dBd"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 121,
    "type": "单选",
    "q": "RSSI单位是什么",
    "options": [
      {
        "label": "A",
        "text": "dBm"
      },
      {
        "label": "B",
        "text": "dB"
      },
      {
        "label": "C",
        "text": "dBi"
      },
      {
        "label": "D",
        "text": "dBd"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 122,
    "type": "单选",
    "q": "RX antenna 2表示什么意思",
    "options": [
      {
        "label": "A",
        "text": "两个发射天线"
      },
      {
        "label": "B",
        "text": "两个接收天线"
      },
      {
        "label": "C",
        "text": "4个发射天线"
      },
      {
        "label": "D",
        "text": "4个发射天线"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 123,
    "type": "单选",
    "q": "S1接口不支持的功能有",
    "options": [
      {
        "label": "A",
        "text": "SGW承载业务管理功能"
      },
      {
        "label": "B",
        "text": "NAS信令传输功能"
      },
      {
        "label": "C",
        "text": "网络共享功能"
      },
      {
        "label": "D",
        "text": "支持连接态的UE在LTE系统内移动性管理功能"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 124,
    "type": "单选",
    "q": "S1接口的控制面终止在什么上？",
    "options": [
      {
        "label": "A",
        "text": "SGW"
      },
      {
        "label": "B",
        "text": "MME"
      },
      {
        "label": "C",
        "text": "MMH"
      },
      {
        "label": "D",
        "text": "SAW"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 125,
    "type": "单选",
    "q": "S1接口的用户面终止在什么上？",
    "options": [
      {
        "label": "A",
        "text": "SGW"
      },
      {
        "label": "B",
        "text": "MME"
      },
      {
        "label": "C",
        "text": "MMH"
      },
      {
        "label": "D",
        "text": "SAW"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 126,
    "type": "单选",
    "q": "SAE网络的边界网关，提供承载控制、计费、地址分配和非3GPP接入等功能的网元（）",
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
    "id": 127,
    "type": "单选",
    "q": "SCC表示什么意思",
    "options": [
      {
        "label": "A",
        "text": "信道"
      },
      {
        "label": "B",
        "text": "误码率"
      },
      {
        "label": "C",
        "text": "扰码"
      },
      {
        "label": "D",
        "text": "辅载波"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 128,
    "type": "单选",
    "q": "SC-FDMA与OFDM相比",
    "options": [
      {
        "label": "A",
        "text": "能够提高频谱效率"
      },
      {
        "label": "B",
        "text": "能够简化系统实现"
      },
      {
        "label": "C",
        "text": "没区别"
      },
      {
        "label": "D",
        "text": "能够降低峰均比"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 129,
    "type": "单选",
    "q": "S-GW和P-GW之间的接口 （）",
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
    "id": 130,
    "type": "单选",
    "q": "SIB1的传输时间间隔是",
    "options": [
      {
        "label": "A",
        "text": "10ms  "
      },
      {
        "label": "B",
        "text": "20ms  "
      },
      {
        "label": "C",
        "text": "40ms  "
      },
      {
        "label": "D",
        "text": "80ms"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 131,
    "type": "单选",
    "q": "SINR表示什么意思",
    "options": [
      {
        "label": "A",
        "text": "信噪比"
      },
      {
        "label": "B",
        "text": "信道"
      },
      {
        "label": "C",
        "text": "电平"
      },
      {
        "label": "D",
        "text": "语音质量"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 132,
    "type": "单选",
    "q": "TAC/TAU过程描叙正确的是：",
    "options": [
      {
        "label": "A",
        "text": "TAU 只能在IDLE模式下发起，TAU分为普通TAU和周期性TAU"
      },
      {
        "label": "B",
        "text": "TAU过程一定要先进行随机接入，TAC内所有小区的PAGING数量是一样的"
      },
      {
        "label": "C",
        "text": "TAU是NAS层的过程，TAU过程不要先进行随机接入"
      },
      {
        "label": "D",
        "text": "TAC是MME 对UE移动性管理的区域，TAU可以在IDLE或CONNECT模式下发起"
      }
    ],
    "a": "D ",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 133,
    "type": "单选",
    "q": "TDD上行传输和下行传输？",
    "options": [
      {
        "label": "A",
        "text": "在不同载波频段"
      },
      {
        "label": "B",
        "text": "在相同载波频段"
      },
      {
        "label": "C",
        "text": "都可以"
      },
      {
        "label": "D",
        "text": "固定在某一载波频段"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 134,
    "type": "单选",
    "q": "TD-LTE系统中调度用户的最小单位是（），它是由频域上连续12个子载波，时域上连续7个OFDM符号构成，子载波带宽为（PHICH）KHz。",
    "options": [
      {
        "label": "A",
        "text": "RB"
      },
      {
        "label": "B",
        "text": "PRB"
      },
      {
        "label": "C",
        "text": "RAB"
      },
      {
        "label": "D",
        "text": "RE"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 135,
    "type": "单选",
    "q": "TD-LTE系统中调度用户的最小单位是RB，它是由频域上连续（）个子载波，时域上连续7个OFDM符号构成",
    "options": [
      {
        "label": "A",
        "text": 12.0
      },
      {
        "label": "B",
        "text": 10.0
      },
      {
        "label": "C",
        "text": 9.0
      },
      {
        "label": "D",
        "text": 5.0
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 136,
    "type": "单选",
    "q": "TM3不适用于以下哪个应用场景",
    "options": [
      {
        "label": "A",
        "text": "小区边缘"
      },
      {
        "label": "B",
        "text": "小区中部"
      },
      {
        "label": "C",
        "text": "业务带宽高"
      },
      {
        "label": "D",
        "text": "移动速度高"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 137,
    "type": "单选",
    "q": "TM7的应用场景是（）",
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
        "text": "适合于小区边缘信道情况比较复杂，干扰较大的情况，有时候也用于高速的情况。"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 138,
    "type": "单选",
    "q": "Transmission mode1表示什么意",
    "options": [
      {
        "label": "A",
        "text": "多用户mimo"
      },
      {
        "label": "B",
        "text": "开环空间复用"
      },
      {
        "label": "C",
        "text": "闭环预编码"
      },
      {
        "label": "D",
        "text": "单天线传送数据"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 139,
    "type": "单选",
    "q": "Transmission mode一共有几种",
    "options": [
      {
        "label": "A",
        "text": 2.0
      },
      {
        "label": "B",
        "text": 4.0
      },
      {
        "label": "C",
        "text": 6.0
      },
      {
        "label": "D",
        "text": 8.0
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 140,
    "type": "单选",
    "q": "TTACH REQUEST, ATTACH ACCEPT分别包含于哪条空口RRC消息内:（）",
    "options": [
      {
        "label": "A",
        "text": " RRC CONNECTION REQUEST, RRC CONNECTION SETUP"
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
    "id": 141,
    "type": "单选",
    "q": "TTI BunDling也称为子帧捆绑，是LTE系统中一种特殊的调度方式，它是针对处于小区边缘的VoIP用户而设计的。TTI BunDling仅用于",
    "options": [
      {
        "label": "A",
        "text": "上行 "
      },
      {
        "label": "B",
        "text": "下行 "
      },
      {
        "label": "C",
        "text": "上下行均用  "
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
    "id": 142,
    "type": "单选",
    "q": "TTI BunDling支持的调制方式为",
    "options": [
      {
        "label": "A",
        "text": "BPSK  "
      },
      {
        "label": "B",
        "text": "QPSK  "
      },
      {
        "label": "C",
        "text": "16QAM  "
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
    "id": 143,
    "type": "单选",
    "q": "UE的发射功率多少",
    "options": [
      {
        "label": "A",
        "text": "23dBm"
      },
      {
        "label": "B",
        "text": "33dBm"
      },
      {
        "label": "C",
        "text": "25dBm"
      },
      {
        "label": "D",
        "text": "27dBm"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 144,
    "type": "单选",
    "q": "UpPTS可用来专门放置（），",
    "options": [
      {
        "label": "A",
        "text": "PRACH"
      },
      {
        "label": "B",
        "text": "PDSCH"
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
    "id": 145,
    "type": "单选",
    "q": "ZXSDR B8200 L200 最多可以和（）个RRU星型组网",
    "options": [
      {
        "label": "A",
        "text": "3；"
      },
      {
        "label": "B",
        "text": "6；"
      },
      {
        "label": "C",
        "text": "9；"
      },
      {
        "label": "D",
        "text": 12.0
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 146,
    "type": "单选",
    "q": "ZXSDR B8200 L200支持最大（）级RRU的链型组网",
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
        "text": 8.0
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 147,
    "type": "单选",
    "q": "测量报告在LTE中分为事件触发上报和那种上报方式？",
    "options": [
      {
        "label": "A",
        "text": "周期性上报"
      },
      {
        "label": "B",
        "text": "手动上报"
      },
      {
        "label": "C",
        "text": "只有一种上报方式"
      },
      {
        "label": "D",
        "text": "不上报"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 148,
    "type": "单选",
    "q": "测试时，当设备连接不上",
    "options": [
      {
        "label": "A",
        "text": "不测了"
      },
      {
        "label": "B",
        "text": "直接回去换新的"
      },
      {
        "label": "C",
        "text": "让别人送一套过来"
      },
      {
        "label": "D",
        "text": "多次拔插不行重启电脑查看"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 149,
    "type": "单选",
    "q": "测试时发现有速率，但是速率比理论值低很多，不可能的原因有",
    "options": [
      {
        "label": "A",
        "text": "天线与RRU的馈线顺序错误"
      },
      {
        "label": "B",
        "text": "下行方向只有单流"
      },
      {
        "label": "C",
        "text": "PCIMode3干扰"
      },
      {
        "label": "D",
        "text": "船在起伏"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 150,
    "type": "单选",
    "q": "传播模型的选择与覆盖区域的半径有关，一般认为，当覆盖半径大于（）时，统计型模型的预测精度比较理想。",
    "options": [
      {
        "label": "A",
        "text": "100m  "
      },
      {
        "label": "B",
        "text": "500m  "
      },
      {
        "label": "C",
        "text": "1000m  "
      },
      {
        "label": "D",
        "text": "35km"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 151,
    "type": "单选",
    "q": "传输时间间隔TTI等于",
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
    "id": 152,
    "type": "单选",
    "q": "代表物理层ID组的数字N^（1）的取值范围为：",
    "options": [
      {
        "label": "A",
        "text": "0-167"
      },
      {
        "label": "B",
        "text": "0-255"
      },
      {
        "label": "C",
        "text": "0-2"
      },
      {
        "label": "D",
        "text": "0-65535"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 153,
    "type": "单选",
    "q": "单站点验证的目标是？",
    "options": [
      {
        "label": "A",
        "text": "确保站点安装和参数配置正确"
      },
      {
        "label": "B",
        "text": "查看UE是否正常"
      },
      {
        "label": "C",
        "text": "查看人流量是否足够"
      },
      {
        "label": "D",
        "text": "查看是否影响周围环境"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 154,
    "type": "单选",
    "q": "单站验证需要哪些设备",
    "options": [
      {
        "label": "A",
        "text": "电脑：终端"
      },
      {
        "label": "B",
        "text": "电脑：终端：GPS"
      },
      {
        "label": "C",
        "text": "电脑"
      },
      {
        "label": "D",
        "text": "终端：GPS"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 155,
    "type": "单选",
    "q": "等级2、3、4的MIMO接收能力相同，他们在接收数据能力方面的差异主要由他们的（）造成的",
    "options": [
      {
        "label": "A",
        "text": "接收缓存的大小"
      },
      {
        "label": "B",
        "text": "频率复用度"
      },
      {
        "label": "C",
        "text": "天线数"
      },
      {
        "label": "D",
        "text": "空间复用阶数"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 156,
    "type": "单选",
    "q": "第一次RF优化测试时？",
    "options": [
      {
        "label": "A",
        "text": "遍历区域内所有小区"
      },
      {
        "label": "B",
        "text": "挑选一部分小区"
      },
      {
        "label": "C",
        "text": "选择相同覆盖类型小区"
      },
      {
        "label": "D",
        "text": "不需要遍历所有小区"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 157,
    "type": "单选",
    "q": "定向天线方位角误差不大于（）",
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
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 158,
    "type": "单选",
    "q": "对于FDD，一个无线帧时间长度",
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
    "id": 159,
    "type": "单选",
    "q": "对于每一个天线端口，一个OFDM或者SC-FDMA符号上的一个子载波对应的一个单元叫做（）",
    "options": [
      {
        "label": "A",
        "text": "用户单元"
      },
      {
        "label": "B",
        "text": "资源单元"
      },
      {
        "label": "C",
        "text": "载波单元"
      },
      {
        "label": "D",
        "text": "码字单元"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 160,
    "type": "单选",
    "q": "非MIMO情形下，不论上行和下行，在每个TTI（1ms）产生几个传输块？",
    "options": [
      {
        "label": "A",
        "text": "一个"
      },
      {
        "label": "B",
        "text": "两个"
      },
      {
        "label": "C",
        "text": "三个"
      },
      {
        "label": "D",
        "text": "四个"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 161,
    "type": "单选",
    "q": "高阶调制增益受什么影响较大？",
    "options": [
      {
        "label": "A",
        "text": "信道条件"
      },
      {
        "label": "B",
        "text": "覆盖"
      },
      {
        "label": "C",
        "text": "干扰"
      },
      {
        "label": "D",
        "text": "天线高度"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 162,
    "type": "单选",
    "q": "根据协议对LTE系统需求支持的定义，从主流状态到激活状态的时延和零负载（单用户、单数据流）、小IP分组条件下单向时延分别小于",
    "options": [
      {
        "label": "A",
        "text": "50ms和10ms"
      },
      {
        "label": "B",
        "text": "100ms和5ms"
      },
      {
        "label": "C",
        "text": "200ms和5ms"
      },
      {
        "label": "D",
        "text": "100ms和50ms"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 163,
    "type": "单选",
    "q": "功率控制目的？",
    "options": [
      {
        "label": "A",
        "text": "省电"
      },
      {
        "label": "B",
        "text": "提高灵敏度"
      },
      {
        "label": "C",
        "text": "信号强度高"
      },
      {
        "label": "D",
        "text": "干扰增加"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 164,
    "type": "单选",
    "q": "关于LTE TDD帧结构，哪些说法是正确的",
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
    "id": 165,
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
        "text": "支持5ms和10ms DL?UL切换点周期"
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
    "id": 166,
    "type": "单选",
    "q": "关于LTE需求下列说法中正确的是",
    "options": [
      {
        "label": "A",
        "text": "下行峰值数据速率100Mbps（20MHz，2天线接收）"
      },
      {
        "label": "B",
        "text": "U-plane时延为5ms"
      },
      {
        "label": "C",
        "text": "不支持离散的频谱分配"
      },
      {
        "label": "D",
        "text": "支持不同大小的频段分配"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 167,
    "type": "单选",
    "q": "关于PDCCH的说法不正确的是",
    "options": [
      {
        "label": "A",
        "text": "频域：占用72个子载波"
      },
      {
        "label": "B",
        "text": "时域：占用每个子帧的前n个OFDM符号，n<=3"
      },
      {
        "label": "C",
        "text": "PDCCH的信息映射到控制域中除了参考信号、PCFICH、PHICH之外的RE中，因此需先获得PCFICH和PHICH的位置之后才能确定其位置"
      },
      {
        "label": "D",
        "text": "用于发送上/下行资源调度信息、功控命令等，通过下行控制信息块DCI承载，不同用户使用不同的DCI资源。"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 168,
    "type": "单选",
    "q": "关于ZXSDR B8200 L200系统内外部接口关系描述错误的是：（）",
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
        "text": "TX0/RX0接口为基带-射频接口"
      },
      {
        "label": "D",
        "text": "EXT是DEBUG口，RS232接口。"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 169,
    "type": "单选",
    "q": "关于空闲态小区重选对现有2/3G网络及用户体验的影响，下面说法错误的是（）",
    "options": [
      {
        "label": "A",
        "text": "需软件升级LTE覆盖区内所有2/3G现网无线设备，小区广播中支持LTE邻区、重选优先级等新参数的配置"
      },
      {
        "label": "B",
        "text": "需软件升级LTE覆盖区内所有SGSN以识别LTE多模终端并将其路由至LTE网络"
      },
      {
        "label": "C",
        "text": "执行重选时对用户拨打电话没有影响"
      },
      {
        "label": "D",
        "text": "频繁重选导致终端耗电增加,待机时间缩短"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 170,
    "type": "单选",
    "q": "关于切换过程描叙正确的是：（）",
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
    "id": 171,
    "type": "单选",
    "q": "关于使用FTP/JPEF（UDP）测试描叙正确的是：",
    "options": [
      {
        "label": "A",
        "text": "测试中如果上网或者下载有问题时，利用JPEF（UDP）测试能区分出是LTE承载问题还是应用层问题"
      },
      {
        "label": "B",
        "text": "对于LTE 网络承载，JPEF（UDP）测试无问题的情况下，FTP测试也应该无问题"
      },
      {
        "label": "C",
        "text": "对于LTE 网络承载，FTP测试正常，JPEF（UDP）可能会有问题"
      },
      {
        "label": "D",
        "text": "JPEF（UDP）上传测试时，在终端测可以用DU METER统计出应用层速率"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 172,
    "type": "单选",
    "q": "关于随机接入描叙正确的是",
    "options": [
      {
        "label": "A",
        "text": "随机接入分为基于竞争与基于非竞争两种，根据网络配置，初始接入及切换过程中都可以是基于竞争接入或基于非竞争接入"
      },
      {
        "label": "B",
        "text": "随机接入分为基于竞争与基于非竞争两种，根据网络配置，初始接入可以为基于竞争接入或基于非竞争接入，切换过程只能是基于非竞争接入"
      },
      {
        "label": "C",
        "text": "随机接入分为基于竞争与基于非竞争两种，根据网络配置，初始接入可以为基于竞争接入或基于非竞争接入，切换过程中无随机接入"
      },
      {
        "label": "D",
        "text": "随机接入分为基于竞争与基于非竞争两种，根据网络配置，初始接入只能是基于竞争接入，切换过程中的随机接入可以是基于竞争也可以是基于非竞争接入"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 173,
    "type": "单选",
    "q": "关于小区搜索，以下描述错误的是（）",
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
    "a": "c",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 174,
    "type": "单选",
    "q": "混合自动重传请求协议HARQ是在那个子层实现的",
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
        "text": "PDCP"
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
    "id": 175,
    "type": "单选",
    "q": "基站存在（）个",
    "options": [
      {
        "label": "A",
        "text": 3.0
      },
      {
        "label": "B",
        "text": 32.0
      },
      {
        "label": "C",
        "text": 168.0
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
    "id": 176,
    "type": "单选",
    "q": "基站天线多采用线极化方式，其中双极化天线多采用（）双线极化。",
    "options": [
      {
        "label": "A",
        "text": "±30°"
      },
      {
        "label": "B",
        "text": "±45°"
      },
      {
        "label": "C",
        "text": "±90°"
      },
      {
        "label": "D",
        "text": "±120°"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 177,
    "type": "单选",
    "q": "集中式的SON架构中,SON功能在以下哪个实现",
    "options": [
      {
        "label": "A",
        "text": "OAM "
      },
      {
        "label": "B",
        "text": "B eNB "
      },
      {
        "label": "C",
        "text": "MME "
      },
      {
        "label": "D",
        "text": "D SGW"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 178,
    "type": "单选",
    "q": "假定小区输出总功率为46dBm，在2天线时，单天线功率是",
    "options": [
      {
        "label": "A",
        "text": "46dbm"
      },
      {
        "label": "B",
        "text": "43dbm"
      },
      {
        "label": "C",
        "text": "49dbm"
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
    "id": 179,
    "type": "单选",
    "q": "接入层信息不包括哪些？",
    "options": [
      {
        "label": "A",
        "text": "小区信息"
      },
      {
        "label": "B",
        "text": "信道消息"
      },
      {
        "label": "C",
        "text": "CN域信息"
      },
      {
        "label": "D",
        "text": "小区选择信息"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 180,
    "type": "单选",
    "q": "进行传播模型校正时，希望的标准方差小于",
    "options": [
      {
        "label": "A",
        "text": "1DB  "
      },
      {
        "label": "B",
        "text": "2.5DB  "
      },
      {
        "label": "C",
        "text": "8DB  "
      },
      {
        "label": "D",
        "text": "10DB"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 181,
    "type": "单选",
    "q": "空口协议栈中，数据的压缩功能位于（）层 ",
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
    "id": 182,
    "type": "单选",
    "q": "控制平面RRC协议数据的加解密和完整性保护功能，在LTE中交由（）层完成",
    "options": [
      {
        "label": "A",
        "text": "RLC "
      },
      {
        "label": "B",
        "text": "MAC"
      },
      {
        "label": "C",
        "text": "PHY"
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
    "id": 183,
    "type": "单选",
    "q": "邻区规划的原则有哪些？",
    "options": [
      {
        "label": "A",
        "text": "地理位置相邻的配置为邻区"
      },
      {
        "label": "B",
        "text": "邻区越多越好"
      },
      {
        "label": "C",
        "text": "邻区越少越好"
      },
      {
        "label": "D",
        "text": "郊县位置间距大，相邻位置不必配置为邻区"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 184,
    "type": "单选",
    "q": "每个PDCP实体承载几个RB数据？",
    "options": [
      {
        "label": "A",
        "text": "只能1个"
      },
      {
        "label": "B",
        "text": "只能两个"
      },
      {
        "label": "C",
        "text": "只能三个"
      },
      {
        "label": "D",
        "text": "多个"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 185,
    "type": "单选",
    "q": "每个REG中包含（）个数据RE",
    "options": [
      {
        "label": "A",
        "text": 1.0
      },
      {
        "label": "B",
        "text": 2.0
      },
      {
        "label": "C",
        "text": 3.0
      },
      {
        "label": "D",
        "text": 4.0
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 186,
    "type": "单选",
    "q": "每个小区有（）个可用的前导",
    "options": [
      {
        "label": "A",
        "text": 32.0
      },
      {
        "label": "B",
        "text": 64.0
      },
      {
        "label": "C",
        "text": 128.0
      },
      {
        "label": "D",
        "text": 256.0
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 187,
    "type": "单选",
    "q": "目前LTE下行定义了（）类天线端口",
    "options": [
      {
        "label": "A",
        "text": 1.0
      },
      {
        "label": "B",
        "text": 2.0
      },
      {
        "label": "C",
        "text": 3.0
      },
      {
        "label": "D",
        "text": 4.0
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 188,
    "type": "单选",
    "q": "目前阶段，LTE系统内的切换是基于",
    "options": [
      {
        "label": "A",
        "text": "RSRP "
      },
      {
        "label": "B",
        "text": "CQI "
      },
      {
        "label": "C",
        "text": "RSRQ "
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
    "id": 189,
    "type": "单选",
    "q": "目前资源的最小粒度为",
    "options": [
      {
        "label": "A",
        "text": "RE  "
      },
      {
        "label": "B",
        "text": "RB "
      },
      {
        "label": "C",
        "text": "REG  "
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
    "id": 190,
    "type": "单选",
    "q": "哪些不是LTE_ACTIVE状态UE的移动性功能？",
    "options": [
      {
        "label": "A",
        "text": "寻呼功能"
      },
      {
        "label": "B",
        "text": "漫游"
      },
      {
        "label": "C",
        "text": "区域支持限制"
      },
      {
        "label": "D",
        "text": "重选"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 191,
    "type": "单选",
    "q": "哪些不是LTE层2主要功能？",
    "options": [
      {
        "label": "A",
        "text": "加密"
      },
      {
        "label": "B",
        "text": "ARQ"
      },
      {
        "label": "C",
        "text": "调度"
      },
      {
        "label": "D",
        "text": "功控"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 192,
    "type": "单选",
    "q": "哪些不是LTE核心网EPC组成？",
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
        "text": "T-GW"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 193,
    "type": "单选",
    "q": "哪些不是LTE基本参数要求？",
    "options": [
      {
        "label": "A",
        "text": "时延长度为0.5ms"
      },
      {
        "label": "B",
        "text": "对延迟要求低"
      },
      {
        "label": "C",
        "text": "FDD与TDD参数统一"
      },
      {
        "label": "D",
        "text": "对延迟要求高"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 194,
    "type": "单选",
    "q": "哪些不是LTE切换技术特点",
    "options": [
      {
        "label": "A",
        "text": "硬切换"
      },
      {
        "label": "B",
        "text": "后向切换"
      },
      {
        "label": "C",
        "text": "终端辅助切换"
      },
      {
        "label": "D",
        "text": "软切换"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 195,
    "type": "单选",
    "q": "哪些不是LTE上行调制方式？",
    "options": [
      {
        "label": "A",
        "text": "BPSK"
      },
      {
        "label": "B",
        "text": "QBSK"
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
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 196,
    "type": "单选",
    "q": "哪些不是LTE设计目标？",
    "options": [
      {
        "label": "A",
        "text": "带宽灵活配置"
      },
      {
        "label": "B",
        "text": "控制面时延小于100ms"
      },
      {
        "label": "C",
        "text": "取消CS域"
      },
      {
        "label": "D",
        "text": "系统结构简单化，高建网成本"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 197,
    "type": "单选",
    "q": "哪些不是LTE网络优化目标？",
    "options": [
      {
        "label": "A",
        "text": "最佳的系统覆盖"
      },
      {
        "label": "B",
        "text": "降低基站功率"
      },
      {
        "label": "C",
        "text": "合理的切换带控制"
      },
      {
        "label": "D",
        "text": "系统干扰最小"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 198,
    "type": "单选",
    "q": "哪些不是LTE网络优化特点？",
    "options": [
      {
        "label": "A",
        "text": "采用MIMO关键技术"
      },
      {
        "label": "B",
        "text": "采用ICIC算法"
      },
      {
        "label": "C",
        "text": "增加X2接口"
      },
      {
        "label": "D",
        "text": "不采用同频组网"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 199,
    "type": "单选",
    "q": "哪些不是LTE协议栈用户面主要功能？",
    "options": [
      {
        "label": "A",
        "text": "头压缩"
      },
      {
        "label": "B",
        "text": "加密"
      },
      {
        "label": "C",
        "text": "计费"
      },
      {
        "label": "D",
        "text": "调度"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 200,
    "type": "单选",
    "q": "哪些不是RF优化目的？",
    "options": [
      {
        "label": "A",
        "text": "优化信号覆盖"
      },
      {
        "label": "B",
        "text": "控制导频污染"
      },
      {
        "label": "C",
        "text": "保证参数配置正确"
      },
      {
        "label": "D",
        "text": "提高切换成功率"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 201,
    "type": "单选",
    "q": "哪些不属于4G优势？",
    "options": [
      {
        "label": "A",
        "text": "无缝业务提供"
      },
      {
        "label": "B",
        "text": "分组数据业务"
      },
      {
        "label": "C",
        "text": "基于全IP核心网"
      },
      {
        "label": "D",
        "text": "网络融合与重用"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 202,
    "type": "单选",
    "q": "哪些不属于LTE采用独立天线的有点？",
    "options": [
      {
        "label": "A",
        "text": "最佳的网络性能"
      },
      {
        "label": "B",
        "text": "最匹配的天线间距"
      },
      {
        "label": "C",
        "text": "对现网影响最小"
      },
      {
        "label": "D",
        "text": "降低成本"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 203,
    "type": "单选",
    "q": "哪些不属于LTE层2？",
    "options": [
      {
        "label": "A",
        "text": "MAC层"
      },
      {
        "label": "B",
        "text": "RLC层"
      },
      {
        "label": "C",
        "text": "MM层"
      },
      {
        "label": "D",
        "text": "PDCP层"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 204,
    "type": "单选",
    "q": "哪些不属于LTE进行覆盖和质量评估参数？",
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
        "text": "CPI"
      },
      {
        "label": "D",
        "text": "SINR"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 205,
    "type": "单选",
    "q": "哪些不属于LTE网络优势？",
    "options": [
      {
        "label": "A",
        "text": "高峰值速率"
      },
      {
        "label": "B",
        "text": "高移动性"
      },
      {
        "label": "C",
        "text": "网络架构扁平化"
      },
      {
        "label": "D",
        "text": "低频谱效率"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 206,
    "type": "单选",
    "q": "哪些不属于LTE新业务？",
    "options": [
      {
        "label": "A",
        "text": "高速WEB浏览"
      },
      {
        "label": "B",
        "text": "视频电话"
      },
      {
        "label": "C",
        "text": "MMS"
      },
      {
        "label": "D",
        "text": "普通网络游戏"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 207,
    "type": "单选",
    "q": "哪些不属于分集技术？",
    "options": [
      {
        "label": "A",
        "text": "空间分集"
      },
      {
        "label": "B",
        "text": "时间分集"
      },
      {
        "label": "C",
        "text": "频率分集"
      },
      {
        "label": "D",
        "text": "物理分集"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 208,
    "type": "单选",
    "q": "哪些不属于可能导致信号质量问题原因？",
    "options": [
      {
        "label": "A",
        "text": "小区布局不合理"
      },
      {
        "label": "B",
        "text": "天线挂高不合理"
      },
      {
        "label": "C",
        "text": "天线方位角不合理"
      },
      {
        "label": "D",
        "text": "终端发射功率"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 209,
    "type": "单选",
    "q": "哪些不属于切换控制方式？",
    "options": [
      {
        "label": "A",
        "text": "网络控制切换"
      },
      {
        "label": "B",
        "text": "终端控制切换"
      },
      {
        "label": "C",
        "text": "功率控制切换"
      },
      {
        "label": "D",
        "text": "网络辅助切换"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 210,
    "type": "单选",
    "q": "哪些不属于上行影响覆盖的因素？",
    "options": [
      {
        "label": "A",
        "text": "总发射功率"
      },
      {
        "label": "B",
        "text": "基站接收灵敏度"
      },
      {
        "label": "C",
        "text": "终端发射功率"
      },
      {
        "label": "D",
        "text": "天线分集增益"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 211,
    "type": "单选",
    "q": "哪些不属于手机开机第一步流程？",
    "options": [
      {
        "label": "A",
        "text": "PLMN选择"
      },
      {
        "label": "B",
        "text": "小区驻留"
      },
      {
        "label": "C",
        "text": "位置登记"
      },
      {
        "label": "D",
        "text": "安全激活"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 212,
    "type": "单选",
    "q": "哪些不属于网络优化基本方法？",
    "options": [
      {
        "label": "A",
        "text": "调整方向角"
      },
      {
        "label": "B",
        "text": "调整下倾角"
      },
      {
        "label": "C",
        "text": "天线高度"
      },
      {
        "label": "D",
        "text": "更换可能有问题设备"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 213,
    "type": "单选",
    "q": "哪些不属于系统信息获取流程的时机？",
    "options": [
      {
        "label": "A",
        "text": "重新进入覆盖区域"
      },
      {
        "label": "B",
        "text": "切换完成之后"
      },
      {
        "label": "C",
        "text": "手机开机后"
      },
      {
        "label": "D",
        "text": "手机通过结束后"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 214,
    "type": "单选",
    "q": "哪些不属于下行影响覆盖的因素？",
    "options": [
      {
        "label": "A",
        "text": "频段"
      },
      {
        "label": "B",
        "text": "合路损耗"
      },
      {
        "label": "C",
        "text": "天线分集增益"
      },
      {
        "label": "D",
        "text": "天线下倾角"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 215,
    "type": "单选",
    "q": "哪些是LTE支持带宽？",
    "options": [
      {
        "label": "A",
        "text": "2MHZ"
      },
      {
        "label": "B",
        "text": "5MHZ"
      },
      {
        "label": "C",
        "text": "12MHZ"
      },
      {
        "label": "D",
        "text": "20MHZ"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 216,
    "type": "单选",
    "q": "哪些是MAC逻辑信道？",
    "options": [
      {
        "label": "A",
        "text": "控制信道"
      },
      {
        "label": "B",
        "text": "数据信道"
      },
      {
        "label": "C",
        "text": "语音信道"
      },
      {
        "label": "D",
        "text": "物理信道"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 217,
    "type": "单选",
    "q": "全球唯一临时标识？",
    "options": [
      {
        "label": "A",
        "text": "MMEGI"
      },
      {
        "label": "B",
        "text": "TMSI"
      },
      {
        "label": "C",
        "text": "IMSI"
      },
      {
        "label": "D",
        "text": "GUTI"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 218,
    "type": "单选",
    "q": "容量估算与_____互相影响",
    "options": [
      {
        "label": "A",
        "text": "链路预算"
      },
      {
        "label": "B",
        "text": "PCI规划"
      },
      {
        "label": "C",
        "text": "建网成本"
      },
      {
        "label": "D",
        "text": "网络优化"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 219,
    "type": "单选",
    "q": "如果某一公路旁边有一定向站，采用垂直线极化定向天线，空间分集接受，请问两个天线的连线和公路成什么角度最合理？",
    "options": [
      {
        "label": "A",
        "text": "0"
      },
      {
        "label": "B",
        "text": "90"
      },
      {
        "label": "C",
        "text": "45"
      },
      {
        "label": "D",
        "text": 30.0
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 220,
    "type": "单选",
    "q": "软切换的定义是？",
    "options": [
      {
        "label": "A",
        "text": "直接断开"
      },
      {
        "label": "B",
        "text": "先断开再建立连接"
      },
      {
        "label": "C",
        "text": "先建立连接再断开"
      },
      {
        "label": "D",
        "text": "都可以"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 221,
    "type": "单选",
    "q": "上层PDU传输支持哪些模式？",
    "options": [
      {
        "label": "A",
        "text": "AM"
      },
      {
        "label": "B",
        "text": "UM"
      },
      {
        "label": "C",
        "text": "MM"
      },
      {
        "label": "D",
        "text": "TM"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 222,
    "type": "单选",
    "q": "上行功控中，PRACH只有",
    "options": [
      {
        "label": "A",
        "text": "开环功控 "
      },
      {
        "label": "B",
        "text": "闭环功控 "
      },
      {
        "label": "C",
        "text": "内环功控 "
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
    "id": 223,
    "type": "单选",
    "q": "上行信道带宽大小通过（）进行广播",
    "options": [
      {
        "label": "A",
        "text": "主广播信息（MIB）"
      },
      {
        "label": "B",
        "text": "系统信息（SIB）"
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
    "id": 224,
    "type": "单选",
    "q": "室内多系统合路要求TD-LTE的电平RSRP大于（）dBm",
    "options": [
      {
        "label": "A",
        "text": -75.0
      },
      {
        "label": "B",
        "text": -85.0
      },
      {
        "label": "C",
        "text": -105.0
      },
      {
        "label": "D",
        "text": -120.0
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 225,
    "type": "单选",
    "q": "双通道室分单极化天线布放在狭长走廊场景，建议布放天线间距小于（）个波长（65cm），且尽量使天线的排列方向与走廊方向垂直，以降低天线相关性。",
    "options": [
      {
        "label": "A",
        "text": 3.0
      },
      {
        "label": "B",
        "text": 4.0
      },
      {
        "label": "C",
        "text": 5.0
      },
      {
        "label": "D",
        "text": 6.0
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 226,
    "type": "单选",
    "q": "天馈严重驻波比告警是指驻波比值",
    "options": [
      {
        "label": "A",
        "text": " >1.2  "
      },
      {
        "label": "B",
        "text": " >1.5  "
      },
      {
        "label": "C",
        "text": " >2   "
      },
      {
        "label": "D",
        "text": " >3.0"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 227,
    "type": "单选",
    "q": "天线的VSWR合理的范围为",
    "options": [
      {
        "label": "A",
        "text": " 1<VSWR<3.0   "
      },
      {
        "label": "B",
        "text": " 1<VSWR<1.5  "
      },
      {
        "label": "C",
        "text": " VSWR>1.5  "
      },
      {
        "label": "D",
        "text": " VSWR>3.0"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 228,
    "type": "单选",
    "q": "通常我们所说的天线绝对高度指的是：",
    "options": [
      {
        "label": "A",
        "text": "天线的挂高"
      },
      {
        "label": "B",
        "text": "天线所在铁塔的海拔与覆盖地点海拔的差值"
      },
      {
        "label": "C",
        "text": "天线的挂高加铁塔所在地的海拔 "
      },
      {
        "label": "D",
        "text": "天线的挂高加上天线所在铁塔海拔与覆盖区域的差值"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 229,
    "type": "单选",
    "q": "无论是正常子帧还是特殊子帧，长度均为",
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
    "id": 230,
    "type": "单选",
    "q": "无线承载在UE和eNB之间传送什么数据包？",
    "options": [
      {
        "label": "A",
        "text": "EPS"
      },
      {
        "label": "B",
        "text": "RR"
      },
      {
        "label": "C",
        "text": "MM"
      },
      {
        "label": "D",
        "text": "EPM"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 231,
    "type": "单选",
    "q": "无线接口协议栈垂直方向根据用途分为？",
    "options": [
      {
        "label": "A",
        "text": "资源平面栈协议"
      },
      {
        "label": "B",
        "text": "移动平面栈协"
      },
      {
        "label": "C",
        "text": "用户平面栈协议"
      },
      {
        "label": "D",
        "text": "管理平面栈协议"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 232,
    "type": "单选",
    "q": "无线资源管理不包括下面哪一项？",
    "options": [
      {
        "label": "A",
        "text": "无线承载控制"
      },
      {
        "label": "B",
        "text": "无线准入控制"
      },
      {
        "label": "C",
        "text": "连接移动性控制"
      },
      {
        "label": "D",
        "text": "动态资源分配"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 233,
    "type": "单选",
    "q": "物理层小区ID分为（）组",
    "options": [
      {
        "label": "A",
        "text": 3.0
      },
      {
        "label": "B",
        "text": 32.0
      },
      {
        "label": "C",
        "text": 168.0
      },
      {
        "label": "D",
        "text": 504.0
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 234,
    "type": "单选",
    "q": "物理多播信道（PMCH）的功能（）",
    "options": [
      {
        "label": "A",
        "text": "传递MBMS相关的数据"
      },
      {
        "label": "B",
        "text": "反馈和PUSCH相关的ACK/NACK信息"
      },
      {
        "label": "C",
        "text": "HARQ信息"
      },
      {
        "label": "D",
        "text": "功控信息"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 235,
    "type": "单选",
    "q": "物理广播信道（PBCH）的功能（）",
    "options": [
      {
        "label": "A",
        "text": "传递UE接入系统所必需的系统信息"
      },
      {
        "label": "B",
        "text": "反馈和PUSCH相关的ACK/NACK信息"
      },
      {
        "label": "C",
        "text": "HARQ信息"
      },
      {
        "label": "D",
        "text": "功控信息"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 236,
    "type": "单选",
    "q": "物理上行共享信道（PUSCH）的功能（）",
    "options": [
      {
        "label": "A",
        "text": "承载数据"
      },
      {
        "label": "B",
        "text": "preamble"
      },
      {
        "label": "C",
        "text": "HARQ信息"
      },
      {
        "label": "D",
        "text": "功控信息"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 237,
    "type": "单选",
    "q": "物理上行控制信道的调制方式是（）",
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
        "text": "GPSK"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 238,
    "type": "单选",
    "q": "物理随机接入信道的调制方式是（）",
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
        "text": "GPSK"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 239,
    "type": "单选",
    "q": "物理下行共享信道（PDSCH）的功能（）",
    "options": [
      {
        "label": "A",
        "text": "传输数据块"
      },
      {
        "label": "B",
        "text": "反馈和PUSCH相关的ACK/NACK信息"
      },
      {
        "label": "C",
        "text": "HARQ信息"
      },
      {
        "label": "D",
        "text": "功控信息"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 240,
    "type": "单选",
    "q": "误码率在多少以内属于正常",
    "options": [
      {
        "label": "A",
        "text": 0.01
      },
      {
        "label": "B",
        "text": 0.1
      },
      {
        "label": "C",
        "text": 0.2
      },
      {
        "label": "D",
        "text": 0.25
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 241,
    "type": "单选",
    "q": "系统消息（）包含小区重选相关的其它EUTRA频点和异频邻小区信息",
    "options": [
      {
        "label": "A",
        "text": "SIB1  "
      },
      {
        "label": "B",
        "text": "SIB3  "
      },
      {
        "label": "C",
        "text": "SIB4  "
      },
      {
        "label": "D",
        "text": "SIB5 "
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 242,
    "type": "单选",
    "q": "系统信息在小区广播范围是？",
    "options": [
      {
        "label": "A",
        "text": "所有UE"
      },
      {
        "label": "B",
        "text": "部分UE"
      },
      {
        "label": "C",
        "text": "通话中UE"
      },
      {
        "label": "D",
        "text": "关机UE"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 243,
    "type": "单选",
    "q": "下列不属于控制信道的是",
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
        "text": "PRACH"
      },
      {
        "label": "D",
        "text": "PBCH"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 244,
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
        "text": "TM4"
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
    "id": 245,
    "type": "单选",
    "q": "下列对于LTE系统中下行参考信号目的描述错误的是",
    "options": [
      {
        "label": "A",
        "text": "下行信道质量测量（又称为信道探测）"
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
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 246,
    "type": "单选",
    "q": "下列哪个网元属于E-UTRAN",
    "options": [
      {
        "label": "A",
        "text": "S-GW"
      },
      {
        "label": "B",
        "text": "E-NodeB"
      },
      {
        "label": "C",
        "text": "MME"
      },
      {
        "label": "D",
        "text": "EPC"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 247,
    "type": "单选",
    "q": "下列哪些是属于LTE下行参考信号",
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
        "text": "DMRS"
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
    "id": 248,
    "type": "单选",
    "q": "下列信道中，上行信道是",
    "options": [
      {
        "label": "A",
        "text": "PDSCH"
      },
      {
        "label": "B",
        "text": "PRACH"
      },
      {
        "label": "C",
        "text": "PHICH"
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
    "id": 249,
    "type": "单选",
    "q": "下列选项中哪个不属于网络规划",
    "options": [
      {
        "label": "A",
        "text": "链路预算"
      },
      {
        "label": "B",
        "text": "PCI规划"
      },
      {
        "label": "C",
        "text": "容量估算"
      },
      {
        "label": "D",
        "text": "选址"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 250,
    "type": "单选",
    "q": "下面不属于控制面协议的是（）",
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
        "text": "APP"
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
    "id": 251,
    "type": "单选",
    "q": "下面不属于用户面协议的是",
    "options": [
      {
        "label": "A",
        "text": "RLC"
      },
      {
        "label": "B",
        "text": "GTPU"
      },
      {
        "label": "C",
        "text": "RRC"
      },
      {
        "label": "D",
        "text": "UDP"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 252,
    "type": "单选",
    "q": "下面关于TD-LTE帧结构特点描述不正确的是",
    "options": [
      {
        "label": "A",
        "text": "无论是正常子帧还是特殊子帧，长度均为1ms"
      },
      {
        "label": "B",
        "text": "一个无线帧分为两个5ms半帧，帧长10ms"
      },
      {
        "label": "C",
        "text": "特殊子帧DwPTS+GP+UpPTS=1ms"
      },
      {
        "label": "D",
        "text": "转换周期为1ms"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 253,
    "type": "单选",
    "q": "下面哪个不属于LTE优化对象？",
    "options": [
      {
        "label": "A",
        "text": "TCH分配成功率"
      },
      {
        "label": "B",
        "text": "SINR"
      },
      {
        "label": "C",
        "text": "RSRP"
      },
      {
        "label": "D",
        "text": "切换成功率"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 254,
    "type": "单选",
    "q": "下面哪项不是LTE系统无线资源主要有",
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
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 255,
    "type": "单选",
    "q": "下面哪项不是LTE下行物理信道模式",
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
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 256,
    "type": "单选",
    "q": "下面哪项不是MIMO天线可以起到的作用",
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
        "text": "赋形抗干扰"
      },
      {
        "label": "D",
        "text": "用户定位"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 257,
    "type": "单选",
    "q": "下面哪项不是空分复用的优点",
    "options": [
      {
        "label": "A",
        "text": "不改变现有的分布式天线结构，仅在信号源接入方式发生变 化"
      },
      {
        "label": "B",
        "text": "施工方便"
      },
      {
        "label": "C",
        "text": "系统容量可以提升"
      },
      {
        "label": "D",
        "text": "用户峰值速率可以得到提升"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 258,
    "type": "单选",
    "q": "下面哪些不是LTE_DETACHED状态？",
    "options": [
      {
        "label": "A",
        "text": "没有RRC实体"
      },
      {
        "label": "B",
        "text": "用户的标识只有IMSI"
      },
      {
        "label": "C",
        "text": "网络知道用户的位置信息"
      },
      {
        "label": "D",
        "text": "没有该用户的RRC通信上下文"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 259,
    "type": "单选",
    "q": "下面哪些不是UE可执行的测量类型？",
    "options": [
      {
        "label": "A",
        "text": "同频测量"
      },
      {
        "label": "B",
        "text": "异频测量"
      },
      {
        "label": "C",
        "text": "与UTRA的系统间测量"
      },
      {
        "label": "D",
        "text": "质差测量"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 260,
    "type": "单选",
    "q": "下面哪些不属于LTE上行信道？",
    "options": [
      {
        "label": "A",
        "text": "PUSCH"
      },
      {
        "label": "B",
        "text": "PDCCH"
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
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 261,
    "type": "单选",
    "q": "下面哪些不属于LTE下行信道？",
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
        "text": "PDCCH"
      },
      {
        "label": "D",
        "text": "PDSCH"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 262,
    "type": "单选",
    "q": "下面哪些不属于覆盖问题？",
    "options": [
      {
        "label": "A",
        "text": "弱覆盖"
      },
      {
        "label": "B",
        "text": "越区覆盖"
      },
      {
        "label": "C",
        "text": "无主导小区"
      },
      {
        "label": "D",
        "text": "频率规划不合理"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 263,
    "type": "单选",
    "q": "下面哪些不属于组网拓扑切换？",
    "options": [
      {
        "label": "A",
        "text": "频内切换"
      },
      {
        "label": "B",
        "text": "基于覆盖的切换"
      },
      {
        "label": "C",
        "text": "频间切换"
      },
      {
        "label": "D",
        "text": "基站内切换"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 264,
    "type": "单选",
    "q": "下面哪些小区干扰控制的方法是错误的？",
    "options": [
      {
        "label": "A",
        "text": "干扰随机化"
      },
      {
        "label": "B",
        "text": "干扰对消"
      },
      {
        "label": "C",
        "text": "干扰抑制"
      },
      {
        "label": "D",
        "text": "干扰分集"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 265,
    "type": "单选",
    "q": "下面哪些属于逻辑信道？",
    "options": [
      {
        "label": "A",
        "text": "BCCH"
      },
      {
        "label": "B",
        "text": "PDCCH"
      },
      {
        "label": "C",
        "text": "PUCCH"
      },
      {
        "label": "D",
        "text": "PUSCH"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 266,
    "type": "单选",
    "q": "下面那个软件不能够进行传播模型校正",
    "options": [
      {
        "label": "A",
        "text": "AirCom  "
      },
      {
        "label": "B",
        "text": "Atoll  "
      },
      {
        "label": "C",
        "text": "CApesso  "
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
    "id": 267,
    "type": "单选",
    "q": "下行参考信号是以（）为单位的",
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
    "id": 268,
    "type": "单选",
    "q": "下行信道采用（）的功率分配",
    "options": [
      {
        "label": "A",
        "text": "半静态"
      },
      {
        "label": "B",
        "text": "动态"
      },
      {
        "label": "C",
        "text": "静态"
      },
      {
        "label": "D",
        "text": "半动态"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 269,
    "type": "单选",
    "q": "下行信道带宽大小通过（）进行广播",
    "options": [
      {
        "label": "A",
        "text": "主广播信息（MIB）"
      },
      {
        "label": "B",
        "text": "系统信息（SIB）"
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
    "id": 270,
    "type": "单选",
    "q": "下载截图时需要",
    "options": [
      {
        "label": "A",
        "text": "不做要求"
      },
      {
        "label": "B",
        "text": "要保证Radio Parameters和HooNetMeter的完整"
      },
      {
        "label": "C",
        "text": "要保证Radio Parameters完整"
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
    "id": 271,
    "type": "单选",
    "q": "厦门BRT上LTE测速时，采用的连接方式（）",
    "options": [
      {
        "label": "A",
        "text": "笔记本终端直接连接LTE网络"
      },
      {
        "label": "B",
        "text": "笔记本终端的无线网卡直接连接LTE基站"
      },
      {
        "label": "C",
        "text": "笔记本终端安装LTE数据卡"
      },
      {
        "label": "D",
        "text": "笔记本终端连接CMCC-4G网络"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 272,
    "type": "单选",
    "q": "厦门海测时发现有速率，但是速率比理论值低很多，不可能的原因有（）",
    "options": [
      {
        "label": "A",
        "text": "天线与RRU的馈线顺序错误"
      },
      {
        "label": "B",
        "text": "下行方向只有单流"
      },
      {
        "label": "C",
        "text": "PCIMode3干扰"
      },
      {
        "label": "D",
        "text": "船在起伏"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 273,
    "type": "单选",
    "q": "厦门海测时通过观察CDS路测工具上的（）可以判断只有单流下行。",
    "options": [
      {
        "label": "A",
        "text": "PCI"
      },
      {
        "label": "B",
        "text": "Rank"
      },
      {
        "label": "C",
        "text": "MCS"
      },
      {
        "label": "D",
        "text": "RSRP"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 274,
    "type": "单选",
    "q": "小区间干扰协调方法有哪些？",
    "options": [
      {
        "label": "A",
        "text": "软频率复用"
      },
      {
        "label": "B",
        "text": "DTX"
      },
      {
        "label": "C",
        "text": "功控"
      },
      {
        "label": "D",
        "text": "扩容"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 275,
    "type": "单选",
    "q": "信道映射的顺序是",
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
    "id": 276,
    "type": "单选",
    "q": "寻呼消息映射到哪个信道？",
    "options": [
      {
        "label": "A",
        "text": "PCCH"
      },
      {
        "label": "B",
        "text": "PUCCH"
      },
      {
        "label": "C",
        "text": "PUSCH"
      },
      {
        "label": "D",
        "text": "PRACH"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 277,
    "type": "单选",
    "q": "寻呼由网络向什么状态下的UE发起",
    "options": [
      {
        "label": "A",
        "text": "仅空闲态"
      },
      {
        "label": "B",
        "text": "仅连接态"
      },
      {
        "label": "C",
        "text": "空闲态或连接态都不是"
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
    "id": 278,
    "type": "单选",
    "q": "一个CCE对应（）个REG",
    "options": [
      {
        "label": "A",
        "text": 1.0
      },
      {
        "label": "B",
        "text": 3.0
      },
      {
        "label": "C",
        "text": 9.0
      },
      {
        "label": "D",
        "text": 12.0
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 279,
    "type": "单选",
    "q": "一个PRACH占用（）个RB",
    "options": [
      {
        "label": "A",
        "text": 1.0
      },
      {
        "label": "B",
        "text": 6.0
      },
      {
        "label": "C",
        "text": 12.0
      },
      {
        "label": "D",
        "text": 18.0
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 280,
    "type": "单选",
    "q": "一个PRB在频域上包含（）个连续的子载波",
    "options": [
      {
        "label": "A",
        "text": 1.0
      },
      {
        "label": "B",
        "text": 6.0
      },
      {
        "label": "C",
        "text": 12.0
      },
      {
        "label": "D",
        "text": 18.0
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 281,
    "type": "单选",
    "q": "一个PRB在时域上包含（）个连续的OFDM符号",
    "options": [
      {
        "label": "A",
        "text": 1.0
      },
      {
        "label": "B",
        "text": 6.0
      },
      {
        "label": "C",
        "text": 12.0
      },
      {
        "label": "D",
        "text": 18.0
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 282,
    "type": "单选",
    "q": "一个RB（资源块）由多少个数据子载波(15KHz)组成？",
    "options": [
      {
        "label": "A",
        "text": 10.0
      },
      {
        "label": "B",
        "text": 12.0
      },
      {
        "label": "C",
        "text": 14.0
      },
      {
        "label": "D",
        "text": 16.0
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 283,
    "type": "单选",
    "q": "一个UE可以定义几个PDCP实体",
    "options": [
      {
        "label": "A",
        "text": "只能1个"
      },
      {
        "label": "B",
        "text": "只能两个"
      },
      {
        "label": "C",
        "text": "只能三个"
      },
      {
        "label": "D",
        "text": "多个"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 284,
    "type": "单选",
    "q": "一个无线帧由（）个半帧构成",
    "options": [
      {
        "label": "A",
        "text": 1.0
      },
      {
        "label": "B",
        "text": 2.0
      },
      {
        "label": "C",
        "text": 3.0
      },
      {
        "label": "D",
        "text": 4.0
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 285,
    "type": "单选",
    "q": "一个无线帧由（）个子帧构成",
    "options": [
      {
        "label": "A",
        "text": 1.0
      },
      {
        "label": "B",
        "text": 5.0
      },
      {
        "label": "C",
        "text": 10.0
      },
      {
        "label": "D",
        "text": 15.0
      }
    ],
    "a": "c",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 286,
    "type": "单选",
    "q": "以下3GPP版本中，哪个版本是LTE的第一版",
    "options": [
      {
        "label": "A",
        "text": ".R6 "
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
    "id": 287,
    "type": "单选",
    "q": "以下关于UpPTS描述不正确的是",
    "options": [
      {
        "label": "A",
        "text": "UpPTS可以发送短RACH（做随机接入用）和SRS（Sounding参考信号）"
      },
      {
        "label": "B",
        "text": "最多仅占两个OFDM符号"
      },
      {
        "label": "C",
        "text": "UpPTS不能传输上行信令或数据"
      },
      {
        "label": "D",
        "text": "承载Uppch，用来进行随机接入"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 288,
    "type": "单选",
    "q": "以下几种站间切换中，要求必须使用同一MME的切换类型是:",
    "options": [
      {
        "label": "A",
        "text": "S1切换"
      },
      {
        "label": "B",
        "text": "LTE&UMTS切换"
      },
      {
        "label": "C",
        "text": "X2切换"
      },
      {
        "label": "D",
        "text": "LTE&GERAN切换"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 289,
    "type": "单选",
    "q": "以下名称分别对应哪个功能？<1>MME（ LTE接入下的控制面网元，负责移动性管理功能； ）<2>S-GW（ SAE网络用户面接入服务网关，相当于传统GnSGSN的用户面功能）<3>P-GW（ SAE网络的边界网关，提供承载控制、计费、地址分配和非3GPP接入等功能，相当于传统的GGSN ）<4>eNodeB（ 负责无线资源管理，集成了部分类似2G/TD基站和基站控制器的功能 ）<5>HSS（）",
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
    "id": 290,
    "type": "单选",
    "q": "以下名称分别对应哪个功能？<1>MME（ LTE接入下的控制面网元，负责移动性管理功能； ）<2>S-GW（ SAE网络用户面接入服务网关，相当于传统GnSGSN的用户面功能）<3>P-GW（ SAE网络的边界网关，提供承载控制、计费、地址分配和非3GPP接入等功能，相当于传统的GGSN ）<4>eNodeB（）<5>HSS（SAE网络用户数据管理网元，提供鉴权和签约等功能，包含HLR功能。 ）",
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
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 291,
    "type": "单选",
    "q": "以下名称分别对应哪个功能？<1>MME（ LTE接入下的控制面网元，负责移动性管理功能； ）<2>S-GW（）<3>P-GW（ SAE网络的边界网关，提供承载控制、计费、地址分配和非3GPP接入等功能，相当于传统的GGSN。 ）<4>eNodeB（ 负责无线资源管理，集成了部分类似2G/TD基站和基站控制器的功能）<5>HSS（SAE网络用户数据管理网元，提供鉴权和签约等功能，包含HLR功能 ）",
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
    "a": "E",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 292,
    "type": "单选",
    "q": "以下名称分别对应哪个功能？<1>MME（）<2>S-GW（ SAE网络用户面接入服务网关，相当于传统GnSGSN的用户面功能； ）<3>P-GW（ SAE网络的边界网关，提供承载控制、计费、地址分配和非3GPP接入等功能，相当于传统的GGSN。 ）<4>eNodeB（ 负责无线资源管理，集成了部分类似2G/TD基站和基站控制器的功能 ）<5>HSS（SAE网络用户数据管理网元，提供鉴权和签约等功能，包含HLR功能 ）",
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
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 293,
    "type": "单选",
    "q": "以下名称分别对应哪个功能？<1>MME（LTE接入下的控制面网元，负责移动性管理功能； ）<2>S-GW（ SAE网络用户面接入服务网关，相当于传统GnSGSN的用户面功能；）<3>P-GW（）<4>eNodeB（ 负责无线资源管理，集成了部分类似2G/TD基站和基站控制器的功能）<5>HSS（ SAE网络用户数据管理网元，提供鉴权和签约等功能，包含HLR功能。 ）",
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
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 294,
    "type": "单选",
    "q": "以下哪个LTE天线方案仅支持单流？（）",
    "options": [
      {
        "label": "A",
        "text": "8天线Beamforming"
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
    "id": 295,
    "type": "单选",
    "q": "以下哪种信道支持空间复用",
    "options": [
      {
        "label": "A",
        "text": "PCFICH"
      },
      {
        "label": "B",
        "text": "PHICH"
      },
      {
        "label": "C",
        "text": "PDCH"
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
    "id": 296,
    "type": "单选",
    "q": "以下说法哪个是正确的",
    "options": [
      {
        "label": "A",
        "text": "LTE支持多种时隙配置，但目前只能采用2:2和3:1"
      },
      {
        "label": "B",
        "text": "LTE适合高速数据业务，不能支持VOIP业务"
      },
      {
        "label": "C",
        "text": "RLC属于逻辑信道"
      },
      {
        "label": "D",
        "text": "TD-LTE和TD-SCDMA共存不一定是共站址"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 297,
    "type": "单选",
    "q": "以下信道分别对应哪些功能：PCFICH（  在子帧的第一个OFDM符号上发送，占用4个REG，均匀分布在整个系统带宽 ,采用QPSK调制，携带一个子帧中用于传输PDCCH的OFDM符号数，传输格式。 ）；PHICH（ 采用BPSK调制，传输上行信道反馈信息。）；PDCCH（）",
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
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 298,
    "type": "单选",
    "q": "以下载波带宽不是LTE系统支持的是",
    "options": [
      {
        "label": "A",
        "text": "1.4M"
      },
      {
        "label": "B",
        "text": "3M "
      },
      {
        "label": "C",
        "text": "7.5M"
      },
      {
        "label": "D",
        "text": "20M"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 299,
    "type": "单选",
    "q": "硬切换的定义是？",
    "options": [
      {
        "label": "A",
        "text": "直接断开"
      },
      {
        "label": "B",
        "text": "先断开再建立连接"
      },
      {
        "label": "C",
        "text": "先建立连接再断开"
      },
      {
        "label": "D",
        "text": "都可以"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 300,
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
        "text": "DCI 1A"
      },
      {
        "label": "D",
        "text": "DCI 2B."
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 301,
    "type": "单选",
    "q": "在20MHz系统带宽下，LTE的最初设计目标上下行支持的瞬间峰值速率（2T2R）分别是",
    "options": [
      {
        "label": "A",
        "text": "100Mbit/s和50Mbit/s"
      },
      {
        "label": "B",
        "text": "50Mbit/s和150Mbit/s"
      },
      {
        "label": "C",
        "text": "50Mbit/s和100Mbit/s"
      },
      {
        "label": "D",
        "text": "100Mbit/s和300Mbit/s\""
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 302,
    "type": "单选",
    "q": "在Atoll Cell表格中，“MAx Power”指的是（假设天线端口为2T2S）",
    "options": [
      {
        "label": "A",
        "text": "小区最大发射功率  "
      },
      {
        "label": "B",
        "text": "基站最大发射功率  "
      },
      {
        "label": "C",
        "text": "天线单通道发射功率  "
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
    "id": 303,
    "type": "单选",
    "q": "在eNoDeB的MAC子层与RLC子层的SAP是哪个",
    "options": [
      {
        "label": "A",
        "text": "逻辑信道 "
      },
      {
        "label": "B",
        "text": "传输信道 "
      },
      {
        "label": "C",
        "text": "物理信道 "
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
    "id": 304,
    "type": "单选",
    "q": "在eNoDeB的MAC子层与物理层的SAP是哪个",
    "options": [
      {
        "label": "A",
        "text": "逻辑信道 "
      },
      {
        "label": "B",
        "text": "传输信道 "
      },
      {
        "label": "C",
        "text": "物理信道 "
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
    "id": 305,
    "type": "单选",
    "q": "在eNoDeB的层2与应用层的SAP是哪个",
    "options": [
      {
        "label": "A",
        "text": "逻辑信道 "
      },
      {
        "label": "B",
        "text": "传输信道 "
      },
      {
        "label": "C",
        "text": "物理信道 "
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
    "id": 306,
    "type": "单选",
    "q": "在E-UTRAN系统中，MAC使用的重传方式是： ",
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
    "id": 307,
    "type": "单选",
    "q": "在EUTRAN系统中，每个小区在5MHz带宽下期望最少支持的用户数是 ",
    "options": [
      {
        "label": "A",
        "text": 250.0
      },
      {
        "label": "B",
        "text": 300.0
      },
      {
        "label": "C",
        "text": 200.0
      },
      {
        "label": "D",
        "text": 400.0
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 308,
    "type": "单选",
    "q": "在LTE系统协议中，MAC层对数据进行（）",
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
        "text": "压缩和加密"
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
    "id": 309,
    "type": "单选",
    "q": "在LTE系统协议中，RLC层对数据进行（）",
    "options": [
      {
        "label": "A",
        "text": "压缩加密；"
      },
      {
        "label": "B",
        "text": "分段"
      },
      {
        "label": "C",
        "text": "映射"
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
    "id": 310,
    "type": "单选",
    "q": "在LTE系统中，各个用户的PHICH区分是通过什么来实现的？",
    "options": [
      {
        "label": "A",
        "text": "码分"
      },
      {
        "label": "B",
        "text": "工分"
      },
      {
        "label": "C",
        "text": "时分"
      },
      {
        "label": "D",
        "text": "频分"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 311,
    "type": "单选",
    "q": "在LTE中，上行功控的精度是",
    "options": [
      {
        "label": "A",
        "text": "0.5DB "
      },
      {
        "label": "B",
        "text": "1DB "
      },
      {
        "label": "C",
        "text": "1.5DB "
      },
      {
        "label": "D",
        "text": "2DB"
      }
    ],
    "a": "",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 312,
    "type": "单选",
    "q": "在Normal情况下，一个RB包含（）个子载波",
    "options": [
      {
        "label": "A",
        "text": 3.0
      },
      {
        "label": "B",
        "text": 6.0
      },
      {
        "label": "C",
        "text": 12.0
      },
      {
        "label": "D",
        "text": 24.0
      }
    ],
    "a": "",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 313,
    "type": "单选",
    "q": "在SAE架构中，与eNB连接的控制面实体叫",
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
    "a": "",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 314,
    "type": "单选",
    "q": "在近点的条件下，下行吞吐率均值达到",
    "options": [
      {
        "label": "A",
        "text": "10Mbps"
      },
      {
        "label": "B",
        "text": "20Mbps"
      },
      {
        "label": "C",
        "text": "120Mbps"
      },
      {
        "label": "D",
        "text": "70Mbps"
      }
    ],
    "a": "",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 315,
    "type": "单选",
    "q": "在频域上，每（）个子载波插入一个参考信号，这个数值是在信道估计性能和RS开销之间求取平衡的结果",
    "options": [
      {
        "label": "A",
        "text": 1.0
      },
      {
        "label": "B",
        "text": 6.0
      },
      {
        "label": "C",
        "text": 8.0
      },
      {
        "label": "D",
        "text": 10.0
      }
    ],
    "a": "",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 316,
    "type": "单选",
    "q": "在频域上，随机接入前导占用（）个资源块对应的带宽",
    "options": [
      {
        "label": "A",
        "text": 3.0
      },
      {
        "label": "B",
        "text": 6.0
      },
      {
        "label": "C",
        "text": 9.0
      },
      {
        "label": "D",
        "text": 12.0
      }
    ],
    "a": "",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 317,
    "type": "单选",
    "q": "在一个帧中，PBCH占用的RE个数为",
    "options": [
      {
        "label": "A",
        "text": 288.0
      },
      {
        "label": "B",
        "text": 276.0
      },
      {
        "label": "C",
        "text": 264.0
      },
      {
        "label": "D",
        "text": 240.0
      }
    ],
    "a": "",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 318,
    "type": "单选",
    "q": "在整个系统带宽内，所有导频SC的功率？",
    "options": [
      {
        "label": "A",
        "text": "相同"
      },
      {
        "label": "B",
        "text": "不同"
      },
      {
        "label": "C",
        "text": "有些相同有些不同"
      },
      {
        "label": "D",
        "text": "不允许存在相同"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 319,
    "type": "单选",
    "q": "站址选择应尽量避免选取高站（站高大于50米或站高高于周边建筑物15米），站间距300-400米时，平均站高控制在（）米左右；站间距400-500米时，平均站高控制在（30）米左右。",
    "options": [
      {
        "label": "A",
        "text": 20.0
      },
      {
        "label": "B",
        "text": 25.0
      },
      {
        "label": "C",
        "text": 30.0
      },
      {
        "label": "D",
        "text": 35.0
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 320,
    "type": "单选",
    "q": "直E-UTRA系统覆盖半径最大可达",
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
    "id": 321,
    "type": "单选",
    "q": "子载波间隔（）KHZ",
    "options": [
      {
        "label": "A",
        "text": 15.0
      },
      {
        "label": "B",
        "text": 20.0
      },
      {
        "label": "C",
        "text": 200.0
      },
      {
        "label": "D",
        "text": 500.0
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 322,
    "type": "单选",
    "q": "组内ID的最大取值为",
    "options": [
      {
        "label": "A",
        "text": 1.0
      },
      {
        "label": "B",
        "text": 2.0
      },
      {
        "label": "C",
        "text": 3.0
      },
      {
        "label": "D",
        "text": 4.0
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 323,
    "type": "单选",
    "q": "做上传和下载业务时",
    "options": [
      {
        "label": "A",
        "text": "避免同时上传或下载同一目录下文件"
      },
      {
        "label": "B",
        "text": "可以同时上传或下载同一目录下文件"
      },
      {
        "label": "C",
        "text": "无所谓"
      },
      {
        "label": "D",
        "text": "必须同时上传或下载同一目录下文件"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 324,
    "type": "单选",
    "q": "做完一个扇区的下载和上传测试时",
    "options": [
      {
        "label": "A",
        "text": "直接去测试下一个扇区"
      },
      {
        "label": "B",
        "text": "休息一下去测试下一个扇区"
      },
      {
        "label": "C",
        "text": "使用软件查看LOG，补测不达标的LOG"
      },
      {
        "label": "D",
        "text": "使用软件查看LOG，无需补测不达标的LOG"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 325,
    "type": "单选",
    "q": "以不属于干扰消除技术的为",
    "options": [
      {
        "label": "A",
        "text": "协调/避免"
      },
      {
        "label": "B",
        "text": "小区间干扰随机化"
      },
      {
        "label": "C",
        "text": "频域扩展"
      },
      {
        "label": "D",
        "text": "快速功率控制"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 326,
    "type": "单选",
    "q": "对于50ms的延迟限（对于VoIP而言是典型的），LTE上行8ms的HARQ RTT意味着每个包可能高达（）次传输",
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
        "text": 6.0
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 327,
    "type": "单选",
    "q": "LTE系统中每个小区的接收天线数量从2增加到4，这可以在给定的满缓冲流量条件下带来（）吞吐量改善",
    "options": [
      {
        "label": "A",
        "text": "30%"
      },
      {
        "label": "B",
        "text": "50%"
      },
      {
        "label": "C",
        "text": "100%"
      },
      {
        "label": "D",
        "text": 2.0
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 328,
    "type": "单选",
    "q": "LTE系统中，载波为5MHz,每个小区包括8个FTP用户，最大吞吐量为（）Mbit/S",
    "options": [
      {
        "label": "A",
        "text": "1.384"
      },
      {
        "label": "B",
        "text": "5.4"
      },
      {
        "label": "C",
        "text": "1.7"
      },
      {
        "label": "D",
        "text": 10.0
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 329,
    "type": "单选",
    "q": "LTE中上行控制信道检测与错误检测要求中ACK漏检的目标质量为（）",
    "options": [
      {
        "label": "A",
        "text": "10-1"
      },
      {
        "label": "B",
        "text": "10-2"
      },
      {
        "label": "C",
        "text": "10-3"
      },
      {
        "label": "D",
        "text": "10-4"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 330,
    "type": "单选",
    "q": "LTE中上行控制信道检测与错误检测要求中DTX→ACK错误的目标质量为（）",
    "options": [
      {
        "label": "A",
        "text": "10-1"
      },
      {
        "label": "B",
        "text": "10-2"
      },
      {
        "label": "C",
        "text": "10-3"
      },
      {
        "label": "D",
        "text": "10-4"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 331,
    "type": "单选",
    "q": "LTE中上行控制信道检测与错误检测要求中NACK→ACK错误的目标质量为（）",
    "options": [
      {
        "label": "A",
        "text": "10-1"
      },
      {
        "label": "B",
        "text": "10-2"
      },
      {
        "label": "C",
        "text": "10-3"
      },
      {
        "label": "D",
        "text": "10-4"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 332,
    "type": "单选",
    "q": "LTE中上行控制信道检测与错误检测要求中CQI块错误率的目标质量为（）",
    "options": [
      {
        "label": "A",
        "text": "10-1～10-2"
      },
      {
        "label": "B",
        "text": "10-2～10-3"
      },
      {
        "label": "C",
        "text": "10-3～10-4"
      },
      {
        "label": "D",
        "text": "10-2～10-4"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 333,
    "type": "单选",
    "q": "LTE下行ACK/NACK信令BER目标中下行调度信息漏检的目标质量为（）",
    "options": [
      {
        "label": "A",
        "text": "10-1"
      },
      {
        "label": "B",
        "text": "10-2"
      },
      {
        "label": "C",
        "text": "10-3"
      },
      {
        "label": "D",
        "text": "10-4"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 334,
    "type": "单选",
    "q": "LTE下行ACK/NACK信令BER目标中上行调度授权漏检的目标质量为（）",
    "options": [
      {
        "label": "A",
        "text": "10-1"
      },
      {
        "label": "B",
        "text": "10-2"
      },
      {
        "label": "C",
        "text": "10-3"
      },
      {
        "label": "D",
        "text": "10-4"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 335,
    "type": "单选",
    "q": "LTE下行ACK/NACK信令BER目标中NACK→ACK错误的目标质量为（）",
    "options": [
      {
        "label": "A",
        "text": "10-1"
      },
      {
        "label": "B",
        "text": "10-2"
      },
      {
        "label": "C",
        "text": "10-3"
      },
      {
        "label": "D",
        "text": "10-4"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 336,
    "type": "单选",
    "q": "LTE下行ACK/NACK信令BER目标中ACK→NACK错误的目标质量为（）",
    "options": [
      {
        "label": "A",
        "text": "10-1"
      },
      {
        "label": "B",
        "text": "10-2"
      },
      {
        "label": "C",
        "text": "10-3"
      },
      {
        "label": "D",
        "text": "10-4"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 337,
    "type": "单选",
    "q": "基于竞争的随机接入过程中在哪个步骤中来设置额外的功率偏置量",
    "options": [
      {
        "label": "A",
        "text": "步骤1：传输前导序列"
      },
      {
        "label": "B",
        "text": "步骤2：随机接入响应"
      },
      {
        "label": "C",
        "text": "步骤3：发送Layer2/Layer3消息"
      },
      {
        "label": "D",
        "text": "步骤4：发送竞争方式决议消息"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 338,
    "type": "单选",
    "q": "基于竞争的随机接入过程中在哪个步骤中发送RAR,用于识别检查前导序列的时频时隙",
    "options": [
      {
        "label": "A",
        "text": "步骤1：传输前导序列"
      },
      {
        "label": "B",
        "text": "步骤2：随机接入响应"
      },
      {
        "label": "C",
        "text": "步骤3：发送Layer2/Layer3消息"
      },
      {
        "label": "D",
        "text": "步骤4：发送竞争方式决议消息"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 339,
    "type": "单选",
    "q": "从RAR窗口结尾开始，前导偏置重传的最小时延为（）ms",
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
        "text": 4.0
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 340,
    "type": "单选",
    "q": "基于竞争的随机接入过程中PUSCH上首个调度的上行传输消息是在那个步骤中发送的",
    "options": [
      {
        "label": "A",
        "text": "步骤1：传输前导序列"
      },
      {
        "label": "B",
        "text": "步骤2：随机接入响应"
      },
      {
        "label": "C",
        "text": "步骤3：发送Layer2/Layer3消息"
      },
      {
        "label": "D",
        "text": "步骤4：发送竞争方式决议消息"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 341,
    "type": "单选",
    "q": "在UE接收到竞争解决消息后，一下那种行为是错误的",
    "options": [
      {
        "label": "A",
        "text": "UE对消息正确解码，并检测到自己的标识：反馈一个肯定的确认\"ACK\""
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
    "id": 342,
    "type": "单选",
    "q": "LTE中，对于频分双工(FDD)的操作，定义了4中随机接入的前导格式，其中格式0的Tcp（us）",
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
        "text": 406.26
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 343,
    "type": "单选",
    "q": "LTE中，对于频分双工(FDD)的操作，定义了4中随机接入的前导格式，其中格式1的Tcp（us）",
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
        "text": 406.26
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 344,
    "type": "单选",
    "q": "LTE中，对于频分双工(FDD)的操作，定义了4中随机接入的前导格式，其中格式2的Tcp（us）",
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
        "text": 406.26
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 345,
    "type": "单选",
    "q": "LTE中，对于频分双工(FDD)的操作，定义了4中随机接入的前导格式，其中格式3的Tcp（us）",
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
        "text": 406.26
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 346,
    "type": "单选",
    "q": "LTE中存在（）个PRACH签名序列",
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
        "text": "48"
      },
      {
        "label": "D",
        "text": 64.0
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 347,
    "type": "单选",
    "q": "UE的移动，造成传播延时的变化以一定的比率取决于UE相对于eNodeB的移动速度：当速度为500KM/H时，往返延时变化最高为（）us/s",
    "options": [
      {
        "label": "A",
        "text": "0.33"
      },
      {
        "label": "B",
        "text": "0.93"
      },
      {
        "label": "C",
        "text": "1.86"
      },
      {
        "label": "D",
        "text": 0.57
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 348,
    "type": "单选",
    "q": "LTE UE 振荡器中的频率经度要求小于（）PPM",
    "options": [
      {
        "label": "A",
        "text": "1"
      },
      {
        "label": "B",
        "text": "0.1"
      },
      {
        "label": "C",
        "text": "10"
      },
      {
        "label": "D",
        "text": 0.01
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 349,
    "type": "单选",
    "q": "和响应于随机接入信道前导序列的初始化定时提前命令相类似，更新命令具有（）us的时间间隔",
    "options": [
      {
        "label": "A",
        "text": "0.26"
      },
      {
        "label": "B",
        "text": "0.52"
      },
      {
        "label": "C",
        "text": "0.93"
      },
      {
        "label": "D",
        "text": 1.0
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 350,
    "type": "单选",
    "q": "考虑到电路交换业务，在LTE中，实在（）ms时间间隔上对不同的UE应用快速调度策略。",
    "options": [
      {
        "label": "A",
        "text": "1"
      },
      {
        "label": "B",
        "text": "0.1"
      },
      {
        "label": "C",
        "text": "10"
      },
      {
        "label": "D",
        "text": 0.5
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 351,
    "type": "单选",
    "q": "有效工作的典型滤波器长度在（）ms之间",
    "options": [
      {
        "label": "A",
        "text": "100—1000"
      },
      {
        "label": "B",
        "text": "300-700"
      },
      {
        "label": "C",
        "text": "100-500"
      },
      {
        "label": "D",
        "text": "200-600"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 352,
    "type": "单选",
    "q": "路径损耗步长因子在（）左右通常可以产生接近最大的上行系统容量而不会对可达到的小区边缘数据速率产生明显损耗",
    "options": [
      {
        "label": "A",
        "text": "0.7-0.8"
      },
      {
        "label": "B",
        "text": "0.6-0.7"
      },
      {
        "label": "C",
        "text": "0.5-0.6"
      },
      {
        "label": "D",
        "text": "0.8-0.9"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 353,
    "type": "单选",
    "q": "典型的无线接入系统可以处理高达（）dB的路径损耗",
    "options": [
      {
        "label": "A",
        "text": "100"
      },
      {
        "label": "B",
        "text": "200"
      },
      {
        "label": "C",
        "text": "150"
      },
      {
        "label": "D",
        "text": 50.0
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 354,
    "type": "单选",
    "q": "随机接入响应小时中响应一个（）比特的初始定时提前命令",
    "options": [
      {
        "label": "A",
        "text": "10"
      },
      {
        "label": "B",
        "text": "11"
      },
      {
        "label": "C",
        "text": "12"
      },
      {
        "label": "D",
        "text": 13.0
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 355,
    "type": "单选",
    "q": "以下不包括属于无竞争随机接入过程的为",
    "options": [
      {
        "label": "A",
        "text": "随机接入前导序列分配"
      },
      {
        "label": "B",
        "text": "随机接入前导序列"
      },
      {
        "label": "C",
        "text": "随机接入响应"
      },
      {
        "label": "D",
        "text": "发送L2/L3消息"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 356,
    "type": "单选",
    "q": "上行链路支持（）种RS",
    "options": [
      {
        "label": "A",
        "text": 1.0
      },
      {
        "label": "B",
        "text": 2.0
      },
      {
        "label": "C",
        "text": 3.0
      },
      {
        "label": "D",
        "text": 4.0
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 357,
    "type": "单选",
    "q": "下面哪个选项不是上行链路ＲＳ的理想特性",
    "options": [
      {
        "label": "A",
        "text": "频域上幅度恒定，这是为了在无偏差信道估计中对所有已分配子载波进行相同的激励"
      },
      {
        "label": "B",
        "text": "为进行精确信道估计而具有好的自相关特性"
      },
      {
        "label": "C",
        "text": "不同的ＲＳ之间良好的互相关特性，从而减小来自其他小区在相同资源上发送ＲＳ的干扰。"
      },
      {
        "label": "D",
        "text": "确定信道质量"
      }
    ],
    "a": "D ",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 358,
    "type": "单选",
    "q": "为了让一个小区支持不同带宽的上行链路传输，有必要给一个小区分配至少（）个基本RS序列",
    "options": [
      {
        "label": "A",
        "text": 1.0
      },
      {
        "label": "B",
        "text": 2.0
      },
      {
        "label": "C",
        "text": 3.0
      },
      {
        "label": "D",
        "text": 4.0
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 359,
    "type": "单选",
    "q": "最小数量的可用基序列对应于（）个RB资源分配",
    "options": [
      {
        "label": "A",
        "text": 1.0
      },
      {
        "label": "B",
        "text": 2.0
      },
      {
        "label": "C",
        "text": 3.0
      },
      {
        "label": "D",
        "text": 4.0
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 360,
    "type": "单选",
    "q": "对5RB（即长度为60的序列）而言，只有（）个扩展序列可用",
    "options": [
      {
        "label": "A",
        "text": 48.0
      },
      {
        "label": "B",
        "text": 58.0
      },
      {
        "label": "C",
        "text": 68.0
      },
      {
        "label": "D",
        "text": 78.0
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 361,
    "type": "单选",
    "q": "分配到不同子载波或RB组的UE，在这些子载波上发送RS信号，并以此通过（）实现RS分离",
    "options": [
      {
        "label": "A",
        "text": "FDM"
      },
      {
        "label": "B",
        "text": "SDMA"
      },
      {
        "label": "C",
        "text": "CDMA"
      },
      {
        "label": "D",
        "text": "MIMO"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  }]

var multiOptions = [
  {
    "id": 1,
    "type": "多选",
    "q": "Serving GW（以下简称SGW）终结和E-UTRAN的接口，主要负责（）等功能，支持3GPP不同接入技术的切换，发生切换时作为用户面的锚点",
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
    "id": 2,
    "type": "多选",
    "q": "后台系统环境检查标准,说法正确的是:",
    "options": [
      {
        "label": "A",
        "text": "计算机的主机,显示屏,鼠标等的摆放应整齐划一"
      },
      {
        "label": "B",
        "text": "计算机显示屏和主机上应用标签标示本机的用途"
      },
      {
        "label": "C",
        "text": "显示器和打印机等外挂设备与计算机主机的连接螺钉要拧紧"
      },
      {
        "label": "D",
        "text": "计算机后部所有电缆要求整齐布放和绑扎,不能互相缠绕,绑扎要留适当的余量"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 3,
    "type": "多选",
    "q": "MME（Mobility Management Entity）是一个信令实体，主要负责（）等功能",
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
    "id": 4,
    "type": "多选",
    "q": "以下哪个模块与公共资源管理有关",
    "options": [
      {
        "label": "A",
        "text": "CPM"
      },
      {
        "label": "B",
        "text": "CCMCCRM.DDCM"
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
    "a": "BC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 5,
    "type": "多选",
    "q": "属于传输语法错误的是:",
    "options": [
      {
        "label": "A",
        "text": "ViolationofvaluerangesinASN.1definitionofmessages"
      },
      {
        "label": "B",
        "text": "Violationinlistelementconstraints"
      },
      {
        "label": "C",
        "text": "MissingmandatoryelementsinASN.1SEQUENCEdefinitions"
      },
      {
        "label": "D",
        "text": "WrongorderofelementsinASN.1SEQUENCEdefinitions"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 6,
    "type": "多选",
    "q": "Oracle数据库中的系统全局区SGA构成包括:",
    "options": [
      {
        "label": "A",
        "text": "程序全局区"
      },
      {
        "label": "B",
        "text": "数据块缓存区"
      },
      {
        "label": "C",
        "text": "重做日志缓冲区"
      },
      {
        "label": "D",
        "text": "字典缓存区"
      }
    ],
    "a": "BCDE",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 7,
    "type": "多选",
    "q": "TMN的逻辑分层体系结构LLA包括:",
    "options": [
      {
        "label": "A",
        "text": "网元管理层"
      },
      {
        "label": "B",
        "text": "网络管理层"
      },
      {
        "label": "C",
        "text": "业务管理层"
      },
      {
        "label": "D",
        "text": "事务管理层"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 8,
    "type": "多选",
    "q": "数据库的关闭过程包括:",
    "options": [
      {
        "label": "A",
        "text": "关闭进程"
      },
      {
        "label": "B",
        "text": "关闭数据库"
      },
      {
        "label": "C",
        "text": "卸载数据库"
      },
      {
        "label": "D",
        "text": "关闭数据库实例"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 9,
    "type": "多选",
    "q": "数据库的启动过程包括:",
    "options": [
      {
        "label": "A",
        "text": "启动实例"
      },
      {
        "label": "B",
        "text": "启动后台进程"
      },
      {
        "label": "C",
        "text": "装载数据库"
      },
      {
        "label": "D",
        "text": "打开数据库"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 10,
    "type": "多选",
    "q": "CORBA体系结构主要包括:",
    "options": [
      {
        "label": "A",
        "text": "对象请求代理ORB"
      },
      {
        "label": "B",
        "text": "CORBA公共对象服务"
      },
      {
        "label": "C",
        "text": "CORBA公共设施"
      },
      {
        "label": "D",
        "text": "应用对象"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 11,
    "type": "多选",
    "q": "启动Oracle数据库的命令包括:",
    "options": [
      {
        "label": "A",
        "text": "Startup"
      },
      {
        "label": "B",
        "text": "Startup pfile=file"
      },
      {
        "label": "C",
        "text": "Startup nomount"
      },
      {
        "label": "D",
        "text": "Startup mount"
      }
    ],
    "a": "ABCDE",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 12,
    "type": "多选",
    "q": "以下参数可以唯一标识一个数据库的包括:",
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
    "a": "BCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 13,
    "type": "多选",
    "q": "安装Oracle数据库的过程主要包括以下过程:",
    "options": [
      {
        "label": "A",
        "text": "安装Oracle主程序"
      },
      {
        "label": "B",
        "text": "安装Oracle补丁"
      },
      {
        "label": "C",
        "text": "创建数据库"
      },
      {
        "label": "D",
        "text": "创建监听及服务名"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 14,
    "type": "多选",
    "q": "Linux系统中,下列哪些命令可以显示文件内容:",
    "options": [
      {
        "label": "A",
        "text": "cat"
      },
      {
        "label": "B",
        "text": "more"
      },
      {
        "label": "C",
        "text": "cp"
      },
      {
        "label": "D",
        "text": "tail"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 15,
    "type": "多选",
    "q": "启动一个Oracle数据库的步骤包括:",
    "options": [
      {
        "label": "A",
        "text": "启动一个实例"
      },
      {
        "label": "B",
        "text": "监听数据库"
      },
      {
        "label": "C",
        "text": "装配数据库"
      },
      {
        "label": "D",
        "text": "打开数据库"
      }
    ],
    "a": "ACD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 16,
    "type": "多选",
    "q": "最常用的UNIX shell:",
    "options": [
      {
        "label": "A",
        "text": "Bourneshell（sh）"
      },
      {
        "label": "B",
        "text": "Cshell（csh）"
      },
      {
        "label": "C",
        "text": "Kornshell（ksh）"
      },
      {
        "label": "D",
        "text": "TShell(tsh)"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 17,
    "type": "多选",
    "q": "Typical modes for LTE are()",
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
    "id": 18,
    "type": "多选",
    "q": "以下几种站间切换中，要求必须使用同一MME的切换类型是：（）",
    "options": [
      {
        "label": "A",
        "text": "S1切换"
      },
      {
        "label": "B",
        "text": "LTE&UMTS切换"
      },
      {
        "label": "C",
        "text": "X2切换"
      },
      {
        "label": "D",
        "text": "LT&GRAN切换"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 19,
    "type": "多选",
    "q": "以下哪些属于业务信道：（）",
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
        "text": "PSCH"
      },
      {
        "label": "D",
        "text": "PDCCH"
      }
    ],
    "a": "AC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 20,
    "type": "多选",
    "q": "下面哪些是基站与上级网元的直接接口？",
    "options": [
      {
        "label": "A",
        "text": "A"
      },
      {
        "label": "B",
        "text": "Iub"
      },
      {
        "label": "C",
        "text": "A ter"
      },
      {
        "label": "D",
        "text": "S1"
      }
    ],
    "a": "BD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 21,
    "type": "多选",
    "q": "下面表述错误的是：",
    "options": [
      {
        "label": "A",
        "text": "GSM单载频8个时隙"
      },
      {
        "label": "B",
        "text": "TD-SCDMA单个子帧9个时隙"
      },
      {
        "label": "C",
        "text": "TD-LTE常见的上下行时隙配比是2:2和1:3"
      },
      {
        "label": "D",
        "text": "TD-LTE的F频段和D频段的时隙长度不一样"
      }
    ],
    "a": "BD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 22,
    "type": "多选",
    "q": "哪些不是同步移动通信系统（不需要GPS同步信号）？",
    "options": [
      {
        "label": "A",
        "text": "GSM"
      },
      {
        "label": "B",
        "text": "TD-SCDMA"
      },
      {
        "label": "C",
        "text": "TD-LTE"
      },
      {
        "label": "D",
        "text": "FDD-LTE"
      }
    ],
    "a": "AD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 23,
    "type": "多选",
    "q": "常用的无线信号传播衰耗预测模型是：",
    "options": [
      {
        "label": "A",
        "text": "奥村"
      },
      {
        "label": "B",
        "text": "COST-231-HATA"
      },
      {
        "label": "C",
        "text": "多普勒"
      },
      {
        "label": "D",
        "text": "COST-231-walfish"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 24,
    "type": "多选",
    "q": "哪些是TD-LTE中F频段升级的优点：",
    "options": [
      {
        "label": "A",
        "text": "快速"
      },
      {
        "label": "B",
        "text": "频点多"
      },
      {
        "label": "C",
        "text": "投资少"
      },
      {
        "label": "D",
        "text": "建设方便"
      }
    ],
    "a": "ACD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 25,
    "type": "多选",
    "q": "哪些是TD-LTE中D频段新建的缺点？",
    "options": [
      {
        "label": "A",
        "text": "频段少"
      },
      {
        "label": "B",
        "text": "容量小"
      },
      {
        "label": "C",
        "text": "建设相对较麻烦"
      },
      {
        "label": "D",
        "text": "投资大"
      }
    ],
    "a": "CD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 26,
    "type": "多选",
    "q": "哪些不是BBU与RRU之间的接口？",
    "options": [
      {
        "label": "A",
        "text": "Ir"
      },
      {
        "label": "B",
        "text": "Iub"
      },
      {
        "label": "C",
        "text": "X2"
      },
      {
        "label": "D",
        "text": "S1"
      }
    ],
    "a": "BCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 27,
    "type": "多选",
    "q": "分布式基站的缺点是：",
    "options": [
      {
        "label": "A",
        "text": "集成度高只能整体替换"
      },
      {
        "label": "B",
        "text": "载频资源不能单载频拆卸调用"
      },
      {
        "label": "C",
        "text": "天面RRU维护麻烦"
      },
      {
        "label": "D",
        "text": "有BBU与RRU之间的馈线衰耗"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 28,
    "type": "多选",
    "q": "对馈线描述正确的是：",
    "options": [
      {
        "label": "A",
        "text": "负责传输射频信号"
      },
      {
        "label": "B",
        "text": "一般有7/8\"和4/5\"的"
      },
      {
        "label": "C",
        "text": "GSM900信号，7/8\"百米衰耗6.3B"
      },
      {
        "label": "D",
        "text": "TD-LTE系统不需要BBU与天面的馈线"
      }
    ],
    "a": "AD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 29,
    "type": "多选",
    "q": "RRU与天线接口，可以有哪些密封模式？",
    "options": [
      {
        "label": "A",
        "text": "热缩管"
      },
      {
        "label": "B",
        "text": "冷缩管"
      },
      {
        "label": "C",
        "text": "接头盒"
      },
      {
        "label": "D",
        "text": "胶泥胶带"
      }
    ],
    "a": "AD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 30,
    "type": "多选",
    "q": "下面哪些功率值的描述正确？",
    "options": [
      {
        "label": "A",
        "text": "0dm是100mW"
      },
      {
        "label": "B",
        "text": "10dBm是10mW"
      },
      {
        "label": "C",
        "text": "16dBm是40mW"
      },
      {
        "label": "D",
        "text": "33dBm是2000mW"
      }
    ],
    "a": "BCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 31,
    "type": "多选",
    "q": "MIB消息中包含的内容有（）。",
    "options": [
      {
        "label": "A",
        "text": "天线配置"
      },
      {
        "label": "B",
        "text": "下行带宽"
      },
      {
        "label": "C",
        "text": "上行带宽"
      },
      {
        "label": "D",
        "text": "系统帧号"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 32,
    "type": "多选",
    "q": "测量控制消息中可能包含的信息有（）。",
    "options": [
      {
        "label": "A",
        "text": "测量报告的方式"
      },
      {
        "label": "B",
        "text": "测量ID"
      },
      {
        "label": "C",
        "text": "测量量"
      },
      {
        "label": "D",
        "text": "邻区信号质量"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 33,
    "type": "多选",
    "q": "切换执行消息中包含的内容可能有（）。",
    "options": [
      {
        "label": "A",
        "text": "目标小区PCI"
      },
      {
        "label": "B",
        "text": "目标小区负载"
      },
      {
        "label": "C",
        "text": "目标小区频率"
      },
      {
        "label": "D",
        "text": "目标小区带宽"
      }
    ],
    "a": "ACD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 34,
    "type": "多选",
    "q": "RRC建立请求消息中包含的信息可能有（）。",
    "options": [
      {
        "label": "A",
        "text": "UE ID"
      },
      {
        "label": "B",
        "text": "天线配置"
      },
      {
        "label": "C",
        "text": "RRC建立原因"
      },
      {
        "label": "D",
        "text": "SRB1配置"
      }
    ],
    "a": "AC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 35,
    "type": "多选",
    "q": "以下资源间的关系正确的是（）。",
    "options": [
      {
        "label": "A",
        "text": "1REG=4RE"
      },
      {
        "label": "B",
        "text": "1REG=9RE"
      },
      {
        "label": "C",
        "text": "1CCE=9REG"
      },
      {
        "label": "D",
        "text": "1PRB=84RE(普通CP)"
      }
    ],
    "a": "ACD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 36,
    "type": "多选",
    "q": "LTE可支持的带宽配置为（）",
    "options": [
      {
        "label": "A",
        "text": "1.4M"
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
        "text": "3M"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 37,
    "type": "多选",
    "q": "下面几种切换中，需要核心网参与的是（）",
    "options": [
      {
        "label": "A",
        "text": "ENB站内切换"
      },
      {
        "label": "B",
        "text": "ENB间X2口切换"
      },
      {
        "label": "C",
        "text": "ENB间S1口切换"
      },
      {
        "label": "D",
        "text": "跨MME的切换"
      }
    ],
    "a": "CD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 38,
    "type": "多选",
    "q": "以下流程中，属于接入的是（）",
    "options": [
      {
        "label": "A",
        "text": "随机接入"
      },
      {
        "label": "B",
        "text": "RRC连接建立"
      },
      {
        "label": "C",
        "text": "鉴权/加密/安全模式"
      },
      {
        "label": "D",
        "text": "E-RAB建立"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 39,
    "type": "多选",
    "q": "Smallcell的产品形态（）",
    "options": [
      {
        "label": "A",
        "text": "Picocell"
      },
      {
        "label": "B",
        "text": "Macrocell"
      },
      {
        "label": "C",
        "text": "Microcell"
      },
      {
        "label": "D",
        "text": "Femto"
      }
    ],
    "a": "ACDE",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 40,
    "type": "多选",
    "q": "LTE的关键技术包括如下哪些（    ）",
    "options": [
      {
        "label": "A",
        "text": "A.码分多址"
      },
      {
        "label": "B",
        "text": "B.OFDM"
      },
      {
        "label": "C",
        "text": "C.MIMO"
      },
      {
        "label": "D",
        "text": "D.扁平网络"
      }
    ],
    "a": "BC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 41,
    "type": "多选",
    "q": "LTE中PRACH的配置有format0～format4共5种格式，考虑网络建设初期应用场景为城区，那么建议的配置有（）",
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
    "a": "AE",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 42,
    "type": "多选",
    "q": "TD-LTE小区参数cqiReportingModeAperiodic可以设置为（）",
    "options": [
      {
        "label": "A",
        "text": "mode10"
      },
      {
        "label": "B",
        "text": "mode11"
      },
      {
        "label": "C",
        "text": "mode30"
      },
      {
        "label": "D",
        "text": "mode31"
      }
    ],
    "a": "CD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 43,
    "type": "多选",
    "q": "为了减少小区间的干扰，在PUSCH的功控方案中使用的是",
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
    "id": 44,
    "type": "多选",
    "q": "小区专用参考信号定义的天线端口包括（）",
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
        "text": "port2"
      },
      {
        "label": "D",
        "text": "port3"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 45,
    "type": "多选",
    "q": "以下关于PCC的描述，正确的是（）",
    "options": [
      {
        "label": "A",
        "text": "3GPPPCC架构中PCEF是策略执行实体"
      },
      {
        "label": "B",
        "text": "3GPPPCC架构中SPR是签约数据库"
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
    "id": 46,
    "type": "多选",
    "q": "参考信号的正交性可以通过下列方法实现",
    "options": [
      {
        "label": "A",
        "text": "FDM方法"
      },
      {
        "label": "B",
        "text": "DM方法"
      },
      {
        "label": "C",
        "text": "TM方法"
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
    "id": 47,
    "type": "多选",
    "q": "LTE系统的L2（Lyer 2）包括哪几层：",
    "options": [
      {
        "label": "A",
        "text": "PDCP"
      },
      {
        "label": "B",
        "text": "RL"
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
    "id": 48,
    "type": "多选",
    "q": "厦门海测时发现有速率，但是速率比理论值低很多，不可能的原因有：（）",
    "options": [
      {
        "label": "A",
        "text": "天线与RRU的馈线顺序错误"
      },
      {
        "label": "B",
        "text": "下行方向只有单流"
      },
      {
        "label": "C",
        "text": "PCI mo3干扰"
      },
      {
        "label": "D",
        "text": "船在起伏"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 49,
    "type": "多选",
    "q": "LTE系统中，RRC包括的状态有：",
    "options": [
      {
        "label": "A",
        "text": "RRC_IDLE；"
      },
      {
        "label": "B",
        "text": "RR_DETAH；"
      },
      {
        "label": "C",
        "text": "RRC_CONNECTED"
      },
      {
        "label": "D",
        "text": "RRC_ATTACH"
      }
    ],
    "a": "AC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 50,
    "type": "多选",
    "q": "通常所说的层二协议包括（）",
    "options": [
      {
        "label": "A",
        "text": "PHY层；"
      },
      {
        "label": "B",
        "text": "MA层；"
      },
      {
        "label": "C",
        "text": "RLC层；"
      },
      {
        "label": "D",
        "text": "PDCP层"
      }
    ],
    "a": "BCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 51,
    "type": "多选",
    "q": "OFDM的主要优势有（）",
    "options": [
      {
        "label": "A",
        "text": "消除ISI"
      },
      {
        "label": "B",
        "text": "消除MAI"
      },
      {
        "label": "C",
        "text": "提高频谱效率"
      },
      {
        "label": "D",
        "text": "减轻衰落影响"
      }
    ],
    "a": "ACD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 52,
    "type": "多选",
    "q": "以下哪些载波带宽是LTE系统支持的（）",
    "options": [
      {
        "label": "A",
        "text": "1.6M"
      },
      {
        "label": "B",
        "text": "3M"
      },
      {
        "label": "C",
        "text": "7.5M"
      },
      {
        "label": "D",
        "text": "20M"
      }
    ],
    "a": "BD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 53,
    "type": "多选",
    "q": "LTE网络的优势为（）",
    "options": [
      {
        "label": "A",
        "text": "频谱效率高"
      },
      {
        "label": "B",
        "text": "网络扁平化，时延小"
      },
      {
        "label": "C",
        "text": "空口速率高"
      },
      {
        "label": "D",
        "text": "网络成本低"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 54,
    "type": "多选",
    "q": "LTE的最小调度周期，即TTI为（）。",
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
        "text": "2ms"
      }
    ],
    "a": "A",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 55,
    "type": "多选",
    "q": "RRC Connection Reconfiguration有可能携带的信息有（）。",
    "options": [
      {
        "label": "A",
        "text": "测量控制消息"
      },
      {
        "label": "B",
        "text": "DRB建立消息"
      },
      {
        "label": "C",
        "text": "切换执行消息"
      },
      {
        "label": "D",
        "text": "RRC建立消息"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 56,
    "type": "多选",
    "q": "下面对天线表述错误的是：",
    "options": [
      {
        "label": "A",
        "text": "是无源器件"
      },
      {
        "label": "B",
        "text": "一般分为全向和定向"
      },
      {
        "label": "C",
        "text": "有三种表达增益方式:dBadBddBi"
      },
      {
        "label": "D",
        "text": "有机械下倾和电调下倾"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 57,
    "type": "多选",
    "q": "PlanetEET格式的地图中的Projection文件主要记录（）等信息。",
    "options": [
      {
        "label": "A",
        "text": "椭球体类型"
      },
      {
        "label": "B",
        "text": "长度比例"
      },
      {
        "label": "C",
        "text": "电子地图精度"
      },
      {
        "label": "D",
        "text": "投影类型"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 58,
    "type": "多选",
    "q": "数字地图主要由（）组成。",
    "options": [
      {
        "label": "A",
        "text": "数字高程模型"
      },
      {
        "label": "B",
        "text": "线状地物模型"
      },
      {
        "label": "C",
        "text": "地物覆盖模型"
      },
      {
        "label": "D",
        "text": "建筑物模型"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 59,
    "type": "多选",
    "q": "地球椭球体的三要素（）。",
    "options": [
      {
        "label": "A",
        "text": "长半径"
      },
      {
        "label": "B",
        "text": "短半径"
      },
      {
        "label": "C",
        "text": "地球扁率"
      },
      {
        "label": "D",
        "text": "斜率"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 60,
    "type": "多选",
    "q": "（）都是MAPINFO能够识别的命令或者词语，不区分大小写。",
    "options": [
      {
        "label": "A",
        "text": "Update"
      },
      {
        "label": "B",
        "text": "Set"
      },
      {
        "label": "C",
        "text": "Obj"
      },
      {
        "label": "D",
        "text": "Createline"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 61,
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
    "id": 62,
    "type": "多选",
    "q": "下列哪些属于控制信道（）",
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
        "text": "PRACH"
      },
      {
        "label": "D",
        "text": "PBCH"
      }
    ],
    "a": "BCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 63,
    "type": "多选",
    "q": "关于LTE网络整体结构，哪些说法是正确的（）",
    "options": [
      {
        "label": "A",
        "text": "E-UTRAN用E-NodeB替代原有的RNC-NodeB结构"
      },
      {
        "label": "B",
        "text": "各网络节点之间的接口使用IP传输"
      },
      {
        "label": "C",
        "text": "S1接口与X2接口均要经过PTN网络"
      },
      {
        "label": "D",
        "text": "E-NodeB间的接口为X2接口"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 64,
    "type": "多选",
    "q": "下列信道中，属于下行信道的是（）",
    "options": [
      {
        "label": "A",
        "text": "PDSCH"
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
        "text": "PDCCH"
      }
    ],
    "a": "ADEF",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 65,
    "type": "多选",
    "q": "PHICH_duration用来表示PHICH持续多少个OFDM符号,取值可以是()",
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
    "id": 66,
    "type": "多选",
    "q": "SAE网络的边界网关，提供承载控制计费地址分配和非3GPP接入等功能的网元",
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
    "id": 67,
    "type": "多选",
    "q": "TD-LTE系统中调度用户的最小单位是（），它是由频域上连续12个子载波，时域上连续7个OFDM符号构成，子载波带宽为（）KHz。",
    "options": [
      {
        "label": "A",
        "text": "RB"
      },
      {
        "label": "B",
        "text": "PRB"
      },
      {
        "label": "C",
        "text": "RAB"
      },
      {
        "label": "D",
        "text": "RE"
      }
    ],
    "a": "AE",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 68,
    "type": "多选",
    "q": "TD-LTE系统中调度用户的最小单位是，它是由频域上连续12个子载波，时域上连续7个OFDM符号构成，子载波带宽为KHz。",
    "options": [
      {
        "label": "A",
        "text": "ARB"
      },
      {
        "label": "B",
        "text": "BPRB"
      },
      {
        "label": "C",
        "text": "CRAB"
      },
      {
        "label": "D",
        "text": "DRE"
      }
    ],
    "a": "AF",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 69,
    "type": "多选",
    "q": "UE的传输模式包括：",
    "options": [
      {
        "label": "A",
        "text": "Single-antennaport：port0port5"
      },
      {
        "label": "B",
        "text": "Transmitdiversity&spatialmultiplexing"
      },
      {
        "label": "C",
        "text": "Open-loop&Closed-loopspatialmultiplexing"
      },
      {
        "label": "D",
        "text": "Multi-userMIMO"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 70,
    "type": "多选",
    "q": "以下名称分别对应哪个功能？<1>MME（）<2>S-GW（）<3>P-GW（）<4>eNodeB（A）<5>HSS（）",
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
        "text": "SAE网络的边界网关，提供承载控制计费地址分配和非3GPP接入等功能，相当于传统的GGSN。"
      },
      {
        "label": "D",
        "text": "SAE网络用户数据管理网元，提供鉴权和签约等功能，包含HLR功能。"
      }
    ],
    "a": "BECAD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 71,
    "type": "多选",
    "q": "小区间干扰抑制技术主要包括有",
    "options": [
      {
        "label": "A",
        "text": "A：小区间干扰随机化（Inter-cellinterferencerandomisation）"
      },
      {
        "label": "B",
        "text": "B：小区间干扰消除（Inter-cellinterferencecancellation）"
      },
      {
        "label": "C",
        "text": "C：小区间干扰协调（ICIC：Inter-cellinterferencecoordination）"
      },
      {
        "label": "D",
        "text": "D：小区间干扰平均（Inter-cellinterferenceaverage）"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 72,
    "type": "多选",
    "q": "下面哪种场景可以使用TTIbundling",
    "options": [
      {
        "label": "A",
        "text": "A：对于覆盖面积大的小区中处于小区边缘的用户最好是使用TTIBundling。"
      },
      {
        "label": "B",
        "text": "B：如果UE的RSRQ和RSRP都很低，则最好是使用TTIBundling"
      },
      {
        "label": "C",
        "text": "C：如果SRS的SINR很低，则最好是使用TTIBundling"
      },
      {
        "label": "D",
        "text": "D：如果UE的RSRQRSRP和SRS的SINR都很低，则最好是使用TTIBundling"
      }
    ],
    "a": "ABCDE",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 73,
    "type": "多选",
    "q": "上行数据发送并倍基站接收后，通过（）合并，对接收信号进行处理",
    "options": [
      {
        "label": "A",
        "text": "软合并"
      },
      {
        "label": "B",
        "text": "选择性合并"
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
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 74,
    "type": "多选",
    "q": "OFDM的核心操作中包含",
    "options": [
      {
        "label": "A",
        "text": "IFFT变换"
      },
      {
        "label": "B",
        "text": "插入CP"
      },
      {
        "label": "C",
        "text": "调制"
      },
      {
        "label": "D",
        "text": "解调"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 75,
    "type": "多选",
    "q": "集中式的子载波分配方式",
    "options": [
      {
        "label": "A",
        "text": "时域调度"
      },
      {
        "label": "B",
        "text": "频域调度"
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
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 76,
    "type": "多选",
    "q": "MIMO常用的传输分集技术包括",
    "options": [
      {
        "label": "A",
        "text": "空时块码（STBC)"
      },
      {
        "label": "B",
        "text": "空频块码（SFBC）"
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
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 77,
    "type": "多选",
    "q": "MIMO实现的效果可以分类成",
    "options": [
      {
        "label": "A",
        "text": "传输分集"
      },
      {
        "label": "B",
        "text": "波束赋形"
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
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 78,
    "type": "多选",
    "q": "随机接入失败常见原因",
    "options": [
      {
        "label": "A",
        "text": "ENB侧参数配置问题"
      },
      {
        "label": "B",
        "text": "UE侧参数配置问题"
      },
      {
        "label": "C",
        "text": "信道环境影响"
      },
      {
        "label": "D",
        "text": "核心网配置问题"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 79,
    "type": "多选",
    "q": "GSM/UMTS/LTE互操作初始阶段目标",
    "options": [
      {
        "label": "A",
        "text": "只有数据业务"
      },
      {
        "label": "B",
        "text": "保证业务的连续性"
      },
      {
        "label": "C",
        "text": "避免对GSM/UMTS网络稳定性的影响"
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
    "id": 80,
    "type": "多选",
    "q": "GSM/UMTS/LTE互操作成熟阶段目标",
    "options": [
      {
        "label": "A",
        "text": "推出语音服务"
      },
      {
        "label": "B",
        "text": "基于负载的移动性管理"
      },
      {
        "label": "C",
        "text": "基于业务的移动性管理"
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
    "id": 81,
    "type": "多选",
    "q": "切换三部曲",
    "options": [
      {
        "label": "A",
        "text": "测量"
      },
      {
        "label": "B",
        "text": "判决"
      },
      {
        "label": "C",
        "text": "执行"
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
    "id": 82,
    "type": "多选",
    "q": "通过OMT，可以查询到",
    "options": [
      {
        "label": "A",
        "text": "当前服务小区的频点"
      },
      {
        "label": "B",
        "text": "PCI"
      },
      {
        "label": "C",
        "text": "TAC"
      },
      {
        "label": "D",
        "text": "当前RSRP的值"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 83,
    "type": "多选",
    "q": "RF优化的主要工作内容",
    "options": [
      {
        "label": "A",
        "text": "优化无线信号覆盖"
      },
      {
        "label": "B",
        "text": "优化无线信号质量"
      },
      {
        "label": "C",
        "text": "切换问题优化"
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
    "id": 84,
    "type": "多选",
    "q": "LBBP单板功能",
    "options": [
      {
        "label": "A",
        "text": "完成上下行数据系带处理功能"
      },
      {
        "label": "B",
        "text": "提供与RRU通信的CPRI接口"
      },
      {
        "label": "C",
        "text": "实现跨BBU系带资源共享能力"
      },
      {
        "label": "D",
        "text": "提供与RRU通信的Uu接口"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 85,
    "type": "多选",
    "q": "无线网络规划目标",
    "options": [
      {
        "label": "A",
        "text": "盈利业务覆盖最佳"
      },
      {
        "label": "B",
        "text": "核心业务质量最优"
      },
      {
        "label": "C",
        "text": "有限资源容量最大"
      },
      {
        "label": "D",
        "text": "综合建网成本最小"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 86,
    "type": "多选",
    "q": "LTE下行物信道主要有（）",
    "options": [
      {
        "label": "A",
        "text": "A.物理下行共享信道PDSCH"
      },
      {
        "label": "B",
        "text": "B.物理控制格式指示信道PCFICH"
      },
      {
        "label": "C",
        "text": "C.物理下行控制信道PDCCHD.物理广播信道PBCH；"
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
    "id": 87,
    "type": "多选",
    "q": "系统消息（）包含小区重选相关的其他系统邻小区信息。A",
    "options": [
      {
        "label": "A",
        "text": "SIB5"
      },
      {
        "label": "B",
        "text": "SIB6C"
      },
      {
        "label": "C",
        "text": "SIB7D"
      },
      {
        "label": "D",
        "text": "SIB8"
      }
    ],
    "a": "BCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 88,
    "type": "多选",
    "q": "关于塔顶放大器，以下哪些叙述是正确的",
    "options": [
      {
        "label": "A",
        "text": "能够提高BTS的接收灵敏度，扩大覆盖范围"
      },
      {
        "label": "B",
        "text": "改善网络的通话质量，减少误码率.掉话率"
      },
      {
        "label": "C",
        "text": "降低长距离馈线引入的噪声及干扰"
      },
      {
        "label": "D",
        "text": "降低手机发射功率，减少对人体辐射."
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 89,
    "type": "多选",
    "q": "关于天线增益的说法，以下正确的是",
    "options": [
      {
        "label": "A",
        "text": "dBi用于天线增益相对于全向辐射器的参考值"
      },
      {
        "label": "B",
        "text": "两单位的换算关系为dBi＝dBd＋2.15dB"
      },
      {
        "label": "C",
        "text": "dBd用于天线增益相对于半波振子的参考值."
      },
      {
        "label": "D",
        "text": "天线发射主方向与发射功率下降2dB点的夹角为波束宽度."
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 90,
    "type": "多选",
    "q": "OFDM系统解决小区间干扰可以使用的方案",
    "options": [
      {
        "label": "A",
        "text": "加扰"
      },
      {
        "label": "B",
        "text": "小区间频域协调"
      },
      {
        "label": "C",
        "text": "干扰消除"
      },
      {
        "label": "D",
        "text": "跳频"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 91,
    "type": "多选",
    "q": "GPS时钟的那些状态不影响基站内部时钟紊乱（）",
    "options": [
      {
        "label": "A",
        "text": "A.初始状态"
      },
      {
        "label": "B",
        "text": "B.预热状态"
      },
      {
        "label": "C",
        "text": "C.锁定状态"
      },
      {
        "label": "D",
        "text": "D.不可恢复异常状态"
      }
    ],
    "a": "CEF",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 92,
    "type": "多选",
    "q": "可以用来解决某路段弱覆盖问题的方法()",
    "options": [
      {
        "label": "A",
        "text": "降低非主覆盖小区的信号强度，提升主覆盖小区信号SINR"
      },
      {
        "label": "B",
        "text": "调整主覆盖小区的天线倾角及方位角"
      },
      {
        "label": "C",
        "text": "如果主覆盖小区功率未到额定最大值,适当提高主覆盖小区的功率"
      },
      {
        "label": "D",
        "text": "调整主覆盖小区的sectorbeam的权值，使得能量更集中"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 93,
    "type": "多选",
    "q": "目前阶段，LTE系统内的切换是基于:",
    "options": [
      {
        "label": "A",
        "text": "RSRP"
      },
      {
        "label": "B",
        "text": "CQI"
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
    "id": 94,
    "type": "多选",
    "q": "特殊子帧由（）构成",
    "options": [
      {
        "label": "A",
        "text": "A:DwPTS"
      },
      {
        "label": "B",
        "text": "B:GP"
      },
      {
        "label": "C",
        "text": "C:UpPTS"
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
    "id": 95,
    "type": "多选",
    "q": "物理HARQ指示信道（PHICH）的功能（）",
    "options": [
      {
        "label": "A",
        "text": "用于NodB向UE"
      },
      {
        "label": "B",
        "text": "反馈和PUSCH相关的ACK/NACK信息"
      },
      {
        "label": "C",
        "text": "HARQ信息"
      },
      {
        "label": "D",
        "text": "功控信息"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 96,
    "type": "多选",
    "q": "调度的基本原则",
    "options": [
      {
        "label": "A",
        "text": "短期内，以信道条件为主"
      },
      {
        "label": "B",
        "text": "长期内，兼顾对所有用户的吞吐量和公平性"
      },
      {
        "label": "C",
        "text": "短期内，兼顾对所有用户的吞吐量和公平性"
      },
      {
        "label": "D",
        "text": "长期内，以信道条件为主"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 97,
    "type": "多选",
    "q": "MIMO的工作模式",
    "options": [
      {
        "label": "A",
        "text": "复用模式"
      },
      {
        "label": "B",
        "text": "分集模式"
      },
      {
        "label": "C",
        "text": "独立模式"
      },
      {
        "label": "D",
        "text": "集成模式"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 98,
    "type": "多选",
    "q": "ICIC（小区间干扰协调）技术的缺点",
    "options": [
      {
        "label": "A",
        "text": "干扰水平的降低"
      },
      {
        "label": "B",
        "text": "牺牲系统容量为代价"
      },
      {
        "label": "C",
        "text": "降低频谱效率"
      },
      {
        "label": "D",
        "text": "降低频谱带宽"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 99,
    "type": "多选",
    "q": "TD-LTE小区边缘吞吐量指标",
    "options": [
      {
        "label": "A",
        "text": "DL：0.45Mbps"
      },
      {
        "label": "B",
        "text": "UL:0.35Mbps"
      },
      {
        "label": "C",
        "text": "DL：0.35Mbps"
      },
      {
        "label": "D",
        "text": "UL:0.45Mbps"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 100,
    "type": "多选",
    "q": "同频组网的劣势",
    "options": [
      {
        "label": "A",
        "text": "在小区边缘有强干扰"
      },
      {
        "label": "B",
        "text": "连续覆盖比较困难"
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
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 101,
    "type": "多选",
    "q": "寻呼的三种触发场景",
    "options": [
      {
        "label": "A",
        "text": "UE处于IDLE态且网络侧有数据要发送给UE"
      },
      {
        "label": "B",
        "text": "网络侧通知UE系统消息更新时"
      },
      {
        "label": "C",
        "text": "网络侧通知UE当前有ETWS时"
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
    "id": 102,
    "type": "多选",
    "q": "BBU3900的逻辑功能划分",
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
        "text": "控制子系统"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 103,
    "type": "多选",
    "q": "无线通信系统可以利用的资源",
    "options": [
      {
        "label": "A",
        "text": "时间"
      },
      {
        "label": "B",
        "text": "频率"
      },
      {
        "label": "C",
        "text": "功率"
      },
      {
        "label": "D",
        "text": "空间"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 104,
    "type": "多选",
    "q": "双流Beamforming技术特点",
    "options": [
      {
        "label": "A",
        "text": "R9版本的新技术"
      },
      {
        "label": "B",
        "text": "结合天线波束赋形技术与MIMO空间复用技术"
      },
      {
        "label": "C",
        "text": "TD-LTE的多天线增强型技术"
      },
      {
        "label": "D",
        "text": "TD-LTE建网的主流技术"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 105,
    "type": "多选",
    "q": "CP长度的考虑因素",
    "options": [
      {
        "label": "A",
        "text": "频谱效率"
      },
      {
        "label": "B",
        "text": "符号间干扰"
      },
      {
        "label": "C",
        "text": "子载波间干扰"
      },
      {
        "label": "D",
        "text": "频谱带宽"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 106,
    "type": "多选",
    "q": "OFDM技术的优势",
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
    "a": "ABCDE",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 107,
    "type": "多选",
    "q": "OFDM技术存在的问题",
    "options": [
      {
        "label": "A",
        "text": "PAPR问题"
      },
      {
        "label": "B",
        "text": "时间和频率同步"
      },
      {
        "label": "C",
        "text": "多小区多址"
      },
      {
        "label": "D",
        "text": "干扰抑制"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 108,
    "type": "多选",
    "q": "LTE测试用什么软件（）",
    "options": [
      {
        "label": "A",
        "text": "GENEXProbe，"
      },
      {
        "label": "B",
        "text": "GENEXAssistant"
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
    "id": 109,
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
    "id": 110,
    "type": "多选",
    "q": "下行数据的调制主要采用哪几种方式",
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
        "text": "8PSK"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 111,
    "type": "多选",
    "q": "增加TD-SCDMA邻区时，需增加以下哪些数据？（）",
    "options": [
      {
        "label": "A",
        "text": "A.增加EUTRA邻小区"
      },
      {
        "label": "B",
        "text": "B.增加邻UTRANTDD小区"
      },
      {
        "label": "C",
        "text": "C.增加邻UTRANFDD小区"
      },
      {
        "label": "D",
        "text": "D.增加邻小区关系"
      }
    ],
    "a": "BD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 112,
    "type": "多选",
    "q": "E-RAB的建立，均可由（）和（）发起，（）不可发起。",
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
    "id": 113,
    "type": "多选",
    "q": "厦门海测时发现有速率，但是速率比理论值低很多，不可能的原因有",
    "options": [
      {
        "label": "A",
        "text": "天线与RRU的馈线顺序错误"
      },
      {
        "label": "B",
        "text": "下行方向只有单流"
      },
      {
        "label": "C",
        "text": "PCIMode3干扰"
      },
      {
        "label": "D",
        "text": "船在起伏"
      }
    ],
    "a": "D",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 114,
    "type": "多选",
    "q": "厦门海测时通过观察CDS路测工具上的可以判断只有单流下行。",
    "options": [
      {
        "label": "A",
        "text": "PCI"
      },
      {
        "label": "B",
        "text": "Rank"
      },
      {
        "label": "C",
        "text": "MCS"
      },
      {
        "label": "D",
        "text": "RSRP"
      }
    ],
    "a": "B",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 115,
    "type": "多选",
    "q": "寻呼由网络向什么状态下的UE发起？",
    "options": [
      {
        "label": "A",
        "text": "仅空闲态"
      },
      {
        "label": "B",
        "text": "仅连接态"
      },
      {
        "label": "C",
        "text": "空闲态或连接态"
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
    "id": 116,
    "type": "多选",
    "q": "一个PRB由频域上连续（）个子载波（子载波宽度15kHz），时域上连续（）个OFDM符号构成",
    "options": [
      {
        "label": "A",
        "text": "12"
      },
      {
        "label": "B",
        "text": "10"
      },
      {
        "label": "C",
        "text": "9"
      },
      {
        "label": "D",
        "text": "7"
      }
    ],
    "a": "AD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 117,
    "type": "多选",
    "q": "以下几种站间切换中，要求必须使用同一MME的切换类型是:",
    "options": [
      {
        "label": "A",
        "text": "S1切换"
      },
      {
        "label": "B",
        "text": "LTE&UMTS切换"
      },
      {
        "label": "C",
        "text": "X2切换"
      },
      {
        "label": "D",
        "text": "LTE&GERAN切换"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 118,
    "type": "多选",
    "q": "以下名称分别对应哪个功能？<1>MME<2>S-GW<3>P-GW<4>eNodeB<5>HSS",
    "options": [
      {
        "label": "A",
        "text": "A负责无线资源管理，集成了部分类似2G/TD基站和基站控制器的功能"
      },
      {
        "label": "B",
        "text": "BLTE接入下的控制面网元，负责移动性管理功能；"
      },
      {
        "label": "C",
        "text": "CSAE网络的边界网关，提供承载控制计费地址分配和非3GPP接入等功能，相当于传统的GGSN。"
      },
      {
        "label": "D",
        "text": "DSAE网络用户数据管理网元，提供鉴权和签约等功能，包含HLR功能。"
      }
    ],
    "a": "BECAD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 119,
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
    "id": 120,
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
    "id": 121,
    "type": "多选",
    "q": "LTE定时同步包括：",
    "options": [
      {
        "label": "A",
        "text": "无线链路监测（Radiolinkmonitoring）"
      },
      {
        "label": "B",
        "text": "小区间同步（Inter-cellsynchronisation）"
      },
      {
        "label": "C",
        "text": "发射定时调整（Transmissiontimingadjustment）"
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
    "id": 122,
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
    "id": 123,
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
    "id": 124,
    "type": "多选",
    "q": "LTE上行实现半静态或动态频率重用方案的指示：",
    "options": [
      {
        "label": "A",
        "text": "HII（HighInterferenceIndicator）"
      },
      {
        "label": "B",
        "text": "TLI（TrafficLoadIndicator）"
      },
      {
        "label": "C",
        "text": "LB（LoadBlance）"
      },
      {
        "label": "D",
        "text": "OI（OverloadIndicator）"
      }
    ],
    "a": "AD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 125,
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
    "id": 126,
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
    "id": 127,
    "type": "多选",
    "q": "LTE为了解决深度覆盖的问题，以下哪些措施是不可取的：",
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
    "id": 128,
    "type": "多选",
    "q": "LTE系统共有个物理小区IDPCI，由主同步信号和辅同步信号的组合来标识。",
    "options": [
      {
        "label": "A",
        "text": "501"
      },
      {
        "label": "B",
        "text": "502"
      },
      {
        "label": "C",
        "text": "503"
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
    "id": 129,
    "type": "多选",
    "q": "以下哪个模块与公共资源管理有关",
    "options": [
      {
        "label": "A",
        "text": "A.CPM"
      },
      {
        "label": "B",
        "text": "B.CCM"
      },
      {
        "label": "C",
        "text": "CCRM."
      },
      {
        "label": "D",
        "text": "DDCM"
      }
    ],
    "a": "BC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 130,
    "type": "多选",
    "q": "以下哪个LTE天线方案仅支持单流？",
    "options": [
      {
        "label": "A",
        "text": "8天线Beamforming"
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
    "id": 131,
    "type": "多选",
    "q": "以下哪些属于控制信道",
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
        "text": "PDSCH"
      },
      {
        "label": "D",
        "text": "PDCCH"
      }
    ],
    "a": "BD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 132,
    "type": "多选",
    "q": "站址选择应尽量避免选取高站（站高大于50米或站高高于周边建筑物15米），站间距300-400米时，平均站高控制在（）米左右；站间距400-500米时，平均站高控制在（）米左右。",
    "options": [
      {
        "label": "A",
        "text": "20"
      },
      {
        "label": "B",
        "text": "25"
      },
      {
        "label": "C",
        "text": "30"
      },
      {
        "label": "D",
        "text": "35"
      }
    ],
    "a": "BC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 133,
    "type": "多选",
    "q": "LTE发展驱动力",
    "options": [
      {
        "label": "A",
        "text": "语言收入下降"
      },
      {
        "label": "B",
        "text": "提升带宽，发掘新业务"
      },
      {
        "label": "C",
        "text": "网络成本高"
      },
      {
        "label": "D",
        "text": "引入新架构，降低业务成本"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 134,
    "type": "多选",
    "q": "LTE两低设计目标的是",
    "options": [
      {
        "label": "A",
        "text": "低时延"
      },
      {
        "label": "B",
        "text": "低成本"
      },
      {
        "label": "C",
        "text": "低投诉"
      },
      {
        "label": "D",
        "text": "低拥塞"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 135,
    "type": "多选",
    "q": "LTE的高峰值速率为",
    "options": [
      {
        "label": "A",
        "text": "下行峰值100Mbps"
      },
      {
        "label": "B",
        "text": "上行峰值50Mbps"
      },
      {
        "label": "C",
        "text": "下行峰值150Mbps"
      },
      {
        "label": "D",
        "text": "上行峰值100Mbps"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 136,
    "type": "多选",
    "q": "调制的用途",
    "options": [
      {
        "label": "A",
        "text": "把需要传递的信息送到射频信道"
      },
      {
        "label": "B",
        "text": "提高空中接口数据业务能力"
      },
      {
        "label": "C",
        "text": "把需要传递的信息送到下行信道"
      },
      {
        "label": "D",
        "text": "把需要传递的信息送到上行信道"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 137,
    "type": "多选",
    "q": "ICIC（小区间干扰协调）技术的优点",
    "options": [
      {
        "label": "A",
        "text": "降低邻区干扰"
      },
      {
        "label": "B",
        "text": "提升小区边缘数据吞吐量"
      },
      {
        "label": "C",
        "text": "改善小区边缘用户体验"
      },
      {
        "label": "D",
        "text": "增加邻区干扰"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 138,
    "type": "多选",
    "q": "ICIC的实现方式",
    "options": [
      {
        "label": "A",
        "text": "静态ICIC"
      },
      {
        "label": "B",
        "text": "动态ICIC"
      },
      {
        "label": "C",
        "text": "自适应ICIC"
      },
      {
        "label": "D",
        "text": "非自适应ICIC"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 139,
    "type": "多选",
    "q": "LTE三高设计目标的是",
    "options": [
      {
        "label": "A",
        "text": "高峰值速率"
      },
      {
        "label": "B",
        "text": "高频谱效率"
      },
      {
        "label": "C",
        "text": "高移动性"
      },
      {
        "label": "D",
        "text": "高覆盖率"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 140,
    "type": "多选",
    "q": "FDD-LTE规模实验阶段，室内覆盖物业点应在室外连续覆盖区域选择重要室内场景建设室内分布系统，避免建设孤立的室分站点。主要覆盖以下四类物业点",
    "options": [
      {
        "label": "A",
        "text": "5A写字楼"
      },
      {
        "label": "B",
        "text": "政府办公室"
      },
      {
        "label": "C",
        "text": "营业厅（旗舰店）"
      },
      {
        "label": "D",
        "text": "大型会展中心"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 141,
    "type": "多选",
    "q": "TDD双工方式的工作特点使TDD具有哪些优势",
    "options": [
      {
        "label": "A",
        "text": "能够灵活配置频率，使用FDD系统不易使用的零散频段"
      },
      {
        "label": "B",
        "text": "可以通过调整上下行时隙转换点，提高下行时隙比例，能够很好的支持非对称业务"
      },
      {
        "label": "C",
        "text": "具有上下行信道一致性，基站的接收和发送可以共用部分射频单元，降低了设备成本"
      },
      {
        "label": "D",
        "text": "接收上下行数据时，不需要收发隔离器，只需要一个开关即可，降低了设备的复杂度"
      }
    ],
    "a": "ABCDE",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 142,
    "type": "多选",
    "q": "TDD双工方式相较于FDD，存在哪些明显的不足",
    "options": [
      {
        "label": "A",
        "text": "由于TDD方式的时间资源分别分给了上行和下行，因此TDD方式的发射时间大约只有FDD的一半，如果TDD要发送和FDD同样多的数据，就要增大TDD的发送功率"
      },
      {
        "label": "B",
        "text": "TDD系统上行受限，因此TDD基站的覆盖范围明显小于FDD基站"
      },
      {
        "label": "C",
        "text": "TDD系统收发信道同频，无法进行干扰隔离，系统内和系统间存在干扰"
      },
      {
        "label": "D",
        "text": "为了避免与其他无线系统之间的干扰，TDD需要预留较大的保护带，影响了整体频谱利用效率"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 143,
    "type": "多选",
    "q": "eNodeB包括以下哪些功能？（）",
    "options": [
      {
        "label": "A",
        "text": "无线资源管理相关的功能，包括无线承载控制接纳控制连接移动性管理上/下行动态资源分配/调度等"
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
    "id": 144,
    "type": "多选",
    "q": "以下关于UpPTS描述正确的有：（）",
    "options": [
      {
        "label": "A",
        "text": "UpPTS可以发送短RACH（做随机接入用）和SRS（Sounding参考信号）。"
      },
      {
        "label": "B",
        "text": "最多仅占两个OFDM符号。"
      },
      {
        "label": "C",
        "text": "UpPTS不能传输上行信令或数据。"
      },
      {
        "label": "D",
        "text": "承载Uppch，用来进行随机接入。"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 145,
    "type": "多选",
    "q": "关于PDCCH的说法正确的是（）",
    "options": [
      {
        "label": "A",
        "text": "频域：占用所有的子载波"
      },
      {
        "label": "B",
        "text": "时域：占用每个子帧的前n个OFDM符号，n<=3"
      },
      {
        "label": "C",
        "text": "PDCCH的信息映射到控制域中除了参考信号PCFICHPHICH之外的RE中，因此需先获得PCFICH和PHICH的位置之后才能确定其位置"
      },
      {
        "label": "D",
        "text": "用于发送上/下行资源调度信息功控命令等，通过下行控制信息块DCI承载，不同用户使用不同的DCI资源。"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 146,
    "type": "多选",
    "q": "目前，国内TD-LTE使用的频段有（）",
    "options": [
      {
        "label": "A",
        "text": "A.1880-1920MHz"
      },
      {
        "label": "B",
        "text": "B.2300-2400MHz"
      },
      {
        "label": "C",
        "text": "C.2570-2620MHz"
      },
      {
        "label": "D",
        "text": "D.2010-2025MHz"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 147,
    "type": "多选",
    "q": "MME的功能包括（）",
    "options": [
      {
        "label": "A",
        "text": "A.鉴权"
      },
      {
        "label": "B",
        "text": "B.寻呼管理"
      },
      {
        "label": "C",
        "text": "C.EPS承载控制"
      },
      {
        "label": "D",
        "text": "D.UEIP地址的分配"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 148,
    "type": "多选",
    "q": "LTE支持的调度方式包括：",
    "options": [
      {
        "label": "A",
        "text": "ProportionalFair"
      },
      {
        "label": "B",
        "text": "ProportionalDemand"
      },
      {
        "label": "C",
        "text": "MaxAggregateThroughput"
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
    "id": 149,
    "type": "多选",
    "q": "在工程中改善封闭场景SU-MIMO应用性能的措施包括:",
    "options": [
      {
        "label": "A",
        "text": "增加两路天线间距"
      },
      {
        "label": "B",
        "text": "增加天线组数"
      },
      {
        "label": "C",
        "text": "全向天线改定向天线"
      },
      {
        "label": "D",
        "text": "把两根单极化天线改为1根双极化天线"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 150,
    "type": "多选",
    "q": "TD-SCDMA与TD-LTE同频段共存共站址情况下,如何实现避免系统间的干扰:",
    "options": [
      {
        "label": "A",
        "text": "RxtoTx切换点对齐"
      },
      {
        "label": "B",
        "text": "TD-LTE的Specialsubframe配置,使得TD-SCDMA的GP落在TDD-LTE的GP时间段内"
      },
      {
        "label": "C",
        "text": "不需要设置,可以直接共存"
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
    "id": 151,
    "type": "多选",
    "q": "TD-SCDMA主要承载",
    "options": [
      {
        "label": "A",
        "text": "手机终端"
      },
      {
        "label": "B",
        "text": "中低速移动数据业务"
      },
      {
        "label": "C",
        "text": "语音业务"
      },
      {
        "label": "D",
        "text": "高速移动数据业务"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 152,
    "type": "多选",
    "q": "CRC计算中,校验比特的数目L可能的长度有:",
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
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 153,
    "type": "多选",
    "q": "对于上行受限可采用的解决办法",
    "options": [
      {
        "label": "A",
        "text": "增加基站"
      },
      {
        "label": "B",
        "text": "增加塔放"
      },
      {
        "label": "C",
        "text": "减小导频功率"
      },
      {
        "label": "D",
        "text": "增加天线数"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 154,
    "type": "多选",
    "q": "隔离方式有",
    "options": [
      {
        "label": "A",
        "text": "水平隔离"
      },
      {
        "label": "B",
        "text": "垂直隔离"
      },
      {
        "label": "C",
        "text": "倾斜隔离"
      },
      {
        "label": "D",
        "text": "空间隔离"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 155,
    "type": "多选",
    "q": "天线按照方向性可分为:",
    "options": [
      {
        "label": "A",
        "text": "全向天线"
      },
      {
        "label": "B",
        "text": "定向天线"
      },
      {
        "label": "C",
        "text": "线状天线"
      },
      {
        "label": "D",
        "text": "面状天线"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 156,
    "type": "多选",
    "q": "信息和沟通的基本功能属性",
    "options": [
      {
        "label": "A",
        "text": "移动"
      },
      {
        "label": "B",
        "text": "社交"
      },
      {
        "label": "C",
        "text": "本地"
      },
      {
        "label": "D",
        "text": "便捷"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 157,
    "type": "多选",
    "q": "关于R8962的描述正确的是:",
    "options": [
      {
        "label": "A",
        "text": "通过软升级支持多模,多频段"
      },
      {
        "label": "B",
        "text": "支持室外抱杆,壁挂,平台及塔顶安装"
      },
      {
        "label": "C",
        "text": "开放的CPRI光口,模块化设计"
      },
      {
        "label": "D",
        "text": "已支持2*2MIMO,通过并柜支持4*4MIMO"
      }
    ],
    "a": "BC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 158,
    "type": "多选",
    "q": "关于S1口传输,其说法正确的是:",
    "options": [
      {
        "label": "A",
        "text": "S1口传输协议在S1口层1中落实,层1为S1口传输提供物理层接口,帧划分,线性时钟提取能力,提取和生成层1的报警,以及传输质量控制等功能"
      },
      {
        "label": "B",
        "text": "S1口控制面采用协议来SCTP（StreamControlTransportProtocol,流控制传输协议）协议传输信令"
      },
      {
        "label": "C",
        "text": "层1在传输质量控制方面保证了SCTP和GTP-U链路的稳定"
      },
      {
        "label": "D",
        "text": "S1口用户面采用的是GTP-U协议（GPRSTunnelProtocol,GPRS隧道协议）传输用户数据"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 159,
    "type": "多选",
    "q": "关于SDR说法正确的是:",
    "options": [
      {
        "label": "A",
        "text": "SDR是软件定义无线电"
      },
      {
        "label": "B",
        "text": "SDR是多制式公用硬件"
      },
      {
        "label": "C",
        "text": "SDR的基带同时处理多无线制式信号"
      },
      {
        "label": "D",
        "text": "SDR消除模拟射频前端"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 160,
    "type": "多选",
    "q": "覆盖问题分类（RSRP占主导）",
    "options": [
      {
        "label": "A",
        "text": "弱覆盖(覆盖空洞）"
      },
      {
        "label": "B",
        "text": "越区覆盖"
      },
      {
        "label": "C",
        "text": "上下行不平衡"
      },
      {
        "label": "D",
        "text": "无主导小区"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 161,
    "type": "多选",
    "q": "机房除配备市电外还应配备以下哪些电源设备（）",
    "options": [
      {
        "label": "A",
        "text": "UPS"
      },
      {
        "label": "B",
        "text": "油机发电机"
      },
      {
        "label": "C",
        "text": "蓄电池"
      },
      {
        "label": "D",
        "text": "不需配备"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 162,
    "type": "多选",
    "q": "机房监控人员可以通过OMC将以下哪些eNB设备日志上传到本地（）",
    "options": [
      {
        "label": "A",
        "text": "eNB告警日志"
      },
      {
        "label": "B",
        "text": "eNB黑匣子文件"
      },
      {
        "label": "C",
        "text": "eNB异常日志"
      },
      {
        "label": "D",
        "text": "eNB事件日志"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 163,
    "type": "多选",
    "q": "机房监控人员可以在核心机房利用以下哪些工具对查询eNB的告警（）",
    "options": [
      {
        "label": "A",
        "text": "OMC"
      },
      {
        "label": "B",
        "text": "LMT"
      },
      {
        "label": "C",
        "text": "OSP"
      },
      {
        "label": "D",
        "text": "ATP"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 164,
    "type": "多选",
    "q": "机房内不应通过的有:",
    "options": [
      {
        "label": "A",
        "text": "给排水"
      },
      {
        "label": "B",
        "text": "煤气管道"
      },
      {
        "label": "C",
        "text": "消防管道"
      },
      {
        "label": "D",
        "text": "通风孔"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 165,
    "type": "多选",
    "q": "基于覆盖的频内切换可以用哪个事件判决：",
    "options": [
      {
        "label": "A",
        "text": "A1事件"
      },
      {
        "label": "B",
        "text": "A2事件"
      },
      {
        "label": "C",
        "text": "A3事件"
      },
      {
        "label": "D",
        "text": "A5事件"
      }
    ],
    "a": "CD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 166,
    "type": "多选",
    "q": "与业务无关RRC连接建立包括:",
    "options": [
      {
        "label": "A",
        "text": "紧急呼叫"
      },
      {
        "label": "B",
        "text": "系统间小区重选"
      },
      {
        "label": "C",
        "text": "注册"
      },
      {
        "label": "D",
        "text": "RRC重建"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 167,
    "type": "多选",
    "q": "语音和数据ARPU趋势",
    "options": [
      {
        "label": "A",
        "text": "语音ARPU不断下降"
      },
      {
        "label": "B",
        "text": "语音ARPU不断上升"
      },
      {
        "label": "C",
        "text": "数据ARPU逐年上升"
      },
      {
        "label": "D",
        "text": "数据ARPU逐年下降"
      }
    ],
    "a": "AC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 168,
    "type": "多选",
    "q": "在atoll中默认的LTE的业务模型包含哪些？",
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
        "text": "web browsing"
      },
      {
        "label": "D",
        "text": "video conferencing"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 169,
    "type": "多选",
    "q": "在EPG上的告警类型有（）",
    "options": [
      {
        "label": "A",
        "text": "Platform"
      },
      {
        "label": "B",
        "text": "Event"
      },
      {
        "label": "C",
        "text": "Application"
      },
      {
        "label": "D",
        "text": "Chassis"
      }
    ],
    "a": "AC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 170,
    "type": "多选",
    "q": "在E-UTRA中,RRC状态有:",
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
        "text": "CELL_PCH"
      },
      {
        "label": "D",
        "text": "CELL_BCH"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 171,
    "type": "多选",
    "q": "在L+T+G(+W)双路建设时应（）。",
    "options": [
      {
        "label": "A",
        "text": "优先选择G/L和T/L双频合路器分别进行GSM/LTE和TD/LTE合路。"
      },
      {
        "label": "B",
        "text": "GSM设备覆盖能力较强，一般先分路后再与LTE设备合路。"
      },
      {
        "label": "C",
        "text": "在原有G/T布线系统中引入LTE系统时，应将原有G/T合路器拆除。"
      },
      {
        "label": "D",
        "text": "WLAN应在最后端合路。"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 172,
    "type": "多选",
    "q": "在LMT系统中,可以对单板进行哪些操作:",
    "options": [
      {
        "label": "A",
        "text": "上下电"
      },
      {
        "label": "B",
        "text": "复位"
      },
      {
        "label": "C",
        "text": "告警同步"
      },
      {
        "label": "D",
        "text": "版本查询"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 173,
    "type": "多选",
    "q": "在LTE R8中，支持的天线模式有（）",
    "options": [
      {
        "label": "A",
        "text": "发射分级"
      },
      {
        "label": "B",
        "text": "开环MIMO"
      },
      {
        "label": "C",
        "text": "单流波束赋性"
      },
      {
        "label": "D",
        "text": "双流波束赋性"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 174,
    "type": "多选",
    "q": "在LTE系统中,传输信道包括上行传输信道和下行传输信道,其中下行传输信道包括:",
    "options": [
      {
        "label": "A",
        "text": "广播信道（BCH）"
      },
      {
        "label": "B",
        "text": "下行共享信道（DL-SCH）"
      },
      {
        "label": "C",
        "text": "寻呼信道（PCH）"
      },
      {
        "label": "D",
        "text": "多播信道（MCH）"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 175,
    "type": "多选",
    "q": "在LTE系统中设计跟踪区TA时，希望满足要求（）",
    "options": [
      {
        "label": "A",
        "text": "对于LTE的接入网和核心网保持相同的跟踪区域的概念"
      },
      {
        "label": "B",
        "text": "当UE处于空闲状态时，核心网能够知道UE所在的跟踪区"
      },
      {
        "label": "C",
        "text": "当处于空闲状态的UE需要被寻呼时，必须在UE所注册的跟踪区的所有小区进行寻呼"
      },
      {
        "label": "D",
        "text": "在LTE系统中应尽量减少因位置改变而引起的位置更新信令。"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 176,
    "type": "多选",
    "q": "在LTE中,MAC层的调度算法包括有:",
    "options": [
      {
        "label": "A",
        "text": "RR"
      },
      {
        "label": "B",
        "text": "MaxC/I"
      },
      {
        "label": "C",
        "text": "G-PF"
      },
      {
        "label": "D",
        "text": "T-PF"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 177,
    "type": "多选",
    "q": "在LTE中，功率控制包括：",
    "options": [
      {
        "label": "A",
        "text": "上行功率控制"
      },
      {
        "label": "B",
        "text": "上行功率分配"
      },
      {
        "label": "C",
        "text": "下行功率控制"
      },
      {
        "label": "D",
        "text": "下行功率分配"
      }
    ],
    "a": "AD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 178,
    "type": "多选",
    "q": "在LTE中,切换触发原因包括:",
    "options": [
      {
        "label": "A",
        "text": "网络覆盖触发"
      },
      {
        "label": "B",
        "text": "网络负荷触发"
      },
      {
        "label": "C",
        "text": "业务触发"
      },
      {
        "label": "D",
        "text": "速度触发"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 179,
    "type": "多选",
    "q": "UE的传输模式包括：",
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
    "id": 180,
    "type": "多选",
    "q": "UE可以执行的测量有哪些:",
    "options": [
      {
        "label": "A",
        "text": "同频测量"
      },
      {
        "label": "B",
        "text": "异频测量"
      },
      {
        "label": "C",
        "text": "与UTRA间的测量"
      },
      {
        "label": "D",
        "text": "与GERAN间的测量"
      }
    ],
    "a": "ABCDE",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 181,
    "type": "多选",
    "q": "UE在RRC_CONNECTED可以读取的系统消息块有（）",
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
        "text": "SIB8"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 182,
    "type": "多选",
    "q": "UE在空闲模式下的任务有哪些（）",
    "options": [
      {
        "label": "A",
        "text": "读系统消息"
      },
      {
        "label": "B",
        "text": "PLMN以及小区的选择和重选"
      },
      {
        "label": "C",
        "text": "监听寻呼"
      },
      {
        "label": "D",
        "text": "位置更新"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 183,
    "type": "多选",
    "q": "UMRLC实体的SN由RRC配置其长度为:",
    "options": [
      {
        "label": "A",
        "text": "1bit"
      },
      {
        "label": "B",
        "text": "5bit"
      },
      {
        "label": "C",
        "text": "10bit"
      },
      {
        "label": "D",
        "text": "15bit"
      }
    ],
    "a": "BC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 184,
    "type": "多选",
    "q": "UMRLC实体通过以下逻辑信道发送/接收RLCPDU:",
    "options": [
      {
        "label": "A",
        "text": "DL/ULDTCH"
      },
      {
        "label": "B",
        "text": "MCCH"
      },
      {
        "label": "C",
        "text": "MTCH"
      },
      {
        "label": "D",
        "text": "BCH"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 185,
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
    "id": 186,
    "type": "多选",
    "q": "UTPRc单板-TDL支持（）无线制式",
    "options": [
      {
        "label": "A",
        "text": "GSM"
      },
      {
        "label": "B",
        "text": "TD"
      },
      {
        "label": "C",
        "text": "LTE"
      },
      {
        "label": "D",
        "text": "CDMA2000"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 187,
    "type": "多选",
    "q": "vi编辑器的模式有:",
    "options": [
      {
        "label": "A",
        "text": "命令模式"
      },
      {
        "label": "B",
        "text": "底行命令模式"
      },
      {
        "label": "C",
        "text": "光标模式"
      },
      {
        "label": "D",
        "text": "输入模式"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 188,
    "type": "多选",
    "q": "WCDMA中，R6版本较R5版本，",
    "options": [
      {
        "label": "A",
        "text": "上行增加HSUPA功能"
      },
      {
        "label": "B",
        "text": "保留宏分集"
      },
      {
        "label": "C",
        "text": "下行增加HSDPA"
      },
      {
        "label": "D",
        "text": "不保留宏分集"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 189,
    "type": "多选",
    "q": "WLAN为CSMA/CA接入系统，TD-LTE为TDD系统，它们上下行时隙不同步，WLAN工作于2400～2483.5M，为不需要License的ISM频段，而根据目前频谱规划，TD-LTE可能工作于2300～2400M，它们之间存在干扰，主要为分以下哪几个方面：",
    "options": [
      {
        "label": "A",
        "text": "TD-LTE与WLAN系统基站间的干扰"
      },
      {
        "label": "B",
        "text": "TD-LTE基站和WLAN终端间的干扰"
      },
      {
        "label": "C",
        "text": "TD-LTE终端和WLAN基站间的干扰"
      },
      {
        "label": "D",
        "text": "TD-LTE终端和WLAN终端间的干扰"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 190,
    "type": "多选",
    "q": "X2AP基本移动过程包含:",
    "options": [
      {
        "label": "A",
        "text": "HandoverPreparation"
      },
      {
        "label": "B",
        "text": "SNStatusTransfer"
      },
      {
        "label": "C",
        "text": "UEContextRelease"
      },
      {
        "label": "D",
        "text": "HandoverCancel"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 191,
    "type": "多选",
    "q": "X2AP切换准备过程可能会出现哪几条消息:",
    "options": [
      {
        "label": "A",
        "text": "HANDOVERREQUEST"
      },
      {
        "label": "B",
        "text": "HANDOVERREQUESTACKNOWLEDGE"
      },
      {
        "label": "C",
        "text": "HANDOVERPREPARATIONFAILURE"
      },
      {
        "label": "D",
        "text": "RESOURCESTATUSREQUEST"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 192,
    "type": "多选",
    "q": "X2接口的主要功能有:",
    "options": [
      {
        "label": "A",
        "text": "小区间负载管理"
      },
      {
        "label": "B",
        "text": "UE在ECM-CONNECTED状态下LTE系统内的移动性支持,上下文从源eNB到目标eNB的转移"
      },
      {
        "label": "C",
        "text": "E-RAB业务管理功能"
      },
      {
        "label": "D",
        "text": "与3GPP系统间切换"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 193,
    "type": "多选",
    "q": "X2接口的主要功能有？(          )",
    "options": [
      {
        "label": "A",
        "text": "小区间负载管理"
      },
      {
        "label": "B",
        "text": "UE在ECM-CONNCETED状态下LTE系统内的移动性支持"
      },
      {
        "label": "C",
        "text": "E-RAB业务管理功能"
      },
      {
        "label": "D",
        "text": "与3GPP系统间切换"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 194,
    "type": "多选",
    "q": "X2接口支持的功能有:",
    "options": [
      {
        "label": "A",
        "text": "漫游和区域限制功能"
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
    "id": 195,
    "type": "多选",
    "q": "安装室内接地排需要满足哪些要求:",
    "options": [
      {
        "label": "A",
        "text": "室内接地排应安装在离基站机框较近的与走线架同高的墙上"
      },
      {
        "label": "B",
        "text": "室内接地排应水平地固定在墙上"
      },
      {
        "label": "C",
        "text": "在安装膨胀螺栓时,应使用绝缘片,确保接地排和墙绝缘"
      },
      {
        "label": "D",
        "text": "没有什么特别要求"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 196,
    "type": "多选",
    "q": "按资源占用时间来区分,LTE调度包括（）",
    "options": [
      {
        "label": "A",
        "text": "静态调度"
      },
      {
        "label": "B",
        "text": "半静态调度"
      },
      {
        "label": "C",
        "text": "动态调度"
      },
      {
        "label": "D",
        "text": "QoS调度"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 197,
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
    "id": 198,
    "type": "多选",
    "q": "闭环MIMO工作模式下，UE反馈的信息包括（）",
    "options": [
      {
        "label": "A",
        "text": "CQI"
      },
      {
        "label": "B",
        "text": "CSI"
      },
      {
        "label": "C",
        "text": "Preamble"
      },
      {
        "label": "D",
        "text": "PMI"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 199,
    "type": "多选",
    "q": "TDLTE小区设置pagingForceMCSmin=6，则寻呼消息可能使用以下（）MCS",
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
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 200,
    "type": "多选",
    "q": "TD-LTE小区系统内干扰可能来自那些区域（）",
    "options": [
      {
        "label": "A",
        "text": "存在模三干扰的相邻基站同频小区"
      },
      {
        "label": "B",
        "text": "不存在模三干扰的相邻基站同频小区"
      },
      {
        "label": "C",
        "text": "共站其他同频邻区"
      },
      {
        "label": "D",
        "text": "存在模三干扰的相邻基站异频小区"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 201,
    "type": "多选",
    "q": "TD-LTE新建双路场景的主要建设方式为（）。",
    "options": [
      {
        "label": "A",
        "text": "新建双通道RRU设备"
      },
      {
        "label": "B",
        "text": "新建双路天馈系统"
      },
      {
        "label": "C",
        "text": "末端每个天线点位使用2个单极化天线"
      },
      {
        "label": "D",
        "text": "末端每个天线点位使用1个双极化天线"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 202,
    "type": "多选",
    "q": "关于SGW功能，以下说法正确的有（）",
    "options": [
      {
        "label": "A",
        "text": "分配IP地址給UE"
      },
      {
        "label": "B",
        "text": "支持Enodeb handover功能"
      },
      {
        "label": "C",
        "text": "支持路由转发功能"
      },
      {
        "label": "D",
        "text": "当UE处于ECM-IDLE状态时，支持从网路侧发起的paging功能"
      }
    ],
    "a": "BCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 203,
    "type": "多选",
    "q": "关于SRS说法正确的是（）",
    "options": [
      {
        "label": "A",
        "text": "SRS是TD-LTE独有"
      },
      {
        "label": "B",
        "text": "SRS可以配置在UPPTS上"
      },
      {
        "label": "C",
        "text": "SRS 用于下行赋形权值估算"
      },
      {
        "label": "D",
        "text": "SRS 用于上行CHANNEL AWARE调度"
      }
    ],
    "a": "BCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 204,
    "type": "多选",
    "q": "关于UBPM单板,下列说法正确的是:",
    "options": [
      {
        "label": "A",
        "text": "一块UBPM板可支持1个8天线20MHz小区"
      },
      {
        "label": "B",
        "text": "一块UBPM板可支持3个8天线20MHz小区"
      },
      {
        "label": "C",
        "text": "一块UBPM板可支持3个2天线20MHz小区"
      },
      {
        "label": "D",
        "text": "一块UBPM板可支持2个8天线10MHz小区"
      }
    ],
    "a": "ACD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 205,
    "type": "多选",
    "q": "关于UBPM单板的TX/RX接口,下列说法正确的是:",
    "options": [
      {
        "label": "A",
        "text": "一块UBPM板有三个TX/RX接口"
      },
      {
        "label": "B",
        "text": "UBPM单板TX/RX接口速率为2.4576G/4.9152G"
      },
      {
        "label": "C",
        "text": "UBPM单板TX/RX接口用于连接RRU"
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
    "id": 206,
    "type": "多选",
    "q": "关于UE的接入等级说法正确的是:",
    "options": [
      {
        "label": "A",
        "text": "接入等级数值的大小表示接入优先级的高低"
      },
      {
        "label": "B",
        "text": "接入等级为11和15的用户,其接入权力仅适用于归属的PLMN和等效的PLMN"
      },
      {
        "label": "C",
        "text": "接入等级为12,13,14的用户,其接入权力适用于归属PLMN所属的国家区域内"
      },
      {
        "label": "D",
        "text": "接入等级为0～9的用户,其接入权力同时适用于归属的PLMN和拜访的PLMN"
      }
    ],
    "a": "BCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 207,
    "type": "多选",
    "q": "关于LTE下行MIMO，以下说法正确的是（）",
    "options": [
      {
        "label": "A",
        "text": "只支持发送分集"
      },
      {
        "label": "B",
        "text": "支持发送分集和空间复用。"
      },
      {
        "label": "C",
        "text": "不支持单天线发送"
      },
      {
        "label": "D",
        "text": "支持单天线发送"
      }
    ],
    "a": "BD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 208,
    "type": "多选",
    "q": "关于LTE下行导频，以下说法正确的是（）",
    "options": [
      {
        "label": "A",
        "text": "LTE下行只有CRS"
      },
      {
        "label": "B",
        "text": "LTE下行只有UE-specific reference signal"
      },
      {
        "label": "C",
        "text": "LTE下行既可以有UE-specific reference signal，有可以有Cell-specific Reference Signal"
      },
      {
        "label": "D",
        "text": "LTE 下行支持MBSFN专用导频"
      }
    ],
    "a": "CD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 209,
    "type": "多选",
    "q": "关于ZTE网元管理系统的部署策略描述正确的是:",
    "options": [
      {
        "label": "A",
        "text": "EMS和OMM共同组成中兴RAN网元管理系统"
      },
      {
        "label": "B",
        "text": "EMS和OMM必须同时部署"
      },
      {
        "label": "C",
        "text": "上级EMS侧重于全网管理"
      },
      {
        "label": "D",
        "text": "下级OMM则侧重实现向上级提供必要的数据"
      }
    ],
    "a": "ACD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 210,
    "type": "多选",
    "q": "关于解调参考信号，下面说法正确的是：",
    "options": [
      {
        "label": "A",
        "text": "与PUSCH有关"
      },
      {
        "label": "B",
        "text": "与PUSCH无关"
      },
      {
        "label": "C",
        "text": "与PUCCH有关"
      },
      {
        "label": "D",
        "text": "与PUCCH无关"
      }
    ],
    "a": "AC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 211,
    "type": "多选",
    "q": "关于开机时EPS承载,哪些描述是正确的（）",
    "options": [
      {
        "label": "A",
        "text": "PDN 连接和默认承载都建立"
      },
      {
        "label": "B",
        "text": "连接在空闲时段里也保留"
      },
      {
        "label": "C",
        "text": "连接会一直保留到关机"
      },
      {
        "label": "D",
        "text": "APN & IP  级别取决于注册数据(HSS)"
      }
    ],
    "a": "ACD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 212,
    "type": "多选",
    "q": "关于空闲态小区重选对现有2/3G网络及用户体验的影响，下面说法错误的是",
    "options": [
      {
        "label": "A",
        "text": "需软件升级LTE覆盖区内所有2/3G现网无线设备，小区广播中支持LTE邻区重选优先级等新参数的配置"
      },
      {
        "label": "B",
        "text": "需软件升级LTE覆盖区内所有SGSN以识别LTE多模终端并将其路由至LTE网络"
      },
      {
        "label": "C",
        "text": "执行重选时对用户拨打电话没有影响"
      },
      {
        "label": "D",
        "text": "频繁重选导致终端耗电增加,待机时间缩短"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 213,
    "type": "多选",
    "q": "关于链型组网和星型组网说法正确的是：",
    "options": [
      {
        "label": "A",
        "text": "星型组网方式的可靠性较高，也比较节约传输资源"
      },
      {
        "label": "B",
        "text": "星型组网适合密集城区组网"
      },
      {
        "label": "C",
        "text": "链型组网可靠性不如星形组网，但是比较节约传输资源"
      },
      {
        "label": "D",
        "text": "链型组网适合在用户密度较小的地区实施"
      }
    ],
    "a": "BCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 214,
    "type": "多选",
    "q": "关于切换几个阶段，正确的是",
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
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 215,
    "type": "多选",
    "q": "关于上下行的丢包率,下面说法正确的是:",
    "options": [
      {
        "label": "A",
        "text": "丢包率的只是一个参考值,其大小不影响用户的上下行流量"
      },
      {
        "label": "B",
        "text": "丢包越少越好,一个独立的丢包率测量结果的准确性取决于在测量的时间内有多少个包已被接收"
      },
      {
        "label": "C",
        "text": "丢包率测量的目的是为测量拥塞和流量管制等原因导致的丢包情况"
      },
      {
        "label": "D",
        "text": "由于UU口以及层2的各个子层均可能出现丢包,因此需要计算平均值来表征丢包率"
      }
    ],
    "a": "BC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 216,
    "type": "多选",
    "q": "关于同步信号,以下说法正确的是",
    "options": [
      {
        "label": "A",
        "text": "SSS携带PCI组中的PCI号0-2"
      },
      {
        "label": "B",
        "text": "PSS携带PCI组中的PCI号0-2"
      },
      {
        "label": "C",
        "text": "SSS携带PCI组号0-167"
      },
      {
        "label": "D",
        "text": "PSS携带PCI组号0-167"
      }
    ],
    "a": "BC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 217,
    "type": "多选",
    "q": "关于物理信道的编码方案,下列说法正确的是:",
    "options": [
      {
        "label": "A",
        "text": "LTE中传输块的信道编码方案为Turbo编码,编码速率为R=1/3,它由两个8状态子编码器和一个Turbo码内部交织器构成"
      },
      {
        "label": "B",
        "text": "在Turbo编码中使用栅格终止（TrellisTermination）方案"
      },
      {
        "label": "C",
        "text": "在Turbo编码之前,传输块被分割成多个段,每段的大小要与最大信息块大小6144bit保持一致"
      },
      {
        "label": "D",
        "text": "使用24bit长的循环冗余校验（CyclicRedundancyCheck,CRC）来支持错误检测"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 218,
    "type": "多选",
    "q": "家庭基站Home eNodeB（Femtocell）的安全包括以下几方面（）",
    "options": [
      {
        "label": "A",
        "text": "Home eNodeB和UE的接入层面安全"
      },
      {
        "label": "B",
        "text": "网络层面安全"
      },
      {
        "label": "C",
        "text": "业务层面安全"
      },
      {
        "label": "D",
        "text": "UE接入控制层面安全"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 219,
    "type": "多选",
    "q": "接入小区，UE必须完成的几个动作",
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
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 220,
    "type": "多选",
    "q": "勘察人员获取相关的勘察资源后,按照勘察计划和勘察路线实施无线网络勘察,勘察过程中需要按照要求详细记录和确认哪些数据:",
    "options": [
      {
        "label": "A",
        "text": "话务数据"
      },
      {
        "label": "B",
        "text": "工程数据"
      },
      {
        "label": "C",
        "text": "无线传播环境数据"
      },
      {
        "label": "D",
        "text": "现场人员信息"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 221,
    "type": "多选",
    "q": "考量LTE系统内切换的KPI指标有? (          )",
    "options": [
      {
        "label": "A",
        "text": "ENB内切换成功率"
      },
      {
        "label": "B",
        "text": "X2口切换成功率"
      },
      {
        "label": "C",
        "text": "S1口切换成功率"
      },
      {
        "label": "D",
        "text": "异RAT切换成功率"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 222,
    "type": "多选",
    "q": "可采用的LTE话音方案包括哪些（）",
    "options": [
      {
        "label": "A",
        "text": "VoLTE"
      },
      {
        "label": "B",
        "text": "CSFB"
      },
      {
        "label": "C",
        "text": "SRVCC"
      },
      {
        "label": "D",
        "text": "双待机"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 223,
    "type": "多选",
    "q": "可能采用的系统间干扰解决方法有（）",
    "options": [
      {
        "label": "A",
        "text": "加装滤波器"
      },
      {
        "label": "B",
        "text": "调整定向天线的方向及位置"
      },
      {
        "label": "C",
        "text": "共天馈时减小天馈三阶互调产物"
      },
      {
        "label": "D",
        "text": "降低干扰源功率"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 224,
    "type": "多选",
    "q": "可以用来解决某路段弱覆盖问题的方法（）",
    "options": [
      {
        "label": "A",
        "text": "降低非主覆盖小区的信号强度，提升主覆盖小区信号SINR."
      },
      {
        "label": "B",
        "text": "调整主覆盖小区的天线倾角及方位角"
      },
      {
        "label": "C",
        "text": "如果主覆盖小区功率未到额定最大值, 适当提高主覆盖小区的功率"
      },
      {
        "label": "D",
        "text": "调整主覆盖小区的sector beam的权值，使得能量更集中"
      }
    ],
    "a": "BCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 225,
    "type": "多选",
    "q": "空分复用的优点",
    "options": [
      {
        "label": "A",
        "text": "不改变现有的分布式天线结构，仅在信号源接入方式发生变化"
      },
      {
        "label": "B",
        "text": "施工方便"
      },
      {
        "label": "C",
        "text": "系统容量可以提升"
      },
      {
        "label": "D",
        "text": "用户峰值速率可以得到提升"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 226,
    "type": "多选",
    "q": "空闲模式的验证工作主要包括",
    "options": [
      {
        "label": "A",
        "text": "频率检查"
      },
      {
        "label": "B",
        "text": "PCI检查"
      },
      {
        "label": "C",
        "text": "TAC检查"
      },
      {
        "label": "D",
        "text": "站点附近的RSRP检查与覆盖DT测试"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 227,
    "type": "多选",
    "q": "空闲模式下小区驻留的目的包括:",
    "options": [
      {
        "label": "A",
        "text": "使UE可以接收PLMN广播的系统信息"
      },
      {
        "label": "B",
        "text": "登记成功后若UE希望建立RRC连接,它能够在驻留小区上的控制信道上通过初始接入网来发起连接"
      },
      {
        "label": "C",
        "text": "接收寻呼消息"
      },
      {
        "label": "D",
        "text": "接收ETWS和CMAS通知"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 228,
    "type": "多选",
    "q": "根据不同的信道条件，下列关于4类室外场景测试点（50%加扰）描述正确的是（）",
    "options": [
      {
        "label": "A",
        "text": "极好点：SINR>22dB"
      },
      {
        "label": "B",
        "text": "好点： SINR>15~20dB"
      },
      {
        "label": "C",
        "text": "中点： SINR>5~10dB"
      },
      {
        "label": "D",
        "text": "差点： SINR>0~3dB"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 229,
    "type": "多选",
    "q": "关于LTE的小区间干扰抑制技术,说法正确的是:",
    "options": [
      {
        "label": "A",
        "text": "HII是上行ICIC的一种指示"
      },
      {
        "label": "B",
        "text": "OI是下行ICIC的一种指示"
      },
      {
        "label": "C",
        "text": "RNTP是下行ICIC的一种指示"
      },
      {
        "label": "D",
        "text": "RNTP是上行ICIC的一种指示"
      }
    ],
    "a": "AC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 230,
    "type": "多选",
    "q": "关于LTE的需求,哪些说法是正确的:",
    "options": [
      {
        "label": "A",
        "text": "下行峰值数据速率100Mbps（20MHz,2天线接收）"
      },
      {
        "label": "B",
        "text": "U-plane时延为5ms"
      },
      {
        "label": "C",
        "text": "不支持离散的频谱分配"
      },
      {
        "label": "D",
        "text": "支持不同大小的频段分配"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 231,
    "type": "多选",
    "q": "关于LTE网络整体结构，哪些说法是正确的",
    "options": [
      {
        "label": "A",
        "text": "E-UTRAN用E-NodeB替代原有的RNC-NodeB结构"
      },
      {
        "label": "B",
        "text": "各网络节点之间的接口使用IP传输"
      },
      {
        "label": "C",
        "text": "通过IMS承载综合业务"
      },
      {
        "label": "D",
        "text": "E-NodeB间的接口为S1接口"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 232,
    "type": "多选",
    "q": "与SRVCC相比，CSFB的优势在于（）",
    "options": [
      {
        "label": "A",
        "text": "无需部署IMS，新增网元少， 网络部署快"
      },
      {
        "label": "B",
        "text": "由现网提供CS业务，用户业务感受一致"
      },
      {
        "label": "C",
        "text": "跨运营商接口少，易于实现跨网漫游"
      },
      {
        "label": "D",
        "text": "语音和LTE数据业务能够并行"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 233,
    "type": "多选",
    "q": "与UTRAN系统比较,在承载级Qos参数中,新增加的为以下那几个:",
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
        "text": "GBR&MBR"
      },
      {
        "label": "D",
        "text": "AMBR"
      }
    ],
    "a": "AD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 234,
    "type": "多选",
    "q": "LTE中CP的作用是（）",
    "options": [
      {
        "label": "A",
        "text": "避免符号间干扰"
      },
      {
        "label": "B",
        "text": "维持正交性"
      },
      {
        "label": "C",
        "text": "避免载波间干扰"
      },
      {
        "label": "D",
        "text": "决定小区的覆盖范围"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 235,
    "type": "多选",
    "q": "用户面时延包括:",
    "options": [
      {
        "label": "A",
        "text": "X2口时延"
      },
      {
        "label": "B",
        "text": "空口时延"
      },
      {
        "label": "C",
        "text": "EPC时延"
      },
      {
        "label": "D",
        "text": "E2E时延"
      }
    ],
    "a": "BCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 236,
    "type": "多选",
    "q": "用于室外的是",
    "options": [
      {
        "label": "A",
        "text": "F频段"
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
        "text": "A频段"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 237,
    "type": "多选",
    "q": "在一个MME与一个eNB间的SCTP连接建立的过程中,以下说法正确的是:",
    "options": [
      {
        "label": "A",
        "text": "一个单独的流标志符对应当被保留,唯一地用于S1AP基本程序——发送非UE相关信号"
      },
      {
        "label": "B",
        "text": "至少一对流标识符应当被保留,唯一地用于S1AP基本程序——发送UE相关信号的,一般会保留几对"
      },
      {
        "label": "C",
        "text": "SCTP连接建立请求由MME发起"
      },
      {
        "label": "D",
        "text": "发送一个单独的UE相关信号需要一个SCTP流,并且在UE信号连接的过程中,流不允许更改"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 238,
    "type": "多选",
    "q": "在资源分配类型1中,资源块分配信息由哪几个字段组成:",
    "options": [
      {
        "label": "A",
        "text": "指示在P个RBG子集里选择的RBG子集的字段"
      },
      {
        "label": "B",
        "text": "指示在一个子集中资源分配改变的字段"
      },
      {
        "label": "C",
        "text": "下行功率补偿字段"
      },
      {
        "label": "D",
        "text": "包含一比特映射的字段,且比特映射的每一位都指示了被选择的资源块组子集中一个虚拟资源块"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 239,
    "type": "多选",
    "q": "站点选择需要考虑下列（）区域",
    "options": [
      {
        "label": "A",
        "text": "覆盖重点区域"
      },
      {
        "label": "B",
        "text": "预计业务量较大"
      },
      {
        "label": "C",
        "text": "覆盖区域较大"
      },
      {
        "label": "D",
        "text": "运营商要求选择"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 240,
    "type": "多选",
    "q": "针对现网TD BBU支持平滑升级到TD-LTE的情况，可采用TD BBU软件升级后增加板卡的方式建设TD-LTE BBU。选择该方式建设时，必须确保（）。",
    "options": [
      {
        "label": "A",
        "text": "槽位足够"
      },
      {
        "label": "B",
        "text": "光模块满足TD-LTE需求"
      },
      {
        "label": "C",
        "text": "光纤资源满足TD-LTE需求"
      },
      {
        "label": "D",
        "text": "电源能力满足TD-LTE需求"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 241,
    "type": "多选",
    "q": "支持宏分集的网络架构（三层构架）",
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
        "text": "基站Node B"
      },
      {
        "label": "D",
        "text": "核心网+基站"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 242,
    "type": "多选",
    "q": "关闭Oracle数据库的命令包括:",
    "options": [
      {
        "label": "A",
        "text": "Shutdown"
      },
      {
        "label": "B",
        "text": "Shutdown immediate"
      },
      {
        "label": "C",
        "text": "Shutdown abort"
      },
      {
        "label": "D",
        "text": "Shutdownmount"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 243,
    "type": "多选",
    "q": "下行资源分配类型有哪些:",
    "options": [
      {
        "label": "A",
        "text": "RBG"
      },
      {
        "label": "B",
        "text": "RBGSubset"
      },
      {
        "label": "C",
        "text": "LVRB"
      },
      {
        "label": "D",
        "text": "DVRB"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 244,
    "type": "多选",
    "q": "下行子帧中，控制区域可以占几个个符号（）",
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
    "id": 245,
    "type": "多选",
    "q": "下列传输信道中,使用编码速率为1/3的Turbocoding进行信道编码的有:",
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
    "id": 246,
    "type": "多选",
    "q": "下列关于LTEOMC中互斥管理策略的描述中正确的有:",
    "options": [
      {
        "label": "A",
        "text": "互斥权限管理的粒度为配置集"
      },
      {
        "label": "B",
        "text": "所有用户都必须先申请互斥权限,才能进行操作"
      },
      {
        "label": "C",
        "text": "用户申请并获得互斥权限后,闲置时间超过设定的时间后,系统会自动释放其权限"
      },
      {
        "label": "D",
        "text": "用户申请并获得互斥权限后,只有超级管理员用户可以强制释放其权限"
      }
    ],
    "a": "BCE",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 247,
    "type": "多选",
    "q": "TDL基站站址设计一般应满足下列要求（）",
    "options": [
      {
        "label": "A",
        "text": "在不影响网络结构的情况下，尽量选择现有的站 址，以利用其机 房电源铁塔等设施"
      },
      {
        "label": "B",
        "text": "将天线的主瓣方向指向高话务密度区，可以加强该地区的信号强度，从而提高通话质量"
      },
      {
        "label": "C",
        "text": "郊区的海拔很高的山峰一般考虑作为站址"
      },
      {
        "label": "D",
        "text": "针对公路及山区覆盖的选址时，要充分利用地形特点，如公路拐弯处等开阔的地方"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 248,
    "type": "多选",
    "q": "关于扎带的使用方法说法正确的是:",
    "options": [
      {
        "label": "A",
        "text": "室内施工对线缆绑扎时黑,白扎带都可以同时使用,只要绑扎整齐就可以"
      },
      {
        "label": "B",
        "text": "室内施工时一般使用白扎带对线缆绑扎,严禁黑色,白色扎带同时混合使用"
      },
      {
        "label": "C",
        "text": "室外施工时可以使用黑色或白色扎带进行绑扎"
      },
      {
        "label": "D",
        "text": "室外施工时一般必须用黑色扎带绑扎或者使用电话皮线绑扎"
      }
    ],
    "a": "BD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 249,
    "type": "多选",
    "q": "室内单站验证测试中定点测试包括（）",
    "options": [
      {
        "label": "A",
        "text": "室内外切换测试"
      },
      {
        "label": "B",
        "text": "上行吞吐量测试"
      },
      {
        "label": "C",
        "text": "下行吞吐量测试"
      },
      {
        "label": "D",
        "text": "PING时延测试"
      }
    ],
    "a": "BCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 250,
    "type": "多选",
    "q": "OMC系统中站点参数的配置有以下哪种方式:",
    "options": [
      {
        "label": "A",
        "text": "手动配置"
      },
      {
        "label": "B",
        "text": "自动配置"
      },
      {
        "label": "C",
        "text": "模版导入配置"
      },
      {
        "label": "D",
        "text": "从前台反构"
      }
    ],
    "a": "AD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 251,
    "type": "多选",
    "q": "OMC支持按以下哪些条件查询系统操作日志（）",
    "options": [
      {
        "label": "A",
        "text": "日志记录起止时间"
      },
      {
        "label": "B",
        "text": "操作用户"
      },
      {
        "label": "C",
        "text": "操作名称"
      },
      {
        "label": "D",
        "text": "操作的网元对象"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 252,
    "type": "多选",
    "q": "OMM服务器控制台有哪几个进程:",
    "options": [
      {
        "label": "A",
        "text": "集群控制进程"
      },
      {
        "label": "B",
        "text": "NetNumen网络管理进程"
      },
      {
        "label": "C",
        "text": "CORBA通知服务进程"
      },
      {
        "label": "D",
        "text": "FTP进程"
      }
    ],
    "a": "BCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 253,
    "type": "多选",
    "q": "PBCH传送的系统广播信息包括",
    "options": [
      {
        "label": "A",
        "text": "下行系统带宽"
      },
      {
        "label": "B",
        "text": "SFN子帧号"
      },
      {
        "label": "C",
        "text": "PHICH指示信息"
      },
      {
        "label": "D",
        "text": "天线配置信息"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 254,
    "type": "多选",
    "q": "关于小区搜索，以下描述错误的是",
    "options": [
      {
        "label": "A",
        "text": "小区搜索过程是UE和小区取得时间和频率同步，并检测小区ID的过程。"
      },
      {
        "label": "B",
        "text": "检测PSCH用于获得5ms时钟，并获得小区ID组内的具体小区ID"
      },
      {
        "label": "C",
        "text": "检测SSCH用于获得无线帧时钟小区ID组BCH天线配置"
      },
      {
        "label": "D",
        "text": "读取PCH用于获得其它小区信息"
      }
    ],
    "a": "C",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 255,
    "type": "多选",
    "q": "OMC通过O接口可管理以下哪些网元（）",
    "options": [
      {
        "label": "A",
        "text": "eNode B"
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
        "text": "MGW"
      }
    ],
    "a": "AC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 256,
    "type": "多选",
    "q": "适用于TD-LTE网络的业务应用有哪些（）",
    "options": [
      {
        "label": "A",
        "text": "高清流媒体"
      },
      {
        "label": "B",
        "text": "高清视频监控"
      },
      {
        "label": "C",
        "text": "高清视频会议"
      },
      {
        "label": "D",
        "text": "高速数据下载"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 257,
    "type": "多选",
    "q": "分组数据压缩协议支持以下功能:",
    "options": [
      {
        "label": "A",
        "text": "通过ROHC协议对IP数据包进行压缩和解压缩"
      },
      {
        "label": "B",
        "text": "数据传递"
      },
      {
        "label": "C",
        "text": "记录映射在RLCAM模式的RB数据的SN"
      },
      {
        "label": "D",
        "text": "对上层数据的重建和有序传输"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 258,
    "type": "多选",
    "q": "下列关于TD-LTE E频段室分系统说法正确的是（）",
    "options": [
      {
        "label": "A",
        "text": "单极化MIMO天线间距应该大于4 倍波长"
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
        "text": "MIMO两路馈线损耗不平衡对系统性能影响很小"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 259,
    "type": "多选",
    "q": "下列几种情况中，作为降低干扰的一般手段，有（）",
    "options": [
      {
        "label": "A",
        "text": "改善频率配置"
      },
      {
        "label": "B",
        "text": "使用定向天线及定向天线下倾"
      },
      {
        "label": "C",
        "text": "降低天线高度"
      },
      {
        "label": "D",
        "text": "增大基站发射功率"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 260,
    "type": "多选",
    "q": "下列哪些城市参加了中国移动TD-LTE扩大规模实验网项目（）",
    "options": [
      {
        "label": "A",
        "text": "厦门"
      },
      {
        "label": "B",
        "text": "北京"
      },
      {
        "label": "C",
        "text": "上海"
      },
      {
        "label": "D",
        "text": "南京"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 261,
    "type": "多选",
    "q": "下列哪些过程属于X2AP全局过程:",
    "options": [
      {
        "label": "A",
        "text": "LoadIndication"
      },
      {
        "label": "B",
        "text": "ErrorIndication"
      },
      {
        "label": "C",
        "text": "X2Setup"
      },
      {
        "label": "D",
        "text": "eNBConfigurationUpdate"
      }
    ],
    "a": "ABCDEF",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 262,
    "type": "多选",
    "q": "下列哪些命令可以重启Linux系统:",
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
    "a": "BCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 263,
    "type": "多选",
    "q": "制作网线的工具有:",
    "options": [
      {
        "label": "A",
        "text": "网线钳"
      },
      {
        "label": "B",
        "text": "液压钳"
      },
      {
        "label": "C",
        "text": "网线测试仪"
      },
      {
        "label": "D",
        "text": "剪刀"
      }
    ],
    "a": "ACD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 264,
    "type": "多选",
    "q": "中国移动2013年4G网络工程无线建设无线基站建设方式主要包括（）",
    "options": [
      {
        "label": "A",
        "text": "F频段新建"
      },
      {
        "label": "B",
        "text": "F升级"
      },
      {
        "label": "C",
        "text": "D频段新建"
      },
      {
        "label": "D",
        "text": "E频段新建"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 265,
    "type": "多选",
    "q": "终端的功率空间取决于哪些参数（）",
    "options": [
      {
        "label": "A",
        "text": "终端最大发射功率"
      },
      {
        "label": "B",
        "text": "当前实际发射功率"
      },
      {
        "label": "C",
        "text": "路径损耗"
      },
      {
        "label": "D",
        "text": "天线增益"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 266,
    "type": "多选",
    "q": "重选到比服务小区优先级低的E-UTRAN频点或异系统频点小区的条件是:",
    "options": [
      {
        "label": "A",
        "text": "比服务频点优先级高的E-UTRAN频点或异系统频点的小区都不满足重选准则"
      },
      {
        "label": "B",
        "text": "服务频点或等优先级的E-UTRAN频点的小区都不满足重选准则"
      },
      {
        "label": "C",
        "text": "在时间间隔TreselectionRAT内,SServingCell<Threshserving,low（服务载频低门限）且低优先级E-UTRAN频点或异系统频点上有小区的SnonServingCell,x>Threshx,low"
      },
      {
        "label": "D",
        "text": "UE在当前服务小区驻留的时间超过1s"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 267,
    "type": "多选",
    "q": "资源分配信息给调度的UE指示了一系列连续虚拟分配资源块。调度的资源分配消息由哪几个字段组成:",
    "options": [
      {
        "label": "A",
        "text": "与起始资源块相应的资源指示值RIV"
      },
      {
        "label": "B",
        "text": "下行功率补偿字段"
      },
      {
        "label": "C",
        "text": "指示在P个RBG子集里选择的RBG子集的字段"
      },
      {
        "label": "D",
        "text": "连续分配的资源块长度"
      }
    ],
    "a": "AD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 268,
    "type": "多选",
    "q": "子载波间隔的考虑因素",
    "options": [
      {
        "label": "A",
        "text": "频谱效率"
      },
      {
        "label": "B",
        "text": "抗频偏能力"
      },
      {
        "label": "C",
        "text": "频谱带宽"
      },
      {
        "label": "D",
        "text": "信号质量"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 269,
    "type": "多选",
    "q": "子载波间隔越小",
    "options": [
      {
        "label": "A",
        "text": "调度精度越高"
      },
      {
        "label": "B",
        "text": "系统频谱效率越高"
      },
      {
        "label": "C",
        "text": "调度精度越低"
      },
      {
        "label": "D",
        "text": "系统频谱效率越低"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 270,
    "type": "多选",
    "q": "自适应ICIC的优势（）",
    "options": [
      {
        "label": "A",
        "text": "每个小区固定1/3系统带宽"
      },
      {
        "label": "B",
        "text": "自动配置边缘频带"
      },
      {
        "label": "C",
        "text": "实用性强"
      },
      {
        "label": "D",
        "text": "不需要人工配置"
      }
    ],
    "a": "BCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 271,
    "type": "多选",
    "q": "关于多天线技术,以上说法正确的是:",
    "options": [
      {
        "label": "A",
        "text": "SFBC适用于两天线端口情况,SFBC+FSTD适用于四天线端口情况"
      },
      {
        "label": "B",
        "text": "空间复用利用空间信道中的多个并行子信道;信号被分为不同的流并在不同的天线发射;空间复用在带宽受限系统中有效提高信道容量;适用于高SNR情况,例如小区中心等;"
      },
      {
        "label": "C",
        "text": "发射分集适用于没有足够的多天线下行信道信息情况,例如高速移动环境"
      },
      {
        "label": "D",
        "text": "波束赋形形成指向目标接收机的波束;提升小区边缘下行吞吐率;提高波束指向上的功率,并抑制其他位置上的干扰;适用于低速情况;"
      }
    ],
    "a": "ABCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 272,
    "type": "多选",
    "q": "关于服务器的供电,下列说法正确的是:",
    "options": [
      {
        "label": "A",
        "text": "服务器机柜与两路不同的交流电源连接"
      },
      {
        "label": "B",
        "text": "服务器机柜的双电源模块设备（如服务器,磁盘阵列）的每一个电源模块分别插在2个不同的电源插座上,这2个电源插座必须与2路不同的交流电源连接"
      },
      {
        "label": "C",
        "text": "服务器机柜的双电源模块设备（如服务器,磁盘阵列）的每一个电源模块分别插在2个不同的电源插座上,这2个电源插座只能与一个交流电源连接"
      },
      {
        "label": "D",
        "text": "服务器机柜的交流电源连接线不允许有转接"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 273,
    "type": "多选",
    "q": "关于建立承载，下面哪些说法是正确的（）",
    "options": [
      {
        "label": "A",
        "text": "对于每个PDN，UE 有唯一的IP 地与其关联"
      },
      {
        "label": "B",
        "text": "UE可以连接到多个PDN,到每个PDN至少有一个默认承载，可能还有专用承载"
      },
      {
        "label": "C",
        "text": "由UE创建的到相同PDN 的额外的EPS承载被称为专用承载，专用承载一定是GBR承载"
      },
      {
        "label": "D",
        "text": "默认和关联的专用承载以不同的保证QoS 提供到同一个PDN 的连接。一个主默认承载可能有多个分配的专用承载。"
      }
    ],
    "a": "ABD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 274,
    "type": "多选",
    "q": "LTE下行控制信道中覆盖不受限的是:",
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
    "a": "ACD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 275,
    "type": "多选",
    "q": "LTE下行调度器可以处理的资源有（）",
    "options": [
      {
        "label": "A",
        "text": "物理资源块"
      },
      {
        "label": "B",
        "text": "下行功率"
      },
      {
        "label": "C",
        "text": "PDCCH资源"
      },
      {
        "label": "D",
        "text": "信号发射的秩"
      }
    ],
    "a": "ACD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 276,
    "type": "多选",
    "q": "LTE下行物理信道主要有（  ）几种模式。",
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
    "id": 277,
    "type": "多选",
    "q": "LTE协议规范中,层二包括以下几个子层:",
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
    "a": "BCD",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 278,
    "type": "多选",
    "q": "LTE信道带宽可以配置为",
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
    "a": "ABCDEF",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 279,
    "type": "多选",
    "q": "LTE信道的分类",
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
        "text": "控制信道"
      }
    ],
    "a": "ABC",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 280,
    "type": "多选",
    "q": "LTE语音解决方案有（）",
    "options": [
      {
        "label": "A",
        "text": "SRVCC"
      },
      {
        "label": "B",
        "text": "CSFB"
      },
      {
        "label": "C",
        "text": "VOIP"
      },
      {
        "label": "D",
        "text": "DR-VCC"
      }
    ],
    "a": "AB",
    "isStore": "false",
    "isAnswer": 0
  },
  {
    "id": 281,
    "type": "多选",
    "q": "LTE支持的调度方式包括：",
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
    "id": 282,
    "type": "多选",
    "q": "LTE支持以下哪几种池（）",
    "options": [
      {
        "label": "A",
        "text": "SGSN池"
      },
      {
        "label": "B",
        "text": "MME池"
      },
      {
        "label": "C",
        "text": "SGW池"
      },
      {
        "label": "D",
        "text": "PGW池"
      }
    ],
    "a": "BC",
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



