FROM node:8.5.0

ENV PORT 80

EXPOSE 80

CMD ["node", "server.js"]