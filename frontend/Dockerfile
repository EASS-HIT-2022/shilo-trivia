# get the base node image
FROM node:alpine as builder

# set the working dir for container
WORKDIR /frontend

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# copy the json file first
# install app dependencies
COPY ./package.json /frontend
COPY ./package-lock.json /frontend
RUN npm install
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]