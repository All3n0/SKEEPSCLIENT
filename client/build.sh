
set -o errexit

npm ci
npm install 
npm install -g serve


npm run build

echo "Build completed successfully"