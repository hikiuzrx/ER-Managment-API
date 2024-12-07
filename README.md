# ER Platform API (RESTful) - Built with TypeScript and NestJS
#### The ER Platform API provides a set of endpoints for managing partnerships, event contributions, and generating key statistics. It is built using TypeScript and NestJS, ensuring type safety, maintainability, and scalability. The API is designed to serve the External Relations (ER) Platform, allowing the External Relations department to efficiently manage and track their partnerships and contributions to various events.
## Key Features : 
### Partner Management: 
- Create, Update, Delete Partners: Manage partner profiles, including details such as name, location, contributions, and communication status for each event.
- Partner Profile Details: Track specific contributions (e.g., financial, media) and associate partners with different events.
### Event Contributions:
- Associate Partners with Events: Link partners to specific events, recording the type of contribution (financial, media, or other).
- Track Financial Contributions: For financial contributions, store and retrieve amounts associated with each partner and event
### Statistics: 
- Event-Based Statistics: Display a list of all partners for each event along with their financial contribution percentage, shown via a pie chart.
- Categorize Partners: Automatically categorize partners as Gold, Silver, or Bronze based on their contribution levels to the event.
## Tech Stack : 
- TypeScript
- PostgeSQL
- Nest js
- Prisma ORM
- JWT
  ### Installation :
  ``` bash
  git clone https://github.com/hikiuzrx/ER-Managment-API.git
  
  cd ER-Managment-API.git
  
  npm install
  
  npm run start
  
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->


