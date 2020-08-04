package br.com.glocken;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class Run {

    public static void main(String[] args) throws Exception {
        SpringApplication.run(Run.class, args);
    }
}
