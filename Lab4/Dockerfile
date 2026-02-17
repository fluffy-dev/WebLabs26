FROM node:18-alpine

WORKDIR /usr/src/app

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose the port the app runs on
EXPOSE 4200

# Start the application
CMD ["ng", "serve", "--host", "0.0.0.0"]
