git branch gh-pages
git checkout gh-pages
git merge master
npm run build
mv public public/.* .
rm -r src
rm -r public
git add . 
git commit -m "Publish"
git push --force --set-upstream origin gh-pages
git checkout master
git branch -d gh-pages
