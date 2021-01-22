FROM cirrusci/flutter

RUN chmod -R a+w $FLUTTER_HOME

RUN apt-get update && apt-get install -y \
  npm \
  && rm -rf /var/lib/apt/lists/*

RUN npm install -g ws