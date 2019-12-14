[
    {
        "id": "a4cd5178.c85a3",
        "type": "inject",
        "z": "bc31ce2c.e71728",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "300",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "x": 150,
        "y": 180,
        "wires": [
            [
                "fd4c620a.f817f"
            ]
        ]
    },
    {
        "id": "fd4c620a.f817f",
        "type": "exec",
        "z": "bc31ce2c.e71728",
        "command": "/opt/vc/bin/vcgencmd",
        "addpay": false,
        "append": "measure_temp",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "CPU_temp",
        "x": 310,
        "y": 180,
        "wires": [
            [
                "9ea48179.2a0b4",
                "92563e08.d1ea8"
            ],
            [],
            []
        ]
    },
    {
        "id": "92563e08.d1ea8",
        "type": "function",
        "z": "bc31ce2c.e71728",
        "name": "extract_temp",
        "func": "len=msg.payload.length;\nt=parseFloat(msg.payload.substr(5,len-3-5));\nmsg = {temp_cpu:t};\nmytime = new Date().toISOString();\nreturn {payload:msg, time: mytime};",
        "outputs": 1,
        "noerr": 0,
        "x": 520,
        "y": 220,
        "wires": [
            [
                "9ea48179.2a0b4",
                "6d3392b.c0e5dec"
            ]
        ]
    },
    {
        "id": "9ea48179.2a0b4",
        "type": "debug",
        "z": "bc31ce2c.e71728",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 630,
        "y": 80,
        "wires": []
    },
    {
        "id": "6d3392b.c0e5dec",
        "type": "emoncms",
        "z": "bc31ce2c.e71728",
        "name": "Emoncms Push",
        "emonServer": "f0df32aa.ed7208",
        "nodegroup": "emonpi",
        "datatype": "fulljson",
        "x": 600,
        "y": 300,
        "wires": []
    },
    {
        "id": "f0df32aa.ed7208",
        "type": "emoncms-server",
        "z": "",
        "server": "http://localhost",
        "name": "EmonPI"
    }
]
