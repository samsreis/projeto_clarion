package com.clarion;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.security.Key;
import java.util.Date;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    UsuarioRepository repo;
    private static final Key KEY = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    @PostMapping("/register")
    public Usuario register(@RequestBody Usuario u) {
        return repo.save(u);
    }

    @PostMapping("/login")
    public java.util.Map<String, String> login(@RequestBody Usuario u) {
        Usuario user = repo.findByEmail(u.email).orElseThrow();
        if (!user.senha.equals(u.senha))
            throw new RuntimeException("Erro");
        String token = Jwts.builder().setSubject(user.id.toString()).signWith(KEY).compact();
        return java.util.Map.of("token", token);
    }

    public static Long validar(String token) {
        String id = Jwts.parserBuilder().setSigningKey(KEY).build().parseClaimsJws(token).getBody().getSubject();
        return Long.parseLong(id);
    }
}