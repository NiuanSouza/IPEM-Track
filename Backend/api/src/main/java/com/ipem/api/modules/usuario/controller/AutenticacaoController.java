package com.ipem.api.modules.usuario.controller;

import com.ipem.api.infrastructure.security.TokenService;
import com.ipem.api.modules.usuario.dto.AutenticacaoDTO;
import com.ipem.api.modules.usuario.dto.LoginResponseDTO;
import com.ipem.api.modules.usuario.model.Usuario;
import com.ipem.api.modules.usuario.repository.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AutenticacaoController {

    private final UsuarioRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final TokenService tokenService;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody AutenticacaoDTO data) {
        var usuario = repository.findByEmail(data.email())
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        if (passwordEncoder.matches(data.senha(), usuario.getSenha())) {
            var token = tokenService.gerarToken(usuario);
            return ResponseEntity.ok(new LoginResponseDTO(token));
        }

        return ResponseEntity.status(403).body("Credenciais inválidas");
    }
}