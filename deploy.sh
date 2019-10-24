#!/bin/bash
if [ "$TRAVIS_BRANCH" == "develop" ]; then
  // deploy public folder to digitalocean droplet
  eval "$(ssh-agent -s)"
  chmod 600 deploy-key
  ssh-add deploy-key
  cd $TRAVIS_BUILD_DIR/public
  scp -r * deploy@gendercomics.net:/var/gendercomics/website/public
fi
