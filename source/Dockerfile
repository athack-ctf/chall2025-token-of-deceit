# Use a lightweight Node.js image
FROM node:14-alpine

# Create a non-root user
RUN adduser -D -h /home/chall chall

# Set working directory
WORKDIR /home/chall/

# Copy package.json and package-lock.json from the correct location
COPY chall/package*.json ./

# Install dependencies BEFORE switching users
RUN npm install

# Copy the rest of the application
COPY chall . 

# Ensure correct ownership
RUN chown -R chall:chall /home/chall/

# Switch to non-root user
USER chall

# Expose the application port
EXPOSE 2025

# Start the application
CMD ["npm", "start"]
