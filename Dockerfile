FROM node:22-alpine
WORKDIR /app
COPY --chown=node:node package.json ./
COPY --chown=node:node onboarding-server.js ./
USER node
ENV NODE_ENV=production
ENV PORT=3002
EXPOSE 3002
CMD ["node", "onboarding-server.js"]
