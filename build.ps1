ng.cmd build --prod
Remove-Item dist/assets/data/appConfig.json
Copy-Item dist/assets/data/appConfig-prod.json dist/assets/data/appConfig.json
Remove-Item dist/assets/data/appConfig-prod.json
