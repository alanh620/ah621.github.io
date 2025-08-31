# Deploy both Priced-calc and Priceless-Calc to GitHub Pages

Write-Host "Deploying Priced-calc..."
cd .\Priced-calc
npm install
npm run deploy

Write-Host "Deploying Priceless-Calc..."
cd ..\Priceless-Calc
npm install
npm run deploy

Write-Host "Both projects deployed!"