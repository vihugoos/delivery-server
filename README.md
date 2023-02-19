<div id="top"> </div> 

<!---- PROJECT LOGO ----> 
<div align="center">
  <h2 align="center"> 
    Delivery - Server API 
  </h2>
  
  <p align="center">
    An API for order delivery, developed with Node.js <br/> 
    Explore <a href="https://nodejs.org/en/docs/">Node.js</a> docs &#187; <br/> <br/>
    <a href="https://github.com/vihugoos/delivery-server/issues"> Report Bug </a> &nbsp;•&nbsp;
    <a href="https://github.com/vihugoos/delivery-server/issues"> Request Feature </a>
  </p>
</div>


<!---- TABLE OF CONTENTS ----> 
<details>
  <summary> Table of Contents </summary>
  <ol>
    <li>
      <a href="#about-the-project"> About The Project </a>
      <ul>
        <li><a href="#built-with"> Built With </a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started"> Getting Started </a>
      <ul>
        <li><a href="#prerequisites"> Prerequisites </a></li>
        <li><a href="#installation"> Installation </a></li>
        <li><a href="#usage"> Usage </a></li>
      </ul>
    </li>
    <li><a href="#contributing"> Contributing </a></li>
    <li><a href="#contact"> Contact </a></li>
  </ol>
</details>


<!---- THE PROJECT ---->
## About The Project 

<img src="https://user-images.githubusercontent.com/44311634/219909485-63ae9de9-31cc-4b3a-b02a-b68035ee9947.png" align="center" alt="Project Home Page">
An API for creating and delivering orders. The customer registers a new order, later a deliveryman takes over the delivery, after the completion, the deliveryman closes the order. 


### Built With 

<div style="display: inline_block">
    <!-- Icon Node.js --> 
    <a href="https://nodejs.org/en/"> 
      <img align="center" alt="Icon-Node.js" height="33" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"> 
    </a> &nbsp;
    <!-- Icon Yarn --> 
    <a href="https://yarnpkg.com/"> 
      <img align="center" alt="Icon-Yarn" height="33" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg"> 
    </a> &nbsp;
    <!-- Icon TypeScript --> 
    <a href="https://www.typescriptlang.org/"> 
      <img align="center" alt="Icon-TypeScript" height="33" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"> 
    </a> &nbsp;
    <!-- Icon Prisma -->
    <a href="https://www.prisma.io/"> 
      <img align="center" alt="Icon-TypeORM" height="32" src="https://user-images.githubusercontent.com/44311634/178335052-08bb4b29-c4da-4100-ae71-8b65cf6cd581.png"> 
    </a> &nbsp;
    <!-- Icon Express --> 
    <a href="https://expressjs.com/"> 
      <img align="center" alt="Icon-Express" height="33" src="https://user-images.githubusercontent.com/44311634/178337147-61b1e696-b4ef-4f78-8151-c3fb2597050a.png"> 
    </a> &nbsp;
    <!-- Icon PostgreSQL --> 
    <a href="https://www.postgresql.org/"> 
      <img align="center" alt="Icon-PostgreSQL" height="35" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg"> 
    </a> 
    <!-- Icon Docker -->
    <a href="https://www.docker.com/"> 
      <img align="center" alt="Icon-Docker" height="53" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"> 
    </a> 
</div>

<br/>
<br/>


<!---- GETTING STARTED ----> 
## Getting Started

To get started, you need to have <strong>Node.js 18+</strong> installed on your machine, for more information visit <a href="https://nodejs.org/en/download/"> Node.js Downloads</a>. You will also need to have <strong>Docker</strong> installed, for more information visit <a href="https://docs.docker.com/engine/install/">Docker Engine Install</a>. 

<strong>Obs:</strong> This guide will only serve to run the project locally (development environment), initially based on linux systems.


### Prerequisites 

Other than node.js and docker installed, no prerequisites are needed to install the application.


### Installation 

1. Clone the repo 
   ```bash
   git clone https://github.com/vihugoos/delivery-server.git 
   ```
2. Inside the project root directory install all project dependencies 
   ```cmd
   yarn install
   ```
3. Create an `.env` file with environment variables 
   
   <strong>WARNING:</strong> Credentials are for testing purposes only, please change them in the future.
   
   ```bash
   cat > .env << EOF
   DATABASE_URL="postgresql://postgres:docker@localhost:5432/delivery?schema=public"
   
   JWT_CLIENT_SECRET_TOKEN=66a0ce34cce5548d49d01c8ebb1b132c
   JWT_DELIVERYMAN_SECRET_TOKEN=87a235508f1ee4d5e9eabb19c7c6693 
   EOF
   ```
4. Create a postgres container docker
   ```cmd
   docker run --name deliveries -e POSTGRES_DB=delivery -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres 
   ```
4. Run the migrate
   ```cmd
   yarn prisma migrate dev
   ```


<!---- USAGE EXAMPLES ----> 
## Usage

With the installation complete, we can start the project.

* Starting the project 
   ```bash
   yarn run dev  
   ```

<br/> <br/> 


<!---- CONTRIBUTING ---->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
<br/> 


<!---- CONTACT ---->
## Contact

Developer @vihugoos - victorhugoos@live.com  

<p align="right"><a href="#top"> &#129045; back to top </a></p> 
