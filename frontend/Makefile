deploy:
	cd client/ && $(MAKE) update
	cd client/ && $(MAKE) build
	gcloud app deploy --project=codesmary-website --quiet --version v1

update:
	rm -rf node_modules
	npm install

run:
	node server.js