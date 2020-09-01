git branch gh-pages
git checout gh-pages
git merge master
npm run build
cp -r public /
git add . 
git commit -m "Publish"
git push --force
git checkout master
git branch -d gh-pages
