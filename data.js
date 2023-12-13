var APP_DATA = {
  "scenes": [
    {
      "id": "0-road-beginning",
      "name": "Road Beginning",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.10874670388022345,
        "pitch": 0.6361771530865727,
        "fov": 1.352817585576841
      },
      "linkHotspots": [
        {
          "yaw": 0.0878333829747504,
          "pitch": 0.22749046590194055,
          "rotation": 0,
          "target": "1-creek-crossing"
        },
        {
          "yaw": 0.712410352217308,
          "pitch": -0.22152446886474841,
          "rotation": 0,
          "target": "2-overall-view"
        },
        {
          "yaw": 0.8040430140102579,
          "pitch": 0.21716549550446018,
          "rotation": 0,
          "target": "3-point-removal"
        },
        {
          "yaw": 1.2008756199453146,
          "pitch": 0.1319204953931159,
          "rotation": 0,
          "target": "4-first-bench"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-creek-crossing",
      "name": "Creek Crossing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.15305194979027092,
        "pitch": 1.014151711347477,
        "fov": 1.352817585576841
      },
      "linkHotspots": [
        {
          "yaw": -2.1514308818378396,
          "pitch": -0.06587036450907391,
          "rotation": 0,
          "target": "0-road-beginning"
        },
        {
          "yaw": 3.0746125892682326,
          "pitch": 0.15774947570438513,
          "rotation": 0,
          "target": "3-point-removal"
        },
        {
          "yaw": 2.8713281811743627,
          "pitch": 0.004523810431676267,
          "rotation": 0,
          "target": "4-first-bench"
        },
        {
          "yaw": -2.706046609243476,
          "pitch": -0.3015261409063914,
          "rotation": 0,
          "target": "2-overall-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-overall-view",
      "name": "Overall View",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.26851219261452286,
        "pitch": 1.0777633876794734,
        "fov": 1.352817585576841
      },
      "linkHotspots": [
        {
          "yaw": 0.12603191170904537,
          "pitch": 0.8597874344146668,
          "rotation": 0,
          "target": "1-creek-crossing"
        },
        {
          "yaw": -1.740058330091168,
          "pitch": 0.545590140125638,
          "rotation": 0,
          "target": "0-road-beginning"
        },
        {
          "yaw": 1.3369193513481772,
          "pitch": 0.871421098179189,
          "rotation": 0,
          "target": "3-point-removal"
        },
        {
          "yaw": 2.1754844865039784,
          "pitch": 0.45653060026605274,
          "rotation": 0,
          "target": "4-first-bench"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-point-removal",
      "name": "Point Removal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.1409261860253075,
        "pitch": 1.435448171890747,
        "fov": 0.9146366243262366
      },
      "linkHotspots": [
        {
          "yaw": 0.5432108265755531,
          "pitch": 0.42083986982918553,
          "rotation": 0,
          "target": "4-first-bench"
        },
        {
          "yaw": -2.123995722796522,
          "pitch": 0.3993552486536842,
          "rotation": 0,
          "target": "1-creek-crossing"
        },
        {
          "yaw": 2.7571288071249427,
          "pitch": 0.2588345003070618,
          "rotation": 0,
          "target": "0-road-beginning"
        },
        {
          "yaw": 2.5258662919211297,
          "pitch": -0.06352461916856811,
          "rotation": 0,
          "target": "2-overall-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-first-bench",
      "name": "First Bench",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.26985509250954287,
        "pitch": 0.8569715825645687,
        "fov": 1.352817585576841
      },
      "linkHotspots": [
        {
          "yaw": -0.5549891065426138,
          "pitch": 0.8544138178215412,
          "rotation": 0,
          "target": "3-point-removal"
        },
        {
          "yaw": -0.14049818209682918,
          "pitch": 0.39098015475015124,
          "rotation": 0,
          "target": "1-creek-crossing"
        },
        {
          "yaw": -0.9931170902332997,
          "pitch": 0.20813590574603325,
          "rotation": 0,
          "target": "0-road-beginning"
        },
        {
          "yaw": -0.7374649161083777,
          "pitch": -0.024052508485699065,
          "rotation": 0,
          "target": "2-overall-view"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Barker's Ridge IBR 5",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
