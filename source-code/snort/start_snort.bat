@echo off
title Snort IDS - Live Monitor
echo Starting Snort...
echo Logging to: "C:\Users\Matthew\Github\Year3\COMP3000-Computing-Project\source-code\backend\raw-logs"
echo.

C:\Snort\bin\snort -i 5 -c C:\Snort\etc\snort.conf -l "C:\Users\Matthew\Github\Year3\COMP3000-Computing-Project\source-code\backend\raw-logs" -A fast 

pause