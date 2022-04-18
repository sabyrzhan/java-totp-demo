package kz.sabyrzhan.javatotpdemo;

import dev.samstevens.totp.code.CodeVerifier;
import dev.samstevens.totp.secret.DefaultSecretGenerator;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import org.springframework.web.server.ResponseStatusException;
import reactor.core.publisher.Mono;

import java.util.Map;

@Component
public record FunctionsConfiguration(CodeVerifier totpVerifier) {
    public Mono<ServerResponse> totpLogin(ServerRequest request) {
        var totpSecret = generateOtpSecret();
        var totpUrl = createOtpUrl(totpSecret);
        var login = new LoginModel(totpUrl, totpSecret);
        return ServerResponse.ok().body(Mono.just(login), LoginModel.class);
    }

    public Mono<ServerResponse> validateTotp(ServerRequest request) {
        return Mono
                .defer(() -> request.bodyToMono(ValidateModel.class))
                .flatMap(validateModel -> {
                    if (!totpVerifier.isValidCode(validateModel.otpSecret(), validateModel.otpCode)) {
                        return ServerResponse.status(HttpStatus.FORBIDDEN).body(Mono.error(new ResponseStatusException(HttpStatus.FORBIDDEN, "Invalid code")), Map.class);
                    }

                    return ServerResponse.ok().body(Map.of("status", "ok"), Map.class);
                });
    }

    private String generateOtpSecret() {
        return new DefaultSecretGenerator().generate();
    }

    private String createOtpUrl(String otpSecret) {
        String appName = "TOTPDemoApp";
        return String.format("otpauth://totp/%s?secret=%s&issuer=%s", appName, otpSecret, appName);
    }

    public record LoginModel(String otpUrl, String otpSecret) {
    }

    public record ValidateModel(String otpSecret, String otpCode) {
    }
}
