@echo off
echo Updating modpack...
git pull
powershell -c "Write-Host \"Modpack successfully updated!\" -ForegroundColor Green"
pause
