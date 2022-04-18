package kz.sabyrzhan.javatotpdemo;

import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.RequestPredicates;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

@Component
public class RoutesConfiguration {
    private final FunctionsConfiguration functions;
    public RoutesConfiguration(FunctionsConfiguration functions) {
        this.functions = functions;
    }

    @Bean
    public RouterFunction<ServerResponse> routers() {
        return RouterFunctions
                .route(RequestPredicates.GET("/api/totp-login"), functions::totpLogin)
                .andRoute(RequestPredicates.POST("/api/totp-validate"), functions::validateTotp);
    }
}
