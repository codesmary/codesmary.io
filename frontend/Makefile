deploy:
	cd client/ && $(MAKE) update
	cd client/ && $(MAKE) build
	gcloud app deploy --project=codesmary-website --quiet --version v1

run:
	cd client/ && $(MAKE) run