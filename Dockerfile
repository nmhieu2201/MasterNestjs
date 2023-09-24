# Use node:18.12.1-bullseye-slim as the base image
FROM node:18.12.1-bullseye-slim

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm ci

# Copy the rest of the project files
COPY . .

# Expose port 3333
EXPOSE 3333

# Set the command to run the project
CMD [ "npm", "start" ]