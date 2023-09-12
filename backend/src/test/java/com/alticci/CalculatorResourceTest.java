package com.alticci;

import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;
import static io.restassured.RestAssured.given;

@QuarkusTest
public class CalculatorResourceTest {

    @Test
    public void testHelloEndpoint() {
        given()
            .pathParam("n", 123) // Replace 123 with the desired value for 'n'
        .when()
            .get("/alticci/{n}")
        .then()
            .statusCode(200);
    }
}
