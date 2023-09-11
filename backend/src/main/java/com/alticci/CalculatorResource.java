package com.alticci;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import java.math.BigInteger;
import java.util.HashMap;
import java.util.Map;

@Path("/alticci")
public class CalculatorResource {
    private static final int CACHE_SIZE = 1000;
    private final Map<Integer, BigInteger> cache = new HashMap<>();

    public CalculatorResource() {
        // Initialize the cache with values for a(0), a(1), and a(2)
        cache.put(0, BigInteger.ZERO);
        cache.put(1, BigInteger.ONE);
        cache.put(2, BigInteger.ONE);
    }

    @GET
    @Path("/{n}")
    public String calculate(@PathParam("n") int n) {
        if (n < 0) {
            return BigInteger.valueOf(-1).toString(); // Handle invalid input
        }

        // Check if the value is already in the cache
        if (cache.containsKey(n)) {
            return cache.get(n).toString();
        }
        
        // Initialize values for a(0), a(1), and a(2)
        BigInteger aMinus3 = BigInteger.ZERO;
        BigInteger aMinus2 = BigInteger.ONE;
        BigInteger aMinus1 = BigInteger.ONE;

        // Calculate a(n) iteratively using BigInteger
        BigInteger result = BigInteger.ZERO;
        for (int i = 3; i <= n; i++) {
            // Calculate a(i) = a(i-3) + a(i-2)
            result = aMinus3.add(aMinus2);

            // Update values for the next iteration
            aMinus3 = aMinus2;
            aMinus2 = aMinus1;
            aMinus1 = result;

            // Put the result into the cache
            cache.put(i, result);
        }

        return result.toString();
    }
}
