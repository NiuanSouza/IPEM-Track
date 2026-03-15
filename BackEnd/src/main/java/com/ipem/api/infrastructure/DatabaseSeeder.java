package com.ipem.api.infrastructure.config;

// Spring Boot e Framework
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

// Segurança
import org.springframework.security.crypto.password.PasswordEncoder;
import com.ipem.api.modules.usuario.model.Usuario;
import com.ipem.api.modules.usuario.model.enums.Permissao;
import com.ipem.api.modules.usuario.repository.UsuarioRepository;

import lombok.RequiredArgsConstructor;
@Configuration
@RequiredArgsConstructor
public class DatabaseSeeder implements CommandLineRunner {

    private final UsuarioRepository repository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        if (repository.findById(11111).isEmpty()) {

            Usuario admin = new Usuario();
            admin.setId(11111);
            admin.setNome("admin");
            admin.setEmail("admin@ipem.com");
            admin.setPermissao(Permissao.ADMINISTRADOR);

            admin.setSenha(passwordEncoder.encode("admin"));

            repository.save(admin);
        }
    }
}