# buffer_tostring_slow

Example of running program in browser

    converting: toString: 78.86376953125ms
    converting: TextDecoder: 84.572265625ms

Example of running program in node

    convert: toString: 0.802ms
    convert: TextDecoder: 3.254ms


I initially made this repo because I thought TextDecoder was faster but I am unable to reproduce this effect

In either case, browser is slower by a substantial amount
