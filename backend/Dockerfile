# Use an official JDK image as the base image
FROM eclipse-temurin:17-jdk-jammy

# Set the working directory in the container
WORKDIR /app

# Copy the JAR file from the "target" directory to the container's working directory
COPY /target/alticci_calculator-backend-1.0.0-SNAPSHOT.jar backend.jar

# Expose the port the application will run on
EXPOSE 8080

# Define the command to start the Quarkus application
ENTRYPOINT ["java", "-jar", "backend.jar"]
