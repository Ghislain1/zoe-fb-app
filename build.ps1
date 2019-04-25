
# Build the app in prod mode and store it into docs folder for website.
ng.cmd   build --prod --output-path ./docs --base-href ./


# Remove unnecessery configuartion file
Remove-Item docs/assets/data/appConfig.json
Copy-Item docs/assets/data/appConfig-prod.json docs/assets/data/appConfig.json
Remove-Item docs/assets/data/appConfig-prod.json

