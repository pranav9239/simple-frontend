FROM nginx:alpine

# Remove default nginx static content
RUN rm -rf /usr/share/nginx/html/*

# Copy frontend assets (public/ → nginx html root)
COPY public/ /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# nginx runs in foreground by default
CMD ["nginx", "-g", "daemon off;"]
