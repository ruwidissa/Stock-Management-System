# Stock Management System

Stock Management System for a Clothing store front-end developed with React and Antd and backend developed with Spring boot Java

## Getting Started

Follow the steps below to set up and run the application on your local machine.

### 1. Clone the Repository

### 2. Savee the Docker Images

docker save -o stockmnback.tar ghcr.io/ruwidissa/stock-management-system/stockmnback:latest
docker save -o stockmnfront.dev.tar ghcr.io/ruwidissa/stock-management-system/stockmnfront.dev:latest
docker save -o mysql.tar mysql:latest

### 3. Load the Docker Images

docker load -i /path/to/destination/stockmnback.tar
docker load -i /path/to/destination/stockmnfront.dev.tar
docker load -i /path/to/destination/mysql.tar

### 4. Run Docker Compose
Make sure to have the docker-compose.yml file on the machine. Then, start the services using Docker Compose.
docker-compose up

### Directory structure should be like this.
`
`
