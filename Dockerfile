FROM ubuntu:latest

RUN apt-get update
RUN apt-get install -y git
RUN apt-get install -y nodejs
RUN apt-get install -y npm

RUN git clone https://github.com/Pyother/AreaExplorer.git

WORKDIR /AreaExplorer

RUN npm install -f react
RUN npm install -f react-scripts

EXPOSE 3000

CMD [ "npm", "start" ]