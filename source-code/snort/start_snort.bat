@echo off
title Snort IDS - Live Monitor
echo Starting Snort...
echo Logging to: C:\Users\mattr\Github\Matt-Fish-COMP3000-Computing-Project\source-code\backend\raw-logs
echo.

C:\Snort\bin\snort -i 5 -c C:\Snort\etc\snort.conf -l "C:\Users\mattr\Github\Matt-Fish-COMP3000-Computing-Project\source-code\backend\raw-logs" -A fast 

pause