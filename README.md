## About the Application

This is a Rest API microservice which aims to calculate and return the **$A_n$** term of the **Alticci Sequence**.


### Alticci sequence definition

The Alticci Sequence ($A_n$) is defined following these math rules:

$$
A_n =
  \begin{cases}
    \nexists           & \quad \text{if } n < 0\\
    0                  & \quad \text{if } n = 0\\
    1                  & \quad \text{if } n = 1\\
    1                  & \quad \text{if } n = 2\\
    A_{n-3} + A_{n-2}  & \quad \text{if } n > 2
  \end{cases}
$$

## Installation

Clone the repository:

```console
$ git clone https://github.com/TomasAlmeida8/Alticci
```

## How To Run (Docker)

Run the following commands in the terminal:

- Inside the `Alticci` folder, run:

```console
$ docker-compose up
```


Note:

- This process may take a significant amount of time.
- If you do not want to use the Docker method mentioned above, you can follow the alternative steps provided below.

## Prerequisites

To run the project, the following software must be installed on the system:

- [Node.js](https://nodejs.org/en/) (v18 or higher)
- [Java](https://www.oracle.com/java/) (v17)
- [Maven](https://maven.apache.org/) (v3.9.0 or higher)

## Requirements

Install requirements:

- Inside the `frontend` folder, run:

 ```console
 $ npm install
 ```

## How To Run

Run the following commands in two separate terminals:

1. Inside the `backend` folder, run:

```console
$ ./mvnw quarkus:dev
```

2. Inside the `frontend` folder, run:

```console
$ npm start
```

## Bookmarks

- Link to the [Web Application](http://localhost:3000/)
- Link to the [API Documentation](http://localhost:8080/q/swagger-ui#/)

Note:

- To view the API documentation, the backend must be running.