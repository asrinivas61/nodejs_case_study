# Import the base image
FROM mhart/alpine-node

# Create a working directory
WORKDIR /usr/src/app

# Copy package.json to the working directory
COPY package*.json ./

# Copy UI code into server public folder
COPY ./client/dist/* ./public/

# Install all the dependencies
RUN npm install

# Start the application
CMD npm start